import articlesData from '../articles.json'

export interface Article {
  slug: string
  title: string
  publication: 'Cool Hunting' | 'Surface'
  date: string
  url: string
  subject: string | null
  excerpt: string
  featured: boolean
  image: string
  topics: string[]
}

export const articles: Article[] = articlesData as Article[]
export const featured = articles.filter(a => a.featured)

// All unique topics sorted alphabetically
export const allTopics = [...new Set(articles.flatMap(a => a.topics))].sort()
