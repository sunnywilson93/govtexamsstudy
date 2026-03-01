'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import { ExpressionDisplay } from './ExpressionDisplay'
import { VariablesPanel } from './VariablesPanel'
import type { MathProblem, QuantTopic } from '@/types/quant'

interface StepSolverProps {
  problems: MathProblem[]
}

export function StepSolver({ problems }: StepSolverProps) {
  const topics = useMemo(() => {
    const set = new Set<QuantTopic>()
    for (const p of problems) set.add(p.topic)
    return Array.from(set)
  }, [problems])

  const [selectedTopic, setSelectedTopic] = useState<QuantTopic>(
    topics[0] ?? 'percentage'
  )

  const filteredProblems = useMemo(
    () => problems.filter((p) => p.topic === selectedTopic),
    [problems, selectedTopic]
  )

  const [selectedProblemId, setSelectedProblemId] = useState<string>(
    filteredProblems[0]?.id ?? ''
  )

  const selectedProblem = useMemo(
    () => filteredProblems.find((p) => p.id === selectedProblemId) ?? filteredProblems[0],
    [filteredProblems, selectedProblemId]
  )

  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    if (selectedProblem) {
      reset()
      setSteps(selectedProblem.steps.length)
    }
  }, [selectedProblem, reset, setSteps])

  useEffect(() => {
    if (filteredProblems.length > 0 && !filteredProblems.find((p) => p.id === selectedProblemId)) {
      setSelectedProblemId(filteredProblems[0].id)
    }
  }, [filteredProblems, selectedProblemId])

  const currentStepData = selectedProblem?.steps[currentStep]
  const previousStepData =
    currentStep > 0 ? selectedProblem?.steps[currentStep - 1] : undefined

  if (!selectedProblem || !currentStepData) {
    return <p className="text-text-muted">No problems available.</p>
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <select
          className="rounded-md border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value as QuantTopic)}
          aria-label="Select topic"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          className="rounded-md border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary"
          value={selectedProblemId}
          onChange={(e) => setSelectedProblemId(e.target.value)}
          aria-label="Select problem"
        >
          {filteredProblems.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <h2 className="text-lg font-semibold text-text-primary">
          {selectedProblem.title}
        </h2>
        <p className="mt-1 text-sm text-text-secondary">
          {selectedProblem.question}
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-3/5">
          <ExpressionDisplay
            operation={currentStepData.operation}
            expression={currentStepData.expression}
            result={currentStepData.result}
            explanation={currentStepData.explanation}
          />
        </div>

        <div className="md:w-2/5">
          <VariablesPanel
            variables={currentStepData.variables}
            previousVariables={previousStepData?.variables}
          />
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
    </div>
  )
}
