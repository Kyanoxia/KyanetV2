// @ts-check
import { defineConfig } from 'astro/config';
import devtoolsJson from 'vite-plugin-devtools-json';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://kyanoxia.com',
  output: "server",
  base: "./",
  
  compressHTML: false,
  adapter: vercel(),

  vite: {
    plugins: [
      devtoolsJson(),
    ]
  },

  server: {
    allowedHosts: ["dev.kyanoxia.com", "epic-jaybird-urgently.ngrok-free.app"]
  }
});
