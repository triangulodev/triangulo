import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({
    base: 'src/pages/posts',
    pattern: '**/*.mdx'
  }),
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    description: z.string(),
    authorName: z.string(),
    authorImage: z.string(),
    pubDate: z.coerce.date(),
    ogImage: z.string().optional(),
    hideFromRSS: z.boolean().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
