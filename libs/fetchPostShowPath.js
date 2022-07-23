import fs from 'fs'

const fetchPostShowPath = async ({ lang }) => {
  return fs
    .readdirSync(`./data/posts-${lang}/`)
    .map(f => f.replace(/.md$/, ''))
}

export default fetchPostShowPath
