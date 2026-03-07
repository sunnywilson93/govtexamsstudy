'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { MirrorImageProblem } from '@/types/reasoning'

const PURPLE = '#8b5cf6'
const CELL = 56
const GAP = 8
const GRID_PAD = 20

function gridWidth(cols: number) {
  return cols * CELL + (cols - 1) * GAP
}

function gridHeight(rows: number) {
  return rows * CELL + (rows - 1) * GAP
}

function GridCells({
  grid,
  offsetX,
  offsetY,
  visible,
  highlight,
}: {
  grid: string[][]
  offsetX: number
  offsetY: number
  visible: boolean
  highlight: boolean
}) {
  return (
    <>
      {grid.map((row, r) =>
        row.map((cell, c) => {
          const x = offsetX + c * (CELL + GAP)
          const y = offsetY + r * (CELL + GAP)
          return (
            <g key={`${r}-${c}`}>
              <motion.rect
                x={x}
                y={y}
                width={CELL}
                height={CELL}
                rx={6}
                fill={highlight ? `${PURPLE}18` : '#f1f5f9'}
                stroke={highlight ? PURPLE : '#94a3b8'}
                strokeWidth={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3, delay: visible ? (r * row.length + c) * 0.08 : 0 }}
              />
              <motion.text
                x={x + CELL / 2}
                y={y + CELL / 2 + 5}
                textAnchor="middle"
                fontSize="18"
                fontWeight="700"
                fill={highlight ? PURPLE : '#1e293b'}
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3, delay: visible ? (r * row.length + c) * 0.08 : 0 }}
              >
                {cell}
              </motion.text>
            </g>
          )
        }),
      )}
    </>
  )
}

export function MirrorWaterImageVisualizer({ problem }: { problem: MirrorImageProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  const stepsLength = problem.steps.length
  useEffect(() => {
    reset()
    setSteps(stepsLength)
  }, [stepsLength, reset, setSteps])

  const rows = problem.originalGrid.length
  const cols = problem.originalGrid[0]?.length ?? 0
  const gw = gridWidth(cols)
  const gh = gridHeight(rows)

  const isMirror = problem.type === 'mirror'
  const axisGap = 60
  const totalW = gw * 2 + axisGap + GRID_PAD * 2
  const totalH = gh + GRID_PAD * 2

  const origX = GRID_PAD
  const origY = GRID_PAD
  const transX = GRID_PAD + gw + axisGap
  const transY = GRID_PAD

  const showOriginal = currentStep >= 0
  const showAxis = currentStep >= 1
  const showTransformed = currentStep >= 2
  const isLastStep = currentStep === totalSteps - 1

  const axisX1 = isMirror ? GRID_PAD + gw + axisGap / 2 : GRID_PAD
  const axisY1 = isMirror ? 0 : GRID_PAD + gh + axisGap / 4
  const axisX2 = isMirror ? GRID_PAD + gw + axisGap / 2 : GRID_PAD + gw * 2 + axisGap
  const axisY2 = isMirror ? totalH : GRID_PAD + gh + axisGap / 4

  const viewH = isMirror ? totalH : gh + GRID_PAD * 2 + axisGap / 2 + gh + GRID_PAD
  const waterTransY = isMirror ? transY : GRID_PAD + gh + axisGap / 2
  const waterTransX = isMirror ? transX : GRID_PAD
  const waterAxisY1 = GRID_PAD + gh + axisGap / 4
  const waterAxisY2 = GRID_PAD + gh + axisGap / 4

  const svgW = isMirror ? totalW : gw + GRID_PAD * 2
  const svgH = isMirror ? totalH : viewH

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full rounded-lg border border-border-primary bg-bg-secondary"
        role="img"
        aria-label={`${isMirror ? 'Mirror' : 'Water'} image visualization`}
      >
        <text
          x={origX + gw / 2}
          y={origY - 4}
          textAnchor="middle"
          fontSize="11"
          fill="#64748b"
        >
          Original
        </text>

        {showOriginal && (
          <GridCells
            grid={problem.originalGrid}
            offsetX={origX}
            offsetY={origY}
            visible
            highlight={false}
          />
        )}

        {showAxis && (
          <motion.line
            x1={isMirror ? axisX1 : 0}
            y1={isMirror ? axisY1 : waterAxisY1}
            x2={isMirror ? axisX2 : svgW}
            y2={isMirror ? axisY2 : waterAxisY2}
            stroke={PURPLE}
            strokeWidth={2}
            strokeDasharray="6 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}

        <text
          x={waterTransX + gw / 2}
          y={waterTransY - 4}
          textAnchor="middle"
          fontSize="11"
          fill="#64748b"
        >
          {isMirror ? 'Mirror Image' : 'Water Image'}
        </text>

        <GridCells
          grid={problem.transformedGrid}
          offsetX={waterTransX}
          offsetY={waterTransY}
          visible={showTransformed}
          highlight={isLastStep}
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
