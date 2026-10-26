import { ImageResponse } from 'next/og'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site'
import { OG_LOGO } from './og-logo'

/**
 * Dynamically generated social share image (1200×630) applied site-wide.
 * Next.js serves this for OpenGraph + Twitter cards on every route that doesn't
 * override it.
 *
 * Runs on the edge runtime: this both matches @vercel/og's design and avoids a
 * Windows-only build bug where static prerendering throws `Invalid URL` from
 * fileURLToPath while resolving the default font. On the edge the image is
 * generated on demand instead of at build time.
 */
export const runtime = 'edge'
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PILLS = ['Clients', 'Projects', 'Invoices', 'Team']

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #ffffff 0%, #fffaf5 60%, #ffeedd 100%)',
          color: '#1c1917',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand row — real Clienter logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={OG_LOGO}
            width={68}
            height={68}
            alt=""
            style={{ borderRadius: '16px' }}
          />
          <div style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1px' }}>
            {SITE_NAME}
          </div>
        </div>

        {/* Headline — every multi-child div sets display:flex (Satori requires it) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '78px',
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: '-2.5px',
              maxWidth: '980px',
            }}
          >
            <span>Run your freelance business</span>
            <span style={{ color: '#ea580c' }}>without the chaos</span>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {PILLS.map((p) => (
              <div
                key={p}
                style={{
                  display: 'flex',
                  padding: '10px 22px',
                  borderRadius: '999px',
                  border: '2px solid #fed7aa',
                  background: '#ffffff',
                  color: '#9a3412',
                  fontSize: '26px',
                  fontWeight: 600,
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '28px',
            fontWeight: 600,
          }}
        >
          <span style={{ color: '#ea580c' }}>clienter.co.in</span>
          <span style={{ color: '#d6d3d1' }}>•</span>
          <span style={{ color: '#78716c' }}>Start free — no card required</span>
        </div>
      </div>
    ),
    size
  )
}
