"use strict";

const form = document.querySelector("#project-form");
const status = document.querySelector("#status");
const list = document.querySelector("#project-list");
let projects = [];
let revision = "";
let selected = -1;
let dirty = false;
let busy = false;
let publishReview = null;
const publishDialog = document.querySelector("#publish-dialog");
const publishButton = document.querySelector("#publish");

function setBusy(value) {
  busy = value;
  form.querySelector('button[type="submit"]').disabled = value;
  publishButton.disabled = value;
  form.inert = value;
}

function message(text, isError = false) {
  status.textContent = text;
  status.classList.toggle("error", isError);
}

async function request(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || `Request failed (${response.status}).`);
  return data;
}

function blankProject() {
  return { title: "", category: "", year: "", summary: "", description: "", cover: "", coverAlt: "", media: [], tools: [], links: [], files: [] };
}

function confirmDiscard() {
  return !dirty || confirm("Discard unsaved changes to this project?");
}

function renderList() {
  list.replaceChildren();
  document.querySelector("#count").textContent = String(projects.length).padStart(2, "0");
  projects.forEach((project, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `project-select${selected === index ? " active" : ""}`;
    button.textContent = project.title;
    button.addEventListener("click", () => {
      if (busy || (selected === index && !dirty) || !confirmDiscard()) return;
      openProject(index);
    });
    list.append(button);
  });
}

function field(name) {
  return form.elements.namedItem(name);
}

function rowInput(labelText, key, value, options = {}) {
  const label = document.createElement("label");
  if (options.wide) label.className = "wide";
  label.append(document.createTextNode(labelText));
  const input = document.createElement("input");
  input.dataset.key = key;
  input.value = value || "";
  if (options.placeholder) input.placeholder = options.placeholder;
  label.append(input);
  return label;
}

function addUpload(container, target, accept) {
  const label = document.createElement("label");
  label.className = "upload";
  label.append(document.createTextNode("Upload a file"));
  const input = document.createElement("input");
  input.type = "file";
  if (accept) input.accept = accept;
  input.addEventListener("change", async () => {
    if (!input.files.length) return;
    try {
      const path = await upload(input.files[0]);
      target.value = path;
      dirty = true;
      message("File copied into the website folder. Save the project to use it; publish to make it live.");
    } catch (error) {
      message(error.message, true);
    } finally {
      input.value = "";
    }
  });
  label.append(input);
  container.append(label);
}

async function upload(file) {
  if (file.size > 20 * 1024 * 1024) throw new Error("Files must be 20 MB or smaller. Use a video hosting link for larger videos.");
  if (busy) throw new Error("Wait for the current upload or save to finish.");
  setBusy(true);
  message(`Uploading ${file.name} locally…`);
  try {
    const result = await request(`/api/upload?name=${encodeURIComponent(file.name)}`, {
      method: "POST",
      headers: { "Content-Type": "application/octet-stream", "X-Portfolio-Editor": "1" },
      body: file
    });
    return result.path;
  } finally {
    setBusy(false);
  }
}

function addRow(kind, item = {}) {
  const row = document.createElement("div");
  row.className = "row";
  const top = document.createElement("div");
  top.className = "row-top";
  const heading = document.createElement("span");
  heading.textContent = kind === "media" ? "Media item" : kind === "links" ? "Link" : "File";
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "remove";
  remove.textContent = "Remove";
  remove.addEventListener("click", () => { row.remove(); dirty = true; });
  top.append(heading, remove);
  const fields = document.createElement("div");
  fields.className = "fields";
  if (kind === "media") {
    const label = document.createElement("label");
    label.textContent = "Type";
    const select = document.createElement("select");
    select.dataset.key = "type";
    for (const [value, text] of [["image", "Image"], ["video", "Video"]]) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = text;
      select.append(option);
    }
    select.value = item.type || "image";
    label.append(select);
    fields.append(label, rowInput("Image description or video title", "description", item.type === "video" ? item.title : item.alt), rowInput("URL or path", "src", item.src, { wide: true }));
    // Keep an existing poster when editing an entry.
    row.dataset.poster = item.poster || "";
    row.dataset.extra = JSON.stringify(item);
  } else {
    fields.append(rowInput("Label", "label", item.label), rowInput("URL or path", "url", item.url));
    row.dataset.extra = JSON.stringify(item);
  }
  row.append(top, fields);
  if (kind !== "links") addUpload(row, fields.querySelector(`[data-key="${kind === "media" ? "src" : "url"}"]`), kind === "media" ? "image/*,video/*" : "");
  document.querySelector(`#${kind}-list`).append(row);
}

function openProject(index) {
  selected = index;
  const project = index < 0 ? blankProject() : projects[index];
  form.hidden = false;
  document.querySelector("#no-selection").hidden = true;
  document.querySelector("#form-title").textContent = index < 0 ? "New project" : "Edit project";
  document.querySelector("#delete-project").hidden = index < 0;
  for (const name of ["title", "category", "year", "summary", "description", "cover", "coverAlt"]) field(name).value = project[name] || "";
  field("tools").value = (project.tools || []).join(", ");
  for (const kind of ["media", "links", "files"]) {
    document.querySelector(`#${kind}-list`).replaceChildren();
    (project[kind] || []).forEach((item) => addRow(kind, item));
  }
  dirty = false;
  renderList();
  message("");
}

