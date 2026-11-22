import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'website-handover-checklist',
  title: 'Website Handover: What to Give the Client After Launch',
  metaTitle: 'Website Handover Checklist for Developers',
  description:
    'A complete handover checklist for client websites — credentials, ownership, documentation, training, warranty terms and the maintenance conversation that should follow.',
  date: '2026-11-22',
  author: 'Talagana Rajesh',
  category: 'Web & software projects',
  categorySlug: 'web-development',
  tags: ['web development', 'process', 'client management', 'launch', 'retainers'],
  primaryKeyword: 'website handover checklist',
  featured: false,
  intro:
    'Handover is the five minutes of a project that decides what the next two years look like. Done properly, the client knows what they own, how to change a phone number without calling you, and what a maintenance plan is for. Done the usual way — a WhatsApp message with an admin password — it produces a client who thinks they own nothing, cannot edit their own site, and will eventually blame you for both. This is the handover worth running.',
  body: [
    { type: 'h2', text: 'Ownership first: whose accounts are these?', id: 'ownership-first' },
    { type: 'p', text: 'The most consequential handover decision is made months earlier, when accounts are created. Wherever it is practical, the client should own the accounts and you should be a user on them — not the other way round.' },
    { type: 'ul', items: [
      'Domain registrar: always in the client’s name and their account. A domain registered in a developer’s account is the most common and most bitter dispute in this industry.',
      'Hosting: the client’s account where possible. If you resell hosting, say so explicitly and state what happens to the site if they leave you.',
      'Analytics and Search Console: the client’s Google account, with you added. Their historical data should never be trapped in your property.',
      'Third-party services — email delivery, CDN, forms, payment gateway: the client’s accounts, billed to them.',
      'Code repository: yours if the work is licensed, theirs if the agreement transfers it. Either is fine; what matters is that the contract says which.',
    ] },
    { type: 'p', text: 'This costs you nothing and protects you from a conversation that always ends badly. A developer holding a client’s domain hostage — even accidentally, even over a genuinely unpaid invoice — is a reputational event, and the professional norm is now firmly that clients own their own infrastructure.' },

    { type: 'h2', text: 'The credentials pack', id: 'credentials-pack' },
    { type: 'p', text: 'Deliver credentials as a document, not a chat message, and never as plain text in an email thread that will be forwarded for years. A shared password manager vault is best; a one-time secret link is acceptable.' },
    { type: 'ul', items: [
      'CMS or admin login, with the client as the administrator account rather than sharing yours.',
      'Hosting control panel and, if relevant, SFTP or SSH details.',
      'Domain registrar and DNS access.',
      'Email account administration, if you set it up.',
      'Analytics, Search Console, and any advertising or tag manager accounts.',
      'Third-party service logins — forms, newsletter, booking, payment gateway.',
      'A list of what each account is for and what it costs annually. Most clients have no idea their domain renews or what hosting is.',
    ] },
    { type: 'callout', text: 'Include a renewals table: service, what it does, who it is billed to, and the renewal date. It takes ten minutes and prevents the single most common post-handover emergency — a domain or hosting plan lapsing because nobody knew it existed.' },

    { type: 'h2', text: 'The handover document', id: 'handover-document' },
    { type: 'p', text: 'Two to four pages, written for the client rather than for a developer. Nobody reads a thirty-page manual; everybody reads two pages when their phone number is wrong on the website.' },
    { type: 'ol', items: [
      'What was built — the pages, the key features, the integrations, in plain language.',
      'How to do the five things they will actually want to do: edit text on a page, swap an image, add a blog post or news item, update contact details, and check form submissions.',
      'Where things live — hosting, domain, analytics — with the renewals table.',
      'What is not included: what the site does not do, and what would need new work.',
      'How to get help: your support process, response times, and what is billable.',
      'Warranty terms — what you will fix free and for how long.',
    ] },
    { type: 'p', text: 'Short screen recordings beat written instructions for the five how-to items. A two-minute video of you editing a page is more useful than two pages of text and takes less time to produce.' },

    { type: 'h2', text: 'Training, briefly', id: 'training' },
    { type: 'p', text: 'One 30–45 minute call, recorded, covering only what the client will do themselves. Resist the temptation to demonstrate the whole CMS — showing a restaurant owner the full admin of a content management system guarantees that something gets broken within a month.' },
    { type: 'p', text: 'Where a CMS allows it, restrict what they can reach. A client who can only edit the content areas they need is a client who cannot accidentally deactivate a plugin, and that restraint is a genuine gift to both of you. Send the recording afterwards — it becomes the answer to most questions for the next year, including when the person you trained leaves.' },

    { type: 'h2', text: 'Warranty, and where it ends', id: 'warranty' },
    { type: 'p', text: 'State a defects period in writing — thirty days is typical — covering bugs in what you built: a broken form, a layout failure on a browser you agreed to support, something that does not work as specified. That is a warranty and it should be free.' },
    { type: 'p', text: 'Say equally clearly what is not covered: new features, changes of mind, content edits, problems caused by the client’s own changes, third-party plugin or platform updates, and anything after the period ends. Without that line, “it’s not working” becomes an unlimited free support contract, and the most common slow leak in web freelancing is a two-year-old project still quietly consuming your Tuesdays.' },

    { type: 'h2', text: 'The commercial half of handover', id: 'commercial-half' },
    { type: 'p', text: 'Do these on the same day as the technical handover, not later.' },
    { type: 'ul', items: [
      'Raise and settle the final invoice. Hold the formal handover pack until it clears, if that is what your contract says — and it should.',
      'Propose the maintenance plan. This is the moment: the site is new, the client is pleased, and they have just seen how much goes into it. Six months later the conversation is harder and the site has already drifted.',
      'Ask for the testimonial or review now, while the result is fresh and visible.',
      'Ask for referrals explicitly. “Do you know anyone else who needs this?” at the moment of maximum satisfaction is the cheapest marketing in the business.',
      'Put a follow-up in the diary for thirty days out. A short “how is it going?” catches small problems before they become complaints and often surfaces the next piece of work.',
    ] },
    { type: 'p', text: 'This is the part that separates a project that ended from a client who continues. Most developers do the technical handover well and skip all five of these, then wonder why a good project produced no recurring revenue and no referrals.' },

    { type: 'h2', text: 'Keep the record', id: 'keep-the-record' },
    { type: 'p', text: 'Everything handed over should stay on the client’s record: the credentials document, the handover pack, the training recording, the warranty terms, the final invoice, and the maintenance proposal — whether accepted or not. In two years, when they return for a redesign or come back after their in-house attempt, that record is what lets you pick the relationship up in five minutes rather than reconstructing it.' },
    { type: 'p', text: 'That is what a client record is for in Clienter: the project, its documents, its invoices and its history sit on one profile that outlives the project. Any system works as long as the handover does not end up as attachments in a mail thread, which is where it usually ends up.' },

    { type: 'h2', text: 'The checklist, short', id: 'the-checklist-short' },
    { type: 'p', text: 'Client owns the domain, hosting, analytics and third-party accounts. Credentials delivered securely as a document with a renewals table. A two-to-four page handover doc plus short screen recordings. One recorded training call covering only what they will do. A written thirty-day warranty with clear exclusions. Final invoice settled, maintenance plan proposed, testimonial and referrals asked for, and a thirty-day follow-up booked. Then store all of it on the client record.' },
  ],
  faqs: [
    { q: 'What should be included in a website handover?', a: 'Credentials for every account involved, a renewals table showing what costs money and when, a short handover document covering what was built and how to do the five everyday tasks, a recorded training session, written warranty terms with exclusions, and the commercial close — final invoice, maintenance proposal, testimonial request and a thirty-day follow-up.' },
    { q: 'Who should own the domain and hosting?', a: 'The client, with you added as a user. A domain registered in a developer’s own account is the most common and most damaging dispute in web services. If you resell hosting, say so explicitly and state in writing what happens to the site if the client moves elsewhere.' },
    { q: 'How long should a website warranty last?', a: 'Thirty days is the common standard, covering defects in what you built — a broken form, a failure on a browser you agreed to support, anything not working as specified. State just as clearly what is excluded: new features, content edits, changes of mind, issues caused by the client’s own changes, and third-party platform updates.' },
    { q: 'Should I train the client on the CMS?', a: 'Yes, but narrowly. One recorded 30–45 minute call covering only the tasks they will actually perform, and where the CMS allows it, restrict their access to those areas. Demonstrating the entire admin interface to a non-technical client reliably results in something being broken within the month.' },
    { q: 'When should I propose a maintenance plan?', a: 'In the original build proposal, and again on handover day. Handover is the moment the client is most pleased and most aware of what the site involves. Raising it months later is harder, because by then the site has begun to drift and the conversation carries an implied criticism of the work.' },
  ],
  related: [
    { href: '/blog/website-launch-checklist', label: 'Website launch checklist', desc: 'The technical go-live steps before handover.' },
    { href: '/blog/wordpress-maintenance-plan-pricing', label: 'Maintenance plan pricing', desc: 'What to propose on handover day.' },
    { href: '/features/client-management', label: 'Client Management', desc: 'Keeping the handover record on the client profile.' },
    { href: '/for/web-development-agencies', label: 'For Web Development Agencies', desc: 'Handover as a repeatable agency process.' },
  ],
}
