// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },

  // 👇 make Turbopack/webpack transpile Sanity packages
  transpilePackages: ['sanity', '@sanity/vision'],

  // 👇 help the server components linker with ESM deps
  experimental: {
    serverComponentsExternalPackages: ['@sanity/client', 'sanity', '@sanity/vision'],
  },
}

export default nextConfig