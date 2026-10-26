'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import type { DocSection } from '@/lib/docs/types'

function SidebarSection({
  section,
  pages,
  basePath,
  currentPath,
}: {
  section: DocSection
  pages: Map<string, { title: string }>
  basePath: string
  currentPath: string
}) {
  const isActive = section.children.some((slug) => currentPath === `${basePath}/${slug}`)
  const [open, setOpen] = useState(isActive)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
          isActive ? 'text-orange-700' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        {section.title}
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="ml-3 mt-1 space-y-0.5 border-l border-gray-200 pl-3">
          {section.children.map((slug) => {
            const page = pages.get(slug)
            if (!page) return null
            const href = `${basePath}/${slug}`
            const active = currentPath === href
            return (
              <li key={slug}>
                <Link
                  href={href}
                  className={`block rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                    active
                      ? 'bg-orange-50 font-medium text-orange-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {page.title}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export function DocsSidebar({
  sections,
  pages,
  basePath,
}: {
  sections: DocSection[]
  pages: Map<string, { title: string }>
  basePath: string
}) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const nav = (
    <div className="space-y-1 py-4">
      <Link
        href={basePath}
        className={`block rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
          pathname === basePath ? 'bg-orange-50 text-orange-700' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        Overview
      </Link>
      {sections.map((section) => (
        <SidebarSection
          key={section.title}
          section={section}
          pages={pages}
          basePath={basePath}
          currentPath={pathname}
        />
      ))}
    </div>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg lg:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <span className="font-display text-sm font-bold text-gray-900">Navigation</span>
              <button onClick={() => setMobileOpen(false)} className="text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-2">{nav}</div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 w-64 overflow-y-auto pr-4" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
          {nav}
        </div>
      </aside>
    </>
  )
}
