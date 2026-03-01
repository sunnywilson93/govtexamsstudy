'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { clsx } from 'clsx'
import type { BodySystem, Organ } from '@/types/science'

interface BodySystemExplorerProps {
  systems: BodySystem[]
}

const SYSTEM_COLORS: Record<string, string> = {
  digestive: '#22c55e',
  circulatory: '#ef4444',
  respiratory: '#3b82f6',
  nervous: '#a855f7',
  skeletal: '#f59e0b',
  excretory: '#06b6d4',
}

export function BodySystemExplorer({ systems }: BodySystemExplorerProps) {
  const [selectedSystemId, setSelectedSystemId] = useState<string>(
    systems[0]?.id ?? ''
  )
  const [selectedOrgan, setSelectedOrgan] = useState<Organ | null>(null)

  const selectedSystem =
    systems.find((s) => s.id === selectedSystemId) ?? null

  const systemColor = SYSTEM_COLORS[selectedSystemId] ?? '#06b6d4'

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
      <div className="flex shrink-0 flex-row gap-2 overflow-x-auto lg:w-48 lg:flex-col">
        {systems.map((sys) => {
          const color = SYSTEM_COLORS[sys.id] ?? '#06b6d4'
          const active = sys.id === selectedSystemId

          return (
            <button
              key={sys.id}
              onClick={() => {
                setSelectedSystemId(sys.id)
                setSelectedOrgan(null)
              }}
              className={clsx(
                'shrink-0 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors lg:w-full',
                active
                  ? 'text-white'
                  : 'bg-bg-elevated text-text-secondary hover:bg-bg-tertiary'
              )}
              style={active ? { backgroundColor: color } : undefined}
              aria-pressed={active}
            >
              {sys.name}
            </button>
          )
        })}
      </div>

      <div className="flex flex-1 flex-col items-center gap-6 md:flex-row md:items-start">
        <div className="relative flex w-52 shrink-0 items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="h-auto w-full"
            role="img"
            aria-label="Human body outline"
          >
            <path
              d="M50 5
                 C45 5, 42 8, 42 12
                 C42 16, 45 19, 50 19
                 C55 19, 58 16, 58 12
                 C58 8, 55 5, 50 5 Z
                 M50 19 L50 22
                 M42 25 L30 35 L25 50
                 M58 25 L70 35 L75 50
                 M44 22 L56 22
                 C60 22, 62 25, 62 30
                 L62 52
                 C62 55, 60 57, 57 57
                 L55 57 L58 80 L60 95
                 L55 95 L52 75 L50 65
                 L48 75 L45 95
                 L40 95 L42 80 L45 57
                 L43 57
                 C40 57, 38 55, 38 52
                 L38 30
                 C38 25, 40 22, 44 22 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border-primary"
            />

            <AnimatePresence mode="wait">
              {selectedSystem?.organs.map((organ) => (
                <motion.g
                  key={organ.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                >
                  <circle
                    cx={organ.position.x}
                    cy={organ.position.y}
                    r={selectedOrgan?.id === organ.id ? 4 : 3}
                    fill={systemColor}
                    stroke="white"
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => setSelectedOrgan(organ)}
                    role="button"
                    aria-label={organ.name}
                  />
                  <text
                    x={organ.position.x + 5}
                    y={organ.position.y + 1}
                    className="pointer-events-none fill-text-secondary text-[3px]"
                  >
                    {organ.name.split('(')[0].trim().split(' ')[0]}
                  </text>
                </motion.g>
              ))}
            </AnimatePresence>
          </svg>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          {selectedSystem && (
            <>
              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: systemColor }}
                >
                  {selectedSystem.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {selectedSystem.description}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {selectedOrgan && (
                  <motion.div
                    key={selectedOrgan.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-lg border border-border-primary bg-bg-elevated p-4"
                  >
                    <h4 className="text-sm font-semibold text-text-primary">
                      {selectedOrgan.name}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {selectedOrgan.function}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {selectedSystem.diseases.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-text-primary">
                    Diseases
                  </h4>
                  <div className="flex flex-col gap-2">
                    {selectedSystem.diseases.map((disease) => (
                      <div
                        key={disease.id}
                        className="rounded-md border border-border-primary p-3"
                      >
                        <p className="text-sm font-medium text-text-primary">
                          {disease.name}
                        </p>
                        <p className="mt-1 text-xs text-text-secondary">
                          <span className="font-medium">Cause:</span>{' '}
                          {disease.cause}
                        </p>
                        <p className="mt-1 text-xs text-text-muted">
                          {disease.examRelevance}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedSystem.examFacts.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-text-primary">
                    Exam Facts
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {selectedSystem.examFacts.map((fact, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-md border border-border-primary p-2.5 text-sm text-text-secondary"
                      >
                        <span
                          className="mt-0.5 shrink-0"
                          style={{ color: systemColor }}
                        >
                          &bull;
                        </span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
