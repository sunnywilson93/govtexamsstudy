'use client'

import { Flame } from 'lucide-react'
import { motion } from 'framer-motion'
import { useProgressStore } from '@/store/progressStore'

function getLastSevenDays(lastActivityDate: string | null): boolean[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return Array.from({ length: 7 }, (_, i) => {
    if (!lastActivityDate) return false
    const dayDate = new Date(today)
    dayDate.setDate(today.getDate() - (6 - i))
    const dayStr = dayDate.toISOString().split('T')[0]
    return dayStr <= lastActivityDate
  })
}

export function StreakCounter() {
  const streak = useProgressStore((s) => s.streak)
  const lastActivityDate = useProgressStore((s) => s.lastActivityDate)
  const activeDays = getLastSevenDays(lastActivityDate)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-border-primary bg-gradient-to-br from-secondary-50 to-secondary-100 p-6"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-200" aria-label="Streak flame">
          <Flame size={32} className="text-secondary-600" />
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className="font-mono text-4xl font-bold text-secondary-700"
            >
              {streak}
            </motion.span>
            <span className="text-lg text-text-secondary">day streak</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        {activeDays.map((active, i) => (
          <div
            key={i}
            data-testid={`streak-dot-${i}`}
            className={`h-3 w-3 rounded-full ${
              active
                ? 'bg-secondary-500'
                : 'border border-gray-300 bg-gray-100'
            }`}
          />
        ))}
        <span className="ml-2 text-xs text-text-muted">Last 7 days</span>
      </div>
    </motion.div>
  )
}
