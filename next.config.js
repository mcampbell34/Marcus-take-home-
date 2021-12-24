module.exports = {
  reactStrictMode: true,
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/search',
        destination: ' https://vercel.com',
        permanent: true,
      },
    ]
  },
}