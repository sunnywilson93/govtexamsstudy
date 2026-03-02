'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { PuzzleProblem } from '@/types/reasoning'

export function PuzzleVisualizer({ problem }: { problem: PuzzleProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  const stepsLength = problem.steps.length
  useEffect(() => {
    reset()
    setSteps(stepsLength)
  }, [stepsLength, reset, setSteps])

  // Build progressive state: solution cells revealed up to currentStep
  const revealedSolution = problem.solution.slice(
    0,
    Math.min(currentStep + 1, problem.solution.length),
  )
  const revealedPositions = new Set(revealedSolution.map((c) => c.position))

  // Render floors from top (N) to bottom (1)
  const floors = Array.from({ length: problem.totalPositions }, (_, i) => ({
    position: problem.totalPositions - i,
    label:
      problem.type === 'floor'
        ? `Floor ${problem.totalPositions - i}`
        : `Box ${problem.totalPositions - i}`,
  }))

  return (
    <div className="flex flex-col gap-5">
      {/* Clues */}
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Clues</p>
        <ol className="flex flex-col gap-1">
          {problem.clues.map((clue, i) => (
            <li key={i} className="flex gap-1 text-sm text-text-secondary">
              <span className="shrink-0 text-text-muted">{i + 1}.</span>
              <span>{clue}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Floor grid */}
      <div className="flex flex-col gap-2">
        {floors.map(({ position, label }) => {
          const cell = problem.solution.find((c) => c.position === position)
          const isRevealed = revealedPositions.has(position)
          return (
            <div key={position} className="flex items-center gap-3">
              <span className="w-16 shrink-0 text-right text-xs text-text-muted">{label}</span>
              <motion.div
                layout
                className={`flex h-14 flex-1 items-center justify-center rounded-lg border-2 transition-colors ${
                  isRevealed
                    ? 'border-subject-reasoning bg-subject-reasoning-light'
                    : 'border-border-primary bg-bg-elevated'
                }`}
              >
                <AnimatePresence>
                  {isRevealed && cell?.occupant && (
                    <motion.span
                      key={cell.occupant}
                      className="text-lg font-bold text-subject-reasoning"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {cell.occupant}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )
        })}
      </div>

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

      {currentStep === totalSteps - 1 && (
        <div className="rounded-lg border border-subject-reasoning bg-subject-reasoning-light p-3">
          <p className="text-center text-sm font-semibold text-subject-reasoning-dark">
            All positions solved!
          </p>
        </div>
      )}
    </div>
  )
}
