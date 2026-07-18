import type { GlossaryTermConfig } from './_type'

/**
 * "CRM & Sales" glossary terms. Each `/glossary/<slug>` page defines a concept
 * an Indian freelancer or agency meets, then links to the relevant Clienter
 * feature and to related terms. The one-sentence `definition` doubles as the
 * "What is X?" schema answer.
 */
export const CRM_TERMS: GlossaryTermConfig[] = [
  {
    slug: 'crm',
    term: 'CRM',
    path: '/glossary/crm',
    category: 'CRM & Sales',
    metaTitle: 'What Is a CRM? Meaning for Freelancers and Agencies',
    metaDescription:
      'CRM meaning explained for Indian freelancers and agencies: what a customer relationship management system does, why you need one, and how to choose the right fit.',
    keywords: ['CRM meaning', 'what is a CRM', 'CRM for freelancers'],
    definition:
      'A CRM (customer relationship management) system is software that keeps every lead and client — their details, conversations, deals, and history — in one organised place so nothing about a relationship slips through the cracks.',
    body: [
      'CRM stands for customer relationship management. In plain terms, a CRM is the single place you track everyone you sell to and work with: who they are, how you first met, what you last discussed, where the deal currently stands, and everything you have delivered so far. Instead of that information being scattered across your head, your inbox, three notebooks, and a dozen WhatsApp threads, it lives in one system you can actually search. The moment a client asks ‘what did we agree on?’, you have the answer in seconds rather than an afternoon of scrolling.',
      'For a large company, a CRM is where a whole sales team manages hundreds of live deals. For an Indian freelancer or a small agency, it is smaller but no less useful: a visual pipeline that moves each lead from ‘first enquiry’ to ‘quoted’ to ‘won’, and a clean profile for every client once they sign. The point is simple — no enquiry quietly goes cold because you forgot to reply, and no client detail gets lost in the gap between one project ending and the next beginning.',
      'A good CRM answers the questions you would otherwise have to reconstruct from memory. Which leads am I still waiting to hear back from? What did I quote this client the last time? Have I actually followed up this week, or did I only mean to? When your time is stretched and cash flow is tight, those answers are the difference between a warm lead that turns into a paying client and one that drifts to whichever competitor happened to reply faster and looked more organised.',
      'The trap for solo operators is that most famous CRMs are built for large sales teams — they are heavy, expensive, and stuffed with dashboards and automations you will never touch. A freelancer needs the opposite: a CRM simple enough to open every single day, and connected to the rest of the work, so the projects, the GST invoices, and the payments that follow a ‘yes’ all hang off the same client record. A CRM that tracks leads but ignores delivery just becomes one more app you forget to update.',
      'You do not need enterprise software to work this way. A lightweight CRM sized for one person or a small team gives you the same discipline the big firms rely on — every relationship logged, every follow-up visible, every client’s history in one place — without the cost, the training, or the clutter.',
    ],
    clienterNote:
      'Clienter is a CRM built for Indian freelancers and agencies. It gives you a simple Kanban lead pipeline and one profile per client, then connects that to projects, GST invoices, and payments so the relationship and the work live in one place.',
    related: [
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'A simple CRM sized for solo work.' },
      { href: '/features/crm-lead-pipeline', label: 'Lead Pipeline', desc: 'Track every lead on a visual board.' },
      { href: '/client-management-software', label: 'Client Management', desc: 'Every client in one profile.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Lead pipeline', slug: 'lead-pipeline' },
      { term: 'Sales funnel', slug: 'sales-funnel' },
      { term: 'Client portal', slug: 'client-portal' },
    ],
  },
  {
    slug: 'client-portal',
    term: 'Client portal',
    path: '/glossary/client-portal',
    category: 'CRM & Sales',
    metaTitle: 'What Is a Client Portal? Guide for Freelancers & Agencies',
    metaDescription:
      'Client portal meaning explained: a private, branded space where clients view projects, approve work, download invoices, and pay you without endless email threads.',
    keywords: ['client portal meaning', 'what is a client portal', 'client portal for freelancers'],
    definition:
      'A client portal is a private, secure online space — usually branded with your name — where a client logs in to see their projects, approve deliverables, download invoices, and make payments in one place.',
    body: [
      'A client portal replaces the scattered mess of email attachments, WhatsApp forwards, and ‘can you resend that invoice?’ messages with a single web address your client logs into. Once inside, they find everything about their work with you in one place: the current project status, the files waiting for their approval, every past invoice, and exactly what they still owe. It is the difference between looking organised in a pitch and actually being organised once the work begins — and clients notice which one you are within the first week.',
      'For freelancers and agencies, a portal quietly does two jobs at once. First, it saves you time, because clients answer their own questions — ‘where’s the draft?’, ‘did you get my payment?’ — instead of pinging you at 10pm. Second, it makes you look established. A proper portal signals that you run a real business rather than a casual side hustle, and that impression matters enormously when you are quoting against bigger studios for the same project and the client is deciding who feels safe to hire.',
      'The best portals are white-labelled, which means they carry your logo, your name, and your colours rather than the software vendor’s branding. Your client experiences your brand at every step, not the tool you happen to use behind the scenes. It sounds like a small cosmetic detail, but it keeps the whole relationship feeling like it is with you personally, and it lets you charge premium rates with a straight face because everything the client touches looks considered and professional.',
      'Payments are where a portal really earns its keep in India. When a client can open an approved deliverable and pay the linked GST invoice by UPI on the very same screen, the gap between ‘work done’ and ‘money in the account’ shrinks from weeks of polite reminders to a matter of hours. That means fewer awkward follow-ups, healthier cash flow, and a clean shared record that both you and the client can trust when questions come up later.',
      'A portal is not only a convenience — it sets the tone of the entire engagement. Clients who are onboarded through a clean, professional, single-login space tend to treat the relationship more seriously from day one, and that seriousness usually shows up in how promptly they approve work and settle their invoices.',
    ],
    clienterNote:
      'Clienter includes a white-label client portal on the Pro and Ultra plans, so clients log in under your brand to track projects, approve work, and pay GST invoices — without a single extra email thread.',
    related: [
      { href: '/features/client-portal', label: 'Client Portal', desc: 'A branded space for every client.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Share and collect GST invoices.' },
      { href: '/client-management-software', label: 'Client Management', desc: 'Every client in one profile.' },
      { href: '/pricing', label: 'Pricing', desc: 'Client portal on Pro and Ultra.' },
    ],
    relatedTerms: [
      { term: 'White-label', slug: 'white-label' },
      { term: 'Onboarding', slug: 'onboarding' },
      { term: 'CRM', slug: 'crm' },
    ],
  },
  {
    slug: 'lead-pipeline',
    term: 'Lead pipeline',
    path: '/glossary/lead-pipeline',
    category: 'CRM & Sales',
    metaTitle: 'What Is a Lead Pipeline? Meaning and How to Build One',
    metaDescription:
      'Lead pipeline meaning explained: the visual stages a potential client moves through from first enquiry to signed deal, and how freelancers use one to win more work.',
    keywords: ['lead pipeline meaning', 'what is a lead pipeline', 'sales pipeline for freelancers'],
    definition:
      'A lead pipeline is the set of visual stages a potential client passes through — from first enquiry to won or lost — that lets you see exactly where every deal stands and what to do next.',
    body: [
      'A lead pipeline is simply your sales process made visible. Each potential client becomes a card, and the columns are the stages that card moves through: a new enquiry, a discovery call booked, a quote sent, and finally won or lost. The act of dragging a card from one column to the next turns a vague, anxious ‘I have some leads floating around’ into a clear, honest picture of exactly what is happening and how many real opportunities you are actually holding this month.',
      'Most freelancers run their pipeline in their head or, at best, a messy spreadsheet that they update once and then abandon. The problem is that leads have a shelf life. An enquiry you do not reply to within a day often goes cold, and a quote you forget to chase is a quote you have effectively withdrawn. A visible pipeline makes those neglected cards impossible to ignore — a lead stuck in ‘quoted’ for two weeks is a silent reminder sitting right in front of you.',
      'The usual format is a Kanban board — columns you drag cards across — because it answers the two questions that matter most at a single glance: how much potential work is currently in play, and which specific deals need a nudge from you today. You stop guessing about how your month will turn out and start seeing it take shape. For a small agency, the board also makes it obvious who owns which deal, so nothing falls between two people each assuming the other has it.',
      'Keep the stages few and honest. Three to five columns is plenty for almost any freelancer — say New, Contacted, Quoted, and Won — and adding stages you never actually update just recreates the abandoned-spreadsheet problem in a new form. The goal is a board clean enough that you genuinely glance at it every morning with your coffee, not an elaborate reporting exercise you build once, feel proud of, and then quietly dread opening.',
      'A pipeline is not about being pushy or ‘salesy’. It is about respecting the leads you already worked hard to attract through your portfolio, your posts, and your referrals — so that all that effort of getting noticed does not quietly leak away at the follow-up stage, where most freelance revenue is actually lost.',
    ],
    clienterNote:
      'Clienter gives you a simple Kanban lead pipeline where each enquiry is a card you drag from stage to stage. When a lead is won, it becomes a client profile with projects and invoices attached — with nothing to re-enter.',
    related: [
      { href: '/features/crm-lead-pipeline', label: 'Lead Pipeline', desc: 'A visual Kanban board for deals.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'A simple CRM sized for solo work.' },
      { href: '/features/client-management', label: 'Client Management', desc: 'Turn a won lead into a client.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'CRM', slug: 'crm' },
      { term: 'Sales funnel', slug: 'sales-funnel' },
      { term: 'Kanban board', slug: 'kanban-board' },
    ],
  },
  {
    slug: 'sales-funnel',
    term: 'Sales funnel',
    path: '/glossary/sales-funnel',
    category: 'CRM & Sales',
    metaTitle: 'What Is a Sales Funnel? Meaning for Service Businesses',
    metaDescription:
      'Sales funnel meaning explained: the journey a stranger takes from first hearing about you to becoming a paying client, and how freelancers widen and speed it up.',
    keywords: ['sales funnel meaning', 'what is a sales funnel', 'sales funnel for freelancers'],
    definition:
      'A sales funnel is the journey a potential client takes from first becoming aware of you to finally paying you, described in stages that narrow as unqualified prospects drop away and serious buyers move closer to a deal.',
    body: [
      'A sales funnel describes the whole journey a stranger takes to become a paying client, drawn as a funnel because the numbers shrink at every step. Many people become aware of you; fewer show genuine interest; fewer still ask for a quote; and only some finally sign. The narrowing shape is the entire point — you always begin with far more prospects than you end with, so the width at the top of the funnel matters just as much as how well you convert at the bottom.',
      'The classic stages are awareness, interest, consideration, and decision. Someone stumbles on your Instagram or hears your name in a referral (awareness), they scroll through your portfolio and start imagining working with you (interest), they compare you against two other freelancers and ask about price and timelines (consideration), and finally they say yes (decision). Understanding these stages tells you where prospects are leaking out of the funnel, which is almost always more useful than simply chasing more traffic to the top.',
      'People routinely confuse a funnel with a pipeline, and the difference is genuinely worth knowing. A funnel is the marketing view — the broad journey from first awareness to purchase across everyone who ever hears about you. A pipeline is your internal working view of the specific, named deals you are actively pursuing right now. The funnel feeds the pipeline: it is the process by which anonymous strangers gradually become the real, named leads that you then track and chase to a close.',
      'For a freelancer, the practical lesson is to fix the leakiest stage first rather than pouring effort everywhere at once. If plenty of people enquire but very few ever receive a quote, your real problem is response time or qualification, not marketing. If almost nobody enquires in the first place, no CRM on earth will save you — you need to widen the top of the funnel with content, referrals, and visible reviews. Diagnose honestly before you spend.',
      'You do not need expensive funnel software to think this way. Simply knowing the stages helps you notice where good prospects quietly slip through the cracks, and to plug that specific gap on purpose instead of blaming a slow month on bad luck or a difficult market.',
    ],
    clienterNote:
      'Clienter picks up where your funnel ends: once a prospect turns into a real enquiry, it lands on your Kanban lead pipeline, and verified reviews on your profile help widen the top of the funnel that feeds it.',
    related: [
      { href: '/features/crm-lead-pipeline', label: 'Lead Pipeline', desc: 'Track qualified deals on a board.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'A simple CRM sized for solo work.' },
      { href: '/features/verified-reviews', label: 'Verified Reviews', desc: 'Reviews that pull in new leads.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Lead pipeline', slug: 'lead-pipeline' },
      { term: 'CRM', slug: 'crm' },
      { term: 'Referral', slug: 'referral' },
    ],
  },
  {
    slug: 'mrr',
    term: 'MRR',
    path: '/glossary/mrr',
    category: 'CRM & Sales',
    metaTitle: 'What Is MRR? Monthly Recurring Revenue for Freelancers',
    metaDescription:
      'MRR meaning explained: monthly recurring revenue is the predictable income you earn each month from retainers and subscriptions, and why freelancers should track it.',
    keywords: ['MRR meaning', 'monthly recurring revenue', 'what is MRR'],
    definition:
      'MRR (monthly recurring revenue) is the total predictable income you can count on every month from ongoing arrangements like retainers and subscriptions, excluding one-off project fees.',
    body: [
      'MRR stands for monthly recurring revenue — the money that arrives every single month without you having to win a fresh project first. If you have three retainer clients paying ₹20,000, ₹15,000, and ₹30,000, your MRR is ₹65,000. That number is quietly powerful because it is predictable: you know it is coming before the month even begins, which is a completely different feeling from waking up on the first and wondering where this month’s income is going to come from.',
      'The reason MRR matters more than a single big invoice is stability. A one-off ₹2,00,000 project feels wonderful the day it lands, but the moment it ends you are back to zero and hunting all over again. ₹65,000 of MRR is smaller each month, yet it repeats — which means you can plan ahead, cover your rent and tools, and comfortably say no to bad-fit work without panic. Recurring income is precisely what turns freelancing from a monthly gamble into an actual business.',
      'MRR moves in a few distinct ways, and watching them tells you the real health of your practice. New MRR is revenue from a fresh retainer you just signed. Expansion MRR is an existing client upgrading their plan or adding scope. Churned MRR is what you lose when a client leaves. Your net position each month is new plus expansion minus churn — grow that number consistently, month after month, and the effect compounds into serious, dependable income over a year or two.',
      'A quick word on Indian tax and terminology: MRR is a revenue figure, tracked before GST is added and before any TDS a client deducts at their end. It is a business-planning number, not a strict accounting one, so keep it simple. The aim is to see your recurring base at a single glance so you can make decisions — not to reconcile it against your books down to the last rupee, which is a separate job for your invoices and your accountant.',
      'Even two or three steady retainers completely change how freelancing feels day to day. Tracking MRR makes that base visible, so you can set a concrete target — for instance, covering all your fixed monthly costs with recurring revenue alone — and then build toward it deliberately, one retainer at a time.',
    ],
    clienterNote:
      'Clienter supports retainer projects and recurring GST invoices, so the ongoing engagements that make up your MRR are set up once and billed on schedule instead of re-quoted every month.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Bill retainers on a schedule.' },
      { href: '/features/project-management', label: 'Project Management', desc: 'Run retainers as ongoing work.' },
      { href: '/business-management-software', label: 'Business Software', desc: 'Run the whole business in one place.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Retainer', slug: 'retainer' },
      { term: 'Churn rate', slug: 'churn-rate' },
      { term: 'Client lifetime value', slug: 'client-lifetime-value' },
    ],
  },
  {
    slug: 'churn-rate',
    term: 'Churn rate',
    path: '/glossary/churn-rate',
    category: 'CRM & Sales',
    metaTitle: 'What Is Churn Rate? Meaning, Causes, and How to Cut It',
    metaDescription:
      'Churn rate meaning explained: the percentage of recurring clients you lose in a period, why it quietly caps your growth, and how freelancers keep clients for longer.',
    keywords: ['churn rate meaning', 'what is churn rate', 'client churn'],
    definition:
      'Churn rate is the percentage of your recurring clients (or recurring revenue) that you lose over a given period, showing how quickly customers are leaving and how hard your growth has to work to make up for it.',
    body: [
      'Churn rate measures how many of your clients walk away over a period. If you start a quarter with ten retainer clients and two of them leave, your client churn for that quarter is 20%. You can measure churn by number of clients or by revenue, and revenue churn usually matters more — losing one ₹40,000 client hurts your business far more than losing one ₹5,000 client, even though a simple headcount treats both as merely ‘one client gone’ and hides the real damage.',
      'Churn is the silent tax on all your growth. Imagine you win two shiny new retainers every month but also quietly lose two — your revenue stands perfectly still while you run flat out and feel busy. Every client who leaves is one you have to replace before you grow by even a rupee. This is exactly why keeping your existing clients is almost always cheaper than winning brand-new ones: retention is growth you do not have to hunt, pitch, or discount for.',
      'For freelancers, churn usually has unglamorous, preventable causes. Work slipped past a deadline once too often; communication went quiet for a few weeks; an invoice dispute quietly soured the mood; or the client simply forgot how much value you had delivered because nobody ever reminded them. Very few clients leave over a single dramatic failure. Most drift away slowly, and a drifting client is one you can still win back with attention long before they actually go.',
      'The fix is not a clever retention trick — it is plain consistency. Deliver on time, keep your progress visible so the client always knows what is happening, and remind them of results without waiting to be asked. A short monthly note that shows what got done and what it achieved is one of the cheapest anti-churn tools in existence. Clients very rarely abandon someone who keeps calmly and visibly proving their worth month after month.',
      'Track your churn even roughly. Knowing that you lose, say, one in five clients over a year tells you exactly how many new clients you must win just to stand still — and that single number turns a vague background worry into something concrete you can actually plan around and act on.',
    ],
    clienterNote:
      'Clienter helps you fight churn by keeping delivery visible: clients see progress and past work in their portal, and verified reviews capture the goodwill of a happy client before they ever think about leaving.',
    related: [
      { href: '/features/client-portal', label: 'Client Portal', desc: 'Keep delivery visible to clients.' },
      { href: '/features/verified-reviews', label: 'Verified Reviews', desc: 'Capture goodwill from happy clients.' },
      { href: '/client-management-software', label: 'Client Management', desc: 'Every client in one profile.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'MRR', slug: 'mrr' },
      { term: 'Client lifetime value', slug: 'client-lifetime-value' },
      { term: 'Retainer', slug: 'retainer' },
    ],
  },
  {
    slug: 'client-lifetime-value',
    term: 'Client lifetime value',
    path: '/glossary/client-lifetime-value',
    category: 'CRM & Sales',
    metaTitle: 'What Is Client Lifetime Value? Meaning for Freelancers',
    metaDescription:
      'Client lifetime value meaning explained: the total profit one client brings across the whole relationship, and why it changes how freelancers price and keep clients.',
    keywords: ['client lifetime value', 'CLV meaning', 'customer lifetime value'],
    definition:
      'Client lifetime value (CLV) is the total profit you earn from a single client across the entire time they work with you, not just from their first project.',
    body: [
      'Client lifetime value is the whole-relationship view of what a client is truly worth to you. A client who pays ₹15,000 for a single logo is worth ₹15,000, full stop. But the very same client who then keeps you on a ₹15,000 monthly retainer for two years is worth over ₹3,60,000. Same person, wildly different value — and CLV is the number that captures that difference and stops you from treating a long-term relationship as if it were a one-off transaction.',
      'This matters because it quietly changes how much you can afford to spend on winning and keeping a client. If you know an average client stays around eighteen months and pays ₹20,000 a month, you can comfortably justify far more effort on a smooth onboarding, the occasional goodwill discount, or a thoughtful Diwali gift — because it is the whole relationship, not the first invoice, that actually pays you. Freelancers who only ever look at the first project chronically undervalue the clients they already have.',
      'A rough CLV is genuinely easy to estimate: take the average monthly revenue from a client, multiply it by the average number of months they tend to stay, and multiply again by your profit margin. You do not need a precise figure to benefit. Even a rough ballpark instantly tells you whether you are sitting on a set of relationships worth carefully nurturing, or a pile of one-off jobs that are better off automated, streamlined, and moved on from quickly.',
      'CLV and churn are really two sides of the same coin. Every additional month you keep a client, their lifetime value quietly grows; the moment they churn, that growth stops dead. This is why all your retention work — clear delivery, regular contact, painless payments — is ultimately CLV work in disguise. Small, unglamorous improvements in how long clients stay compound over time into very large differences in what your entire business is actually worth.',
      'Once you genuinely start thinking in lifetime value, upsells and referrals stop feeling pushy or awkward. Extending or deepening a relationship that is already working is simply you finally realising more of the value that was quietly sitting there all along, waiting for you to notice and serve it.',
    ],
    clienterNote:
      'By keeping each client’s full history — projects, invoices, and payments — in one profile, Clienter makes it easy to see which relationships are worth the most and to keep delivering the value that extends them.',
    related: [
      { href: '/client-management-software', label: 'Client Management', desc: 'Every client’s history in one profile.' },
      { href: '/features/project-management', label: 'Project Management', desc: 'Deliver work that keeps clients.' },
      { href: '/business-management-software', label: 'Business Software', desc: 'Run the whole business in one place.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Churn rate', slug: 'churn-rate' },
      { term: 'MRR', slug: 'mrr' },
      { term: 'Upsell', slug: 'upsell' },
    ],
  },
  {
    slug: 'upsell',
    term: 'Upsell',
    path: '/glossary/upsell',
    category: 'CRM & Sales',
    metaTitle: 'What Is an Upsell? Meaning and Examples for Freelancers',
    metaDescription:
      'Upsell meaning explained: offering an existing client a higher-value or extra service, why it is the easiest revenue to earn, and how freelancers do it without being pushy.',
    keywords: ['upsell meaning', 'what is upselling', 'upselling for freelancers'],
    definition:
      'An upsell is when you offer an existing client a higher-value version of what they are buying, or an added service on top, increasing what the relationship is worth to both sides.',
    body: [
      'An upsell is selling more to someone who already trusts you. A client hires you to design a logo, and you offer them the full brand kit instead. A client asks for a simple five-page website, and you suggest the version that includes SEO and an ongoing maintenance retainer. In each case you are not chasing a cold stranger — you are helping an existing, satisfied client reach a genuinely better result, and earning more for the relationship in the process.',
      'There is a close cousin worth knowing: the cross-sell. An upsell moves a client up to a bigger or better version of the thing they already wanted — the deluxe website over the basic one. A cross-sell adds a related but separate service alongside it — social media graphics to go with that new site. In everyday freelancing the line between the two blurs constantly, and both really come down to the same instinct: noticing what else would genuinely help this particular client.',
      'Upselling has a bad reputation it does not actually deserve, because people confuse it with pressure and pushiness. Done properly, it is the exact opposite of pressure: you understand the client’s real goal well enough to see clearly that they will get a poor outcome from the cheapest option on the table. Recommending the maintenance retainer that keeps their new site secure and updated is a genuine service, not a sales tactic — as long as the recommendation is honest and in their interest.',
      'Upsells are the cheapest revenue you will ever earn, because the hard part — earning trust — is already completely done. There is no cold pitch, no elaborate proposal, no bruising price war against three competitors, and no discovery process starting from a blank page. The client already knows your work and how you operate. This is precisely why lifting the value of the relationships you already have usually beats grinding endlessly for new leads, rupee for rupee of effort spent.',
      'The whole trick is timing and honesty. Suggest the upgrade at the moment the client is visibly happy and the extra genuinely serves their goal, and it lands as welcome advice from a trusted partner rather than as a pushy grab for a bigger invoice. Get that right, and clients will often thank you for the suggestion.',
    ],
    clienterNote:
      'Because Clienter keeps every client’s projects and history in one profile, it is easy to spot the right moment to propose more work — and to raise the follow-on project and GST invoice without starting from a blank page.',
    related: [
      { href: '/client-management-software', label: 'Client Management', desc: 'Spot upsell moments in one profile.' },
      { href: '/features/project-management', label: 'Project Management', desc: 'Add follow-on work in a click.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Bill the extra scope cleanly.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Client lifetime value', slug: 'client-lifetime-value' },
      { term: 'Referral', slug: 'referral' },
      { term: 'Retainer', slug: 'retainer' },
    ],
  },
  {
    slug: 'referral',
    term: 'Referral',
    path: '/glossary/referral',
    category: 'CRM & Sales',
    metaTitle: 'What Is a Referral? How Freelancers Win Word-of-Mouth',
    metaDescription:
      'Referral meaning explained: new business from a happy client recommending you, why it is the highest-converting lead a freelancer can get, and how to earn more of it.',
    keywords: ['referral meaning', 'what is a referral', 'referrals for freelancers'],
    definition:
      'A referral is new business that comes to you because an existing client, colleague, or contact recommended you to someone who needs your work.',
    body: [
      'A referral is the warmest lead there is. Instead of a cold stranger sceptically comparing you against three other freelancers, you meet someone who already half-trusts you because a person they respect personally vouched for you. The sale is halfway closed before you have even spoken a word. This is exactly why referrals convert so much better than cold leads, tend to negotiate far less aggressively on price, and so often become the kind of steady, long-term clients you actually want more of.',
      'Referrals can feel like pure luck, but they are mostly a predictable by-product of two things: doing consistently good work, and being genuinely easy to recommend. Clients refer you onward only when they feel confident you will make them look good in front of their friend or colleague — because in their mind, a bad referral costs them personally, too. Every smooth, well-handled project you deliver quietly builds up the store of trust that a future referral eventually spends on your behalf.',
      'The mistake most freelancers make is waiting around passively for referrals to appear instead of actively, politely inviting them. A simple, well-timed ask — made right after you deliver something the client is visibly thrilled with — works remarkably well: ‘I’m really glad this worked out. If you happen to know anyone who needs similar help, I’d genuinely love an introduction.’ Most happy clients are more than willing to help; the honest truth is they simply never think to do it unprompted.',
      'Public proof does the very same job, but at scale and around the clock. A verified review or a written testimonial is essentially a referral that keeps working long after the project itself has ended, quietly reassuring every future prospect who reads it before they even contact you. In India, where a huge amount of freelance business still runs on word of mouth and WhatsApp forwards, a visible, credible track record of happy clients is one of the single strongest marketing assets you can possibly build.',
      'Treat referrals as something you deliberately earn and then gently ask for, rather than something you passively wait and quietly hope for. A little intention and a couple of well-timed asks are usually all it takes to turn an unreliable trickle of word-of-mouth into a steady, dependable source of your very best clients.',
    ],
    clienterNote:
      'Clienter’s verified reviews turn happy clients into public proof that earns referrals, and one client profile keeps the whole relationship organised enough that people are glad to recommend you.',
    related: [
      { href: '/features/verified-reviews', label: 'Verified Reviews', desc: 'Turn happy clients into proof.' },
      { href: '/client-management-software', label: 'Client Management', desc: 'Deliver the work that earns referrals.' },
      { href: '/for/indian-freelancers', label: 'For Indian Freelancers', desc: 'Built for how India freelances.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Testimonial', slug: 'testimonial' },
      { term: 'Case study', slug: 'case-study' },
      { term: 'Upsell', slug: 'upsell' },
    ],
  },
]
