import fs from 'fs'

const fetchPostShowData = async ({ lang }) => {
  const post_filenames = fs
    .readdirSync(`./data/posts-${lang}/`)
    .map(f => f.replace(/.json$/, ''))

  const ret = post_filenames.map((post) => ({
    params: { post_slug: post },
  }))

  return ret
}

export default fetchPostShowData
