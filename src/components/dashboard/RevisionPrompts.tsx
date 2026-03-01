'use client'

import Link from 'next/link'
import { RotateCcw } from 'lucide-react'
import { useProgressStore } from '@/store/progressStore'
import { subjects } from '@/data/subjects'

interface RevisionItem {
  subject: string
  topic: string
  score: number
  subjectSlug: string
}

const LOW_SCORE_THRESHOLD = 70

export function RevisionPrompts() {
  const topicScores = useProgressStore((s) => s.topicScores)

  const revisionItems: RevisionItem[] = Object.entries(topicScores)
    .filter(([, score]) => score < LOW_SCORE_THRESHOLD)
    .map(([key, score]) => {
      const [subjectSlug, topic] = key.split(':')
      const subjectInfo = subjects.find((s) => s.slug === subjectSlug)
      return {
        subject: subjectInfo?.name ?? subjectSlug,
        topic,
        score,
        subjectSlug,
      }
    })
    .sort((a, b) => a.score - b.score)

  if (revisionItems.length === 0) {
    return (
      <div className="rounded-xl border border-border-primary bg-bg-secondary p-6 text-center">
        <p className="text-text-secondary">
          All caught up! Keep going.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-text-primary">
        Topics to Revise
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {revisionItems.map((item) => (
          <div
            key={`${item.subjectSlug}:${item.topic}`}
            className="flex items-center justify-between rounded-lg border border-border-primary bg-bg-secondary p-4"
          >
            <div>
              <p className="font-medium text-text-primary">{item.topic}</p>
              <p className="text-sm text-text-muted">
                Last score: {item.score}%
              </p>
            </div>
            <Link
              href={`/practice/${item.subjectSlug}/${encodeURIComponent(item.topic.toLowerCase())}`}
              className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white no-underline transition-colors hover:bg-primary-700"
            >
              <RotateCcw size={14} />
              Revise Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
