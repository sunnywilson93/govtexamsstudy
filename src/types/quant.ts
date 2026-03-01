export interface MathProblem {
  id: string
  topic: QuantTopic
  title: string
  question: string
  steps: MathStep[]
  answer: string
  difficulty: "easy" | "medium" | "hard"
}

export interface MathStep {
  id: number
  operation: string
  expression: string
  result: string
  explanation: string
  variables: Record<string, number | string>
}

export type QuantTopic =
  | "percentage"
  | "profit-loss"
  | "ratio"
  | "time-speed-distance"
  | "time-work"
  | "number-system"
  | "average"
  | "simple-compound-interest"
  | "mixture-alligation"
  | "mensuration"
  | "algebra"
  | "geometry"
  | "trigonometry"
  | "data-interpretation"
  | "statistics-probability"

export interface GeometryShape {
  id: string
  type: "triangle" | "circle" | "rectangle" | "square" | "parallelogram"
  properties: Record<string, number>
  formulas: GeometryFormula[]
}

export interface GeometryFormula {
  name: string
  formula: string
  steps: MathStep[]
}

export interface ConceptFormula {
  name: string
  formula: string
  whenToUse: string
}

export interface QuantConcept {
  topic: QuantTopic
  title: string
  description: string
  keyIdea: string
  formulas: ConceptFormula[]
  examRelevance: string
}

export interface QuantTrick {
  id: string
  topic: QuantTopic
  type: "formula-shortcut" | "mental-math"
  title: string
  description: string
  formula?: string
  example: {
    problem: string
    solution: string
  }
  timeSaved?: string
}
