import type { BlogPost } from '../_type'

/**
 * DRAFT — see `draft` in ../_type.ts. Written 2026-10-04, unpublished.
 * Cluster: invoicing and getting paid (docs/content-plan.md). Middle of funnel.
 *
 * Deliberately does NOT give legal advice on debt recovery, which varies by
 * jurisdiction. The escalation section says to take local advice instead.
 */
export const POST: BlogPost = {
  draft: true,
  slug: 'how-to-handle-late-paying-clients',
  title: 'How to Handle Late-Paying Clients',
  metaTitle: 'How to Handle Late-Paying Clients (and Prevent It)',
  description:
    'A calm escalation ladder for late invoices, the terms that prevent lateness in the first place, and what to say at each stage — with templates to adapt.',
  date: '2026-10-04',
  author: 'Talagana Rajesh',
  category: 'Freelance business',
  categorySlug: 'freelance-business',
  tags: ['invoicing', 'payments', 'cash flow'],
  primaryKeyword: 'how to handle late paying clients',
  intro:
    'Most late payments are not refusals. They are an invoice sitting in a queue behind somebody else’s, or waiting on an approval nobody chased, or lost because it was emailed to the wrong person. That matters, because it means the effective response is persistence and structure rather than confrontation — and because the real fix happens before the invoice is ever sent. This is the escalation ladder that works, the terms that prevent the problem, and what to say at each stage.',
  body: [
    {
      type: 'p',
      text: 'The ladder, briefly: a reminder three days before the due date, a short note on the day, a firmer one at seven days, a direct conversation at fourteen, a stop-work notice at thirty, and formal escalation beyond that. At every step, make paying easier rather than make the client feel worse. The prevention section near the end is the part that actually reduces how often you need this.',
    },

    { type: 'h2', text: 'Assume administration, not bad faith', id: 'assume-admin' },
    {
      type: 'p',
      text: 'Start from the assumption that the client intends to pay and something procedural is in the way. This is not naivety — it is usually true, and it is also the stance that gets you paid fastest. An accusing first message turns a queue problem into a relationship problem, and relationship problems get paid later than queue problems.',
    },
    {
      type: 'p',
      text: 'It also means the most useful information in any chase is not "you are late". It is "here is the invoice again, here is exactly how to pay it, and who should I be speaking to". Remove the obstacle rather than apply the pressure, at least for the first two weeks.',
    },

    { type: 'h2', text: 'The escalation ladder', id: 'ladder' },
    {
      type: 'table',
      headers: ['When', 'What you send', 'Tone'],
      rows: [
        ['3 days before due', 'A short reminder with the invoice attached again', 'Neutral, helpful'],
        ['Due date', 'A note that it is due today, with payment details', 'Neutral'],
        ['+7 days', 'A firmer email naming the overdue amount and the terms', 'Direct, still warm'],
        ['+14 days', 'A phone call, then an email summarising it', 'Direct, a question'],
        ['+30 days', 'Written notice that work pauses until payment', 'Formal, factual'],
        ['+45 days and beyond', 'Formal escalation — take local advice first', 'Formal'],
      ],
    },
    {
      type: 'p',
      text: 'The pre-due reminder is the one people skip and it is the one that prevents the most lateness. An invoice that reappears three days before it is due gets put in the queue; an invoice nobody has looked at since it arrived does not.',
    },

    { type: 'h2', text: 'What to say at each stage', id: 'what-to-say' },
    { type: 'h3', text: 'Three days before, and on the day' },
    {
      type: 'p',
      text: 'Short, factual, no apology for asking. "Invoice 0142 for ₹48,000 is due on the 15th — attaching it again for convenience. Payment details are on the invoice; let me know if you need anything else to process it." The phrase "anything else to process it" does real work, because it invites them to tell you about the purchase order or approval you did not know about.',
    },
    { type: 'h3', text: 'Seven days late' },
    {
      type: 'p',
      text: 'Name the amount, the number of days, and the agreed terms, and ask a specific question. "Invoice 0142 is now seven days past its due date. Our terms are net 15. Could you confirm when it is scheduled for payment, or tell me who in accounts I should follow up with?" A question with a specific answer is harder to leave unanswered than a general nudge.',
    },
    { type: 'h3', text: 'Fourteen days late' },
    {
      type: 'p',
      text: 'Pick up the phone. Two weeks of silence by email usually means the email is not reaching the person who can act. A three-minute call with the person who hired you ("I do not want this to become a thing — is there something blocking it?") resolves a surprising proportion of these, because it moves the problem to someone who cares about the working relationship. Then send a short email summarising what was agreed on the call, so there is a record.',
    },
    { type: 'h3', text: 'Thirty days late' },
    {
      type: 'p',
      text: 'Write a factual notice: the invoice, the amount, the days outstanding, the previous contacts, and the consequence. "As the invoice remains unpaid at 30 days, we will pause work on the project from Monday and resume once it is settled." State it as a procedure, not a threat — and only if your contract allows it, which is a good reason to make sure your contract does.',
    },
    {
      type: 'callout',
      text: 'Pausing work is the strongest lever you have and it only works if you actually do it. A stop-work notice you do not follow through on teaches the client that your deadlines are suggestions.',
    },
    { type: 'h3', text: 'Beyond forty-five days' },
    {
      type: 'p',
      text: 'Now it is a collections question, and collections law differs significantly by country — statutory interest, formal demand requirements, small-claims thresholds and limitation periods are all local. Get advice from a professional in your jurisdiction rather than following a template from the internet, this one included. Keep every invoice, email, signed contract and delivery record, because whatever route you take will depend on that paper trail.',
    },

    { type: 'h2', text: 'Prevention is where the real gain is', id: 'prevention' },
    {
      type: 'p',
      text: 'Chasing is damage control. The structural changes below reduce how often you need it, and they cost nothing to adopt.',
    },
    {
      type: 'ul',
      items: [
        'Take an advance. Thirty to fifty per cent before work starts is normal in client services and it changes who is carrying the risk.',
        'Bill in milestones rather than once at the end. A single invoice at completion concentrates all your exposure at the point you have the least leverage.',
        'Shorten your terms. Net 15 is reasonable for small-agency work; net 30 is a convention inherited from large companies and it is not obligatory.',
        'Put payment terms in the contract, not just on the invoice. An invoice is a request; a contract is an agreement.',
        'Invoice the same day you deliver. An invoice sent a week late signals that the date was not important.',
        'Find out who actually pays. For any client bigger than a few people, ask during onboarding who should receive invoices and whether a purchase order is needed.',
        'Make paying trivially easy. Correct bank details, a UPI ID where relevant, the currency the client actually holds, and your tax identifiers where they are required for the invoice to be processable.',
      ],
    },
    {
      type: 'p',
      text: 'Two of those are worth more than the others. Asking who pays, during onboarding, removes the most common cause of a lost invoice. And invoicing on delivery removes the most common excuse.',
    },

    { type: 'h2', text: 'Should you charge late fees?', id: 'late-fees' },
    {
      type: 'p',
      text: 'A late-fee clause is worth having in the contract and is worth applying sparingly. Its value is mostly as a stated consequence rather than as income: clients who know a fee exists tend to pay inside terms, and clients who have gone genuinely bad will not be moved by it.',
    },
    {
      type: 'p',
      text: 'What a fee can do is give you a graceful lever — "there is a 2% monthly late charge in the agreement, which I would rather not apply, so could we get this settled this week" is a real nudge that costs the relationship nothing. Whether interest on commercial debt is capped, mandated or regulated depends on where you are, so check locally before writing a number into your terms.',
    },

    { type: 'h2', text: 'Knowing when to stop', id: 'when-to-stop' },
    {
      type: 'p',
      text: 'Some invoices are not worth their recovery cost. Weigh the amount against the hours of chasing, the stress, and whatever you would spend on a formal route. For a small sum from a client you will not work with again, writing it off and moving on is sometimes the rational answer — galling, but rational.',
    },
    {
      type: 'p',
      text: 'If you do stop, change something. The pattern that produced the bad debt usually included no advance, long terms, or work delivered before anything was signed. One late-paying client is luck. Three is a process problem.',
    },

    { type: 'h2', text: 'Making the chasing automatic', id: 'automation' },
    {
      type: 'p',
      text: 'Nobody is consistent about chasing invoices by hand, especially when work is busy and the invoice belongs to a client they like. Automation solves exactly that: the reminder goes out on schedule whether or not you felt like sending it, and it is not personal because nobody chose to send it today.',
    },
    {
      type: 'p',
      text: 'In Clienter, invoices carry due dates and send reminders on their own, part-payments and proof of payment are recorded against the invoice, every client has a running balance of what they owe, and retainers raise their own invoice on the billing day so nothing is late because you forgot. Clienter does not collect the money — your client pays you directly — but it does make sure the right invoice is in front of the right person at the right time.',
    },
  ],
  faqs: [
    {
      q: 'What should I do when a client does not pay an invoice?',
      a: 'Work a ladder rather than improvising. A reminder three days before the due date, a note on the day, a firmer email at seven days naming the amount and your terms, a phone call at fourteen, a written stop-work notice at thirty if your contract allows it, and formal escalation beyond that with local professional advice. Assume an administrative hold-up for the first two weeks, because that is usually what it is.',
    },
    {
      q: 'How do I ask a client for payment without damaging the relationship?',
      a: 'Be factual and make paying easier rather than making the client uncomfortable. Name the invoice number, the amount and the agreed terms, attach the invoice again, and ask a specific question — when is it scheduled, or who in accounts should I follow up with. Specific questions get answered; general nudges get ignored.',
    },
    {
      q: 'Should I stop work if a client has not paid?',
      a: 'It is the strongest lever you have, and it only works if you actually do it. Give written notice first, state it as a consequence of the unpaid invoice rather than as a threat, and make sure your contract permits it. A stop-work notice you do not follow through on teaches the client that nothing you say has a deadline attached.',
    },
    {
      q: 'Should I charge late fees on overdue invoices?',
      a: 'Have the clause, apply it rarely. Its value is as a stated consequence that encourages payment within terms, not as income. Whether interest on commercial debt is capped or regulated varies by country, so check locally before putting a rate in your terms.',
    },
    {
      q: 'How can I stop clients paying late in the first place?',
      a: 'Take a 30–50% advance, bill in milestones rather than once at the end, use net 15 rather than net 30, put the terms in the contract and not only on the invoice, invoice the same day you deliver, and find out during onboarding who actually processes payments and whether a purchase order is needed. The last two prevent the most common failures.',
    },
    {
      q: 'When should I write off an unpaid invoice?',
      a: 'When the recovery cost exceeds the amount — the hours of chasing, the stress, and anything a formal route would cost. For a small sum from a client you will not work with again, writing it off is often the rational choice. If you do, change the process that let it happen: three late payers is not bad luck, it is missing advances or terms that are too long.',
    },
  ],
  related: [
    {
      href: '/glossary/dunning',
      label: 'What is dunning?',
      desc: 'The formal name for the reminder sequence.',
    },
    { href: '/glossary/net-30', label: 'Net 30 and payment terms', desc: 'What the terms actually mean.' },
    {
      href: '/tools/late-payment-reminder-generator',
      label: 'Payment reminder generator',
      desc: 'Wording for each stage of the ladder.',
    },
    {
      href: '/features/invoicing',
      label: 'Invoicing & payment tracking',
      desc: 'Reminders that send themselves.',
    },
  ],
}
