/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY

const nextConfig = {
  reactStrictMode: true,
  //URL 변경, 그걸 유저도 인식가능
  async redirects() {
    return [
      {
        source: '/search/:path*',
        destination: 'https://www.google.com/search?q=:path*',
        permanent: false,
      },
    ]
  },
  //리다이렉트하지만 URL은 변하지 않음.
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ]
  },
}

module.exports = nextConfig
