const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');

module.exports = () => {
  return {
    target: 'serverless',
    poweredByHeader: false,

    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false
        }
      }

      config.module.rules.push({
        test: /\.md$/,
        use: [{
          loader: 'frontmatter-markdown-loader',
          options: {
            markdownIt: markdownIt({ html: true }).use(markdownItPrism),
          }
        }]

      })

      return config
    }
  }
}
