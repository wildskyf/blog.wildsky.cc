import { PaginationPageComponent } from '../../page/[page_num]'

import fetchPaginationShowPath from '../../../libs/fetchPaginationShowPath'
import fetchPaginationShowData from '../../../libs/fetchPaginationShowData'

const EnPaginationPage = (props) => {
  return (
    <PaginationPageComponent {...props}
      lang='en'
      pageName={`Article List Page ${props.current_page_num}`}
      pageDesc='Hi I am Geng-Zhi, using Wildsky as my codename on the Internet. Currently working in Taiwan AI Labs, and I am a keyholder in Taiwan Mozilla Community. With this blog, I hope to find the answers for three big questions: who am I, Where am I from, and Where to go.'
    />
  )
}

export const getStaticPaths = async () => {
  const paths = await fetchPaginationShowPath({ lang: 'en' })
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  if (params.page_num === 1) {
    return {
      redirect: {
        destination: '/en',
        permanent: true
      }
    }
  }

  const ret_props = await fetchPaginationShowData({ page_num: params.page_num, lang: 'en' })

  return {
    props: ret_props
  }
}

export default EnPaginationPage
