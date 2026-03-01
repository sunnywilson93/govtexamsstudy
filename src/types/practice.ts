import type { Subject } from "./shared"

export type { MCQ } from "./shared"

export interface PracticeSession {
  id: string
  subject: Subject
  topic: string
  questions: string[]
  currentIndex: number
  answers: Record<string, number>
  startedAt: number
  completedAt?: number
}

export interface TopicProgress {
  subject: Subject
  topic: string
  totalAttempted: number
  totalCorrect: number
  accuracy: number
  lastAttemptedAt: number
}
