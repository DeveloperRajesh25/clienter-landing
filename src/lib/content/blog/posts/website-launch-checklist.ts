import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'website-launch-checklist',
  title: 'The Website Launch Checklist Every Developer Should Run',
  metaTitle: 'Website Launch Checklist for Developers',
  description:
    'A practical go-live checklist for client websites — redirects, indexing, forms, analytics, performance, security, backups and handover — plus the steps that cost real money when missed.',
  date: '2026-11-22',
  author: 'Talagana Rajesh',
  category: 'Web & software projects',
  categorySlug: 'web-development',
  tags: ['web development', 'launch', 'process', 'client management', 'quality'],
  primaryKeyword: 'website launch checklist',
  featured: false,
  intro:
    'Every developer has a website launch checklist. Most of them live in one person’s head, which is why the same three things get missed: a redirect map nobody finished, a staging site still indexed by Google, and a contact form that posts to an inbox nobody monitors. This is the checklist written down — grouped by what breaks if you skip it, with the money-losing items marked clearly. Steal it, adapt it to your stack, and make it repeatable so your next go-live is boring.',
  body: [
    { type: 'h2', text: 'Why launches go wrong', id: 'why-launches-go-wrong' },
    { type: 'p', text: 'Launches rarely fail on something hard. They fail on something small that nobody owned, at the end of a project when everyone is tired and the client is pushing for a date. The hard parts — the build, the design, the integrations — got weeks of attention. The last two hours got improvisation.' },
    { type: 'p', text: 'The fix is unglamorous: a list that exists outside your memory, run the same way every time, with each item owned by a person. Treat it as part of the project rather than an afterthought and the entire category of launch-day disaster mostly disappears.' },
    { type: 'callout', text: 'Three items on this list cost real money when missed: redirects from an old site (organic traffic), search engine indexing left blocked (all organic traffic), and payment or form configuration on a transactional site (orders and leads). If you only ever check three things, check those.' },

    { type: 'h2', text: 'Before launch day: content and approvals', id: 'before-launch-content' },
    { type: 'p', text: 'This block should be closed a week out, not on the morning of. If any of it is open, the launch date is a wish rather than a plan.' },
    { type: 'ul', items: [
      'All final copy is in place — no lorem ipsum, no “TBC”, no placeholder team bios.',
      'Images are final, compressed, correctly sized, and carry alt text.',
      'Legal pages exist: privacy policy, terms, refund or returns policy if you take payments, cookie notice if you set non-essential cookies.',
      'Contact details, business address and company registration details are correct everywhere they appear.',
      'The client has signed off the final design and content in writing, with a date you can point to.',
      'Favicon, social sharing image and page titles are set — not left at the theme default.',
    ] },
    { type: 'p', text: 'That last sign-off matters more than it looks. A written approval with a date is what separates “they changed their mind, here’s a quote” from an unpaid week of rework. Keep it with the project, not in your inbox.' },

    { type: 'h2', text: 'Technical: the things that break silently', id: 'technical-checks' },
    { type: 'h3', text: 'Search engine access' },
    { type: 'ul', items: [
      'Remove the staging block — noindex meta tags, robots.txt disallow rules, and any platform-level “discourage search engines” setting.',
      'robots.txt is correct for production and does not block CSS or JS.',
      'An XML sitemap exists, is accurate, and is referenced in robots.txt.',
      'Canonical tags point at the production domain, not staging.',
      'Submit the site and sitemap to Google Search Console and Bing Webmaster Tools.',
    ] },
    { type: 'h3', text: 'Redirects, if this replaces an existing site' },
    { type: 'ul', items: [
      'Export every URL from the old site — crawl it, don’t rely on the sitemap.',
      'Map each old URL to its closest new equivalent; map the rest to the nearest category, not the homepage.',
      'Implement as 301s, not 302s or JavaScript redirects.',
      'Test a sample by hand, including URLs with query strings and trailing slashes.',
      'Check for redirect chains and loops.',
    ] },
    { type: 'p', text: 'A botched redirect map is the single most expensive launch mistake in web development, because the damage is invisible for weeks and then permanent. The client doesn’t see a broken page; they see traffic fall 40% and wonder what you did.' },
    { type: 'h3', text: 'Domain, DNS and certificates' },
    { type: 'ul', items: [
      'DNS points at the production host, with TTL lowered beforehand if you need a fast cutover.',
      'SSL certificate is valid, covers both www and apex, and auto-renews.',
      'One canonical host is enforced — www or non-www, redirected consistently, not both answering.',
      'Email records (SPF, DKIM, DMARC) still work after the DNS change. Changing nameservers and losing the client’s email is a career-defining mistake.',
    ] },
    { type: 'h3', text: 'Forms and transactions' },
    { type: 'ul', items: [
      'Every form submits successfully and delivers to a monitored inbox — test each one from an outside address.',
      'Confirmation messages and autoresponders fire and read correctly.',
      'Spam protection is enabled and does not block real submissions.',
      'On ecommerce: payment gateway is live (not test mode), tax rules are configured, shipping zones are set, and you have placed a real test order and refunded it.',
    ] },

    { type: 'h2', text: 'Performance, accessibility and security', id: 'performance-accessibility-security' },
    { type: 'ul', items: [
      'Core Web Vitals checked on mobile, not just desktop — LCP under 2.5s, CLS under 0.1.',
      'Images lazy-loaded below the fold; above-the-fold hero image preloaded.',
      'Caching and compression enabled at the server or CDN.',
      'Tested on a real phone, not just a resized browser window.',
      'Headings run in a sensible order; images have alt text; colour contrast passes; the site is navigable by keyboard.',
      'Admin accounts use strong unique passwords; default usernames removed; two-factor enabled where available.',
      'Security headers set, and any unused plugins, themes or packages removed before go-live rather than after.',
      'Automatic backups configured and one restore tested. An untested backup is a rumour.',
    ] },

    { type: 'h2', text: 'Analytics and measurement', id: 'analytics' },
    { type: 'ul', items: [
      'Analytics installed and firing on every page, with internal traffic excluded.',
      'Conversion events configured — form submissions, calls, purchases — and verified with a real submission.',
      'Any advertising pixels installed and tested if the client runs campaigns.',
      'Search Console linked to analytics, and the client given access to both in their own account.',
    ] },
    { type: 'p', text: 'Put analytics in the client’s account, not yours, with you added as a user. It costs nothing, it’s the professional default, and it avoids an awkward conversation years later when the relationship ends and their historical data is sitting in your property.' },

    { type: 'h2', text: 'The commercial checklist nobody writes down', id: 'commercial-checklist' },
    { type: 'p', text: 'Here is the half that no technical launch checklist includes, and the half that determines whether the project was worth doing.' },
    { type: 'ul', items: [
      'Raise the balance invoice on the day the site goes live — not at the end of the month. Launch day is the moment of maximum goodwill and minimum friction.',
      'Invoice any approved out-of-scope work alongside it, itemised against what was agreed.',
      'Confirm in writing what is now complete and what has moved out of scope into a future phase.',
      'Hand over credentials properly: hosting, domain registrar, CMS admin, analytics, any third-party accounts — in the client’s own accounts wherever possible.',
      'Provide a short handover document: how to edit content, who hosts what, what renews and when.',
      'Propose the maintenance plan before you leave. Post-launch is the only moment the client fully appreciates what keeping a site healthy involves.',
      'Ask for the review or testimonial now, while the site is new and the client is pleased.',
    ] },
    { type: 'p', text: 'That maintenance conversation is worth more than any item above it. A site handed over with no plan degrades, the client eventually blames the site, and you lose both the recurring revenue and the referral. A site handed over onto a care plan is a client for years.' },

    { type: 'h2', text: 'Make it repeatable', id: 'make-it-repeatable' },
    { type: 'p', text: 'A checklist in a blog post helps once. A checklist attached to every project helps forever. Keep it as a reusable template on the project itself, with each item assignable and tickable, so a second developer can run a launch without inheriting your memory. Improve it whenever something slips — the list should get slightly longer every year for about three years, then stop.' },
    { type: 'p', text: 'That’s how Clienter handles it: every website project carries its own launch checklist, the balance invoice is raised from the same screen where you mark the launch milestone done, and the client follows progress in their portal. The point isn’t the software, though. It’s that the list exists outside your head, and that the commercial half of the launch happens on the same day as the technical half.' },

    { type: 'h2', text: 'The one-minute version', id: 'the-one-minute-version' },
    { type: 'p', text: 'Un-block search engines. Check the redirects. Test every form from outside. Place a real test order if money changes hands. Verify SSL and email still work. Confirm analytics fires. Test a backup restore. Then raise the invoice, hand over the credentials, and offer the care plan. Everything else on this list is important; those nine are the ones that cost money the same week.' },
  ],
  faqs: [
    { q: 'What should be on a website launch checklist?', a: 'Five groups: content and written sign-off; technical checks (indexing un-blocked, redirects mapped, DNS and SSL, forms tested); performance, accessibility and security; analytics and conversion tracking; and the commercial steps — balance invoice, credential handover, handover document, and a maintenance plan proposal. The last group is the one most checklists omit and the one that decides whether the project paid.' },
    { q: 'What is the most commonly missed step when launching a website?', a: 'Leaving the staging block in place — a noindex tag or a robots.txt disallow that stops the live site being indexed. It can go unnoticed for weeks because the site looks perfect to everyone who visits it directly, and the only symptom is that no organic traffic ever arrives.' },
    { q: 'How do I handle redirects when replacing an old website?', a: 'Crawl the old site to get every real URL rather than trusting its sitemap, map each one to its nearest new equivalent, and implement them as 301s. Send leftovers to the closest relevant category page instead of the homepage, then test a sample by hand including odd cases like trailing slashes and query strings. Check for chains and loops before you call it done.' },
    { q: 'Should I invoice the client on launch day?', a: 'Yes. Launch day is the point of maximum goodwill and the clearest possible milestone, so raise the balance invoice then rather than waiting for a billing cycle. Itemise any approved out-of-scope work on the same invoice while the context is fresh for both sides.' },
    { q: 'What should I hand over to the client after launch?', a: 'Credentials for hosting, the domain registrar, the CMS, analytics and any third-party services — in the client’s own accounts where possible, with you as a user. Add a short document covering how to edit content, what renews and when, and who to contact. Then propose the maintenance plan, because an unmaintained site degrades and the client will eventually blame the build.' },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Reusable launch checklists on every project.' },
    { href: '/for/web-development-agencies', label: 'For Web Development Agencies', desc: 'Running parallel builds through to go-live.' },
    { href: '/blog/website-handover-checklist', label: 'Website handover checklist', desc: 'What to give the client after go-live.' },
    { href: '/blog/wordpress-maintenance-plan-pricing', label: 'Maintenance plan pricing', desc: 'Turning a launch into recurring revenue.' },
  ],
}
