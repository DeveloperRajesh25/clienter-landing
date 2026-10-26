'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="my-8 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className="px-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-gray-900"
            >
              {item.q}
              <Plus
                className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="pb-4 text-sm leading-relaxed text-gray-600">{item.a}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
