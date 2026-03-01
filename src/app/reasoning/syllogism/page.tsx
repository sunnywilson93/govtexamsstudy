import type { Metadata } from 'next'
import { SyllogismVisualizer } from '@/components/visualizers/reasoning/SyllogismVisualizer'

export const metadata: Metadata = {
  title: 'Syllogism Venn Diagram Builder',
  description:
    'Build Venn diagrams step-by-step to solve syllogism problems visually for government exam preparation.',
}
import { syllogismProblems } from '@/data/reasoning/syllogism-problems'

export default function SyllogismPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Syllogism Venn Diagram Builder</h1>
      <SyllogismVisualizer problems={syllogismProblems} />
    </div>
  )
}
