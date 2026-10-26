'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: 2 | 3
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    )
    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="hidden xl:block">
      <div className="sticky top-28">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">On this page</p>
        <ul className="mt-3 space-y-2 border-l border-gray-200">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block border-l-2 py-1 text-sm transition-colors ${
                  item.level === 3 ? 'pl-6' : 'pl-4'
                } ${
                  activeId === item.id
                    ? 'border-orange-500 font-medium text-orange-700'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
