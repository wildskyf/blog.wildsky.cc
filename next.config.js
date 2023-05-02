const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');

module.exports = () => {
  return {
    output: 'export',

    poweredByHeader: false,

    images: {
      unoptimized: true
    },

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
