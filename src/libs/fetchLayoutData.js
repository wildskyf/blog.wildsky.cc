const fetchLayoutData = async ({ lang }) => {
  const blog_info = require('../data/blog_info.json');

  return {
    website_name: blog_info.name,
    website_description: blog_info.description,
    home_url: lang === 'en' ? '/en/' : '/'
  }
}

export default fetchLayoutData
