import { Html, Head, Main, NextScript } from 'next/document'

export default (props) => {
  const lang = props.dangerousAsPath.includes('/en') ? "en" : "zh-Hant-TW"

  return (
    <Html lang={lang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
