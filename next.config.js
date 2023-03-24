/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/fireclint/data-finance-react-tailwind/main/src/assets/**',
      },
    ],
  },
}

module.exports = nextConfig
