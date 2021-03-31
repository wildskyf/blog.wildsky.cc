import { PageComponent } from '../[page_slug]'
import fetchPageShowPath from '../../libs/fetchPageShowPath'
import fetchPageShowData from '../../libs/fetchPageShowData'

const Page = (props) => {
  return (
    <PageComponent {...props}
      lang='en'
      pageName={props.page_title}
      pageDesc={props.page_content.substring(0, 70)}
    />
  )
}

export const getStaticPaths = async () => {
  const paths = await fetchPageShowPath({ lang: 'en' })
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const ret_props = await fetchPageShowData({ page_slug: params.page_slug, lang: 'en' })
  return {
    props: ret_props
  }
}

export default Page
