import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'General Science - Interactive Explorers',
  description:
    'Interactive periodic table, human body systems explorer and key science concepts for government exam preparation.',
}

const VISUALIZERS = [
  {
    href: '/science/periodic-table',
    title: 'Periodic Table',
    description: 'Interactive periodic table with element details, grouping filters and exam-relevant properties.',
  },
  {
    href: '/science/human-body',
    title: 'Human Body Systems',
    description: 'Explore human body systems with labeled diagrams and exam-focused key facts.',
  },
]

export default function SciencePage() {
  return (
    <div>
      <p className="mb-8 text-text-secondary">
        Interactive periodic table, human body systems explorer and key science concepts for exams.
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
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">{v.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
