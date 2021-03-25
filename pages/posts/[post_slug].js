import Layout from '../../layout/post'

import { jsonify } from '../../utils'
import { BACKEND_ENDPOINT } from '../../data'

const Post = (props) => {
  const { website_name, website_description, home_url, post_title, menu_items, post_content } = props

  return (
    <Layout {...{ home_url, website_name, website_description, menu_items }}>
      <article>
        <header className='mb-8'>
          <h1
            className='text-4xl font-semibold mb-4'
            dangerouslySetInnerHTML={{ __html: post_title }}
          />
        </header>
        <div
          className='article-content text-lg leading-relaxed text-gray-700 font-serif'
          dangerouslySetInnerHTML={{ __html: post_content }}
        />
      </article>

      <style jsx global>{`
        .article-content p {
          margin-bottom: 40px;
        }
      `}</style>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const post_info = await fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts/`).then(r => r.json())

  const posts = post_info
    .map(item => item.slug)

  const paths = posts.map((post) => ({
    params: { post_slug: post },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const [ blog_info, menu_info, [post_info]] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-tw`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts/?slug=${params.post_slug}`).then(r => r.json())
  ])

  return {
    props: {
      website_name: blog_info.name,
      website_description: blog_info.description,
      home_url: blog_info.home,
      menu_items: menu_info.items.map(item => ({
        guid: item.guid,
        url: `${item.url.replace('https://blog.wildsky.cc', '')}/`,
        title: item.title
      })),

      post_title: post_info?.title.rendered,
      post_content: post_info?.content.rendered,
    }
  }
}

export default Post
