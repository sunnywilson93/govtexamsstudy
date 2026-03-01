import { SyllogismVisualizer } from '@/components/visualizers/reasoning/SyllogismVisualizer'
import { syllogismProblems } from '@/data/reasoning/syllogism-problems'

export default function SyllogismPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Syllogism Venn Diagram Builder</h1>
      <SyllogismVisualizer problems={syllogismProblems} />
    </div>
  )
}
