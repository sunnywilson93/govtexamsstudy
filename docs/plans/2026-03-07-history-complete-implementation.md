# History Topics Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 35 history topic pages with Notes/Revision/PYQ Practice tabs covering all central govt prelims exams.

**Architecture:** Mirror the quant `[topic]` pattern — server-rendered dynamic route with `TOPIC_DATA` record, `generateStaticParams`, and per-topic SEO. History-native components replace quant's formula-based panels. Data split across `concepts/`, `revision/`, `problems/` directories.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, Vitest + React Testing Library

**Design doc:** `docs/plans/2026-03-07-history-complete-design.md`

---

## Task 1: Add History Types

**Files:**
- Modify: `src/types/history.ts`

**Step 1: Add new types to the existing history types file**

Append these types after the existing `HistoricalPerson` interface (do NOT remove existing types — `HistoricalEvent`, `HistoryCategory`, `Period`, `CauseEffectChain`, `HistoricalPerson` must stay):

```typescript
// --- History Topic Tabs Types ---

export interface HistoryNote {
  section: string
  content: string
}

export interface KeyDate {
  year: string
  event: string
}

export interface HistoryConcept {
  topic: string
  title: string
  description: string
  period: string
  keyDates: KeyDate[]
  notes: HistoryNote[]
  examTags: string[]
  examRelevance: string
}

export interface ComparisonTable {
  title: string
  headers: string[]
  rows: string[][]
}

export interface Mnemonic {
  title: string
  mnemonic: string
  explanation: string
}

export interface HistoryRevision {
  topic: string
  bullets: string[]
  comparisons: ComparisonTable[]
  mnemonics: Mnemonic[]
}

export interface HistoryProblem {
  id: string
  topic: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  examName: string
  examYear: number
  difficulty: 'easy' | 'medium' | 'hard'
}
```

**Step 2: Verify build**

Run: `npx tsc --noEmit`
Expected: No type errors

**Step 3: Commit**

```bash
git add src/types/history.ts
git commit -m "feat(history): add HistoryConcept, HistoryRevision, HistoryProblem types"
```

---

## Task 2: Create HistoryNotesPanel Component (TDD)

**Files:**
- Create: `src/components/visualizers/history/__tests__/HistoryNotesPanel.test.tsx`
- Create: `src/components/visualizers/history/HistoryNotesPanel.tsx`

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/history/__tests__/HistoryNotesPanel.test.tsx
import { render, screen } from '@testing-library/react'
import { HistoryNotesPanel } from '../HistoryNotesPanel'
import type { HistoryConcept } from '@/types/history'

const mockConcept: HistoryConcept = {
  topic: 'indus-valley',
  title: 'Indus Valley Civilization',
  description: 'One of the earliest urban civilizations.',
  period: 'Ancient India',
  keyDates: [
    { year: '3300 BCE', event: 'Harappan civilization begins' },
    { year: '1300 BCE', event: 'Decline of the civilization' },
  ],
  notes: [
    {
      section: 'Town Planning',
      content: 'Grid-pattern streets with advanced drainage systems.',
    },
    {
      section: 'Trade & Economy',
      content: 'Evidence of trade with Mesopotamia.',
    },
  ],
  examTags: ['UPSC Prelims', 'SSC CGL'],
  examRelevance: 'Asked in 2-3 questions every year in UPSC.',
}

describe('HistoryNotesPanel', () => {
  it('renders the topic title', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('Indus Valley Civilization')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('One of the earliest urban civilizations.')).toBeInTheDocument()
  })

  it('renders key dates', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('3300 BCE')).toBeInTheDocument()
    expect(screen.getByText('Harappan civilization begins')).toBeInTheDocument()
    expect(screen.getByText('1300 BCE')).toBeInTheDocument()
  })

  it('renders note sections', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('Town Planning')).toBeInTheDocument()
    expect(screen.getByText('Grid-pattern streets with advanced drainage systems.')).toBeInTheDocument()
    expect(screen.getByText('Trade & Economy')).toBeInTheDocument()
  })

  it('renders exam tags as chips', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('UPSC Prelims')).toBeInTheDocument()
    expect(screen.getByText('SSC CGL')).toBeInTheDocument()
  })

  it('renders exam relevance note', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText(/2-3 questions/)).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/visualizers/history/__tests__/HistoryNotesPanel.test.tsx`
Expected: FAIL — module not found

**Step 3: Write implementation**

```tsx
// src/components/visualizers/history/HistoryNotesPanel.tsx
import type { HistoryConcept } from '@/types/history'

interface HistoryNotesPanelProps {
  concept: HistoryConcept
}

