import Router from "next/router"
import withGA from "next-ga"

import '../global.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withGA('UA-50389098-1', Router)(MyApp)
