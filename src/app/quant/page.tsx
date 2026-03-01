import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quantitative Aptitude — Interactive Visual Learning',
  description:
    'Master quantitative aptitude for SSC CGL, IBPS PO, and other government exams. Concepts, shortcut tricks, and step-by-step animated problem solvers.',
}

const TOPICS = [
  {
    href: '/quant/percentage',
    title: 'Percentage',
    description: 'Core concept, reverse percentage, successive changes, and fraction equivalents.',
    hasTabs: true,
  },
  {
    href: '/quant/profit-loss',
    title: 'Profit, Loss & Discount',
    description: 'CP/SP formulas, successive discounts, faulty weight, and marked price problems.',
    hasTabs: true,
  },
  {
    href: '/quant/ratio',
    title: 'Ratio & Proportion',
    description: 'k-method, mean proportion, age ratio, and proportion applications.',
    hasTabs: true,
  },
  {
    href: '/quant/time-speed-distance',
    title: 'Time, Speed & Distance',
    description: 'Average speed, trains, boats, relative speed, and race problems.',
    hasTabs: true,
  },
  {
    href: '/quant/time-work',
    title: 'Time & Work',
    description: 'LCM method, efficiency, pipes & cisterns, and multi-worker problems.',
    hasTabs: true,
  },
  {
    href: '/quant/number-system',
    title: 'Number System',
    description: 'HCF, LCM, remainders, last-digit cyclicity, trailing zeros, and divisibility rules.',
    hasTabs: true,
  },
  {
    href: '/quant/average',
    title: 'Average',
    description: 'Weighted average, replacement effect, wrong entry correction, and consecutive sequences.',
    hasTabs: true,
  },
  {
    href: '/quant/simple-compound-interest',
    title: 'Simple & Compound Interest',
    description: 'SI/CI formulas, CI−SI shortcut, half-yearly compounding, and Rule of 72.',
    hasTabs: true,
  },
  {
    href: '/quant/mixture-alligation',
    title: 'Mixture & Alligation',
    description: 'Alligation cross, repeated dilution formula, mixing ratios, and concentration problems.',
    hasTabs: true,
  },
  {
    href: '/quant/mensuration',
    title: 'Mensuration',
    description: '2D and 3D shapes — area, volume, surface area, percentage change, and shape recasting.',
    hasTabs: true,
  },
  {
    href: '/quant/geometry',
    title: 'Geometry Visualizer',
    description: 'Interactive shapes — area, perimeter, and formula proofs with animation.',
    hasTabs: false,
  },
]

export default function QuantPage() {
  return (
    <div>
      <p className="mb-8 text-text-secondary">
        Master arithmetic, algebra, and geometry with step-by-step visual solvers. Each topic
        covers core concepts, exam shortcuts, and animated practice problems.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {TOPICS.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="rounded-lg border border-border-primary bg-bg-elevated p-5 no-underline transition-shadow hover:shadow-md"
          >
            <h3 className="mb-1 text-base font-semibold text-text-primary">{topic.title}</h3>
            <p className="mb-3 text-sm leading-relaxed text-text-secondary">{topic.description}</p>
            {topic.hasTabs && (
              <p className="text-xs text-text-muted">5 concepts · 5 tricks · 5 problems</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
