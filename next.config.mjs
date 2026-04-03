/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/suc-khoe', destination: '/blog', permanent: true },
      { source: '/suc-khoe/:path*', destination: '/blog/:path*', permanent: true },
    ]
  },
}

export default nextConfig
