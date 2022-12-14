import dayjs from 'dayjs'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import ReadMoreButton from '../components/ReadMoreButton'

const PostList = ({ lang, postList }) => {
  const root_path = lang == 'en' ? '/en' : ''

  return (
    <ul className="flex flex-col px-4 lg:px-0" lang={lang === 'tw' ? 'zh-Hant-TW' : 'en'}>
      {
        postList.map(post => {
          return (
            <li key={post.guid}>
              <article className='font-serif py-16 border-b-2 border-gray-100 border-solid'>
                <header>
                  <Link href={`${root_path}/posts/${post.slug}`}>
                    <h2
                      className='font-sans mb-4 text-2xl lg:text-3xl font-semibold text-gray-800 hover:text-red-700'
                      dangerouslySetInnerHTML={{ __html: post.title }}
                      style={{ hyphens: 'auto' }}
                    />
                  </Link>
                  <p className='text-lg text-gray-500 mb-4'>
                    Posted on <time dateTime={post.date}>{dayjs(post.date).format('YYYY 年 MM 月 DD 日')}</time>
                  </p>
                </header>
                {
                  post.feature_image_url && (
                    <Link href={`${root_path}/posts/${post.slug}`}>
                      <LazyLoadImage
                        src={post.feature_image_url}
                        alt=''
                        width='750'
                        height='410'
                      />
                    </Link>
                  )
                }
                <div className="article-content mt-8 text-lg text-gray-700 pb-4">
                  <div
                    className="break-all"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <div>
                    <ReadMoreButton to={`${root_path}/posts/${post.slug}`} />
                  </div>
                </div>
              </article>
            </li>
          )
        })
      }
    </ul>
  )
}

export default PostList
