import Link from 'next/link'

const VISUALIZERS = [
  {
    href: '/economics/flows',
    title: 'Policy Flow Diagrams',
    description: 'Visualize monetary and fiscal policy flows with interactive step-by-step diagrams.',
  },
  {
    href: '/economics/budget',
    title: 'Budget Visualizer',
    description: 'Explore Union Budget breakdowns with interactive treemaps and comparisons.',
  },
]

export default function EconomicsPage() {
  return (
    <div>
      <p className="mb-8 text-text-secondary">
        Visualize monetary and fiscal policy flows, budget breakdowns and economic concepts.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {VISUALIZERS.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            className="rounded-lg border border-border-primary bg-bg-elevated p-5 no-underline transition-shadow hover:shadow-md"
          >
            <div className="mb-1 flex items-center gap-2">
              <h3 className="text-base font-semibold text-text-primary">{v.title}</h3>
              <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary">
                Coming Soon
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">{v.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
