// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://hestiatechnology.pt",
  trailingSlash: "never",
  i18n: {
    defaultLocale: "pt",
    locales: ["en", "pt"],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        // Exclude URLs with query parameters
        return !page.includes("?");
      },
    }),
  ],

  vite: {
      resolve: {
            // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
            // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
            alias: import.meta.env.PROD && {
                'react-dom/server': 'react-dom/server.edge',
            },
        },
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    imageService: "compile"
  }),
});