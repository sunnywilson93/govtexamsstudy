'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { CubeDiceProblem, CubeFace } from '@/types/reasoning'

const PURPLE = '#8b5cf6'
const FACE_SIZE = 70
const FACE_GAP = 4

const NET_POSITIONS: [number, number][] = [
  [1, 0], // face 0 — top
  [0, 1], // face 1 — left
  [1, 1], // face 2 — center
  [2, 1], // face 3 — right
  [1, 2], // face 4 — bottom
  [1, 3], // face 5 — back
]

const ISO_W = 60
const ISO_H = 35

function isoFace(
  cx: number,
  cy: number,
  side: 'top' | 'left' | 'right',
): string {
  const hw = ISO_W / 2
  if (side === 'top')
    return `${cx},${cy - ISO_H} ${cx + hw},${cy - ISO_H / 2} ${cx},${cy} ${cx - hw},${cy - ISO_H / 2}`
  if (side === 'left')
    return `${cx - hw},${cy - ISO_H / 2} ${cx},${cy} ${cx},${cy + ISO_H} ${cx - hw},${cy + ISO_H / 2}`
  return `${cx},${cy} ${cx + hw},${cy - ISO_H / 2} ${cx + hw},${cy + ISO_H / 2} ${cx},${cy + ISO_H}`
}

function isoCenter(cx: number, cy: number, side: 'top' | 'left' | 'right'): [number, number] {
  const hw = ISO_W / 2
  if (side === 'top') return [cx, cy - ISO_H / 2]
  if (side === 'left') return [cx - hw / 2, cy + ISO_H / 4]
  return [cx + hw / 2, cy + ISO_H / 4]
}

export function CubeDiceVisualizer({ problem }: { problem: CubeDiceProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  const stepsLength = problem.steps.length
  useEffect(() => {
    reset()
    setSteps(stepsLength)
  }, [stepsLength, reset, setSteps])

  const isLastStep = currentStep === totalSteps - 1
  const showNet = currentStep >= 0
  const showFoldLines = currentStep >= 1
  const showIso = currentStep >= 2
  const highlightAnswer = currentStep >= 3

  const netOffsetX = 40
  const netOffsetY = 20
  const step = FACE_SIZE + FACE_GAP

  const getFace = (idx: number): CubeFace | undefined => problem.faces[idx]

  const isoBaseX = 420
  const isoBaseY = 140

  const isoFaces: { side: 'top' | 'left' | 'right'; faceIdx: number }[] = [
    { side: 'top', faceIdx: 0 },
    { side: 'left', faceIdx: 1 },
    { side: 'right', faceIdx: 3 },
  ]

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      <svg
        viewBox="0 0 560 310"
        className="w-full rounded-lg border border-border-primary bg-bg-secondary"
        role="img"
        aria-label="Cube net and 3D view"
      >
        <text x={netOffsetX + step * 1.5} y={14} textAnchor="middle" fontSize="11" fill="#64748b">
          Flat Net
        </text>

        {showNet &&
          NET_POSITIONS.map(([col, row], i) => {
            const face = getFace(i)
            if (!face) return null
            const x = netOffsetX + col * step
            const y = netOffsetY + row * step
            const isHighlighted = highlightAnswer && i === problem.faces.length - 1
            return (
              <motion.g
                key={face.position}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <rect
                  x={x}
                  y={y}
                  width={FACE_SIZE}
                  height={FACE_SIZE}
                  rx={4}
                  fill={isHighlighted ? `${PURPLE}22` : `${face.color}20`}
                  stroke={isHighlighted ? PURPLE : face.color}
                  strokeWidth={2}
                />
                <text
                  x={x + FACE_SIZE / 2}
                  y={y + FACE_SIZE / 2 + 5}
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="700"
                  fill={isHighlighted ? PURPLE : '#1e293b'}
                >
                  {face.content}
                </text>
              </motion.g>
            )
          })}

        {showFoldLines &&
          NET_POSITIONS.map(([col, row], i) => {
            if (i === 2) return null
            const cx = netOffsetX + 1 * step + FACE_SIZE / 2
            const cy = netOffsetY + 1 * step + FACE_SIZE / 2
            const fx = netOffsetX + col * step + FACE_SIZE / 2
            const fy = netOffsetY + row * step + FACE_SIZE / 2
            const mx = (cx + fx) / 2
            const my = (cy + fy) / 2
            return (
              <motion.line
                key={`fold-${i}`}
                x1={mx - (fy - cy) * 0.15}
                y1={my + (fx - cx) * 0.15}
                x2={mx + (fy - cy) * 0.15}
                y2={my - (fx - cx) * 0.15}
                stroke={PURPLE}
                strokeWidth={1.5}
                strokeDasharray="4 3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )
          })}

        {showIso && (
          <>
            <text
              x={isoBaseX}
              y={netOffsetY}
              textAnchor="middle"
              fontSize="11"
              fill="#64748b"
            >
              3D View
            </text>
            {isoFaces.map(({ side, faceIdx }) => {
              const face = getFace(faceIdx)
              if (!face) return null
              const pts = isoFace(isoBaseX, isoBaseY, side)
              const [tx, ty] = isoCenter(isoBaseX, isoBaseY, side)
              const isHighlighted = highlightAnswer && faceIdx === problem.faces.length - 1
              return (
                <motion.g
                  key={`iso-${side}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <polygon
                    points={pts}
                    fill={isHighlighted ? `${PURPLE}30` : `${face.color}25`}
                    stroke={isHighlighted ? PURPLE : '#94a3b8'}
                    strokeWidth={2}
                  />
                  <text
                    x={tx}
                    y={ty + 4}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill={isHighlighted ? PURPLE : '#1e293b'}
                  >
                    {face.content}
                  </text>
                </motion.g>
              )
            })}
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
