const fetchLayoutData = async ({ lang }) => {
  return {
    home_url: lang === 'en' ? '/en/' : '/'
  }
}

export default fetchLayoutData
