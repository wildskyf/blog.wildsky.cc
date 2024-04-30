import rss from '@astrojs/rss'

export const GET = (context) => {
  return rss({
    title: "Wildsky's Blog",
    description: 'Dev blog about server hosting, web dev, and some of my daily stuffs.',
    site: context.site,
    items: [],
  })
}
