import Link from 'next/link'

const VISUALIZERS = [
  {
    href: '/reasoning/seating',
    title: 'Seating Arrangement',
    description: 'Solve linear and circular seating arrangement problems with animated visual deductions.',
  },
  {
    href: '/reasoning/syllogism',
    title: 'Syllogism Venn Builder',
    description: 'Build Venn diagrams step-by-step to solve syllogism problems visually.',
  },
  {
    href: '/reasoning/series',
    title: 'Series Pattern Detector',
    description: 'Detect patterns in number and letter series with highlighted differences and ratios.',
  },
]

export default function ReasoningPage() {
  return (
    <div>
      <p className="mb-8 text-text-secondary">
        Solve seating arrangements, syllogisms and number series with animated visual deductions.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
