import { ArchivesPageComponentFactory, getStaticPathsFactory, getStaticPropsFactory } from '../archives'

const LANG = 'en'

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
