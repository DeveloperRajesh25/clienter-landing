import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'website-project-milestone-payments',
  title: 'Milestone Payments for Website Projects: How to Structure Them',
  metaTitle: 'Milestone Payments for Website Projects',
  description:
    'How to split a website project fee across milestones so cash arrives with the work — standard splits, what each milestone should be tied to, late-payment protection and handling stalled projects.',
  date: '2026-11-22',
  author: 'Talagana Rajesh',
  category: 'Web & software projects',
  categorySlug: 'web-development',
  tags: ['invoicing', 'pricing', 'web development', 'cash flow', 'agency operations'],
  primaryKeyword: 'milestone payments for website projects',
  featured: false,
  intro:
    'The most common cash-flow problem in web development isn’t clients refusing to pay. It is delivery running months ahead of billing: three phases built, one invoiced, and a developer quietly financing someone else’s business. Milestone payments fix that, but only if the milestones are tied to things that can be objectively shown to have happened. “50% up front, 50% at the end” is a milestone structure in name only on a four-month build.',
  body: [
    { type: 'h2', text: 'Why milestones, not just a deposit', id: 'why-milestones' },
    { type: 'p', text: 'A deposit solves commitment; it does not solve cash flow. On a short project — three or four weeks — a 50/50 split is perfectly adequate. On anything longer, the gap between money in and work delivered widens every week, and by month three you are carrying salaries, software and your own living costs against a balance that is still months away.' },
    { type: 'p', text: 'Milestones also limit damage. If a project stalls or a relationship sours at the halfway point, the question of what is owed has an obvious answer rather than becoming a negotiation. And they create natural checkpoints where both sides confirm the work so far is accepted, which is worth as much as the money.' },

    { type: 'h2', text: 'Standard structures that work', id: 'standard-structures' },
    { type: 'table', headers: ['Project length', 'Structure', 'Tied to'], rows: [
      ['Under 4 weeks', '50 / 50', 'Signature; launch'],
      ['4–10 weeks', '40 / 30 / 30', 'Signature; design approval; launch'],
      ['10–20 weeks', '30 / 25 / 25 / 20', 'Signature; design approval; build complete; launch'],
      ['Long or phased', 'Deposit + monthly', 'Signature, then a fixed sum each month of the engagement'],
      ['Ongoing', 'Monthly retainer', 'A recurring invoice on the same date each cycle'],
    ] },
    { type: 'p', text: 'Two rules make any of these hold. Never let the final payment be large enough that losing it would hurt — 20–30% is the sensible ceiling, because the last payment is the one most exposed to a client going quiet. And keep the deposit substantial: 30–50%, because a client who hesitates over the deposit is telling you something useful before you have done any work.' },

    { type: 'h2', text: 'Tie milestones to events, not to dates', id: 'tie-to-events' },
    { type: 'p', text: 'This is where most structures go wrong. “Second payment on 15 October” sounds clean until the client’s content is three weeks late — now you are invoicing for a milestone you could not reach because of them, which is an argument. Tie milestones to events instead: signature, design approval, build complete, launch.' },
    { type: 'p', text: 'Each event needs to be objectively verifiable. Design approval means a written sign-off with a date, not a verbal “yeah, looks good”. Build complete means staging is ready for review against the agreed scope. Launch means the site is live on the production domain. If a milestone can be disputed, it will be — usually by whoever owes money.' },
    { type: 'p', text: 'One exception is worth adding in writing: if a milestone is delayed by the client for more than a defined period, typically 30 days, it becomes payable anyway. Without that clause, a client who stops sending content can freeze your billing indefinitely while you carry the project.' },

    { type: 'h2', text: 'What belongs on the invoice', id: 'what-belongs-on-the-invoice' },
    { type: 'p', text: 'A milestone invoice should be readable by someone who was not in any of the meetings — usually the client’s accountant.' },
    { type: 'ul', items: [
      'Which milestone this is, and what it represents: “Milestone 2 of 4 — design approval”.',
      'The total project value and what remains after this payment. It avoids the “how much more is there?” email entirely.',
      'What was delivered, in one line. Not a full report — a reference point.',
      'Payment terms and the due date as a date, not “Net 15”.',
      'Late payment terms, if your agreement has them, restated here.',
      'Tax handled correctly — GST details if you are registered in India, or the appropriate treatment for an overseas client.',
      'Payment methods with everything needed to pay without a follow-up question.',
    ] },
    { type: 'callout', text: 'Raise the invoice on the same day the milestone is reached. Not at the end of the week, not with the month-end batch. Every day between the event and the invoice is a day of goodwill decay, and the balance invoice raised on launch day is paid dramatically faster than the same invoice raised a fortnight later.' },

    { type: 'h2', text: 'Protecting the final payment', id: 'protecting-the-final-payment' },
    { type: 'p', text: 'The last invoice is the vulnerable one, because once a site is live the client’s urgency evaporates. A few standard protections, none of them hostile:' },
    { type: 'ul', items: [
      'Keep it small relative to the total — 20–30%.',
      'Make launch the trigger and invoice it on the day, while attention is high.',
      'Hold the formal handover of credentials and documentation until the final payment clears. State this in the contract at the start so it is a known term rather than a surprise at the end.',
      'If you host for the client, make the hosting arrangement contingent on account standing — again, stated up front.',
      'Set late payment interest in the agreement. Many clients never trigger it; the ones who do are the ones you needed it for.',
    ] },
    { type: 'p', text: 'What not to do is take a live site down over an unpaid invoice. It damages the client’s business, frequently exceeds your legal rights, and turns a payment dispute into something much worse. Withholding future work and handover materials is reasonable; sabotage is not.' },

    { type: 'h2', text: 'When a project stalls mid-milestone', id: 'when-a-project-stalls' },
    { type: 'p', text: 'Projects go quiet. A contact leaves, a budget freezes, a business pivots. Handle it as a process rather than letting it drift into an open obligation.' },
    { type: 'ol', items: [
      'Write to the client noting the project is on hold and referencing the clause in the agreement.',
      'Invoice the completed milestone, or the pro-rata value of work completed within the current one.',
      'Confirm in writing what was delivered, what remains, and where the work is stored.',
      'State the terms for restarting — current rates, current availability, and any re-mobilisation cost.',
      'Close the project in your own system so it stops appearing as active capacity.',
    ] },
    { type: 'p', text: 'This converts an indefinite drain into finished business, and more often than not the invoice itself restarts the conversation. A paused project with an unpaid invoice attached tends to get attention that a paused project alone does not.' },

    { type: 'h2', text: 'Keep the milestones and the money in one place', id: 'keep-them-in-one-place' },
    { type: 'p', text: 'The reason milestone billing fails in practice is rarely the structure — it is that the project lives in one tool and the invoices in another, so marking a phase complete and raising its invoice are two separate acts on two separate days, and the second one slips. Across a handful of clients that lag quietly becomes a permanent hole in cash flow.' },
    { type: 'p', text: 'Clienter attaches invoices to the project’s milestones, so completing a stage and billing it happen in the same place, and outstanding amounts sit beside the project rather than inside an accounting app. The underlying principle is what matters: whatever system you use, marking the work done and raising the invoice should be one motion, not two.' },

    { type: 'h2', text: 'In short', id: 'in-short' },
    { type: 'p', text: 'Take a real deposit. Split longer projects across three or four milestones tied to verifiable events rather than calendar dates. Add a clause making a milestone payable if the client delays it past 30 days. Keep the final payment small and raise it on launch day. Hold handover until it clears. And raise every milestone invoice the moment the milestone lands — the gap between delivery and billing is the problem you are actually solving.' },
  ],
  faqs: [
    { q: 'How should I structure payments for a website project?', a: 'Match the split to the length. Under four weeks, 50/50 is fine. Four to ten weeks, use 40/30/30 tied to signature, design approval and launch. Longer builds want four milestones — roughly 30/25/25/20 — adding build completion. Keep the final payment at 20–30% so the most exposed invoice is also the smallest.' },
    { q: 'What should website project milestones be tied to?', a: 'Verifiable events, never calendar dates: contract signature, written design approval, build complete on staging, and go-live. A date-based milestone becomes an argument the moment the client’s own delays push the schedule, because you end up invoicing for something you could not deliver through no fault of your own.' },
    { q: 'What if the client delays a milestone indefinitely?', a: 'Put a clause in the agreement stating that a milestone delayed by the client for more than 30 days becomes payable regardless. Without it, a client who stops sending content can freeze your billing for months while you carry the project. When it happens, invoke the clause in writing, invoice the completed work, and formally pause the project.' },
    { q: 'Can I withhold the website until the final invoice is paid?', a: 'You can reasonably withhold formal handover — credentials, documentation, source files — until payment clears, provided you state that in the contract at the start so it is a known term rather than a surprise. Taking a live site offline over an unpaid invoice is a different matter: it damages the client’s business, often exceeds your rights, and escalates a payment dispute into something far harder to resolve.' },
    { q: 'When should I raise a milestone invoice?', a: 'The same day the milestone is reached. Invoices raised on the day a phase completes — especially the balance on launch day — are paid noticeably faster than the same invoice sent a fortnight later, because both urgency and goodwill decay quickly once the moment passes.' },
  ],
  related: [
    { href: '/features/invoicing', label: 'Invoicing', desc: 'Milestone invoices attached to the project.' },
    { href: '/blog/how-to-price-a-website-project', label: 'How to price a website project', desc: 'Setting the number the milestones divide.' },
    { href: '/blog/how-to-handle-late-paying-clients', label: 'Handling late-paying clients', desc: 'What to do when an invoice goes quiet.' },
    { href: '/for/web-development-agencies', label: 'For Web Development Agencies', desc: 'Milestone billing across parallel builds.' },
  ],
}
