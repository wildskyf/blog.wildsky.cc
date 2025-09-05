import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    feature_image: z.string().nullable().optional(),
    guid: z.string().optional(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    reference: z.string().optional(),
  }),
});

export const collections = {
  posts,
};
