// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },

  // ✅ Externalize the heavy Sanity libs for the server runtime
  serverExternalPackages: ['sanity', '@sanity/vision'],

  // ✅ Do NOT include 'sanity' or '@sanity/vision' here
  // (optional) You can keep next-sanity if you want
  transpilePackages: ['next-sanity'],
}

export default nextConfig