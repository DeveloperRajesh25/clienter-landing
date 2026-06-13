/** @type {import('next').NextConfig} */

// Content-Security-Policy. The client is fully same-origin: the waitlist/contact
// forms POST to our own /api routes (Supabase is only ever touched server-side
// with the service-role key), and next/font self-hosts its fonts under /_next.
// So connect-src/font-src fall back to 'self'. 'unsafe-inline' is required for
// Next.js hydration scripts and the inline JSON-LD structured-data blocks.
//
// In development, Next.js's Fast Refresh / HMR needs 'unsafe-eval' to run the
// client bundle and a websocket connection for hot updates — without them the
// dev server renders a blank page (no client JS = JS-revealed content stays
// hidden). These dev-only relaxations never ship to production.
const isDev = process.env.NODE_ENV !== 'production'

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  `connect-src 'self' https://api.web3forms.com${isDev ? ' ws: http://localhost:*' : ''}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join('; ')

// Applied to every route.
const securityHeaders = [
  { key: 'Content-Security-Policy', value: CSP },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

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
  async headers() {
    return [
      // Security headers on every route.
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // The API must never be cached — every request hits the function fresh.
      {
        source: '/api/:path*',
        headers: [{ key: 'Cache-Control', value: 'no-store, max-age=0' }],
      },
      // Static public assets (logos, photos, fonts): long-lived, immutable so
      // repeat visits and crawlers are served from Vercel's edge cache.
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
