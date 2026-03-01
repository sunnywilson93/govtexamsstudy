import type { Metadata } from 'next'
import { StepSolver } from '@/components/visualizers/quant/StepSolver'

export const metadata: Metadata = {
  title: 'Step-by-Step Math Problem Solver',
  description:
    'Solve arithmetic, algebra and percentage problems with animated step-by-step breakdowns for government exam preparation.',
}
import { percentageProblems } from '@/data/quant/problems/percentage-problems'

export default function StepSolverPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Step-by-Step Problem Solver</h1>
      <StepSolver problems={percentageProblems} />
    </div>
  )
}
