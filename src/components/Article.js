import dayjs from 'dayjs'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Article = ({ feature_image_url, date, title, content, className, ...props }) => {
  return (
    <article className={`px-4 lg:px-0 py-16 ${className || ''}`} {...props}>
      <header>
        <h1
          className='text-3xl font-bold mb-4 text-skadiWhite-300 font-title'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {
          date && (
            <p className='text-lg text-skadiWhite-300 mb-4'>
              Posted on <time dateTime={date}>{dayjs(date).format('YYYY 年 MM 月 DD 日')}</time>
            </p>
          )
        }
      </header>
      {
        feature_image_url && (
          <LazyLoadImage
            src={feature_image_url.includes('https://') ? feature_image_url : feature_image_url}
            alt=''
            width='750'
            height='410'
          />
        )
      }
      <div
      className='article-content leading-8 text-lg text-skadiWhite-300 mt-8 text-lg pb-4'
        dangerouslySetInnerHTML={{__html: content.replace(/href="https:\/\/backend\.wildsky\.cc/g, 'href="https://blog.wildsky.cc') }}
      />
    </article>
  )
}

export default Article
