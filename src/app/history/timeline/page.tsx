'use client'

import { Timeline } from '@/components/visualizers/history/Timeline'
import { historicalEvents } from '@/data/history/events'
import { periods } from '@/data/history/periods'

export default function TimelinePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Interactive Timeline</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Explore key events in Indian history across different periods. Click on an event marker to view its details, causes, and effects.
        </p>
      </div>
      <Timeline events={historicalEvents} periods={periods} />
    </div>
  )
}
