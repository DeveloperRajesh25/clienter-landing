'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { HOME_FAQS, type Faq as FaqItem } from '@/lib/faq-data'

export function Faq({ items = HOME_FAQS }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
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
              <span className="font-display text-base font-semibold text-gray-900 sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-45 border-orange-200 bg-orange-50 text-orange-600' : ''
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
                <p className="pb-5 pr-12 text-[15px] leading-relaxed text-gray-600">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
