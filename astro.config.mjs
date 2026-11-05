// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// On GitHub Actions, `site` and `base` are derived from the repository:
//   <user>/<user>.github.io  ->  https://<user>.github.io/
//   <user>/<anything-else>   ->  https://<user>.github.io/<anything-else>/
// Locally (no GITHUB_REPOSITORY) the site is served from "/".
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = !repo || repo.toLowerCase() === `${owner}.github.io`.toLowerCase();

export default defineConfig({
  site: owner ? `https://${owner.toLowerCase()}.github.io` : 'https://xhong39.github.io',
  base: isUserSite ? '/' : `/${repo}`,
  vite: {
    plugins: [yaml()],
  },
});
