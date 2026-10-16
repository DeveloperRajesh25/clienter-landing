'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { formatInr, formatUsd, type PlanPrice } from '@/lib/pricing'

/**
 * Which billing price list the visitor is looking at. INDIA is always the
 * default — we never guess "international" from the browser. A visitor opts in
 * with the toggle, and the choice is remembered for the next visit.
 */
export type BillingRegion = 'india' | 'international'

const STORAGE_KEY = 'clienter:billing-region'

const Ctx = createContext<{ region: BillingRegion; setRegion: (r: BillingRegion) => void }>({
  region: 'india',
  setRegion: () => {},
})

export function BillingRegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegionState] = useState<BillingRegion>('india')

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'international') setRegionState('international')
    } catch {
      /* storage blocked — stay on India */
    }
  }, [])

  const setRegion = (r: BillingRegion) => {
    setRegionState(r)
    try {
      localStorage.setItem(STORAGE_KEY, r)
    } catch {
      /* ignore */
    }
  }

  return <Ctx.Provider value={{ region, setRegion }}>{children}</Ctx.Provider>
}

export function useBillingRegion() {
  return useContext(Ctx)
}

/** India / International switch. */
export function RegionToggle({ className = '' }: { className?: string }) {
  const { region, setRegion } = useBillingRegion()
  const options: { value: BillingRegion; label: string }[] = [
    { value: 'india', label: 'India · ₹ INR' },
    { value: 'international', label: 'International · $ USD' },
  ]
  return (
    <div
      role="group"
      aria-label="Billing region"
      className={`inline-flex rounded-full border border-stone-200 bg-white/80 p-1 shadow-soft ${className}`}
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={region === o.value}
          onClick={() => setRegion(o.value)}
          className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
            region === o.value ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

/** The main price figure for a plan, in the selected region's currency. */
export function PriceAmount({ price }: { price: PlanPrice }) {
  const { region } = useBillingRegion()
  return <>{region === 'india' ? formatInr(price) : formatUsd(price)}</>
}

/** The small line under the price: free note, or the other region's note. */
export function PriceNote({
  price,
  freeText,
  className,
}: {
  price: PlanPrice
  freeText: string
  className?: string
}) {
  const { region } = useBillingRegion()
  if (price.usd === 0) return <span className={className}>{freeText}</span>
  return (
    <span className={className}>
      {region === 'india'
        ? 'Billed in INR via Razorpay — UPI, cards, net banking'
        : 'Billed in USD via PayPal — outside India'}
    </span>
  )
}
