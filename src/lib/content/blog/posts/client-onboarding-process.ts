import type { BlogPost } from '../_type'

/**
 * DRAFT — see `draft` in ../_type.ts. Written 2026-10-04, unpublished: noindex,
 * out of the sitemap, not linked from anywhere, draft banner on the page.
 *
 * Cluster: client onboarding (see docs/content-plan.md). Middle of funnel.
 * No invented statistics, no fabricated quotes, no named customers.
 */
export const POST: BlogPost = {
  draft: true,
  slug: 'client-onboarding-process',
  title: 'The Client Onboarding Process: A Step-by-Step Guide for Agencies',
  metaTitle: 'Client Onboarding Process: A Step-by-Step Guide',
  description:
    'A client onboarding process you can run the same way every time: the eight steps, who does what, what to automate, and the mistakes that cost you trust.',
  date: '2026-10-04',
  author: 'Talagana Rajesh',
  category: 'Agency operations',
  categorySlug: 'agency-operations',
  tags: ['onboarding', 'agency', 'process'],
  primaryKeyword: 'client onboarding process',
  intro:
    'A client onboarding process is the repeatable sequence between "yes, let’s do it" and the first real piece of work: contract signed, deposit recorded, brief collected, access granted, kickoff held, expectations set. Done well it takes a few hours of your time and buys you a client who trusts you. Done ad hoc, it is where most of the friction in a project is quietly created — the missing login, the assumption nobody wrote down, the invoice nobody expected. This guide sets out the eight steps, what each one is actually for, and which parts are worth automating.',
  body: [
    {
      type: 'p',
      text: 'The short version, if you only want the sequence: send the contract and get it signed, invoice the deposit, collect the brief with a form rather than a conversation, gather access and assets, confirm the single channel you will communicate on, hold a kickoff, send a written recap, and set the first checkpoint. Everything below is why each step exists and what goes wrong when it is skipped.',
    },

    { type: 'h2', text: 'Why onboarding decides how the project feels', id: 'why-it-matters' },
    {
      type: 'p',
      text: 'A client is at their most anxious in the week after they agree to spend money with you. They have committed budget, possibly argued for it internally, and have no evidence yet that it was a good idea. Everything they learn about you in that week sets the tone: whether they chase you or trust you, whether they read your emails carefully or skim them, whether they treat your scope as a boundary or an opening offer.',
    },
    {
      type: 'p',
      text: 'That is why a structured onboarding is worth more than it costs. It is not paperwork for its own sake. It is the cheapest available demonstration that you are organised, which is the thing a new client most wants to believe and has the least evidence for.',
    },
    {
      type: 'p',
      text: 'The second argument is operational. Almost every delay in a small-agency project traces back to something that should have been settled before the work started: the brand assets that never arrived, the CMS login nobody had, the stakeholder who had not seen the scope. Onboarding is where you front-load those, while the client is motivated and the project has not yet started slipping.',
    },

    { type: 'h2', text: 'Step 1 — Contract first, always', id: 'contract' },
    {
      type: 'p',
      text: 'Send the contract the same day they say yes, while the decision is still fresh. Not a week later, and not after you have started "just to get moving". Starting work before a signature is the single most common unforced error in client services, and it costs you the only leverage you have if the relationship goes wrong.',
    },
    {
      type: 'p',
      text: 'The contract does not need to be long. It needs to name the parties, state the deliverables and what is explicitly excluded, set the price and payment schedule, say what happens on a change of scope, say who owns the work and when ownership transfers, and give both sides a way out. If you are using a template, read it once a year rather than never — and have a professional look at it if the contract values are material to your business.',
    },
    {
      type: 'callout',
      text: 'E-signature matters more than it sounds like it should. A contract that needs printing, signing, scanning and emailing back will sit on a client’s desk for a week. The same contract with a link and a signature field usually comes back the same day.',
    },

    { type: 'h2', text: 'Step 2 — Invoice the deposit immediately', id: 'deposit' },
    {
      type: 'p',
      text: 'Raise the deposit invoice as soon as the contract is signed, and do not begin work until it is paid. An advance of 30 to 50 per cent is normal in client services. It covers your early costs, it converts stated intent into committed money, and it filters out the client who was never really going to proceed before you have given them three weeks of work.',
    },
    {
      type: 'p',
      text: 'Make the invoice specific about what happens next: the date work begins, what the remaining payments are, and when each is due. A client who can see the whole payment schedule on the first invoice asks far fewer questions later.',
    },

    { type: 'h2', text: 'Step 3 — Collect the brief with a form, not a conversation', id: 'brief' },
    {
      type: 'p',
      text: 'An intake form beats a kickoff conversation for gathering facts, for two reasons. People answer better in writing than on a call, because they can go and look things up. And you get a record you can point back to in month three when the brief has quietly changed.',
    },
    {
      type: 'p',
      text: 'Ask for the things you always end up needing: the business goal behind the project rather than the deliverable, who the decision-maker is and who else must sign off, examples of work they like and specifically dislike, any hard deadline and what it is tied to, brand guidelines and assets, and the constraints they have not mentioned — an existing contract, a legal review, a platform they cannot leave.',
    },
    {
      type: 'p',
      text: 'Keep it to one form. Two forms get one response.',
    },

    { type: 'h2', text: 'Step 4 — Gather access while they are still keen', id: 'access' },
    {
      type: 'p',
      text: 'Make the list of what you need and ask for all of it at once, in the first week. Hosting and DNS, the CMS, analytics, ad accounts, social accounts, the design files, the font licences, the stock photography account. Every item you do not have on day one becomes a blocked afternoon in week three, and chasing access from a client who has gone quiet is the least enjoyable part of this job.',
    },
    {
      type: 'p',
      text: 'Ask for delegated access rather than shared passwords wherever the platform supports it. Where it does not, store what you are given somewhere encrypted and designed for the purpose. A client’s credentials sitting in your email or a chat thread is a problem you are keeping for later.',
    },

    { type: 'h2', text: 'Step 5 — Agree one channel and one place for files', id: 'channel' },
    {
      type: 'p',
      text: 'Decide where this project happens and say so in writing. The failure mode is not that clients are difficult; it is that a project spreads across email, two chat apps, a shared drive and a phone call, and then nobody can find the decision that was made about the homepage.',
    },
    {
      type: 'p',
      text: 'A client portal does this better than a rule you have to keep enforcing, because the client has somewhere obvious to go. If you are not using one, be specific instead: approvals by email, day-to-day questions in one thread, files in one folder, and nothing important decided verbally without a written recap.',
    },

    { type: 'h2', text: 'Step 6 — The kickoff call is for alignment, not information', id: 'kickoff' },
    {
      type: 'p',
      text: 'If you have the brief and the access already, the kickoff can do the thing it is actually good at: aligning people. Walk through the scope out loud, including the exclusions. Name the risks you can already see. Agree the review cadence and who is responsible for approvals. Say explicitly what you need from them and by when, because a client who does not know they are on the critical path will not behave as if they are.',
    },
    {
      type: 'p',
      text: 'Thirty to forty-five minutes is enough. If it runs to ninety, the brief was not collected properly.',
    },

    { type: 'h2', text: 'Step 7 — Send the written recap the same day', id: 'recap' },
    {
      type: 'p',
      text: 'Within a few hours of the call, send a short written summary: what was agreed, what was explicitly out of scope, who owes what by when, and the milestone dates. This is the single highest-return habit in client work. It costs ten minutes and it is the document you will point at, politely, the first time someone remembers the meeting differently.',
    },

    { type: 'h2', text: 'Step 8 — Set the first checkpoint before you need it', id: 'checkpoint' },
    {
      type: 'p',
      text: 'Put the first review in the calendar during onboarding, not when the work is ready. A date in the diary pulls work forward and gives the client a known moment to wait for instead of a reason to check in. It also means the first time they see progress is a scheduled event you have prepared for, rather than an interruption.',
    },

    { type: 'h2', text: 'The eight steps, as a checklist', id: 'checklist' },
    {
      type: 'table',
      headers: ['Step', 'What it produces', 'Who moves first'],
      rows: [
        ['1. Contract', 'A signed agreement with scope and exclusions', 'You, same day'],
        ['2. Deposit', 'An invoice raised and paid before work starts', 'You, then them'],
        ['3. Brief', 'Written answers you can refer back to', 'You send, they fill'],
        ['4. Access', 'Every login and asset, requested at once', 'You list, they grant'],
        ['5. Channel', 'One agreed place for messages and files', 'You decide and state it'],
        ['6. Kickoff', 'Alignment on scope, risks and cadence', 'You run it'],
        ['7. Recap', 'A written record of what was agreed', 'You, within hours'],
        ['8. Checkpoint', 'A dated first review in both calendars', 'You schedule it'],
      ],
    },

    { type: 'h2', text: 'What to automate, and what to leave alone', id: 'automate' },
    {
      type: 'p',
      text: 'Automate the parts that are identical every time and whose only failure mode is forgetting: sending the contract, raising the deposit invoice, sending the intake form, chasing an unpaid invoice, reminding someone about the kickoff. These are pure process and a tool will do them more reliably than you will.',
    },
    {
      type: 'p',
      text: 'Do not automate the kickoff call, the written recap, or the first piece of feedback you give. Those are where trust is actually built, and a templated version reads exactly as templated as it is.',
    },

    { type: 'h2', text: 'Five mistakes worth avoiding', id: 'mistakes' },
    {
      type: 'ol',
      items: [
        'Starting work before the contract is signed, because the client seemed enthusiastic.',
        'Treating the kickoff call as the brief, and discovering in week two that nobody wrote down the deadline.',
        'Asking for access piecemeal, so every week has one blocked afternoon in it.',
        'Letting the project spread across three channels, then losing an approval.',
        'Never sending a written recap, and relying on everyone remembering the same conversation.',
      ],
    },

    { type: 'h2', text: 'Running this in one place', id: 'in-clienter' },
    {
      type: 'p',
      text: 'Whatever you use, the test of an onboarding process is whether it runs the same way when you are busy. That usually means the steps live somewhere other than your memory.',
    },
    {
      type: 'p',
      text: 'In Clienter, a won lead converts to a client, the quote becomes a contract the client signs with an e-signature, the deposit invoice is raised against the project, the client portal is where files and approvals live, and the kickoff goes in your calendar from the same screen. The point is not the tool — it is that the eight steps are a sequence rather than eight things to remember.',
    },
  ],
  faqs: [
    {
      q: 'How long should client onboarding take?',
      a: 'A few hours of your time, spread over the first week or so of the engagement. The elapsed time is usually governed by how fast the client signs, pays and grants access rather than by anything you do. If onboarding is routinely taking you more than a day of actual work per client, the steps are probably being done from scratch each time instead of from a template.',
    },
    {
      q: 'What should a client onboarding checklist include?',
      a: 'Contract signed, deposit invoiced and paid, intake form completed, every access and asset collected, the communication channel agreed in writing, kickoff call held, written recap sent, and the first review date in both calendars. If you want one more, add a single named point of contact on each side.',
    },
    {
      q: 'Should I onboard a client before or after they pay the deposit?',
      a: 'Overlap them, but do not start the work. Send the contract and the intake form immediately, and raise the deposit invoice as soon as the contract is signed. Collect the brief and access while the invoice is outstanding — that is not billable work, it is preparation — but do not begin delivery until the deposit has landed.',
    },
    {
      q: 'Do I need a client portal for onboarding?',
      a: 'No, but you need somewhere that is obviously the right place. A portal makes that self-evident to the client, which saves you enforcing a rule every week. Without one, be explicit about where approvals, questions and files go, and expect to redirect people occasionally.',
    },
    {
      q: 'What is the most common onboarding mistake?',
      a: 'Starting work before the contract is signed. It feels generous and efficient in the moment, and it removes the only leverage you have if scope, payment or expectations go wrong later. The second most common is treating the kickoff call as the brief, so nothing is written down.',
    },
  ],
  related: [
    {
      href: '/templates/client-onboarding-checklist',
      label: 'Client onboarding checklist',
      desc: 'The checklist version, free to copy.',
    },
    {
      href: '/features/client-portal',
      label: 'Client portal',
      desc: 'One place for files, approvals and messages.',
    },
    {
      href: '/glossary/intake-form',
      label: 'What is an intake form?',
      desc: 'The questions worth asking up front.',
    },
    {
      href: '/templates/freelance-contract-template',
      label: 'Contract template',
      desc: 'A starting point for step one.',
    },
  ],
}
