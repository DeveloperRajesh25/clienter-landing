'use client'

import { useMemo, useState } from 'react'
import { Info } from 'lucide-react'
import {
  CALCULATOR_SPECS,
  CURRENCIES,
  CURRENCY_BY_CODE,
  DEFAULT_CURRENCY,
  type CalcOutput,
  type CalcField,
} from './calculator-specs'

/**
 * Where the visitor's currency choice is remembered, so picking GBP on the rate
 * calculator carries over to the project cost calculator. Per-browser only: it
 * never reaches a server and nothing depends on it being there.
 */
const CURRENCY_KEY = 'clienter:tool-currency'

function readStoredCurrency(): string {
  // Wrapped because localStorage throws in a private window with site data
  // blocked, and returns nothing at all during a thumbnail capture.
  try {
    const v = localStorage.getItem(CURRENCY_KEY)
    return v && CURRENCY_BY_CODE[v] ? v : DEFAULT_CURRENCY
  } catch {
    return DEFAULT_CURRENCY
  }
}

function storeCurrency(code: string) {
  try {
    localStorage.setItem(CURRENCY_KEY, code)
  } catch {
    // A visitor who cannot store a preference still gets a working calculator.
  }
}

/**
 * The tax field the currency-aware calculators add themselves. The rate is typed
 * by the visitor, never assumed from their country — we support a custom tax rate
 * per line item and GST for India, and nothing else, so guessing a VAT rate here
 * would be implying a capability the product does not have.
 */
const TAX_FIELD: CalcField = {
  key: 'taxRate',
  label: 'Your tax rate',
  kind: 'number',
  default: 0,
  min: 0,
  max: 100,
  step: 0.5,
  suffix: '%',
  help: 'GST, VAT, sales tax — whatever applies where you invoice. Leave at 0 to ignore.',
}

/**
 * Generic, config-driven calculator. Reads its spec from CALCULATOR_SPECS by
 * slug, renders labelled inputs, and recomputes outputs live as you type. Pure
 * client-side — nothing is sent anywhere, and there is no transfer into the app.
 *
 * Currency: specs marked `currencyAware` show a picker and format money in the
 * chosen currency. Changing the currency RELABELS the figures — it does not
 * convert them, because applying a stale exchange rate silently would be worse
 * than doing nothing. The GST and TDS calculators compute an Indian tax and stay
 * in rupees by design.
 */
export function CalculatorTool({ slug }: { slug: string }) {
  const spec = CALCULATOR_SPECS[slug]
  const [currencyCode, setCurrencyCode] = useState<string>(readStoredCurrency)
  const [values, setValues] = useState<Record<string, number>>(() =>
    spec ? Object.fromEntries(spec.fields.map((f) => [f.key, f.default])) : {},
  )

  const fields = useMemo(() => {
    if (!spec) return []
    return spec.taxable ? [...spec.fields, TAX_FIELD] : spec.fields
  }, [spec])

  const outputs = useMemo(() => (spec ? spec.compute(values) : {}), [spec, values])

  const currency = CURRENCY_BY_CODE[currencyCode] ?? CURRENCY_BY_CODE[DEFAULT_CURRENCY]

  // One formatter per currency rather than per render.
  const formatters = useMemo(
    () => ({
      money: new Intl.NumberFormat(currency.locale, { maximumFractionDigits: 0 }),
      inr: new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }),
      one: new Intl.NumberFormat(currency.locale, { maximumFractionDigits: 1 }),
    }),
    [currency],
  )

  function formatValue(value: number, format: CalcOutput['format']): string {
    const v = Number.isFinite(value) ? value : 0
    switch (format) {
      case 'money':
        return `${currency.symbol}${formatters.money.format(Math.round(v))}`
      case 'inr':
        return `₹${formatters.inr.format(Math.round(v))}`
      case 'percent':
        return `${formatters.one.format(v)}%`
      case 'hours':
        return `${formatters.money.format(Math.round(v))} hrs`
      default:
        return formatters.money.format(Math.round(v))
    }
  }

  if (!spec) return null

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Inputs */}
      <div className="rounded-3xl border border-stone-200/70 bg-white/70 p-6 shadow-soft backdrop-blur-sm sm:p-8">
        {spec.currencyAware && (
          <div className="mb-6 border-b border-stone-200/70 pb-5">
            <label htmlFor="tool-currency" className="text-sm font-semibold text-gray-800">
              Currency
            </label>
            <select
              id="tool-currency"
              value={currencyCode}
              onChange={(e) => {
                setCurrencyCode(e.target.value)
                storeCurrency(e.target.value)
              }}
              className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-[15px] text-gray-900 shadow-sm outline-none transition-colors focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <p className="mt-1.5 text-xs leading-relaxed text-stone-400">
              Changes the labels, not the numbers — no exchange rate is applied, so enter your figures
              in the currency you picked.
            </p>
          </div>
        )}

        <div className="space-y-5">
          {fields.map((field) => {
            // A money field takes its symbol from the chosen currency; everything
            // else keeps whatever prefix the spec declared.
            const prefix = field.money ? currency.symbol : field.prefix
            return (
              <div key={field.key}>
                <label htmlFor={field.key} className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold text-gray-800">{field.label}</span>
                </label>
                <div className="relative mt-2">
                  {field.kind === 'select' ? (
                    <select
                      id={field.key}
                      value={values[field.key]}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, [field.key]: Number(e.target.value) }))
                      }
                      className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-[15px] text-gray-900 shadow-sm outline-none transition-colors focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    >
                      {field.options?.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <>
                      {prefix && (
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          {prefix}
                        </span>
                      )}
                      <input
                        id={field.key}
                        type="number"
                        inputMode="decimal"
                        value={Number.isFinite(values[field.key]) ? values[field.key] : ''}
                        min={field.min}
                        max={field.max}
                        step={field.step ?? 1}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, [field.key]: Number(e.target.value) }))
                        }
                        className={`w-full rounded-xl border border-stone-200 bg-white py-3 text-[15px] text-gray-900 shadow-sm outline-none transition-colors focus:border-orange-400 focus:ring-2 focus:ring-orange-100 ${
                          prefix ? 'pl-10 pr-4' : 'px-4'
                        } ${field.suffix ? 'pr-14' : ''}`}
                      />
                      {field.suffix && (
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                          {field.suffix}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {field.help && (
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-400">{field.help}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Outputs */}
      <div className="flex flex-col gap-4">
        {spec.outputs.map((out) => {
          const primary = out.primary
          return (
            <div
              key={out.key}
              className={`rounded-2xl border p-5 shadow-soft ${
                primary
                  ? 'border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50'
                  : 'border-stone-200/70 bg-white/70 backdrop-blur-sm'
              }`}
            >
              <p className="text-sm font-medium text-gray-500">{out.label}</p>
              <p
                className={`mt-1 font-display font-extrabold tracking-tight text-gray-900 ${
                  primary ? 'text-4xl' : 'text-2xl'
                }`}
              >
                {formatValue(outputs[out.key] ?? 0, out.format)}
              </p>
              {out.help && <p className="mt-1 text-xs text-stone-400">{out.help}</p>}
            </div>
          )
        })}
        {spec.note && (
          <p className="flex items-start gap-2 px-1 text-xs leading-relaxed text-stone-400">
            <Info className="mt-0.5 h-3.5 w-3.5 flex-none" />
            <span>{spec.note}</span>
          </p>
        )}
      </div>
    </div>
  )
}
