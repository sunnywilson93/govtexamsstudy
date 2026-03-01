'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { SeatingProblem } from '@/types/reasoning'

interface SeatingVisualizerProps {
  problems: SeatingProblem[]
}

function CircularArrangement({ arrangement, people }: { arrangement: (string | null)[]; people: string[] }) {
  const seatCount = people.length
  const cx = 200
  const cy = 180
  const radius = 120
  const seatRadius = 24

  return (
    <svg viewBox="0 0 400 360" width="100%" height="auto" className="max-h-[350px]">
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke="var(--color-border-primary)"
        strokeWidth={1}
        strokeDasharray="6 4"
      />
      {Array.from({ length: seatCount }).map((_, i) => {
        const angle = (2 * Math.PI * i) / seatCount - Math.PI / 2
        const x = cx + radius * Math.cos(angle)
        const y = cy + radius * Math.sin(angle)
        const person = arrangement[i]
        const isPlaced = person !== null

        return (
          <g key={i} data-testid={`seat-${i}`}>
            <motion.circle
              cx={x}
              cy={y}
              r={seatRadius}
              fill={isPlaced ? 'rgba(139,92,246,0.15)' : 'rgba(148,163,184,0.08)'}
              stroke={isPlaced ? '#8b5cf6' : 'var(--color-border-primary)'}
              strokeWidth={isPlaced ? 2 : 1}
            />
            {isPlaced ? (
              <motion.text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-subject-reasoning-dark text-sm font-semibold"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                {person}
              </motion.text>
            ) : (
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-text-muted text-sm"
              >
                ?
              </text>
            )}
            <text
              x={x}
              y={y + seatRadius + 14}
              textAnchor="middle"
              className="fill-text-muted text-[10px]"
            >
              {i}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function LinearArrangement({ arrangement, people }: { arrangement: (string | null)[]; people: string[] }) {
  const seatCount = people.length
  const seatWidth = 60
  const seatHeight = 50
  const gap = 10
  const totalWidth = seatCount * seatWidth + (seatCount - 1) * gap
  const startX = (400 - totalWidth) / 2
  const y = 150

  return (
    <svg viewBox="0 0 400 300" width="100%" height="auto" className="max-h-[300px]">
      {Array.from({ length: seatCount }).map((_, i) => {
        const x = startX + i * (seatWidth + gap)
        const person = arrangement[i]
        const isPlaced = person !== null

        return (
          <g key={i} data-testid={`seat-${i}`}>
            <motion.rect
              x={x}
              y={y}
              width={seatWidth}
              height={seatHeight}
              rx={6}
              fill={isPlaced ? 'rgba(139,92,246,0.15)' : 'rgba(148,163,184,0.08)'}
              stroke={isPlaced ? '#8b5cf6' : 'var(--color-border-primary)'}
              strokeWidth={isPlaced ? 2 : 1}
            />
            {isPlaced ? (
              <motion.text
                x={x + seatWidth / 2}
                y={y + seatHeight / 2}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-subject-reasoning-dark text-sm font-semibold"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                {person}
              </motion.text>
            ) : (
              <text
                x={x + seatWidth / 2}
                y={y + seatHeight / 2}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-text-muted text-sm"
              >
                ?
              </text>
            )}
            <text
              x={x + seatWidth / 2}
              y={y + seatHeight + 18}
              textAnchor="middle"
              className="fill-text-muted text-[10px]"
            >
              {i}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function SeatingVisualizer({ problems }: SeatingVisualizerProps) {
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

  if (!selectedProblem || !currentStepData) {
    return <p className="text-text-muted">No problems available.</p>
  }

  const activeClueId = currentStepData.clueApplied

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
        <div className="flex items-center justify-center rounded-lg border border-border-primary bg-bg-secondary p-4 md:w-1/2">
          {selectedProblem.type === 'circular' ? (
            <CircularArrangement
              arrangement={currentStepData.arrangement}
              people={selectedProblem.people}
            />
          ) : (
            <LinearArrangement
              arrangement={currentStepData.arrangement}
              people={selectedProblem.people}
            />
          )}
        </div>

        <div className="flex flex-col gap-3 md:w-1/2">
          <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Clues
            </h3>
            <ul className="flex flex-col gap-2">
              {selectedProblem.clues.map((clue) => {
                const isActive = clue.id === activeClueId
                return (
                  <li
                    key={clue.id}
                    data-testid={isActive ? `clue-${clue.id}-active` : `clue-${clue.id}`}
                    className={`rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'border border-subject-reasoning bg-subject-reasoning-light text-subject-reasoning-dark font-medium'
                        : 'border border-transparent text-text-secondary'
                    }`}
                  >
                    {clue.text}
                  </li>
                )
              })}
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
                Deduction
              </h3>
              <p className="text-sm text-text-primary">{currentStepData.description}</p>
              <p className="mt-2 text-xs text-text-secondary italic">{currentStepData.deduction}</p>
            </motion.div>
          </AnimatePresence>
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
