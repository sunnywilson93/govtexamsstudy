'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import { FlowNode, NODE_WIDTH, NODE_HEIGHT } from './FlowNode'
import type { PolicyFlow } from '@/types/economics'

interface PolicyFlowDiagramProps {
  flows: PolicyFlow[]
}

const NODE_GAP_Y = 90
const SVG_PADDING_X = 40
const SVG_PADDING_TOP = 40

export function PolicyFlowDiagram({ flows }: PolicyFlowDiagramProps) {
  const [selectedFlowId, setSelectedFlowId] = useState(flows[0]?.id ?? '')

  const selectedFlow = useMemo(
    () => flows.find((f) => f.id === selectedFlowId) ?? flows[0],
    [flows, selectedFlowId],
  )

  const steps = selectedFlow?.steps ?? []

  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    reset()
    if (steps.length > 0) {
      setSteps(steps.length)
    }
  }, [steps.length, reset, setSteps])

  const activeStep = steps[currentStep]

  const svgCenterX = SVG_PADDING_X + NODE_WIDTH / 2
  const svgHeight = steps.length * NODE_GAP_Y + SVG_PADDING_TOP
  const svgWidth = NODE_WIDTH + SVG_PADDING_X * 2

  if (flows.length === 0) {
    return <p className="text-text-muted">No policy flows available.</p>
  }

  function getNodeStatus(index: number): 'active' | 'completed' | 'locked' {
    if (index === currentStep) return 'active'
    if (index < currentStep) return 'completed'
    return 'locked'
  }

  function getNodeY(index: number): number {
    return SVG_PADDING_TOP + index * NODE_GAP_Y + NODE_HEIGHT / 2
  }

  return (
    <div className="flex flex-col gap-5">
      <select
        className="rounded-md border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary"
        value={selectedFlowId}
        onChange={(e) => setSelectedFlowId(e.target.value)}
        aria-label="Select flow"
      >
        {flows.map((flow) => (
          <option key={flow.id} value={flow.id}>
            {flow.name}
          </option>
        ))}
      </select>

      {selectedFlow && (
        <p className="text-sm leading-relaxed text-text-secondary">{selectedFlow.description}</p>
      )}

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1 overflow-x-auto">
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="mx-auto block"
            role="img"
            aria-label="Policy flow diagram"
          >
            {steps.map((step, index) => {
              if (index >= steps.length - 1) return null
              const fromY = getNodeY(index) + NODE_HEIGHT / 2
              const toY = getNodeY(index + 1) - NODE_HEIGHT / 2
              const isTraversed = index < currentStep

              return (
                <g key={`arrow-${step.id}`}>
                  <motion.line
                    x1={svgCenterX}
                    y1={fromY}
                    x2={svgCenterX}
                    y2={toY}
                    stroke={isTraversed ? '#0d9488' : '#d1d5db'}
                    strokeWidth={2}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                  <motion.polygon
                    points={`${svgCenterX - 5},${toY - 6} ${svgCenterX + 5},${toY - 6} ${svgCenterX},${toY}`}
                    fill={isTraversed ? '#0d9488' : '#d1d5db'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  />
                  {step.connections[0] && (
                    <text
                      x={svgCenterX + NODE_WIDTH / 2 + 8}
                      y={(fromY + toY) / 2}
                      fontSize={10}
                      fill={isTraversed ? '#0d9488' : '#9ca3af'}
                      dominantBaseline="central"
                      className="pointer-events-none"
                    >
                      {step.connections[0].label}
                    </text>
                  )}
                </g>
              )
            })}

            {steps.map((step, index) => (
              <FlowNode
                key={step.id}
                title={step.title}
                description={step.description}
                status={getNodeStatus(index)}
                x={svgCenterX}
                y={getNodeY(index)}
              />
            ))}
          </svg>
        </div>

        <div className="lg:w-72 shrink-0">
          {activeStep && (
            <motion.div
              key={activeStep.id}
              className="rounded-lg border border-teal-200 bg-teal-50 p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm font-semibold text-teal-900">
                Step {currentStep + 1}: {activeStep.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-teal-800">
                {activeStep.description}
              </p>
              {activeStep.value && (
                <p className="mt-2 rounded bg-teal-100 px-2 py-1 text-xs font-medium text-teal-700">
                  {activeStep.value}
                </p>
              )}
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
