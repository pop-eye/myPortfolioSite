# Alasdair Swenson portfolio

A simple, visual portfolio that runs as a static website. Open `index.html` in a browser to preview it, or publish the folder with any static hosting service. No build step or dependencies are required. The initial project entries draw on public research sources; check and expand their descriptions before publishing. The abstract cover graphics are placeholders, not images of the projects.

## Use the local editor

The editor needs [Node.js](https://nodejs.org/) installed, but no additional packages. In a terminal opened in this folder, run:

```powershell
node editor\server.js
```

Open `http://127.0.0.1:4177` in your browser. Select a project or add a new one, then save your changes. You can add images, videos, links and files using URLs or upload files from your computer. Each uploaded file is copied into `media/uploads`; uploading alone does not attach it to the saved project until you save. Uploads are limited to 20 MB each; use a YouTube or Vimeo link for larger videos. Stopping the terminal with Ctrl+C stops the local editor.

The editor only listens on your computer. Saving writes to `projects.js` and `media/uploads`; saving does not publish or commit anything. Deleted projects do not delete uploaded files. Remove unwanted uploads manually after checking that no other projects use them. If `projects.js` changes outside the editor while it is open, reload before saving to avoid overwriting those changes.

## Publishing with GitHub Pages

GitHub Pages hosts the public site as static files; the local editor itself does not run there. This folder is connected to the portfolio's GitHub repository, and GitHub Pages publishes the `main` branch. The branch must track its same-named branch on a GitHub `origin` remote, and Git needs an author name, email and authentication.

After setup, save your project and select **Publish to GitHub** in the editor. Review the destination, files and any previously committed but unpushed work, then confirm. The editor commits only changes in `projects.js` and `media/uploads`; however, Git pushes all unpushed commits on the branch, which are listed in the review, including files changed in their history. Changes to other files need to be committed separately. Already-staged changes must be reviewed and committed or unstaged separately before using the button.

The button uses your existing Git credentials; it does not store a password or token. It does not force-push or pull changes. If a push fails after a commit was created, the commit remains on your computer; fix the reported issue and select Publish again. If authentication needs an interactive prompt, sign in through GitHub Desktop or configure a Git credential helper first. Check GitHub Pages' deployment status and the live site after a successful push: a successful push does not guarantee that deployment has finished or succeeded.

You can use `alasdairswenson.co.uk` as a custom domain. Configure the domain in GitHub Pages and update DNS at your domain provider, following [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Verify the domain with GitHub before pointing DNS at Pages, configure both the apex domain and `www` as appropriate, and enable HTTPS once available. Check for an existing website and email-related DNS records before changing anything; do not remove unrelated records.

GitHub Pages publishes website files publicly. Do not upload sensitive or private materials. Use external video hosting for large video files and check the rights and availability of third-party media. The custom domain and DNS have not been set up by this editor.

## Website analytics

The site includes a Cloudflare Web Analytics beacon configured for `alasdairswenson.co.uk`. It only loads on that hostname and `www.alasdairswenson.co.uk`, not the GitHub Pages URL or local previews. It will begin collecting data when the custom domain is connected and the site is visited there. Visit the Cloudflare dashboard's Web Analytics section to view reports. Page views measure page loads; opening a project detail does not count as a separate page view.

The website includes a short privacy notice, which should be reviewed and completed for your circumstances, including applicable UK privacy requirements and any contact details. If the analytics hostname or provider changes, update the beacon and notice in `index.html`. The site also uses Google Fonts and may embed third-party videos.

## Add or edit a project

Open `projects.js`. Each entry in the `projects` list represents one project. Copy an existing entry, change its values, and separate entries with commas. The project category automatically appears as a filter.

```js
{
  title: "My project",
  category: "Film",
  year: "2026",
  summary: "A short introduction shown on the project card.",
  description: "A little more about the project, shown when it is opened.",
  cover: "media/my-cover.jpg",
  coverAlt: "A useful description of the cover image",
  media: [
    { type: "image", src: "media/my-cover.jpg", alt: "Description of the image" },
    { type: "video", src: "https://www.youtube.com/watch?v=VIDEO_ID", title: "Project film" },
    { type: "video", src: "media/my-film.mp4", poster: "media/my-cover.jpg" },
    { type: "audio", src: "media/recording.mp3", title: "Audio recording" }
  ],
  tools: ["Blender", "Photography"],
  links: [
    { label: "Project website", url: "https://example.com" },
    { label: "Collaborator name", url: "https://example.com" }
  ],
  files: [
    { label: "Project document (PDF)", url: "files/project.pdf" },
    { label: "Source code", url: "https://example.com/source" }
  ]
}
```

Put your images, videos, and files in folders alongside `index.html`, then use their relative paths as above. Image URLs also work. Videos support YouTube, Vimeo and VideoPress links or direct browser-playable video files such as MP4; audio supports browser-playable files such as MP3. Use `alt` text to describe images, and `title` to identify videos and audio. A project with an empty `media` list uses its cover image; if the cover is also empty, the card displays an abstract placeholder. Empty `tools`, `links`, or `files` lists are simply not shown. Some imported media is hosted by WordPress or VideoPress and depends on those services remaining publicly accessible.

Only add files you are happy to make public: anything included in a published website can be accessed by visitors. Large videos are often better hosted on a video platform.

## Make it yours

- Edit the name, introduction, about text, and navigation in `index.html`. Replace the placeholder contact copy with your own contact details or links.
- Adjust colors, typography, and layout in `styles.css`.
- Add project media you have permission to share. The optional fonts are loaded from Google Fonts; the site falls back to system fonts if unavailable.
