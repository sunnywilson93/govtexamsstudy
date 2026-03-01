'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { SeriesProblem } from '@/types/reasoning'

interface SeriesVisualizerProps {
  problems: SeriesProblem[]
}

const GROUP_COLORS = [
  { bg: 'rgba(59,130,246,0.12)', border: '#3b82f6', text: '#1e40af' },
  { bg: 'rgba(139,92,246,0.12)', border: '#8b5cf6', text: '#6d28d9' },
  { bg: 'rgba(16,185,129,0.12)', border: '#10b981', text: '#047857' },
]

function SeriesDisplay({
  series,
  missingIndex,
  answer,
  highlights,
  showAnswer,
}: {
  series: (number | string)[]
  missingIndex: number
  answer: number | string
  highlights: number[]
  showAnswer: boolean
}) {
  const cellWidth = 56
  const cellHeight = 50
  const gap = 8
  const totalWidth = series.length * cellWidth + (series.length - 1) * gap
  const svgWidth = Math.max(400, totalWidth + 40)
  const startX = (svgWidth - totalWidth) / 2

  const highlightSet = new Set(highlights)

  const groupIndex = highlights.length > 0 ? Math.min(highlights[0], 2) : 0
  const color = GROUP_COLORS[groupIndex % GROUP_COLORS.length]

  return (
    <svg viewBox={`0 0 ${svgWidth} 140`} width="100%" height="auto" className="max-h-[140px]">
      {series.map((value, i) => {
        const x = startX + i * (cellWidth + gap)
        const y = 40
        const isMissing = i === missingIndex
        const isHighlighted = highlightSet.has(i)
        const displayValue = isMissing && showAnswer ? answer : isMissing ? '?' : value

        let fillColor = 'rgba(148,163,184,0.05)'
        let strokeColor = 'var(--color-border-primary)'
        let strokeW = 1

        if (isMissing && showAnswer) {
          fillColor = GROUP_COLORS[2].bg
          strokeColor = GROUP_COLORS[2].border
          strokeW = 2
        } else if (isMissing) {
          fillColor = 'rgba(245,158,11,0.1)'
          strokeColor = '#f59e0b'
          strokeW = 2
        } else if (isHighlighted) {
          fillColor = color.bg
          strokeColor = color.border
          strokeW = 2
        }

        return (
          <g key={i}>
            <motion.rect
              x={x}
              y={y}
              width={cellWidth}
              height={cellHeight}
              rx={6}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeW}
              initial={isHighlighted ? { scale: 0.9 } : undefined}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
            {isMissing && showAnswer ? (
              <motion.text
                x={x + cellWidth / 2}
                y={y + cellHeight / 2}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-sm font-bold"
                fill={GROUP_COLORS[2].text}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                {String(displayValue)}
              </motion.text>
            ) : (
              <text
                x={x + cellWidth / 2}
                y={y + cellHeight / 2}
                textAnchor="middle"
                dominantBaseline="central"
                className={`text-sm ${isMissing ? 'fill-amber-600 font-bold' : 'fill-text-primary'}`}
              >
                {String(displayValue)}
              </text>
            )}
            <text
              x={x + cellWidth / 2}
              y={y + cellHeight + 16}
              textAnchor="middle"
              className="fill-text-muted text-[10px]"
            >
              {i}
            </text>
          </g>
        )
      })}

      {highlights.length >= 2 &&
        highlights.slice(0, -1).map((fromIdx, i) => {
          const toIdx = highlights[i + 1]
          if (toIdx === undefined) return null
          const fromX = startX + fromIdx * (cellWidth + gap) + cellWidth / 2
          const toX = startX + toIdx * (cellWidth + gap) + cellWidth / 2
          const arcY = 30
          return (
            <motion.path
              key={`arrow-${fromIdx}-${toIdx}`}
              d={`M ${fromX} ${40} Q ${(fromX + toX) / 2} ${arcY} ${toX} ${40}`}
              fill="none"
              stroke={color.border}
              strokeWidth={1.5}
              strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
          )
        })}
    </svg>
  )
}

export function SeriesVisualizer({ problems }: SeriesVisualizerProps) {
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

      <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
        <SeriesDisplay
          series={selectedProblem.series}
          missingIndex={selectedProblem.missingIndex}
          answer={selectedProblem.answer}
          highlights={currentStepData.highlights}
          showAnswer={isLastStep}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          className="flex flex-col gap-3 rounded-lg border border-border-primary bg-bg-secondary p-4"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            Step {currentStep + 1}
          </h3>
          <p className="text-sm text-text-primary">{currentStepData.description}</p>
          <p className="font-mono text-sm text-subject-reasoning">{currentStepData.pattern}</p>
        </motion.div>
      </AnimatePresence>

      {isLastStep && (
        <motion.div
          className="flex items-center gap-3 rounded-lg border border-green-500/30 bg-green-50 px-4 py-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-sm font-semibold text-green-800">
            Answer: {selectedProblem.answer}
          </span>
        </motion.div>
      )}

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
