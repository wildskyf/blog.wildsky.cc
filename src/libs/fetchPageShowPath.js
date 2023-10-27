const fetchPageShowPath = async ({ lang }) => {
  const paramize = (list) => list.map(page_slug => ({ params: { page_slug } }))

  if (lang === 'tw') {
    return paramize([
      'about',
      'archives',
      'donate',
      'experiences',
      'more-links',
      'freelancer'
    ])
  }

  if (lang === 'en') {
    return paramize([
      'about-en',
      'archives-en',
      'donate-en',
      'experiences-en',
      'more-links-en',
      'freelancer-en'
    ])
  }

  throw new Error(`not accepted lang: ${lang}`)
}

export default fetchPageShowPath
