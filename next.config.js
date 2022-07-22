const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');

module.exports = () => {
  return {
    poweredByHeader: false,

    webpack: (config, { isServer }) => {
      config.resolve.fallback = { fs: false };

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
