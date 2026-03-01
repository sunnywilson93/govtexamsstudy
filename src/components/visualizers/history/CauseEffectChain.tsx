'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { ArrowDown } from 'lucide-react'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { CauseEffectChain as CauseEffectChainType, HistoricalEvent } from '@/types/history'

interface CauseEffectChainProps {
  chains: CauseEffectChainType[]
  events: HistoricalEvent[]
}

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`
  return `${year} CE`
}

export function CauseEffectChain({ chains, events }: CauseEffectChainProps) {
  const [selectedChainId, setSelectedChainId] = useState(chains[0]?.id ?? '')

  const selectedChain = useMemo(
    () => chains.find((c) => c.id === selectedChainId) ?? chains[0],
    [chains, selectedChainId]
  )

  const chainEvents = useMemo(() => {
    if (!selectedChain) return []
    return selectedChain.events
      .map((eventId) => events.find((e) => e.id === eventId))
      .filter((e): e is HistoricalEvent => e !== undefined)
  }, [selectedChain, events])

  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    reset()
    if (chainEvents.length > 0) {
      setSteps(chainEvents.length)
    }
  }, [chainEvents.length, reset, setSteps])

  if (chains.length === 0) {
    return <p className="text-text-muted">No cause-effect chains available.</p>
  }

  return (
    <div className="flex flex-col gap-5">
      <select
        className="rounded-md border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary"
        value={selectedChainId}
        onChange={(e) => setSelectedChainId(e.target.value)}
        aria-label="Select chain"
      >
        {chains.map((chain) => (
          <option key={chain.id} value={chain.id}>
            {chain.title}
          </option>
        ))}
      </select>

      {selectedChain && (
        <p className="text-sm leading-relaxed text-text-secondary">
          {selectedChain.description}
        </p>
      )}

      <div className="flex flex-col items-center gap-0">
        {chainEvents.map((event, index) => {
          const isActive = index === currentStep
          const isCompleted = index < currentStep
          const isLocked = index > currentStep

          return (
            <div key={event.id} className="flex flex-col items-center">
              <motion.div
                className={clsx(
                  'w-full max-w-lg rounded-lg border p-4 transition-colors',
                  isActive && 'border-amber-500 bg-amber-50 shadow-md',
                  isCompleted && 'border-border-primary bg-bg-elevated opacity-60',
                  isLocked && 'border-border-primary bg-bg-tertiary opacity-40'
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLocked ? 0.4 : 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={clsx(
                          'flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold',
                          isActive && 'bg-amber-500 text-white',
                          isCompleted && 'bg-emerald-500 text-white',
                          isLocked && 'bg-bg-elevated text-text-muted'
                        )}
                      >
                        {index + 1}
                      </span>
                      <h3
                        className={clsx(
                          'text-sm font-semibold',
                          isActive ? 'text-amber-900' : 'text-text-primary'
                        )}
                      >
                        {event.title}
                      </h3>
                    </div>
                    <p className="ml-8 mt-0.5 text-xs text-text-muted">
                      {formatYear(event.year)}
                      {event.endYear && ` \u2013 ${formatYear(event.endYear)}`}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <div className="ml-8 mt-3">
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {event.description}
                    </p>

                    {event.causes.length > 0 && (
                      <div className="mt-2">
                        <span className="text-xs font-semibold text-text-primary">Causes:</span>
                        <ul className="ml-4 mt-0.5 list-disc text-xs text-text-secondary">
                          {event.causes.map((cause, i) => (
                            <li key={i}>{cause}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.effects.length > 0 && (
                      <div className="mt-2">
                        <span className="text-xs font-semibold text-text-primary">Effects:</span>
                        <ul className="ml-4 mt-0.5 list-disc text-xs text-text-secondary">
                          {event.effects.map((effect, i) => (
                            <li key={i}>{effect}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>

              {index < chainEvents.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <ArrowDown
                    size={20}
                    className={clsx(
                      index < currentStep ? 'text-emerald-500' : 'text-text-muted'
                    )}
                  />
                </div>
              )}
            </div>
          )
        })}
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
