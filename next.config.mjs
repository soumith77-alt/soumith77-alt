/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',           // 👈 this tells Next to make /out
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

