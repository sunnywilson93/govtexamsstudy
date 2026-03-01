'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import type { MCQ } from '@/types/shared'

interface MCQCardProps {
  mcq: MCQ
  onAnswer: (selectedIndex: number) => void
  showResult?: boolean
  selectedIndex?: number
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'] as const

function getOptionState(
  index: number,
  correctIndex: number,
  selectedIndex: number | undefined,
  showResult: boolean
): 'neutral' | 'selected' | 'correct' | 'incorrect' {
  if (!showResult && selectedIndex === index) return 'selected'
  if (!showResult) return 'neutral'
  if (index === correctIndex) return 'correct'
  if (index === selectedIndex) return 'incorrect'
  return 'neutral'
}

const stateStyles: Record<string, string> = {
  neutral: 'border-border-primary bg-bg-elevated hover:border-border-secondary hover:bg-bg-secondary',
  selected: 'border-primary bg-primary-50',
  correct: 'border-green-500 bg-green-50',
  incorrect: 'border-red-500 bg-red-50',
}

export function MCQCard({ mcq, onAnswer, showResult = false, selectedIndex }: MCQCardProps) {
  return (
    <div className="rounded-lg border border-border-primary bg-bg-elevated p-5">
      <p className="mb-5 text-base font-medium leading-relaxed text-text-primary">
        {mcq.question}
      </p>

      <div className="flex flex-col gap-3">
        {mcq.options.map((option, index) => {
          const state = getOptionState(index, mcq.correctIndex, selectedIndex, showResult)
          const isDisabled = showResult || selectedIndex !== undefined

          return (
            <motion.button
              key={index}
              type="button"
              disabled={isDisabled}
              data-state={state}
              onClick={() => onAnswer(index)}
              className={clsx(
                'flex items-center gap-3 rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors',
                stateStyles[state],
                isDisabled && state === 'neutral' && 'opacity-60'
              )}
              animate={
                showResult && state === 'correct'
                  ? { boxShadow: ['0 0 0 0 rgba(34,197,94,0)', '0 0 8px 4px rgba(34,197,94,0.3)', '0 0 0 0 rgba(34,197,94,0)'] }
                  : showResult && state === 'incorrect'
                    ? { x: [0, -4, 4, -4, 4, 0] }
                    : undefined
              }
              transition={
                showResult && state === 'correct'
                  ? { duration: 1, repeat: 1 }
                  : showResult && state === 'incorrect'
                    ? { duration: 0.4 }
                    : undefined
              }
            >
              <span className={clsx(
                'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                state === 'correct' && 'bg-green-500 text-white',
                state === 'incorrect' && 'bg-red-500 text-white',
                state === 'selected' && 'bg-primary text-white',
                state === 'neutral' && 'bg-bg-tertiary text-text-secondary'
              )}>
                {OPTION_LABELS[index]}
              </span>
              <span className="text-text-primary">{option}</span>
            </motion.button>
          )
        })}
      </div>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 rounded-lg border border-border-primary bg-bg-secondary p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Explanation
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-secondary">
            {mcq.explanation}
          </p>
        </motion.div>
      )}
    </div>
  )
}
