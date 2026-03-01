'use client'

import { indiaStates } from '@/data/geography/india-states'
import { rivers } from '@/data/geography/rivers'
import { IndiaMap } from '@/components/visualizers/geography/IndiaMap'
import type { MapLayer } from '@/types/geography'

const riversLayer: MapLayer = {
  id: 'rivers',
  name: 'Rivers',
  type: 'rivers',
  features: rivers,
  visible: true,
}

export default function MapPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold text-text-primary">
        Interactive India Map
      </h1>
      <p className="mb-6 text-sm text-text-secondary">
        Explore Indian states and geographical features. Click on a state or river to view details.
      </p>
      <IndiaMap states={indiaStates} layers={[riversLayer]} />
    </div>
  )
}
