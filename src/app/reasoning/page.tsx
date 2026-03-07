import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reasoning & Logic — Interactive Visual Learning',
  description:
    'Master reasoning and logic for SSC CGL, IBPS PO, RRB NTPC, and UPSC CSAT. Blood relations, direction, coding-decoding, puzzles, inequalities, analogies, and more.',
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
    heading: 'Interactive Visualizers',
    subheading: 'Step-by-step animated problem solvers',
    topics: [
      {
        href: '/reasoning/seating',
        title: 'Seating Arrangement',
        description:
          'Solve linear and circular seating problems with animated visual deductions.',
        hasTabs: false,
      },
      {
        href: '/reasoning/blood-relations',
        title: 'Blood Relations',
        description: 'Build family trees step-by-step to identify relationships.',
        hasTabs: false,
      },
      {
        href: '/reasoning/direction-distance',
        title: 'Direction & Distance',
        description: 'Animate paths on a compass grid and find displacement.',
        hasTabs: false,
      },
      {
        href: '/reasoning/coding-decoding',
        title: 'Coding-Decoding',
        description: 'Reveal cipher rules and decode letter-by-letter with animation.',
        hasTabs: false,
      },
      {
        href: '/reasoning/puzzles',
        title: 'Floor & Box Puzzles',
        description: 'Place persons clue-by-clue in floor or box arrangements.',
        hasTabs: false,
      },
      {
        href: '/reasoning/syllogism',
        title: 'Syllogism',
        description:
          'Build Venn diagrams step-by-step to evaluate syllogism conclusions.',
        hasTabs: false,
      },
      {
        href: '/reasoning/series',
        title: 'Series & Patterns',
        description:
          'Detect number and letter series patterns with highlighted differences.',
        hasTabs: false,
      },
      {
        href: '/reasoning/mirror-water-images',
        title: 'Mirror & Water Images',
        description:
          'Identify mirror and water reflections with animated flip transformations.',
        hasTabs: false,
      },
      {
        href: '/reasoning/cubes-dice',
        title: 'Cubes & Dice',
        description:
          'Solve cube net folding and dice opposite-face problems with visual animation.',
        hasTabs: false,
      },
      {
        href: '/reasoning/paper-folding',
        title: 'Paper Folding & Cutting',
        description: 'Watch paper fold, punch, and unfold to reveal hole patterns.',
        hasTabs: false,
      },
      {
        href: '/reasoning/clock-reasoning',
        title: 'Clock Reasoning',
        description: 'Calculate angles between clock hands with animated clock face.',
        hasTabs: false,
      },
      {
        href: '/reasoning/counting-figures',
        title: 'Counting Figures',
        description:
          'Count triangles, squares, and lines in complex figures with step-by-step highlights.',
        hasTabs: false,
      },
    ],
  },
  {
    heading: 'Verbal Reasoning',
    subheading: 'High-frequency topics for SSC, IBPS, RRB',
    topics: [
      {
        href: '/reasoning/inequalities',
        title: 'Inequalities',
        description:
          'Coded inequalities — decode symbols, combine chains, determine conclusions.',
        hasTabs: true,
      },
      {
        href: '/reasoning/analogies',
        title: 'Analogies',
        description:
          'Semantic, symbolic, and alphabetical analogy types — pair relationships.',
        hasTabs: true,
      },
      {
        href: '/reasoning/classification',
        title: 'Classification',
        description:
          'Odd one out — semantic group, letter pattern, number property, code pattern.',
        hasTabs: true,
      },
      {
        href: '/reasoning/alphabet-tests',
        title: 'Alphabet Tests',
        description: 'EJOTY trick, letter series, dictionary order, and word formation problems.',
        hasTabs: true,
      },
      {
        href: '/reasoning/input-output',
        title: 'Input-Output',
        description:
          'Decode machine rearrangement rules — step-by-step word/number patterns.',
        hasTabs: true,
      },
      {
        href: '/reasoning/order-ranking',
        title: 'Order & Ranking',
        description:
          'Position-based problems — find rank from top/bottom, total count, between positions.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Logical Reasoning',
    subheading: 'Critical thinking topics for UPSC CSAT and banking',
    topics: [
      {
        href: '/reasoning/statement-conclusions',
        title: 'Statement & Conclusions',
        description:
          'Identify valid conclusions — definite vs. possible, implicit assumptions.',
        hasTabs: true,
      },
      {
        href: '/reasoning/cause-effect',
        title: 'Cause & Effect',
        description: 'Independent causes, common causes, and effect-as-cause traps.',
        hasTabs: true,
      },
      {
        href: '/reasoning/data-sufficiency',
        title: 'Data Sufficiency',
        description:
          'Determine if given statements provide enough data to answer the question.',
        hasTabs: true,
      },
      {
        href: '/reasoning/calendar-reasoning',
        title: 'Calendar Reasoning',
        description:
          'Find the day of the week for any date using odd days and leap year rules.',
        hasTabs: true,
      },
      {
        href: '/reasoning/logical-venn-diagrams',
        title: 'Logical Venn Diagrams',
        description:
          'Identify relationships between groups using 2-circle and 3-circle Venn diagrams.',
        hasTabs: true,
      },
      {
        href: '/reasoning/linear-arrangements',
        title: 'Linear Arrangements',
        description: 'Arrange people in a row with facing and position constraints.',
        hasTabs: true,
      },
      {
        href: '/reasoning/critical-reasoning',
        title: 'Critical Reasoning',
        description:
          'Evaluate assumptions, strengthening and weakening arguments, and course of action.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Non-Verbal Reasoning',
    subheading: 'Visual pattern and spatial reasoning for SSC and competitive exams',
    topics: [
      {
        href: '/reasoning/figure-series',
        title: 'Figure Series',
        description:
          'Identify the next figure in a pattern — rotation, addition, subtraction of elements.',
        hasTabs: true,
      },
      {
        href: '/reasoning/embedded-figures',
        title: 'Embedded Figures',
        description:
          'Find a given figure hidden within a complex figure, accounting for rotation.',
        hasTabs: true,
      },
    ],
  },
]

export default function ReasoningPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold" style={{ color: '#8b5cf6' }}>
        Reasoning & Logic
      </h1>
      <p className="text-text-secondary">
        Master reasoning and logic with interactive animated visualizers and concept sheets. Each
        topic covers exam shortcuts and step-by-step animated practice problems.
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
                <p className="mb-2 text-xs leading-relaxed text-text-secondary">
                  {topic.description}
                </p>
                {topic.hasTabs && (
                  <p className="text-xs text-text-muted">5 concepts · 5 tricks · 30 problems</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