function readRows(kind) {
  return [...document.querySelectorAll(`#${kind}-list .row`)].map((row) => {
    const result = JSON.parse(row.dataset.extra || "{}");
    for (const input of row.querySelectorAll("[data-key]")) result[input.dataset.key] = input.value.trim();
    if (kind === "media") {
      if (result.type === "image") {
        result.alt = result.description;
        delete result.title;
        delete result.poster;
      } else {
        result.title = result.description;
        delete result.alt;
        if (row.dataset.poster) result.poster = row.dataset.poster;
      }
      delete result.description;
    }
    return result;
  });
}

function collectProject() {
  const project = selected < 0 ? blankProject() : { ...projects[selected] };
  for (const name of ["title", "category", "year", "summary", "description", "cover", "coverAlt"]) project[name] = field(name).value.trim();
  project.tools = field("tools").value.split(",").map((tool) => tool.trim()).filter(Boolean);
  for (const kind of ["media", "links", "files"]) project[kind] = readRows(kind);
  if (project.media.some((item) => !item.src)) throw new Error("Each media item needs a URL or uploaded file. Remove any empty rows.");
  if ([...project.links, ...project.files].some((item) => !item.label || !item.url)) throw new Error("Each link and file needs both a label and a URL or uploaded file.");
  return project;
}

async function save(next) {
  setBusy(true);
  try {
    const result = await request("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Portfolio-Editor": "1" },
      body: JSON.stringify({ projects: next, revision })
    });
    projects = next;
    revision = result.revision;
    dirty = false;
  } finally {
    setBusy(false);
  }
}

document.querySelector("#new-project").addEventListener("click", () => {
  if (!busy && confirmDiscard()) openProject(-1);
});
form.addEventListener("input", () => { dirty = true; });
form.addEventListener("change", () => { dirty = true; });
for (const kind of ["media", "links", "files"]) {
  document.querySelector(`#add-${kind === "links" ? "link" : kind === "files" ? "file" : kind}`).addEventListener("click", () => {
    addRow(kind);
    dirty = true;
  });
}
document.querySelector("#cover-upload").addEventListener("change", async (event) => {
  const input = event.target;
  if (!input.files.length) return;
  try {
    field("cover").value = await upload(input.files[0]);
    dirty = true;
    message("Cover image copied into the website folder. Save the project to use it; publish to make it live.");
  } catch (error) {
    message(error.message, true);
  } finally {
    input.value = "";
  }
});
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (busy) return;
  try {
    const project = collectProject();
    const next = projects.slice();
    const index = selected < 0 ? next.length : selected;
    next[index] = project;
    await save(next);
    openProject(index);
    message("Project saved on this computer. Push your changes to GitHub to publish.");
  } catch (error) {
    message(error.message, true);
  }
});
document.querySelector("#delete-project").addEventListener("click", async () => {
  if (selected < 0 || busy || !confirm(`Delete "${projects[selected].title}"? This saves the deletion locally. Uploaded files are not deleted.`)) return;
  try {
    const next = projects.filter((_, index) => index !== selected);
    await save(next);
    selected = -1;
    form.hidden = true;
    document.querySelector("#no-selection").hidden = false;
    renderList();
    message("Project deleted locally. Push your changes to GitHub to publish.");
  } catch (error) {
    message(error.message, true);
  }
});
window.addEventListener("beforeunload", (event) => {
  if (dirty) event.preventDefault();
});

function showReviewList(id, entries, emptyText) {
  const list = document.querySelector(id);
  list.replaceChildren();
  for (const entry of entries.length ? entries : [emptyText]) {
    const item = document.createElement("li");
    item.textContent = entry;
    list.append(item);
  }
}

publishButton.addEventListener("click", async () => {
  if (busy) return;
  if (dirty) {
    message("Save or discard your unsaved project changes before publishing.", true);
    return;
  }
  setBusy(true);
  message("Checking the GitHub publishing setup…");
  try {
    publishReview = await request("/api/publish");
    if (!publishReview.files.length && !publishReview.commits.length) {
      message("There are no saved changes or unpushed commits to publish.");
      return;
    }
    document.querySelector("#publish-branch").textContent = publishReview.branch;
    document.querySelector("#publish-remote").textContent = publishReview.remote;
    showReviewList("#publish-files", publishReview.files, "No new project files to commit.");
    showReviewList("#publish-commits", publishReview.commits, "No unpushed commits.");
    showReviewList("#publish-committed-files", publishReview.committedFiles, "No files changed by unpushed commits.");
    message("");
    publishDialog.showModal();
  } catch (error) {
    message(error.message, true);
  } finally {
    setBusy(false);
  }
});

document.querySelector("#publish-cancel").addEventListener("click", () => publishDialog.close());
document.querySelector("#publish-confirm").addEventListener("click", async () => {
  if (!publishReview || busy || dirty) return;
  const snapshot = publishReview.snapshot;
  publishReview = null;
  publishDialog.close();
  setBusy(true);
  message("Publishing to GitHub…");
  try {
    const result = await request("/api/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Portfolio-Editor": "1" },
      body: JSON.stringify({ snapshot })
    });
    message(`Pushed to GitHub (${result.branch}). GitHub Pages deploys separately; check its deployment status and your live site.`);
  } catch (error) {
    message(error.message, true);
  } finally {
    setBusy(false);
  }
});

request("/api/projects").then((data) => {
  projects = data.projects;
  revision = data.revision;
  renderList();
}).catch((error) => message(`Could not load projects: ${error.message}`, true));
