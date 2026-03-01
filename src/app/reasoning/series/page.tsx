import { SeriesVisualizer } from '@/components/visualizers/reasoning/SeriesVisualizer'
import { seriesProblems } from '@/data/reasoning/series-problems'

export default function SeriesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Series Pattern Detector</h1>
      <SeriesVisualizer problems={seriesProblems} />
    </div>
  )
}
