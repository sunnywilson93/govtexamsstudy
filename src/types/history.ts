export interface HistoricalEvent {
  id: string
  year: number
  endYear?: number
  title: string
  description: string
  causes: string[]
  effects: string[]
  relatedEvents: string[]
  persons: string[]
  category: HistoryCategory
  subcategory: string
}

export type HistoryCategory = "ancient" | "medieval" | "modern" | "post-independence" | "world"

export interface Period {
  id: string
  name: string
  startYear: number
  endYear: number
  events: string[]
  significance: string
}

export interface CauseEffectChain {
  id: string
  title: string
  events: string[]
  description: string
}

export interface HistoricalPerson {
  id: string
  name: string
  birthYear: number
  deathYear?: number
  role: string
  events: string[]
  significance: string
}
