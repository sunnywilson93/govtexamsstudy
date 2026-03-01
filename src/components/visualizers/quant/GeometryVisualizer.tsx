'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { GeometryShape } from '@/types/quant'

const DEFAULT_SHAPES: GeometryShape[] = [
  {
    id: 'rect-1',
    type: 'rectangle',
    properties: { width: 120, height: 80 },
    formulas: [
      {
        name: 'Area',
        formula: 'width x height',
        steps: [
          {
            id: 1,
            operation: 'Identify dimensions',
            expression: 'width = 120, height = 80',
            result: 'width = 120, height = 80',
            explanation: 'Note the width and height of the rectangle.',
            variables: { width: 120, height: 80 },
          },
          {
            id: 2,
            operation: 'Apply area formula',
            expression: '120 x 80',
            result: '9600 sq. units',
            explanation: 'Multiply width by height to get the area.',
            variables: { width: 120, height: 80, area: 9600 },
          },
        ],
      },
      {
        name: 'Perimeter',
        formula: '2 x (width + height)',
        steps: [
          {
            id: 1,
            operation: 'Sum of sides',
            expression: '120 + 80',
            result: '200',
            explanation: 'Add width and height.',
            variables: { width: 120, height: 80, sum: 200 },
          },
          {
            id: 2,
            operation: 'Multiply by 2',
            expression: '2 x 200',
            result: '400 units',
            explanation: 'Multiply the sum by 2 to get the perimeter.',
            variables: { width: 120, height: 80, perimeter: 400 },
          },
        ],
      },
    ],
  },
  {
    id: 'tri-1',
    type: 'triangle',
    properties: { base: 140, height: 100 },
    formulas: [
      {
        name: 'Area',
        formula: '1/2 x base x height',
        steps: [
          {
            id: 1,
            operation: 'Identify dimensions',
            expression: 'base = 140, height = 100',
            result: 'base = 140, height = 100',
            explanation: 'Note the base and height of the triangle.',
            variables: { base: 140, height: 100 },
          },
          {
            id: 2,
            operation: 'Multiply base by height',
            expression: '140 x 100',
            result: '14000',
            explanation: 'Multiply base by height.',
            variables: { base: 140, height: 100, product: 14000 },
          },
          {
            id: 3,
            operation: 'Divide by 2',
            expression: '14000 / 2',
            result: '7000 sq. units',
            explanation: 'Divide by 2 to get the area of the triangle.',
            variables: { base: 140, height: 100, area: 7000 },
          },
        ],
      },
    ],
  },
  {
    id: 'circ-1',
    type: 'circle',
    properties: { radius: 80 },
    formulas: [
      {
        name: 'Area',
        formula: 'pi x r^2',
        steps: [
          {
            id: 1,
            operation: 'Identify radius',
            expression: 'r = 80',
            result: 'r = 80',
            explanation: 'Note the radius of the circle.',
            variables: { radius: 80 },
          },
          {
            id: 2,
            operation: 'Square the radius',
            expression: '80^2',
            result: '6400',
            explanation: 'Square the radius.',
            variables: { radius: 80, rSquared: 6400 },
          },
          {
            id: 3,
            operation: 'Multiply by pi',
            expression: '3.1416 x 6400',
            result: '20106.19 sq. units',
            explanation: 'Multiply by pi to get the area.',
            variables: { radius: 80, area: 20106.19 },
          },
        ],
      },
      {
        name: 'Circumference',
        formula: '2 x pi x r',
        steps: [
          {
            id: 1,
            operation: 'Identify radius',
            expression: 'r = 80',
            result: 'r = 80',
            explanation: 'Note the radius of the circle.',
            variables: { radius: 80 },
          },
          {
            id: 2,
            operation: 'Apply circumference formula',
            expression: '2 x 3.1416 x 80',
            result: '502.65 units',
            explanation: 'Multiply 2, pi, and the radius to get circumference.',
            variables: { radius: 80, circumference: 502.65 },
          },
        ],
      },
    ],
  },
]

interface GeometryVisualizerProps {
  shapes?: GeometryShape[]
}

