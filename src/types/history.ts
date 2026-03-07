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

// --- History Topic Tabs Types ---

export interface HistoryNote {
  section: string
  content: string
}

export interface KeyDate {
  year: string
  event: string
}

export interface HistoryConcept {
  topic: string
  title: string
  description: string
  period: string
  keyDates: KeyDate[]
  notes: HistoryNote[]
  examTags: string[]
  examRelevance: string
}

export interface ComparisonTable {
  title: string
  headers: string[]
  rows: string[][]
}

export interface Mnemonic {
  title: string
  mnemonic: string
  explanation: string
}

export interface HistoryRevision {
  topic: string
  bullets: string[]
  comparisons: ComparisonTable[]
  mnemonics: Mnemonic[]
}

export interface HistoryProblem {
  id: string
  topic: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  examName: string
  examYear: number
  difficulty: 'easy' | 'medium' | 'hard'
}
