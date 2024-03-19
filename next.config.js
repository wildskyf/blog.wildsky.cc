const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');

module.exports = () => {
  return {
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
    },

    redirects: [
      {
        "source": "/.well-known/webfinger*",
        "destination": "https://fed.brid.gy/.well-known/webfinger",
        "permanent": false
      },
      {
        "source": "/.well-known/host-meta*",
        "destination": "https://fed.brid.gy/.well-known/host-meta:splat",
        "permanent": false
      }
    ]
  }
}
