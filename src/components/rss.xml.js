import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export const GET = async (context) => {
  return rss({
    title: "Wildsky's Blog",
    description: 'Dev blog about server hosting, web dev, and some of my daily stuffs.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
  })
}
