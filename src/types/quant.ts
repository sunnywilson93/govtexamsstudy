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
  | "ratio"
  | "profit-loss"
  | "time-speed-distance"
  | "time-work"
  | "algebra"
  | "geometry"
  | "number-system"

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
