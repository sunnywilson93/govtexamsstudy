'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { ReasoningProblem } from '@/types/reasoning'

export function ReasoningStepSolver({ problems }: { problems: ReasoningProblem[] }) {
  const [selectedId, setSelectedId] = useState(problems[0]?.id ?? '')

  const selectedProblem = useMemo(
    () => problems.find((p) => p.id === selectedId) ?? problems[0],
    [problems, selectedId]
  )

  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    if (selectedProblem) {
      reset()
      setSteps(selectedProblem.steps.length)
    }
  }, [selectedProblem, reset, setSteps])

  const currentStepData = selectedProblem?.steps[currentStep]

  if (!selectedProblem || !currentStepData) {
    return <p className="text-text-muted">No problems available.</p>
  }

  return (
    <div className="flex flex-col gap-5">
      <select
        className="rounded-md border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        aria-label="Select problem"
      >
        {problems.map((p) => (
          <option key={p.id} value={p.id}>
            {p.title}
          </option>
        ))}
      </select>

      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <h2 className="text-lg font-semibold text-text-primary">{selectedProblem.title}</h2>
        <p className="mt-1 text-sm text-text-secondary">{selectedProblem.question}</p>
      </div>

      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
          {currentStepData.operation}
        </p>
        <p className="font-mono text-base text-subject-reasoning">{currentStepData.expression}</p>
        <p className="mt-1 text-sm font-medium text-text-primary">→ {currentStepData.result}</p>
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
          key={currentStepData.explanation}
          className="text-center text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {currentStepData.explanation}
        </motion.p>
      </AnimatePresence>

      {currentStep === totalSteps - 1 && (
        <div className="rounded-lg border border-subject-reasoning bg-subject-reasoning-light p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-subject-reasoning-dark">
            Answer
          </p>
          <p className="mt-1 text-sm font-medium text-subject-reasoning-dark">
            {selectedProblem.answer}
          </p>
        </div>
      )}
    </div>
  )
}
