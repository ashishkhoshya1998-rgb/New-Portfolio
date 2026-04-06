// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ashishkhoshya.com',
  output: 'static',
  integrations: [react(), mdx()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
