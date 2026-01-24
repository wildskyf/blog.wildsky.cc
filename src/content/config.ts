import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  slug: z.string().optional(),
  excerpt: z.string().optional(),
  feature_image: z.string().nullable().optional(),
  feature_image_caption: z.string().nullable().optional(),
  guid: z.string().optional(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),
  // Category: Suggested values - 軟體工程, 職涯工作, 生活體驗, 思考觀點, 理財投資, 資訊科學, 其他
  category: z.string().optional(),
  reference: z.string().optional(),
});

const postsTw = defineCollection({
  type: 'content',
  schema: postSchema,
});

const postsEn = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  'posts-tw': postsTw,
  'posts-en': postsEn,
};
