'use client'

import {
  ArrowLeft,
  Calendar,
  Check,
  CheckCircle2,
  Folder,
  Globe,
  KeyRound,
  Mail,
  Pencil,
  Phone,
  Plus,
  Repeat,
  Save,
  Target,
  Trash2,
} from 'lucide-react'
import { CLIENT, STUDIO } from '../data'
import { OwnerShell, Page } from '../app/shells'
import { Badge, Btn, Card, Field, IconBtn, Ring, Select, Tabs, Tip } from '../app/ui'
import type { SceneProps } from './types'

/* ══════════════════════════════════════════════════════════════════════════
   ACT II — THE CLIENT
   The lead becomes a client, and the client gets a door of her own.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Scene: Convert Lead to Client ─────────────────────────────────────────
   The form arrives already filled in. The only decision left is the currency,
   which is exactly the point being made.
   ────────────────────────────────────────────────────────────────────────── */
export function ConvertForm({ beat }: SceneProps) {
  const saved = beat >= 2

  return (
    <OwnerShell nav="/clients">
      <Page>
        <div className="mb-6 flex shrink-0 items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-ink">Convert Lead to Client</h1>
            <p className="mt-1 text-sm text-ink-muted">
              Review the lead&apos;s details and set the client&apos;s currency, then save
            </p>
          </div>
          <Btn tone="secondary" small icon={ArrowLeft}>
            Back to Leads
          </Btn>
        </div>

        <div className="mx-auto w-full max-w-2xl">
          <Card className="!p-7">
            <div className="mb-5 flex items-start gap-3 rounded-xl border border-primary-100 bg-primary-50/70 px-4 py-3">
              <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-primary-100">
                <Target className="h-4 w-4 text-primary-600" aria-hidden />
              </span>
              <p className="text-sm leading-relaxed text-primary-900/85">
                <span className="font-semibold">Converting a lead.</span> We&apos;ve prefilled the
                details below — set the currency, then save to create the client and mark the lead
                as Won.
              </p>
            </div>

            <div className="space-y-4">
              <Field label="Client Name" value={CLIENT.name} required />
              <Field
                label="Email"
                value={CLIENT.email}
                required
                helper="Used to send invoices, documents, and the client-portal invite."
              />
              <Field label="Phone Number" value={CLIENT.phone} />
              <Select
                label="Invoice Currency"
                value="INR — Indian Rupee (₹) · your currency"
                helper={`Invoices for this client will be shown in INR, same as the rest of your workspace.`}
              />
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 border-t border-stone-100 pt-5">
              <Btn tone="secondary" small>
                Cancel
              </Btn>
              <Ring on={beat === 1} radius="rounded-xl">
                <Btn small icon={Save}>
                  Save Client
                </Btn>
              </Ring>
            </div>
          </Card>
        </div>

        <Tip on={beat === 1} x={190} y={430}>
          Name, email and phone come straight from the lead. Nothing gets retyped.
        </Tip>

        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ${
            saved ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-espresso px-4 py-2.5 text-sm font-medium text-espresso-text shadow-lift-4">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden />
            {CLIENT.name} created · lead marked Won · history kept
          </span>
        </div>
      </Page>
    </OwnerShell>
  )
}

/* ── Scene: the client page ────────────────────────────────────────────────
   The portal switch is the only control that matters here, so everything else
   on the page is quiet.
   ────────────────────────────────────────────────────────────────────────── */
function ClientHead({ portal }: { portal: boolean }) {
  return (
    <>
      <div className="mb-5 flex shrink-0 items-center gap-2 text-sm font-medium text-ink-muted">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to Clients
      </div>

      <Card className="mb-5 shrink-0 !p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-bold tracking-tight text-ink">{CLIENT.name}</h1>
            <p className="mt-1.5 flex items-center gap-2 text-sm text-ink-muted">
              <Phone className="h-4 w-4 text-stone-400" aria-hidden />
              {CLIENT.phone}
              <span className="text-ink-faint">Added {CLIENT.converted}</span>
            </p>
            <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600">
              <Globe className="h-3 w-3" aria-hidden />
              Billed in INR · Indian Rupee
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Btn small icon={Plus}>
              New Project
            </Btn>
            <IconBtn icon={Pencil} />
            <IconBtn icon={Trash2} tone="danger" />
          </div>
        </div>

        <div className="mt-5 flex items-center gap-10 border-t border-stone-100 pt-4">
          {[
            ['Budget', '₹0', 'text-ink'],
            ['Paid', '₹0', 'text-emerald-600'],
            ['Balance', '₹0', 'text-primary-600'],
          ].map(([label, value, tone]) => (
            <div key={label}>
              <p className="text-xs text-ink-muted">{label}</p>
              <p className={`mt-0.5 text-xl font-semibold tabular-nums ${tone}`}>{value}</p>
            </div>
          ))}
        </div>
      </Card>

      <Tabs
        className="mb-5 shrink-0"
        active="Client Portal"
        items={[
          { label: 'Client Portal', icon: Globe },
          { label: 'Projects', icon: Folder },
          { label: 'Retainers', icon: Repeat },
          { label: 'Meetings', icon: Calendar },
        ]}
      />
    </>
  )
}

export function ClientPage({ beat }: SceneProps) {
  return (
    <OwnerShell nav="/clients">
      <Page>
        <ClientHead portal={false} />

        <Card className="!p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink">
            <Globe className="h-5 w-5 text-primary-600" aria-hidden />
            Client Portal
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
            Let this client sign in to a branded portal to follow their projects, view invoices, and
            sign documents. We email them a temporary password; they choose their own on first
            sign-in.
          </p>

          <div className="mt-5 flex items-end gap-3">
            <div className="flex-1">
              <Field label="Invite email" value={CLIENT.email} />
            </div>
            <Ring on={beat === 1} radius="rounded-xl">
              <Btn icon={Mail}>Enable &amp; send invite</Btn>
            </Ring>
          </div>
          <p className="mt-2 text-xs text-ink-faint">
            We&apos;ll send the invite to the email on file.
          </p>
        </Card>

        <Tip on={beat === 1} x={330} y={600}>
          The portal is per client and carries {STUDIO.name}&apos;s name — not ours.
        </Tip>
      </Page>
    </OwnerShell>
  )
}

/* ── Scene: invite sent ────────────────────────────────────────────────────
   The result, with the two facts that matter: the address is the agency's, and
   the credential is a password she picks herself.
   ────────────────────────────────────────────────────────────────────────── */
export function PortalInvited({ beat }: SceneProps) {
  const on = beat >= 1

  return (
    <OwnerShell nav="/clients">
      <Page>
        <ClientHead portal />

        <Card className="!p-6" ring={on ? 'emerald' : undefined}>
          <div className="flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink">
              <Globe className="h-5 w-5 text-primary-600" aria-hidden />
              Client Portal
            </h2>
            <span
              className={`transition-all duration-500 ${on ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
              <Badge tone="green" icon={Check}>
                Live
              </Badge>
            </span>
          </div>

          <div
            className={`mt-5 space-y-4 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              on ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
              <Globe className="h-4 w-4 flex-none text-stone-400" aria-hidden />
              <span className="truncate text-sm font-medium text-ink">
                portal.clienter.co.in/{STUDIO.name.toLowerCase()}
              </span>
              <Badge tone="gray" className="ml-auto">
                {STUDIO.name} branding
              </Badge>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 px-4 py-3">
              <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white">
                <Mail className="h-4 w-4 text-emerald-600" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-emerald-900">
                  Invite sent to {CLIENT.email}
                </p>
                <p className="mt-0.5 text-xs text-emerald-800/80">
                  Contains a temporary password. {CLIENT.first} is asked to set her own the first
                  time she signs in.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge tone="orange" icon={KeyRound}>
                Password sign-in
              </Badge>
              <Badge tone="gray">No magic links</Badge>
              <Badge tone="gray">She only ever sees her own work</Badge>
            </div>
          </div>
        </Card>
      </Page>
    </OwnerShell>
  )
}
