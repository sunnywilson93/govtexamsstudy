import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { BadgeLevel } from '@/types/shared'

function getToday(): string {
  return new Date().toISOString().split('T')[0]
}

function getYesterday(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().split('T')[0]
}

interface ProgressState {
  streak: number
  lastActivityDate: string | null
  completedTopics: string[]
  topicScores: Record<string, number>
}

interface ProgressActions {
  recordActivity: () => void
  markTopicCompleted: (subject: string, topic: string) => void
  recordScore: (subject: string, topic: string, score: number) => void
  getBadgeLevel: (subject: string, accuracy: number) => BadgeLevel
  reset: () => void
}

const initialState: ProgressState = {
  streak: 0,
  lastActivityDate: null,
  completedTopics: [],
  topicScores: {},
}

export const useProgressStore = create<ProgressState & ProgressActions>()(
  immer((set, get) => ({
    ...initialState,

    recordActivity: () => {
      const today = getToday()
      const { lastActivityDate, streak } = get()

      if (lastActivityDate === today) return

      set((state) => {
        if (lastActivityDate === getYesterday()) {
          state.streak = streak + 1
        } else {
          state.streak = 1
        }
        state.lastActivityDate = today
      })
    },

    markTopicCompleted: (subject: string, topic: string) => {
      const key = `${subject}:${topic}`
      set((state) => {
        if (!state.completedTopics.includes(key)) {
          state.completedTopics.push(key)
        }
      })
    },

    recordScore: (subject: string, topic: string, score: number) => {
      set((state) => {
        state.topicScores[`${subject}:${topic}`] = score
      })
    },

    getBadgeLevel: (_subject: string, accuracy: number): BadgeLevel => {
      if (accuracy >= 90) return 'gold'
      if (accuracy >= 70) return 'silver'
      if (accuracy >= 50) return 'bronze'
      return 'none'
    },

    reset: () => {
      set(initialState)
    },
  }))
)
