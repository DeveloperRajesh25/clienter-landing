'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS, APP_URL } from '@/lib/site'

/**
 * Marketing header used on every public page. Unlike in-page anchor navs, these
 * links are real routes (e.g. /features) so navigation works from any page.
 * Sticky + translucent-on-scroll, with an accessible mobile menu.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-gray-200/80 bg-white/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Clienter logo"
              width={34}
              height={34}
              priority
              className="h-8 w-8 rounded-lg shadow-sm ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-display text-lg font-bold tracking-tight text-gray-900">
              Clienter
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`${APP_URL}/login`}
              className="px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900"
            >
              Sign in
            </a>
            <Link
              href="/#waitlist"
              className="press inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-800 hover:shadow-md"
            >
              Join waitlist
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="animate-fade-in border-b border-gray-200 bg-white px-4 pb-5 pt-2 shadow-lg md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <a
                href={`${APP_URL}/login`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50"
              >
                Sign in
              </a>
              <Link
                href="/#waitlist"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gray-900 px-4 py-3 text-base font-semibold text-white"
              >
                Join waitlist
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
