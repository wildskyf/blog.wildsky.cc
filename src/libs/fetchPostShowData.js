import fs from 'fs'

const fetchPostShowData = async ({ post_slug, lang }) => {
  const post_filename = fs
    .readdirSync(`./src/data/posts-${lang}/`)
    .find(filename => filename.match(new RegExp(post_slug + '.md$')))

  const post_info = require(`../data/posts-${lang}/${post_filename}`)

  return {
    home_url: lang === 'en' ? '/en/' : '/',
    post_feature_image_url: post_info.attributes.feature_image ? `/images/${post_info.attributes.feature_image}` : null,
    post_date: post_info?.attributes.date || null,
    post_title: post_info?.attributes.title || null,
    post_content: post_info?.html || null,
  }
}

export default fetchPostShowData
