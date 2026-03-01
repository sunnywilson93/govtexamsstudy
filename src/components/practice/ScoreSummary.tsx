'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { useProgressStore } from '@/store/progressStore'

interface ScoreSummaryProps {
  total: number
  correct: number
  subject: string
  topic: string
  onRetry: () => void
}

export function ScoreSummary({ total, correct, subject, topic, onRetry }: ScoreSummaryProps) {
  const accuracy = Math.round((correct / total) * 100)
  const badgeLevel = useProgressStore((s) => s.getBadgeLevel(subject, accuracy))
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const progress = (correct / total) * circumference

  return (
    <div className="mx-auto max-w-md text-center">
      <h2 className="mb-6 text-xl font-bold text-text-primary">Session Complete</h2>

      <div className="relative mx-auto mb-4 h-36 w-36">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="var(--color-bg-tertiary)"
            strokeWidth="8"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={accuracy >= 70 ? 'var(--color-subject-quant)' : accuracy >= 50 ? 'var(--color-secondary)' : 'var(--color-subject-polity)'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-3xl font-bold text-text-primary">
            {correct}/{total}
          </span>
        </div>
      </div>

      <p className="mb-6 text-lg text-text-secondary">
        Accuracy: <span className="font-semibold text-text-primary">{accuracy}%</span>
      </p>

      {badgeLevel !== 'none' && (
        <div className="mb-6 flex justify-center">
          <Badge level={badgeLevel} topic={topic} size="lg" />
        </div>
      )}

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={onRetry}
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          Try Again
        </button>
        <Link
          href={`/practice/${subject}`}
          className="rounded-lg border border-border-primary px-6 py-3 text-sm font-medium text-text-secondary no-underline transition-colors hover:bg-bg-secondary hover:text-text-primary"
        >
          Practice Another Topic
        </Link>
      </div>
    </div>
  )
}
