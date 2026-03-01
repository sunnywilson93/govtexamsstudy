'use client'

import { useProgressStore } from '@/store/progressStore'
import { subjects } from '@/data/subjects'
import { Badge } from '@/components/ui/Badge'
import type { BadgeLevel } from '@/types/shared'

const SUBJECT_COLOR_MAP: Record<string, string> = {
  quant: 'text-subject-quant',
  reasoning: 'text-subject-reasoning',
  polity: 'text-subject-polity',
  history: 'text-subject-history',
  geography: 'text-subject-geography',
  economics: 'text-subject-economics',
  science: 'text-subject-science',
}

function getTopicsForSubject(slug: string): string[] {
  const topicMap: Record<string, string[]> = {
    quant: ['Arithmetic', 'Algebra', 'Geometry', 'Data Interpretation'],
    reasoning: ['Seating', 'Syllogism', 'Series', 'Coding-Decoding'],
    polity: ['Articles', 'Amendments', 'Landmark Cases', 'Preamble'],
    history: ['Ancient', 'Medieval', 'Modern', 'Freedom Movement'],
    geography: ['Physical', 'Climate', 'Rivers', 'Soils'],
    economics: ['Monetary Policy', 'Fiscal Policy', 'Budget', 'Banking'],
    science: ['Physics', 'Chemistry', 'Biology', 'Environment'],
  }
  return topicMap[slug] ?? []
}

export function BadgeGrid() {
  const topicScores = useProgressStore((s) => s.topicScores)
  const getBadgeLevel = useProgressStore((s) => s.getBadgeLevel)

  return (
    <div className="space-y-6">
      {subjects.map((subject) => {
        const topics = getTopicsForSubject(subject.slug)
        return (
          <div key={subject.slug}>
            <h3
              className={`mb-3 text-sm font-semibold uppercase tracking-wider ${
                SUBJECT_COLOR_MAP[subject.slug] ?? 'text-text-secondary'
              }`}
            >
              {subject.name}
            </h3>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5">
              {topics.map((topic) => {
                const key = `${subject.slug}:${topic}`
                const score = topicScores[key]
                const level: BadgeLevel =
                  score !== undefined ? getBadgeLevel(subject.slug, score) : 'none'

                return (
                  <Badge key={key} level={level} topic={topic} size="sm" />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
