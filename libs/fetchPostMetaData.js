import dayjs from 'dayjs'
import fs from 'fs/promises'
import matter from 'gray-matter';

const fetchPostMetaData = async ({ lang }) => {
  const folder = `./data/posts-${lang}`
  const post_filenames = await fs.readdir(folder)
  const post_paths = post_filenames
    .filter(filename => filename.match(/\.md$/))
    .map(filename => `${folder}/${filename}`)

  const file_contents = await Promise.all(
    post_paths
      .map(path => fs.readFile(path, 'utf-8'))
  )

  return file_contents
    .map(content => matter(content).data)
    .sort((meta1, meta2) => dayjs(meta2.date).toDate() - dayjs(meta1.date).toDate() )
    .map(meta => ({
      ...meta,
      date: dayjs(meta.date).format('YYYY 年 MM 月 DD 日'),
    }))
}

export default fetchPostMetaData
