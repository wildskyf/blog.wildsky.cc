import fs from 'fs'
import { PAGINATION_PER_PAGE_COUNT } from '../data/globalConfig'

const fetchPaginationShowData = async ({ page_num, lang }) => {
  const blog_info = require('../data/blog_info.json');
  const all_post_filenames = fs
    .readdirSync(`./src/data/posts-${lang}/`)
    .sort()
    .reverse()

  const total_page_num = Math.ceil(all_post_filenames.length / PAGINATION_PER_PAGE_COUNT)

  const current_page_post_infos = all_post_filenames
    .slice((page_num - 1) * PAGINATION_PER_PAGE_COUNT, page_num * PAGINATION_PER_PAGE_COUNT)
    .map((filename) => {
      const post_info = require(`../data/posts-${lang}/${filename}`)
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
    website_name: blog_info.name,
    website_description: blog_info.description,
    home_url: lang === 'en' ? '/en/' : '/',
    postList: current_page_post_infos,
    current_page_num: Number(page_num),
    total_page_num: Number(total_page_num)
  }
}

export default fetchPaginationShowData