export function HistoryNotesPanel({ concept }: HistoryNotesPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-text-primary">{concept.title}</h2>
        <p className="mt-2 text-text-secondary leading-relaxed">{concept.description}</p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
          Key Dates
        </h3>
        <div className="flex flex-col gap-2">
          {concept.keyDates.map((kd) => (
            <div key={kd.year} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-subject-history" />
                <div className="w-px flex-1 bg-border-primary" />
              </div>
              <div className="pb-3">
                <span className="text-sm font-semibold text-subject-history">{kd.year}</span>
                <p className="text-sm text-text-secondary">{kd.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {concept.notes.map((note) => (
          <div
            key={note.section}
            className="rounded-lg border border-border-primary bg-bg-elevated p-4"
          >
            <h3 className="text-sm font-semibold text-text-primary">{note.section}</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{note.content}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-bg-secondary px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
          Relevant Exams
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {concept.examTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-subject-history-light px-3 py-0.5 text-xs font-medium text-subject-history-dark"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-text-muted">{concept.examRelevance}</p>
      </div>
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/visualizers/history/__tests__/HistoryNotesPanel.test.tsx`
Expected: All 6 tests PASS

**Step 5: Commit**

```bash
git add src/components/visualizers/history/
git commit -m "feat(history): add HistoryNotesPanel component with tests"
```

---

## Task 3: Create HistoryRevisionPanel Component (TDD)

**Files:**
- Create: `src/components/visualizers/history/__tests__/HistoryRevisionPanel.test.tsx`
- Create: `src/components/visualizers/history/HistoryRevisionPanel.tsx`

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/history/__tests__/HistoryRevisionPanel.test.tsx
import { render, screen } from '@testing-library/react'
import { HistoryRevisionPanel } from '../HistoryRevisionPanel'
import type { HistoryRevision } from '@/types/history'

const mockRevision: HistoryRevision = {
  topic: 'indus-valley',
  bullets: [
    'Harappa was discovered by Daya Ram Sahni in 1921.',
    'Mohenjo-daro means "Mound of the Dead".',
  ],
  comparisons: [
    {
      title: 'Harappa vs Mohenjo-daro',
      headers: ['Aspect', 'Harappa', 'Mohenjo-daro'],
      rows: [
        ['Discovered by', 'Daya Ram Sahni', 'R.D. Banerjee'],
        ['Year', '1921', '1922'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Major Harappan Sites',
      mnemonic: 'HLDRK',
      explanation: 'Harappa, Lothal, Dholavira, Rakhigarhi, Kalibangan',
    },
  ],
}

describe('HistoryRevisionPanel', () => {
  it('renders bullet points', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText(/Daya Ram Sahni in 1921/)).toBeInTheDocument()
    expect(screen.getByText(/Mound of the Dead/)).toBeInTheDocument()
  })

  it('renders comparison table title', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText('Harappa vs Mohenjo-daro')).toBeInTheDocument()
  })

  it('renders comparison table headers', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText('Aspect')).toBeInTheDocument()
    expect(screen.getByText('Harappa')).toBeInTheDocument()
    expect(screen.getByText('Mohenjo-daro')).toBeInTheDocument()
  })

  it('renders comparison table rows', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText('R.D. Banerjee')).toBeInTheDocument()
  })

  it('renders mnemonic title and content', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText('Major Harappan Sites')).toBeInTheDocument()
    expect(screen.getByText('HLDRK')).toBeInTheDocument()
    expect(screen.getByText(/Harappa, Lothal, Dholavira/)).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/visualizers/history/__tests__/HistoryRevisionPanel.test.tsx`
Expected: FAIL

**Step 3: Write implementation**

```tsx
// src/components/visualizers/history/HistoryRevisionPanel.tsx
import type { HistoryRevision } from '@/types/history'

interface HistoryRevisionPanelProps {
  revision: HistoryRevision
}

export function HistoryRevisionPanel({ revision }: HistoryRevisionPanelProps) {
  return (
    <div className="flex flex-col gap-8">
      {revision.bullets.length > 0 && (
        <section>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Quick Recall Points
          </h3>
          <div className="rounded-lg border-l-4 border-subject-history bg-subject-history-light p-4">
            <ol className="flex flex-col gap-2">
              {revision.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-sm text-subject-history-dark">
                  <span className="font-semibold">{i + 1}.</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {revision.comparisons.map((table) => (
        <section key={table.title}>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
            {table.title}
          </h3>
          <div className="overflow-x-auto rounded-lg border border-border-primary">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-subject-history text-white">
                  {table.headers.map((h) => (
                    <th key={h} className="px-4 py-2 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-bg-elevated' : 'bg-bg-secondary'}
                  >
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2 text-text-primary">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {revision.mnemonics.length > 0 && (
        <section>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Memory Tricks
          </h3>
          <div className="flex flex-col gap-3">
            {revision.mnemonics.map((m) => (
              <div
                key={m.title}
                className="rounded-lg border border-subject-history bg-subject-history-light p-4"
              >
                <p className="text-sm font-semibold text-subject-history-dark">{m.title}</p>
                <p className="mt-1 text-lg font-bold text-subject-history">{m.mnemonic}</p>
                <p className="mt-1 text-sm text-subject-history-dark">{m.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/visualizers/history/__tests__/HistoryRevisionPanel.test.tsx`
Expected: All 5 tests PASS

**Step 5: Commit**

```bash
git add src/components/visualizers/history/
git commit -m "feat(history): add HistoryRevisionPanel component with tests"
```

---

## Task 4: Create HistoryPYQSolver Component (TDD)

**Files:**
- Create: `src/components/visualizers/history/__tests__/HistoryPYQSolver.test.tsx`
- Create: `src/components/visualizers/history/HistoryPYQSolver.tsx`

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/history/__tests__/HistoryPYQSolver.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { HistoryPYQSolver } from '../HistoryPYQSolver'
import type { HistoryProblem } from '@/types/history'

const mockProblems: HistoryProblem[] = [
  {
    id: 'iv-1',
    topic: 'indus-valley',
    question: 'Which site had a dockyard?',
    options: ['Harappa', 'Lothal', 'Kalibangan', 'Banawali'],
    correctIndex: 1,
    explanation: 'Lothal in Gujarat had the first known dockyard.',
    examName: 'UPSC Prelims',
    examYear: 2023,
    difficulty: 'easy',
  },
  {
    id: 'iv-2',
    topic: 'indus-valley',
    question: 'Who discovered Mohenjo-daro?',
    options: ['Daya Ram Sahni', 'R.D. Banerjee', 'John Marshall', 'Mortimer Wheeler'],
    correctIndex: 1,
    explanation: 'R.D. Banerjee discovered Mohenjo-daro in 1922.',
    examName: 'SSC CGL',
    examYear: 2022,
    difficulty: 'medium',
  },
]

describe('HistoryPYQSolver', () => {
  it('renders the first question', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByText('Which site had a dockyard?')).toBeInTheDocument()
  })

  it('renders all options for the current question', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByText('Harappa')).toBeInTheDocument()
    expect(screen.getByText('Lothal')).toBeInTheDocument()
    expect(screen.getByText('Kalibangan')).toBeInTheDocument()
    expect(screen.getByText('Banawali')).toBeInTheDocument()
  })

  it('renders exam badge', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByText('UPSC Prelims 2023')).toBeInTheDocument()
  })

  it('renders question counter', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByText(/1\s*\/\s*2/)).toBeInTheDocument()
  })

  it('shows explanation after selecting correct answer', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    fireEvent.click(screen.getByText('Lothal'))
    expect(screen.getByText(/first known dockyard/)).toBeInTheDocument()
  })

  it('shows explanation after selecting incorrect answer', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    fireEvent.click(screen.getByText('Harappa'))
    expect(screen.getByText(/first known dockyard/)).toBeInTheDocument()
  })

  it('navigates to next question', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    fireEvent.click(screen.getByText('Lothal'))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Who discovered Mohenjo-daro?')).toBeInTheDocument()
  })

  it('renders exam filter dropdown', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByLabelText(/filter by exam/i)).toBeInTheDocument()
  })

  it('filters questions by exam name', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    fireEvent.change(screen.getByLabelText(/filter by exam/i), { target: { value: 'SSC CGL' } })
    expect(screen.getByText('Who discovered Mohenjo-daro?')).toBeInTheDocument()
    expect(screen.getByText(/1\s*\/\s*1/)).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/visualizers/history/__tests__/HistoryPYQSolver.test.tsx`
Expected: FAIL

**Step 3: Write implementation**

```tsx
// src/components/visualizers/history/HistoryPYQSolver.tsx
'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { HistoryProblem } from '@/types/history'

interface HistoryPYQSolverProps {
  problems: HistoryProblem[]
}

const DIFFICULTY_COLORS = {
  easy: 'bg-green-100 text-green-700',
  medium: 'bg-amber-100 text-amber-700',
  hard: 'bg-red-100 text-red-700',
} as const

export function HistoryPYQSolver({ problems }: HistoryPYQSolverProps) {
  const [examFilter, setExamFilter] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const examNames = useMemo(() => {
    const names = new Set(problems.map((p) => p.examName))
    return ['All', ...Array.from(names).sort()]
  }, [problems])

  const filtered = useMemo(
    () => (examFilter === 'All' ? problems : problems.filter((p) => p.examName === examFilter)),
    [problems, examFilter]
  )

  const current = filtered[currentIndex]

  const handleFilterChange = (value: string) => {
    setExamFilter(value)
    setCurrentIndex(0)
    setSelectedOption(null)
  }

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return
    setSelectedOption(index)
  }

  const handleNext = () => {
    if (currentIndex < filtered.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedOption(null)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1)
      setSelectedOption(null)
    }
  }

  if (!current) {
    return <p className="text-text-muted">No questions available for this filter.</p>
  }

  const isAnswered = selectedOption !== null
  const isCorrect = selectedOption === current.correctIndex

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <select
          aria-label="Filter by exam"
          value={examFilter}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="rounded-md border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary"
        >
          {examNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <span className="text-sm text-text-muted">
          {currentIndex + 1} / {filtered.length}
        </span>
      </div>

      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${DIFFICULTY_COLORS[current.difficulty]}`}>
            {current.difficulty}
          </span>
          <span className="rounded-full bg-subject-history-light px-2.5 py-0.5 text-xs font-medium text-subject-history-dark">
            {current.examName} {current.examYear}
          </span>
        </div>
        <p className="text-sm font-medium text-text-primary">{current.question}</p>
      </div>

      <div className="flex flex-col gap-2">
        {current.options.map((option, i) => {
          let optionClass = 'border-border-primary bg-bg-elevated hover:bg-bg-secondary cursor-pointer'
          if (isAnswered) {
            if (i === current.correctIndex) {
              optionClass = 'border-green-500 bg-green-50 text-green-800'
            } else if (i === selectedOption) {
              optionClass = 'border-red-500 bg-red-50 text-red-800'
            } else {
              optionClass = 'border-border-primary bg-bg-elevated opacity-50'
            }
          }

          return (
            <motion.button
              key={i}
              onClick={() => handleOptionClick(i)}
              disabled={isAnswered}
              className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${optionClass}`}
              animate={
                isAnswered && i === selectedOption && !isCorrect
                  ? { x: [0, -4, 4, -4, 4, 0] }
                  : {}
              }
              transition={{ duration: 0.3 }}
            >
              <span className="font-medium">{String.fromCharCode(65 + i)}.</span> {option}
            </motion.button>
          )
        })}
      </div>

      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg border p-4 ${
            isCorrect
              ? 'border-green-500 bg-green-50'
              : 'border-red-500 bg-red-50'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider mb-1">
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </p>
          <p className="text-sm">{current.explanation}</p>
        </motion.div>
      )}

      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="rounded-md border border-border-primary px-4 py-2 text-sm font-medium text-text-primary disabled:opacity-40 cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= filtered.length - 1}
          aria-label="Next question"
          className="rounded-md bg-subject-history px-4 py-2 text-sm font-medium text-white disabled:opacity-40 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/visualizers/history/__tests__/HistoryPYQSolver.test.tsx`
