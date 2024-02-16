import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET (context) {
  const posts = await pagesGlobToRssItems(import.meta.glob("./**/*.mdx"))

  return rss({
    title: "Triângulo",
    description: "Aprenda os fundamentos do desenvolvimento frontend",
    site: context.site,
    items: posts
     .filter((post) => !post.frontmatter?.hideFromRSS)
     .map((post) => ({
       link: post.url,
       title: post.title,
       pubDate: post.pubDate,
       description: post.description,
     })),
    customData: `<language>pt-br</language>`,
  });
}
