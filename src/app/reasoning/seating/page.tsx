import { SeatingVisualizer } from '@/components/visualizers/reasoning/SeatingVisualizer'
import { seatingProblems } from '@/data/reasoning/seating-problems'

export default function SeatingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Seating Arrangement Solver</h1>
      <SeatingVisualizer problems={seatingProblems} />
    </div>
  )
}
