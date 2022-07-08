// script from https://joonasjokinen.fi/blog/how-to-generate-rss-feed-nextjs

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// const matter = require('frontmatter-markdown-loader');

const getAllPosts = () => {
  const filenames = fs.readdirSync(path.join('data/posts-tw'));
  // const enFilenames = fs.readdirSync(path.join('data/posts-en'));

  const posts = filenames.map((filename) => {
    const filepath = path.join('data/posts-tw/', filename);
    const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
    const { data } = matter(markdownWithMeta);

    return {
      title: data.title,
      date: data.date,
      excerpt: `<img
        src="https://blog.wildsky.cc/images/${data.feature_image}"
        alt="${data.title}'s feature image"
      /> ${data.excerpt}`,
      link: 'https://blog.wildsky.cc/posts' + filename.replace('.md', ''),
    };
  });
  // Sort the blogposts by date
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const CDATA = (content) => `<![CDATA[${content}]]>`

const getRssXml = (blogPosts, latestPostDate) => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	xmlns:georss="http://www.georss.org/georss"
	xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
>
  <channel>
      <title>Wildsky F.</title>
      <atom:link href="https://blog.wildsky.cc/rss.xml" rel="self" type="application/rss+xml" />
      <link>https://blog.wildsky.cc</link>
      <description>Easy things should be easy, and hard things should be possible.</description>
      <language>zh-tw</language>
      <sy:updatePeriod>hourly</sy:updatePeriod>
      <sy:updateFrequency>1</sy:updateFrequency>
      <lastBuildDate>${new Date(latestPostDate).toUTCString()}</lastBuildDate>
      ${blogPosts.map((post) => `
        <item>
            <title>${CDATA(post.title)}</title>
            <link>${post.link}</link>
            <guid>${post.link}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <description>${CDATA(post.excerpt)}</description>
            <dc:creator>${CDATA('Geng-Zh W. Fann')}</dc:creator>
        </item>`
      ).join('')}
  </channel>
</rss>`;

(() => {
  const postData = getAllPosts();
  const rssXml = getRssXml(postData, postData[0].date);

  fs.writeFile(path.join('public', 'rss.xml'), rssXml, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('RSS feed written successfully');
    }
  });
})();
