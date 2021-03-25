import dayjs from 'dayjs'
import Link from 'next/link'
import Image from 'next/image'
import ReadMoreButton from '../components/ReadMoreButton'

const PostList = ({ postList }) => {
  return (
    <ul className="flex flex-col">
      {
        postList.map(post => {
          return (
            <li key={post.guid}>
              <article className='font-serif py-16 border-b-2 border-gray-100 border-solid'>
                <header>
                  <Link href={`/posts/${post.slug}`}>
                    <a>
                      <h2
                        className='font-sans mb-4 text-3xl font-semibold text-gray-800 hover:text-red-700 transition-colors'
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                    </a>
                  </Link>
                  <p className='text-lg text-gray-500 mb-4'>
                    Posted on <time dateTime={post.date}>{dayjs(post.date).format('YYYY 年 MM 月 DD 日')}</time>
                  </p>
                </header>
                {
                  post.feature_image_url && (
                    <Link href={`/posts/${post.slug}`}>
                      <a>
                        <Image
                          src={post.feature_image_url}
                          alt=''
                          layout="responsive"
                          width='750'
                          height='410'
                          objectFit='contain'
                        />
                      </a>
                    </Link>
                  )
                }
                <div className="article-content mt-8 text-lg text-gray-700 pb-4">
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  <ReadMoreButton to={`/posts/${post.slug}`} />
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
