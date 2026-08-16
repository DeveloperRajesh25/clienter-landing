'use client'

import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Users,
  Filter,
  KanbanSquare,
  ReceiptText,
  PanelsTopLeft,
  BadgeCheck,
  Clock,
  FileText,
  Smartphone,
  Percent,
  Calculator,
  LayoutTemplate,
  Grid3x3,
} from 'lucide-react'
import { NAV_LINKS, APP_URL } from '@/lib/site'
import { SpotlightButton } from '@/components/landing/SpotlightButton'

/**
 * Icon per dropdown item, keyed by href. Kept in the client component (not in
 * the shared site config) so the icon components aren't pulled into every module
 * that imports NAV_LINKS.
 */
const NAV_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  '/features/client-management': Users,
  '/features/crm-lead-pipeline': Filter,
  '/features/project-management': KanbanSquare,
  '/features/invoicing': ReceiptText,
  '/features/client-portal': PanelsTopLeft,
  '/features/verified-reviews': BadgeCheck,
  '/time-converter': Clock,
  '/invoice': FileText,
  '/tools/gst-calculator': Percent,
  '/tools/freelance-rate-calculator': Calculator,
  '/templates': LayoutTemplate,
  '/tools': Grid3x3,
}

/**
 * Global site header: a floating glass pill. Fully
 * transparent at the top, it condenses into a blurred white capsule with a
 * hairline border once the page scrolls.
 */
const APP_BANNER_DISMISSED_KEY = 'clienter-app-banner-dismissed'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [showAppBanner, setShowAppBanner] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (localStorage.getItem(APP_BANNER_DISMISSED_KEY) !== '1') {
      setShowAppBanner(true)
    }
  }, [])

  const dismissAppBanner = () => {
    setShowAppBanner(false)
    localStorage.setItem(APP_BANNER_DISMISSED_KEY, '1')
  }

  const condensed = scrolled || menuOpen

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      {showAppBanner && (
        <Link
          href="/download"
          className="group relative mx-auto mb-2 flex h-9 max-w-5xl items-center justify-center gap-2 rounded-full border border-stone-200/80 bg-white/90 px-4 text-center text-xs font-medium text-gray-700 shadow-[0_4px_16px_-4px_rgba(28,25,23,0.15)] backdrop-blur-xl transition-colors duration-200 hover:bg-white sm:h-10 sm:text-sm"
        >
          <Smartphone className="hidden h-3.5 w-3.5 shrink-0 text-orange-500 sm:block" />
          <span className="truncate">
            <span className="font-semibold text-gray-900">The Clienter mobile app is here.</span>{' '}
            <span className="font-semibold text-orange-600">Download it now</span>
          </span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-0.5 text-orange-500 transition-transform duration-200 group-hover:translate-x-0" />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              dismissAppBanner()
            }}
            aria-label="Dismiss"
            className="absolute right-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-stone-100 hover:text-gray-600"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </Link>
      )}
      <nav
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border pl-4 pr-3 transition-all duration-300 ${
          condensed
            ? 'border-stone-200/80 bg-white/80 shadow-[0_8px_30px_-12px_rgba(28,25,23,0.18)] backdrop-blur-xl'
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
            className="h-8 w-8 rounded-lg ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-display text-lg font-bold tracking-tight text-gray-900">
            Clienter
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) =>
            l.children ? (
              (() => {
                // Wide two-column grid for the big Solutions menu; a compact
                // single column for smaller menus like Tools. The larger panel
                // is right-anchored so it never runs off the viewport edge.
                const wide = l.children.length > 3
                return (
                  <div key={l.label} className="group relative py-2">
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                      {l.label}
                      <ChevronDown className="h-3.5 w-3.5 text-gray-400 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div
                      className={`invisible absolute top-full -mt-1 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                        wide
                          ? 'left-1/2 w-[42rem] -translate-x-1/2 group-hover:translate-x-[-50%]'
                          : 'left-1/2 w-80 -translate-x-1/2 group-hover:translate-x-[-50%]'
                      }`}
                    >
                      {/* Invisible hover bridge */}
                      <div className="absolute inset-x-0 -top-4 h-4 bg-transparent" />
                      <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white/95 p-2.5 shadow-[0_24px_60px_-15px_rgba(28,25,23,0.22)] backdrop-blur-xl">
                        <div className="px-3 pb-2 pt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400">
                          {l.label}
                        </div>
                        <div className={wide ? 'grid grid-cols-2 gap-1' : 'grid grid-cols-1 gap-1'}>
                          {l.children.map((child) => {
                            const Icon = NAV_ICONS[child.href]
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="group/card relative flex items-start gap-3 rounded-2xl p-3 transition-colors duration-150 hover:bg-stone-50"
                              >
                                {Icon && (
                                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-stone-200/80 bg-white text-stone-500 shadow-sm transition-all duration-150 group-hover/card:border-orange-200 group-hover/card:bg-orange-50 group-hover/card:text-orange-600">
                                    <Icon className="h-[18px] w-[18px]" />
                                  </span>
                                )}
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
                                    {child.label}
                                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-orange-500 opacity-0 transition-all duration-150 group-hover/card:translate-x-0 group-hover/card:opacity-100" />
                                  </div>
                                  {child.description && (
                                    <div className="mt-0.5 text-xs leading-relaxed text-stone-500">
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-1.5 md:flex">
          <a
            href={`${APP_URL}/login`}
            className="px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900"
          >
            Sign in
          </a>
          <SpotlightButton
            href={`${APP_URL}/signup`}
            className="px-4 py-2 text-sm font-semibold"
            dropClassName="h-8 w-8"
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5" />
          </SpotlightButton>
        </div>

        <button
          type="button"
          onClick={() => {
            setMenuOpen((o) => !o)
            setOpenGroup(null)
          }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-stone-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="animate-fade-in mx-auto mt-2 max-w-5xl rounded-2xl border border-stone-200 bg-white/95 p-3 shadow-[0_16px_48px_-12px_rgba(28,25,23,0.25)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((l) =>
              l.children ? (
                <div key={l.label} className="flex flex-col py-1">
                  <button
                    type="button"
                    onClick={() => setOpenGroup((g) => (g === l.label ? null : l.label))}
                    aria-expanded={openGroup === l.label}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-stone-50"
                  >
                    {l.label}
                    <ChevronDown
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                        openGroup === l.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openGroup === l.label && (
                    <div className="mt-1 flex flex-col pl-4">
                      {l.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-stone-50 hover:text-gray-900"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-stone-50 hover:text-gray-900"
                >
                  {l.label}
                </Link>
              )
            )}
            <div className="mt-2 flex flex-col gap-2 border-t border-stone-100 pt-3">
              <a
                href={`${APP_URL}/login`}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-gray-700 hover:bg-stone-50"
              >
                Sign in
              </a>
              <a
                href={`${APP_URL}/signup`}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-3 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_6px_20px_-6px_rgba(249,115,22,0.7)]"
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
