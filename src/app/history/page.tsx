import Link from 'next/link'

const VISUALIZERS = [
  {
    href: '/history/timeline',
    title: 'Interactive Timeline',
    description: 'Navigate a zoomable timeline from the Indus Valley civilization to modern India.',
  },
  {
    href: '/history/freedom-movement',
    title: 'Freedom Movement',
    description: 'Explore cause-effect chains of key events in the Indian freedom struggle.',
  },
]

export default function HistoryPage() {
  return (
    <div>
      <p className="mb-8 text-text-secondary">
        Navigate a zoomable timeline from the Indus Valley to modern India with cause-effect chains.
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
