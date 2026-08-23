import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildSearchIndex } from '@/utils/searchIndex';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts-en');

  return new Response(JSON.stringify(buildSearchIndex(posts, 'en')), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
