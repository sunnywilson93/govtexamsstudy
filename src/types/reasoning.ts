export interface SeatingProblem {
  id: string
  type: "circular" | "linear" | "rectangular"
  clues: SeatingClue[]
  people: string[]
  steps: SeatingStep[]
  solution: Record<string, number>
}

export interface SeatingClue {
  id: number
  text: string
  type: "position" | "neighbor" | "direction" | "not-neighbor"
}

export interface SeatingStep {
  id: number
  clueApplied: number
  description: string
  arrangement: (string | null)[]
  deduction: string
}

export interface SyllogismProblem {
  id: string
  statements: SyllogismStatement[]
  conclusions: SyllogismConclusion[]
  steps: VennStep[]
}

export interface SyllogismStatement {
  type: "all" | "some" | "no" | "some-not"
  subject: string
  predicate: string
}

export interface SyllogismConclusion {
  statement: SyllogismStatement
  isValid: boolean
}

export interface VennStep {
  id: number
  description: string
  circles: VennCircle[]
  regions: VennRegion[]
}

export interface VennCircle {
  label: string
  x: number
  y: number
  r: number
}

export interface VennRegion {
  type: "filled" | "shaded" | "empty"
  description: string
}

export interface SeriesProblem {
  id: string
  type: "number" | "letter" | "alphanumeric"
  series: (number | string)[]
  missingIndex: number
  answer: number | string
  steps: SeriesStep[]
}

export interface SeriesStep {
  id: number
  description: string
  pattern: string
  highlights: number[]
}
