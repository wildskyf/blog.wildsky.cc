import fs from 'fs'
import { PAGINATION_PER_PAGE_COUNT } from '../data/globalConfig'

const fetchPaginationShowData = async ({ page_num, lang }) => {
  const blog_info = require('../data/blog_info.json');
  const main_menu_items = require(`../data/main-${lang}.json`);

  const all_post_filenames = fs
    .readdirSync(`./data/posts-${lang}/`)
    .sort()
    .reverse()

  const total_page_num = Math.ceil(all_post_filenames.length / PAGINATION_PER_PAGE_COUNT)

  const current_page_post_infos = all_post_filenames
    .slice((page_num - 1) * PAGINATION_PER_PAGE_COUNT, page_num * PAGINATION_PER_PAGE_COUNT)
    .map((filename) => require(`../data/posts-${lang}/${filename}`))

  return {
    website_name: blog_info.name,
    website_description: blog_info.description,
    home_url: lang === 'en' ? '/en/' : '/',
    menu_items: main_menu_items,
    postList: current_page_post_infos,
    current_page_num: Number(page_num),
    total_page_num: Number(total_page_num)
  }
}

export default fetchPaginationShowData
