import { PaginationPageComponentFactory, getStaticPathsFactory, getStaticPropsFactory } from '../../page/[page_num]'

const LANG = 'en'

const EnPaginationPage = (props) => {
  const PaginationPageComponent = PaginationPageComponentFactory(LANG)

  return (
    <PaginationPageComponent {...props}
      lang={LANG}
      pageName={`Article List Page ${props.current_page_num}`}
      pageDesc='Hi I am Geng-Zhi, using Wildsky as my codename on the Internet. Currently working in Taiwan AI Labs, and I am a keyholder in Taiwan Mozilla Community. With this blog, I hope to find the answers for three big questions: who am I, Where am I from, and Where to go.'
    />
  )
}

export const getStaticPaths = getStaticPathsFactory(LANG)
export const getStaticProps = getStaticPropsFactory(LANG)
export default EnPaginationPage
