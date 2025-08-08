import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET (context) {
  const posts = await getCollection('posts');

  return rss({
    title: "Triângulo",
    description: "Aprenda os fundamentos do desenvolvimento frontend",
    site: context.site,
    items: posts
     .filter((post) => !post.data.hideFromRSS)
     .map((post) => ({
       link: `/posts/${post.id}/`,
       title: post.data.title,
       pubDate: post.data.pubDate,
       description: post.data.description,
     })),
    customData: `<language>pt-br</language>`,
  });
}
