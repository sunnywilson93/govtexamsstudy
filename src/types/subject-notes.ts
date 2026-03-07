export interface SubjectNote {
  section: string
  content: string
}

export interface KeyDate {
  year: string
  event: string
}

export interface SubjectConcept {
  topic: string
  title: string
  description: string
  category: string
  keyDates: KeyDate[]
  notes: SubjectNote[]
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

export interface SubjectRevision {
  topic: string
  bullets: string[]
  comparisons: ComparisonTable[]
  mnemonics: Mnemonic[]
}

export interface SubjectProblem {
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
