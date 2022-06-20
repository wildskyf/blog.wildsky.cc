// script from https://joonasjokinen.fi/blog/how-to-generate-rss-feed-nextjs

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// const matter = require('frontmatter-markdown-loader');

const getAllPosts = () => {
  // Read the posts directory and get blog posts' filenames
  const filenames = fs.readdirSync(path.join('data/posts-tw'));
  // const enFilenames = fs.readdirSync(path.join('data/posts-en'));

  // Go through all filenames
  const posts = filenames.map((filename) => {
    // Full path to the file from project root
    const filepath = path.join('data/posts-tw/', filename);

    // Read the content of the file
    const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');

    // Get all data from the frontmatter
    const { data } = matter(markdownWithMeta);
    // Return everything we need for the RSS feed
    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      link: 'https://blog.wildsky.cc/posts' + filename.replace('.md', ''),
    };
  });
  // Sort the blogposts by date
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const getXmlItems = (blogPosts) => {
  return blogPosts
    .map((post) => {
      return `<item>
            <title>${post.title}</title>
            <link>${post.link}</link>
            <guid>${post.link}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <description>${post.excerpt}</description>
            <dc:creator>Geng-Zh W. Fann</dc:creator>
        </item>
        `;
    })
    .join(''); // Join the array of items into a single long string
};

const getRssXml = (xmlItems, latestPostDate) => {
  return `<?xml version="1.0" ?>
  <rss
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    version="2.0"
  >
    <channel>
        <title>Wildsky F.</title>
        <link>https://blog.wildsky.cc</link>
        <description>Easy things should be easy, and hard things should be possible.</description>
        <language>zh-tw</language>
        <lastBuildDate>${new Date(latestPostDate).toUTCString()}</lastBuildDate>
        ${xmlItems}
    </channel>
  </rss>`;
};

(() => {
  const postData = getAllPosts();
  const xmlItems = getXmlItems(postData);
  const rssXml = getRssXml(xmlItems, postData[0].date);

  fs.writeFile(path.join('public', 'rss.xml'), rssXml, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('RSS feed written successfully');
    }
  });
})();
