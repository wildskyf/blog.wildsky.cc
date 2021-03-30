import dayjs from 'dayjs'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Article = ({ feature_image_url, date, title, content }) => {
  return (
    <article className='px-4 lg:px-0 py-16'>
      <header>
        <h1
          className='text-3xl font-bold mb-4 text-gray-800'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {
          date && (
            <p className='text-lg text-gray-500 mb-4'>
              Posted on <time dateTime={date}>{dayjs(date).format('YYYY 年 MM 月 DD 日')}</time>
            </p>
          )
        }
      </header>
      {
        feature_image_url && (
          <LazyLoadImage
            src={feature_image_url}
            alt=''
            width='750'
            height='410'
          />
        )
      }
      <div
      className='article-content leading-8 text-lg font-serif text-gray-700 mt-8 text-lg text-gray-700 pb-4'
        dangerouslySetInnerHTML={{__html: content }}
      />
    </article>
  )
}

export default Article
