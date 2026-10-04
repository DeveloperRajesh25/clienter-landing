import type { BlogPost } from '../_type'

/**
 * DRAFT — see `draft` in ../_type.ts. Written 2026-10-04, unpublished.
 * Cluster: pricing (docs/content-plan.md). Middle of funnel. Sits above the
 * published retainers-vs-project post, which it links to for the detail.
 */
export const POST: BlogPost = {
  draft: true,
  slug: 'agency-pricing-models',
  title: 'Agency Pricing Models: Five Ways to Charge, and When Each Works',
  metaTitle: 'Agency Pricing Models: Five Ways to Charge',
  description:
    'Hourly, fixed-fee, retainer, value-based and productised pricing compared on risk, cash flow and ceiling — with the one question that picks the right model.',
  date: '2026-10-04',
  author: 'Talagana Rajesh',
  category: 'Agency operations',
  categorySlug: 'agency-operations',
  tags: ['pricing', 'agency', 'retainers'],
  primaryKeyword: 'agency pricing models',
  intro:
    'There are five pricing models most agencies and established freelancers actually use: hourly, fixed-fee per project, monthly retainer, value-based, and productised. They differ in one thing above all — who carries the risk when the work takes longer than expected — and that single question picks the right model faster than any amount of deliberation about rates. This compares all five on risk, cash flow, ceiling and effort, and says plainly which to use when.',
  body: [
    {
      type: 'p',
      text: 'If you want the short version: charge hourly when the scope genuinely cannot be defined, fixed-fee when it can, retainers for anything ongoing, value-based only when you can point at the number your work moves, and productised when you are doing the same job repeatedly. Most healthy agencies run two or three of these at once rather than picking one.',
    },

    { type: 'h2', text: 'The question that decides it: who carries the risk?', id: 'risk' },
    {
      type: 'p',
      text: 'Every pricing model is an answer to one question — if this takes 50% longer than expected, who pays for that? Hourly puts the risk on the client. Fixed-fee puts it on you. Retainers split it, capped. Value-based ties your upside to their outcome. Productised removes the question by removing the variability.',
    },
    {
      type: 'p',
      text: 'This is why "which model is best" has no answer and "which model suits this piece of work" has an obvious one. A discovery project with unknown unknowns priced as a fixed fee is a loss waiting to happen. A five-page brochure site billed hourly is you being paid less for getting faster.',
    },

    { type: 'h2', text: '1. Hourly', id: 'hourly' },
    {
      type: 'p',
      text: 'You bill for time spent, at a rate. It is the simplest model to explain and the hardest to grow with.',
    },
    {
      type: 'p',
      text: 'It genuinely suits work where the scope cannot be known in advance: ongoing consulting, troubleshooting, maintenance, anything where the client is buying access to judgement rather than a defined deliverable. It also suits the early days of a relationship where neither side knows how much work this will be.',
    },
    {
      type: 'p',
      text: 'The structural problem is that it punishes expertise. Getting twice as fast halves your income for the same output, which is a perverse incentive to build a business on. It also makes every invoice an argument about hours rather than a confirmation of value, and it caps you at the number of hours you can personally sell.',
    },

    { type: 'h2', text: '2. Fixed fee per project', id: 'fixed-fee' },
    {
      type: 'p',
      text: 'One price for a defined deliverable. This is where most agencies do most of their work, and rightly.',
    },
    {
      type: 'p',
      text: 'Clients prefer it, because they know the number before they commit. You prefer it once you are good, because efficiency becomes profit instead of a pay cut. And it makes the sale simpler — one number, one decision.',
    },
    {
      type: 'p',
      text: 'The risk is yours, which means fixed-fee pricing only works on top of two disciplines. The scope has to be written with its exclusions, and the change-order process has to be in the contract before anything changes. Without those, a fixed fee is just a cap on your income with no cap on the work. With them, it is the best general-purpose model available.',
    },
    {
      type: 'callout',
      text: 'A rough sanity check on a fixed fee: estimate the hours, add a contingency of 20–30% for the things you have not thought of, then price against that. If the resulting number feels uncomfortable to say out loud, the discomfort is usually information about the price, not about you.',
    },

    { type: 'h2', text: '3. Monthly retainer', id: 'retainer' },
    {
      type: 'p',
      text: 'A fixed monthly fee for an agreed scope or block of time. This is the model that changes how a business feels, because it converts income from a series of wins into something you can forecast.',
    },
    {
      type: 'p',
      text: 'The benefits are real and compounding: predictable cash flow, less time selling, deeper relationships, and the ability to hire with some confidence. The trade is a modest discount against project rates and a much higher exposure to scope creep, because "ongoing support" has no natural edges.',
    },
    {
      type: 'p',
      text: 'Three things make a retainer safe: a written cap in hours or deliverables per month, a short monthly report of delivered-against-cap sent whether or not anyone asks, and a rule that consistent overflow triggers a repricing conversation rather than quiet absorption. We have written about the trade-offs in more depth in the retainers-versus-project-pricing piece.',
    },

    { type: 'h2', text: '4. Value-based', id: 'value-based' },
    {
      type: 'p',
      text: 'You price against the outcome rather than the effort — a share of the revenue it generates, the cost it removes, or a fee set as a fraction of a quantified business impact.',
    },
    {
      type: 'p',
      text: 'When it fits, it has by far the highest ceiling, and it aligns both sides on the thing that matters. It fits when three conditions hold at once: the outcome is measurable, the client agrees in advance on how it will be measured, and your work is plausibly the main cause of the change. Performance marketing, conversion work and revenue-attached consulting are where this lives.',
    },
    {
      type: 'p',
      text: 'Be honest about how rarely all three hold. Most creative and build work cannot be cleanly attributed, and a value-based deal built on a number nobody agreed how to measure becomes an argument instead of a payday. If you cannot write the measurement method into the contract in two sentences, price the work another way.',
    },

    { type: 'h2', text: '5. Productised', id: 'productised' },
    {
      type: 'p',
      text: 'A fixed scope at a fixed price, sold repeatedly — a brand identity package, a Shopify store build, a monthly SEO package with named deliverables. It is fixed-fee pricing with the scoping work done once instead of every time.',
    },
    {
      type: 'p',
      text: 'The advantages stack up fast: no bespoke quoting, a sales page instead of a proposal, delivery you can systematise and eventually delegate, and margins that improve as you repeat the process. If you have sold roughly the same engagement five times, productising it is usually the highest-return change available to you.',
    },
    {
      type: 'p',
      text: 'The limits are that it only works for genuinely repeatable work, that it prices to the average client so unusual ones must be turned away or quoted separately, and that it caps the upside on the engagements that would have been worth more.',
    },

    { type: 'h2', text: 'The five models side by side', id: 'comparison' },
    {
      type: 'table',
      headers: ['Model', 'Who carries overrun risk', 'Cash flow', 'Ceiling', 'Scoping effort'],
      rows: [
        ['Hourly', 'Client', 'Lumpy', 'Low — capped by hours', 'Minimal'],
        ['Fixed fee', 'You', 'Lumpy, milestone-able', 'Medium', 'High per job'],
        ['Retainer', 'Shared, capped', 'Predictable', 'Medium–high', 'Medium, once'],
        ['Value-based', 'Shared', 'Variable', 'Highest', 'High — needs agreed metrics'],
        ['Productised', 'You, but known', 'Predictable per sale', 'High with volume', 'Once, up front'],
      ],
    },

    { type: 'h2', text: 'How to combine them', id: 'combining' },
    {
      type: 'p',
      text: 'The strongest shape for a small agency is usually a retainer base plus project work on top. Retainers cover your fixed costs — rent, salaries, software — so you are not selling from a position of need. Project fees then arrive as profit rather than survival, which changes which work you are willing to decline.',
    },
    {
      type: 'p',
      text: 'A reasonable target is retainers covering your fixed monthly costs. Below that, a slow quarter is frightening. Above it, you can afford to say no, and saying no is how agencies get better clients.',
    },
    {
      type: 'p',
      text: 'Hourly then has one good remaining use: out-of-scope work on an existing engagement, where it is the fairest way to charge for something nobody could have quoted. Value-based and productised are additions for later, once the base is stable.',
    },

    { type: 'h2', text: 'Changing your model with existing clients', id: 'changing' },
    {
      type: 'p',
      text: 'Move with new clients first. Switching an existing client from hourly to fixed-fee or retainer mid-relationship invites a comparison of the old and new numbers, which is a conversation you will usually lose on arithmetic even when you are right on value.',
    },
    {
      type: 'p',
      text: 'Where you do want to move an existing client, attach it to a natural boundary — a new project, a contract renewal, a new financial year — and lead with what they gain. A retainer means they stop approving every small request; a fixed fee means they stop watching a meter. Both are genuinely better for the client, which is the only argument that works.',
    },

    { type: 'h2', text: 'Running more than one model at once', id: 'operations' },
    {
      type: 'p',
      text: 'The operational cost of mixing models is real: different billing cadences, some invoices raised monthly and some against milestones, scope tracked differently per engagement, and profitability that has to be read per project rather than per month.',
    },
    {
      type: 'p',
      text: 'In Clienter, a retainer project raises and emails its own invoice on its billing day, fixed-fee projects carry a budget you can watch against actual, out-of-scope work is logged against the project rather than lost in your inbox, and each project shows its own profit alongside the overall forecast. That is the point at which running three pricing models stops being an administrative tax.',
    },
  ],
  faqs: [
    {
      q: 'What are the main agency pricing models?',
      a: 'Five: hourly, fixed fee per project, monthly retainer, value-based, and productised. They differ mainly in who carries the risk if the work takes longer than expected — the client on hourly, you on fixed-fee and productised, shared and capped on a retainer, and shared against an outcome on value-based.',
    },
    {
      q: 'Is hourly or fixed-fee pricing better for an agency?',
      a: 'Fixed-fee for anything you can scope, because it makes efficiency profitable rather than self-defeating. Hourly for work whose scope genuinely cannot be defined — troubleshooting, open-ended consulting, maintenance. Fixed-fee only works if you write exclusions into the scope and put a change-order process in the contract; without those it is a cap on income with no cap on work.',
    },
    {
      q: 'How much of my revenue should come from retainers?',
      a: 'A useful target is enough to cover your fixed monthly costs — salaries, rent, software. At that point a quiet quarter is uncomfortable rather than frightening, and project income arrives as profit rather than survival, which changes which work you are willing to turn down.',
    },
    {
      q: 'When does value-based pricing actually work?',
      a: 'Only when three things hold together: the outcome is measurable, the client agrees in advance how it will be measured, and your work is plausibly the main cause of the change. That is rarer than it sounds. If you cannot write the measurement method into the contract in two sentences, price the work another way.',
    },
    {
      q: 'What is productised pricing?',
      a: 'A fixed scope at a fixed price, sold repeatedly — a defined brand package, a store build, an SEO package with named deliverables. It is fixed-fee pricing with the scoping done once rather than per client. If you have sold roughly the same engagement five times, productising it is usually the highest-return change available.',
    },
    {
      q: 'How do I move an existing client to a new pricing model?',
      a: 'Start with new clients, and move existing ones at a natural boundary — a new project, a renewal, a new financial year. Lead with what they gain rather than what you need: a retainer means they stop approving every small request, a fixed fee means they stop watching a meter. Switching mid-engagement invites a comparison of old and new numbers that is hard to win on arithmetic.',
    },
  ],
  related: [
    {
      href: '/blog/monthly-retainers-vs-project-pricing',
      label: 'Retainers vs project pricing',
      desc: 'The two main models, in depth.',
    },
    {
      href: '/tools/freelance-rate-calculator',
      label: 'Rate calculator',
      desc: 'Work out the hourly figure underneath any model.',
    },
    {
      href: '/tools/retainer-calculator',
      label: 'Retainer calculator',
      desc: 'Price a monthly retainer with a cap.',
    },
    {
      href: '/blog/how-to-prevent-scope-creep',
      label: 'Preventing scope creep',
      desc: 'What makes fixed-fee pricing safe.',
    },
  ],
}
