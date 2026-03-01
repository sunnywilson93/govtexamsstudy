import type { Metadata } from 'next'
import { SeatingVisualizer } from '@/components/visualizers/reasoning/SeatingVisualizer'

export const metadata: Metadata = {
  title: 'Seating Arrangement Solver',
  description:
    'Solve linear and circular seating arrangement problems with animated visual deductions for government exam preparation.',
}
import { seatingProblems } from '@/data/reasoning/seating-problems'

export default function SeatingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Seating Arrangement Solver</h1>
      <SeatingVisualizer problems={seatingProblems} />
    </div>
  )
}
