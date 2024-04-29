import NextHead from 'next/head'
import blog_info from '@/data/blog_info.json'

const Head = ({ pageName, pageDesc, pageImage }) => {
  const pageTitle = `${pageName} | ${blog_info.name}`
  const desc = pageDesc
  const imgUrl = pageImage || 'https://blog.wildsky.cc/icons/ms-icon-310x310.png'

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <link rel="alternate" type="application/rss+xml" title="Wildsky&#039;s BLOG &raquo; Feed" href="https://blog.wildsky.cc/rss.xml" />
      <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/manifest.json" />
      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
      <meta name="msapplication-TileColor" content="#001A33" />
      <meta name="theme-color" content="#001A33" />

      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={desc} />
      <meta itemProp="image" content={imgUrl} />

      <meta name="twitter:card" content={pageImage} />
      <meta name="twitter:site" content="@wildskyf" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image:src" content={imgUrl} />

      {
        // TODO
        // <meta property="og:type" content="article" />
        // <meta property="og:url" content={} />
        // <meta property="article:tag" content="Article Tag" />
        // <meta property="fb:admins" content="Facebook numberic ID" />
        // <meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
        // <meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
      }
      <meta property="og:title" content={pageTitle} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:description" content={desc} />
      <meta property="og:site_name" content={blog_info.name} />
      <meta property="article:section" content="Article Section" />
    </NextHead>
  )
}

export default Head
