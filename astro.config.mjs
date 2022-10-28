import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://triangulo.dev/',
  integrations: [mdx(), image()],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    },
    extendDefaultPlugins: true
  }
});