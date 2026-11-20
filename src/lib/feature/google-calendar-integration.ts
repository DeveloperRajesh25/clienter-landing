import { CalendarClock, Video, Bell, RefreshCw } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const GOOGLE_CALENDAR_INTEGRATION: FeaturePageConfig = {
  slug: 'google-calendar-integration',
  path: '/features/google-calendar-integration',
  navLabel: 'Google Calendar',
  navDescription: 'Sync meetings to Google Calendar with auto Google Meet links',
  icon: CalendarClock,
  metaTitle: 'Google Calendar & Meet Integration — Sync Every Meeting',
  metaDescription:
    'Sync Clienter meetings to Google Calendar, auto-generate a Google Meet link for each call, and get reminders so client meetings never slip — tied to the right client.',
  keywords: [
    'google calendar integration',
    'google meet integration',
    'sync meetings',
    'meeting scheduler',
    'calendar sync for agencies',
    'auto meet links',
  ],
  eyebrow: 'Google Calendar Integration',
  h1: 'Every client meeting on your calendar, with a Meet link',
  h1Highlight: 'ready',
  subheading:
    'Schedule a meeting in Clienter and it lands on your Google Calendar with a Google Meet link already attached — plus a reminder so a client call never quietly slips.',
  intro: {
    heading: 'What is the Google Calendar integration?',
    body: [
      'The Google Calendar integration keeps the meetings you book in Clienter and the calendar you actually live in perfectly in step. Schedule a call for a client and Clienter writes it to your Google Calendar, generates a Google Meet link for it, and puts a reminder on it — so you’re not copying details between two apps or hunting for a video link five minutes before the call.',
      'Each meeting is connected to the client it’s with, so when you open that client you see every call you’ve had and the next one coming up. The Meet link, the time, and the attendees all travel together, and the reminder reaches you wherever your Google Calendar already does — on your phone, in your inbox, on your watch.',
    ],
  },
  stepsHeading: 'How to use the Google Calendar integration',
  steps: [
    { title: 'Connect Google', desc: 'Link your Google account once from settings so Clienter can write meetings to your calendar.' },
    { title: 'Schedule a meeting', desc: 'Book a call against a client, set the time, and add who’s attending — all inside Clienter.' },
    { title: 'Get the Meet link', desc: 'A Google Meet link is generated and attached automatically, ready to share with the client.' },
    { title: 'Show up on time', desc: 'The meeting lands on your Google Calendar with a reminder, so nothing slips past you.' },
  ],
  helpsHeading: 'How the integration helps you',
  helps: [
    { icon: Video, title: 'A Meet link, every time', desc: 'No scrambling to create a video call — each meeting comes with its Google Meet link attached.' },
    { icon: Bell, title: 'Never miss a call', desc: 'Reminders reach you through Google Calendar, so a client meeting never quietly slips by.' },
    { icon: RefreshCw, title: 'One calendar, always current', desc: 'Book in Clienter and it’s on your Google Calendar — no double entry, no conflicting times.' },
    { icon: CalendarClock, title: 'Meetings in client context', desc: 'Every call is tied to its client, so your history and next meeting sit right on their profile.' },
  ],
  whereHeading: 'Where the integration fits',
  where: [
    { title: 'Freelancers on back-to-back calls', desc: 'Running client meetings all week who need each one on the calendar they already check.' },
    { title: 'Agencies scheduling as a team', desc: 'Booking calls for different clients that all need Meet links and reminders without manual setup.' },
    { title: 'Remote, call-heavy work', desc: 'Businesses that live on video and want a Meet link ready for every meeting automatically.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Two-way Google Calendar sync',
    'Auto-generated Google Meet links',
    'Reminders on every meeting',
    'Meetings linked to their client',
    'Attendees and time carried across',
    'Connect your Google account once',
  ],
  faqHeading: 'Google Calendar integration FAQs',
  faqs: [
    { q: 'Does every meeting get a Google Meet link?', a: 'Yes. When you schedule a meeting in Clienter, a Google Meet link is generated and attached automatically, so it’s ready to share the moment the call is booked.' },
    { q: 'Are meetings tied to the client?', a: 'Yes. Each meeting connects to the client it’s with, so opening that client shows the calls you’ve had and the next one coming up — all in one place.' },
    { q: 'Is the Google Calendar integration free?', a: 'Yes — it’s free on every plan. You connect your Google account once, and any limits only ever apply to volume, never to syncing your meetings or creating Meet links.' },
  ],
  ctaTitle: 'Put every client call on your calendar',
  ctaSubtitle: 'Start free and sync your first meeting with a Meet link in minutes. No credit card required.',
}
