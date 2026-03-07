'use client'

import { useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { PaperFoldProblem, FoldStep } from '@/types/reasoning'

const PURPLE = '#8b5cf6'
const PAPER_SIZE = 240
const PAD = 30

interface FoldRect {
  x: number
  y: number
  w: number
  h: number
}

function computeFoldRects(folds: FoldStep[], upToIndex: number): FoldRect[] {
  const rects: FoldRect[] = []
  let x = 0
  let y = 0
  let w = PAPER_SIZE
  let h = PAPER_SIZE

  for (let i = 0; i <= upToIndex && i < folds.length; i++) {
    const dir = folds[i].direction
    if (dir === 'left') {
      w = w / 2
    } else if (dir === 'right') {
      x = x + w / 2
      w = w / 2
    } else if (dir === 'bottom' || dir === 'top') {
      if (dir === 'bottom') {
        h = h / 2
      } else {
        y = y + h / 2
        h = h / 2
      }
    } else if (dir === 'diagonal') {
      // Approximate diagonal as a triangular overlay — keep the bounding box
    }
    rects.push({ x, y, w, h })
  }
  return rects
}

function computePunchHoles(
  folds: FoldStep[],
  punch: { x: number; y: number },
): { x: number; y: number }[] {
  let holes = [{ x: punch.x * PAPER_SIZE, y: punch.y * PAPER_SIZE }]

  for (let i = folds.length - 1; i >= 0; i--) {
    const dir = folds[i].direction
    const mirrored: { x: number; y: number }[] = []
    for (const hole of holes) {
      mirrored.push(hole)
      if (dir === 'left') {
        mirrored.push({ x: PAPER_SIZE - hole.x, y: hole.y })
      } else if (dir === 'right') {
        mirrored.push({ x: PAPER_SIZE - hole.x, y: hole.y })
      } else if (dir === 'bottom') {
        mirrored.push({ x: hole.x, y: PAPER_SIZE - hole.y })
      } else if (dir === 'top') {
        mirrored.push({ x: hole.x, y: PAPER_SIZE - hole.y })
      } else if (dir === 'diagonal') {
        mirrored.push({ x: PAPER_SIZE - hole.y, y: PAPER_SIZE - hole.x })
      }
    }
    holes = mirrored
  }

  const unique = new Map<string, { x: number; y: number }>()
  for (const h of holes) {
    const key = `${Math.round(h.x)},${Math.round(h.y)}`
    unique.set(key, h)
  }
  return Array.from(unique.values())
}

export function PaperFoldVisualizer({ problem }: { problem: PaperFoldProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  const stepsLength = problem.steps.length
  useEffect(() => {
    reset()
    setSteps(stepsLength)
  }, [stepsLength, reset, setSteps])

  const isLastStep = currentStep === totalSteps - 1
  const foldCount = problem.folds.length

  // Steps layout: one per fold, then punch, then unfold steps
  const foldsDone = Math.min(currentStep, foldCount)
  const showPunch = currentStep >= foldCount
  const showUnfolded = isLastStep

  const foldRects = useMemo(
    () => (foldsDone > 0 ? computeFoldRects(problem.folds, foldsDone - 1) : []),
    [problem.folds, foldsDone],
  )

  const punchHoles = useMemo(
    () => computePunchHoles(problem.folds, problem.punchPosition),
    [problem.folds, problem.punchPosition],
  )

  const currentFold = foldRects[foldRects.length - 1]
  const punchScreenX = PAD + problem.punchPosition.x * PAPER_SIZE
  const punchScreenY = PAD + problem.punchPosition.y * PAPER_SIZE

  const svgSize = PAPER_SIZE + PAD * 2

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      <svg
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="mx-auto w-full max-w-sm rounded-lg border border-border-primary bg-bg-secondary"
        role="img"
        aria-label="Paper folding visualization"
      >
        {/* Base paper */}
        <rect
          x={PAD}
          y={PAD}
          width={PAPER_SIZE}
          height={PAPER_SIZE}
          rx={2}
          fill="#f8fafc"
          stroke="#94a3b8"
          strokeWidth={1.5}
        />

        {/* Grid lines for reference */}
        <line
          x1={PAD + PAPER_SIZE / 2}
          y1={PAD}
          x2={PAD + PAPER_SIZE / 2}
          y2={PAD + PAPER_SIZE}
          stroke="#e2e8f0"
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        <line
          x1={PAD}
          y1={PAD + PAPER_SIZE / 2}
          x2={PAD + PAPER_SIZE}
          y2={PAD + PAPER_SIZE / 2}
          stroke="#e2e8f0"
          strokeWidth={1}
          strokeDasharray="4 4"
        />

        {/* Fold overlays */}
        {foldRects.map((rect, i) => (
          <motion.rect
            key={`fold-${i}`}
            x={PAD + rect.x}
            y={PAD + rect.y}
            width={rect.w}
            height={rect.h}
            rx={2}
            fill={`${PURPLE}18`}
            stroke={PURPLE}
            strokeWidth={1.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.4 }}
          />
        ))}

        {/* Folded area label */}
        {currentFold && !showUnfolded && (
          <text
            x={PAD + currentFold.x + currentFold.w / 2}
            y={PAD + currentFold.y + currentFold.h / 2 + 4}
            textAnchor="middle"
            fontSize="11"
            fill={PURPLE}
            fontWeight="600"
          >
            {foldsDone} layer{foldsDone > 1 ? 's' : ''}
          </text>
        )}

        {/* Punch hole on folded paper */}
        {showPunch && !showUnfolded && (
          <motion.circle
            cx={punchScreenX}
            cy={punchScreenY}
            r={8}
            fill={PURPLE}
            stroke="#fff"
            strokeWidth={2}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, type: 'spring' }}
          />
        )}

        {/* Unfolded: show all punch holes */}
        {showUnfolded &&
          punchHoles.map((hole, i) => (
            <motion.circle
              key={`hole-${i}`}
              cx={PAD + hole.x}
              cy={PAD + hole.y}
              r={7}
              fill={PURPLE}
              stroke="#fff"
              strokeWidth={2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            />
          ))}

        {showUnfolded && (
          <text
            x={PAD + PAPER_SIZE / 2}
            y={PAD + PAPER_SIZE + 18}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill={PURPLE}
          >
            {punchHoles.length} hole{punchHoles.length > 1 ? 's' : ''}
          </text>
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