Expected: All 9 tests PASS

**Step 5: Commit**

```bash
git add src/components/visualizers/history/
git commit -m "feat(history): add HistoryPYQSolver component with tests"
```

---

## Task 5: Create HistoryTopicTabs Component (TDD)

**Files:**
- Create: `src/components/visualizers/history/__tests__/HistoryTopicTabs.test.tsx`
- Create: `src/components/visualizers/history/HistoryTopicTabs.tsx`

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/history/__tests__/HistoryTopicTabs.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { HistoryTopicTabs } from '../HistoryTopicTabs'
import type { HistoryConcept, HistoryRevision, HistoryProblem } from '@/types/history'

const mockConcept: HistoryConcept = {
  topic: 'indus-valley',
  title: 'Indus Valley Civilization',
  description: 'Early urban civilization.',
  period: 'Ancient India',
  keyDates: [{ year: '3300 BCE', event: 'Civilization begins' }],
  notes: [{ section: 'Overview', content: 'Great civilization.' }],
  examTags: ['UPSC Prelims'],
  examRelevance: 'Frequently asked.',
}

const mockRevision: HistoryRevision = {
  topic: 'indus-valley',
  bullets: ['Key fact one.'],
  comparisons: [],
  mnemonics: [],
}

const mockProblems: HistoryProblem[] = [
  {
    id: 'iv-1',
    topic: 'indus-valley',
    question: 'Test question?',
    options: ['A', 'B', 'C', 'D'],
    correctIndex: 0,
    explanation: 'Explanation here.',
    examName: 'UPSC Prelims',
    examYear: 2023,
    difficulty: 'easy',
  },
]

