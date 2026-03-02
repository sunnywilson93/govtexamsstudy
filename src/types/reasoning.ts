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

// ── Tabs topics ────────────────────────────────────────────────

export type ReasoningTopic =
  | "blood-relations"
  | "direction-distance"
  | "coding-decoding"
  | "puzzles"
  | "inequalities"
  | "analogies"
  | "classification"
  | "statement-conclusions"
  | "input-output"
  | "alphabet-tests"
  | "cause-effect"

export interface ReasoningRule {
  name: string
  rule: string
  whenToUse: string
}

export interface ReasoningConcept {
  topic: ReasoningTopic
  title: string
  description: string
  keyIdea: string
  rules: ReasoningRule[]
  examTags: string[]
  examRelevance: string
}

export interface ReasoningTrick {
  id: string
  topic: ReasoningTopic
  type: "pattern-shortcut" | "elimination"
  title: string
  description: string
  formula?: string
  example: { problem: string; solution: string }
  timeSaved?: string
}

export interface ReasoningStep {
  id: number
  operation: string
  expression: string
  result: string
  explanation: string
}

export interface ReasoningProblem {
  id: string
  topic: ReasoningTopic
  title: string
  question: string
  steps: ReasoningStep[]
  answer: string
  difficulty: "easy" | "medium" | "hard"
}

// ── Visualizer problem types ────────────────────────────────────

export interface BloodRelationNode {
  id: string
  name: string
  gender: "M" | "F"
  generation: number
}

export interface BloodRelationEdge {
  from: string
  to: string
  label: string
}

export interface BloodRelationProblem {
  id: string
  question: string
  nodes: BloodRelationNode[]
  edges: BloodRelationEdge[]
  steps: string[]
  answer: string
}

export interface DirectionStep {
  id: number
  direction: "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW"
  distance: number
  label: string
}

export interface DirectionProblem {
  id: string
  question: string
  steps: DirectionStep[]
  finalDirection: string
  finalDistance: number
  answer: string
}

export interface CodingRule {
  input: string
  output: string
  pattern: string
}

export interface CodingDecodingProblem {
  id: string
  type: "letter-shift" | "word-mapping" | "symbol-substitution"
  question: string
  codingRules: CodingRule[]
  steps: string[]
  answer: string
}

export interface PuzzleCell {
  position: number
  occupant: string | null
}

export interface PuzzleProblem {
  id: string
  type: "floor" | "box"
  totalPositions: number
  clues: string[]
  steps: string[]
  solution: PuzzleCell[]
}
