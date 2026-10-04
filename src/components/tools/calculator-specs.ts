/**
 * Formula specs for the free calculator tools. Each spec is pure data + a
 * `compute` function; the generic <CalculatorTool> renders the inputs and
 * outputs. Kept in one client-imported module so the maths lives in one place
 * and is easy to audit.
 *
 * CURRENCY. Every money figure used to be hardcoded in ₹, which made four
 * perfectly general calculators look like Indian tools and gave a visitor in
 * London no reason to trust the output. Specs that are currency-neutral set
 * `currencyAware: true`, mark their money fields `money: true` instead of
 * hardcoding a prefix, and use `format: 'money'` instead of `'inr'`. The
 * visitor picks a currency and the tool follows.
 *
 * The GST and TDS calculators are India-specific BY DEFINITION — they compute an
 * Indian tax — so they stay in ₹ and keep `currencyAware` off. That is not an
 * oversight.
 *
 * Nothing here converts between currencies. Changing the currency relabels the
 * figures; it does not apply an exchange rate, because a calculator that silently
 * applied yesterday's rate would be worse than one that did nothing.
 */

/** Currencies offered by the currency-aware calculators. */
export type Currency = {
  code: string
  symbol: string
  /** Intl locale used for digit grouping — 'en-IN' groups in lakhs. */
  locale: string
  label: string
}

export const CURRENCIES: Currency[] = [
  { code: 'USD', symbol: '$', locale: 'en-US', label: 'USD — US Dollar' },
  { code: 'EUR', symbol: '€', locale: 'de-DE', label: 'EUR — Euro' },
  { code: 'GBP', symbol: '£', locale: 'en-GB', label: 'GBP — Pound Sterling' },
  { code: 'INR', symbol: '₹', locale: 'en-IN', label: 'INR — Indian Rupee' },
  { code: 'AUD', symbol: 'A$', locale: 'en-AU', label: 'AUD — Australian Dollar' },
  { code: 'CAD', symbol: 'C$', locale: 'en-CA', label: 'CAD — Canadian Dollar' },
  { code: 'AED', symbol: 'AED', locale: 'en-AE', label: 'AED — UAE Dirham' },
  { code: 'SGD', symbol: 'S$', locale: 'en-SG', label: 'SGD — Singapore Dollar' },
  { code: 'ZAR', symbol: 'R', locale: 'en-ZA', label: 'ZAR — South African Rand' },
]

export const CURRENCY_BY_CODE: Record<string, Currency> = Object.fromEntries(
  CURRENCIES.map((c) => [c.code, c]),
)

export const DEFAULT_CURRENCY = 'USD'

export type CalcField = {
  key: string
  label: string
  /**
   * A money field. On a `currencyAware` spec the symbol comes from the chosen
   * currency, so do not also set `prefix`.
   */
  money?: boolean
  kind: 'number' | 'select'
  default: number
  min?: number
  max?: number
  step?: number
  prefix?: string
  suffix?: string
  options?: { label: string; value: number }[]
  help?: string
}

export type CalcOutput = {
  key: string
  label: string
  /** 'money' follows the chosen currency; 'inr' is fixed ₹ (GST/TDS only). */
  format: 'money' | 'inr' | 'number' | 'percent' | 'hours'
  primary?: boolean
  help?: string
}

export type CalcSpec = {
  fields: CalcField[]
  outputs: CalcOutput[]
  compute: (v: Record<string, number>) => Record<string, number>
  /** Small print under the tool (e.g. "verify current TDS rates"). */
  note?: string
  /**
   * Show a currency picker and format money in the chosen currency. Off for the
   * GST and TDS calculators, which compute an Indian tax and are ₹ by nature.
   */
  currencyAware?: boolean
  /**
   * An optional tax field the tool adds itself (label, not a rate) so a
   * currency-aware calculator can show a tax-inclusive total without us
   * pretending to know any country's rate. The visitor types their own rate.
   */
  taxable?: boolean
}

const safe = (n: number) => (Number.isFinite(n) ? n : 0)

