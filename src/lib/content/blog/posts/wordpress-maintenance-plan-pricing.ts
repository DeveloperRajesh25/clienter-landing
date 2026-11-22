import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'wordpress-maintenance-plan-pricing',
  title: 'Website Maintenance Plan Pricing: What to Charge and What to Include',
  metaTitle: 'Website Maintenance Plan Pricing Guide',
  description:
    'How to build and price website care plans — three tier templates, what belongs in each, what to exclude, how to sell them at launch, and how to tell when a plan has become unprofitable.',
  date: '2026-11-22',
  author: 'Talagana Rajesh',
  category: 'Web & software projects',
  categorySlug: 'web-development',
  tags: ['pricing', 'retainers', 'web development', 'agency operations', 'recurring revenue'],
  primaryKeyword: 'website maintenance plan pricing',
  featured: false,
  intro:
    'Project work pays the bills and maintenance builds the business, which is why almost every web developer eventually tries to sell care plans and why so many of them end up underpriced. The usual pattern: a round number picked at launch because it sounded reasonable, no written inclusions, and three years later the same fee covers a bigger site, more plugins and a client who now messages on Sundays. This is how to construct a maintenance plan that is worth selling and worth delivering.',
  body: [
    { type: 'h2', text: 'What a maintenance plan is really for', id: 'what-a-plan-is-for' },
    { type: 'p', text: 'Be clear about the two different things you might be selling, because conflating them is where pricing goes wrong. Technical upkeep — updates, backups, security, uptime, performance — is insurance. Its value is that nothing bad happens, which is a hard thing to feel good about paying for. Ongoing work — content changes, small features, improvements — is a service with visible output.' },
    { type: 'p', text: 'The plans that sell well and renew well bundle both: the insurance layer that you should be doing anyway, plus a defined allowance of real work the client can see. Selling pure insurance is an uphill fight because the better you do it, the less the client notices. Selling hours alone turns you into a shop that gets called only when something is wanted.' },

    { type: 'h2', text: 'What belongs in a care plan', id: 'what-belongs-in-a-plan' },
    { type: 'p', text: 'The technical layer is mostly the same regardless of price. What changes with tier is frequency, response time, and how much hands-on work is included.' },
    { type: 'ul', items: [
      'Core, theme and plugin updates, applied on staging first for anything non-trivial.',
      'Off-site backups on a defined schedule, with a restore tested periodically rather than assumed.',
      'Security monitoring, malware scanning and hardening.',
      'Uptime monitoring with alerts that reach a human.',
      'Periodic performance checks — Core Web Vitals, image weight, caching health.',
      'Broken link and form checks, because a silently broken contact form costs the client real leads.',
      'A monthly or quarterly report, however short. This is what makes the insurance layer visible.',
      'A defined allowance of content or small development work — the part the client actually feels.',
    ] },
    { type: 'p', text: 'Write the exclusions just as carefully: new page templates, redesigns, new integrations, content writing, SEO campaigns, third-party licence costs, and work caused by the client’s own changes. Anything not listed is quoted separately — and that sentence belongs in the plan document.' },

    { type: 'h2', text: 'Three tiers that work', id: 'three-tiers-that-work' },
    { type: 'p', text: 'Three options outperform one, because the question becomes which plan rather than whether to have one. These are starting shapes — adjust the prices to your market, but keep the structure.' },
    { type: 'table', headers: ['', 'Essential', 'Standard', 'Priority'], rows: [
      ['Updates', 'Monthly', 'Fortnightly', 'Weekly, staged'],
      ['Backups', 'Weekly, off-site', 'Daily', 'Daily + on-demand'],
      ['Security & uptime', 'Monitoring + scans', 'Monitoring + hardening', 'Monitoring + incident response'],
      ['Included work', 'None', '1 hour/month', '3–4 hours/month'],
      ['Response time', '3 business days', '1 business day', 'Same business day'],
      ['Reporting', 'Quarterly', 'Monthly', 'Monthly + review call'],
      ['Typical India price', '₹2,000–3,500/mo', '₹6,000–10,000/mo', '₹15,000–25,000/mo'],
      ['Typical global price', '$30–60/mo', '$100–200/mo', '$300–600/mo'],
    ] },
    { type: 'p', text: 'Two things make these numbers work. First, unused hours do not roll over — state it plainly, because rollover turns a predictable plan into a liability that accumulates against you. Second, price the technical layer so it is profitable even if the client uses every included hour; the allowance is the part that sells, not the part that funds it.' },
    { type: 'callout', text: 'A useful floor: whatever your plan costs, it should exceed your hourly rate multiplied by the included hours, plus the real cost of the tooling and the time the technical layer takes. If a ₹6,000 plan includes an hour of work at a ₹1,800 rate, you have ₹4,200 to cover updates, backups, monitoring, reporting and margin. That is tight but workable. At ₹3,000 it is not a plan, it is a donation.' },

    { type: 'h2', text: 'When to sell it', id: 'when-to-sell-it' },
    { type: 'p', text: 'At launch, and in the original proposal. These are the only two moments that work well.' },
    { type: 'p', text: 'Putting the maintenance plan in the build proposal frames it as part of owning a website rather than an upsell invented afterwards. Mentioning it again at handover — when the client is pleased, the site is new, and they are freshly aware how much goes into keeping it running — converts far better than an email six months later, by which time the site has started to drift and the conversation has an implied criticism in it.' },
    { type: 'p', text: 'Frame it in terms of what the site is worth to them, not in terms of your tasks. “This site generates your enquiries. The plan keeps it fast, secure, backed up and fixed quickly, and gives you an hour a month of changes” lands better than a list of plugin updates.' },

    { type: 'h2', text: 'Why plans become unprofitable', id: 'why-plans-become-unprofitable' },
    { type: 'p', text: 'Almost always the same three ways, and all three are detectable before they hurt.' },
    { type: 'h3', text: 'Unlogged work' },
    { type: 'p', text: 'A request arrives by WhatsApp, takes twenty minutes, and is never recorded. Multiply across a month and across clients and you have given away days without ever seeing it on a page. The fix is simply to log every request against the client — the measurement changes the behaviour long before any pricing does.' },
    { type: 'h3', text: 'Scope drift inside the plan' },
    { type: 'p', text: 'The included hour gradually becomes “small bits of work generally”. A new landing page appears inside the plan one month and becomes a precedent. Hold the line in writing, and quote anything outside the inclusions — politely, immediately, and every time.' },
    { type: 'h3', text: 'Never repricing' },
    { type: 'p', text: 'The site has doubled in size since the plan was written and the fee has not moved. Review every plan annually against the record of what it actually consumed, and raise the price when the evidence supports it. An annual review that sometimes concludes “no change” is a normal professional habit; never reviewing is how three-year-old pricing survives.' },

    { type: 'h2', text: 'Run it on something that remembers', id: 'run-it-on-something-that-remembers' },
    { type: 'p', text: 'The operational requirements for a maintenance book are narrow and unforgiving: invoices that raise themselves on each plan’s renewal date, requests logged against the client rather than scattered across chat, and a record of what each plan absorbed so renewals are priced from evidence. Miss the first and you lose whole months of revenue. Miss the second and you cannot do the third.' },
    { type: 'p', text: 'That is what Clienter’s retainer handling is for — recurring invoices per client, a request queue fed by the client’s own portal, and the request history sitting on the client record when renewal comes around. Any system that does those three will beat a spreadsheet and a good memory, because the thing that fails first is always the memory.' },

    { type: 'h2', text: 'The summary', id: 'the-summary' },
    { type: 'p', text: 'Bundle insurance with visible work. Offer three tiers and let the client choose. Write the inclusions and the exclusions. Sell it in the build proposal and again at handover. Don’t roll hours over. Log every request. Review the price annually against what the plan actually consumed. Do that and maintenance becomes the most reliable revenue in your business rather than the most quietly expensive.' },
  ],
  faqs: [
    { q: 'How much should I charge for a website maintenance plan?', a: 'Work up from cost rather than down from a round number. A plan must cover your hourly rate times the included hours, plus the real time the technical layer takes and the tooling it needs, plus margin. In practice that puts a basic plan around ₹2,000–3,500 a month in India or $30–60 globally, a standard plan with an included hour around ₹6,000–10,000 or $100–200, and a priority plan with several hours and same-day response at ₹15,000–25,000 or $300–600.' },
    { q: 'What should a website care plan include?', a: 'Core, theme and plugin updates; off-site backups with a tested restore; security monitoring and hardening; uptime monitoring; periodic performance and broken-link checks; a short regular report; and a defined allowance of content or small development work. The report and the allowance are what make an otherwise invisible service feel worth paying for.' },
    { q: 'Should unused maintenance hours roll over?', a: 'No, and say so in the plan document. Rollover converts a predictable monthly service into an accumulating liability — a client who has banked nine hours over a quiet year will eventually spend them all in a week you had already committed elsewhere.' },
    { q: 'When is the best time to sell a maintenance plan?', a: 'In the original build proposal, and again at handover. Including it in the proposal frames upkeep as part of owning a website rather than an afterthought, and handover is the moment the client is most aware of what goes into the site and most pleased with you. An email six months later converts far worse.' },
    { q: 'How do I know if a maintenance plan is profitable?', a: 'Log every request against the client for a full cycle, then compare the work delivered against what they paid. Most agencies doing this for the first time find two or three plans that have been underpriced since the day they were written — usually the oldest ones, on sites that have grown considerably since the fee was set.' },
  ],
  related: [
    { href: '/for/website-maintenance-agencies', label: 'For Website Maintenance Agencies', desc: 'Running a book of care plans and AMCs.' },
    { href: '/features/retainer-management', label: 'Retainer Management', desc: 'Recurring invoices and renewal tracking.' },
    { href: '/blog/monthly-retainers-vs-project-pricing', label: 'Retainers vs project pricing', desc: 'Choosing the model that fits the work.' },
    { href: '/for/wordpress-developers', label: 'For WordPress Developers', desc: 'Builds and care plans in one workspace.' },
  ],
}
