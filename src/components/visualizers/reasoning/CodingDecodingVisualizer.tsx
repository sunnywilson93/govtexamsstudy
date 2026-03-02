'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { CodingDecodingProblem } from '@/types/reasoning'

export function CodingDecodingVisualizer({ problem }: { problem: CodingDecodingProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  const stepsLength = problem.steps.length
  useEffect(() => {
    reset()
    setSteps(stepsLength)
  }, [stepsLength, reset, setSteps])

  const visibleRules = problem.codingRules.slice(0, currentStep + 1)
  const currentRule = problem.codingRules[currentStep]
  const isLastStep = currentStep === totalSteps - 1

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      {/* Cipher table */}
      <div className="overflow-hidden rounded-lg border border-border-primary">
        <div className="grid grid-cols-3 bg-bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
          <span>Input</span>
          <span>→</span>
          <span>Coded</span>
        </div>
        {visibleRules.map((rule, i) => (
          <motion.div
            key={rule.input}
            className={`grid grid-cols-3 px-4 py-3 text-sm ${
              i === currentStep ? 'bg-subject-reasoning-light' : 'bg-bg-elevated'
            }`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={`font-mono font-bold ${
                i === currentStep ? 'text-subject-reasoning' : 'text-text-primary'
              }`}
            >
              {rule.input}
            </span>
            <span className="text-text-muted">→</span>
            <span
              className={`font-mono font-bold ${
                i === currentStep ? 'text-subject-reasoning' : 'text-text-primary'
              }`}
            >
              {rule.output}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Letter strips */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-center gap-2">
          {problem.codingRules.map((rule, i) => (
            <motion.div
              key={rule.input}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 font-mono text-lg font-bold transition-colors ${
                i === currentStep
                  ? 'border-subject-reasoning bg-subject-reasoning-light text-subject-reasoning'
                  : i < currentStep
                    ? 'border-border-primary bg-bg-elevated text-text-secondary'
                    : 'border-border-primary bg-bg-elevated text-text-muted'
              }`}
            >
              {rule.input}
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {problem.codingRules.map((rule, i) => (
            <div
              key={rule.output}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 font-mono text-lg font-bold transition-colors ${
                i <= currentStep
                  ? 'border-subject-reasoning bg-subject-reasoning-light text-subject-reasoning'
                  : 'border-border-primary bg-bg-elevated text-text-muted opacity-30'
              }`}
            >
              {i <= currentStep ? rule.output : '?'}
            </div>
          ))}
        </div>
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
        {currentRule && (
          <motion.p
            key={currentRule.input}
            className="text-center text-sm text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {currentRule.input} → {currentRule.output} &nbsp;({currentRule.pattern})
          </motion.p>
        )}
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
