'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS, APP_URL } from '@/lib/site'

/**
 * Landing-only header: a floating glass pill over the dark hero. It starts
 * fully transparent and condenses into a blurred, bordered capsule once the
 * page scrolls. The shared light `SiteHeader` still serves every other
 * marketing page.
 */
export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const condensed = scrolled || menuOpen

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border pl-4 pr-3 transition-all duration-300 ${
          condensed
            ? 'border-white/10 bg-[#0C0A09]/80 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Clienter logo"
            width={34}
            height={34}
            priority
            className="h-8 w-8 rounded-lg ring-1 ring-white/10 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Clienter
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-400 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-1.5 md:flex">
          <a
            href={`${APP_URL}/login`}
            className="px-3 py-2 text-sm font-semibold text-stone-300 transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href={`${APP_URL}/signup`}
            className="press inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_20px_-4px_rgba(249,115,22,0.6)] transition-all hover:brightness-110"
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-stone-300 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="animate-fade-in mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-[#0C0A09]/95 p-3 shadow-[0_16px_48px_rgba(0,0,0,0.6)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-stone-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              <a
                href={`${APP_URL}/login`}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-stone-300 hover:bg-white/5 hover:text-white"
              >
                Sign in
              </a>
              <a
                href={`${APP_URL}/signup`}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-3 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_20px_-4px_rgba(249,115,22,0.6)]"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
