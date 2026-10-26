import type { DocPage } from './types'

export const MISC_DOCS: Record<string, DocPage> = {
  // ─── MARKETPLACE ───────────────────────────────────────────────────────

  'marketplace': {
    slug: 'marketplace',
    title: 'Business Profiles & Marketplace',
    metaTitle: 'Clienter Marketplace — Business Profiles & Agency Directory',
    metaDescription: 'Showcase your agency or freelance business on the Clienter marketplace. Create a public profile, collect reviews, and get discovered by potential clients.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Marketplace', href: '/docs/marketplace' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What Is the Clienter Marketplace?',
        level: 2,
        content: 'The Clienter Marketplace is a public directory where agencies and freelancers can showcase their work, collect verified reviews, and attract new clients. Every Clienter account includes a free business profile that you can publish to the directory. Potential clients browse the marketplace to find trusted professionals, compare services, and reach out directly through your profile.',
        callout: { type: 'info', text: 'The marketplace is available to all Clienter users. Free plan users get a basic profile; Pro and Ultra plans unlock enhanced profile features, priority placement, and detailed analytics.' }
      },
      {
        id: 'key-features',
        heading: 'Key Marketplace Features',
        level: 2,
        content: 'The marketplace brings together everything a potential client needs to evaluate and contact you. Your profile acts as a mini-website within the Clienter ecosystem, complete with service listings, portfolio highlights, and social proof from verified reviews.',
        steps: [
          'Public business profile with your branding, services, and contact details',
          'Portfolio section to showcase completed projects and case studies',
          'Verified client reviews with trust scoring',
          'Service category tags for discoverability',
          'Direct inquiry form so prospects can reach you without leaving Clienter'
        ]
      },
      {
        id: 'getting-started',
        heading: 'Getting Started with the Marketplace',
        level: 2,
        content: 'To appear in the marketplace, you need to complete your business profile and toggle it to public. Navigate to your workspace settings in the Clienter app and select "Business Profile" to begin. Once your profile is at least 80% complete, you can publish it to the directory.',
        steps: [
          'Log in to app.clienter.co.in and open your workspace settings',
          'Select "Business Profile" from the sidebar',
          'Fill in your business name, description, services, and portfolio items',
          'Upload your logo and cover image',
          'Toggle "Publish to Marketplace" to make your profile visible'
        ],
        callout: { type: 'tip', text: 'Complete profiles rank higher in the directory. Add at least three portfolio items and request reviews from existing clients to improve your placement.' }
      },
      {
        id: 'visibility',
        heading: 'Profile Visibility & Controls',
        level: 2,
        content: 'You have full control over what appears on your public profile. You can hide specific projects, choose which services to list, and pause your marketplace presence at any time without losing your data. Pausing your profile removes it from search results and the directory but preserves all your reviews and settings for when you republish.'
      }
    ],
    faqs: [
      { q: 'Is the marketplace free to use?', a: 'Yes. Every Clienter account includes a free marketplace profile. Pro and Ultra plans add enhanced features like priority placement and analytics.' },
      { q: 'Can clients book services directly from my profile?', a: 'Currently clients can send an inquiry through your profile. Direct booking and payment integration are on the roadmap.' },
      { q: 'How do I remove my profile from the marketplace?', a: 'Go to Business Profile in your workspace settings and toggle off "Publish to Marketplace." Your profile data is preserved and can be republished anytime.' }
    ],
    relatedLinks: [
      { title: 'Your Public Business Profile', href: '/docs/marketplace/profile' },
      { title: 'Agency Directory', href: '/docs/marketplace/directory' },
      { title: 'Reviews & Trust Scoring', href: '/docs/marketplace/reviews' },
      { title: 'Partner Program', href: '/docs/partner-program' }
    ]
  },

  'marketplace/profile': {
    slug: 'marketplace/profile',
    title: 'Your Public Business Profile',
    metaTitle: 'Public Business Profile — Clienter Marketplace',
    metaDescription: 'Set up and customize your Clienter business profile. Add your services, portfolio, team info, and branding to attract new clients from the marketplace.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Marketplace', href: '/docs/marketplace' },
      { label: 'Profile', href: '/docs/marketplace/profile' }
    ],
    sections: [
      {
        id: 'profile-overview',
        heading: 'Your Business Profile',
        level: 2,
        content: 'Your business profile is your public-facing page on the Clienter marketplace. It displays your agency or freelance brand, the services you offer, portfolio highlights, and reviews from past clients. Think of it as a verified landing page that lives inside a trusted ecosystem where potential clients are actively looking for professionals.'
      },
      {
        id: 'setting-up',
        heading: 'Setting Up Your Profile',
        level: 2,
        content: 'A complete profile significantly increases your chances of being discovered. The profile editor walks you through each section and shows a completion percentage so you know what is left to fill in.',
        steps: [
          'Open workspace settings and navigate to "Business Profile"',
          'Add your business name, tagline (up to 120 characters), and a detailed description',
          'Upload a square logo (recommended 400×400px) and a cover image (1200×400px)',
          'Select your primary and secondary service categories from the predefined list',
          'Add your location, timezone, and languages you support',
          'List your starting rates or pricing tiers if you want them visible'
        ],
        callout: { type: 'tip', text: 'Write your tagline for humans, not search engines. A clear, specific tagline like "Shopify stores for DTC brands" outperforms generic ones like "Full-service digital agency."' }
      },
      {
        id: 'portfolio',
        heading: 'Adding Portfolio Items',
        level: 2,
        content: 'The portfolio section lets you showcase completed projects with images, descriptions, and client testimonials. Each portfolio item can include up to six images, a project summary, the services delivered, and an optional link to the live project. You can reorder portfolio items by dragging them in the editor.',
        steps: [
          'Click "Add Portfolio Item" in the profile editor',
          'Enter the project title, client name (with permission), and a brief description',
          'Upload project images — the first image becomes the thumbnail in the directory',
          'Tag the services used in this project for category filtering',
          'Optionally link to the live project URL'
        ]
      },
      {
        id: 'team-section',
        heading: 'Team & About Section',
        level: 2,
        content: 'If you run an agency, the team section lets you introduce key members. Each team member entry includes a name, role, photo, and optional bio. For solo freelancers, this section can be used as an extended bio with your background, certifications, and areas of expertise.',
        planBadge: 'Pro'
      },
      {
        id: 'profile-analytics',
        heading: 'Profile Analytics',
        level: 2,
        content: 'Track how your profile performs with built-in analytics. See how many people viewed your profile, clicked through to your portfolio items, and submitted inquiry forms. Analytics data is updated daily and available in your workspace dashboard under the Marketplace tab.',
        planBadge: 'Ultra',
        callout: { type: 'info', text: 'Profile analytics are available on the Ultra plan. Free and Pro users can see total profile views but not detailed engagement metrics.' }
      }
    ],
    faqs: [
      { q: 'Can I use my own domain for the profile?', a: 'Not currently. Your profile lives at a Clienter URL. You can link to it from your own website.' },
      { q: 'How many portfolio items can I add?', a: 'Free plan allows up to 3 portfolio items. Pro allows 10, and Ultra is unlimited.' },
      { q: 'Can I hide my pricing from the profile?', a: 'Yes. Pricing display is optional. You can choose to show starting rates, custom pricing tiers, or hide pricing entirely.' }
    ],
    relatedLinks: [
      { title: 'Marketplace Overview', href: '/docs/marketplace' },
      { title: 'Agency Directory', href: '/docs/marketplace/directory' },
      { title: 'Reviews & Trust Scoring', href: '/docs/marketplace/reviews' }
    ]
  },

  'marketplace/directory': {
    slug: 'marketplace/directory',
    title: 'The Agency Directory',
    metaTitle: 'Agency & Freelancer Directory — Clienter Marketplace',
    metaDescription: 'Browse the Clienter agency directory to find verified freelancers and agencies by service, location, rating, and budget. Learn how directory ranking works.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Marketplace', href: '/docs/marketplace' },
      { label: 'Directory', href: '/docs/marketplace/directory' }
    ],
    sections: [
      {
        id: 'directory-overview',
        heading: 'How the Directory Works',
        level: 2,
        content: 'The Clienter directory is a searchable, filterable listing of all published business profiles. Potential clients use it to find agencies and freelancers by service category, location, budget range, and rating. Every listing links to the full business profile where clients can review portfolios and submit inquiries.'
      },
      {
        id: 'search-filters',
        heading: 'Search & Filters',
        level: 2,
        content: 'The directory supports both keyword search and structured filters. Clients can search by business name or service keyword, then narrow results using filters for service category, location or timezone, minimum rating, budget range, and team size. Filter combinations are saved in the URL so clients can bookmark specific searches.',
        steps: [
          'Enter a keyword or service name in the search bar',
          'Use the category dropdown to filter by service type (e.g., Web Development, Branding, SEO)',
          'Set location or timezone filters if you need someone in a specific region',
          'Adjust the budget slider to match your project range',
          'Sort results by rating, relevance, or newest profiles'
        ]
      },
      {
        id: 'ranking',
        heading: 'Directory Ranking Factors',
        level: 2,
        content: 'Listings are ranked by a combination of factors designed to surface the most relevant and trustworthy profiles. The algorithm considers profile completeness, review score and volume, response rate to inquiries, and recency of activity. There is no paid placement — rankings are entirely merit-based.',
        callout: { type: 'info', text: 'Pro and Ultra profiles receive a small ranking boost as a benefit of their plan, but this does not override strong reviews or completeness from free profiles.' }
      },
      {
        id: 'category-pages',
        heading: 'Category Pages',
        level: 2,
        content: 'Each service category has its own landing page within the directory. These pages feature top-rated professionals in that category along with curated filters. If you tag your profile with the right service categories, you appear on the relevant category pages automatically.'
      },
      {
        id: 'claiming-profile',
        heading: 'Verified & Claimed Profiles',
        level: 2,
        content: 'All directory listings are verified Clienter accounts. The "Verified" badge confirms that the business has completed identity verification and has at least one confirmed client project on the platform. This helps potential clients distinguish established professionals from newly created accounts.',
        callout: { type: 'tip', text: 'To earn the Verified badge, complete your profile, verify your email and phone number, and deliver at least one project through Clienter.' }
      }
    ],
    faqs: [
      { q: 'How do I get listed in the directory?', a: 'Complete your business profile and toggle "Publish to Marketplace" in your workspace settings. Your profile appears in the directory within 24 hours.' },
      { q: 'Can I pay for a higher directory ranking?', a: 'No. Directory rankings are based on profile quality, reviews, and activity. There is no paid placement.' },
      { q: 'How often are directory listings updated?', a: 'Listings are refreshed daily. Changes to your profile appear within 24 hours.' }
    ],
    relatedLinks: [
      { title: 'Your Public Business Profile', href: '/docs/marketplace/profile' },
      { title: 'Reviews & Trust Scoring', href: '/docs/marketplace/reviews' },
      { title: 'Marketplace Overview', href: '/docs/marketplace' }
    ]
  },

  'marketplace/reviews': {
    slug: 'marketplace/reviews',
    title: 'Reviews & Trust Scoring',
    metaTitle: 'Client Reviews & Trust Score — Clienter Marketplace',
    metaDescription: 'Learn how Clienter reviews and trust scores work. Verified reviews from real clients build your reputation and improve your marketplace ranking.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Marketplace', href: '/docs/marketplace' },
      { label: 'Reviews', href: '/docs/marketplace/reviews' }
    ],
    sections: [
      {
        id: 'reviews-overview',
        heading: 'How Reviews Work',
        level: 2,
        content: 'Clienter reviews are tied to real projects. When a project is marked as delivered and the client confirms completion, the client receives an invitation to leave a review. Reviews include a 1-5 star rating across multiple dimensions (communication, quality, timeliness, value) and an optional written testimonial. Because reviews are linked to verified projects, they carry more weight than reviews on open platforms.'
      },
      {
        id: 'trust-score',
        heading: 'Your Trust Score',
        level: 2,
        content: 'The trust score is a composite metric that combines your review ratings, response rate, project completion rate, and account verification status. It is displayed as a score out of 100 on your public profile and in directory listings. A higher trust score improves your directory ranking and signals reliability to potential clients.',
        callout: { type: 'info', text: 'Trust scores are recalculated weekly. A single negative review will not drastically change your score if you have a strong history of positive reviews.' }
      },
      {
        id: 'requesting-reviews',
        heading: 'Requesting Reviews from Clients',
        level: 2,
        content: 'After delivering a project, Clienter automatically sends a review request to your client. You can also manually request a review from the project settings page. Clients receive an email with a direct link to the review form. Review requests expire after 30 days, but you can resend them once.',
        steps: [
          'Complete and deliver the project through Clienter',
          'The client receives an automatic review invitation via email',
          'Alternatively, go to the project page and click "Request Review"',
          'The client fills out the rating form and submits their review',
          'The review appears on your public profile within 24 hours'
        ]
      },
      {
        id: 'responding-to-reviews',
        heading: 'Responding to Reviews',
        level: 2,
        content: 'You can post a public response to any review on your profile. Responses are visible to anyone viewing your profile and show that you engage with client feedback. Keep responses professional and constructive — they reflect on your brand just as much as the reviews themselves.'
      },
      {
        id: 'review-moderation',
        heading: 'Review Moderation & Disputes',
        level: 2,
        content: 'Clienter moderates reviews to prevent abuse. Reviews that contain spam, offensive language, or are clearly fraudulent are removed. If you believe a review is unfair or inaccurate, you can flag it for manual review by the Clienter team. Flagged reviews remain visible during the investigation but are marked as "Under Review."',
        callout: { type: 'warning', text: 'Attempting to manipulate reviews — including paying for positive reviews or creating fake accounts to review yourself — violates the Clienter Terms of Service and may result in account suspension.' }
      }
    ],
    faqs: [
      { q: 'Can I delete a negative review?', a: 'No. You cannot delete legitimate reviews. You can respond to them publicly or flag them for moderation if they violate review guidelines.' },
      { q: 'Do reviews from free plan clients count?', a: 'Yes. All verified project reviews count equally regardless of the reviewer\'s plan.' },
      { q: 'How is the trust score calculated?', a: 'The trust score combines review ratings (50%), response rate (20%), project completion rate (20%), and account verification status (10%).' }
    ],
    relatedLinks: [
      { title: 'Your Public Business Profile', href: '/docs/marketplace/profile' },
      { title: 'Agency Directory', href: '/docs/marketplace/directory' },
      { title: 'Client Onboarding', href: '/docs/agency-workflows/onboarding' }
    ]
  },

  // ─── PARTNER PROGRAM ───────────────────────────────────────────────────

  'partner-program': {
    slug: 'partner-program',
    title: 'Refer & Earn Partner Program',
    metaTitle: 'Clienter Partner Program — Refer & Earn Commissions',
    metaDescription: 'Join the Clienter Partner Program and earn recurring commissions by referring agencies and freelancers. Earn up to ₹160 per referral for 12 billing cycles.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Partner Program', href: '/docs/partner-program' }
    ],
    sections: [
      {
        id: 'program-overview',
        heading: 'About the Partner Program',
        level: 2,
        content: 'The Clienter Partner Program lets you earn recurring commissions by referring new users to the platform. When someone signs up using your referral link and subscribes to a paid plan, you earn a commission on every billing cycle for up to 12 months. The program is open to all Clienter users — whether you are an active subscriber or on the free plan.'
      },
      {
        id: 'commission-structure',
        heading: 'Commission Structure',
        level: 2,
        content: 'Commissions are paid per billing cycle for up to 12 consecutive months from the referral\'s first paid subscription. You earn ₹40 per billing cycle for each Pro plan referral and ₹160 per billing cycle for each Ultra plan referral. If your referral upgrades from Pro to Ultra mid-cycle, your commission adjusts to the higher rate starting from the next billing cycle.',
        callout: { type: 'info', text: 'There is no cap on the number of referrals. If you refer 10 Ultra subscribers, you earn ₹1,600 every month for 12 months — a total of ₹19,200.' }
      },
      {
        id: 'who-can-join',
        heading: 'Who Can Join',
        level: 2,
        content: 'Any Clienter user with a verified account can join the partner program. You do not need a paid subscription. Content creators, consultants, agency owners, and anyone who works with freelancers or agencies can benefit from the program. Activate it from your account settings under "Partner Program."',
        steps: [
          'Log in to app.clienter.co.in',
          'Go to Account Settings and select "Partner Program"',
          'Accept the Partner Program terms',
          'Copy your unique referral link and start sharing'
        ]
      },
      {
        id: 'program-rules',
        heading: 'Program Rules',
        level: 2,
        content: 'Referrals must be genuine new users who have not previously created a Clienter account. Self-referrals are not allowed. Commissions are forfeited if the referred user requests a refund or if the referral is found to be fraudulent. Clienter reserves the right to modify commission rates with 30 days notice to active partners.',
        callout: { type: 'warning', text: 'Creating multiple accounts to earn self-referral commissions violates the program terms and results in permanent disqualification from the partner program.' }
      }
    ],
    faqs: [
      { q: 'Do I need a paid plan to refer others?', a: 'No. Any verified Clienter account can join the partner program and earn referral commissions.' },
      { q: 'What happens if my referral cancels their subscription?', a: 'Commissions stop when the referred user cancels. You keep all commissions earned up to that point.' },
      { q: 'Is there a minimum payout threshold?', a: 'Yes. The minimum withdrawal amount is ₹500. Earnings below this threshold accumulate until the minimum is reached.' }
    ],
    relatedLinks: [
      { title: 'How Referrals Work', href: '/docs/partner-program/how-it-works' },
      { title: 'Partner Dashboard', href: '/docs/partner-program/dashboard' },
      { title: 'Sharing Your Referral Link', href: '/docs/partner-program/sharing' },
      { title: 'Pricing Plans', href: '/pricing' }
    ]
  },

  'partner-program/how-it-works': {
    slug: 'partner-program/how-it-works',
    title: 'How Referrals Work',
    metaTitle: 'How Clienter Referrals Work — Partner Program',
    metaDescription: 'Understand how Clienter referral tracking works. Earn ₹40 per Pro referral and ₹160 per Ultra referral for 12 billing cycles with cookie-based attribution.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Partner Program', href: '/docs/partner-program' },
      { label: 'How It Works', href: '/docs/partner-program/how-it-works' }
    ],
    sections: [
      {
        id: 'referral-flow',
        heading: 'The Referral Flow',
        level: 2,
        content: 'When someone clicks your referral link, a tracking cookie is stored in their browser for 30 days. If they sign up for Clienter within that window — even if they close the browser and return later — the signup is attributed to you. Once the referred user subscribes to a Pro or Ultra plan, your commission kicks in.',
        steps: [
          'You share your unique referral link via any channel',
          'The prospect clicks the link and a 30-day attribution cookie is set',
          'The prospect signs up for a Clienter account',
          'When they subscribe to Pro (₹199/mo) or Ultra (₹799/mo), your commission begins',
          'You earn ₹40 (Pro) or ₹160 (Ultra) every billing cycle for up to 12 months'
        ]
      },
      {
        id: 'attribution',
        heading: 'Attribution & Tracking',
        level: 2,
        content: 'Referral attribution uses a combination of browser cookies and URL parameters. The 30-day cookie window means your prospect does not need to sign up immediately. If they click your link on day 1 and sign up on day 25, you still get credit. However, if another partner\'s link is clicked after yours, the most recent click gets the attribution.',
        callout: { type: 'info', text: 'Attribution is last-click. If the prospect clicks multiple referral links, the most recent one before signup receives the commission.' }
      },
      {
        id: 'commission-timeline',
        heading: 'Commission Timeline',
        level: 2,
        content: 'Commissions are earned on each successful billing cycle. For monthly subscribers, that means a commission every month. Commissions start on the referral\'s first paid invoice and continue for up to 12 consecutive billing cycles. If the referral pauses their subscription, the commission pause too but the 12-cycle clock continues.',
        callout: { type: 'tip', text: 'Referring Ultra plan users is four times more rewarding — ₹160 per cycle versus ₹40 for Pro. Highlight Ultra features like encrypted vault and advanced analytics when promoting Clienter.' }
      },
      {
        id: 'plan-changes',
        heading: 'What Happens When Referrals Change Plans',
        level: 2,
        content: 'If your referral upgrades from Pro to Ultra, your commission increases to ₹160 starting from the next billing cycle. If they downgrade from Ultra to Pro, the commission adjusts down to ₹40. If they cancel entirely, commissions stop and any remaining cycles are forfeited.'
      },
      {
        id: 'edge-cases',
        heading: 'Refunds & Edge Cases',
        level: 2,
        content: 'If a referred user receives a refund for a billing cycle, the commission for that cycle is reversed. If the reversal brings your balance below zero, the negative amount is deducted from future earnings. Referrals who sign up but never subscribe to a paid plan do not generate any commissions.',
        callout: { type: 'warning', text: 'Commissions for refunded billing cycles are clawed back. Ensure your referrals are genuine users who will benefit from the platform.' }
      }
    ],
    relatedLinks: [
      { title: 'Partner Program Overview', href: '/docs/partner-program' },
      { title: 'Partner Dashboard', href: '/docs/partner-program/dashboard' },
      { title: 'Sharing Your Referral Link', href: '/docs/partner-program/sharing' }
    ]
  },

  'partner-program/dashboard': {
    slug: 'partner-program/dashboard',
    title: 'Partner Dashboard',
    metaTitle: 'Partner Dashboard — Earnings & Withdrawals | Clienter',
    metaDescription: 'Track your Clienter referral earnings, view active referrals, and withdraw commissions from the partner dashboard. Minimum withdrawal is ₹500.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Partner Program', href: '/docs/partner-program' },
      { label: 'Dashboard', href: '/docs/partner-program/dashboard' }
    ],
    sections: [
      {
        id: 'dashboard-overview',
        heading: 'Partner Dashboard Overview',
        level: 2,
        content: 'The partner dashboard is your central hub for tracking referral performance. Access it from Account Settings under "Partner Program." The dashboard shows your total earnings, pending commissions, active referrals, and withdrawal history at a glance.'
      },
      {
        id: 'earnings-breakdown',
        heading: 'Earnings Breakdown',
        level: 2,
        content: 'The earnings section shows three key metrics: total earned (all-time commissions credited to your account), pending (commissions from the current billing cycle not yet confirmed), and available balance (amount you can withdraw). Pending commissions are confirmed after the referral\'s payment clears, typically within 3-5 business days of their billing date.'
      },
      {
        id: 'referral-list',
        heading: 'Active Referrals',
        level: 2,
        content: 'The referrals table lists every user who signed up through your link. For privacy, referral names are partially masked. You can see each referral\'s plan type, signup date, current cycle number (out of 12), status (active, paused, or cancelled), and total commission earned from that referral.'
      },
      {
        id: 'withdrawals',
        heading: 'Withdrawing Earnings',
        level: 2,
        content: 'You can withdraw your available balance once it reaches the minimum threshold of ₹500. Withdrawals are processed to your linked bank account via UPI or NEFT. Processing takes 3-7 business days depending on your bank.',
        steps: [
          'Open the Partner Dashboard and verify your available balance is at least ₹500',
          'Click "Withdraw" and enter the amount',
          'Confirm your linked bank account or UPI ID',
          'Submit the withdrawal request',
          'Funds arrive in your account within 3-7 business days'
        ],
        callout: { type: 'info', text: 'You can link your bank account or UPI ID in Account Settings under "Payment Methods." Make sure the name on your bank account matches your Clienter account name.' }
      },
      {
        id: 'tax-info',
        heading: 'Tax Information',
        level: 2,
        content: 'Referral commissions are taxable income. Clienter does not deduct TDS on partner payouts below ₹15,000 in a financial year. For payouts exceeding ₹15,000 annually, TDS at the applicable rate is deducted unless you submit a valid lower-deduction certificate. You are responsible for reporting referral income in your tax filings.',
        callout: { type: 'warning', text: 'Consult a tax professional for advice on reporting referral income. Clienter provides an annual earnings summary in April that you can use for filing.' }
      }
    ],
    faqs: [
      { q: 'What is the minimum withdrawal amount?', a: '₹500. Earnings below this amount accumulate until the threshold is reached.' },
      { q: 'How long do withdrawals take?', a: '3-7 business days after submitting the withdrawal request.' },
      { q: 'Can I withdraw to PayPal?', a: 'Currently withdrawals are supported via UPI and NEFT to Indian bank accounts. PayPal support for international partners is planned.' }
    ],
    relatedLinks: [
      { title: 'Partner Program Overview', href: '/docs/partner-program' },
      { title: 'How Referrals Work', href: '/docs/partner-program/how-it-works' },
      { title: 'Sharing Your Referral Link', href: '/docs/partner-program/sharing' }
    ]
  },

  'partner-program/sharing': {
    slug: 'partner-program/sharing',
    title: 'Sharing Your Referral Link',
    metaTitle: 'Share Your Clienter Referral Link — Partner Program',
    metaDescription: 'Learn the best ways to share your Clienter referral link. Get tips for social media, email, and content-based promotion to maximize your referral earnings.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Partner Program', href: '/docs/partner-program' },
      { label: 'Sharing', href: '/docs/partner-program/sharing' }
    ],
    sections: [
      {
        id: 'your-link',
        heading: 'Your Unique Referral Link',
        level: 2,
        content: 'Your referral link is a unique URL that tracks signups back to your account. Find it in the Partner Dashboard under "Your Link." The link format is clienter.co.in/?ref=YOUR_CODE. You can copy it with one click and share it anywhere — social media, email, blog posts, or direct messages.'
      },
      {
        id: 'sharing-channels',
        heading: 'Where to Share',
        level: 2,
        content: 'The most effective channels for referral sharing depend on your audience. Here are proven strategies that work well for Clienter partners.',
        steps: [
          'Share in relevant LinkedIn posts or comments when discussing freelancing or agency tools',
          'Include the link in your email signature if you communicate with freelancers or agencies regularly',
          'Write a genuine review or comparison post on your blog or social media',
          'Mention Clienter in community forums, Slack groups, or Discord servers where freelancers gather',
          'Add the link to your YouTube video descriptions if you create content about freelancing or business tools'
        ],
        callout: { type: 'tip', text: 'Authentic recommendations convert better than hard sells. Share your genuine experience with Clienter and explain how it has helped your workflow.' }
      },
      {
        id: 'sharing-guidelines',
        heading: 'Sharing Guidelines',
        level: 2,
        content: 'While we encourage creative promotion, there are rules to keep the program fair. Do not use paid ads that bid on "Clienter" or related brand keywords. Do not spam communities or send unsolicited bulk messages. Do not make false claims about Clienter features or pricing. Violations result in commission forfeiture and removal from the partner program.',
        callout: { type: 'warning', text: 'Spamming referral links in communities is the fastest way to get removed from the partner program. Focus on genuine recommendations to people who would actually benefit from Clienter.' }
      },
      {
        id: 'tracking-clicks',
        heading: 'Tracking Link Performance',
        level: 2,
        content: 'The Partner Dashboard shows how many times your link has been clicked, how many clicks converted to signups, and how many signups converted to paid subscriptions. Use this data to understand which channels and approaches work best for you and double down on what converts.'
      }
    ],
    faqs: [
      { q: 'Can I create multiple referral links?', a: 'Currently each account gets one referral link. Use UTM parameters on top of your referral link to track different channels.' },
      { q: 'Does the referral link expire?', a: 'No. Your referral link is permanent. The 30-day window applies to the cookie set when someone clicks it, not to the link itself.' },
      { q: 'Can I share the link on social media ads?', a: 'You can use social media ads as long as you do not bid on Clienter brand keywords or make misleading claims.' }
    ],
    relatedLinks: [
      { title: 'Partner Program Overview', href: '/docs/partner-program' },
      { title: 'How Referrals Work', href: '/docs/partner-program/how-it-works' },
      { title: 'Partner Dashboard', href: '/docs/partner-program/dashboard' }
    ]
  },

  // ─── SECURITY ──────────────────────────────────────────────────────────

  'security': {
    slug: 'security',
    title: 'Security & Privacy',
    metaTitle: 'Security & Privacy — Clienter Platform',
    metaDescription: 'Learn how Clienter protects your data with end-to-end encryption, row-level security, DPDP Act compliance, and hCaptcha login protection.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Security', href: '/docs/security' }
    ],
    sections: [
      {
        id: 'security-overview',
        heading: 'Our Security Approach',
        level: 2,
        content: 'Clienter is built with security and privacy at its foundation, not bolted on as an afterthought. Your client data, financial records, contracts, and communications are protected by multiple layers of security — from end-to-end encryption in the vault to row-level data isolation in the database. We comply with the Digital Personal Data Protection Act 2023 and follow industry best practices for data handling.'
      },
      {
        id: 'security-layers',
        heading: 'Security Architecture',
        level: 2,
        content: 'Clienter uses a defense-in-depth approach with multiple security layers working together to protect your data.',
        steps: [
          'End-to-end encryption for sensitive vault data using ECDH P-256 + AES-256-GCM',
          'Row Level Security (RLS) in Supabase ensuring complete data isolation between workspaces',
          'hCaptcha on login to prevent automated attacks and credential stuffing',
          'HTTPS/TLS for all data in transit',
          'Secure session management with short-lived JWT tokens'
        ]
      },
      {
        id: 'data-handling',
        heading: 'How We Handle Your Data',
        level: 2,
        content: 'Your workspace data is stored in Supabase infrastructure. We do not sell, share, or use your data for advertising. Access to production databases is restricted to essential operations and all access is logged. Backups are encrypted and retained according to our data retention policy.',
        callout: { type: 'info', text: 'Clienter operates on a zero-knowledge model for vault data. Encrypted content in the vault cannot be read by Clienter staff — only you and the people you explicitly share with can decrypt it.' }
      },
      {
        id: 'reporting-vulnerabilities',
        heading: 'Reporting Security Issues',
        level: 2,
        content: 'If you discover a security vulnerability, please report it to support@clienter.co.in with the subject line "Security Report." We take all reports seriously and will respond within 48 hours. Do not publicly disclose vulnerabilities until we have had a chance to investigate and patch them.',
        callout: { type: 'warning', text: 'Never include sensitive data like passwords or encryption keys in a bug report. Describe the vulnerability and how to reproduce it without including actual secrets.' }
      }
    ],
    faqs: [
      { q: 'Is Clienter SOC 2 certified?', a: 'Not yet. We are working toward SOC 2 Type II certification. Our current security practices align with SOC 2 requirements.' },
      { q: 'Where is my data stored?', a: 'Data is stored in Supabase-managed infrastructure. Vault data is encrypted end-to-end and cannot be read server-side.' },
      { q: 'Does Clienter have access to my passwords?', a: 'No. Passwords are hashed using bcrypt. We never store or have access to plaintext passwords.' }
    ],
    relatedLinks: [
      { title: 'E2E Encryption', href: '/docs/security/encryption' },
      { title: 'DPDP Act Compliance', href: '/docs/security/data-protection' },
      { title: 'Row Level Security', href: '/docs/security/rls' },
      { title: 'Login Protection (hCaptcha)', href: '/docs/security/captcha' }
    ]
  },

  'security/encryption': {
    slug: 'security/encryption',
    title: 'End-to-End Encryption',
    metaTitle: 'E2E Encryption — ECDH P-256 + AES-256-GCM | Clienter Security',
    metaDescription: 'Clienter vault uses ECDH P-256 key exchange and AES-256-GCM encryption for zero-knowledge end-to-end encryption. Your sensitive data is encrypted before it leaves your browser.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Security', href: '/docs/security' },
      { label: 'Encryption', href: '/docs/security/encryption' }
    ],
    sections: [
      {
        id: 'encryption-overview',
        heading: 'How Vault Encryption Works',
        level: 2,
        content: 'The Clienter vault uses end-to-end encryption to protect your most sensitive data — API keys, passwords, credentials, and confidential documents. Data is encrypted in your browser before it is sent to the server, and decrypted only in your browser when you access it. The server never sees plaintext vault content.',
        callout: { type: 'info', text: 'This is a zero-knowledge architecture. Clienter cannot read your vault data, reset your encryption keys, or recover encrypted content. You are the sole custodian of your keys.' }
      },
      {
        id: 'key-exchange',
        heading: 'ECDH P-256 Key Exchange',
        level: 2,
        content: 'When you enable the vault, your browser generates an ECDH (Elliptic Curve Diffie-Hellman) key pair using the P-256 curve. The private key never leaves your device — only the public key is stored on the server. When sharing vault entries with team members, ECDH is used to derive a shared secret between your private key and the recipient\'s public key without either party revealing their private key.',
        steps: [
          'Your browser generates an ECDH P-256 key pair (private + public)',
          'The public key is stored server-side; the private key stays on your device',
          'When sharing, ECDH derives a shared secret from your private key and the recipient\'s public key',
          'The shared secret is used to encrypt/decrypt the data encryption key for that vault entry',
          'Neither party\'s private key is ever transmitted'
        ]
      },
      {
        id: 'aes-gcm',
        heading: 'AES-256-GCM Data Encryption',
        level: 2,
        content: 'Each vault entry is encrypted with a unique AES-256-GCM data encryption key (DEK). AES-256-GCM provides both confidentiality and integrity — any tampering with the ciphertext is detected during decryption. A unique 96-bit initialization vector (IV) is generated for each encryption operation to ensure that identical plaintext produces different ciphertext.'
      },
      {
        id: 'key-management',
        heading: 'Key Storage & Recovery',
        level: 2,
        content: 'Your private key is stored in your browser\'s IndexedDB, protected by the Web Crypto API which prevents JavaScript from extracting the raw key material. If you clear your browser data or switch devices, you need to re-establish your encryption keys. We strongly recommend exporting your recovery key when you first set up the vault.',
        callout: { type: 'warning', text: 'If you lose your private key and have not saved your recovery key, your encrypted vault data is permanently inaccessible. Clienter cannot recover it for you. Export and safely store your recovery key immediately after setup.' },
        steps: [
          'Open the vault settings page in app.clienter.co.in',
          'Click "Export Recovery Key"',
          'Save the recovery key file in a secure location (password manager, encrypted USB drive)',
          'Do not store the recovery key in the vault itself or in unencrypted cloud storage'
        ]
      },
      {
        id: 'technical-specs',
        heading: 'Technical Specifications',
        level: 2,
        content: 'The encryption implementation uses the Web Crypto API available in all modern browsers. Key exchange: ECDH with the NIST P-256 curve (also known as secp256r1). Data encryption: AES-256-GCM with 96-bit random IVs. Key derivation for the shared secret uses HKDF-SHA-256. All cryptographic operations run client-side in the browser — no encryption or decryption happens on the server.'
      }
    ],
    faqs: [
      { q: 'Can Clienter staff read my vault data?', a: 'No. The vault uses zero-knowledge end-to-end encryption. Data is encrypted in your browser and only you (and people you share with) can decrypt it.' },
      { q: 'What happens if I clear my browser data?', a: 'Your private key is stored in the browser. If you clear all site data, you need your recovery key to re-establish access to encrypted vault entries.' },
      { q: 'Is the encryption open source?', a: 'The encryption uses standard Web Crypto API primitives (ECDH P-256, AES-256-GCM). The implementation follows well-documented cryptographic patterns.' }
    ],
    relatedLinks: [
      { title: 'Security Overview', href: '/docs/security' },
      { title: 'Data Protection (DPDP)', href: '/docs/security/data-protection' },
      { title: 'Row Level Security', href: '/docs/security/rls' }
    ],
    planBadge: 'Pro'
  },

  'security/data-protection': {
    slug: 'security/data-protection',
    title: 'DPDP Act 2023 Compliance',
    metaTitle: 'DPDP Act 2023 Compliance — Clienter Data Protection',
    metaDescription: 'How Clienter complies with India\'s Digital Personal Data Protection Act 2023. Understand your data rights, consent management, and our data processing practices.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Security', href: '/docs/security' },
      { label: 'Data Protection', href: '/docs/security/data-protection' }
    ],
    sections: [
      {
        id: 'dpdp-overview',
        heading: 'DPDP Act 2023 & Clienter',
        level: 2,
        content: 'The Digital Personal Data Protection Act 2023 (DPDP Act) is India\'s comprehensive data protection law. Clienter complies with the DPDP Act as both a Data Fiduciary (when we process your personal data for our services) and a Data Processor (when we process data on your behalf for your clients). We are committed to transparent data practices and respecting your rights as a data principal.'
      },
      {
        id: 'data-collection',
        heading: 'What Data We Collect & Why',
        level: 2,
        content: 'Clienter collects only the personal data necessary to provide our services. This includes your name and email for account creation, payment information for billing (processed by our payment partners, not stored by us), workspace data you create (projects, clients, invoices), and usage analytics to improve the product. We do not collect data beyond what is needed for service delivery.',
        steps: [
          'Account data: name, email, phone number, profile photo',
          'Billing data: processed by Razorpay/PayPal — Clienter does not store card numbers',
          'Workspace data: projects, clients, invoices, documents you create',
          'Usage data: feature usage analytics, error logs, performance metrics',
          'Communication data: support tickets and feedback you submit'
        ]
      },
      {
        id: 'consent',
        heading: 'Consent & Purpose Limitation',
        level: 2,
        content: 'Under the DPDP Act, we process your data based on consent you provide at signup and for legitimate purposes specified in our Privacy Policy. We use your data only for the purposes disclosed — providing the Clienter service, processing payments, sending transactional communications, and improving the product. We do not repurpose your data for unrelated activities.',
        callout: { type: 'info', text: 'You can withdraw consent at any time by deleting your account. Withdrawal of consent triggers deletion of your personal data within 30 days, subject to legal retention requirements.' }
      },
      {
        id: 'your-rights',
        heading: 'Your Rights as a Data Principal',
        level: 2,
        content: 'The DPDP Act grants you several rights over your personal data. You can exercise these rights by contacting support@clienter.co.in or through your account settings.',
        steps: [
          'Right to access: Request a copy of the personal data we hold about you',
          'Right to correction: Update or correct inaccurate personal data',
          'Right to erasure: Request deletion of your personal data (by deleting your account)',
          'Right to grievance redressal: File a complaint about our data handling practices',
          'Right to nominate: Designate a nominee to exercise your rights in case of death or incapacity'
        ]
      },
      {
        id: 'data-retention',
        heading: 'Data Retention & Deletion',
        level: 2,
        content: 'We retain your personal data only as long as your account is active and for a reasonable period afterward for legal and business purposes (such as invoice records required under tax law). When you delete your account, personal data is purged within 30 days. Anonymized analytics data that cannot identify you may be retained indefinitely.',
        callout: { type: 'tip', text: 'Before deleting your account, export your data from Account Settings. Once deletion is processed, your data cannot be recovered.' }
      }
    ],
    faqs: [
      { q: 'Does Clienter transfer data outside India?', a: 'Clienter uses Supabase for data storage. Data may be processed in regions where Supabase operates. We ensure adequate protection for any cross-border data transfers as required by the DPDP Act.' },
      { q: 'How do I request my data?', a: 'Email support@clienter.co.in with the subject "Data Access Request" from your registered email address. We will respond within 30 days.' },
      { q: 'Who is the Data Protection Officer?', a: 'For data protection inquiries, contact support@clienter.co.in. Our team handles all DPDP-related requests.' }
    ],
    relatedLinks: [
      { title: 'Security Overview', href: '/docs/security' },
      { title: 'E2E Encryption', href: '/docs/security/encryption' },
      { title: 'Privacy Policy', href: '/privacy' }
    ]
  },

  'security/rls': {
    slug: 'security/rls',
    title: 'Data Isolation — Row Level Security',
    metaTitle: 'Row Level Security (RLS) — Clienter Data Isolation',
    metaDescription: 'Clienter uses Supabase Row Level Security to ensure complete data isolation between workspaces. No user can access another workspace\'s data, even at the database level.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Security', href: '/docs/security' },
      { label: 'Row Level Security', href: '/docs/security/rls' }
    ],
    sections: [
      {
        id: 'rls-overview',
        heading: 'What Is Row Level Security?',
        level: 2,
        content: 'Row Level Security (RLS) is a database-level access control mechanism that ensures every query only returns data belonging to the authenticated user\'s workspace. Unlike application-level filtering (which can be bypassed by bugs), RLS is enforced by the database engine itself — PostgreSQL. Even if there were a bug in Clienter\'s application code, RLS policies prevent cross-workspace data leakage.'
      },
      {
        id: 'how-rls-works',
        heading: 'How RLS Works in Clienter',
        level: 2,
        content: 'Every table in Clienter\'s database that contains user data has RLS policies attached. When you log in, your session carries a JWT token that identifies your user ID and workspace. The database automatically filters every SELECT, INSERT, UPDATE, and DELETE query to only include rows that belong to your workspace.',
        steps: [
          'You log in and receive a JWT with your user ID and workspace ID',
          'Every database query is intercepted by RLS policies',
          'The policy checks if the row\'s workspace_id matches your JWT\'s workspace claim',
          'Only matching rows are returned or modified — others are invisible',
          'This applies to all operations: reads, writes, updates, and deletes'
        ],
        callout: { type: 'info', text: 'RLS is enforced at the PostgreSQL level, below the application layer. This means even if the API were misconfigured, the database itself would block unauthorized access.' }
      },
      {
        id: 'workspace-isolation',
        heading: 'Workspace-Level Isolation',
        level: 2,
        content: 'Each Clienter workspace is a completely isolated data silo. Clients, projects, invoices, documents, and all other data are scoped to a single workspace. Team members within a workspace share access to that workspace\'s data based on their role permissions, but can never see data from other workspaces — even workspaces owned by the same user.'
      },
      {
        id: 'rls-and-api',
        heading: 'RLS in the API Layer',
        level: 2,
        content: 'Clienter uses Supabase\'s client library which automatically includes the authenticated user\'s JWT in every request. The Supabase backend passes this JWT to PostgreSQL, where RLS policies evaluate it. This means there is no way to construct an API request that bypasses RLS — the database is the final gatekeeper.',
        callout: { type: 'tip', text: 'Developers building integrations with Clienter do not need to worry about data isolation — RLS handles it transparently. Your API key can only access data in your workspace.' }
      }
    ],
    faqs: [
      { q: 'Can a Clienter admin see my workspace data?', a: 'No. RLS policies apply to all database queries, including internal tools. Clienter staff cannot query your workspace data through normal database access.' },
      { q: 'Does RLS slow down queries?', a: 'The performance impact is negligible. PostgreSQL evaluates RLS policies as part of the query plan, and workspace_id is indexed on all tables.' },
      { q: 'What about shared data like the marketplace?', a: 'Marketplace profiles are stored in separate tables with different RLS policies that allow public read access while restricting writes to the profile owner.' }
    ],
    relatedLinks: [
      { title: 'Security Overview', href: '/docs/security' },
      { title: 'E2E Encryption', href: '/docs/security/encryption' },
      { title: 'Login Protection (hCaptcha)', href: '/docs/security/captcha' }
    ]
  },

  'security/captcha': {
    slug: 'security/captcha',
    title: 'Login Protection — hCaptcha',
    metaTitle: 'hCaptcha Login Protection — Clienter Security',
    metaDescription: 'Clienter uses hCaptcha to protect login and signup forms from automated attacks, credential stuffing, and bot abuse. Privacy-friendly CAPTCHA for secure authentication.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Security', href: '/docs/security' },
      { label: 'hCaptcha', href: '/docs/security/captcha' }
    ],
    sections: [
      {
        id: 'captcha-overview',
        heading: 'Why hCaptcha?',
        level: 2,
        content: 'Clienter uses hCaptcha to protect authentication forms from automated attacks. hCaptcha is a privacy-friendly CAPTCHA service that prevents bots from attempting credential stuffing, brute-force attacks, and automated account creation. Unlike some alternatives, hCaptcha does not track users across the web or sell user data, aligning with our privacy-first approach.'
      },
      {
        id: 'where-captcha-appears',
        heading: 'Where hCaptcha Appears',
        level: 2,
        content: 'hCaptcha is presented on the login page, signup page, and password reset page. In most cases, hCaptcha runs in the background and verifies you automatically without showing a challenge. If the system detects suspicious activity — such as multiple rapid login attempts from the same IP — a visual challenge is presented.',
        steps: [
          'Login page: hCaptcha verifies before your credentials are checked',
          'Signup page: hCaptcha prevents automated account creation',
          'Password reset: hCaptcha prevents abuse of the reset email flow',
          'Most users pass automatically without seeing a visual challenge'
        ]
      },
      {
        id: 'troubleshooting',
        heading: 'Troubleshooting hCaptcha',
        level: 2,
        content: 'If you are having trouble with hCaptcha, there are a few common causes and solutions.',
        steps: [
          'Make sure JavaScript is enabled in your browser — hCaptcha requires it',
          'Disable browser extensions that block scripts (some ad blockers interfere with hCaptcha)',
          'Try a different browser or an incognito/private window',
          'If using a VPN, try disconnecting — some VPN IP ranges are flagged by hCaptcha',
          'Clear your browser cookies for app.clienter.co.in and try again'
        ],
        callout: { type: 'tip', text: 'If hCaptcha challenges keep appearing, it is usually because your IP address or browser fingerprint has been flagged. Switching to a non-VPN connection typically resolves this.' }
      },
      {
        id: 'privacy',
        heading: 'Privacy & hCaptcha',
        level: 2,
        content: 'hCaptcha was chosen specifically for its privacy stance. Unlike Google reCAPTCHA, hCaptcha does not use CAPTCHA interactions to train commercial AI models or build advertising profiles. hCaptcha\'s data processing complies with GDPR and is compatible with the DPDP Act 2023 requirements. The only data shared with hCaptcha is what is needed to verify the challenge — no personal information from your Clienter account is sent.',
        callout: { type: 'info', text: 'hCaptcha processes challenge data independently from Clienter. We do not receive or store any data from hCaptcha beyond the pass/fail verification result.' }
      }
    ],
    faqs: [
      { q: 'Why do I keep getting CAPTCHA challenges?', a: 'Repeated challenges usually indicate a flagged IP address (common with VPNs) or aggressive browser privacy settings. Try connecting without a VPN or using a different browser.' },
      { q: 'Can I disable hCaptcha on my account?', a: 'No. hCaptcha is a security measure that cannot be disabled for individual accounts. It protects your account from automated attacks.' },
      { q: 'Is hCaptcha accessible for users with disabilities?', a: 'Yes. hCaptcha includes an accessibility option that provides an audio challenge alternative. Click the accessibility icon on the CAPTCHA widget to switch to audio mode.' }
    ],
    relatedLinks: [
      { title: 'Security Overview', href: '/docs/security' },
      { title: 'E2E Encryption', href: '/docs/security/encryption' },
      { title: 'Row Level Security', href: '/docs/security/rls' }
    ]
  },

  // ─── MOBILE ────────────────────────────────────────────────────────────

  'mobile': {
    slug: 'mobile',
    title: 'Mobile & PWA',
    metaTitle: 'Clienter Mobile App — Progressive Web App (PWA)',
    metaDescription: 'Use Clienter on your phone with the Progressive Web App. Install it on Android and iOS for a native-like experience without app store downloads.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Mobile', href: '/docs/mobile' }
    ],
    sections: [
      {
        id: 'mobile-overview',
        heading: 'Clienter on Mobile',
        level: 2,
        content: 'Clienter is built as a Progressive Web App (PWA), which means you can use it on any device with a modern browser — and install it to your home screen for a native app-like experience. There is no separate app to download from the Play Store or App Store. You install Clienter directly from your browser, and it works offline for previously loaded content.'
      },
      {
        id: 'pwa-benefits',
        heading: 'Why a PWA?',
        level: 2,
        content: 'A Progressive Web App gives you the best of both worlds: the reach of the web and the experience of a native app. PWAs load fast, work offline, receive push notifications, and can be installed to your home screen — all without going through an app store.',
        steps: [
          'No app store download required — install directly from your browser',
          'Always up to date — you get the latest version automatically, no manual updates',
          'Works on any device — Android, iOS, tablets, desktops',
          'Offline support for previously loaded pages and data',
          'Full-screen experience when installed — no browser address bar'
        ],
        callout: { type: 'info', text: 'Clienter\'s PWA works on both Android (Chrome) and iOS (Safari). The installation process differs slightly between platforms — see the install guide for step-by-step instructions.' }
      },
      {
        id: 'supported-features',
        heading: 'What Works on Mobile',
        level: 2,
        content: 'The full Clienter feature set is available on mobile. The interface is responsive and adapts to your screen size. You can manage clients, track projects, send invoices, access the vault, and handle all day-to-day tasks from your phone. Some features like bulk data exports and advanced reporting are optimized for larger screens but remain accessible on mobile.'
      },
      {
        id: 'push-notifications',
        heading: 'Push Notifications',
        level: 2,
        content: 'When installed as a PWA, Clienter can send push notifications for important events like new client inquiries, payment receipts, project updates, and deadline reminders. You can customize which notifications you receive in your account settings under "Notifications."',
        callout: { type: 'tip', text: 'On iOS, push notifications for PWAs require iOS 16.4 or later. Make sure your device is updated to receive notifications from the installed Clienter app.' }
      }
    ],
    faqs: [
      { q: 'Is there a native app on the App Store or Play Store?', a: 'No. Clienter is a PWA that you install from your browser. It provides a native-like experience without an app store download.' },
      { q: 'Does the PWA work offline?', a: 'Yes, for previously loaded content. You can view cached pages and data offline. Changes made offline sync when you reconnect.' },
      { q: 'How much storage does the PWA use?', a: 'The installed PWA typically uses less than 50 MB. Cached data varies based on your workspace size.' }
    ],
    relatedLinks: [
      { title: 'Installing on Android & iOS', href: '/docs/mobile/install' },
      { title: 'Mobile Navigation', href: '/docs/mobile/navigation' },
      { title: 'Responsive Design', href: '/docs/mobile/responsive' }
    ]
  },

  'mobile/install': {
    slug: 'mobile/install',
    title: 'Installing Clienter on Android & iOS',
    metaTitle: 'Install Clienter PWA on Android & iOS — Step-by-Step',
    metaDescription: 'Install the Clienter Progressive Web App on your Android or iOS device. Step-by-step instructions for Chrome on Android and Safari on iOS.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Mobile', href: '/docs/mobile' },
      { label: 'Install', href: '/docs/mobile/install' }
    ],
    sections: [
      {
        id: 'install-overview',
        heading: 'Installing the Clienter PWA',
        level: 2,
        content: 'Clienter is a Progressive Web App (PWA) — not a native app from the Play Store or App Store. You install it directly from your browser in a few taps. Once installed, it appears on your home screen and launches in full-screen mode like a native app. The process is slightly different on Android and iOS.'
      },
      {
        id: 'android-install',
        heading: 'Install on Android (Chrome)',
        level: 2,
        content: 'Google Chrome on Android provides the smoothest PWA installation experience. Follow these steps to add Clienter to your home screen.',
        steps: [
          'Open Google Chrome on your Android device',
          'Navigate to app.clienter.co.in and log in to your account',
          'Tap the three-dot menu icon in the top-right corner of Chrome',
          'Select "Add to Home screen" (or "Install app" if prompted)',
          'Confirm the app name and tap "Add"',
          'Clienter now appears on your home screen — tap it to launch in full-screen mode'
        ],
        callout: { type: 'tip', text: 'If you see an "Install" banner at the bottom of the screen when visiting app.clienter.co.in, you can tap it directly to install without going through the menu.' }
      },
      {
        id: 'ios-install',
        heading: 'Install on iOS (Safari)',
        level: 2,
        content: 'On iOS, PWAs must be installed through Safari. Other browsers like Chrome on iOS do not support PWA installation due to Apple\'s platform restrictions.',
        steps: [
          'Open Safari on your iPhone or iPad',
          'Navigate to app.clienter.co.in and log in to your account',
          'Tap the Share button (the square with an upward arrow) at the bottom of the screen',
          'Scroll down in the share sheet and tap "Add to Home Screen"',
          'Edit the name if desired and tap "Add" in the top-right corner',
          'Clienter now appears on your home screen — tap it to launch in full-screen mode'
        ],
        callout: { type: 'warning', text: 'You must use Safari on iOS. Chrome, Firefox, and other browsers on iOS cannot install PWAs. This is an Apple platform limitation, not a Clienter limitation.' }
      },
      {
        id: 'updating',
        heading: 'Updating the PWA',
        level: 2,
        content: 'The Clienter PWA updates automatically. When we deploy a new version, your installed app fetches the update in the background the next time you open it. There is no manual update process. If you ever need to force an update, you can uninstall and reinstall the PWA from your browser.'
      },
      {
        id: 'uninstalling',
        heading: 'Uninstalling',
        level: 2,
        content: 'To uninstall the Clienter PWA, simply remove it from your home screen the same way you would uninstall any app. On Android, long-press the icon and drag to "Uninstall" or select "Uninstall" from the menu. On iOS, long-press the icon, tap "Remove App," and confirm. Your account data is not affected — you can reinstall at any time.'
      }
    ],
    faqs: [
      { q: 'Why can\'t I install from Chrome on iOS?', a: 'Apple requires all browsers on iOS to use the Safari WebKit engine, but only Safari itself supports the "Add to Home Screen" PWA feature. This is an Apple platform restriction.' },
      { q: 'Does the PWA take up space like a regular app?', a: 'The PWA is much smaller than a typical native app — usually under 50 MB including cached data.' },
      { q: 'Will I lose my data if I uninstall the PWA?', a: 'No. Your data is stored on the server. Uninstalling the PWA only removes the local app. Reinstall anytime and log back in.' }
    ],
    relatedLinks: [
      { title: 'Mobile Overview', href: '/docs/mobile' },
      { title: 'Mobile Navigation', href: '/docs/mobile/navigation' },
      { title: 'Responsive Design', href: '/docs/mobile/responsive' }
    ]
  },

  'mobile/navigation': {
    slug: 'mobile/navigation',
    title: 'Mobile Navigation & Gestures',
    metaTitle: 'Mobile Navigation & Gestures — Clienter PWA',
    metaDescription: 'Learn how to navigate Clienter on mobile. Bottom tab bar, swipe gestures, pull-to-refresh, and quick actions for efficient mobile workflow management.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Mobile', href: '/docs/mobile' },
      { label: 'Navigation', href: '/docs/mobile/navigation' }
    ],
    sections: [
      {
        id: 'nav-overview',
        heading: 'Navigating Clienter on Mobile',
        level: 2,
        content: 'Clienter\'s mobile interface is designed for one-handed use. The primary navigation uses a bottom tab bar that gives you quick access to the main sections: Dashboard, Clients, Projects, Invoices, and More. The "More" tab opens a menu with access to settings, vault, marketplace, and other features.'
      },
      {
        id: 'bottom-tabs',
        heading: 'Bottom Tab Bar',
        level: 2,
        content: 'The bottom tab bar is always visible and provides instant access to the five most-used areas of Clienter. Tapping a tab takes you to that section. Tapping the same tab again scrolls you to the top of that section. A badge on a tab indicates unread items or pending actions.',
        steps: [
          'Dashboard: overview of your workspace activity, recent items, and key metrics',
          'Clients: your client list with search, filters, and quick-add',
          'Projects: active projects with status indicators and deadlines',
          'Invoices: invoice list with payment status and quick actions',
          'More: settings, vault, marketplace, partner program, support, and account'
        ]
      },
      {
        id: 'gestures',
        heading: 'Supported Gestures',
        level: 2,
        content: 'Clienter supports standard mobile gestures to speed up common actions.',
        steps: [
          'Pull down to refresh the current page',
          'Swipe left on a list item to reveal quick actions (archive, delete, edit)',
          'Swipe right from the left edge to open the sidebar on pages that have one',
          'Long-press on an item to enter multi-select mode for bulk actions',
          'Pinch to zoom on images, invoices, and documents'
        ],
        callout: { type: 'tip', text: 'Swipe actions on list items are contextual — the available actions change depending on whether you are in Clients, Projects, or Invoices.' }
      },
      {
        id: 'search',
        heading: 'Global Search on Mobile',
        level: 2,
        content: 'Tap the search icon at the top of any page to open global search. Search across clients, projects, invoices, and documents from a single search bar. Results are grouped by type and show the most relevant matches first. Recent searches are saved for quick access.'
      }
    ],
    faqs: [
      { q: 'Can I customize the bottom tab bar?', a: 'Not currently. The bottom tabs show the five most-used sections. All other sections are accessible from the More tab.' },
      { q: 'Do gestures work on all devices?', a: 'Swipe and pull gestures work on all touch devices. Some gestures may behave differently on iOS vs Android due to platform differences.' }
    ],
    relatedLinks: [
      { title: 'Mobile Overview', href: '/docs/mobile' },
      { title: 'Installing Clienter', href: '/docs/mobile/install' },
      { title: 'Responsive Design', href: '/docs/mobile/responsive' }
    ]
  },

  'mobile/responsive': {
    slug: 'mobile/responsive',
    title: 'Responsive Design',
    metaTitle: 'Responsive Design — Clienter on Every Screen Size',
    metaDescription: 'Clienter adapts to phones, tablets, and desktops with a responsive layout. Learn how the interface adjusts and what features are optimized for each screen size.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Mobile', href: '/docs/mobile' },
      { label: 'Responsive', href: '/docs/mobile/responsive' }
    ],
    sections: [
      {
        id: 'responsive-overview',
        heading: 'One App, Every Screen',
        level: 2,
        content: 'Clienter uses a responsive design that adapts to your screen size. Whether you are on a phone, tablet, or desktop monitor, the interface rearranges itself to make the best use of available space. There is no separate "mobile version" — it is the same app with the same features, intelligently reflowed for your screen.'
      },
      {
        id: 'breakpoints',
        heading: 'Layout Breakpoints',
        level: 2,
        content: 'The interface adjusts at three main breakpoints to provide the best experience for each device category.',
        steps: [
          'Mobile (under 768px): single-column layout, bottom tab navigation, collapsible sections, full-width cards',
          'Tablet (768px to 1024px): two-column layout on key pages, sidebar accessible via swipe or hamburger menu, split views for list-detail pages',
          'Desktop (above 1024px): full sidebar visible, multi-column layouts, expanded data tables, hover-based interactions'
        ]
      },
      {
        id: 'adaptive-components',
        heading: 'Adaptive Components',
        level: 2,
        content: 'Key components adapt their behavior based on screen size. Data tables switch to card views on mobile. Modals become full-screen sheets on small screens. Multi-step forms use a step-by-step wizard on mobile versus a single scrollable form on desktop. Charts simplify their legends and labels on smaller screens to remain readable.',
        callout: { type: 'info', text: 'All features are available on all screen sizes. Nothing is hidden or removed on mobile — layout and interaction patterns change, but functionality stays complete.' }
      },
      {
        id: 'touch-targets',
        heading: 'Touch-Friendly Design',
        level: 2,
        content: 'On touch devices, Clienter increases the size of interactive elements to meet accessibility guidelines. Buttons, links, and form controls have a minimum touch target of 44x44 pixels. Spacing between interactive elements prevents accidental taps. Dropdown menus are replaced with bottom sheets on mobile for easier thumb reach.'
      },
      {
        id: 'performance',
        heading: 'Mobile Performance',
        level: 2,
        content: 'Clienter is optimized for mobile networks. Images are lazy-loaded and served in modern formats. JavaScript bundles are code-split so you only download what you need for the current page. Service worker caching ensures repeat visits load almost instantly, even on slow connections.',
        callout: { type: 'tip', text: 'If you experience slow loading on mobile, check your network connection. Clienter\'s service worker will cache resources after the first load, making subsequent visits much faster.' }
      }
    ],
    faqs: [
      { q: 'Is any feature missing on mobile?', a: 'No. All features are available on all screen sizes. Some features like bulk CSV exports are more comfortable on desktop but fully functional on mobile.' },
      { q: 'Does Clienter support tablets?', a: 'Yes. The tablet layout uses a two-column design with a collapsible sidebar, optimized for the larger screen.' }
    ],
    relatedLinks: [
      { title: 'Mobile Overview', href: '/docs/mobile' },
      { title: 'Installing Clienter', href: '/docs/mobile/install' },
      { title: 'Mobile Navigation', href: '/docs/mobile/navigation' }
    ]
  },

  // ─── AGENCY WORKFLOWS ──────────────────────────────────────────────────

  'agency-workflows': {
    slug: 'agency-workflows',
    title: 'Agency Workflows',
    metaTitle: 'Agency Workflows — Clienter for Agencies & Freelancers',
    metaDescription: 'Streamline your agency operations with Clienter workflows. Client onboarding, project delivery, handoff, and case study management in one platform.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Agency Workflows', href: '/docs/agency-workflows' }
    ],
    sections: [
      {
        id: 'workflows-overview',
        heading: 'Workflows Built for Agencies',
        level: 2,
        content: 'Clienter is designed around the workflows agencies and freelancers actually use. From the first client inquiry to the final project handoff, Clienter provides structured workflows that reduce manual work, standardize your processes, and create a professional experience for your clients. These workflows are flexible — use them as templates and adapt them to your team\'s way of working.'
      },
      {
        id: 'workflow-types',
        heading: 'Core Workflows',
        level: 2,
        content: 'Clienter includes three core workflow categories that cover the client lifecycle from start to finish.',
        steps: [
          'Client Onboarding: discovery forms, welcome pages, and share pages to bring new clients into your workspace professionally',
          'Project Delivery: structured project phases, milestone tracking, deliverable management, and client approvals',
          'Case Studies & Portfolio: turn completed projects into portfolio pieces with client testimonials and project summaries'
        ]
      },
      {
        id: 'customization',
        heading: 'Customizing Workflows',
        level: 2,
        content: 'Each workflow can be customized to match your agency\'s process. You can rename stages, add or remove steps, set default templates, and configure automated notifications. Workflow templates are workspace-level settings, so all team members use the same standardized process.',
        callout: { type: 'tip', text: 'Start with the default workflows and customize them after you have completed a few projects. This helps you understand what works before investing time in customization.' }
      },
      {
        id: 'automation',
        heading: 'Workflow Automation',
        level: 2,
        content: 'Certain workflow steps can be automated to save time. Automatic welcome emails when a new client is onboarded, status notifications when project milestones are completed, and payment reminders for overdue invoices are all configurable in your workspace settings.',
        planBadge: 'Pro'
      }
    ],
    faqs: [
      { q: 'Can I create custom workflows?', a: 'You can customize the built-in workflows by adding, removing, or reordering steps. Fully custom workflow creation from scratch is on the roadmap.' },
      { q: 'Do workflows work on the free plan?', a: 'Basic workflows are available on all plans. Advanced automation and workflow customization require Pro or Ultra.' }
    ],
    relatedLinks: [
      { title: 'Client Onboarding', href: '/docs/agency-workflows/onboarding' },
      { title: 'Project Delivery', href: '/docs/agency-workflows/delivery' },
      { title: 'Case Studies', href: '/docs/agency-workflows/case-studies' }
    ]
  },

  'agency-workflows/onboarding': {
    slug: 'agency-workflows/onboarding',
    title: 'Client Onboarding',
    metaTitle: 'Client Onboarding Workflow — Discovery Form, Welcome Page & Share Page',
    metaDescription: 'Onboard new clients professionally with Clienter. Use discovery forms to gather requirements, welcome pages to introduce your process, and share pages for deliverables.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Agency Workflows', href: '/docs/agency-workflows' },
      { label: 'Onboarding', href: '/docs/agency-workflows/onboarding' }
    ],
    sections: [
      {
        id: 'onboarding-overview',
        heading: 'The Onboarding Workflow',
        level: 2,
        content: 'Client onboarding is the first impression your agency makes. Clienter\'s onboarding workflow gives you three tools to make it seamless: a discovery form to collect project requirements, a welcome page to introduce your agency and process, and a share page where clients can access their project details and deliverables. Together, these create a structured, professional onboarding experience that sets the right expectations.'
      },
      {
        id: 'discovery-form',
        heading: 'Discovery Form',
        level: 2,
        content: 'The discovery form is a customizable questionnaire you send to new clients to gather project requirements before kickoff. It replaces the back-and-forth emails that typically slow down the onboarding process. You define the questions, field types, and required fields. Responses are saved directly to the client\'s profile in your workspace.',
        steps: [
          'Go to Workflows in your workspace settings and open "Discovery Form"',
          'Customize the form fields: add text fields, dropdowns, file uploads, date pickers, and more',
          'Set which fields are required and which are optional',
          'Copy the form link or embed it in your welcome email',
          'When the client submits the form, their responses appear in the client profile'
        ],
        callout: { type: 'tip', text: 'Create different discovery form templates for different service types. A web design project needs different information than an SEO audit.' }
      },
      {
        id: 'welcome-page',
        heading: 'Welcome Page',
        level: 2,
        content: 'The welcome page is a branded landing page that introduces your agency to new clients. It can include your team introduction, the project timeline, communication guidelines, and links to the discovery form and other resources. Each client gets a unique welcome page URL they can bookmark and revisit.',
        steps: [
          'Navigate to a client profile and click "Create Welcome Page"',
          'Choose a template or start from scratch',
          'Add your agency intro, project timeline, team contacts, and expectations',
          'Include links to the discovery form, your calendar for scheduling calls, and your communication channels',
          'Share the welcome page link with your client via email or messaging'
        ],
        planBadge: 'Pro'
      },
      {
        id: 'share-page',
        heading: 'Share Page',
        level: 2,
        content: 'The share page is a client-facing portal where you can share project files, updates, and deliverables with your client. Unlike the welcome page (which is static), the share page updates dynamically as you add new items. Clients can view shared files, leave comments, and approve deliverables — all without needing a Clienter account.',
        callout: { type: 'info', text: 'Share pages are accessible via a unique link. Clients do not need a Clienter account to view shared content, approve deliverables, or leave comments.' }
      },
      {
        id: 'onboarding-automation',
        heading: 'Automating Onboarding',
        level: 2,
        content: 'On Pro and Ultra plans, you can automate parts of the onboarding flow. When you create a new client, Clienter can automatically send a welcome email with the discovery form link, create the welcome page from a template, and set up the share page. This turns a multi-step manual process into a one-click action.',
        planBadge: 'Pro',
        callout: { type: 'tip', text: 'Set up your onboarding automation once and every new client gets a consistent, professional experience. Go to Workflows and enable "Auto-onboarding" to get started.' }
      }
    ],
    faqs: [
      { q: 'Do clients need a Clienter account to fill out the discovery form?', a: 'No. The discovery form is a public link that anyone can fill out without an account.' },
      { q: 'Can I customize the welcome page branding?', a: 'Yes. Welcome pages use your workspace branding (logo, colors, fonts). Pro and Ultra plans allow full design customization.' },
      { q: 'How many discovery form templates can I create?', a: 'Free plan allows one template. Pro allows five templates. Ultra allows unlimited templates.' }
    ],
    relatedLinks: [
      { title: 'Agency Workflows Overview', href: '/docs/agency-workflows' },
      { title: 'Project Delivery', href: '/docs/agency-workflows/delivery' },
      { title: 'Case Studies', href: '/docs/agency-workflows/case-studies' },
      { title: 'Marketplace Profile', href: '/docs/marketplace/profile' }
    ]
  },

  'agency-workflows/delivery': {
    slug: 'agency-workflows/delivery',
    title: 'Project Delivery & Handoff',
    metaTitle: 'Project Delivery & Handoff — Clienter Agency Workflows',
    metaDescription: 'Deliver projects professionally with Clienter. Track milestones, manage deliverables, get client approvals, and create structured handoff packages.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Agency Workflows', href: '/docs/agency-workflows' },
      { label: 'Delivery', href: '/docs/agency-workflows/delivery' }
    ],
    sections: [
      {
        id: 'delivery-overview',
        heading: 'Structured Project Delivery',
        level: 2,
        content: 'The delivery workflow helps you manage the process from project kickoff to final handoff. Instead of ad-hoc file sharing and scattered communication, Clienter provides a structured approach with milestones, deliverable tracking, client review and approval, and a final handoff package. This ensures nothing falls through the cracks and creates a clear record of what was delivered.'
      },
      {
        id: 'milestones',
        heading: 'Milestone Tracking',
        level: 2,
        content: 'Break your project into milestones with clear deadlines and deliverables. Each milestone can have multiple deliverable items, a due date, and a status (not started, in progress, review, approved). When a milestone is complete and approved by the client, it locks and becomes part of the project record.',
        steps: [
          'Open the project and navigate to the "Milestones" tab',
          'Click "Add Milestone" and enter a name, description, and due date',
          'Add deliverable items to each milestone (files, links, or descriptions)',
          'Update the status as you work through each deliverable',
          'Submit the milestone for client review when all deliverables are ready'
        ]
      },
      {
        id: 'client-approvals',
        heading: 'Client Reviews & Approvals',
        level: 2,
        content: 'When a milestone or deliverable is ready for client review, share it to the client\'s share page with a request for approval. The client receives an email notification and can review the deliverable, leave comments, and approve or request revisions — all from the share page without needing a Clienter account.',
        callout: { type: 'info', text: 'Client approvals are timestamped and logged. This creates a clear record of what the client reviewed and approved, which is valuable if questions arise later.' }
      },
      {
        id: 'handoff-package',
        heading: 'Creating a Handoff Package',
        level: 2,
        content: 'When the project is complete, create a handoff package that bundles all deliverables, documentation, credentials, and notes into a single organized package. The handoff package is shared with the client via their share page and serves as the definitive record of everything delivered.',
        steps: [
          'Navigate to the project and click "Create Handoff Package"',
          'Review the automatically included items (all approved milestones and deliverables)',
          'Add any additional documentation, training materials, or notes',
          'Include credentials securely via the encrypted vault sharing feature',
          'Publish the handoff package to the client\'s share page',
          'Mark the project as delivered'
        ],
        planBadge: 'Pro',
        callout: { type: 'tip', text: 'Include a brief maintenance guide or FAQ in your handoff package. Clients appreciate knowing how to manage what you have built for them.' }
      },
      {
        id: 'post-delivery',
        heading: 'Post-Delivery Actions',
        level: 2,
        content: 'After delivery, Clienter helps you close the loop. The post-delivery flow prompts you to send the final invoice (if not already sent), request a review for your marketplace profile, and optionally create a case study from the project. These actions ensure you capture the full value from every completed project.'
      }
    ],
    faqs: [
      { q: 'Can clients request revisions through Clienter?', a: 'Yes. When reviewing a deliverable, clients can leave comments requesting changes. The deliverable status updates to "Revision Requested" and you are notified.' },
      { q: 'Are handoff packages downloadable?', a: 'Yes. Clients can download the entire handoff package as a ZIP file from the share page.' },
      { q: 'What happens to project files after delivery?', a: 'Files remain in your workspace indefinitely. You can archive completed projects to keep your workspace organized without losing data.' }
    ],
    relatedLinks: [
      { title: 'Agency Workflows Overview', href: '/docs/agency-workflows' },
      { title: 'Client Onboarding', href: '/docs/agency-workflows/onboarding' },
      { title: 'Case Studies', href: '/docs/agency-workflows/case-studies' },
      { title: 'Reviews & Trust Scoring', href: '/docs/marketplace/reviews' }
    ]
  },

  'agency-workflows/case-studies': {
    slug: 'agency-workflows/case-studies',
    title: 'Case Studies & Portfolio',
    metaTitle: 'Case Studies & Portfolio — Clienter Agency Workflows',
    metaDescription: 'Turn completed projects into compelling case studies and portfolio pieces. Showcase your work on the Clienter marketplace to attract new clients.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Agency Workflows', href: '/docs/agency-workflows' },
      { label: 'Case Studies', href: '/docs/agency-workflows/case-studies' }
    ],
    sections: [
      {
        id: 'case-studies-overview',
        heading: 'From Projects to Portfolio',
        level: 2,
        content: 'Every completed project is an opportunity to build your portfolio. Clienter makes it easy to turn delivered projects into case studies that showcase your skills, process, and results. Case studies appear on your marketplace profile and can be shared independently via a direct link. They serve as powerful social proof when potential clients are evaluating your services.'
      },
      {
        id: 'creating-case-study',
        heading: 'Creating a Case Study',
        level: 2,
        content: 'You can create a case study from any completed project. Clienter pre-fills the case study template with project details from your workspace — services delivered, timeline, deliverables, and client information (with their permission). You then add the narrative: the challenge, your approach, and the results.',
        steps: [
          'Open a completed project and click "Create Case Study"',
          'Review the pre-filled project details and adjust as needed',
          'Write the Challenge section: what problem the client came to you with',
          'Write the Approach section: how you tackled the project and what tools/methods you used',
          'Write the Results section: measurable outcomes and client satisfaction',
          'Add images, screenshots, or before/after comparisons',
          'Request client approval if you are using their name or brand'
        ],
        callout: { type: 'tip', text: 'The best case studies include specific, measurable results. "Increased organic traffic by 140% in 6 months" is more compelling than "improved SEO performance."' }
      },
      {
        id: 'client-permission',
        heading: 'Client Permission & Privacy',
        level: 2,
        content: 'Before publishing a case study that names your client or shows their proprietary work, you should obtain their permission. Clienter includes a built-in permission request that you can send to the client via email. The client can approve, request modifications, or decline. You can also create anonymous case studies that describe the project without naming the client.',
        callout: { type: 'warning', text: 'Never publish a case study with client-identifying information without their explicit permission. Use the built-in permission request flow to get documented approval.' }
      },
      {
        id: 'publishing',
        heading: 'Publishing & Sharing',
        level: 2,
        content: 'Published case studies appear on your marketplace profile under the Portfolio section. Each case study also gets its own shareable URL that you can use in proposals, emails, or social media. You can feature up to three case studies at the top of your profile — choose the ones most relevant to the clients you want to attract.',
        steps: [
          'Review the case study preview to see how it will appear on your profile',
          'Click "Publish" to make it live on your marketplace profile',
          'Copy the direct link to share it in proposals or on social media',
          'Optionally feature it on your profile by clicking the star icon',
          'Update the case study anytime — changes go live immediately'
        ]
      },
      {
        id: 'case-study-templates',
        heading: 'Case Study Templates',
        level: 2,
        content: 'Clienter provides case study templates tailored to different service types — web development, branding, marketing campaigns, and more. Templates include suggested sections and prompts to help you write compelling narratives. You can also create your own templates that match your agency\'s style.',
        planBadge: 'Pro'
      }
    ],
    faqs: [
      { q: 'How many case studies can I publish?', a: 'Free plan allows up to 3 case studies. Pro allows 10. Ultra allows unlimited case studies.' },
      { q: 'Can I create a case study from a project I did outside Clienter?', a: 'Yes. You can create a case study from scratch without linking it to a Clienter project. Manually enter the project details and upload your own images.' },
      { q: 'Do case studies help with marketplace ranking?', a: 'Yes. Profiles with published case studies rank higher in the directory because they demonstrate real work and results.' }
    ],
    relatedLinks: [
      { title: 'Agency Workflows Overview', href: '/docs/agency-workflows' },
      { title: 'Marketplace Profile', href: '/docs/marketplace/profile' },
      { title: 'Client Onboarding', href: '/docs/agency-workflows/onboarding' },
      { title: 'Project Delivery', href: '/docs/agency-workflows/delivery' }
    ]
  }
}
