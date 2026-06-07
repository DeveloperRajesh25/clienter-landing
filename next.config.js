/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  eslint: {
    // Ignore ESLint during production builds to avoid config issues
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Only check types, don't fail on warnings
    ignoreBuildErrors: false,
  },
  compiler: {
    // Strip console.* (keep errors/warnings) from production bundles for a
    // smaller, faster client.
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: {
    // Import only the used modules from these large barrel packages — smaller
    // client bundles and faster compiles (especially in dev).
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
