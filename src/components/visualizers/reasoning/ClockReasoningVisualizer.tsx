'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { ClockProblem } from '@/types/reasoning'

const PURPLE = '#8b5cf6'
const CX = 160
const CY = 160
const CLOCK_R = 130
const HOUR_R = 75
const MINUTE_R = 105
const MARKER_INNER = 115
const MARKER_OUTER = 125

function handEndpoint(angleDeg: number, radius: number): [number, number] {
  const rad = (angleDeg * Math.PI) / 180
  return [CX + radius * Math.sin(rad), CY - radius * Math.cos(rad)]
}

function arcPath(
  startDeg: number,
  endDeg: number,
  radius: number,
): string {
  let sweep = endDeg - startDeg
  if (sweep < 0) sweep += 360
  if (sweep > 180) {
    const temp = startDeg
    startDeg = endDeg
    endDeg = temp
    sweep = 360 - sweep
  }
  const [sx, sy] = handEndpoint(startDeg, radius)
  const [ex, ey] = handEndpoint(endDeg, radius)
  const largeArc = sweep > 180 ? 1 : 0
  return `M ${sx} ${sy} A ${radius} ${radius} 0 ${largeArc} 1 ${ex} ${ey}`
}

const HOUR_NUMBERS = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export function ClockReasoningVisualizer({ problem }: { problem: ClockProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  const stepsLength = problem.steps.length
  useEffect(() => {
    reset()
    setSteps(stepsLength)
  }, [stepsLength, reset, setSteps])

  const isLastStep = currentStep === totalSteps - 1
  const showFace = currentStep >= 0
  const showHands = currentStep >= 1
  const showArc = currentStep >= 2

  const [hx, hy] = handEndpoint(problem.hourAngle, HOUR_R)
  const [mx, my] = handEndpoint(problem.minuteAngle, MINUTE_R)

  let angleBetween = Math.abs(problem.hourAngle - problem.minuteAngle)
  if (angleBetween > 180) angleBetween = 360 - angleBetween

  const svgSize = (CX + CLOCK_R + 20) * 2
  const viewSize = CX * 2 + 40

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      <svg
        viewBox={`0 0 ${viewSize} ${viewSize}`}
        className="mx-auto w-full max-w-sm rounded-lg border border-border-primary bg-bg-secondary"
        role="img"
        aria-label="Clock face visualization"
      >
        {showFace && (
          <>
            <circle
              cx={CX}
              cy={CY}
              r={CLOCK_R}
              fill="#f8fafc"
              stroke="#94a3b8"
              strokeWidth={3}
            />

            {HOUR_NUMBERS.map((num, i) => {
              const angleDeg = i * 30
              const [tx, ty] = handEndpoint(angleDeg, CLOCK_R - 18)
              return (
                <text
                  key={num}
                  x={tx}
                  y={ty + 5}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="600"
                  fill="#334155"
                >
                  {num}
                </text>
              )
            })}

            {Array.from({ length: 60 }, (_, i) => {
              const angleDeg = i * 6
              const isHourMark = i % 5 === 0
              const [ix, iy] = handEndpoint(angleDeg, isHourMark ? MARKER_INNER - 4 : MARKER_INNER)
              const [ox, oy] = handEndpoint(angleDeg, MARKER_OUTER)
              return (
                <line
                  key={`tick-${i}`}
                  x1={ix}
                  y1={iy}
                  x2={ox}
                  y2={oy}
                  stroke={isHourMark ? '#475569' : '#cbd5e1'}
                  strokeWidth={isHourMark ? 2 : 1}
                />
              )
            })}

            <circle cx={CX} cy={CY} r={4} fill="#475569" />
          </>
        )}

        {showHands && (
          <>
            <motion.line
              x1={CX}
              y1={CY}
              x2={hx}
              y2={hy}
              stroke="#1e293b"
              strokeWidth={5}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.line
              x1={CX}
              y1={CY}
              x2={mx}
              y2={my}
              stroke="#475569"
              strokeWidth={3}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </>
        )}

        {showArc && (
          <>
            <motion.path
              d={arcPath(problem.hourAngle, problem.minuteAngle, 55)}
              fill="none"
              stroke={PURPLE}
              strokeWidth={2.5}
              strokeDasharray="5 3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.text
              x={CX}
              y={CY + CLOCK_R + 16}
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill={PURPLE}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {angleBetween}°
            </motion.text>
          </>
        )}
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
