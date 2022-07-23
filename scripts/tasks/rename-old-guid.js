const fs = require('fs/promises')
const matter = require('gray-matter')

;(async () => {
  const folders = [ /* './data/posts-tw', */ './data/posts-en']

  folders.forEach(async folder => {
    const filenames = await fs.readdir(folder)

    filenames
      .filter(name => name.match(/.md$/))
      .forEach(async (filename) => {
        const content = await fs.readFile(`${folder}/${filename}`)
        const markdownObject = matter(content)

        if (!markdownObject.data.guid.match(/^http:\/\/blog.wildsky.cc/)) { return }

        const resultGuid = filename.replace(/.md$/, '')
        console.log(`${markdownObject.data.guid}  >>>>  ${resultGuid}`)

        markdownObject.data.guid = resultGuid

        const result = matter.stringify(markdownObject.content, markdownObject.data)
        await fs.writeFile(`${folder}/${filename}`, result)
      })
  })
})()
