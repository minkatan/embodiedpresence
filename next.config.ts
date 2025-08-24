// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },

  // ✅ NEW (Next 15.5): use this, not the old `experimental.serverComponentsExternalPackages`
  serverExternalPackages: ['sanity', '@sanity/vision'],

  // ✅ Do NOT list 'sanity' or '@sanity/vision' here
  // Keep helpers only (optional)
  transpilePackages: ['next-sanity'],
}

export default nextConfig