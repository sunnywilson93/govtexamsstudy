'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { SyllogismProblem, VennCircle } from '@/types/reasoning'
import { Check, X } from 'lucide-react'

interface SyllogismVisualizerProps {
  problems: SyllogismProblem[]
}

const CIRCLE_COLORS = [
  { stroke: '#8b5cf6', fill: 'rgba(139,92,246,0.08)' },
  { stroke: '#3b82f6', fill: 'rgba(59,130,246,0.08)' },
  { stroke: '#10b981', fill: 'rgba(16,185,129,0.08)' },
]

function formatStatement(type: string, subject: string, predicate: string): string {
  switch (type) {
    case 'all':
      return `All ${subject} are ${predicate}`
    case 'some':
      return `Some ${subject} are ${predicate}`
    case 'no':
      return `No ${subject} are ${predicate}`
    case 'some-not':
      return `Some ${subject} are not ${predicate}`
    default:
      return `${subject} - ${predicate}`
  }
}

function VennDiagram({ circles }: { circles: VennCircle[] }) {
  return (
    <svg viewBox="0 0 400 300" width="100%" height="auto" className="max-h-[300px]">
      {circles.map((circle, i) => {
        const color = CIRCLE_COLORS[i % CIRCLE_COLORS.length]
        return (
          <motion.g
            key={circle.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.15, type: 'spring' }}
          >
            <circle
              cx={circle.x}
              cy={circle.y}
              r={circle.r}
              fill={color.fill}
              stroke={color.stroke}
              strokeWidth={2}
            />
            <text
              x={circle.x}
              y={circle.y - circle.r - 8}
              textAnchor="middle"
              className="fill-text-primary text-xs font-medium"
            >
              {circle.label}
            </text>
          </motion.g>
        )
      })}
    </svg>
  )
}

export function SyllogismVisualizer({ problems }: SyllogismVisualizerProps) {
  const [selectedProblemId, setSelectedProblemId] = useState(problems[0]?.id ?? '')

  const selectedProblem = useMemo(
    () => problems.find((p) => p.id === selectedProblemId) ?? problems[0],
    [problems, selectedProblemId]
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
  const isLastStep = currentStep === (selectedProblem?.steps.length ?? 1) - 1

  if (!selectedProblem || !currentStepData) {
    return <p className="text-text-muted">No problems available.</p>
  }

  return (
    <div className="flex flex-col gap-5">
      <select
        className="rounded-md border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary self-start"
        value={selectedProblemId}
        onChange={(e) => setSelectedProblemId(e.target.value)}
        aria-label="Select problem"
      >
        {problems.map((p) => (
          <option key={p.id} value={p.id}>
            {p.id}
          </option>
        ))}
      </select>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center justify-center rounded-lg border border-border-primary bg-bg-secondary p-4 md:w-3/5">
          <VennDiagram circles={currentStepData.circles} />
        </div>

        <div className="flex flex-col gap-3 md:w-2/5">
          <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Premises
            </h3>
            <ul className="flex flex-col gap-2">
              {selectedProblem.statements.map((s, i) => (
                <li
                  key={i}
                  className="rounded-md border border-border-primary px-3 py-2 text-sm text-text-primary"
                >
                  {formatStatement(s.type, s.subject, s.predicate)}
                </li>
              ))}
            </ul>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className="rounded-lg border border-border-primary bg-bg-secondary p-4"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Step {currentStep + 1}
              </h3>
              <p className="text-sm text-text-primary">{currentStepData.description}</p>
            </motion.div>
          </AnimatePresence>

          {isLastStep && (
            <motion.div
              className="rounded-lg border border-border-primary bg-bg-secondary p-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Conclusions
              </h3>
              <ul className="flex flex-col gap-2">
                {selectedProblem.conclusions.map((c, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                      c.isValid
                        ? 'border border-green-500/30 bg-green-50 text-green-800'
                        : 'border border-red-500/30 bg-red-50 text-red-800'
                    }`}
                  >
                    {c.isValid ? <Check size={14} /> : <X size={14} />}
                    {formatStatement(c.statement.type, c.statement.subject, c.statement.predicate)}
                    <span className="ml-auto text-xs font-medium">
                      {c.isValid ? 'VALID' : 'INVALID'}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
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
    </div>
  )
}
