// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://bluebirdweb.ca',
  integrations: [react(), tailwind(), sitemap()],

  vite: {
      resolve: {
          alias: {
              '@': path.resolve(__dirname, './src'),
          },
      },
    },

  adapter: cloudflare(),
});