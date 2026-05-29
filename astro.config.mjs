// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dailyring.xyz',
  integrations: [sitemap()],
  output: 'static',
});