export const CALCULATOR_SPECS: Record<string, CalcSpec> = {
  'freelance-rate-calculator': {
    currencyAware: true,
    fields: [
      { key: 'income', label: 'Take-home income you want', kind: 'number', default: 60000, min: 0, step: 1000, money: true, help: 'What you want to earn in a year, after business costs.' },
      { key: 'expenses', label: 'Yearly business expenses', kind: 'number', default: 6000, min: 0, step: 500, money: true, help: 'Software, internet, equipment, subscriptions, and so on.' },
      { key: 'hoursPerWeek', label: 'Billable hours per week', kind: 'number', default: 25, min: 1, max: 80, step: 1, suffix: 'hrs', help: 'Actual client-billable hours — not total hours worked.' },
      { key: 'weeks', label: 'Working weeks per year', kind: 'number', default: 46, min: 1, max: 52, step: 1, suffix: 'wks', help: 'Subtract holidays, leave, and sick days.' },
      { key: 'buffer', label: 'Safety buffer / profit', kind: 'number', default: 15, min: 0, max: 100, step: 1, suffix: '%', help: 'Covers unpaid gaps, taxes headroom, and profit.' },
    ],
    outputs: [
      { key: 'hourly', label: 'Suggested hourly rate', format: 'money', primary: true },
      { key: 'day', label: 'Suggested day rate', format: 'money', help: 'Based on 8 billable hours.' },
      { key: 'revenue', label: 'Annual revenue target', format: 'money' },
      { key: 'billableHours', label: 'Billable hours / year', format: 'hours' },
    ],
    compute: (v) => {
      const revenue = (safe(v.income) + safe(v.expenses)) * (1 + safe(v.buffer) / 100)
      const billableHours = safe(v.hoursPerWeek) * safe(v.weeks)
      const hourly = billableHours > 0 ? revenue / billableHours : 0
      return { hourly, day: hourly * 8, revenue, billableHours }
    },
    note: 'A starting point, not a ceiling — price on the value you deliver, and raise rates as you gain proof and demand.',
  },

  'project-cost-calculator': {
    currencyAware: true,
    fields: [
      { key: 'hours', label: 'Estimated hours', kind: 'number', default: 40, min: 0, step: 1, suffix: 'hrs' },
      { key: 'rate', label: 'Your hourly rate', kind: 'number', default: 50, min: 0, step: 5, money: true },
      { key: 'materials', label: 'Materials / other costs', kind: 'number', default: 250, min: 0, step: 50, money: true, help: 'Stock assets, tools, subcontractors, hosting, and so on.' },
      { key: 'contingency', label: 'Contingency buffer', kind: 'number', default: 15, min: 0, max: 100, step: 1, suffix: '%', help: 'For scope surprises and revisions.' },
      { key: 'margin', label: 'Target profit margin', kind: 'number', default: 25, min: 0, max: 90, step: 1, suffix: '%' },
    ],
    outputs: [
      { key: 'price', label: 'Suggested quote', format: 'money', primary: true },
      { key: 'cost', label: 'Your total cost', format: 'money' },
      { key: 'profit', label: 'Your profit', format: 'money' },
      { key: 'withTax', label: 'Quote including your tax rate', format: 'money', help: 'Set the rate above — GST, VAT, sales tax, whatever applies to you.' },
    ],
    taxable: true,
    compute: (v) => {
      const labor = safe(v.hours) * safe(v.rate)
      const base = labor + safe(v.materials)
      const cost = base * (1 + safe(v.contingency) / 100)
      const m = Math.min(safe(v.margin), 89) / 100
      const price = m < 1 ? cost / (1 - m) : cost
      return {
        price,
        cost,
        profit: price - cost,
        withTax: price * (1 + safe(v.taxRate) / 100),
      }
    },
    note: 'The tax line uses the rate you type, not a rate we assume for your country — check the correct one for the service you are selling.',
  },

  'gst-calculator': {
    fields: [
      { key: 'amount', label: 'Amount', kind: 'number', default: 10000, min: 0, step: 100, prefix: '₹' },
      { key: 'rate', label: 'GST rate', kind: 'select', default: 18, options: [
        { label: '0%', value: 0 },
        { label: '5%', value: 5 },
        { label: '12%', value: 12 },
        { label: '18%', value: 18 },
        { label: '28%', value: 28 },
      ] },
      { key: 'mode', label: 'Direction', kind: 'select', default: 0, options: [
        { label: 'Add GST (amount is pre-GST)', value: 0 },
        { label: 'Remove GST (amount includes GST)', value: 1 },
      ] },
    ],
    outputs: [
      { key: 'total', label: 'Total (incl. GST)', format: 'inr', primary: true },
      { key: 'base', label: 'Net amount', format: 'inr' },
      { key: 'gst', label: 'GST amount', format: 'inr' },
      { key: 'cgst', label: 'CGST', format: 'inr' },
      { key: 'sgst', label: 'SGST', format: 'inr' },
    ],
    compute: (v) => {
      const rate = safe(v.rate) / 100
      const amount = safe(v.amount)
      let base: number
      let total: number
      if (safe(v.mode) === 1) {
        base = 1 + rate > 0 ? amount / (1 + rate) : amount
        total = amount
      } else {
        base = amount
        total = amount * (1 + rate)
      }
      const gst = total - base
      return { total, base, gst, cgst: gst / 2, sgst: gst / 2 }
    },
    note: 'CGST/SGST applies within a state; for inter-state supply it is a single IGST at the same total rate. Confirm the correct HSN/SAC rate for your service.',
  },

  'tds-calculator': {
    fields: [
      { key: 'amount', label: 'Payment amount (gross)', kind: 'number', default: 50000, min: 0, step: 500, prefix: '₹' },
      { key: 'rate', label: 'TDS rate', kind: 'select', default: 10, options: [
        { label: '10% — professional/technical fees (194J)', value: 10 },
        { label: '2% — contractor (194C, companies)', value: 2 },
        { label: '1% — contractor (194C, individual/HUF)', value: 1 },
        { label: '5%', value: 5 },
        { label: '0% — no TDS', value: 0 },
      ] },
    ],
    outputs: [
      { key: 'tds', label: 'TDS deducted', format: 'inr', primary: true },
      { key: 'net', label: 'Net you receive', format: 'inr' },
      { key: 'gross', label: 'Gross invoice', format: 'inr' },
    ],
    compute: (v) => {
      const tds = safe(v.amount) * safe(v.rate) / 100
      return { tds, net: safe(v.amount) - tds, gross: safe(v.amount) }
    },
    note: 'Indicative only. TDS sections, rates, and thresholds change — confirm the section that applies to you and claim the credit in your return via Form 26AS/AIS.',
  },

  'profit-margin-calculator': {
    currencyAware: true,
    fields: [
      { key: 'revenue', label: 'Revenue / price', kind: 'number', default: 5000, min: 0, step: 100, money: true },
      { key: 'cost', label: 'Total cost', kind: 'number', default: 3250, min: 0, step: 100, money: true },
    ],
    outputs: [
      { key: 'profit', label: 'Profit', format: 'money', primary: true },
      { key: 'margin', label: 'Profit margin', format: 'percent' },
      { key: 'markup', label: 'Markup', format: 'percent' },
    ],
    compute: (v) => {
      const profit = safe(v.revenue) - safe(v.cost)
      const margin = safe(v.revenue) > 0 ? (profit / safe(v.revenue)) * 100 : 0
      const markup = safe(v.cost) > 0 ? (profit / safe(v.cost)) * 100 : 0
      return { profit, margin, markup }
    },
  },

  'retainer-calculator': {
    currencyAware: true,
    fields: [
      { key: 'hours', label: 'Hours reserved per month', kind: 'number', default: 20, min: 1, step: 1, suffix: 'hrs' },
      { key: 'rate', label: 'Your hourly rate', kind: 'number', default: 60, min: 0, step: 5, money: true },
      { key: 'discount', label: 'Retainer discount', kind: 'number', default: 10, min: 0, max: 50, step: 1, suffix: '%', help: 'A modest discount in exchange for guaranteed monthly income.' },
      { key: 'months', label: 'Commitment length', kind: 'number', default: 12, min: 1, max: 36, step: 1, suffix: 'mo' },
    ],
    outputs: [
      { key: 'monthly', label: 'Monthly retainer', format: 'money', primary: true },
      { key: 'effective', label: 'Effective hourly rate', format: 'money' },
      { key: 'contract', label: 'Total contract value', format: 'money' },
    ],
    compute: (v) => {
      const gross = safe(v.hours) * safe(v.rate)
      const monthly = gross * (1 - safe(v.discount) / 100)
      const effective = safe(v.hours) > 0 ? monthly / safe(v.hours) : 0
      return { monthly, effective, contract: monthly * safe(v.months) }
    },
    note: 'Cap the reserved hours in writing so a retainer doesn’t quietly turn into unlimited work for a fixed fee.',
  },
}
