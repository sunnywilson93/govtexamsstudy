import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quantitative Aptitude — Interactive Visual Learning',
  description:
    'Master quantitative aptitude for SSC CGL, IBPS PO, and other government exams. Concepts, shortcut tricks, and step-by-step animated problem solvers.',
}

interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
}

interface Section {
  heading: string
  subheading: string
  topics: Topic[]
}

const SECTIONS: Section[] = [
  {
    heading: 'Arithmetic',
    subheading: 'Core topics asked in every exam',
    topics: [
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
    ],
  },
  {
    heading: 'Advanced Arithmetic',
    subheading: 'High-weightage topics for Tier 2 and banking',
    topics: [
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
    ],
  },
  {
    heading: 'Higher Mathematics',
    subheading: 'SSC CGL Tier 2, CDS, and UPSC CSAT',
    topics: [
      {
        href: '/quant/algebra',
        title: 'Algebra',
        description: 'Linear equations, quadratic roots, algebraic identities, and the remainder theorem.',
        hasTabs: true,
      },
      {
        href: '/quant/trigonometry',
        title: 'Trigonometry',
        description: 'SOHCAHTOA, standard values, Pythagorean identities, complementary angles, and heights & distances.',
        hasTabs: true,
      },
      {
        href: '/quant/data-interpretation',
        title: 'Data Interpretation',
        description: 'Tables, bar charts, pie charts, line graphs, and caselet DI with approximation tricks.',
        hasTabs: true,
      },
      {
        href: '/quant/statistics-probability',
        title: 'Statistics & Probability',
        description: 'Mean/median/mode, variance, probability rules, P&C, and the complement rule.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Visualizer',
    subheading: 'Interactive animated explorations',
    topics: [
      {
        href: '/quant/geometry',
        title: 'Geometry Visualizer',
        description: 'Interactive shapes — area, perimeter, and formula proofs with animation.',
        hasTabs: false,
      },
    ],
  },
  {
    heading: 'Miscellaneous',
    subheading: 'High-frequency topics across all exams',
    topics: [
      {
        href: '/quant/surds-indices',
        title: 'Surds & Indices',
        description: 'Laws of indices, negative/fractional exponents, surd simplification, and rationalisation.',
        hasTabs: true,
      },
      {
        href: '/quant/partnership',
        title: 'Partnership',
        description: 'Simple and compound partnership, equivalent capital method, working vs sleeping partners.',
        hasTabs: true,
      },
      {
        href: '/quant/ages',
        title: 'Problems on Ages',
        description: 'Present age setup, ratio method, past/future age conditions, and multi-person problems.',
        hasTabs: true,
      },
      {
        href: '/quant/simplification',
        title: 'Simplification',
        description: 'BODMAS rule, approximation for banking exams, fraction operations, and square roots.',
        hasTabs: true,
      },
      {
        href: '/quant/sequences-series',
        title: 'Sequences & Series',
        description: 'AP/GP nth term, sum formulas, special series, and number series patterns.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Applied Problems',
    subheading: 'Motion, proportion, and number topics from R.S. Aggarwal',
    topics: [
      {
        href: '/quant/decimal-fractions',
        title: 'Decimal Fractions',
        description: 'Decimal operations, fraction conversion, recurring decimals, and approximation.',
        hasTabs: true,
      },
      {
        href: '/quant/square-cube-roots',
        title: 'Square & Cube Roots',
        description: 'Finding roots, estimation methods, perfect square shortcuts, and cube root tricks.',
        hasTabs: true,
      },
      {
        href: '/quant/chain-rule',
        title: 'Chain Rule',
        description: 'Direct and inverse proportion chains, multi-variable work and cost problems.',
        hasTabs: true,
      },
      {
        href: '/quant/boats-streams',
        title: 'Boats & Streams',
        description: 'Upstream/downstream speed, still water and stream speed formulas.',
        hasTabs: true,
      },
      {
        href: '/quant/problems-on-trains',
        title: 'Problems on Trains',
        description: 'Crossing a pole, platform, and another train — relative speed and length problems.',
        hasTabs: true,
      },
      {
        href: '/quant/races-games',
        title: 'Races & Games',
        description: 'Beat by distance/time, head start, three-runner chain, and games of skill points.',
        hasTabs: true,
      },
      {
        href: '/quant/logarithms',
        title: 'Logarithms',
        description: 'Log rules (product, quotient, power), standard values log 2/3/7, and log equations.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Banking & Special Topics',
    subheading: 'Time-based and financial topics for SSC CGL Tier 2 and banking exams',
    topics: [
      {
        href: '/quant/calendar',
        title: 'Calendar',
        description: 'Day of the week, odd days method, leap year rules, and date calculations.',
        hasTabs: true,
      },
      {
        href: '/quant/clocks',
        title: 'Clocks',
        description: 'Angle between hands, coincidence times, right-angle positions, and clock gain/loss.',
        hasTabs: true,
      },
      {
        href: '/quant/stocks-shares',
        title: 'Stocks & Shares',
        description: 'Face value, market value, dividend yield, and brokerage calculations.',
        hasTabs: true,
      },
      {
        href: '/quant/true-discount',
        title: 'True Discount',
        description: "Present worth, true discount vs simple interest, and banker's gain formula.",
        hasTabs: true,
      },
      {
        href: '/quant/bankers-discount',
        title: "Banker's Discount",
        description: "Banker's discount vs true discount, banker's gain, and face value from BD and BG.",
        hasTabs: true,
      },
    ],
  },
]

export default function QuantPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold" style={{ color: '#3b82f6' }}>Quantitative Aptitude</h1>
      <p className="text-text-secondary">
        Master arithmetic, algebra, and geometry with step-by-step visual solvers. Each topic
        covers core concepts, exam shortcuts, and animated practice problems.
      </p>

      {SECTIONS.map((section) => (
        <section key={section.heading}>
          <div className="mb-3">
            <h2 className="text-base font-semibold text-text-primary">{section.heading}</h2>
            <p className="text-xs text-text-muted">{section.subheading}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="rounded-lg border border-border-primary bg-bg-elevated p-4 no-underline transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 text-sm font-semibold text-text-primary">{topic.title}</h3>
                <p className="mb-2 text-xs leading-relaxed text-text-secondary">{topic.description}</p>
                {topic.hasTabs && (
                  <p className="text-xs text-text-muted">5 concepts · 5 tricks · 5 problems</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
