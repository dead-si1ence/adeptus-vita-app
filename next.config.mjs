/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  // Required for GitHub Pages - adjust according to your repository name
  basePath: '/adeptus-vita',
  // Set to false or remove if your assets don't work correctly
}

export default nextConfig
