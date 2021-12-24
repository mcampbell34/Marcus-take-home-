module.exports = {
  reactStrictMode: true,
}
  module.exports = {
    async redirects() {
      return [
        {
          source: '/Users/mb/Desktop/Take%20Home%20Assignment%20/Marcus-take-home-/search',
          destination: 'https://vercel.com',
          permanent: false,
        },
      ]
    },
  }