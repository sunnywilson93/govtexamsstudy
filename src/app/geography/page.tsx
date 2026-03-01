import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Geography - Interactive India Map',
  description:
    "Explore India's physical and political geography on an interactive layered map for government exam preparation.",
}

const VISUALIZERS = [
  {
    href: '/geography/map',
    title: 'Interactive Map',
    description: 'Explore India\'s physical and political geography on a layered interactive map with rivers, states and more.',
  },
]

export default function GeographyPage() {
  return (
    <div>
      <p className="mb-8 text-text-secondary">
        {"Explore India's physical and political geography on an interactive layered map."}
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
