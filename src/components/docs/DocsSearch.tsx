'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, FileText, HelpCircle } from 'lucide-react'
import type { SearchItem } from '@/lib/docs/types'

export function DocsSearch({ items }: { items: SearchItem[] }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const results = query.length >= 2
    ? items
        .map((item) => {
          const q = query.toLowerCase()
          const titleMatch = item.title.toLowerCase().includes(q) ? 2 : 0
          const descMatch = item.description.toLowerCase().includes(q) ? 1 : 0
          const catMatch = item.category.toLowerCase().includes(q) ? 0.5 : 0
          const score = titleMatch + descMatch + catMatch
          return { ...item, score }
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 12)
    : []

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setOpen(true)
    }
    if (e.key === 'Escape') setOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  function navigate(slug: string, type: 'docs' | 'help') {
    router.push(`/${type}/${slug}`)
    setOpen(false)
    setQuery('')
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50/30"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">Search documentation...</span>
        <kbd className="hidden rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-400 sm:inline">
          Ctrl K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative mx-4 w-full max-w-xl rounded-2xl border border-gray-200 bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b border-gray-200 px-4">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search docs and help articles..."
                className="flex-1 border-0 bg-transparent py-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {query.length >= 2 && (
              <div className="max-h-80 overflow-y-auto p-2">
                {results.length === 0 ? (
                  <p className="px-3 py-6 text-center text-sm text-gray-500">No results found for &ldquo;{query}&rdquo;</p>
                ) : (
                  <ul className="space-y-0.5">
                    {results.map((item) => (
                      <li key={`${item.type}-${item.slug}`}>
                        <button
                          onClick={() => navigate(item.slug, item.type)}
                          className="flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-orange-50"
                        >
                          {item.type === 'docs' ? (
                            <FileText className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                          ) : (
                            <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                          )}
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-900">{item.title}</p>
                            <p className="mt-0.5 truncate text-xs text-gray-500">{item.description}</p>
                          </div>
                          <span className="ml-auto shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                            {item.type === 'docs' ? 'Docs' : 'Help'}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
