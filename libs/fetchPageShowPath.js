const fetchPageShowPath = async ({ lang }) => {
  if (lang === 'tw') {
    return [
      'about',
      'donate',
      'experiences',
      'more-links',
    ]
  }

  if (lang === 'en') {
    return [
      'about-en',
      'donate-en',
      'experiences-en',
      'more-links-en',
    ]
  }

  throw new Error(`not accepted lang: ${lang}`)
}

export default fetchPageShowPath
