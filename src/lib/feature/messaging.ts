import { MessageCircle, Paperclip, Zap, Target } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const MESSAGING: FeaturePageConfig = {
  slug: 'messaging',
  path: '/features/messaging',
  navLabel: 'Team Chat & Messaging',
  navDescription: 'Real-time chat, group threads & file sharing by the work',
  icon: MessageCircle,
  metaTitle: 'Free Team Chat & Messaging for Agencies',
  metaDescription:
    'How messaging works in Clienter: real-time direct messages, group chats, and file sharing built into the workspace — so talk sits next to the projects it’s about.',
  keywords: [
    'free team chat',
    'team messaging',
    'agency team chat',
    'internal chat tool',
    'group chat for teams',
    'file sharing chat',
  ],
  eyebrow: 'Team Chat & Messaging',
  h1: 'Keep the conversation next to the',
  h1Highlight: 'work',
  subheading:
    'Real-time direct messages, group chats, and file sharing built right into your workspace — so talking about a project doesn’t mean leaving for a separate app you pay for.',
  intro: {
    heading: 'What is messaging in Clienter?',
    body: [
      'Messaging is real-time team chat built into the same workspace where your projects, clients, and tasks already live. Send a direct message to one teammate, spin up a group chat for a project, and share files straight in the conversation — all without opening a separate tool. The people you message are the same people already in your workspace, so there’s no second set of accounts to manage.',
      'The point is that the talk sits beside the work it’s about, not in a disconnected app on another tab. A question about a task, a file a designer needs, a quick “is this approved?” — it all happens where the project is, so decisions don’t get stranded in a chat tool nobody links back to. And it’s part of the workspace you already have, so it’s one less subscription to carry.',
    ],
  },
  stepsHeading: 'How to use messaging',
  steps: [
    { title: 'Open a conversation', desc: 'Start a direct message with any teammate already in your workspace — no new invites to send.' },
    { title: 'Create a group chat', desc: 'Spin up a group thread for a project or team so the right people are talking in one place.' },
    { title: 'Share files in chat', desc: 'Drop a file straight into the conversation so the thing being discussed is right there with the talk.' },
    { title: 'Keep it by the work', desc: 'Chat beside the projects and tasks it’s about, so context is a glance away, not another tab.' },
  ],
  helpsHeading: 'How messaging helps you',
  helps: [
    { icon: Zap, title: 'One less app to pay for', desc: 'Chat is part of the workspace you already have, so there’s no separate messaging subscription to carry.' },
    { icon: Target, title: 'Talk by the work', desc: 'Conversation sits next to the projects it’s about, so decisions don’t get stranded in a disconnected tool.' },
    { icon: Paperclip, title: 'Files where they’re needed', desc: 'Share a file in the thread that’s discussing it, instead of digging it out of email later.' },
    { icon: MessageCircle, title: 'Everyone already here', desc: 'You message the same teammates who are in your workspace — no second set of accounts to manage.' },
  ],
  whereHeading: 'Where messaging fits',
  where: [
    { title: 'Remote agencies', desc: 'A team spread across places that needs quick back-and-forth without paying for yet another chat tool.' },
    { title: 'Project-based teams', desc: 'Groups that want a thread per project so talk stays tied to the work it belongs to.' },
    { title: 'File-heavy collaboration', desc: 'Designers and writers passing files back and forth who want them shared right in the conversation.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Real-time direct messages',
    'Group chats for projects or teams',
    'File sharing inside chat',
    'Everyone in your workspace, already connected',
    'Conversation beside your projects & tasks',
    'Free on every plan',
  ],
  faqHeading: 'Messaging FAQs',
  faqs: [
    { q: 'Do I need a separate chat app?', a: 'No. Messaging is built into Clienter, so your team chats in the same workspace as your projects, clients, and tasks — one less subscription and no tab-switching to talk about the work.' },
    { q: 'Can I share files in chat?', a: 'Yes. Drop files straight into a direct message or group chat, so the file being discussed sits right next to the conversation about it instead of buried in email.' },
    { q: 'Who can I message?', a: 'Anyone in your workspace. The teammates you add through Team Management are the same people you can message directly or pull into a group chat, so there’s no separate contact list to maintain. It’s free on every plan.' },
  ],
  ctaTitle: 'Bring your team’s chat next to the work',
  ctaSubtitle: 'Start free and message your team where the projects already live. No credit card required.',
}
