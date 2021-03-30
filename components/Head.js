import NextHead from 'next/head'

const Head = ({ pageName, pageDesc, pageImage }) => {
  const site_name = 'Wildsky F.'
  const pageTitle = `${pageName} | ${site_name}`
  const desc = pageDesc
  const imgUrl = pageImage || 'https://blog.wildsky.cc/wp-content/uploads/2019/02/10931296_1023005764381319_5713723914193790237_n.jpg'

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />

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
      <meta property="og:site_name" content={site_name} />
      <meta property="article:section" content="Article Section" />
    </NextHead>
  )
}

export default Head