describe('HistoryTopicTabs', () => {
  it('renders Notes tab button', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Notes' })).toBeInTheDocument()
  })

  it('renders Revision tab button', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Revision' })).toBeInTheDocument()
  })

  it('renders PYQ Practice tab button', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'PYQ Practice' })).toBeInTheDocument()
  })

  it('shows Notes content by default', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    expect(screen.getByText('Indus Valley Civilization')).toBeInTheDocument()
    expect(screen.getByText('3300 BCE')).toBeInTheDocument()
  })

  it('switches to Revision tab on click', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    fireEvent.click(screen.getByRole('button', { name: 'Revision' }))
    expect(screen.getByText('Key fact one.')).toBeInTheDocument()
  })

  it('switches to PYQ Practice tab on click', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    fireEvent.click(screen.getByRole('button', { name: 'PYQ Practice' }))
    expect(screen.getByText('Test question?')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/visualizers/history/__tests__/HistoryTopicTabs.test.tsx`
Expected: FAIL

**Step 3: Write implementation**

```tsx
// src/components/visualizers/history/HistoryTopicTabs.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { HistoryConcept, HistoryRevision, HistoryProblem } from '@/types/history'
import { HistoryNotesPanel } from './HistoryNotesPanel'
import { HistoryRevisionPanel } from './HistoryRevisionPanel'
import { HistoryPYQSolver } from './HistoryPYQSolver'

type Tab = 'notes' | 'revision' | 'pyq'

const TABS: { id: Tab; label: string }[] = [
  { id: 'notes', label: 'Notes' },
  { id: 'revision', label: 'Revision' },
  { id: 'pyq', label: 'PYQ Practice' },
]

interface HistoryTopicTabsProps {
  concept: HistoryConcept
  revision: HistoryRevision
  problems: HistoryProblem[]
}

export function HistoryTopicTabs({ concept, revision, problems }: HistoryTopicTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('notes')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1 border-b border-border-primary">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px cursor-pointer ${
              activeTab === tab.id
                ? 'border-subject-history text-subject-history'
                : 'border-transparent text-text-muted hover:text-text-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === 'notes' && <HistoryNotesPanel concept={concept} />}
        {activeTab === 'revision' && <HistoryRevisionPanel revision={revision} />}
        {activeTab === 'pyq' && <HistoryPYQSolver problems={problems} />}
      </motion.div>
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/visualizers/history/__tests__/HistoryTopicTabs.test.tsx`
Expected: All 6 tests PASS

**Step 5: Commit**

```bash
git add src/components/visualizers/history/
git commit -m "feat(history): add HistoryTopicTabs component with tests"
```

---

## Task 6: Create First Data Files (indus-valley — reference topic)

**Files:**
- Create: `src/data/history/concepts/indus-valley.ts`
- Create: `src/data/history/revision/indus-valley.ts`
- Create: `src/data/history/problems/indus-valley-problems.ts`

This is the reference topic — all other data files follow the same pattern. Create accurate, exam-relevant content. Use web search to verify all facts before writing data.

**Step 1: Create concept file**

Create `src/data/history/concepts/indus-valley.ts` exporting a `HistoryConcept` with:
- `topic: 'indus-valley'`
- `title: 'Indus Valley Civilization'`
- `period: 'Ancient India'`
- `keyDates`: at least 5 dates (3300 BCE start, 2600 BCE mature phase, 1921 Harappa discovery, 1922 Mohenjo-daro, 1300 BCE decline)
- `notes`: at least 6 sections (Discovery & Sites, Town Planning, Economy & Trade, Religion & Culture, Script & Seals, Decline Theories)
- `examTags`: `['UPSC Prelims', 'SSC CGL', 'SSC CHSL', 'RRB NTPC', 'CDS']`
- Named export: `indusValleyConcept`

**Step 2: Create revision file**

Create `src/data/history/revision/indus-valley.ts` exporting a `HistoryRevision` with:
- At least 15 bullet points (one-liners covering key exam facts)
- At least 2 comparison tables (e.g., "Major Harappan Sites" with site/discovered by/key feature; "Harappa vs Mohenjo-daro")
- At least 2 mnemonics
- Named export: `indusValleyRevision`

**Step 3: Create problems file**

Create `src/data/history/problems/indus-valley-problems.ts` exporting `HistoryProblem[]` with:
- At least 10 PYQ-style questions
- Each tagged with `examName` and `examYear`
- Mix of difficulty levels
- Accurate explanations
- Named export: `indusValleyProblems`

**Step 4: Verify types**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 5: Commit**

```bash
git add src/data/history/concepts/indus-valley.ts src/data/history/revision/indus-valley.ts src/data/history/problems/indus-valley-problems.ts
git commit -m "feat(history): add indus-valley data (concepts, revision, problems)"
```

---

## Task 7: Create Dynamic Route `/history/[topic]`

**Files:**
- Create: `src/app/history/[topic]/page.tsx`

**Step 1: Create the page**

Follow the exact pattern from `src/app/quant/[topic]/page.tsx`:

```tsx
// src/app/history/[topic]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { HistoryConcept, HistoryRevision, HistoryProblem } from '@/types/history'
import { HistoryTopicTabs } from '@/components/visualizers/history/HistoryTopicTabs'

// Import data for indus-valley (first topic — others added in Task 9)
import { indusValleyConcept } from '@/data/history/concepts/indus-valley'
import { indusValleyRevision } from '@/data/history/revision/indus-valley'
import { indusValleyProblems } from '@/data/history/problems/indus-valley-problems'

interface TopicData {
  concept: HistoryConcept
  revision: HistoryRevision
  problems: HistoryProblem[]
  label: string
  description: string
}

const TOPIC_DATA: Record<string, TopicData> = {
  'indus-valley': {
    concept: indusValleyConcept,
    revision: indusValleyRevision,
    problems: indusValleyProblems,
    label: 'Indus Valley Civilization',
    description:
      'Indus Valley Civilization for UPSC, SSC & banking exams. Notes, revision points, and previous year questions.',
  },
  // Remaining 34 topics added in Task 9
}

interface Props {
  params: Promise<{ topic: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params
  const data = TOPIC_DATA[topic]
  if (!data) return {}
  return {
    title: `${data.label} — Notes, Revision & PYQs | GovtExams`,
    description: data.description,
  }
}

export function generateStaticParams() {
  return Object.keys(TOPIC_DATA).map((topic) => ({ topic }))
}

export default async function HistoryTopicPage({ params }: Props) {
  const { topic } = await params
  const data = TOPIC_DATA[topic]

  if (!data) notFound()

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-text-primary">{data.label}</h1>
      <HistoryTopicTabs concept={data.concept} revision={data.revision} problems={data.problems} />
    </div>
  )
}
```

**Step 2: Verify build**

Run: `npx next build`
Expected: Build succeeds, `/history/indus-valley` statically generated

**Step 3: Commit**

```bash
git add src/app/history/[topic]/
git commit -m "feat(history): add dynamic [topic] route with indus-valley"
```

---

## Task 8: Update Hub Page, Layout & Sitemap

**Files:**
- Modify: `src/app/history/page.tsx`
- Modify: `src/app/history/layout.tsx`
- Modify: `src/app/sitemap.ts`

**Step 1: Rewrite hub page with SECTIONS pattern**

Rewrite `src/app/history/page.tsx` following the exact pattern from `src/app/quant/page.tsx`. Use the `SECTIONS` array with all 35 topics plus the existing Visualizers section (timeline, freedom-movement). Each topic card should have `hasTabs: true`. Visualizer cards have `hasTabs: false` and keep the "Coming Soon" badge.

Section structure:
- Ancient India (9 topics)
- Medieval India (6 topics)
- Modern India (11 topics)
- Post-Independence (4 topics)
- Art & Culture (5 topics)
- Interactive Visualizers (2 — existing, hasTabs: false)

**Step 2: Rewrite layout with grouped sidebar**

Rewrite `src/app/history/layout.tsx` following the exact pattern from `src/app/quant/layout.tsx`. Pass `showHeading={false}` and all 37 links (35 topics + 2 visualizers) with `group` field:

```tsx
links={[
  { href: '/history/indus-valley', label: 'Indus Valley Civilization', group: 'Ancient India' },
  { href: '/history/vedic-period', label: 'Vedic Period', group: 'Ancient India' },
  { href: '/history/buddhism-jainism', label: 'Buddhism & Jainism', group: 'Ancient India' },
  { href: '/history/mahajanapadas', label: 'Mahajanapadas', group: 'Ancient India' },
  { href: '/history/maurya-empire', label: 'Maurya Empire & Ashoka', group: 'Ancient India' },
  { href: '/history/post-maurya', label: 'Post-Maurya Period', group: 'Ancient India' },
  { href: '/history/sangam-age', label: 'Sangam Age', group: 'Ancient India' },
  { href: '/history/gupta-empire', label: 'Gupta Empire', group: 'Ancient India' },
  { href: '/history/south-indian-dynasties', label: 'South Indian Dynasties', group: 'Ancient India' },
  { href: '/history/delhi-sultanate', label: 'Delhi Sultanate', group: 'Medieval India' },
  { href: '/history/vijayanagara-bahmani', label: 'Vijayanagara & Bahmani', group: 'Medieval India' },
  { href: '/history/bhakti-sufi', label: 'Bhakti & Sufi Movements', group: 'Medieval India' },
  { href: '/history/mughal-empire', label: 'Mughal Empire', group: 'Medieval India' },
  { href: '/history/maratha-empire', label: 'Maratha Empire', group: 'Medieval India' },
  { href: '/history/medieval-kingdoms', label: 'Other Medieval Kingdoms', group: 'Medieval India' },
  { href: '/history/european-companies', label: 'European Trading Companies', group: 'Modern India' },
  { href: '/history/british-expansion', label: 'British Conquest & Expansion', group: 'Modern India' },
  { href: '/history/governor-generals', label: 'Governor-Generals & Viceroys', group: 'Modern India' },
  { href: '/history/british-economic-policies', label: 'British Economic Policies', group: 'Modern India' },
  { href: '/history/revolt-1857', label: 'Revolt of 1857', group: 'Modern India' },
  { href: '/history/reform-movements', label: 'Reform Movements', group: 'Modern India' },
  { href: '/history/congress-national-movement', label: 'INC & National Movement', group: 'Modern India' },
  { href: '/history/gandhian-movements', label: 'Gandhian Movements', group: 'Modern India' },
  { href: '/history/revolutionary-movement', label: 'Revolutionary Movement', group: 'Modern India' },
  { href: '/history/constitutional-development', label: 'Constitutional Development', group: 'Modern India' },
  { href: '/history/tribal-peasant-movements', label: 'Tribal & Peasant Movements', group: 'Modern India' },
  { href: '/history/independence-partition', label: 'Independence & Partition', group: 'Post-Independence' },
  { href: '/history/princely-states', label: 'Integration of Princely States', group: 'Post-Independence' },
  { href: '/history/nation-building', label: 'Nation Building', group: 'Post-Independence' },
  { href: '/history/wars-foreign-policy', label: 'Wars & Foreign Policy', group: 'Post-Independence' },
  { href: '/history/indian-architecture', label: 'Indian Architecture', group: 'Art & Culture' },
  { href: '/history/paintings-sculpture', label: 'Paintings & Sculpture', group: 'Art & Culture' },
  { href: '/history/music-dance', label: 'Music, Dance & Theatre', group: 'Art & Culture' },
  { href: '/history/indian-literature', label: 'Literature & Philosophy', group: 'Art & Culture' },
  { href: '/history/heritage-sites', label: 'UNESCO Heritage Sites', group: 'Art & Culture' },
  { href: '/history/timeline', label: 'Interactive Timeline', group: 'Visualizers' },
  { href: '/history/freedom-movement', label: 'Freedom Movement', group: 'Visualizers' },
]}
```

**Step 3: Add HISTORY_TOPICS to sitemap**

In `src/app/sitemap.ts`, add a `HISTORY_TOPICS` array with all 35 slugs (same pattern as `QUANT_TOPICS` and `REASONING_TOPICS`). Add `historyRoutes` to `allRoutes`:

```typescript
const HISTORY_TOPICS = [
  'indus-valley',
  'vedic-period',
  'buddhism-jainism',
  'mahajanapadas',
  'maurya-empire',
  'post-maurya',
  'sangam-age',
  'gupta-empire',
  'south-indian-dynasties',
  'delhi-sultanate',
  'vijayanagara-bahmani',
  'bhakti-sufi',
  'mughal-empire',
  'maratha-empire',
  'medieval-kingdoms',
  'european-companies',
  'british-expansion',
  'governor-generals',
  'british-economic-policies',
  'revolt-1857',
  'reform-movements',
  'congress-national-movement',
  'gandhian-movements',
  'revolutionary-movement',
  'constitutional-development',
  'tribal-peasant-movements',
  'independence-partition',
  'princely-states',
  'nation-building',
  'wars-foreign-policy',
  'indian-architecture',
  'paintings-sculpture',
  'music-dance',
  'indian-literature',
  'heritage-sites',
]

const historyRoutes = HISTORY_TOPICS.map((slug) => `/history/${slug}`)

const allRoutes = [...staticRoutes, ...quantRoutes, ...reasoningRoutes, ...historyRoutes]
```

**Step 4: Verify build**

Run: `npx next build`
Expected: Build succeeds

**Step 5: Commit**

```bash
git add src/app/history/page.tsx src/app/history/layout.tsx src/app/sitemap.ts
git commit -m "feat(history): update hub page, layout (35 grouped links), sitemap"
```

---

## Task 9: Create Remaining 34 Data Files

**Files:**
- Create: 34 concept files in `src/data/history/concepts/`
- Create: 34 revision files in `src/data/history/revision/`
- Create: 34 problem files in `src/data/history/problems/`
- Modify: `src/app/history/[topic]/page.tsx` (add imports and TOPIC_DATA entries)

This is the largest task. Execute it in batches by section:

**Batch 1: Ancient India** (8 remaining: vedic-period, buddhism-jainism, mahajanapadas, maurya-empire, post-maurya, sangam-age, gupta-empire, south-indian-dynasties)

**Batch 2: Medieval India** (6: delhi-sultanate, vijayanagara-bahmani, bhakti-sufi, mughal-empire, maratha-empire, medieval-kingdoms)

**Batch 3: Modern India** (11: european-companies, british-expansion, governor-generals, british-economic-policies, revolt-1857, reform-movements, congress-national-movement, gandhian-movements, revolutionary-movement, constitutional-development, tribal-peasant-movements)

**Batch 4: Post-Independence** (4: independence-partition, princely-states, nation-building, wars-foreign-policy)

**Batch 5: Art & Culture** (5: indian-architecture, paintings-sculpture, music-dance, indian-literature, heritage-sites)

For each batch:

1. Create all concept, revision, and problem files following the `indus-valley` reference pattern
2. Use web search to verify historical facts, dates, and exam attributions
3. Add imports and TOPIC_DATA entries to `src/app/history/[topic]/page.tsx`
4. Run `npx tsc --noEmit` to verify types
5. Run `npx next build` after final batch
6. Commit per batch:

```bash
git commit -m "feat(history): add Ancient India data (8 topics)"
git commit -m "feat(history): add Medieval India data (6 topics)"
git commit -m "feat(history): add Modern India data (11 topics)"
git commit -m "feat(history): add Post-Independence data (4 topics)"
git commit -m "feat(history): add Art & Culture data (5 topics)"
```

**Data quality requirements:**
- Every fact must be verifiable from standard NCERT / exam prep sources
- Every PYQ must be tagged with accurate examName and examYear
- Explanations must be detailed (not just "Option B is correct")
- No minimum or maximum per topic — include everything exam-relevant
- Difficulty distribution: ~30% easy, ~50% medium, ~20% hard

---

## Task 10: Run All Tests & Final Verification

**Files:** None (verification only)

**Step 1: Run all history component tests**

Run: `npx vitest run src/components/visualizers/history/`
Expected: All tests PASS (HistoryNotesPanel 6, HistoryRevisionPanel 5, HistoryPYQSolver 9, HistoryTopicTabs 6 = 26 total)

**Step 2: Run full test suite**

Run: `npx vitest run`
Expected: All existing tests still pass, no regressions

**Step 3: Build verification**

Run: `npx next build`
Expected: 35 history topic pages statically generated, no build errors

**Step 4: Manual smoke test**

Run: `npx next dev` and verify:
- `/history` hub page shows all 6 sections with topic cards
- `/history/indus-valley` shows 3 tabs (Notes, Revision, PYQ Practice)
- Sidebar navigation has grouped links
- Tab switching works with animation
- PYQ exam filter works
- Mobile responsive — sidebar collapses to `<select>`

**Step 5: Commit**

```bash
git add -A
git commit -m "feat(history): complete 35-topic history section with Notes/Revision/PYQ tabs"
```

---

## Task Summary

| Task | Description | Est. Files |
|------|-------------|------------|
| 1 | Add history types | 1 |
| 2 | HistoryNotesPanel (TDD) | 2 |
| 3 | HistoryRevisionPanel (TDD) | 2 |
| 4 | HistoryPYQSolver (TDD) | 2 |
| 5 | HistoryTopicTabs (TDD) | 2 |
| 6 | First data files (indus-valley) | 3 |
| 7 | Dynamic route `/history/[topic]` | 1 |
| 8 | Hub page, layout, sitemap | 3 |
| 9 | Remaining 34 topics (5 batches) | 102 |
| 10 | Final tests & verification | 0 |
| **Total** | | **~118 files** |
