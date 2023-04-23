const fetchPageShowData = async ({ page_slug, lang }) => {
  const page_info = require(`../data/pages/${page_slug}.md`);

  return {
    page_feature_image_url: page_info.attributes.feature_image && `/images/${page_info.attributes.feature_image}`,
    page_title: page_info.attributes.title,
    page_content: page_info.html,
  }
}

export default fetchPageShowData
