const sitemap =  require("nextjs-sitemap-generator")
const fs =  require("fs")
const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString()

sitemap({
  baseUrl: "https://blog.wildsky.cc",
  pagesDirectory: "./out/",
  targetDirectory: "./out/",
  ignoredExtensions: ["css", "js", "map", "json"],
  ignoredPaths: ["assets", "_next", "icons"], // Exclude everything that isn't static page
});
