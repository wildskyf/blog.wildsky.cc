import { PageComponentFactory, getStaticPathsFactory, getStaticPropsFactory } from '../[page_slug]'

const LANG = 'en'

const Page = (props) => {
  const PageComponent = PageComponentFactory(LANG)
  return (
    <PageComponent {...props}
      lang={LANG}
      pageName={props.page_title}
      pageDesc={props.page_content && props.page_content.substring(0, 70)}
    />
  )
}

export const getStaticPaths = getStaticPathsFactory(LANG)
export const getStaticProps = getStaticPropsFactory(LANG)
export default Page
