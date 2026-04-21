/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/v0-website-replication-guide',
  assetPrefix: '/v0-website-replication-guide/',
}

export default nextConfig