import Head from 'next/head'
import Script from 'next/script'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import Router from "next/router"
import '../global.css'

dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Taipei')

const GA_ID = 'G-QJC649ZTNK'

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="me" href="https://mozilla.social/@wildsky" />
      </Head>

      <Component {...pageProps} />
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
