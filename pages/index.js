import Link from 'next/link'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-fetch'

import Header from '../components/Header'

const BACKEND_ENDPOINT = 'https://blog.wildsky.cc'

const Home = ({ name, description, menu, home, postList }) => {
  const router = useRouter()

  if (router.query.page > 1) {
    // redirect to /page/{router.query.page}
  }

  return (
    <div>
      <header>
        <Header {...{ home, name, description, menu }} />
      </header>

      <section className="article-list">
        <ul>
          {
            postList.map(post => {
              return (
                <li key={post.guid}>
                  <article>
                    <Link href={`/posts/${post.slug}`}>
                      <a>
                        <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
                      </a>
                    </Link>
                    <div className="article-content">
                      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <Link href={`/posts/${post.slug}`}>
                      <a>More</a>
                    </Link>
                    </div>
                  </article>
                </li>
              )
            })
          }
        </ul>
      </section>
      <section className='pagination'>
        <Link href='/?page=2'>
          <a>Older posts →</a>
        </Link>
      </section>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const jsonify = r => r.json()

  // TODO: i18n: RESTful API for Polylang is only in pro version
  const [ blog_info, menu_info, post_info ] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-tw`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts`).then(jsonify)
  ])

  const ret_props = {
    name: blog_info.name,
    description: blog_info.description,
    home: blog_info.home,
    menu: menu_info,
    postList: post_info.map(post => ({
      guid: post?.guid?.rendered,
      slug: post?.slug,
      link: post?.link,
      title: post?.title?.rendered,
      excerpt: post?.excerpt?.rendered,
    }))
  }

  return {
    props: ret_props
  }
}

export default Home
