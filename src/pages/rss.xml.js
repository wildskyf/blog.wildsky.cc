import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import { getCollection } from 'astro:content';


export const GET = async (context) => {
  const postsTw = await getCollection('posts-tw')
  const postsEn = await getCollection('posts-en')

  return rss({
    title: "Wildsky's Blog",
    description: 'Dev blog about server hosting, web dev, and some of my daily stuffs.',
    site: context.site,
    items: [
      ...postsTw,
      ...postsEn
    ].map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/blog/${post.id}/`,
    }))
  })
}
