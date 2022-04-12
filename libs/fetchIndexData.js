import fs from 'fs'
import { PAGINATION_PER_PAGE_COUNT } from '../data/globalConfig'

const fetchIndexData = async ({ lang }) => {
  const blog_info = require('../data/blog_info.json');
  const main_menu_items = require(`../data/main-${lang}.json`);
  const post_info = fs
    .readdirSync(`./data/posts-${lang}/`)
    .sort()
    .reverse()
    .slice(0, PAGINATION_PER_PAGE_COUNT)
    .map((filename) => require(`../data/posts-${lang}/${filename}`))

  return {
    website_name: blog_info.name,
    website_description: blog_info.description,
    home_url: lang === 'en' ? '/en/' : '/',
    menu_items: main_menu_items,
    postList: post_info
  }
}

export default fetchIndexData
