// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages as a project site: https://pthieenlong.github.io/portfolio
// https://astro.build/config
export default defineConfig({
  site: 'https://pthieenlong.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
