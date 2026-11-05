# Xi Hong's personal website

An academic homepage built with Astro, with content stored in YAML files.

Website address: https://xhong39.github.io/

GitHub repository: https://github.com/xhong39/xhong39.github.io

## Make the website public

1. Create a **public** repository named **xhong39.github.io** under the **xhong39** account and upload this project's source files.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Open **Actions → Deploy site**. A push to `main` starts deployment automatically; use **Run workflow** if needed.
5. Wait for the build and deploy jobs to finish successfully, then visit https://xhong39.github.io/.

The repository name makes this a personal user site, so no repository name is added to the website URL. GitHub Pages serves it over HTTPS. This project uses an Astro build, so select GitHub Actions rather than publishing the unbuilt source from a branch.

## Update the website

Edit these files locally or with GitHub's file editor, then commit changes to `main`. The workflow rebuilds and republishes the site automatically.

| File | Content |
| --- | --- |
| `src/data/site.yml` | Name, pronunciation, photo, affiliation, email, social links |
| `src/data/bio.yml` | About paragraphs |
| `src/data/news.yml` | News |
| `src/data/publications.yml` | Selected publications and preprints, images, links, badges |
| `src/data/services.yml` | Institutional and academic services |
| `src/data/teaching.yml` | Teaching appointments and courses |
| `public/assets/img/` | Website images |
| `src/styles/global.css` | Layout, colors, typography |

For local edits, run these commands from the project folder:

```bash
npm ci
npm run dev
```

Preview at http://localhost:4321/. Before uploading a change:

```bash
npm run build
git add .
git commit -m "Update website"
git push origin main
```

The workflow builds `dist/` on GitHub. Do not upload `node_modules/`, `dist/`, `.astro/`, or local work notes in `logs/`; these are excluded by `.gitignore`.

## Deployment troubleshooting

- If the public address returns 404, check that the repository name is exactly `xhong39.github.io`, the repository is public, and Pages uses GitHub Actions.
- If deployment fails, open the failed run under **Actions → Deploy site** and inspect the build or deployment log.
- If Pages was enabled after the first push, run **Actions → Deploy site → Run workflow**.

Official instructions: [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) and [GitHub Pages](https://docs.github.com/en/pages/quickstart).

## Credits

Based on [Academic Homepage Template](https://github.com/boyugou/academic-homepage-template) by Boyu Gou.


The visual layout (sidebar profile + single scrolling column, light/dark themes)
was originally inspired by the Jekyll theme
[Minimal Light](https://github.com/yaoyao-liu/minimal-light) by Yaoyao Liu, which is
itself based on [minimal](https://github.com/orderedlist/minimal) by Steve Smith
(orderedlist). This template is a from-scratch rewrite in Astro and shares no code
with them, but we're grateful for the inspiration. Icons: [Font Awesome](https://fontawesome.com)
and [Academicons](https://jpswalsh.github.io/academicons/); fonts: Inter, JetBrains Mono, Newsreader.

## License

[MIT](LICENSE)
