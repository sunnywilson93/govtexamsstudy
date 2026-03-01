export interface EconomicConcept {
  id: string
  name: string
  description: string
  category: EconomicsCategory
  connections: ConceptConnection[]
}

export type EconomicsCategory = "monetary" | "fiscal" | "trade" | "banking" | "planning" | "growth"

export interface ConceptConnection {
  targetId: string
  relationship: string
  effect: "positive" | "negative" | "neutral"
}

export interface PolicyFlow {
  id: string
  name: string
  description: string
  steps: FlowStep[]
  category: EconomicsCategory
}

export interface FlowStep {
  id: number
  title: string
  description: string
  value?: string
  connections: { targetStepId: number; label: string }[]
}

export interface BudgetItem {
  id: string
  name: string
  category: "revenue" | "expenditure"
  subcategory: string
  amount: number
  percentage: number
  year: string
  children?: BudgetItem[]
}
