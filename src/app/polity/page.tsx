import Link from 'next/link'

const VISUALIZERS = [
  {
    href: '/polity/articles',
    title: 'Article Explorer',
    description: 'Browse all constitutional articles with linked amendments and landmark cases.',
  },
  {
    href: '/polity/amendments',
    title: 'Amendment Timeline',
    description: 'Explore constitutional amendments on an interactive timeline with impact analysis.',
  },
  {
    href: '/polity/landmark-cases',
    title: 'Landmark Cases',
    description: 'Study Supreme Court landmark cases and their connections to constitutional articles.',
  },
]

export default function PolityPage() {
  return (
    <div>
      <p className="mb-8 text-text-secondary">
        Explore the Constitution interactively — articles, amendments, landmark cases and their connections.
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
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">{v.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
