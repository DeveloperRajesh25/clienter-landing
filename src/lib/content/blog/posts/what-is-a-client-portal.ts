import type { BlogPost } from '../_type'

/**
 * DRAFT — see `draft` in ../_type.ts. Written 2026-10-04, unpublished.
 * Cluster: client portals (docs/content-plan.md). Top of funnel, definitional —
 * written answer-first for AI citation, with a visible FAQ.
 */
export const POST: BlogPost = {
  draft: true,
  slug: 'what-is-a-client-portal',
  title: 'What Is a Client Portal? And Does Your Agency Need One?',
  metaTitle: 'What Is a Client Portal? A Guide for Agencies',
  description:
    'A client portal is a private, branded space where your client sees progress, files, invoices and approvals. What one contains, who benefits, and when to skip it.',
  date: '2026-10-04',
  author: 'Talagana Rajesh',
  category: 'Agency operations',
  categorySlug: 'agency-operations',
  tags: ['client portal', 'agency', 'client experience'],
  primaryKeyword: 'what is a client portal',
  intro:
    'A client portal is a private, branded space where one of your clients can see everything about their work with you — project progress, files and deliverables, invoices and what they owe, documents to sign, and a thread to message you — without emailing to ask. For an agency or an established freelancer it does two useful things at once: it removes most status-chasing from your inbox, and it makes a small business look organised in the one place the client actually looks.',
  body: [
    {
      type: 'p',
      text: 'The rest of this answers the questions that follow: what a portal typically contains, what changes when you have one, when it is not worth the trouble, what to look for in a tool, and how a portal differs from the things people confuse it with.',
    },

    { type: 'h2', text: 'What is in a client portal?', id: 'whats-in-it' },
    {
      type: 'p',
      text: 'Implementations vary, but a portal worth the name covers five things.',
    },
    {
      type: 'table',
      headers: ['Area', 'What the client sees', 'What it replaces'],
      rows: [
        ['Progress', 'Current stage, what is done, what is next', '"Any update?" emails'],
        ['Files', 'Deliverables and shared assets in one place', 'Attachments across email threads'],
        ['Money', 'Invoices, what is paid, what is outstanding', 'Forwarding invoices on request'],
        ['Documents', 'Quotes and contracts to review and sign', 'Print, sign, scan, email back'],
        ['Messages', 'One thread tied to the project', 'Four channels and a phone call'],
      ],
    },
    {
      type: 'p',
      text: 'The thing all five have in common is that they answer a question the client would otherwise ask you. That is the whole mechanism of a portal: it converts interruptions into self-service.',
    },

    { type: 'h2', text: 'What actually changes when you have one', id: 'what-changes' },
    {
      type: 'p',
      text: 'Three things, in rough order of how much they matter.',
    },
    {
      type: 'p',
      text: 'First, the status-chasing stops. A client who can see that their project is in review and the next milestone is Thursday does not email to ask. This is the benefit people notice in week one, and it compounds across every client you have.',
    },
    {
      type: 'p',
      text: 'Second, you stop losing decisions. When approvals happen in a portal, the approval is recorded with a date against the thing being approved. When they happen across email, chat and a phone call, the approval exists only in somebody’s memory — and memories diverge in month three, usually about scope.',
    },
    {
      type: 'p',
      text: 'Third, and least measurable but not least important: you look like a larger operation than you are. A branded space with the client’s project in it is the cheapest credibility available to a three-person agency, and it is doing its work every time the client logs in rather than only in the pitch.',
    },

    { type: 'h2', text: 'What a portal is not', id: 'what-its-not' },
    {
      type: 'p',
      text: 'It is not a shared folder. A drive gives the client files with no context — no progress, no invoices, nothing to sign, and no indication of which version is current.',
    },
    {
      type: 'p',
      text: 'It is not a seat in your project management tool. Inviting a client into your board exposes internal notes, your estimates, your team’s assignments and conversations they should not read. A portal is a deliberately narrow view, which is the point.',
    },
    {
      type: 'p',
      text: 'And it is not a payment gateway, in most tools. A portal usually shows what is owed and what has been paid; whether the client can pay inside it depends entirely on the product. Worth checking, because it is a common assumption. Clienter, for instance, shows invoices and records payments but does not collect them — the client pays you directly.',
    },

    { type: 'h2', text: 'When a portal is not worth it', id: 'when-not' },
    {
      type: 'p',
      text: 'There are real cases where it is overhead rather than help, and it is worth saying so.',
    },
    {
      type: 'ul',
      items: [
        'Very short engagements. A two-week job will finish before anyone forms a habit of logging in.',
        'One or two clients. If you can hold both relationships in your head, a portal is solving a problem you do not have yet.',
        'Clients who will not log in. Some simply will not, and a portal nobody visits is worse than email because now there are two places.',
        'Work with nothing to show. If the deliverable is a conversation rather than an artefact, there is not much for a portal to display.',
      ],
    },
    {
      type: 'p',
      text: 'The honest threshold is somewhere around five active clients, or any single engagement long enough that "where are we?" gets asked more than twice. Below that, email and a tidy folder are fine.',
    },

    { type: 'h2', text: 'The adoption problem, and what fixes it', id: 'adoption' },
    {
      type: 'p',
      text: 'The most common reason portals fail is that clients do not use them. Four things help, and the first is the most important.',
    },
    {
      type: 'ol',
      items: [
        'Make the important things work by link, without logging in. A contract to sign or a form to fill should open from an email. A login requirement on a signature is how you lose a week.',
        'Introduce it at onboarding, not mid-project. A habit formed in week one survives; a new tool in month three does not.',
        'Put something there they need. If the invoices live only in the portal, people visit the portal.',
        'Send the notification, not the content. "Your project moved to review" with a link beats pasting the update into an email, because the second one teaches them they never need to visit.',
      ],
    },

    { type: 'h2', text: 'What to look for when choosing one', id: 'what-to-look-for' },
    {
      type: 'p',
      text: 'Five questions sort most of the options.',
    },
    {
      type: 'ul',
      items: [
        'Is it branded with your name and logo, or does it advertise the vendor to your client?',
        'Is it included on the plan you will actually be on, or only on the top tier?',
        'Can clients do the critical things — sign, approve, pay attention to an invoice — without an account?',
        'Does it cover money as well as files? A portal with no invoices is a file share with a login.',
        'Can it live on your own domain, if looking established matters to you?',
      ],
    },
    {
      type: 'p',
      text: 'The branding question is the one people regret. A portal carrying another company’s logo is doing the opposite of what you bought it for.',
    },

    { type: 'h2', text: 'How Clienter does it', id: 'in-clienter' },
    {
      type: 'p',
      text: 'For completeness, since this is our site: every Clienter plan includes a client portal carrying your agency name and logo. On the Free plan it covers one client and shows a small "Powered by Clienter" line; Pro and Ultra open it to every client and remove that mark; Ultra adds your own brand colour across the app and lets the portal live on your own domain, which we set up for you.',
      },
    {
      type: 'p',
      text: 'Inside it, a client sees their projects and current stage, files and deliverables, their invoices and running balance, documents to review and sign with an e-signature, and a message thread. Documents and forms also work from a plain link, so a client who will not create a login can still sign a contract. Clienter records what is paid rather than collecting it — your client pays you directly.',
    },
  ],
  faqs: [
    {
      q: 'What is a client portal?',
      a: 'A private, branded space where one client can see everything about their work with you: project progress, files and deliverables, invoices and outstanding balance, documents to review and sign, and a message thread. Its purpose is to answer the questions a client would otherwise email you to ask.',
    },
    {
      q: 'What is the difference between a client portal and a shared drive?',
      a: 'A shared drive gives the client files with no context — no progress, no invoices, nothing to sign, and often no clear sense of which version is current. A portal puts the files alongside the status, the money and the approvals, which is what makes it answer questions rather than just store things.',
    },
    {
      q: 'Can I just invite my client into my project management tool instead?',
      a: 'You can, and it usually goes badly. A seat in your board exposes internal notes, estimates, team assignments and conversations the client should not read, and it presents them with an interface built for your team rather than for them. A portal is a deliberately narrow, client-facing view, which is the whole point of it.',
    },
    {
      q: 'Do clients actually use client portals?',
      a: 'Some do and some will not, and the difference is mostly how you introduce it. Portals get used when the important actions also work from a plain link without logging in, when they are introduced during onboarding rather than mid-project, when something the client needs — usually the invoices — lives only there, and when notifications link to the portal rather than repeating its contents in an email.',
    },
    {
      q: 'Can clients pay invoices inside a client portal?',
      a: 'It depends entirely on the tool, and it is worth checking rather than assuming. Many portals display invoices and the outstanding balance without processing payment. Clienter is one of those: it shows the invoice, records the payment and tracks the balance, but your client pays you directly rather than through us.',
    },
    {
      q: 'Does a small agency need a client portal?',
      a: 'Not always. With one or two clients, or on engagements that finish within a fortnight, a portal is overhead and email is fine. It starts earning its place at around five active clients, or on any project long enough that someone asks "where are we?" more than twice.',
    },
  ],
  related: [
    {
      href: '/features/client-portal',
      label: 'Clienter’s client portal',
      desc: 'What the client actually sees.',
    },
    {
      href: '/glossary/client-portal',
      label: 'Client portal (glossary)',
      desc: 'The short definition.',
    },
    {
      href: '/blog/client-onboarding-process',
      label: 'Client onboarding process',
      desc: 'Where to introduce the portal.',
    },
    {
      href: '/glossary/white-label',
      label: 'What is white label?',
      desc: 'Why the branding question matters.',
    },
  ],
}
