import type { GlossaryTermConfig } from './_type'

/**
 * Glossary terms for the "Agency & Growth" category — the vocabulary an Indian
 * freelancer or agency meets as they scale: branding a portal, controlling team
 * access, turning happy clients into proof, and choosing how to price work.
 */
export const AGENCY_TERMS: GlossaryTermConfig[] = [
  {
    slug: 'white-label',
    term: 'White label',
    path: '/glossary/white-label',
    category: 'Agency & Growth',
    metaTitle: 'What Is White Label? Meaning for Agencies & Freelancers',
    metaDescription:
      'White label meaning explained: how agencies put their own brand on a client portal and tools, why it builds trust, and how to offer it to clients.',
    keywords: ['white label meaning', 'white label agency', 'white label software'],
    definition:
      'White label means putting your own agency’s brand — its name, logo, and colours — on a tool or client portal you didn’t build, so clients experience it as entirely yours.',
    body: [
      'The term white label comes from the old practice of selling a generic product with a plain white label that a retailer could stamp their own brand onto. In software and services it means the same thing: you take a platform someone else built, then present it to your clients under your own name, logo, and colours. As far as the client is concerned, the tool is yours — they never see the vendor who actually built it, and they never learn what you are paying for it underneath.',
      'For an agency, that branding is not a vanity detail — it is positioning. When a client logs in to approve work, view an invoice, or check on a project, everything they see tells them a story about how professional you are. A portal stamped with a third-party tool’s name quietly reveals which software you use and hints that the client could just go straight to the source. A white-labelled portal carries only your studio’s identity, so the whole experience feels like a bespoke system you built specifically for them.',
      'White labelling shows up across a lot of touchpoints: client portals and dashboards, monthly reports, invoices, proposals, and even the automated emails a client receives. A web design or digital marketing agency that resells work under its own brand wants every one of those to reinforce the agency, not a foreign vendor. It is the difference between looking like a serious independent studio and looking like a middleman quietly forwarding someone else’s tool to a client who could have found it themselves.',
      'The catch is that white labelling usually lives on a platform’s paid tiers, and the depth varies a great deal. Some tools only let you swap a logo; better ones let you remove every vendor mention and even run the portal on your own domain. When you compare options, check exactly how far the branding reaches — logo, colours, domain, and whether the vendor’s name disappears completely. For a freelancer moving upmarket, even basic white labelling is worth it, because it signals that you run a real business rather than a weekend hobby.',
      'Used well, white labelling lets a small team punch well above its weight. Clients assume a polished, branded portal took real money and engineering to build, when in reality you are standing on top of software that does the heavy lifting for a few hundred rupees a month. That perception gap — looking like a bigger, more established operation than your actual headcount suggests — is exactly what helps freelancers and small Indian agencies win larger, more valuable clients.',
    ],
    clienterNote:
      'Clienter’s client portal is white-labelled on the Pro and Ultra plans: your clients log in to a portal that carries your agency’s name and logo, not Clienter’s. The whole workspace feels like your own product, so the tool reinforces your brand instead of advertising ours.',
    related: [
      { href: '/features/client-portal', label: 'Client Portal', desc: 'A branded portal for every client.' },
      { href: '/for/web-design-agencies', label: 'For Web Design Agencies', desc: 'White-label tools for studios.' },
      { href: '/for/digital-marketing-agencies', label: 'For Marketing Agencies', desc: 'Brand every client touchpoint.' },
      { href: '/pricing', label: 'Pricing', desc: 'White label on Pro and Ultra.' },
    ],
    relatedTerms: [
      { term: 'Client portal', slug: 'client-portal' },
      { term: 'RBAC', slug: 'rbac' },
      { term: 'Case study', slug: 'case-study' },
    ],
  },
  {
    slug: 'rbac',
    term: 'RBAC',
    path: '/glossary/rbac',
    category: 'Agency & Growth',
    metaTitle: 'RBAC Meaning: Role-Based Access Control for Agencies',
    metaDescription:
      'RBAC meaning explained: how role-based access control gives each team member the right permissions, why agencies need it, and how owner and admin roles work.',
    keywords: ['RBAC meaning', 'role-based access control', 'RBAC for agencies'],
    definition:
      'RBAC (role-based access control) is a way of granting each team member access to only the parts of a system their role needs, instead of giving everyone the same all-or-nothing permissions.',
    body: [
      'RBAC stands for role-based access control. Rather than deciding, person by person, what each individual is allowed to see and do, you define a small set of roles — typically owner, admin, and team member — and attach permissions to the role itself. Add someone to a role and they instantly inherit exactly that role’s access, no more and no less. It is the standard way software keeps permissions understandable and safe as a team grows past one person.',
      'When you are a solo freelancer, this is invisible: you are the only user, so you can see and do everything. The moment you bring in a contractor, a junior designer, or a virtual assistant, the picture changes. You almost certainly do not want a freelancer hired for a single job seeing every client’s revenue, every past invoice, or the account settings that could break your whole workspace. RBAC lets a growing business hand out help without handing over the keys to everything.',
      'The three common roles map neatly onto how a real studio operates. The owner has full control, including billing and the ability to delete data. An admin can manage clients, projects, and the team day to day, but cannot touch the account itself or its billing. A team member works on the projects assigned to them without seeing sensitive financials or global settings. Together they mirror the founder, the manager, and the people doing the delivery — each needing a different slice of the system.',
      'RBAC is also about protecting your clients, not just your account. A tight permission model means a contractor you brought on for one landing page simply cannot export your entire client list on their way out. For Indian agencies handling other businesses’ data, being able to say that access is controlled by role — and that not everyone can see everything — is part of looking trustworthy and being genuinely secure, which matters more with every client you add.',
      'The practical payoff is that RBAC removes the fear that usually stops freelancers from delegating. Instead of doing everything yourself because sharing feels risky, you can invite people to a scoped role, let them get on with the work, and know that the sensitive parts stay locked down. Good access control is quietly what makes it possible to grow from a one-person operation into a small team without losing control of your business.',
    ],
    clienterNote:
      'Clienter has role-based access built in, with owner, admin, and team roles. You can invite people to help run clients and projects while keeping billing, sensitive client data, and account settings limited to the roles that should genuinely see them — so growing your team never means giving up control.',
    related: [
      { href: '/features', label: 'Features', desc: 'Team roles and access built in.' },
      { href: '/business-management-software', label: 'Business Management', desc: 'Run a growing team in one place.' },
      { href: '/for/web-design-agencies', label: 'For Web Design Agencies', desc: 'Give each teammate the right access.' },
      { href: '/pricing', label: 'Pricing', desc: 'Invite your team as you grow.' },
    ],
    relatedTerms: [
      { term: 'White label', slug: 'white-label' },
      { term: 'Client portal', slug: 'client-portal' },
      { term: 'NDA', slug: 'nda' },
    ],
  },
  {
    slug: 'testimonial',
    term: 'Testimonial',
    path: '/glossary/testimonial',
    category: 'Agency & Growth',
    metaTitle: 'What Is a Testimonial? Meaning for Freelancers & Agencies',
    metaDescription:
      'Testimonial meaning explained: what a client testimonial is, why it builds trust with new clients, and how freelancers can collect genuine, verified ones.',
    keywords: ['testimonial meaning', 'client testimonial', 'testimonials for freelancers'],
    definition:
      'A testimonial is a short, quotable endorsement from a happy client that vouches for your work and helps a prospective client trust you enough to hire.',
    body: [
      'A testimonial is a client saying, in their own words, that working with you was worth it. It is usually just a sentence or two — ideally attached to the client’s real name, business, and photo. That small block of text does a big job: it is social proof, evidence from someone who has no particular reason to flatter you, telling the next prospect that you actually deliver what you promise.',
      'Testimonials work because a prospect cannot verify your skill before they pay you. They are being asked to trust a stranger on the internet with their money and their business. A testimonial from a real, named client is the closest thing to a personal referral you can put on a website. In a market where anyone can claim to be brilliant, a specific, believable quote — “delivered our site in three weeks and enquiries doubled” — beats any amount of you praising yourself.',
      'It helps to know how a testimonial differs from its longer cousin, the case study. A testimonial is short and emotional: the punchy quote that captures how a client felt. A case study is the full story behind that quote, with the problem, the process, and the numbers spelled out. Both draw on the same raw material — a genuinely satisfied client — but a testimonial is quick to collect and easy to scatter across your homepage, proposals, and social posts.',
      'The hard part is not writing testimonials; it is getting them. Most freelancers finish a project, feel awkward about asking, and quietly let the moment pass. The fix is timing and ease: ask right after you deliver something the client is visibly delighted with, while the good feeling is fresh, and make giving the testimonial as effortless as possible. A request that takes the client thirty seconds is one you will actually receive; a vague “could you write something” usually gets forgotten.',
      'The final piece is credibility. As fake reviews spread, prospects have learned to be sceptical of testimonials a business could easily have written itself. The strongest endorsements are ones a reader can tell are real — tied to an identifiable client and, better still, to verified work that genuinely happened. Authentic proof, not invented praise, is what actually moves a hesitant prospect from reading your site to sending you a message.',
    ],
    clienterNote:
      'Clienter turns your finished projects into verified client reviews. Because each review is tied to real work delivered through the platform, the testimonial a prospect reads is credible — it is proof a client actually vouched for, not a line you could have written for yourself.',
    related: [
      { href: '/features/verified-reviews', label: 'Verified Reviews', desc: 'Turn finished work into proof.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'Keep every happy client on file.' },
      { href: '/features/project-management', label: 'Project Management', desc: 'Deliver work worth praising.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199.' },
    ],
    relatedTerms: [
      { term: 'Case study', slug: 'case-study' },
      { term: 'Referral', slug: 'referral' },
      { term: 'Offboarding', slug: 'offboarding' },
    ],
  },
  {
    slug: 'case-study',
    term: 'Case study',
    path: '/glossary/case-study',
    category: 'Agency & Growth',
    metaTitle: 'What Is a Case Study? Meaning for Freelancers & Agencies',
    metaDescription:
      'Case study meaning explained: how a client success story proves your results, what to put in one, and how agencies use case studies to win bigger work.',
    keywords: ['case study meaning', 'case study for freelancers', 'agency case study'],
    definition:
      'A case study is a detailed success story that walks a prospect through a real client project — the problem, what you did, and the results — to prove you can do the same for them.',
    body: [
      'A case study is the long-form proof behind your work. Where a testimonial is a single quote, a case study tells the whole story: where the client started, the challenge they faced, the approach you took, and — most importantly — the measurable outcome you produced. It is the portfolio piece that does real selling, because it lets a prospect see the full arc of a project rather than just admiring a finished screenshot.',
      'Almost every good case study follows the same shape: problem, then solution, then result. You open with where the client was — a slow website, no incoming leads, a launch that kept slipping — explain what you actually did about it, and close with concrete numbers: traffic up sixty percent, live in three weeks, two lakh rupees of new sales in a quarter. Those numbers are what separate a genuine case study from a vague brag; without them, it is just a nicer-sounding claim.',
      'Agencies live and die on case studies, especially when chasing bigger clients. When a serious prospect is deciding between you and a competitor, a relevant case study is often the document that tips it. It proves you have solved this exact problem before and lets the prospect picture their own result in your hands. A folder of strong, specific case studies is worth more than any sales pitch, because it trades promises for evidence a client can check.',
      'The friction is in the writing, and that friction is almost always a records problem. The best case studies come from projects you actually tracked — where the scope, timeline, and delivered work are on record — plus a client who is happy to be quoted. If a finished project lives scattered across WhatsApp threads, email, and a Google Drive folder, writing it up months later is genuinely painful. If it was documented as the work happened, the story more or less writes itself.',
      'It is worth building the habit of capturing a case study while a project is still fresh, not scrambling for one when you suddenly need proof for a pitch. Note the starting numbers before you begin, keep a clean record of what you delivered, and ask the client for their results a little after launch. Do that consistently and, over a year, you accumulate a library of proof that quietly makes every future proposal easier to win.',
    ],
    clienterNote:
      'Because Clienter keeps each project’s scope, timeline, and delivered work in one place — and turns the finished result into a verified client review — you already hold the raw material for a credible case study. There is no reconstructing the project from memory when a big pitch needs proof.',
    related: [
      { href: '/features/verified-reviews', label: 'Verified Reviews', desc: 'Proof you can point a prospect to.' },
      { href: '/features/project-management', label: 'Project Management', desc: 'A documented project to write up.' },
      { href: '/for/digital-marketing-agencies', label: 'For Marketing Agencies', desc: 'Win pitches with real proof.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'Every client project on record.' },
    ],
    relatedTerms: [
      { term: 'Testimonial', slug: 'testimonial' },
      { term: 'Deliverable', slug: 'deliverable' },
      { term: 'Referral', slug: 'referral' },
    ],
  },
  {
    slug: 'sla',
    term: 'SLA',
    path: '/glossary/sla',
    category: 'Agency & Growth',
    metaTitle: 'What Is an SLA? Service Level Agreement for Agencies',
    metaDescription:
      'SLA meaning explained: what a service level agreement promises about response times and uptime, when freelancers need one, and what to put inside it.',
    keywords: ['SLA meaning', 'service level agreement', 'SLA for freelancers'],
    definition:
      'An SLA (service level agreement) is a written promise about the level of service a client can expect — such as response times, uptime, or turnaround — and what happens if you fall short.',
    body: [
      'SLA stands for service level agreement. It is the part of a working arrangement that sets measurable expectations for how you will deliver an ongoing service — not what you will build, but how reliably and how quickly you will support it. Typical SLA terms read like commitments you can actually be held to: “we respond within four working hours”, “ninety-nine point nine percent uptime”, or “revisions returned within two business days”.',
      'SLAs matter most for ongoing work rather than one-off projects. A single logo design does not need one; a monthly website-maintenance retainer, a support contract, or a hosting arrangement absolutely does. In those cases the client is paying for reliability itself, and they reasonably want to know what “reliable” means in writing before something breaks. A clear SLA protects both sides from the mismatched expectations that quietly sour otherwise good client relationships.',
      'A useful SLA spells out a handful of specifics. Response time is how fast you acknowledge a request; resolution time is how fast you actually fix it. If you host, availability or uptime is the percentage of time the service must be live. You should also state the scope of what is covered, the hours of coverage — business hours versus round the clock — and the remedy if you miss a target, which is often a service credit. The more concrete the numbers, the fewer arguments you will have later.',
      'The benefit runs both ways, which is why SLAs are worth offering rather than fearing. To a client, a written SLA signals that you are a serious, reliable operator, and that reassurance helps you win and keep larger accounts. For you, it is quietly a shield: it defines what “support” actually includes, so a client on a business-hours retainer cannot fairly demand instant replies at midnight. A good SLA sets the ceiling on your obligations as clearly as it sets the floor.',
      'Living up to an SLA depends on being able to see what was promised against what happened. If a client ever questions whether you hit your response times, you want the history — when the request came in, when you replied, when it was resolved — rather than a vague memory. Keeping that record turns the SLA from a nervous promise into something you can actually stand behind, which is exactly what makes clients comfortable signing longer, more valuable agreements.',
    ],
    clienterNote:
      'Clienter helps you run the retainers and maintenance projects an SLA sits on top of. The requests, timelines, and delivered work stay on record in one place, so if a client ever asks whether you met the agreed terms, you have the history to answer instead of a guess.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'Track work against your commitments.' },
      { href: '/business-management-software', label: 'Business Management', desc: 'Run retainers reliably.' },
      { href: '/features/client-portal', label: 'Client Portal', desc: 'One place for client requests.' },
      { href: '/pricing', label: 'Pricing', desc: 'Plans for growing agencies.' },
    ],
    relatedTerms: [
      { term: 'Retainer', slug: 'retainer' },
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'MSA', slug: 'msa' },
    ],
  },
  {
    slug: 'time-and-materials',
    term: 'Time and materials',
    path: '/glossary/time-and-materials',
    category: 'Agency & Growth',
    metaTitle: 'What Is Time and Materials? A Pricing Model Explained',
    metaDescription:
      'Time and materials meaning explained: how this pricing model bills for actual hours and costs, when it beats a fixed bid, and how to manage the risk.',
    keywords: ['time and materials meaning', 'time and materials pricing', 'T&M vs fixed bid'],
    definition:
      'Time and materials (T&M) is a pricing model where a client pays for the actual hours you work plus any costs incurred, rather than a single fixed price agreed upfront.',
    body: [
      'Under a time and materials arrangement, you bill for what the work genuinely takes: your hours at an agreed rate, plus any real expenses along the way — a plugin licence, a stock photo, a subcontractor’s fee. The client, rather than you, carries the risk of the project running long, because you are paid for every hour regardless of how many it turns out to be. It is the natural model whenever the full scope simply cannot be known before you start.',
      'T&M suits open-ended or evolving work. Ongoing development, consulting, discovery-heavy projects, and anything where the client keeps changing direction all fit it well. Instead of guessing a fixed price up front and then padding it heavily to cover the risk of being wrong, you agree an honest hourly or daily rate and bill for the time actually spent. Nobody has to pretend they can see the whole project clearly on day one, which is often the more truthful position.',
      'The big upside is that you never quietly lose money to scope creep. Every extra request the client dreams up is simply more billable time, so you are not forced to choose between doing unpaid work and being the difficult freelancer who says no to changes. It tends to be fairer on messy, exploratory jobs, and from the client’s side there is a genuine benefit too: they only pay for what they actually use, and they can stop the moment they feel they have had enough value.',
      'The obvious downside is that the client has no guaranteed total, and an open-ended bill makes a lot of people nervous. The answer is transparency rather than mystery. Track your hours accurately, report where the time is going on a regular rhythm, and where it helps, offer a not-to-exceed cap so there is an agreed ceiling. Clients accept and even prefer T&M when they trust your records; they resist it the moment billing starts to feel like a black box they cannot see into.',
      'It helps to understand T&M as one half of a pair. The opposite approach is a fixed bid, where you quote a single price for a clearly defined scope and absorb the risk yourself. Plenty of experienced agencies use both, deliberately — fixed bids for tightly defined projects and time and materials for the fuzzy, evolving ones. The real skill is not loyalty to one model but knowing, before you quote, which one actually protects you on the job in front of you.',
    ],
    clienterNote:
      'Whichever model you choose, Clienter lets you run the project and raise the invoice in one place. For a time and materials engagement that keeps things clean — you bill for the work as it adds up and keep the scope, changes, and delivered items on record if the running total is ever questioned.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Bill for hours and costs cleanly.' },
      { href: '/features/project-management', label: 'Project Management', desc: 'Track the work as it grows.' },
      { href: '/project-management-crm', label: 'Project Management CRM', desc: 'Projects and billing together.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199.' },
    ],
    relatedTerms: [
      { term: 'Fixed bid', slug: 'fixed-bid' },
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'Billable hours', slug: 'billable-hours' },
    ],
  },
  {
    slug: 'fixed-bid',
    term: 'Fixed bid',
    path: '/glossary/fixed-bid',
    category: 'Agency & Growth',
    metaTitle: 'What Is a Fixed Bid? Fixed-Price Projects Explained',
    metaDescription:
      'Fixed bid meaning explained: how fixed-price projects work, why clients like the certainty, the scope-creep risk, and how it compares to time and materials.',
    keywords: ['fixed bid meaning', 'fixed price project', 'fixed bid vs T&M'],
    definition:
      'A fixed bid is a pricing model where you agree a single set price for a clearly defined scope of work upfront, so the client knows the total cost no matter how long the job takes you.',
    body: [
      'In a fixed-bid — or fixed-price — project, you and the client agree on one number for a defined deliverable before any work begins: “eighty thousand rupees for a five-page website”, and that is the price. Whatever happens after that, the number stays put. You are the one carrying the risk here: if the job turns out to take twice as long as you estimated, you absorb the extra hours rather than passing them on to the client.',
      'Fixed bids work best when the scope is clear and reasonably stable — a defined website, a logo and brand package, a set number of blog posts. Clients tend to love them precisely because there is no nasty surprise waiting on the final invoice; they can budget the exact figure in advance and approve it without fear. It is usually the easiest model to sell, especially to first-time or cost-conscious Indian clients who value certainty above almost everything else.',
      'For you, a fixed bid rewards efficiency in a way that hourly billing never does. If you deliver faster than you estimated, your effective hourly rate quietly goes up, because the price was fixed regardless of speed. It is clean to quote, easy for a client to say yes to, and simple to invoice against milestones. For work you have done many times and understand deeply, a fixed bid can be noticeably more profitable than billing by the hour.',
      'The great danger of a fixed bid is scope creep — everything that was not clearly written down at the start. “Just one more small change”, “can you also add a blog section”, “actually we have rethought the whole homepage” — each request eats directly into your margin, because the price is already locked and cannot move. The only real defence is a tight scope of work paired with a change-order process, so that anything outside the agreed scope becomes a new, separately priced request rather than a freebie.',
      'It is clearest to see the fixed bid as the mirror image of time and materials, where the client instead pays for the actual hours worked. A fixed bid trades flexibility for certainty; time and materials trades certainty for fairness on unpredictable work. Neither is universally better, and experienced agencies choose deliberately per project — a fixed bid when the scope is genuinely nailed down, and time and materials when everyone knows it is not.',
    ],
    clienterNote:
      'Clienter helps a fixed bid stay profitable. Keep the agreed scope and delivered work on record, invoice against the project, and when a client asks for something outside the original scope you have the documentation to charge for it — so out-of-scope work becomes a new line rather than quietly eroding the price you quoted.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Invoice a fixed price cleanly.' },
      { href: '/features/project-management', label: 'Project Management', desc: 'Keep the agreed scope on record.' },
      { href: '/project-management-crm', label: 'Project Management CRM', desc: 'Scope, work, and billing in one.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199.' },
    ],
    relatedTerms: [
      { term: 'Time and materials', slug: 'time-and-materials' },
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'Change order', slug: 'change-order' },
    ],
  },
]
