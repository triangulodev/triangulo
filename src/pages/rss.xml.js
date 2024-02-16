import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get () {
  return rss({
    title: "Triângulo",
    description: "Aprenda os fundamentos do desenvolvimento frontend",
    site: import.meta.env.SITE,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.mdx", { eager: true }))
      .filter((post) => !post.frontmatter?.hideFromRSS)
      .map((post) => ({
        link: post.url,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date,
        description: post.frontmatter.description,
      })),
    customData: `<language>pt-br</language>`,
  });
}
