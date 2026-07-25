/**
 * The supporting cast.
 *
 * Nova Studio has to sit in a workspace that already has other work in it, or
 * the screens read as a demo account. These are the other clients, leads and
 * projects — named, plausible, and consistent wherever they appear so the same
 * business is visible in every screen.
 */

export const OTHER_LEADS = [
  { name: 'Meera Kulkarni', company: 'Loomcraft', phone: '+91 98450 22190', source: 'Website', tone: 'amber' },
  { name: 'Dev Prakash', company: 'Saffron Foods', phone: '+91 99801 47712', source: 'Referral', tone: 'green' },
  { name: 'Ritu Bajaj', company: 'Kalpa Interiors', phone: '+91 90042 88104', source: 'Ads', tone: 'purple' },
  { name: 'Imran Sheikh', company: 'Northline Cargo', phone: '+91 70455 60318', source: 'Cold Call', tone: 'blue' },
  { name: 'Farah Naqvi', company: 'Anchor Dental', phone: '+91 88266 91043', source: 'Other', tone: 'gray' },
] as const

export const OTHER_CLIENTS = [
  { name: 'Loomcraft', value: '₹45,000' },
  { name: 'Saffron Foods', value: '₹80,000' },
  { name: 'Kalpa Interiors', value: '₹32,000' },
  { name: 'Northline Cargo', value: '₹1,10,000' },
] as const

export const OTHER_PROJECTS = [
  {
    name: 'Menu photography',
    client: 'Saffron Foods',
    desc: 'Shoot + retouch for 24 dishes',
    paid: '₹16,000',
    budget: '₹40,000',
    pct: 40,
    pending: '₹24,000',
    deadline: '02/08/2026',
    members: 1,
    status: 'New',
  },
  {
    name: 'Catalogue redesign',
    client: 'Loomcraft',
    desc: 'Print + web catalogue, 48 pages',
    paid: '₹36,000',
    budget: '₹45,000',
    pct: 80,
    pending: '₹9,000',
    deadline: '28/07/2026',
    members: 2,
    status: 'Ongoing',
  },
  {
    name: 'Showroom microsite',
    client: 'Kalpa Interiors',
    desc: 'One-pager with enquiry form',
    paid: '₹0',
    budget: '₹32,000',
    pct: 0,
    pending: '₹32,000',
    deadline: 'No deadline',
    members: 0,
    status: 'New',
  },
  {
    name: 'Fleet tracking dashboard',
    client: 'Northline Cargo',
    desc: 'Internal ops dashboard',
    paid: '₹1,10,000',
    budget: '₹1,10,000',
    pct: 100,
    pending: '₹0',
    deadline: '10/06/2026',
    members: 2,
    status: 'Completed',
  },
] as const

export const OTHER_THREADS = [
  { name: 'Loomcraft', initials: 'LC', preview: 'Perfect, sending the logo files now.', when: '23 Jul' },
  { name: 'Saffron Foods', initials: 'SF', preview: 'Can we move the shoot to Friday?', when: '21 Jul' },
  { name: 'Kalpa Interiors', initials: 'KI', preview: 'Thanks Rajesh!', when: '18 Jul' },
] as const

export const OTHER_REVIEWS = [
  { who: 'Ritu B.', when: 'June 2026', stars: 5, body: 'Clear updates every week. Never had to chase.' },
  { who: 'Dev P.', when: 'May 2026', stars: 5, body: 'Shipped exactly what we agreed, on the day.' },
  { who: 'Meera K.', when: 'April 2026', stars: 4, body: 'Invoices always made sense. Small delay on round two.' },
] as const

export const OTHER_MEETINGS = [
  { day: 3, hour: 15, title: 'Loomcraft review', tone: 'stone' },
  { day: 5, hour: 10, title: 'Saffron shoot plan', tone: 'stone' },
] as const
