/** Shared types for the documentation and help center system. */

export interface DocSection {
  title: string
  description: string
  icon?: string
  children: string[]
}

export interface DocPage {
  slug: string
  title: string
  metaTitle?: string
  metaDescription: string
  breadcrumbs: { label: string; href: string }[]
  sections: DocContentSection[]
  faqs?: { q: string; a: string }[]
  relatedLinks?: { title: string; href: string }[]
  planBadge?: 'Free' | 'Pro' | 'Ultra'
}

export interface DocContentSection {
  id: string
  heading: string
  level: 2 | 3
  content: string
  callout?: { type: 'info' | 'warning' | 'tip'; text: string }
  steps?: string[]
  planBadge?: 'Free' | 'Pro' | 'Ultra'
}

export interface HelpArticle {
  slug: string
  title: string
  metaTitle?: string
  metaDescription: string
  category: string
  breadcrumbs: { label: string; href: string }[]
  answer: string
  steps?: string[]
  sections?: DocContentSection[]
  relatedLinks?: { title: string; href: string }[]
  relatedDocs?: { title: string; href: string }[]
}

export interface HelpCategory {
  slug: string
  title: string
  description: string
  icon: string
  articles: string[]
}

export interface SearchItem {
  title: string
  slug: string
  description: string
  category: string
  type: 'docs' | 'help'
}
