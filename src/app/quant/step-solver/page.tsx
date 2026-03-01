import { StepSolver } from '@/components/visualizers/quant/StepSolver'
import { percentageProblems } from '@/data/quant/percentage-problems'

export default function StepSolverPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Step-by-Step Problem Solver</h1>
      <StepSolver problems={percentageProblems} />
    </div>
  )
}
