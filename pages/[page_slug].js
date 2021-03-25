import Layout from '../layout/page'

import { jsonify } from '../utils'
import { BACKEND_ENDPOINT } from '../data'

const Page = (props) => {
  const { website_name, website_description, home_url, page_title, menu_items, page_content } = props

  return (
    <Layout {...{ home_url, website_name, website_description, menu_items }}>
      <article>
        <header>
          <h1
            className='text-3xl font-bold mb-4'
            dangerouslySetInnerHTML={{ __html: page_title }}
          />
        </header>
        <div dangerouslySetInnerHTML={{__html: page_content }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const page_info = await fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-tw`).then(r => r.json())
  const pages = page_info.items
    .map(item => item.url.replace('https://blog.wildsky.cc', ''))
    .filter(item => item && !['#pll_switcher'].includes(item)) // TODO: i18n

  const paths = pages.map((page) => ({
    params: { page_slug: page.replace(/\//g, '') },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const [ blog_info, menu_info, [page_info]] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-tw`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/pages/?slug=${params.page_slug}`).then(r => r.json())
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

      page_title: page_info?.title.rendered,
      page_content: page_info?.content.rendered,
    }
  }
}

export default Page
