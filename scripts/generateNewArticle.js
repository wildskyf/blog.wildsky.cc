const dayjs = require('dayjs');
const { writeFile } = require('fs/promises');

(async () => {
  const date = dayjs();
  const slug = process.argv[process.argv.length - 1];

  if (slug[0] === '/') { return console.error('you forgot to input slug'); }

  const filename = `${date.format('YYYY-MM-DD-hh-mm-ss')}_${slug}`

  const template = `---
title: ""
date: ${date.format('YYYY-MM-DDThh:mm:ss')}
slug: "${slug}"
excerpt: ""
feature_image: ""
guid: "${filename}"
---
`;

  const path = `${__dirname}/../data/posts-tw/${filename}.md`;
  await writeFile(path, template);

  console.log(`Article ${filename} generated.`);
  console.log(`The path is: ${path}`);
})();
