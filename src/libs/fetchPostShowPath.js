import fs from 'fs'

const fetchPostShowPath = async ({ lang }) => {
  const post_filenames = fs
    .readdirSync(`./src/data/posts-${lang}/`)
    .map(f => f.replace(/.md$/, ''))

  const ret = post_filenames.map((post) => ({
    params: { post_slug: post.split('_').pop() },
  }))

  return ret
}

export default fetchPostShowPath
