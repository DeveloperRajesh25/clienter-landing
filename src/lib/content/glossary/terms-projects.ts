import type { GlossaryTermConfig } from './_type'

/**
 * Glossary terms for the "Projects & Delivery" category — the concepts a
 * freelancer or agency meets while scoping, running, and closing client work.
 * Rendered by <GlossaryTermPage> at /glossary/<slug>.
 */
export const PROJECT_TERMS: GlossaryTermConfig[] = [
  {
    slug: 'retainer',
    term: 'Retainer',
    path: '/glossary/retainer',
    category: 'Projects & Delivery',
    metaTitle: 'What Is a Retainer? Meaning for Indian Freelancers',
    metaDescription:
      'Retainer meaning for Indian freelancers: how a monthly retainer works, why it gives you predictable recurring income, and how to price and manage one well.',
    keywords: ['retainer meaning', 'what is a retainer', 'freelance retainer'],
    definition:
      'A retainer is an ongoing arrangement where a client pays a fixed, usually monthly, fee for an agreed amount of your work or availability, giving you predictable recurring income instead of chasing one-off projects.',
    body: [
      'A retainer changes the shape of a freelance business. Instead of pricing every project from scratch and hoping the next enquiry lands before the month runs out, a client commits to paying a fixed amount — say ₹30,000 — every month in return for an agreed scope or a block of your time. For an independent operator in India, it is the closest thing to a salary you can earn without giving up your independence.',
      'Retainers usually take one of two shapes. A deliverables retainer promises a defined output each month: four blog posts, one landing page, a set of social creatives. An availability or time retainer reserves a number of hours the client can draw on, whether or not they use every one. Both trade a little pricing upside for the thing a small business values most — knowing what is coming in before the month begins.',
      'That predictability compounds. With two or three retainers in place, you can forecast your baseline revenue, plan your capacity, and comfortably turn down badly-priced one-off work. Clients like the arrangement too: they get priority access to someone who already knows their brand, and a fixed line item they can budget for instead of a surprise quote every time they need something.',
      'The discipline a retainer demands is a written scope and a monthly record. Without both, the arrangement drifts into retainer creep — the client slowly expecting more for the same fee. A clear cap on revisions or hours, plus a simple monthly summary of what was delivered, keeps the relationship healthy and makes the yearly conversation about raising the fee far easier to have.',
      'Pricing a retainer is not simply your hourly rate times the hours. You are selling reserved capacity and reliability, so many freelancers price a little below their ad-hoc rate to reward the commitment while still protecting their margin. Review every retainer at least once a year against the work it now actually involves — engagements that started small have a habit of quietly growing.',
    ],
    clienterNote:
      'Clienter supports retainer projects, so you can set up a recurring engagement, track deliverables and time against it each month, and raise the recurring invoice — keeping both the scope and the retainer creep under control.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'Run retainers as ongoing projects.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Bill retainers on a repeatable schedule.' },
      { href: '/for/freelancers', label: 'For Freelancers', desc: 'Predictable income, less admin.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Retainer creep', slug: 'retainer-creep' },
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'Milestone billing', slug: 'milestone-billing' },
    ],
  },
  {
    slug: 'scope-of-work',
    term: 'Scope of work',
    path: '/glossary/scope-of-work',
    category: 'Projects & Delivery',
    metaTitle: 'Scope of Work Meaning: What to Include & Why It Matters',
    metaDescription:
      'Scope of work meaning explained: what a strong SOW includes, how it protects freelancers from scope creep, and why every client project needs one up front.',
    keywords: ['scope of work meaning', 'what is a scope of work', 'SOW freelance'],
    definition:
      'A scope of work is the written definition of exactly what a project includes — the deliverables, tasks, timeline, and boundaries — so both you and the client agree on what will and will not be done before work begins.',
    body: [
      'The scope of work, often shortened to SOW, is the part of any client agreement that describes, in plain terms, what you are actually going to do. It lists the deliverables, the key tasks behind them, the timeline, and — just as importantly — what falls outside the engagement. For freelancers and agencies, a clear scope is the single best defence against the two things that quietly kill profit: unpaid extra work and disputes about what was promised.',
      'A good scope is specific enough to leave little room for interpretation. “Design a website” invites trouble; “Design a five-page website — home, about, services, blog, and contact — with two rounds of revisions per page, delivered in Figma” does not. The more concretely you name the deliverables, the number of revisions, the file formats, and the review points, the less likely you are to argue about them later.',
      'The scope also protects the client. It tells them exactly what their money buys and when, which builds the confidence that turns a first project into a long relationship. Clients rarely object to boundaries that are written down at the start; they object to surprises. A scope that says “extra pages are quoted separately at ₹X each” is not being difficult — it is being clear.',
      'Scope creep is what happens when the work quietly expands beyond the agreed scope without anyone adjusting the fee or timeline. It usually arrives politely: a “small extra request”, a “quick change”, a stakeholder added late. Each one seems trivial; together they erode your margin and your deadline. The written scope is what lets you name the drift and route the request into a change order or a fresh quote.',
      'Treat the scope as a living reference, not a document you file and forget. Attach it to the proposal, restate it in the contract, and point back to it whenever a request lands. In India, where much freelance work still begins over WhatsApp and a verbal “haan, kar denge”, the discipline of writing the scope down is often what separates a business that grows from one that keeps redoing work for free.',
    ],
    clienterNote:
      'In Clienter, the scope lives with the project: you break it into tasks and deliverables on a Kanban board with deadlines, so the agreed boundaries stay visible to your team — and anything a client requests beyond them is easy to spot and re-quote.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'Turn a scope into tasks and deadlines.' },
      { href: '/features/client-management', label: 'Client Management', desc: 'Keep scope and client in one place.' },
      { href: '/for/freelancers', label: 'For Freelancers', desc: 'Stop giving away unpaid work.' },
      { href: '/project-management-crm', label: 'Project Management CRM', desc: 'Projects and clients together.' },
    ],
    relatedTerms: [
      { term: 'Statement of work', slug: 'statement-of-work' },
      { term: 'Change order', slug: 'change-order' },
      { term: 'Proposal', slug: 'proposal' },
    ],
  },
  {
    slug: 'kanban-board',
    term: 'Kanban board',
    path: '/glossary/kanban-board',
    category: 'Projects & Delivery',
    metaTitle: 'What Is a Kanban Board? A Simple Guide for Agencies',
    metaDescription:
      'Kanban board meaning explained: how the visual To Do, In Progress, and Done columns help freelancers and agencies see every task and move client work faster.',
    keywords: ['kanban board meaning', 'what is a kanban board', 'kanban for agencies'],
    definition:
      'A Kanban board is a visual way to manage work as cards that move across columns representing stages — such as To Do, In Progress, and Done — so you can see the status of every task at a glance.',
    body: [
      'A Kanban board turns your workload into something you can see. Each task becomes a card, and each card sits in a column that represents a stage of your process — commonly To Do, In Progress, Review, and Done. As work advances, you drag the card from one column to the next. The word comes from the Japanese for “signboard”, and the idea comes from Toyota’s factory floor, but the appeal for a freelancer or agency is simpler: at one glance you know what is waiting, what is moving, and what is finished.',
      'The power of the board is that it makes bottlenecks obvious. If ten cards pile up in “Review” while “In Progress” sits empty, you can see immediately that approvals — not production — are what is holding up delivery. A flat list of tasks hides that; a board shows it. For small teams, this visibility replaces a good chunk of the status meetings and “where are we on this?” messages that eat the day.',
      'Kanban suits creative and client work particularly well because that work rarely moves in a straight line. A design goes to the client, comes back with feedback, returns to production, and goes out again. Columns can mirror your real stages — Briefed, Designing, Client Review, Revisions, Approved — so the board reflects how your studio actually operates rather than a textbook process.',
      'A board is only as useful as it is honest. The discipline is to keep cards moving and current: update a card the moment its status changes, keep the columns few enough to read quickly, and avoid letting “In Progress” become a graveyard of half-started tasks. Many teams add a work-in-progress limit — a cap on how many cards a column may hold — to force finishing over starting.',
      'For an Indian agency juggling several clients at once, one board per project keeps each engagement’s tasks separate while still giving you a consistent way to run everything. Team members see what is theirs, clients can be shown progress without a meeting, and nothing important lives only in someone’s head. The board becomes the shared source of truth for what is happening and what happens next.',
    ],
    clienterNote:
      'Every project in Clienter comes with a Kanban board: create tasks, set deadlines and budgets, assign them to team members with role-based access, and drag cards across your stages — so the whole team sees each client’s work moving in one place.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'Kanban boards for every project.' },
      { href: '/project-management-crm', label: 'Project Management CRM', desc: 'Boards, clients, and invoices together.' },
      { href: '/for/web-design-agencies', label: 'For Agencies', desc: 'Run every client project visually.' },
      { href: '/features', label: 'All Features', desc: 'See everything Clienter does.' },
    ],
    relatedTerms: [
      { term: 'Deliverable', slug: 'deliverable' },
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'Milestone billing', slug: 'milestone-billing' },
    ],
  },
  {
    slug: 'deliverable',
    term: 'Deliverable',
    path: '/glossary/deliverable',
    category: 'Projects & Delivery',
    metaTitle: 'What Is a Deliverable? Meaning for Client Projects',
    metaDescription:
      'Deliverable meaning for client projects: what counts as a deliverable, how it differs from tasks, and why defining it clearly helps freelancers get paid faster.',
    keywords: ['deliverable meaning', 'what is a deliverable', 'project deliverables'],
    definition:
      'A deliverable is a specific, tangible piece of work you hand over to a client as part of a project — such as a logo, a website, or a report — that marks a defined, agreed outcome.',
    body: [
      'A deliverable is any concrete output a client receives from your work: a logo pack, a finished website, a month of social media posts, a strategy document, an edited video. It is the “thing” the client is paying for, as distinct from the effort or hours behind it. Defining deliverables clearly matters because clients buy outcomes, not activity — and payment, sign-off, and satisfaction all attach to whether the agreed thing was actually handed over.',
      'Good deliverables are specific and verifiable. “Social media help” is not a deliverable; “twelve Instagram posts and four reels per month, delivered as scheduled drafts by the 25th” is. The clearer the definition — quantity, format, and the moment it counts as delivered — the easier it is to know when you are done, to invoice against it, and to avoid the endless “just one more tweak” that erodes a project’s profit.',
      'Deliverables are the natural unit for structuring and billing a project. You can tie payments to them through milestone billing, so a client pays as each major deliverable is approved rather than everything at the end. You can list them in the scope of work so both sides agree what is included. And you can track them on a board so your team always knows which outputs are still outstanding.',
      'It helps to separate a deliverable from the many tasks that produce it. A single deliverable — say, a homepage design — might involve research, wireframing, a first draft, and two revision rounds. The client cares about the finished homepage; your team needs the tasks. Keeping the deliverable as the headline and the tasks beneath it gives both audiences the view they need without confusing one for the other.',
      'For freelancers and agencies in India, being explicit about deliverables is also how you protect payment. When a client can see a clear list of what was promised and tick off what has been handed over, disputes shrink and invoices get approved faster. Vague promises invite vague payment; defined deliverables, recorded as they are completed, give you something concrete to point to when it is time to get paid.',
    ],
    clienterNote:
      'In Clienter, you break a project into tasks and deliverables on its board, set deadlines, and track each one to completion — then bill against the deliverables through invoicing, so what you promised, what you delivered, and what you charged all line up.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'Track every deliverable to done.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Bill against deliverables.' },
      { href: '/features/client-portal', label: 'Client Portal', desc: 'Show clients what is delivered.' },
      { href: '/for/freelancers', label: 'For Freelancers', desc: 'Get paid for defined outcomes.' },
    ],
    relatedTerms: [
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'Milestone billing', slug: 'milestone-billing' },
      { term: 'Change order', slug: 'change-order' },
    ],
  },
  {
    slug: 'change-order',
    term: 'Change order',
    path: '/glossary/change-order',
    category: 'Projects & Delivery',
    metaTitle: 'Change Order Meaning: How to Bill Extra Client Work',
    metaDescription:
      'Change order meaning explained: how freelancers and agencies use a written change order to price and bill work that falls outside the agreed project scope.',
    keywords: ['change order meaning', 'what is a change order', 'scope change'],
    definition:
      'A change order is a written, agreed record of a change to a project’s scope, timeline, or cost — used to formally add work that falls outside the original agreement so it gets approved and paid for.',
    body: [
      'A change order is how professional service businesses handle the request that begins with “while you’re at it, can you also…”. It is a short written record stating what extra work the client wants, how it changes the timeline, and what it will cost — agreed before the work is done. Borrowed from construction and engineering, the change order is the mechanism that turns scope creep from a source of unpaid work into a source of additional, approved revenue.',
      'The need for change orders comes directly from having a scope of work. The scope defines what is included; anything outside it is, by definition, a change. Without a way to capture those changes, extra requests either get done for free — quietly destroying your margin — or spark an awkward argument. A change order gives you a calm, professional third option: “Happy to do that. Here is what it adds to the timeline and cost.”',
      'A useful change order does not need to be a legal epic. It states the requested change, the reason if relevant, the impact on schedule, the additional fee, and a place for the client to approve. Sent and accepted before you start the extra work, it keeps everyone honest. The discipline is to raise it every time — the small changes waved through as favours are precisely the ones that add up to a month of unbilled work by the year’s end.',
      'Change orders also protect the relationship, not just the invoice. Clients rarely mind paying for genuinely new work; what damages trust is a surprise. By pricing the change up front, you let the client decide whether it is worth it, and you avoid the resentment that builds when you silently absorb request after request. Clear boundaries, consistently applied, make you look more professional, not less accommodating.',
      'For Indian freelancers and agencies, where a lot of extra work is requested informally over chat, the habit of converting a casual “can you just…” into a quick written change order is a genuine business skill. It need not feel bureaucratic. A one-line message — “Sure, that is an extra ₹5,000 and pushes delivery by two days, shall I go ahead?” — is a change order, and it is often all that stands between a profitable project and one you finish at a loss.',
    ],
    clienterNote:
      'Because each Clienter project holds its agreed scope as tasks and deliverables, spotting an out-of-scope request is easy — you can add the extra work as new tasks and bill it through a fresh invoice, so changes are tracked and paid rather than absorbed.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'Add out-of-scope work as new tasks.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Bill approved changes.' },
      { href: '/for/web-design-agencies', label: 'For Agencies', desc: 'Stop absorbing scope creep.' },
      { href: '/client-management-software', label: 'Client Management', desc: 'Keep every change on record.' },
    ],
    relatedTerms: [
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'Retainer creep', slug: 'retainer-creep' },
      { term: 'Statement of work', slug: 'statement-of-work' },
    ],
  },
  {
    slug: 'utilization-rate',
    term: 'Utilization rate',
    path: '/glossary/utilization-rate',
    category: 'Projects & Delivery',
    metaTitle: 'What Is Utilization Rate? Formula & Meaning Explained',
    metaDescription:
      'Utilization rate meaning and formula: how freelancers and agencies measure the share of hours spent on billable work, and what a healthy rate looks like.',
    keywords: ['utilization rate meaning', 'utilization rate formula', 'billable utilization'],
    definition:
      'Utilization rate is the percentage of your available working hours that are spent on billable, client-paying work, and it is a core measure of how efficiently a freelancer or agency turns time into revenue.',
    body: [
      'Utilization rate answers a question every service business should ask but few actually measure: of all the hours I could work, how many did I actually bill? If you have 160 working hours in a month and 96 of them went to paid client work, your utilization rate is 60%. The rest — admin, pitching, invoicing, learning, meetings — is real and often necessary, but it does not directly earn. Utilization is the lens that makes that split visible.',
      'The number matters because time is the raw material a service business sells. Low utilization means a large share of your capacity is being consumed by work nobody pays for, which quietly caps your income no matter how high your rate. A very high utilization rate is not automatically good either — 95% usually means no room to sell, improve, or rest, which is how burnout and stalled growth begin. Many healthy service businesses sit somewhere in the 60–80% range.',
      'Calculating it is straightforward: divide billable hours by total available hours and multiply by 100. The insight comes from tracking it over time and per person. If utilization is chronically low, the problem might be too much admin, too many unpaid revisions, or weak pricing that forces long hours for little return. If it is dangerously high, you may be under-priced and over-committed, winning work by selling too many hours too cheaply.',
      'Utilization pairs naturally with your billing model. On time-and-materials work, billable hours convert directly to revenue, so utilization and income move together. On fixed-bid or retainer work, utilization instead reveals your effective hourly rate — if a fixed project ate far more hours than you assumed, your realised rate quietly collapsed even though the invoice looked healthy. Watching utilization stops that from staying invisible.',
      'For a growing Indian agency, tracking utilization per team member is one of the earliest signs of whether the business model works. It shows who is overloaded and who has capacity, whether a new hire is paying for themselves, and when it is time to raise rates rather than pile on hours. You do not need a stopwatch on every task; even a rough monthly view of billable versus total time turns a vague feeling of being busy into a number you can manage.',
    ],
    clienterNote:
      'Clienter organises client work into projects with tasks, budgets, and deadlines, so you can see where your team’s effort is going and which engagements consume the most time — the raw picture you need to judge how well billable work fills your available hours.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'See where your effort goes.' },
      { href: '/for/web-design-agencies', label: 'For Agencies', desc: 'Track capacity across the team.' },
      { href: '/business-management-software', label: 'Business Management', desc: 'Run the numbers behind the work.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Billable hours', slug: 'billable-hours' },
      { term: 'Time and materials', slug: 'time-and-materials' },
      { term: 'Profit margin', slug: 'profit-margin' },
    ],
  },
  {
    slug: 'billable-hours',
    term: 'Billable hours',
    path: '/glossary/billable-hours',
    category: 'Projects & Delivery',
    metaTitle: 'Billable Hours Meaning: What Counts & Why It Matters',
    metaDescription:
      'Billable hours meaning explained: what counts as billable versus non-billable time, why it drives your real hourly rate, and how it shapes freelance pricing.',
    keywords: ['billable hours meaning', 'what are billable hours', 'billable vs non-billable'],
    definition:
      'Billable hours are the hours you spend on work that a client actually pays for, as opposed to unpaid time spent on admin, pitching, or running your own business.',
    body: [
      'Billable hours are the hours that earn. When you spend an hour designing a client’s landing page under a time-based agreement, that hour is billable — it converts directly into an invoice line. The hour you then spend raising that invoice, replying to enquiries, or updating your portfolio is non-billable: necessary work, but work no client pays for. Understanding which of your hours are which is the foundation of pricing, capacity planning, and knowing whether your business actually makes money.',
      'The concept is easiest to see in time-and-materials work, where you bill an agreed rate for each hour worked, so billable hours and revenue are effectively the same thing. But billable hours matter just as much on fixed-bid and retainer work, even though you do not charge by the hour there. Tracking how many hours a fixed project really took tells you your effective hourly rate — and often reveals that a project which looked profitable on paper barely broke even once you counted the time.',
      'Non-billable time is not the enemy; ignoring it is. Every service business spends hours on sales, admin, invoicing, and learning, and those hours are what keep the business running. The risk is letting them expand unchecked until there is little billable capacity left. The point of separating billable from non-billable is not to eliminate the latter but to keep enough of your week pointed at work that pays — and to price that work so the non-billable time is covered.',
      'Billable hours feed directly into your utilization rate — the share of your available time that is billable — and into whether your headline rate is enough. If only half your working hours can realistically be billed, your rate has to cover the other half too. Freelancers who price as though every hour is billable tend to under-earn, because they have quietly assumed away all the unpaid work that running a real business involves.',
      'You do not need to track time to six decimal places to benefit from thinking in billable hours. Even a rough sense of how many hours a client’s work consumed, checked against what you charged, tells you whether the engagement was worth it. For Indian freelancers moving from a per-project mindset to running a real business, learning to see time as billable or not is often the shift that turns constant busyness into deliberate, profitable work.',
    ],
    clienterNote:
      'Clienter structures client work as projects with tasks, deadlines, and budgets, so the effort behind each engagement is visible in one place — giving you the grounding to judge how the hours you spend on a client compare with what that project is actually worth.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'See the work behind each client.' },
      { href: '/for/freelancers', label: 'For Freelancers', desc: 'Price your time properly.' },
      { href: '/business-management-software', label: 'Business Management', desc: 'Know if the work pays.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Turn work into invoices.' },
    ],
    relatedTerms: [
      { term: 'Utilization rate', slug: 'utilization-rate' },
      { term: 'Time and materials', slug: 'time-and-materials' },
      { term: 'Fixed bid', slug: 'fixed-bid' },
    ],
  },
  {
    slug: 'retainer-creep',
    term: 'Retainer creep',
    path: '/glossary/retainer-creep',
    category: 'Projects & Delivery',
    metaTitle: 'What Is Retainer Creep? Meaning and How to Stop It',
    metaDescription:
      'Retainer creep meaning explained: how a retainer quietly expands beyond its fee, why it erodes your profit, and how freelancers can spot and stop it early.',
    keywords: ['retainer creep meaning', 'what is retainer creep', 'retainer scope creep'],
    definition:
      'Retainer creep is the gradual expansion of what a client expects from a retainer without a matching increase in the fee, slowly eroding the profitability of an arrangement that once made sense.',
    body: [
      'Retainer creep is what happens to a good retainer when nobody is guarding its edges. You agree a monthly fee for a defined scope — four articles, say, or twenty hours of support. Then, over months, the “quick extras” accumulate: an additional post here, a favour there, a scope that quietly widens with each request. The fee stays the same while the work grows, and an engagement that was profitable at the start slowly turns into one you resent.',
      'It is the retainer-specific cousin of scope creep, and it is dangerous precisely because it is gradual. No single request feels worth pushing back on — refusing a small favour to a long-standing client feels petty. But the increments compound. Six months of unremarked extras can add up to a whole extra deliverable’s worth of unpaid work every month, and because it crept in slowly, you may not even notice how far the arrangement has drifted from what you are paid for.',
      'The root causes are usually a vague original scope and no monthly record of what was delivered. If the retainer never specified how many revisions, how many hours, or what counts as extra, there is nothing to point back to when requests grow. And if nobody tracks what actually gets done each month, the drift stays invisible until you finally sit down, add it up, and realise how much you are giving away.',
      'The fix is structural, not confrontational. Write a clear scope with explicit limits — a set number of deliverables, hours, or revisions per month — and keep a simple monthly summary of what was delivered against it. When a request exceeds the scope, you have a calm, factual basis to route it into a change order or a fee review rather than silently absorbing it. The record does the arguing for you, so the relationship stays warm while the boundary holds.',
      'Handled well, catching retainer creep early is also a growth opportunity. A client who consistently needs more than the retainer covers is a client ready for a bigger retainer — the conversation is an upsell, not a complaint. For Indian freelancers and agencies who win a lot of ongoing work through relationships and informal requests, the ability to spot creep and reprice it, warmly and promptly, is often what separates a retainer that funds the business from one that quietly drains it.',
    ],
    clienterNote:
      'Running a retainer as a Clienter project keeps its agreed scope visible as tasks and deliverables, and lets you see what is actually delivered each month — so creeping extra work stands out early enough to re-scope, re-price, or raise as a fresh invoice.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'Track retainer scope each month.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Re-price and bill the extra work.' },
      { href: '/for/freelancers', label: 'For Freelancers', desc: 'Protect your retainer margin.' },
      { href: '/client-management-software', label: 'Client Management', desc: 'Keep the whole engagement on record.' },
    ],
    relatedTerms: [
      { term: 'Retainer', slug: 'retainer' },
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'Change order', slug: 'change-order' },
    ],
  },
  {
    slug: 'onboarding',
    term: 'Onboarding',
    path: '/glossary/onboarding',
    category: 'Projects & Delivery',
    metaTitle: 'What Is Client Onboarding? Meaning for Freelancers',
    metaDescription:
      'Client onboarding meaning for freelancers: how a structured onboarding process gathers details, sets expectations, and starts every new client the right way.',
    keywords: ['client onboarding meaning', 'what is onboarding', 'freelance client onboarding'],
    definition:
      'Client onboarding is the structured process of bringing a new client on board after they say yes — collecting the details, access, and expectations you need to start their work smoothly and professionally.',
    body: [
      'Onboarding is everything that happens between a client signing and the real work beginning. It is where you collect the brief, the brand assets, the logins, the contacts, and the answers you need to do the job — and where the client forms their first impression of what it is like to work with you. Done well, it feels organised and reassuring. Done badly, it starts the relationship with a week of chasing files and repeated “just one more thing” emails.',
      'A strong onboarding process is largely about gathering the right information once, up front, instead of piecing it together over the first month. What are the goals? Who approves work? What are the brand guidelines, the access credentials, the deadlines that cannot move? An intake form that captures all of this in one pass saves both sides from the drip-feed of questions that otherwise delays the start and makes you look disorganised before you have delivered anything.',
      'Onboarding also sets expectations, which is where many client relationships silently succeed or fail. This is the moment to confirm the scope, explain how you communicate, say how revisions and approvals work, and agree how and when you will be paid. Expectations set clearly at the start rarely need to be argued later; expectations left vague become the disputes that sour month three. A little structure here prevents a lot of friction downstream.',
      'For freelancers and agencies, onboarding is a genuine trust-builder and a differentiator. A prospective client has just handed money to someone they hope is professional; a smooth, guided first week confirms they chose well. A consistent onboarding routine — the same intake form, the same welcome, the same first steps for every client — also makes you faster and stops important details from slipping simply because you worked from memory this time.',
      'The same discipline pays off at the other end of the relationship in offboarding, but the start is where the tone is set. In India, where a great deal of freelance work still begins with an informal “let’s start Monday”, having even a lightweight onboarding step — one form, one welcome message, one clear list of what you need — is often what marks the difference between someone who takes on tasks and a business that takes on clients.',
    ],
    clienterNote:
      'Clienter’s client onboarding and intake forms let you collect a new client’s details and requirements in one structured step, and a white-label client portal gives them a professional home for the engagement from day one — so every client starts the same organised way.',
    related: [
      { href: '/features/client-management', label: 'Client Management', desc: 'Onboard every client the same way.' },
      { href: '/features/client-portal', label: 'Client Portal', desc: 'A white-label home from day one.' },
      { href: '/for/freelancers', label: 'For Freelancers', desc: 'Start client work professionally.' },
      { href: '/client-management-software', label: 'Client Management Software', desc: 'Intake forms and client profiles.' },
    ],
    relatedTerms: [
      { term: 'Intake form', slug: 'intake-form' },
      { term: 'Offboarding', slug: 'offboarding' },
      { term: 'Client portal', slug: 'client-portal' },
    ],
  },
  {
    slug: 'offboarding',
    term: 'Offboarding',
    path: '/glossary/offboarding',
    category: 'Projects & Delivery',
    metaTitle: 'Client Offboarding Meaning: How to End a Project Well',
    metaDescription:
      'Client offboarding meaning explained: how to close a project well by handing over deliverables, settling payment, and turning finished work into repeat clients.',
    keywords: ['client offboarding meaning', 'what is offboarding', 'project handover'],
    definition:
      'Client offboarding is the structured process of closing out a project or engagement well — handing over final deliverables, settling payment, gathering feedback, and leaving the door open for future work.',
    body: [
      'Offboarding is the often-neglected mirror image of onboarding: the deliberate way you end an engagement rather than letting it simply trail off. It covers handing over the final files and access, confirming the last invoice is paid, gathering feedback, and formally closing the project. Because it happens at the moment a client is most satisfied — the work is done and delivered — it is one of the most valuable and most overlooked opportunities in a service business.',
      'A clean handover is the practical core of offboarding. The client should leave with everything they are owed and nothing left ambiguous: final deliverables in the agreed formats, source files if promised, logins transferred, and a short note on how to use or maintain what you built. A tidy handover prevents the trickle of “can you just send me…” messages weeks later, and it signals a professionalism that clients remember when they next need help.',
      'Offboarding is also where you capture the value the relationship has built. A satisfied client at a project’s end is the ideal moment to ask for a testimonial, request a referral, or propose the next phase of work — the retainer, the maintenance plan, the follow-up project. Ask when the goodwill is highest and warm outcomes follow; wait until the momentum has faded and you are starting cold. The end of one project is often the cheapest source of the next.',
      'Money should not be an afterthought at this stage. Offboarding is the natural checkpoint to confirm the final invoice is raised and settled before attention drifts elsewhere, because chasing a final payment only gets harder the longer the gap grows after delivery. Closing the loop cleanly — deliver, confirm, invoice, collect — is what keeps a finished project from quietly becoming an unpaid one.',
      'For Indian freelancers and agencies, a simple, repeatable offboarding step turns one-off jobs into a pipeline of repeat and referred work. A short closing routine — deliver the finals, confirm payment, ask for feedback, mention what you could do next — costs a few minutes and compounds over years. The businesses that grow are rarely the ones that only win clients well; they are the ones that also finish well, so clients come back and send others.',
    ],
    clienterNote:
      'In Clienter you can close a project cleanly — mark deliverables complete, raise the final invoice, and hand the client their white-label portal as a lasting record — then keep the client profile on file, ready for the next project, referral, or retainer.',
    related: [
      { href: '/features/client-management', label: 'Client Management', desc: 'Close and keep every client on file.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Raise and settle the final invoice.' },
      { href: '/features/client-portal', label: 'Client Portal', desc: 'Leave clients a lasting record.' },
      { href: '/for/web-design-agencies', label: 'For Agencies', desc: 'Turn finished work into repeat work.' },
    ],
    relatedTerms: [
      { term: 'Onboarding', slug: 'onboarding' },
      { term: 'Testimonial', slug: 'testimonial' },
      { term: 'Referral', slug: 'referral' },
    ],
  },
]
