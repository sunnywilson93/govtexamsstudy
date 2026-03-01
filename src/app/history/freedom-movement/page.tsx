'use client'

import { CauseEffectChain } from '@/components/visualizers/history/CauseEffectChain'
import { causeEffectChains } from '@/data/history/cause-effect-chains'
import { historicalEvents } from '@/data/history/events'

export default function FreedomMovementPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Cause-Effect Chains</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Step through how key events in Indian history led to each other. Select a chain and navigate through the events to understand the causal relationships.
        </p>
      </div>
      <CauseEffectChain chains={causeEffectChains} events={historicalEvents} />
    </div>
  )
}
