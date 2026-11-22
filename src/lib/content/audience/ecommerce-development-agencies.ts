import {
  Users,
  FolderKanban,
  ListChecks,
  UserCog,
  ReceiptText,
  RefreshCw,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const ECOMMERCE_DEVELOPMENT_AGENCIES: AudiencePageConfig = {
  slug: 'ecommerce-development-agencies',
  path: '/for/ecommerce-development-agencies',
  audience: 'Ecommerce development agencies',
  metaTitle: 'Ecommerce Development Agency CRM & Project Software',
  metaDescription:
    'Run store builds, migrations and growth retainers in one workspace — pipeline, project boards, launch checklists, milestone invoicing, team roles and client portals. Free to start.',
  keywords: [
    'ecommerce development agency CRM',
    'ecommerce agency management software',
    'project management for ecommerce agencies',
    'store build project tracking',
    'ecommerce migration project management',
    'client portal for ecommerce clients',
    'Shopify agency CRM',
    'WooCommerce agency software',
    'ecommerce retainer billing software',
    'manage ecommerce clients and projects',
  ],
  ogTitle: 'Ecommerce Development Agency CRM & Project Software — Clienter',
  ogDescription:
    'Store builds, migrations, growth retainers, your team and your billing in one workspace — with launch checklists and a portal for every merchant.',
  breadcrumbLabel: 'For Ecommerce Development Agencies',
  eyebrow: 'For ecommerce development agencies',
  h1: 'Store builds, migrations and growth retainers in',
  h1Highlight: 'one workspace',
  subheading:
    'Three builds, a replatforming project that keeps growing, and six merchants on monthly growth work. Clienter holds the pipeline, the projects, the team, the milestone invoices and a portal for every merchant — so the agency isn’t coordinated out of a spreadsheet.',
  intro: {
    heading: 'Ecommerce projects punish loose coordination',
    body: [
      'Store projects are unusually unforgiving. A missed redirect costs organic revenue. A tax rule configured wrong costs money per order. A launch pushed past a sale weekend costs the merchant their best month, and they will remember who caused it. The work demands more rigour than a general web project, and the admin layer around it usually supplies less.',
      'The data makes it harder. A replatforming project drags in product catalogues, variant structures, customer records, order history, URL maps and payment configuration — most of it supplied by the merchant, late and in the wrong format. Meanwhile your developers, a designer, maybe a data person and a QA pass all need to know what’s blocked without a daily call to find out.',
      'Clienter gives the agency the layer it’s missing: every merchant with their store, their projects, their team and their invoices on one record; builds and migrations on boards with the launch checklist you’ve learned the hard way; milestone invoicing so revenue lands as stages do; and a portal where each merchant can see progress and send what you’re waiting on.',
    ],
  },
  pains: {
    heading: 'Where ecommerce agencies lose margin',
    sub: 'The failure modes that repeat across store builds and replatforms.',
    items: [
      {
        title: 'Merchant data arrives late and messy',
        desc: 'Catalogue exports, variant structures and shipping rules show up a fortnight after they were promised, in a format that needs reworking. The slip is theirs; the overrun lands on your margin.',
      },
      {
        title: 'Migrations whose scope keeps growing',
        desc: 'Redirect maps, legacy order history, a loyalty integration nobody mentioned at quoting. Without a written scope the project absorbs each addition silently.',
      },
      {
        title: 'Launch windows tied to the merchant’s calendar',
        desc: 'Go-live has to miss the sale weekend and land before the season. Scheduling across several builds without one view is guesswork, and guesswork gets escalated.',
      },
      {
        title: 'Milestones completed but not billed',
        desc: 'Design signed off in week three, data migration done in week six, launch in week nine — but invoices raised from a separate app lag the work by weeks and finance the merchant for you.',
      },
      {
        title: 'Growth retainers run like favours',
        desc: 'Post-launch CRO tweaks, app integrations and speed work blur into “just a small change”. With no record of what each retainer absorbed, renewal is a negotiation with no evidence.',
      },
      {
        title: 'The team needs a status call to know status',
        desc: 'Designers, developers and QA each hold part of the picture. Without a shared board, the daily standup exists purely to reassemble information that should already be written down.',
      },
    ],
  },
  workflow: {
    heading: 'A store project from pitch to post-launch growth',
    sub: 'One build moving through the agency while four others run alongside.',
    steps: [
      {
        title: '1. Pipeline the opportunity',
        desc: 'Enquiries, referrals and RFPs become cards carrying platform, budget, timeline and decision-maker, so the team scopes the deals worth scoping.',
      },
      {
        title: '2. Scope and contract the build',
        desc: 'A proposal naming pages, integrations, migration scope, revision rounds and exclusions, signed online, with the deposit invoice raised against the signature.',
      },
      {
        title: '3. Run design, build, data and QA',
        desc: 'Stages and assignees across the whole team, with merchant-side blockers — catalogue, copy, credentials — tracked as explicit items rather than verbal reminders.',
      },
      {
        title: '4. Launch from the checklist that matters',
        desc: 'Redirects verified, taxes and shipping configured, payment gateway live, a real test order placed, analytics and pixels firing — then the milestone invoice goes out the same day.',
      },
      {
        title: '5. Move into a growth retainer',
        desc: 'Recurring invoices for ongoing CRO, integrations and optimisation, with every request logged so renewal conversations start from a record instead of a feeling.',
      },
    ],
  },
  features: {
    heading: 'What an ecommerce agency runs on',
    sub: 'The connective layer between merchants, builds, the team and the money.',
    items: [
      { icon: Users, title: 'Merchant accounts', desc: 'Store, contacts, projects, documents and invoice history on one profile.' },
      { icon: FolderKanban, title: 'Build & migration boards', desc: 'Stages, owners and deadlines for every store, with merchant blockers in the open.' },
      { icon: ListChecks, title: 'Go-live checklists', desc: 'Redirects, tax, shipping, gateway and test orders — the steps that cost money when missed.' },
      { icon: UserCog, title: 'Team & roles', desc: 'Role-based access so designers, developers and QA see their work across projects.' },
      { icon: ReceiptText, title: 'Milestone invoicing', desc: 'Deposit, stage and launch invoices tied to the work, with outstanding amounts per project.' },
      { icon: RefreshCw, title: 'Growth retainers', desc: 'Recurring invoices and tracked request queues for merchants you keep optimising.' },
    ],
  },
  compare: {
    heading: 'A spreadsheet per project vs one agency system',
    sub: 'What changes when pipeline, builds, team and billing share a record.',
    old: [
      'Migration scope negotiated repeatedly in chat',
      'Merchant data delays that quietly become your overrun',
      'Launch steps that vary with whoever is deploying',
      'Milestone invoices raised weeks after the milestone',
      'Retainers renewed with no record of what was delivered',
    ],
    calm: [
      'A signed scope the project is measured against',
      'Blockers logged against the merchant, visible to both sides',
      'One go-live checklist the whole team runs',
      'Invoices raised the day a stage is marked done',
      'Every request logged, so renewal has evidence behind it',
    ],
  },
  pricing: {
    heading: 'Priced for a studio, not per seat',
    body: [
      'Start on Free with 3 clients and 5 projects and the entire feature set — pipeline, proposals, boards, checklists, invoicing, portals. Nothing is locked behind a plan; only the limits change.',
      'A small studio fits Pro at $19/month (₹199 in India) with 20 clients, 40 projects, 5 team members and a branded portal per merchant. An agency running parallel builds and a book of growth retainers takes Ultra at $39/month (₹799 in India) for unlimited clients, projects and team members. Because seats aren’t billed, hiring a developer or onboarding a tenth merchant never changes the software cost.',
    ],
  },
  faqHeading: 'Ecommerce agency FAQs',
  faqs: [
    {
      q: 'What software should an ecommerce development agency run on?',
      a: 'You need four things joined up: a pipeline for new store work, project boards that handle builds and migrations, milestone invoicing tied to those stages, and a client portal so merchants stop asking for status. Running those as four separate tools is the usual setup and the usual source of leakage. Clienter is all four on one client record, free to start.',
    },
    {
      q: 'Can it handle a replatforming or migration project?',
      a: 'Yes. Board stages and checklist items are yours to define, so a migration can track catalogue export, variant mapping, customer and order import, redirect maps, payment reconfiguration and a live test order as real, assignable items — which is exactly where migrations usually go wrong.',
    },
    {
      q: 'How do we bill a store build across milestones?',
      a: 'Raise the deposit against the signed proposal, stage invoices as design and data milestones land, and the balance at go-live. Each invoice is tied to the project it belongs to, so a stage can’t be marked done while its invoice sits unraised in someone’s to-do list.',
    },
    {
      q: 'Do merchants get their own login?',
      a: 'Each merchant gets a branded portal showing their project’s progress, what the build is waiting on from them, and their invoices. It removes most status emails and — because the merchant can see that their own missing catalogue is blocking launch — it tends to make the data arrive faster.',
    },
  ],
  related: [
    { href: '/for/shopify-developers', label: 'For Shopify Developers', desc: 'The same workspace for solo Shopify specialists.' },
    { href: '/for/web-development-agencies', label: 'For Web Development Agencies', desc: 'Website builds at agency scale.' },
    { href: '/features/project-management', label: 'Project Management', desc: 'Boards, stages, checklists and team assignment.' },
    { href: '/blog/website-project-milestone-payments', label: 'Milestone Payments for Web Projects', desc: 'How to split a build fee so cash arrives with the work.' },
  ],
  ctaTitle: 'Give every store build one home',
  ctaSubtitle: 'Create a free account and bring merchants, projects, the team and billing together today.',
}
