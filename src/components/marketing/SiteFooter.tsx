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

/** Site-wide marketing footer: brand, link columns, socials, legal bar. */
export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Clienter logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg ring-1 ring-black/5"
              />
              <span className="font-display text-lg font-bold text-gray-900">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Run your freelance business without the chaos. The all-in-one client, project,
              invoice &amp; team workspace built for Indian freelancers and agencies.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_ICONS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-gray-900">{col.title}</h4>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        className="text-gray-500 transition-colors hover:text-orange-600"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-500 transition-colors hover:text-orange-600"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-sm text-gray-400 sm:flex-row">
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
