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
 * dark surfaces (the landing page).
 */
export function SiteFooter({ dark = false }: { dark?: boolean }) {
  return (
    <footer
      className={
        dark ? 'relative border-t border-white/[0.06]' : 'border-t border-gray-200 bg-white'
      }
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-7">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Clienter logo"
                width={32}
                height={32}
                className={`h-8 w-8 rounded-lg ${dark ? 'ring-1 ring-white/10' : 'ring-1 ring-black/5'}`}
              />
              <span
                className={`font-display text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}
              >
                {SITE_NAME}
              </span>
            </Link>
            <p
              className={`mt-4 max-w-xs text-sm leading-relaxed ${
                dark ? 'text-stone-400' : 'text-gray-500'
              }`}
            >
              Run your freelance business without the chaos. The all-in-one client, project,
              invoice &amp; team workspace built for freelancers and agencies.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_ICONS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                    dark
                      ? 'border-white/10 text-stone-400 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400'
                      : 'border-gray-200 text-gray-500 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h4 className={`text-sm font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => {
                  const linkClass = dark
                    ? 'text-stone-400 transition-colors hover:text-orange-400'
                    : 'text-gray-500 transition-colors hover:text-orange-600'
                  return (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm sm:flex-row ${
            dark ? 'border-white/[0.06] text-stone-500' : 'border-gray-100 text-gray-400'
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
