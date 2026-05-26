// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://amanmentawai.com',
  output: 'server',

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});