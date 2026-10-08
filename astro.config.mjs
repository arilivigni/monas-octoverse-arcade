// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow
// (.github/workflows/deploy-pages.yml). Locally they are unset, so the
// site is served from the root (http://localhost:4321/).
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
});
