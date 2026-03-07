'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { CountingFigureProblem } from '@/types/reasoning'

const PURPLE = '#8b5cf6'

export function CountingFigureVisualizer({ problem }: { problem: CountingFigureProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  const stepsLength = problem.steps.length
  useEffect(() => {
    reset()
    setSteps(stepsLength)
  }, [stepsLength, reset, setSteps])

  const isLastStep = currentStep === totalSteps - 1
  const visibleHighlights = problem.highlights.slice(
    0,
    Math.min(currentStep + 1, problem.highlights.length),
  )
  const currentHighlight = problem.highlights[currentStep]
  const runningCount = Math.min(currentStep + 1, problem.highlights.length)

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      <svg
        viewBox="0 0 100 100"
        className="mx-auto w-full max-w-sm rounded-lg border border-border-primary bg-bg-secondary"
        role="img"
        aria-label="Counting figures visualization"
      >
        {/* Base figure */}
        <path
          d={problem.svgPath}
          fill="none"
          stroke="#475569"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />

        {/* Highlighted figures — revealed per step */}
        {visibleHighlights.map((hl, i) => {
          const isCurrent = i === currentStep
          return (
            <motion.path
              key={hl.id}
              d={hl.path}
              fill={`${PURPLE}${isCurrent ? '40' : '20'}`}
              stroke={PURPLE}
              strokeWidth={isCurrent ? 2 : 1}
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )
        })}

        {/* Running count */}
        <rect x={72} y={2} width={26} height={14} rx={3} fill="#fff" stroke="#e2e8f0" strokeWidth={0.5} />
        <text
          x={85}
          y={12}
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill={PURPLE}
        >
          {runningCount}/{problem.totalCount}
        </text>
      </svg>

      {currentHighlight && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <span
            className="inline-block h-3 w-3 rounded"
            style={{ backgroundColor: `${PURPLE}40` }}
          />
          <span className="text-text-secondary">{currentHighlight.label}</span>
        </div>
      )}

      <StepController
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepChange={goToStep}
        isPlaying={isPlaying}
        onTogglePlay={toggleAutoPlay}
        onReset={reset}
      />

      <AnimatePresence mode="wait">
        <motion.p
          key={currentStep}
          className="text-center text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {problem.steps[currentStep]}
        </motion.p>
      </AnimatePresence>

      {isLastStep && (
        <div className="rounded-lg border border-subject-reasoning bg-subject-reasoning-light p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-subject-reasoning-dark">
            Answer
          </p>
          <p className="mt-1 text-sm font-medium text-subject-reasoning-dark">{problem.answer}</p>
        </div>
      )}
    </div>
  )
}
