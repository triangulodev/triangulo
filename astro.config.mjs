import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://triangulo.dev/',
  integrations: [mdx(), image(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    },
    extendDefaultPlugins: true
  }
});