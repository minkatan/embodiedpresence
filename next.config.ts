import type { NextConfig } from "next";

// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' }, // allow Sanity images
    ],
    // or: domains: ['cdn.sanity.io']
  },
  experimental: { typedRoutes: true },
}
export default nextConfig