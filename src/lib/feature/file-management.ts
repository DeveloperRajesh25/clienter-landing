import { FolderKanban, Link2, Lock, FolderOpen } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const FILE_MANAGEMENT: FeaturePageConfig = {
  slug: 'file-management',
  path: '/features/file-management',
  navLabel: 'File Management',
  navDescription: 'Store files by project, client & organisation, next to the work',
  icon: FolderKanban,
  metaTitle: 'Project & Client File Management for Agencies',
  metaDescription:
    'Store files by project, client, and organisation in Clienter. Each level gets its own quota, files open through secure signed links, and everything sits next to the work.',
  keywords: [
    'project file management',
    'client file storage',
    'file management software',
    'share files with clients',
    'document storage for agencies',
    'project files',
  ],
  eyebrow: 'File Management',
  h1: 'Keep every file beside the work it belongs',
  h1Highlight: 'to',
  subheading:
    'Store files at the project, client, and organisation level — each with its own quota — and open them through secure signed links, so documents live next to the work instead of in a separate drive.',
  intro: {
    heading: 'What is file management in Clienter?',
    body: [
      'File management lets you store documents at three levels: on a project, on a client, or across the whole organisation. A contract sits on the client, the design files sit on the project, and your shared templates sit at the organisation level — each level with its own storage quota so you always know where space is going.',
      'The point is that files live next to the work they belong to, not off in a separate drive you have to go hunting through. Open a project and its files are right there; open a client and theirs are too. Every file opens through a secure signed link that expires, so sharing is safe by default and nothing leaks through a stale URL.',
    ],
  },
  stepsHeading: 'How to use file management',
  steps: [
    { title: 'Pick the level', desc: 'Decide whether a file belongs to a project, a single client, or the whole organisation.' },
    { title: 'Upload it there', desc: 'Drop the file in and it’s stored against that project, client, or organisation automatically.' },
    { title: 'Find it in context', desc: 'Open the project or client and its files are right there — no separate drive to dig through.' },
    { title: 'Share securely', desc: 'Files open through signed links that expire, so what you send stays private by default.' },
  ],
  helpsHeading: 'How file management helps you',
  helps: [
    { icon: FolderOpen, title: 'Files where you expect them', desc: 'Documents sit beside the project or client they belong to, so nothing is ever a hunt.' },
    { icon: Lock, title: 'Safe by default', desc: 'Signed links expire, so a file you shared last month can’t be reopened by a stale URL.' },
    { icon: Link2, title: 'One less tool', desc: 'Your files live with your clients, invoices, and projects — not scattered across a separate drive.' },
    { icon: FolderKanban, title: 'Quotas you can read', desc: 'Per-level storage limits make it clear where space is going and which clients are heavy.' },
  ],
  whereHeading: 'Where file management fits',
  where: [
    { title: 'Document-heavy work', desc: 'Contracts, briefs, and deliverables that need to stay with the right client and project.' },
    { title: 'Agencies with many clients', desc: 'Files for dozens of accounts that have to stay organised and easy to find.' },
    { title: 'Teams sharing with clients', desc: 'Work that clients need to open safely, without files leaking through forwarded links.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Project, client & organisation-level storage',
    'A storage quota at each level',
    'Files stored next to the related work',
    'Secure, expiring signed links',
    'Easy sharing with clients',
    'Free on every plan',
  ],
  faqHeading: 'File management FAQs',
  faqs: [
    { q: 'Can I store files at different levels?', a: 'Yes. A file can live on a specific project, on a client, or across the whole organisation — each level with its own storage quota — so documents sit exactly where they belong.' },
    { q: 'Are shared files secure?', a: 'Yes. Files open through signed links that expire, so what you share stays private and a stale URL can’t be used to reopen a document later.' },
    { q: 'Is file management free?', a: 'Yes. File management is free on every plan, including Free. Plans differ only on how much storage you get, never on access to the feature itself.' },
  ],
  ctaTitle: 'Give every file a proper home',
  ctaSubtitle: 'Start free and keep your files beside the work they belong to. No credit card required.',
}
