import { HomeComponent } from './index'
import fetchIndexData from '../libs/fetchIndexData'

const EnHome = (props) => {
  return (
    <HomeComponent {...props}
      lang='en'
      pageName='Home'
      pageDesc='Hi I am Geng-Zhi, using Wildsky as my codename on the Internet. Currently working in Taiwan AI Labs, and I am a keyholder in Taiwan Mozilla Community. With this blog, I hope to find the answers for three big questions: who am I, Where am I from, and Where to go.'
    />
  )
}

export const getStaticProps = async () => {
  const ret_props = await fetchIndexData({ lang: 'en' })

  return {
    props: ret_props
  }
}

export default EnHome
