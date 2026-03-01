export interface Article {
  id: string
  number: string
  part: number
  partName: string
  title: string
  description: string
  amendments: string[]
  cases: string[]
  linkedArticles: string[]
  isFR: boolean
  isDPSP: boolean
}

export interface Amendment {
  id: string
  number: number
  year: number
  description: string
  articlesAffected: string[]
  significance: string
  category: "major" | "minor" | "landmark"
}

export interface LandmarkCase {
  id: string
  name: string
  year: number
  summary: string
  articlesInterpreted: string[]
  impact: string
  verdict: string
}

export interface ConstitutionalPart {
  number: number
  name: string
  articleRange: string
  articles: string[]
}
