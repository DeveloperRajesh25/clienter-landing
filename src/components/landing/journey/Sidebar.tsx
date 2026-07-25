'use client'

import { motion } from 'framer-motion'
import {
  Home,
  Target,
  Users,
  FolderKanban,
  Repeat,
  TrendingUp,
  MessageSquare,
  Calendar,
  CheckSquare,
  Star,
  Wallet,
  MessagesSquare,
  Gift,
  type LucideIcon,
} from 'lucide-react'
import { STUDIO } from './data'

/**
 * The app's left rail, at mock scale.
 *
 * Mounted once for the whole journey. The orange accent bar is a single shared
 * element (`layoutId`), so when a stage changes destination the bar slides down
 * the nav instead of blinking off one row and on to another — the same
 * continuity trick as the client chip, applied to navigation.
 *
 * Two vocabularies: the owner app (warm white rail, Clienter's own mark) and
 * the client portal, which is white-label — it wears the *agency's* name, and
 * "Powered by Clienter" is the only platform mark on screen. Getting that
 * distinction right is the whole point of stage 7.
 */

type Item = { href: string; label: string; icon: LucideIcon }

// Order mirrors ownerNavItems in the app: Leads is pinned below Dashboard.
const OWNER_NAV: Item[] = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/leads', label: 'Leads', icon: Target },
  { href: '/clients', label: 'Clients', icon: Users },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/retainers', label: 'Retainers', icon: Repeat },
  { href: '/payments', label: 'Payments', icon: TrendingUp },
  { href: '/messages', label: 'Messages', icon: MessageSquare },
  { href: '/meetings', label: 'Meetings', icon: Calendar },
  { href: '/reviews', label: 'Reviews', icon: Star },
  { href: '/tasks', label: 'Tasks', icon: CheckSquare },
]

const PORTAL_NAV: Item[] = [
  { href: '/portal', label: 'Home', icon: Home },
  { href: '/portal/projects', label: 'Projects', icon: FolderKanban },
  { href: '/portal/financials', label: 'Financials', icon: Wallet },
  { href: '/portal/messages', label: 'Messages', icon: MessagesSquare },
  { href: '/portal/meetings', label: 'Meetings', icon: Calendar },
  { href: '/portal/referrals', label: 'Referrals', icon: Gift },
]

export function Sidebar({
  variant,
  active,
  unread = 0,
}: {
  variant: 'owner' | 'portal'
  /** href of the destination this stage is on. */
  active: string
  unread?: number
}) {
  const portal = variant === 'portal'
  const items = portal ? PORTAL_NAV : OWNER_NAV

  return (
    <div className="flex h-full w-[7.75rem] flex-none flex-col border-r border-stone-200/70 bg-white sm:w-[8.75rem]">
      {/* Brand row. Owner sees Clienter; the portal sees the agency. */}
      <div className="flex h-9 flex-none items-center gap-1.5 px-2.5">
        {portal ? (
          <>
            <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-orange-600 text-[9px] font-bold text-white">
              {STUDIO.initials}
            </span>
            <span className="truncate text-[11px] font-bold tracking-tight text-ink">
              {STUDIO.name}
            </span>
          </>
        ) : (
          <>
            <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-orange-600 text-[9px] font-bold text-white">
              C
            </span>
            <span className="truncate text-[11px] font-bold tracking-tight text-ink">Clienter</span>
          </>
        )}
      </div>

      {/* Org badge — owner only; the portal client has no org switcher. */}
      {!portal && (
        <div className="flex-none px-1.5 pb-1.5">
          <div className="flex items-center gap-1.5 rounded-lg border border-stone-200/70 bg-stone-50 px-1.5 py-1">
            <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-orange-100 text-[9px] font-bold text-orange-700">
              {STUDIO.initials}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[10px] font-semibold leading-tight text-ink">
                {STUDIO.name}
              </span>
              <span className="mt-0.5 inline-flex rounded-full bg-orange-50 px-1 text-[8px] font-medium leading-[1.4] text-orange-700">
                Owner
              </span>
            </span>
          </div>
        </div>
      )}

      <nav className="min-h-0 flex-1 overflow-hidden px-1.5" aria-hidden>
        <ul className="space-y-px">
          {items.map((item) => {
            const Icon = item.icon
            const on = item.href === active
            return (
              <li key={item.href}>
                <span
                  className={`relative flex items-center gap-1.5 rounded-lg px-1.5 py-[5px] text-[10px] font-medium transition-colors duration-300 ${
                    on ? 'bg-orange-50 text-orange-700' : 'text-stone-500'
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="journey-nav-accent"
                      className="absolute left-0 top-1/2 h-3 w-[3px] -translate-y-1/2 rounded-r-full bg-orange-600"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  <Icon
                    className={`h-3 w-3 flex-none transition-colors duration-300 ${
                      on ? 'text-orange-600' : 'text-stone-400'
                    }`}
                  />
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.label === 'Messages' && unread > 0 && (
                    <span className="flex h-3 min-w-[12px] items-center justify-center rounded-full bg-orange-600 px-1 text-[7px] font-bold text-white">
                      {unread}
                    </span>
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* The white-label tell: on the client's side, Clienter is a footnote. */}
      {portal && (
        <div className="flex-none border-t border-stone-200/70 px-2.5 py-1.5">
          <span className="text-[8px] font-medium text-stone-400">Powered by Clienter</span>
        </div>
      )}
    </div>
  )
}

/**
 * The screen's own header strip — sits above each stage body so the swap
 * happens below a stable line, exactly like a real app's topbar.
 */
export function TopBar({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex h-9 flex-none items-center justify-between gap-2 border-b border-stone-200/70 bg-white/80 px-3 backdrop-blur">
      <h4 className="truncate text-[11px] font-bold tracking-tight text-ink">{title}</h4>
      <div className="flex flex-none items-center gap-1.5">{children}</div>
    </div>
  )
}
