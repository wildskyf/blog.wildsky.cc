const fetchPageShowData = async ({ page_slug, lang }) => {
  const blog_info = require('../data/blog_info.json');
  const page_info = require(`../data/pages/${page_slug}.md`);

  return {
    website_name: blog_info.name,
    website_description: blog_info.description,
    home_url: lang === 'en' ? '/en/' : '/',
    page_feature_image_url: page_info.attributes.feature_image && `/images/${page_info.attributes.feature_image}`,
    page_title: page_info.attributes.title,
    page_content: page_info.html,
  }
}

export default fetchPageShowData
