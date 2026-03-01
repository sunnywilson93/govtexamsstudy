'use client'

import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import type { IndiaState, GeoFeature } from '@/types/geography'

type SidebarFeature =
  | { type: 'state'; data: IndiaState }
  | { type: 'river'; data: GeoFeature }

interface FeatureSidebarProps {
  feature: SidebarFeature | null
  onClose: () => void
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return n.toLocaleString()
}

export function FeatureSidebar({ feature, onClose }: FeatureSidebarProps) {
  return (
    <AnimatePresence>
      {feature && (
        <motion.aside
          role="dialog"
          aria-label={feature.data.name}
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-border-primary bg-bg-primary shadow-xl"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <div className="flex items-center justify-between border-b border-border-primary p-4">
            <div>
              <h2 className="text-lg font-semibold text-text-primary">{feature.data.name}</h2>
              <span className="inline-block rounded-full bg-subject-geography-light px-2.5 py-0.5 text-xs font-medium capitalize text-subject-geography-dark">
                {feature.type}
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-md p-1.5 text-text-muted transition-colors hover:bg-bg-tertiary hover:text-text-primary"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {feature.type === 'state' && <StateDetails state={feature.data} />}
            {feature.type === 'river' && <RiverDetails river={feature.data} />}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

function StateDetails({ state }: { state: IndiaState }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border-primary p-3">
          <p className="text-xs text-text-muted">Capital</p>
          <p className="mt-0.5 text-sm font-medium text-text-primary">{state.capital}</p>
        </div>
        <div className="rounded-lg border border-border-primary p-3">
          <p className="text-xs text-text-muted">Area</p>
          <p className="mt-0.5 text-sm font-medium text-text-primary">
            {state.area.toLocaleString()} km&sup2;
          </p>
        </div>
        <div className="col-span-2 rounded-lg border border-border-primary p-3">
          <p className="text-xs text-text-muted">Population</p>
          <p className="mt-0.5 text-sm font-medium text-text-primary">
            {formatNumber(state.population)}
          </p>
        </div>
      </div>

      {state.features.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Key Facts</h3>
          <ul className="mt-1.5 list-inside list-disc space-y-1 text-sm text-text-secondary">
            {state.features.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function RiverDetails({ river }: { river: GeoFeature }) {
  const origin = river.properties.origin as string | undefined
  const length = river.properties.length as number | undefined
  const drainageArea = river.properties.drainageArea as number | undefined
  const mouth = river.properties.mouth as string | undefined

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {origin && (
          <div className="col-span-2 rounded-lg border border-border-primary p-3">
            <p className="text-xs text-text-muted">Origin</p>
            <p className="mt-0.5 text-sm font-medium text-text-primary">{origin}</p>
          </div>
        )}
        {length != null && (
          <div className="rounded-lg border border-border-primary p-3">
            <p className="text-xs text-text-muted">Length</p>
            <p className="mt-0.5 text-sm font-medium text-text-primary">{length} km</p>
          </div>
        )}
        {drainageArea != null && (
          <div className="rounded-lg border border-border-primary p-3">
            <p className="text-xs text-text-muted">Drainage Area</p>
            <p className="mt-0.5 text-sm font-medium text-text-primary">
              {drainageArea.toLocaleString()} km&sup2;
            </p>
          </div>
        )}
        {mouth && (
          <div className="col-span-2 rounded-lg border border-border-primary p-3">
            <p className="text-xs text-text-muted">Mouth</p>
            <p className="mt-0.5 text-sm font-medium text-text-primary">{mouth}</p>
          </div>
        )}
      </div>

      {river.examFacts.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Exam Facts</h3>
          <ul className="mt-1.5 list-inside list-disc space-y-1 text-sm text-text-secondary">
            {river.examFacts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      )}

      {river.linkedTopics.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Linked Topics</h3>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {river.linkedTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-md bg-bg-tertiary px-2 py-0.5 text-xs capitalize text-text-secondary"
              >
                {topic.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
