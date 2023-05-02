import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import Router from "next/router"
import withGA from "next-ga"
import '../global.css'

dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Taipei')

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withGA('UA-50389098-1', Router)(MyApp)
