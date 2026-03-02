'use client'

import { useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { DirectionProblem, DirectionStep } from '@/types/reasoning'

const DIR_DELTA: Record<DirectionStep['direction'], [number, number]> = {
  N: [0, -1],
  S: [0, 1],
  E: [1, 0],
  W: [-1, 0],
  NE: [1, -1],
  NW: [-1, -1],
  SE: [1, 1],
  SW: [-1, 1],
}

const SCALE = 22
const CX = 300
const CY = 220

function computePoints(steps: DirectionStep[]): [number, number][] {
  const pts: [number, number][] = [[CX, CY]]
  for (const s of steps) {
    const [dx, dy] = DIR_DELTA[s.direction]
    const [px, py] = pts[pts.length - 1]
    pts.push([px + dx * s.distance * SCALE, py + dy * s.distance * SCALE])
  }
  return pts
}

export function DirectionVisualizer({ problem }: { problem: DirectionProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  const stepsLength = problem.steps.length
  useEffect(() => {
    reset()
    setSteps(stepsLength + 1) // +1 for final displacement step
  }, [stepsLength, reset, setSteps])

  const points = useMemo(() => computePoints(problem.steps), [problem.steps])
  const isLastStep = currentStep === totalSteps - 1
  const dot = points[Math.min(currentStep, points.length - 1)]

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      <svg
        viewBox="0 0 600 400"
        className="w-full rounded-lg border border-border-primary bg-bg-secondary"
        aria-label="Direction diagram"
      >
        {/* Grid lines */}
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <line
              x1={CX + i * SCALE * 3}
              y1={20}
              x2={CX + i * SCALE * 3}
              y2={380}
              stroke="#e2e8f0"
              strokeWidth="1"
            />
            <line
              x1={20}
              y1={CY + i * SCALE * 3}
              x2={580}
              y2={CY + i * SCALE * 3}
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          </g>
        ))}

        {/* Axis labels */}
        <text x={CX} y={15} textAnchor="middle" fontSize="11" fill="#64748b">
          N
        </text>
        <text x={CX} y={395} textAnchor="middle" fontSize="11" fill="#64748b">
          S
        </text>
        <text x={585} y={CY + 4} textAnchor="middle" fontSize="11" fill="#64748b">
          E
        </text>
        <text x={12} y={CY + 4} textAnchor="middle" fontSize="11" fill="#64748b">
          W
        </text>

        {/* Origin */}
        <circle cx={CX} cy={CY} r={5} fill="#475569" />
        <text x={CX + 8} y={CY + 14} fontSize="10" fill="#475569">
          Start
        </text>

        {/* Path segments — revealed per step */}
        {points.slice(0, currentStep + 1).map((pt, i) => {
          if (i === 0) return null
          const [x1, y1] = points[i - 1]
          const [x2, y2] = pt
          const step = problem.steps[i - 1]
          const mx = (x1 + x2) / 2
          const my = (y1 + y2) / 2
          return (
            <g key={i}>
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#8b5cf6"
                strokeWidth="3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <text x={mx + 4} y={my - 4} fontSize="10" fill="#64748b">
                {step.label}
              </text>
            </g>
          )
        })}

        {/* Displacement line on last step */}
        {isLastStep && (
          <motion.line
            x1={CX}
            y1={CY}
            x2={points[points.length - 1][0]}
            y2={points[points.length - 1][1]}
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="6 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        {/* Moving dot */}
        <motion.circle
          cx={dot[0]}
          cy={dot[1]}
          r={8}
          fill="#8b5cf6"
          animate={{ cx: dot[0], cy: dot[1] }}
          transition={{ duration: 0.4 }}
        />
      </svg>

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
          {currentStep < problem.steps.length
            ? problem.steps[currentStep]?.label
            : `Final displacement: ${problem.finalDistance} km ${problem.finalDirection}`}
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
