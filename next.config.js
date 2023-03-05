/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  env: {
    mongodburl: "mongodb+srv://mirasma:awsedr1345@cluster0.fm2opyj.mongodb.net/?retryWrites=true&w=majority"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: ''
      },
    ],
  },
}

module.exports = nextConfig
