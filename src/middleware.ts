import { NextResponse, type NextRequest } from 'next/server'

/**
 * Forward the visitor's real IP to the APP on proxied requests.
 *
 * Business pages, /agencies and their /api/public/* posts are rewritten to
 * app.clienter.co.in (see next.config.js). The app rate-limits those routes per
 * IP, and behind this proxy the connecting IP it sees would be Vercel's — every
 * visitor would share one quota. So this attaches the IP Vercel gave US, plus a
 * shared secret the app checks before trusting it (getClientIp in the app's
 * src/lib/rate-limit.ts). Without CLIENTER_PROXY_SECRET set, nothing is added
 * and the app falls back to its own view of the IP.
 */
export function middleware(req: NextRequest) {
  const secret = process.env.CLIENTER_PROXY_SECRET
  if (!secret) return NextResponse.next()

  const ip =
    req.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip')?.trim() ||
    ''
  if (!ip) return NextResponse.next()

  const headers = new Headers(req.headers)
  headers.set('x-clienter-client-ip', ip)
  headers.set('x-clienter-proxy-secret', secret)
  return NextResponse.next({ request: { headers } })
}

// Only the paths that can end up proxied: the marketplace, the public API, and
// single-segment (+ sub-path) handles. Static files and Next internals never.
export const config = {
  matcher: ['/agencies/:path*', '/agencies', '/api/public/:path*', '/((?!_next/|api/|.*\\..*).+)'],
}
