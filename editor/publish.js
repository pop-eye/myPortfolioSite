"use strict";

const { execFile } = require("node:child_process");
const { promisify } = require("node:util");
const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const path = require("node:path");

const execute = promisify(execFile);
const paths = ["projects.js", "media/uploads"];

function createPublisher(root) {
  async function git(...args) {
    try {
      const { stdout } = await execute("git", args, {
        cwd: root,
        encoding: "utf8",
        maxBuffer: 8 * 1024 * 1024,
        timeout: 120000,
        env: { ...process.env, GIT_TERMINAL_PROMPT: "0", GCM_INTERACTIVE: "Never" }
      });
      return stdout;
    } catch (error) {
      const detail = (error.stderr || error.message).trim();
      throw new Error(`Git could not complete the operation: ${detail}`);
    }
  }

  async function inspect() {
    let top;
    try {
      top = (await git("rev-parse", "--show-toplevel")).trim();
    } catch {
      throw new Error("This folder is not a Git repository yet. Set up the GitHub repository and GitHub Pages first; see the README.");
    }
    if (path.resolve(top).toLowerCase() !== path.resolve(root).toLowerCase()) {
      throw new Error("The website must be the root of its own Git repository before publishing.");
    }
    const branch = (await git("symbolic-ref", "--quiet", "--short", "HEAD")).trim();
    let upstream;
    try {
      upstream = (await git("rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}")).trim();
    } catch {
      throw new Error("This branch has no upstream. Connect it to a GitHub repository and push it once before using the editor.");
    }
    if (upstream !== `origin/${branch}`) {
      throw new Error("The current branch must track the same branch on origin. Check your GitHub repository setup.");
    }
    const remotes = (await git("remote", "get-url", "--push", "--all", "origin")).trim().split("\n");
    if (remotes.length !== 1 || !/^(?:https:\/\/github\.com\/|ssh:\/\/git@github\.com\/|git@github\.com:)[^?#\s]+$/i.test(remotes[0])) {
      throw new Error("The origin push destination must be one GitHub repository URL. Check your repository setup.");
    }
    const remote = remotes[0];
    const staged = (await git("diff", "--cached", "--name-only", "-z")).split("\0").filter(Boolean);
    if (staged.length) throw new Error("There are already staged files. Review and commit or unstage them in GitHub Desktop or VS Code before publishing.");
    const status = await git("status", "--porcelain=v1", "-z", "--untracked-files=all", "--no-renames", "--", ...paths);
    const files = status.split("\0").filter(Boolean).map((entry) => entry.slice(3));
    const commits = (await git("log", "--format=%h %s", `${upstream}..HEAD`)).trim().split("\n").filter(Boolean);
    const commitIds = (await git("log", "--format=%H", `${upstream}..HEAD`)).trim().split("\n").filter(Boolean);
    const committedFiles = new Set();
    for (const id of commitIds) {
      const changed = await git("diff-tree", "--root", "--no-commit-id", "--name-only", "-r", "-z", id);
      changed.split("\0").filter(Boolean).forEach((file) => committedFiles.add(file));
    }
    const committedFileList = [...committedFiles];
    const head = (await git("rev-parse", "HEAD")).trim();
    const upstreamHead = (await git("rev-parse", upstream)).trim();
    const hashes = [];
    for (const file of files) {
      try {
        const content = await fs.readFile(path.join(root, file));
        hashes.push([file, crypto.createHash("sha256").update(content).digest("hex")]);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        hashes.push([file, null]);
      }
    }
    const snapshot = crypto.createHash("sha256").update(JSON.stringify({ branch, upstream, remote, head, upstreamHead, status, commits, committedFileList, hashes })).digest("hex");
    return { branch, remote, files, commits, committedFiles: committedFileList, snapshot };
  }

  async function publish(snapshot) {
    const review = await inspect();
    if (review.snapshot !== snapshot) throw new Error("The repository changed since review. Review it again before publishing.");
    if (!review.files.length && !review.commits.length) throw new Error("There are no saved changes or unpushed commits to publish.");
    let committed = false;
    try {
      if (review.files.length) {
        await git("--literal-pathspecs", "add", "-A", "--", ...review.files);
        const staged = (await git("diff", "--cached", "--name-only", "-z")).split("\0").filter(Boolean);
        if (staged.some((file) => !review.files.includes(file))) {
          throw new Error("The staged files changed unexpectedly. Review the Git staging area before continuing.");
        }
        if (staged.length) {
          await git("commit", "-m", "Update portfolio projects\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>");
          committed = true;
        }
      }
      await git("push", "origin", `HEAD:refs/heads/${review.branch}`);
    } catch (error) {
      const state = committed
        ? "The portfolio commit was created locally but the push failed. Review the error and try Publish again."
        : "Publishing did not complete. If files were staged, review them in GitHub Desktop or VS Code before retrying.";
      throw new Error(`${state}\n${error.message}`);
    }
    return { branch: review.branch };
  }

  return { inspect, publish };
}

module.exports = { createPublisher };
