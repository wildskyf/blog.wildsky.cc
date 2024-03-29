import fs from 'fs'
import { PAGINATION_PER_PAGE_COUNT } from '@/data/globalConfig'

const fetchIndexData = async ({ lang }) => {
  const post_info_list = fs
    .readdirSync(`./src/data/posts-${lang}/`)
    .sort()
    .reverse()
    .slice(0, PAGINATION_PER_PAGE_COUNT)
    .map((filename) => {
      const post_info = require(`@/data/posts-${lang}/${filename}`)
      return {
        title: post_info.attributes.title,
        slug: post_info.attributes.slug,
        date: post_info.attributes.date,
        guid: post_info.attributes.guid,
        feature_image_url: post_info.attributes.feature_image ? `/images/${post_info.attributes.feature_image}` : null,
        excerpt: post_info.attributes.excerpt,
      }
    })


  return {
    postList: post_info_list
  }
}

export default fetchIndexData
