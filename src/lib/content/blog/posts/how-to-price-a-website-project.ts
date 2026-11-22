import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'how-to-price-a-website-project',
  title: 'How to Price a Website Project (Without Guessing)',
  metaTitle: 'How to Price a Website Project',
  description:
    'A practical method for quoting website builds — hourly vs fixed vs value pricing, how to build a quote from scope, what to charge in India and abroad, and the clauses that protect the price.',
  date: '2026-11-22',
  author: 'Talagana Rajesh',
  category: 'Web & software projects',
  categorySlug: 'web-development',
  tags: ['pricing', 'web development', 'proposals', 'freelancing', 'agency operations'],
  primaryKeyword: 'how to price a website project',
  featured: true,
  intro:
    'Most website quotes are produced the same way: the developer thinks of a number that feels defensible, adds a bit for safety, and hopes. It works often enough to never get fixed, and fails expensively when it doesn’t — a five-page site quoted at a fortnight that runs for two months because “a blog” turned out to mean a filtered archive with author pages and a newsletter integration. This is a method for pricing a website project from its scope rather than your nerve, including what to do when the client names a budget first.',
  body: [
    { type: 'h2', text: 'Decide what you are selling', id: 'decide-what-you-are-selling' },
    { type: 'p', text: 'Before any number, settle one question: are you selling time, a deliverable, or an outcome? The three are priced differently and attract different clients, and most of the confusion in web pricing comes from quoting one while thinking about another.' },
    { type: 'table', headers: ['Model', 'Works when', 'Fails when'], rows: [
      ['Hourly / day rate', 'Scope is genuinely unknown — discovery, maintenance, ongoing support', 'The client wants certainty; you get punished for being fast'],
      ['Fixed price', 'Scope can be written down and fixed — most website builds', 'Scope is vague or the client is a known changer-of-minds'],
      ['Value-based', 'The site has a measurable commercial job and the client knows its worth', 'You cannot name the outcome, or the client sees websites as a commodity'],
      ['Retainer', 'Work is continuous — maintenance, iterations, a dedicated share of your week', 'Expectations of availability are unwritten'],
    ] },
    { type: 'p', text: 'For a typical client website, fixed price against a written scope is the right default. It gives the client the certainty they want, rewards you for efficiency, and forces the scoping conversation that prevents the project going wrong. It only works if the scope is real, which is the next step.' },

    { type: 'h2', text: 'Build the quote from the scope, not from a feeling', id: 'build-from-scope' },
    { type: 'p', text: 'A website quote is an estimate of effort multiplied by your rate, plus a deliberate margin for the unknown. The failure is almost always in the first term — estimating the build and forgetting everything around it.' },
    { type: 'p', text: 'List the real work. For a brochure site that looks roughly like this:' },
    { type: 'ol', items: [
      'Discovery and planning — sitemap, requirements, the call where you find out what they actually need.',
      'Design — how many unique page templates, not how many pages. Ten pages on three templates is three design jobs.',
      'Build — each template, plus the components that appear across them.',
      'Content population — the hours nobody quotes. Entering copy and images for twenty pages is a real day or two.',
      'Integrations — forms, booking, payments, CRM, analytics, whatever third-party service is involved. Each has a long tail.',
      'Responsive and cross-browser QA.',
      'Launch — redirects, DNS, indexing, testing, the checklist.',
      'Project management and client communication — calls, emails, chasing content. This is typically 15–20% of the project and is almost never quoted.',
      'Handover, training and documentation.',
    ] },
    { type: 'p', text: 'Estimate each in hours or days. Add the three multipliers that make estimates honest: a contingency of 20–30% for the unknown, a premium for a rushed timeline, and an adjustment for a client you expect to be high-touch. Then multiply by your rate and round up to a clean number.' },
    { type: 'callout', text: 'If your estimate for the build is 40 hours, your quote is not 40 hours. Content population, communication, QA and launch routinely add 40–60% on top. Developers who feel chronically underpaid are usually pricing the build and delivering the project.' },

    { type: 'h2', text: 'What your rate should actually be', id: 'what-your-rate-should-be' },
    { type: 'p', text: 'Work backwards from the business you need, not forwards from what feels polite to charge. Decide your target annual income, add your costs — software, hardware, insurance, taxes, accountant — then divide by your genuinely billable hours.' },
    { type: 'p', text: 'That last number is where people deceive themselves. A full-time freelancer has roughly 2,000 working hours a year, of which perhaps 1,000 to 1,200 are billable once you subtract sales, admin, unpaid revisions, learning and holidays. If you target ₹20,00,000 and have ₹3,00,000 of costs, that is ₹23,00,000 across about 1,100 billable hours: a little over ₹2,000 an hour. If your current rate is ₹800, the arithmetic has already told you why the year feels hard.' },
    { type: 'p', text: 'Rates vary enormously by market, and that is fine. An Indian freelancer serving Indian SMEs prices differently from one serving US agencies — and if you serve clients abroad, price in their currency at their market rate rather than converting yours. The cost of living argument is for your benefit, not theirs; nobody buys a cheaper website because you have cheaper rent.' },

    { type: 'h2', text: 'When the client names the budget first', id: 'when-the-client-names-budget' },
    { type: 'p', text: 'This is good news, not an insult, and the correct response is never to quote exactly their number. Treat the budget as a constraint and design a scope that fits it honestly.' },
    { type: 'p', text: 'If the budget is well below what the brief requires, do not silently cut corners to meet it — that is how projects end badly for both sides. Say what the brief costs, then offer a smaller first phase that genuinely works within their budget: fewer templates, a simpler integration, launch now and extend later. A client who gets a working five-page site for what they have is far happier than one who gets a compromised fifteen-page one.' },
    { type: 'p', text: 'If the budget is above your estimate, do not just pocket the difference — ask what else they were expecting for it. Often there is an outcome in their head you haven’t heard about yet, and that conversation either justifies the budget properly or makes you look like the only honest quote they received.' },

    { type: 'h2', text: 'Presenting the price so it survives contact', id: 'presenting-the-price' },
    { type: 'p', text: 'How you present a quote changes whether it is accepted more than the number does.' },
    { type: 'ul', items: [
      'Offer three options rather than one — a lean version, the recommended version, and an extended one. The question shifts from whether to buy to which to buy, and the middle option is usually chosen.',
      'Quote the project, not the hours. “₹1,80,000 for the site as scoped” invites a decision; “120 hours at ₹1,500” invites a negotiation about hours.',
      'Write the exclusions explicitly. Not just what is included — what is not: extra templates, copywriting, photography, logo design, ongoing maintenance, a fourth revision round.',
      'Name the revision rounds. Two rounds per design stage is standard; after that, work is quoted.',
      'Put the payment schedule in the quote: typically 40–50% deposit, the balance at launch, or thirds for a longer build.',
      'Give the quote an expiry date, usually 30 days. It is a normal commercial practice and it quietly discourages drift.',
    ] },
    { type: 'p', text: 'Then get it signed. A verbal yes on a call is not a scope; the signed document is what you point at in month three when someone asks why the extra landing page is being quoted separately.' },

    { type: 'h2', text: 'Protecting the price after the quote', id: 'protecting-the-price' },
    { type: 'p', text: 'A good quote still loses money if the project is run loosely. Three habits protect it. Take the deposit before work starts, without exception — it is the single best predictor of a client who will pay the balance. Log every change request with a price and an approval, so the twentieth small addition is a quote rather than a favour. And raise the balance invoice at launch, on the day, rather than whenever the admin gets done.' },
    { type: 'p', text: 'Those three habits need to live somewhere other than your memory, which is a large part of why the money leaks in the first place. Clienter attaches the signed proposal, the change log and the deposit and balance invoices to the project itself, so the commercial side of a build moves with the work instead of trailing a fortnight behind it.' },

    { type: 'h2', text: 'A worked example', id: 'worked-example' },
    { type: 'p', text: 'A twelve-page marketing site on four templates, with a blog, a contact form, a booking integration and a migration from an old site. Discovery 6 hours, design 28, build 44, content population 12, integrations 10, QA 8, launch and redirects 8, project management 20, handover 4. That is 140 hours. Add 25% contingency: 175. At ₹1,800 an hour, ₹3,15,000 — quote ₹3,25,000 with two revision rounds per stage, copywriting excluded, 50% deposit, balance at launch, and a maintenance plan proposed separately at ₹8,000 a month.' },
    { type: 'p', text: 'The number itself isn’t the point. The point is that every part of it can be explained, defended, and renegotiated against a written scope — which is what makes it a price rather than a guess.' },
  ],
  faqs: [
    { q: 'How much should I charge for a website in India?', a: 'There is no single rate, but the method is the same everywhere: estimate the real effort — discovery, design, build, content population, integrations, QA, launch and project management — add 20–30% contingency, and multiply by a rate derived from your target income divided by genuinely billable hours. For most independent Indian developers that rate works out well above the ₹500–800 an hour many quote, which is exactly why the year feels tight.' },
    { q: 'Should I charge hourly or fixed price for a website?', a: 'Fixed price against a written scope is the right default for a build, because it gives the client certainty and rewards you for being efficient. Keep hourly for work where scope genuinely cannot be known — discovery, maintenance, ad-hoc support. The danger of fixed price isn’t the model, it’s quoting one without writing the scope down.' },
    { q: 'How much deposit should I take for a website project?', a: '40–50% up front is standard for a project build, with the balance at launch, or split into thirds across a longer engagement. Take it before any work starts. Whether a client pays a deposit promptly is the most reliable early signal you will get about whether they will pay the balance.' },
    { q: 'What should I exclude from a website quote?', a: 'Anything you would otherwise end up doing for free: copywriting, photography, logo and brand design, content entry beyond an agreed page count, additional templates, revision rounds past the agreed number, third-party licence and subscription costs, and ongoing maintenance. Writing exclusions down is not unfriendly — it is the part of the quote that prevents the argument.' },
    { q: 'What do I do if the client’s budget is too low?', a: 'Don’t quietly cut quality to fit it. State what the full brief costs, then offer a genuinely smaller first phase that works within their budget — fewer templates, simpler integrations, launch now and extend later. A smaller site done properly leaves both sides better off than a compromised large one, and it often becomes the first phase of a longer relationship.' },
  ],
  related: [
    { href: '/blog/how-to-write-a-proposal-that-wins', label: 'How to write a proposal that wins', desc: 'Turning the price into a document that gets signed.' },
    { href: '/blog/how-to-prevent-scope-creep', label: 'How to prevent scope creep', desc: 'Protecting a fixed price after it’s agreed.' },
    { href: '/blog/website-project-milestone-payments', label: 'Milestone payments', desc: 'Structuring payments so cash tracks delivery.' },
    { href: '/features/invoicing', label: 'Invoicing', desc: 'Deposits, balances and GST-ready invoices.' },
  ],
}
