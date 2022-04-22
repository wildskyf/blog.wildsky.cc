import fs from 'fs'
import { PAGINATION_PER_PAGE_COUNT } from '../data/globalConfig'

const fetchPaginationShowPath = async ({ lang }) => {
  const all_post_filenames = fs.readdirSync(`./data/posts-${lang}/`)
  const totalPage = Math.ceil(all_post_filenames.length / PAGINATION_PER_PAGE_COUNT)

  return Array(totalPage)
    .fill(0)
    .map((_, i) => ({ params: { page_num: String(i + 1) } }))
}

export default fetchPaginationShowPath
