"use strict";

const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");
const { createPublisher } = require("./publish");

const root = path.resolve(__dirname, "..");
const projectFile = path.join(root, "projects.js");
const uploadDir = path.join(root, "media", "uploads");
const port = Number(process.env.PORT || 4177);
const host = `127.0.0.1:${port}`;
const origin = `http://${host}`;
const maxUpload = 20 * 1024 * 1024;
let saving = false;
let publishing = false;
const publisher = createPublisher(root);
const mime = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".png": "image/png", ".gif": "image/gif",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".pdf": "application/pdf",
  ".mp4": "video/mp4", ".webm": "video/webm", ".mp3": "audio/mpeg", ".wav": "audio/wav", ".ogg": "audio/ogg"
};

function respond(res, status, data, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
  res.end(type.startsWith("application/json") ? JSON.stringify(data) : data);
}

function hash(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

async function readProjects() {
  const source = await fs.readFile(projectFile, "utf8");
  const data = vm.runInNewContext(`${source}\n;JSON.stringify(projects)`, Object.create(null), { timeout: 1000 });
  const projects = JSON.parse(data);
  if (!Array.isArray(projects)) throw new Error("projects.js must contain a projects array.");
  return { projects, revision: hash(source) };
}

async function readBody(req, limit) {
  const chunks = [];
  let length = 0;
  for await (const chunk of req) {
    length += chunk.length;
    if (length > limit) {
      const error = new Error("File or request is too large.");
      error.status = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

function validProjects(projects) {
  return Array.isArray(projects) && projects.every((project) =>
    project && typeof project === "object" && typeof project.title === "string" && project.title.trim() &&
    ["category", "year", "summary", "description", "cover", "coverAlt"].every((key) => typeof project[key] === "string") &&
    Array.isArray(project.tools) && project.tools.every((tool) => typeof tool === "string") &&
    Array.isArray(project.media) && project.media.every((item) => item && ["image", "video", "audio"].includes(item.type) && typeof item.src === "string" && (item.credit === undefined || typeof item.credit === "string")) &&
    ["links", "files"].every((key) => Array.isArray(project[key]) && project[key].every((item) => item && typeof item.label === "string" && typeof item.url === "string"))
  );
}

async function serveFile(res, filename) {
  try {
    const data = await fs.readFile(filename);
    respond(res, 200, data, mime[path.extname(filename).toLowerCase()] || "application/octet-stream");
  } catch (error) {
    if (error.code === "ENOENT") return respond(res, 404, { error: "File not found." });
    throw error;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.headers.host !== host) return respond(res, 403, { error: "Invalid host." });
    const url = new URL(req.url, origin);
    if (req.method === "GET" && url.pathname === "/api/projects") return respond(res, 200, await readProjects());
    if (req.method === "GET" && url.pathname === "/api/publish") {
      if (publishing || saving) return respond(res, 409, { error: "Wait for the current operation to finish." });
      return respond(res, 200, await publisher.inspect());
    }
    if (req.method === "POST") {
      if (req.headers.origin !== origin || req.headers["x-portfolio-editor"] !== "1") {
        return respond(res, 403, { error: "Requests must come from the local editor." });
      }
      if (publishing) return respond(res, 409, { error: "Publishing is in progress. Try again when it finishes." });
      if (url.pathname === "/api/publish") {
        if (saving) return respond(res, 409, { error: "Wait for the current save to finish." });
        publishing = true;
        try {
          const body = JSON.parse((await readBody(req, 4096)).toString("utf8"));
          if (typeof body.snapshot !== "string") return respond(res, 400, { error: "Review changes before publishing." });
          return respond(res, 200, await publisher.publish(body.snapshot));
        } finally {
          publishing = false;
        }
      }
      if (url.pathname === "/api/projects") {
        if (saving) return respond(res, 409, { error: "Another save is in progress. Try again." });
        saving = true;
        try {
          const body = JSON.parse((await readBody(req, 2 * 1024 * 1024)).toString("utf8"));
          if (!validProjects(body.projects)) return respond(res, 400, { error: "Project data is incomplete or invalid." });
          const current = await readProjects();
          if (body.revision !== current.revision) return respond(res, 409, { error: "Projects changed on disk. Reload the editor before saving so you don't overwrite those changes." });
          const source = `// Updated by the local portfolio editor. See README.md for help.\nconst projects = ${JSON.stringify(body.projects, null, 2)};\n`;
          const temporary = `${projectFile}.${crypto.randomUUID()}.tmp`;
          try {
            await fs.writeFile(temporary, source, { flag: "wx" });
            await fs.rename(temporary, projectFile);
          } finally {
            await fs.rm(temporary, { force: true });
          }
          return respond(res, 200, { revision: hash(source) });
        } finally {
          saving = false;
        }
      }
      if (url.pathname === "/api/upload") {
        const name = url.searchParams.get("name") || "";
        const extension = path.extname(name).toLowerCase();
        if (!/^\.[a-z0-9]{1,10}$/.test(extension)) return respond(res, 400, { error: "Choose a file with a valid extension." });
        const data = await readBody(req, maxUpload);
        if (!data.length) return respond(res, 400, { error: "The selected file is empty." });
        const basename = path.basename(name, path.extname(name)).replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "file";
        const filename = `${basename}-${crypto.randomUUID().slice(0, 8)}${extension}`;
        await fs.mkdir(uploadDir, { recursive: true });
        await fs.writeFile(path.join(uploadDir, filename), data, { flag: "wx" });
        return respond(res, 201, { path: `media/uploads/${filename}` });
      }
      return respond(res, 404, { error: "Not found." });
    }
    if (req.method !== "GET") return respond(res, 405, { error: "Method not allowed." });
    const fixed = {
      "/": path.join(__dirname, "index.html"),
      "/editor.css": path.join(__dirname, "editor.css"),
      "/editor.js": path.join(__dirname, "editor.js"),
      "/preview": path.join(root, "index.html"),
      "/styles.css": path.join(root, "styles.css"),
      "/app.js": path.join(root, "app.js"),
      "/projects.js": projectFile
    };
    if (fixed[url.pathname]) return await serveFile(res, fixed[url.pathname]);
    const publicFolder = ["/media/", "/files/"].find((folder) => url.pathname.startsWith(folder));
    if (publicFolder) {
      const relative = decodeURIComponent(url.pathname.slice(publicFolder.length));
      const publicRoot = path.join(root, publicFolder.slice(1, -1));
      const filename = path.resolve(publicRoot, relative);
      if (!filename.startsWith(publicRoot + path.sep)) return respond(res, 403, { error: "Invalid path." });
      return await serveFile(res, filename);
    }
    return respond(res, 404, { error: "Not found." });
  } catch (error) {
    console.error(error);
    if (!res.headersSent) respond(res, error.status || 500, { error: error.status ? error.message : `Unable to complete the request: ${error.message}` });
  }
});

server.listen(port, "127.0.0.1", () => console.log(`Portfolio editor: ${origin}\nPress Ctrl+C to stop.`));
