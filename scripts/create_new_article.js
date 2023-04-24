const fs = require('fs/promises')
const dayjs = require('dayjs')

if (process.argv.length !== 3) {
  throw new Error('please input article slug')
}

const articleSlug = process.argv[2]
const currentTimeObj = dayjs()
const currentTimestamp = currentTimeObj.format('YYYY-MM-DD-hh-mm-ss')
const filePath = `./src/data/posts-tw/${currentTimestamp}_${articleSlug}.md`
const defaultContent = `---
title: ""
date: ${currentTimeObj.format()}
slug: "${articleSlug}"
excerpt: ""
feature_image: ""
guid: "${articleSlug}"
---
`

;(async () => {
  const err = await fs.writeFile(filePath, defaultContent)
  if (err) {
    console.error(err)
    return
  }

  console.log(`${filePath} has been created.`)
})()
