// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hestiatechnology.pt',
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
  },
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  })
});