function ShapeSVG({ shape }: { shape: GeometryShape }) {
  const cx = 200
  const cy = 200

  switch (shape.type) {
    case 'rectangle': {
      const w = shape.properties.width
      const h = shape.properties.height
      const x = cx - w / 2
      const y = cy - h / 2
      return (
        <>
          <rect
            x={x}
            y={y}
            width={w}
            height={h}
            fill="rgba(59,130,246,0.12)"
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <text x={cx} y={y + h + 20} textAnchor="middle" className="fill-text-primary text-sm">
            width = {w}
          </text>
          <text x={x - 10} y={cy} textAnchor="end" className="fill-text-primary text-sm">
            height = {h}
          </text>
        </>
      )
    }
    case 'triangle': {
      const base = shape.properties.base
      const height = shape.properties.height
      const x1 = cx - base / 2
      const y1 = cy + height / 2
      const x2 = cx + base / 2
      const y2 = y1
      const x3 = cx
      const y3 = cy - height / 2
      return (
        <>
          <polygon
            points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
            fill="rgba(59,130,246,0.12)"
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <text x={cx} y={y1 + 20} textAnchor="middle" className="fill-text-primary text-sm">
            base = {base}
          </text>
          <line
            x1={cx}
            y1={y3}
            x2={cx}
            y2={y1}
            stroke="#94a3b8"
            strokeWidth={1}
            strokeDasharray="4"
          />
          <text x={cx + 10} y={cy} textAnchor="start" className="fill-text-primary text-sm">
            h = {height}
          </text>
        </>
      )
    }
    case 'circle': {
      const r = shape.properties.radius
      return (
        <>
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="rgba(59,130,246,0.12)"
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <line
            x1={cx}
            y1={cy}
            x2={cx + r}
            y2={cy}
            stroke="#94a3b8"
            strokeWidth={1.5}
            strokeDasharray="4"
          />
          <text x={cx + r / 2} y={cy - 8} textAnchor="middle" className="fill-text-primary text-sm">
            r = {r}
          </text>
        </>
      )
    }
    default:
      return null
  }
}

export function GeometryVisualizer({ shapes = DEFAULT_SHAPES }: GeometryVisualizerProps) {
  const [selectedShapeId, setSelectedShapeId] = useState(shapes[0]?.id ?? '')
  const [selectedFormulaIdx, setSelectedFormulaIdx] = useState(0)

  const selectedShape = useMemo(
    () => shapes.find((s) => s.id === selectedShapeId) ?? shapes[0],
    [shapes, selectedShapeId]
  )

  const selectedFormula = selectedShape?.formulas[selectedFormulaIdx] ?? selectedShape?.formulas[0]

  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    if (selectedFormula) {
      reset()
      setSteps(selectedFormula.steps.length)
    }
  }, [selectedFormula, reset, setSteps])

  useEffect(() => {
    setSelectedFormulaIdx(0)
  }, [selectedShapeId])

  const currentStepData = selectedFormula?.steps[currentStep]

  if (!selectedShape || !selectedFormula || !currentStepData) {
    return <p className="text-text-muted">No shapes available.</p>
  }

  const shapeButtonClass =
    'rounded-md border px-4 py-2 text-sm transition-colors cursor-pointer'

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        {shapes.map((s) => (
          <button
            key={s.id}
            className={`${shapeButtonClass} ${
              s.id === selectedShapeId
                ? 'border-subject-quant bg-subject-quant-light text-subject-quant-dark font-medium'
                : 'border-border-primary bg-bg-elevated text-text-secondary hover:bg-bg-tertiary'
            }`}
            onClick={() => setSelectedShapeId(s.id)}
          >
            {s.type}
          </button>
        ))}
      </div>

      {selectedShape.formulas.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {selectedShape.formulas.map((f, idx) => (
            <button
              key={f.name}
              className={`${shapeButtonClass} ${
                idx === selectedFormulaIdx
                  ? 'border-subject-quant bg-subject-quant-light text-subject-quant-dark font-medium'
                  : 'border-border-primary bg-bg-elevated text-text-secondary hover:bg-bg-tertiary'
              }`}
              onClick={() => setSelectedFormulaIdx(idx)}
            >
              {f.name}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center justify-center rounded-lg border border-border-primary bg-bg-secondary p-4 md:w-1/2">
          <svg viewBox="0 0 400 400" width="100%" height="auto" className="max-h-[350px]">
            <ShapeSVG shape={selectedShape} />
          </svg>
        </div>

        <div className="flex flex-col gap-3 md:w-1/2">
          <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Formula
            </h3>
            <p className="font-mono text-lg text-text-primary">{selectedFormula.formula}</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedShapeId}-${selectedFormulaIdx}-${currentStep}`}
              className="flex flex-col gap-3 rounded-lg border border-border-primary bg-bg-secondary p-4"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              <span className="rounded-md bg-subject-quant-light px-2 py-1 text-xs font-medium text-subject-quant-dark self-start">
                {currentStepData.operation}
              </span>
              <p className="font-mono text-base text-text-primary">{currentStepData.expression}</p>
              <p className="font-mono text-xl font-bold text-subject-quant">
                = {currentStepData.result}
              </p>
              <p className="text-sm text-text-secondary">{currentStepData.explanation}</p>
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
