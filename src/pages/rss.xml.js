import rss from "@astrojs/rss";
const pagesImport = import.meta.glob("./**/*.mdx", { eager: true });
const pages = Object.values(pagesImport);

export const get = () =>
  rss({
    title: "Triângulo",
    description: "Aprenda os fundamentos do desenvolvimento frontend",
    site: import.meta.env.SITE,
    items: pages.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
    })),
    customData: `<language>pt-br</language>`,
  });
