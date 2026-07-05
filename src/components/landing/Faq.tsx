'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { HOME_FAQS, type Faq as FaqItem } from '@/lib/faq-data'

/**
 * Accordion FAQ. Defaults to the light marketing style; pass `dark` on dark
 * surfaces (the landing page) to switch to the glass-on-black treatment.
 */
export function Faq({ items = HOME_FAQS, dark = false }: { items?: FaqItem[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div
      className={`mx-auto max-w-3xl rounded-2xl border ${
        dark
          ? 'divide-y divide-white/[0.08] border-white/[0.08] bg-white/[0.03] backdrop-blur-sm'
          : 'divide-y divide-gray-200 border-gray-200 bg-white'
      }`}
    >
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className="px-5 sm:px-6">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span
                className={`font-display text-base font-semibold sm:text-lg ${
                  dark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-transform duration-300 ${
                  isOpen
                    ? dark
                      ? 'rotate-45 border-orange-500/30 bg-orange-500/10 text-orange-400'
                      : 'rotate-45 border-orange-200 bg-orange-50 text-orange-600'
                    : dark
                      ? 'border-white/10 text-stone-400'
                      : 'border-gray-200 text-gray-500'
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-5 pr-12 text-[15px] leading-relaxed ${
                    dark ? 'text-stone-400' : 'text-gray-600'
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
