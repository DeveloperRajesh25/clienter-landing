import { Users, Briefcase, FileText, TrendingUp, ArrowUpRight, Check } from 'lucide-react'

const STAT_CARDS = [
  { icon: TrendingUp, label: 'Revenue', value: '₹2.4L', tint: 'bg-emerald-400/10 text-emerald-400' },
  { icon: Users, label: 'Clients', value: '18', tint: 'bg-sky-400/10 text-sky-400' },
  { icon: Briefcase, label: 'Projects', value: '24', tint: 'bg-orange-400/10 text-orange-400' },
  { icon: FileText, label: 'Invoices', value: '9', tint: 'bg-violet-400/10 text-violet-400' },
]

const BARS = [40, 58, 35, 72, 50, 88, 64, 95]

/**
 * Dark, stylized in-product preview for the landing hero. Pure presentation —
 * no real data — built from the same design language as the actual dashboard,
 * restyled as glass-on-black so it sits inside the landing's dark theme.
 * (The light `HeroPreview` still serves the /demo page.)
 */
export function DashboardPreview() {
  return (
    <div className="relative">
      {/* App window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#12100E]/90 shadow-2xl shadow-black/60 backdrop-blur-xl">
        {/* Top edge light */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
          <div className="ml-3 hidden h-6 flex-1 items-center rounded-md border border-white/[0.06] bg-white/[0.03] px-3 text-[11px] text-stone-500 sm:flex">
            app.clienter.co.in/dashboard
          </div>
        </div>

        <div className="grid grid-cols-12">
          {/* Mini sidebar */}
          <aside className="col-span-3 hidden flex-col gap-1 border-r border-white/[0.06] p-3 sm:flex">
            <div className="mb-2 flex items-center gap-2 px-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-500 to-amber-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
              <div className="h-2.5 w-16 rounded bg-white/10" />
            </div>
            {['Dashboard', 'Clients', 'Projects', 'Invoices', 'Team'].map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                  i === 0 ? 'bg-orange-500/10' : ''
                }`}
              >
                <div className={`h-3 w-3 rounded ${i === 0 ? 'bg-orange-400' : 'bg-white/10'}`} />
                <div className={`h-2 rounded ${i === 0 ? 'w-14 bg-orange-400/50' : 'w-12 bg-white/10'}`} />
              </div>
            ))}
          </aside>

          {/* Main panel */}
          <div className="col-span-12 space-y-4 p-4 sm:col-span-9 sm:p-5">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {STAT_CARDS.map(({ icon: Icon, label, value, tint }) => (
                <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${tint}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-2 font-display text-lg font-bold text-white">{value}</div>
                  <div className="text-[11px] text-stone-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Chart + client list */}
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 lg:col-span-3">
                <div className="flex items-center justify-between">
                  <div className="h-2.5 w-24 rounded bg-white/10" />
                  <div className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                    <ArrowUpRight className="h-3 w-3" /> +18%
                  </div>
                </div>
                <div className="mt-4 flex h-24 items-end gap-2">
                  {BARS.map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t bg-gradient-to-t from-orange-500/25 to-orange-400 ${
                        i === BARS.length - 1 ? 'shadow-[0_0_16px_rgba(249,115,22,0.6)]' : ''
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-5 space-y-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 lg:col-span-2">
                <div className="mb-1 h-2.5 w-20 rounded bg-white/10" />
                {['Acme Co.', 'Nova Studio', 'Pixel Labs'].map((name) => (
                  <div key={name} className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/15 text-[10px] font-bold text-orange-400">
                      {name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-semibold text-stone-300">{name}</div>
                      <div className="h-1.5 w-10 rounded bg-white/[0.06]" />
                    </div>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent cards */}
      <div className="absolute -left-4 top-24 hidden animate-float rounded-xl border border-white/10 bg-[#1A1512]/90 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
            <FileText className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-white">Invoice paid</div>
            <div className="text-[10px] text-stone-500">₹45,000 · Acme Co.</div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 bottom-16 hidden animate-float-slow rounded-xl border border-white/10 bg-[#1A1512]/90 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400/10 text-orange-400">
            <Briefcase className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-white">New project</div>
            <div className="text-[10px] text-stone-500">Website redesign</div>
          </div>
        </div>
      </div>
    </div>
  )
}
