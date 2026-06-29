// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://amanmentawai.com',
  output: 'server',

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap(), 
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    })
  ]
});