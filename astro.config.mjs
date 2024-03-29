import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://triangulo.dev/",
  integrations: [
    mdx({
      remarkPlugins: [[remarkToc, { heading: "Índice", tight: true }]],
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});

