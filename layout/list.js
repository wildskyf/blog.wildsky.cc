import Link from 'next/link'
import Layout from './page'
import PostList from '../components/PostList'

const ListLayout = ({ postList, previous_page_num, next_page_num, home_url, website_name, website_description, menu_items }) => {
  return (
    <>
      <Layout {...{ home_url, website_name, website_description, menu_items }}>
        <section className="article-list">
          <PostList postList={postList} />
        </section>
        <section className='pagination flex flex-row justify-between'>
          {
            previous_page_num ? (
              <Link href={`/page/${previous_page_num}`}>
                <a className='p-4 text-xl text-gray-800 hover:text-red-700'>← Newer posts</a>
              </Link>
            ) : (<span />)
          }
          {
            next_page_num ? (
              <Link href={`/page/${next_page_num}`}>
                <a className='p-4 text-xl text-gray-800 hover:text-red-700'>Older posts →</a>
              </Link>
            ) : (<span />)
          }
        </section>
      </Layout>
    </>
  )
}

export default ListLayout
