import type { Metadata } from 'next'
import { elements } from '@/data/science/elements'

export const metadata: Metadata = {
  title: 'Interactive Periodic Table',
  description:
    'Explore all 118 elements with category filters, search, and exam-relevant facts for government exam preparation.',
}
import { PeriodicTable } from '@/components/visualizers/science/PeriodicTable'

export default function PeriodicTablePage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-text-primary">
        Interactive Periodic Table
      </h1>
      <p className="mb-6 text-sm text-text-secondary">
        Explore all 118 elements with category filters, search, and detailed
        exam-relevant facts for each element.
      </p>
      <PeriodicTable elements={elements} />
    </div>
  )
}
