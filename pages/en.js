import { HomeComponentFactory, getStaticPropsFactory } from './index'

const LANG = 'en'

const EnHome = (props) => {
  const HomeComponent = HomeComponentFactory(LANG)

  return (
    <HomeComponent {...props}
      lang={LANG}
      pageName='Home'
      pageDesc='Hi I am Geng-Zhi, using Wildsky as my codename on the Internet. Currently working in Taiwan AI Labs, and I am a keyholder in Taiwan Mozilla Community. With this blog, I hope to find the answers for three big questions: who am I, Where am I from, and Where to go.'
    />
  )
}

export const getStaticProps = getStaticPropsFactory(LANG)
export default EnHome
