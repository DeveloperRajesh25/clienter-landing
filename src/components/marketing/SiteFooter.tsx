import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react'
import { FOOTER_NAV, SOCIALS, SITE_NAME, FOUNDER } from '@/lib/site'

const SOCIAL_ICONS = [
  { href: SOCIALS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIALS.youtube, label: 'YouTube', Icon: Youtube },
  { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIALS.twitter, label: 'X (Twitter)', Icon: Twitter },
]

/**
 * Site-wide marketing footer: brand, link columns, socials, legal bar.
 * Defaults to the light style used across marketing pages; pass `dark` on
 * dark surfaces.
 *
 * Shared by every marketing page (via PageShell) as well as the landing page,
 * so it stays one design in two tones — a footer that differed per page would
 * read as a bug, not art direction.
 */
export function SiteFooter({ dark = false }: { dark?: boolean }) {
  const heading = dark ? 'text-white' : 'text-gray-900'
  const body = dark ? 'text-stone-400' : 'text-gray-500'
  const rule = dark ? 'border-white/[0.06]' : 'border-line/70'

  return (
    <footer
      className={`relative overflow-hidden border-t ${rule} ${dark ? '' : 'bg-white/60 backdrop-blur-sm'}`}
    >
      {/* A single warm bloom anchored under the brand mark — the only
          decoration down here; the rest is structure and hairlines. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.10),transparent_65%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-6 lg:grid-cols-7">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="focus-ember inline-flex items-center gap-2.5 rounded-lg">
              <Image
                src="/logo.png"
                alt="Clienter logo"
                width={32}
                height={32}
                className={`h-8 w-8 rounded-lg ${dark ? 'ring-1 ring-white/10' : 'ring-1 ring-black/5'}`}
              />
              <span className={`font-display text-lg font-bold tracking-tight ${heading}`}>
                {SITE_NAME}
              </span>
            </Link>
            <p className={`mt-5 max-w-xs text-sm leading-relaxed ${body}`}>
              Run your freelance business without the chaos. The all-in-one client, project,
              invoice &amp; team workspace built for freelancers and agencies.
            </p>
            <div className="mt-6 flex items-center gap-1.5">
              {SOCIAL_ICONS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`focus-ember flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 ${
                    dark
                      ? 'text-stone-400 hover:bg-orange-500/10 hover:text-orange-400'
                      : 'text-stone-400 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://www.producthunt.com/products/clienter/launches/clienter?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-clienter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Clienter - Manage clients, projects, payments, quotations in one place | Product Hunt"
                  width="250"
                  height="54"
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1171179&theme=light&t=1785056301787"
                  className="w-full max-w-xs"
                />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h4
                className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                  dark ? 'text-stone-500' : 'text-stone-400'
                }`}
              >
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`focus-ember rounded transition-colors ${
                        dark
                          ? 'text-stone-400 hover:text-orange-400'
                          : 'text-gray-500 hover:text-orange-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-16 flex flex-col items-center justify-between gap-4 border-t pt-7 text-sm sm:flex-row ${rule} ${
            dark ? 'text-stone-500' : 'text-stone-400'
          }`}
        >
          <p>© 2026 {SITE_NAME}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-orange-500">♥</span> by {FOUNDER.name} for Indian
            freelancers
          </p>
        </div>
      </div>
    </footer>
  )
}
