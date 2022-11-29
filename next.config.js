module.exports = () => {
  return {
    poweredByHeader: false,

    webpack: (config, { isServer }) => {
      config.resolve.fallback = { fs: false };

      config.module.rules.push({
        test: /\.md$/,
        use: 'frontmatter-markdown-loader'
      })

      return config
    }
  }
}
