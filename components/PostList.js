import Link from 'next/link'

const PostList = ({ postList }) => {
  return (
    <ul className="flex flex-col">
      {
        postList.map(post => {
          return (
            <li key={post.guid}>
              <article>
                <Link href={`/posts/${post.slug}`}>
                  <a>
                    <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
                  </a>
                </Link>
                <div className="article-content">
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                <Link href={`/posts/${post.slug}`}>
                  <a>More</a>
                </Link>
                </div>
              </article>
            </li>
          )
        })
      }

      <style jsx>{`
        ul li a {
          display: block;
          padding: 1rem 0;
          margin: 0 20px;
        }
      `}</style>
    </ul>
  )
}

export default PostList
