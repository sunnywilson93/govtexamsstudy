'use client'

import { useProgressStore } from '@/store/progressStore'
import { subjects } from '@/data/subjects'
import { StreakCounter } from '@/components/dashboard/StreakCounter'
import { RadarChart } from '@/components/dashboard/RadarChart'
import { BadgeGrid } from '@/components/dashboard/BadgeGrid'
import { RevisionPrompts } from '@/components/dashboard/RevisionPrompts'

function computeSubjectAverages(
  topicScores: Record<string, number>
): Record<string, number> {
  const subjectTotals: Record<string, { sum: number; count: number }> = {}

  for (const [key, score] of Object.entries(topicScores)) {
    const slug = key.split(':')[0]
    if (!subjectTotals[slug]) {
      subjectTotals[slug] = { sum: 0, count: 0 }
    }
    subjectTotals[slug].sum += score
    subjectTotals[slug].count += 1
  }

  const averages: Record<string, number> = {}
  for (const subject of subjects) {
    const entry = subjectTotals[subject.slug]
    averages[subject.slug] = entry ? Math.round(entry.sum / entry.count) : 0
  }
  return averages
}

export default function DashboardPage() {
  const topicScores = useProgressStore((s) => s.topicScores)
  const subjectAverages = computeSubjectAverages(topicScores)

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary">Your Progress</h1>

      <StreakCounter />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center rounded-xl border border-border-primary bg-bg-secondary p-6">
          <h2 className="mb-4 text-lg font-semibold text-text-primary">
            Subject Performance
          </h2>
          <RadarChart scores={subjectAverages} />
        </div>

        <div className="rounded-xl border border-border-primary bg-bg-secondary p-6">
          <h2 className="mb-4 text-lg font-semibold text-text-primary">
            Topic Badges
          </h2>
          <BadgeGrid />
        </div>
      </div>

      <RevisionPrompts />
    </div>
  )
}
