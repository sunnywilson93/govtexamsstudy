import type { Metadata } from 'next'
import { BudgetTreemap } from '@/components/visualizers/economics/BudgetTreemap'

export const metadata: Metadata = {
  title: 'Union Budget Visualizer',
  description:
    "Explore India's Union Budget with interactive treemaps and drill-down subcategories for government exam preparation.",
}
import { budgetItems } from '@/data/economics/budget-2025'

export default function BudgetPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary">Union Budget 2024-25</h1>
      <p className="mt-1 text-sm text-text-secondary">
        Explore India&apos;s Union Budget. Click any category to drill down into subcategories.
      </p>
      <div className="mt-6">
        <BudgetTreemap items={budgetItems} />
      </div>
    </div>
  )
}
