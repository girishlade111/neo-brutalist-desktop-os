/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/neo-brutalist-desktop-os',
  images: {
    unoptimized: true,
  },
}

export default nextConfig