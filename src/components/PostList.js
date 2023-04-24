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
            <li
              key={post.guid}
              className='rounded-xl mb-4'
            >
              <article className={
                `bg-transparent
                  text-skadiWhite-300
                  px-3 py-16
                  rounded-xl
                  ${lang === 'tw' ? 'tracking-tw-normal' : ''}
                `}
              >
                <header>
                  <Link href={`${root_path}/posts/${post.slug}`}>
                    <h2
                      className='mb-4 text-2xl lg:text-3xl font-semibold'
                      dangerouslySetInnerHTML={{ __html: post.title }}
                      style={{ hyphens: 'auto' }}
                    />
                  </Link>
                  <p className='text-lg mb-4'>
                    Posted on <time dateTime={post.date}>{dayjs(post.date).format('YYYY 年 MM 月 DD 日')}</time>
                  </p>
                </header>
                {
                  post.feature_image_url && (
                    <Link href={`${root_path}/posts/${post.slug}`}>
                      <LazyLoadImage
                        className='opacity-70'
                        src={post.feature_image_url}
                        alt=''
                        width='750'
                        height='410'
                      />
                    </Link>
                  )
                }
                <div className="mt-8 text-lg pb-4">
                  <div
                    className="break-all article-content"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.split('\n').map(a => `<p>${a}</p>`).join('')
                    }}
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
