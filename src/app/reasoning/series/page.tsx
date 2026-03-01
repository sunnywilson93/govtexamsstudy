import type { Metadata } from 'next'
import { SeriesVisualizer } from '@/components/visualizers/reasoning/SeriesVisualizer'

export const metadata: Metadata = {
  title: 'Number Series Pattern Detector',
  description:
    'Detect patterns in number and letter series with highlighted differences and ratios for government exam preparation.',
}
import { seriesProblems } from '@/data/reasoning/series-problems'

export default function SeriesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Series Pattern Detector</h1>
      <SeriesVisualizer problems={seriesProblems} />
    </div>
  )
}
