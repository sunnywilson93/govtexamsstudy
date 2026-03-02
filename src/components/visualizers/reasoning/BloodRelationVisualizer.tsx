'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { BloodRelationProblem, BloodRelationNode } from '@/types/reasoning'

const GEN_Y: Record<number, number> = {
  [-2]: 40,
  [-1]: 110,
  0: 200,
  1: 280,
}

const PURPLE = '#8b5cf6'

function getNodeX(node: BloodRelationNode, allNodes: BloodRelationNode[]): number {
  const sameGen = allNodes.filter((n) => n.generation === node.generation)
  const idx = sameGen.findIndex((n) => n.id === node.id)
  const step = 600 / (sameGen.length + 1)
  return step * (idx + 1)
}

export function BloodRelationVisualizer({ problem }: { problem: BloodRelationProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  const stepsLength = problem.steps.length
  useEffect(() => {
    reset()
    setSteps(stepsLength)
  }, [stepsLength, reset, setSteps])

  const visibleEdges = problem.edges.slice(0, currentStep)
  const currentStepText = problem.steps[currentStep] ?? ''
  const isLastStep = currentStep === totalSteps - 1

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      <svg
        viewBox="0 0 600 320"
        className="w-full rounded-lg border border-border-primary bg-bg-secondary"
        aria-label="Family tree diagram"
      >
        {/* Edges */}
        {visibleEdges.map((edge, i) => {
          const from = problem.nodes.find((n) => n.id === edge.from)!
          const to = problem.nodes.find((n) => n.id === edge.to)!
          const x1 = getNodeX(from, problem.nodes)
          const y1 = GEN_Y[from.generation] ?? 150
          const x2 = getNodeX(to, problem.nodes)
          const y2 = GEN_Y[to.generation] ?? 200
          const mx = (x1 + x2) / 2
          const my = (y1 + y2) / 2
          return (
            <g key={i}>
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isLastStep ? PURPLE : '#94a3b8'}
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <text x={mx} y={my - 6} textAnchor="middle" fontSize="10" fill="#64748b">
                {edge.label}
              </text>
            </g>
          )
        })}

        {/* Nodes — always visible */}
        {problem.nodes.map((node) => {
          const x = getNodeX(node, problem.nodes)
          const y = GEN_Y[node.generation] ?? 150
          return (
            <g key={node.id}>
              <circle
                cx={x}
                cy={y}
                r={28}
                fill={isLastStep ? `${PURPLE}22` : '#f1f5f9'}
                stroke={isLastStep ? PURPLE : '#94a3b8'}
                strokeWidth="2"
              />
              <text
                x={x}
                y={y - 4}
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#1e293b"
              >
                {node.name}
              </text>
              <text x={x} y={y + 12} textAnchor="middle" fontSize="10" fill="#64748b">
                {node.gender === 'M' ? '♂' : '♀'}
              </text>
            </g>
          )
        })}
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
          key={currentStepText}
          className="text-center text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {currentStepText}
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
