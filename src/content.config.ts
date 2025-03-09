import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders'; // Not available with legacy API

const postsTw = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/posts-tw" }),
  schema: z.any()
});

const postsEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/posts-en" }),
  schema: z.any()
});

export const collections = {
    "posts-tw": postsTw,
    "posts-en": postsEn
};