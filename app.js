const grid = document.querySelector("#project-grid");
const filters = document.querySelector("#filters");
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "All";

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function safeUrl(value) {
  try {
    const url = new URL(value, document.baseURI);
    return ["http:", "https:", "file:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function image(src, alt, className) {
  const img = element("img", className);
  const url = safeUrl(src);
  if (url) img.src = url;
  img.alt = alt || "";
  img.loading = "lazy";
  return img;
}

function renderFilters() {
  const categories = ["All", ...new Set(projects.map((project) => project.category).filter(Boolean))];
  filters.replaceChildren();
  categories.forEach((category) => {
    const button = element("button", `filter${category === activeFilter ? " is-active" : ""}`, category);
    button.type = "button";
    button.setAttribute("aria-pressed", String(category === activeFilter));
    button.addEventListener("click", () => {
      activeFilter = category;
      renderFilters();
      renderProjects();
    });
    filters.append(button);
  });
}

function renderProjects() {
  const visible = projects.filter((project) => activeFilter === "All" || project.category === activeFilter);
  grid.replaceChildren();
  emptyState.hidden = visible.length > 0;
  visible.forEach((project) => {
    const index = projects.indexOf(project);
    const card = element("article", "project-card");
    const button = element("button", "card-button");
    button.type = "button";
    button.setAttribute("aria-label", `View ${project.title}`);
    const visual = element("div", "card-visual");
    if (project.cover && safeUrl(project.cover)) {
      visual.append(image(project.cover, project.coverAlt || project.title, "card-image"));
    } else {
      const placeholder = element("div", `card-placeholder placeholder-${index % 3 + 1}`);
      placeholder.setAttribute("aria-label", "Project media coming soon");
      placeholder.append(element("span", "placeholder-label", "PROJECT MEDIA / COMING SOON"));
      visual.append(placeholder);
    }
    visual.append(element("span", "card-index", String(index + 1).padStart(2, "0")));
    const arrow = element("span", "card-arrow", "↗");
    arrow.setAttribute("aria-hidden", "true");
    visual.append(arrow);
    const info = element("div", "card-info");
    const titleWrap = element("div");
    titleWrap.append(element("h3", "", project.title), element("p", "card-summary", project.summary));
    info.append(titleWrap, element("span", "card-category", project.category || "PROJECT"));
    button.append(visual, info);
    button.addEventListener("click", () => openProject(project, index));
    card.append(button);
    grid.append(card);
  });
}

function linkList(title, items, className) {
  if (!items || !items.length) return null;
  const section = element("div", "detail-group");
  section.append(element("h3", "detail-label", title));
  const list = element("div", className);
  items.forEach((item) => {
    const url = safeUrl(item.url);
    if (!url) return;
    const link = element("a", "detail-link", `${item.label} ↗`);
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    list.append(link);
  });
  if (!list.children.length) return null;
  section.append(list);
  return section;
}

function embedUrl(src) {
  try {
    const url = new URL(src);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be" && url.pathname.slice(1)) return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(url.pathname.slice(1))}`;
    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      const id = url.pathname.startsWith("/embed/") ? url.pathname.split("/")[2] : url.searchParams.get("v");
      if (id) return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`;
    }
    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = url.pathname.split("/").filter(Boolean).pop();
      if (/^\d+$/.test(id)) return `https://player.vimeo.com/video/${id}`;
    }
  } catch {
    return null;
  }
  return null;
}

function renderMedia(item) {
  const url = safeUrl(item.src);
  if (!url) return null;
  if (item.type === "image") return image(item.src, item.alt, "detail-image");
  if (item.type === "video") {
    const embed = embedUrl(item.src);
    if (embed) {
      const frame = element("iframe", "detail-video");
      frame.src = embed;
      frame.title = item.title || "Project video";
      frame.loading = "lazy";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      return frame;
    }
    const video = element("video", "detail-video");
    video.src = url;
    video.controls = true;
    video.preload = "metadata";
    if (item.poster && safeUrl(item.poster)) video.poster = safeUrl(item.poster);
    return video;
  }
  return null;
}

function openProject(project, index) {
  dialogContent.replaceChildren();
  const heading = element("div", "detail-heading");
  const headingText = element("div");
  headingText.append(element("p", "eyebrow", `${String(index + 1).padStart(2, "0")} / ${project.category || "PROJECT"}`));
  const title = element("h2", "", project.title);
  title.id = "dialog-title";
  headingText.append(title, element("p", "detail-summary", project.summary));
  heading.append(headingText, element("span", "detail-year", project.year || ""));
  dialogContent.append(heading);

  const media = element("div", "detail-media");
  const mediaItems = project.media && project.media.length ? project.media : project.cover ? [{ type: "image", src: project.cover, alt: project.coverAlt || project.title }] : [];
  mediaItems.forEach((item) => {
    const rendered = renderMedia(item);
    if (rendered) media.append(rendered);
  });
  if (media.children.length) dialogContent.append(media);

  const details = element("div", "detail-layout");
  const about = element("div", "detail-about");
  about.append(element("h3", "detail-label", "ABOUT THE PROJECT"), element("p", "", project.description || project.summary || ""));
  details.append(about);
  const meta = element("div", "detail-meta");
  if (project.tools && project.tools.length) {
    const group = element("div", "detail-group");
    group.append(element("h3", "detail-label", "MEDIUM / TOOLS"));
    const tags = element("div", "detail-tags");
    project.tools.forEach((tool) => tags.append(element("span", "detail-tag", tool)));
    group.append(tags);
    meta.append(group);
  }
  const links = linkList("LINKS / COLLABORATORS", project.links, "detail-links");
  const files = linkList("PROJECT FILES", project.files, "detail-links");
  if (links) meta.append(links);
  if (files) meta.append(files);
  details.append(meta);
  dialogContent.append(details);
  dialog.showModal();
  dialog.scrollTop = 0;
}

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#project-count").textContent = String(projects.length).padStart(2, "0");
document.querySelector("#nav-count").textContent = String(projects.length).padStart(2, "0");
document.querySelector("#year").textContent = new Date().getFullYear();
renderFilters();
renderProjects();
