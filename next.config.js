module.exports = () => {
  return {
    poweredByHeader: false,
    redirects: async () => {
      return [
        {
          source: '/page/1',
          destination: '/',
          permanent: true
        },
      ]
    },
  }
}
