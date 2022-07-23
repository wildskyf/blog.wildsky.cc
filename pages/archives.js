import Head from '../components/Head'
import Layout from '../layout/page'
import Link from 'next/link';

import fetchLayoutData from '../libs/fetchLayoutData'
import fetchPostMetaData from '../libs/fetchPostMetaData'

const LANG = 'tw'

export const ArchivesPageComponentFactory = lang => (props) => {
  const { pageName, pageDesc } = props
  const { website_name, website_description, home_url, menu_items, list } = props
  const href_prefix = lang === 'en' ? '/en/posts' : '/posts'

  return (
    <Layout {...{ lang, home_url, website_name, website_description, menu_items }}>
      <Head  {...{ pageName, pageDesc }} />

      <article className='px-4 lg:px-0 py-16'>
        <header>
          <h1 className='text-3xl font-bold mb-4 text-gray-800'>{pageName}</h1>
        </header>

        <div className={`
          article-content leading-8 mt-8 pb-4
          text-lg font-serif text-gray-700 text-lg text-gray-700
        `}>
          <ul>
            {list.map(item => (
              <li key={item.slug}  className='py-2 text-xl text-gray-800 hover:text-red-700'>
                <Link href={`${href_prefix}/${item.slug}`}>
                  <a>
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPropsFactory = lang => async () => {
  const ret = await fetchLayoutData({ lang })
  const list = await fetchPostMetaData({ lang })

  return { props: {
    ...ret,
    list,
    pageDesc: 'This is the archives page for my blog.',
    pageImage: null,
    pageName: 'Archives Page',
  } }
}

const ArchivesPage = (props) => {
  const PageComponent = ArchivesPageComponentFactory(LANG)
  return (
    <PageComponent {...props}
      lang={LANG}
      pageName={props.pageName}
      pageDesc={props.pageDesc}
      pageImage={props.pageImage}
    />
  )
}

export const getStaticProps = getStaticPropsFactory(LANG)

export default ArchivesPage
