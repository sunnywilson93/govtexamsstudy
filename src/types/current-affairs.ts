export type NewsCategory =
  | 'polity' | 'economics' | 'history' | 'geography'
  | 'science' | 'international' | 'environment'
  | 'defence' | 'appointments' | 'schemes'

export interface NewsItem {
  id: string
  headline: string
  summary: string
  category: NewsCategory
  sourceUrl: string
  sourceName: string
  examRelevance?: string
}

export interface DailyDigest {
  date: string
  items: NewsItem[]
}
