'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { subjects } from '@/data/subjects'

interface RadarChartProps {
  scores: Record<string, number>
}

const SUBJECT_DISPLAY: Record<string, { label: string; color: string }> = {
  quant: { label: 'Quant', color: '#3b82f6' },
  reasoning: { label: 'Reasoning', color: '#8b5cf6' },
  polity: { label: 'Polity', color: '#ef4444' },
  history: { label: 'History', color: '#f59e0b' },
  geography: { label: 'Geography', color: '#22c55e' },
  economics: { label: 'Economics', color: '#14b8a6' },
  science: { label: 'Science', color: '#06b6d4' },
}

const SIZE = 300
const CENTER = SIZE / 2
const RADIUS = 120
const GRID_LEVELS = [0.25, 0.5, 0.75, 1]
const AXES = subjects.map((s) => s.slug)

function polarToCartesian(
  angle: number,
  radius: number,
  cx: number,
  cy: number
): [number, number] {
  const rad = ((angle - 90) * Math.PI) / 180
  return [cx + radius * Math.cos(rad), cy + radius * Math.sin(rad)]
}

function getGridPath(level: number): string {
  const points = AXES.map((_, i) => {
    const angle = (360 / AXES.length) * i
    const [x, y] = polarToCartesian(angle, RADIUS * level, CENTER, CENTER)
    return `${x},${y}`
  })
  return `M ${points.join(' L ')} Z`
}

export function RadarChart({ scores }: RadarChartProps) {
  const [hoveredAxis, setHoveredAxis] = useState<string | null>(null)

  const scorePoints = AXES.map((slug, i) => {
    const score = scores[slug] ?? 0
    const angle = (360 / AXES.length) * i
    const r = (score / 100) * RADIUS
    const [x, y] = polarToCartesian(angle, r, CENTER, CENTER)
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="relative inline-block">
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="overflow-visible"
      >
        {GRID_LEVELS.map((level) => (
          <path
            key={level}
            d={getGridPath(level)}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={1}
            data-testid="grid-ring"
          />
        ))}

        {AXES.map((slug, i) => {
          const angle = (360 / AXES.length) * i
          const [x, y] = polarToCartesian(angle, RADIUS, CENTER, CENTER)
          return (
            <line
              key={slug}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="#cbd5e1"
              strokeWidth={1}
            />
          )
        })}

        <motion.polygon
          points={scorePoints}
          fill="rgba(79, 70, 229, 0.2)"
          stroke="#4f46e5"
          strokeWidth={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {AXES.map((slug, i) => {
          const angle = (360 / AXES.length) * i
          const [x, y] = polarToCartesian(angle, RADIUS + 20, CENTER, CENTER)
          const display = SUBJECT_DISPLAY[slug]
          return (
            <text
              key={slug}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={display?.color ?? '#64748b'}
              fontSize={12}
              fontWeight={500}
              className="cursor-pointer select-none"
              onMouseEnter={() => setHoveredAxis(slug)}
              onMouseLeave={() => setHoveredAxis(null)}
            >
              {display?.label ?? slug}
            </text>
          )
        })}
      </svg>

      {hoveredAxis && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-md bg-gray-800 px-3 py-1.5 text-sm text-white shadow-md"
        >
          {SUBJECT_DISPLAY[hoveredAxis]?.label}: {scores[hoveredAxis] ?? 0}%
        </motion.div>
      )}
    </div>
  )
}
