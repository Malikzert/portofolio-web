// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://malikzert.github.io',
  base: '/portofolio-web/',
  integrations: [react(), tailwind()]
});
