import type { Metadata } from 'next'
import { amendments } from '@/data/polity/amendments'

export const metadata: Metadata = {
  title: 'Amendment Timeline',
  description:
    'Explore constitutional amendments on an interactive timeline with impact analysis for government exam preparation.',
}
import { AmendmentTimeline } from '@/components/visualizers/polity/AmendmentTimeline'

export default function AmendmentsPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-text-primary">Amendment Timeline</h1>
      <p className="mb-6 text-sm text-text-secondary">
        Explore constitutional amendments on an interactive timeline. Filter by significance and expand cards for details.
      </p>
      <AmendmentTimeline amendments={amendments} />
    </div>
  )
}
