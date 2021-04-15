const sitemap =  require("nextjs-sitemap-generator")
const fs =  require("fs")
const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString()

sitemap({
  baseUrl: "https://blog.wildsky.cc",
  sitemapFilename: "sitemap.xml",
  pagesDirectory: "./out/",
  targetDirectory: "./out/",
  ignoredExtensions: ["css", "js", "map", "json", "xml"],
  ignoredPaths: ["assets", "_next", "icons"], // Exclude everything that isn't static page
});
