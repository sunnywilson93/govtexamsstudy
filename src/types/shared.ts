export interface Step {
  id: number
  title: string
  description: string
  highlights: Record<string, string>
}

export interface Visualizer {
  id: string
  title: string
  description: string
  subject: Subject
  steps: Step[]
}

export type Subject = "quant" | "reasoning" | "polity" | "history" | "geography" | "economics" | "science"

export type BadgeLevel = "none" | "bronze" | "silver" | "gold"

export interface MCQ {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  topic: string
  subject: Subject
}
