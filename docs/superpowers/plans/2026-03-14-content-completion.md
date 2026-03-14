# Content Completion & Practice Arena Rewire — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix false "Coming Soon" badges, rewire Practice arena to surface 5,283 existing questions, audit content depth, and expand thin topics.

**Architecture:** Adapter pattern converts `SubjectProblem` → `MCQ` for Practice arena. Server component wrapper loads data asynchronously, passes to existing client `PracticeSession`. Content audit runs as a standalone TypeScript script.

**Tech Stack:** Next.js App Router, TypeScript, Zustand, Framer Motion, tsx (script runner)

**Spec:** `docs/superpowers/specs/2026-03-14-content-completion-design.md`

---

## Chunk 1: Fix "Coming Soon" Badges

### Task 1: Update Economics Hub Badge Condition

**Files:**
- Modify: `src/app/economics/page.tsx:20-25` (Topic interface), `src/app/economics/page.tsx:414` (badge condition)

- [ ] **Step 1: Update Topic interface**

In `src/app/economics/page.tsx`, add `comingSoon` to the interface:

```ts
interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
  comingSoon?: boolean
}
```

- [ ] **Step 2: Update badge condition**

Change line 414 from:
```tsx
{!topic.hasTabs && (
```
to:
```tsx
{topic.comingSoon && (
```

- [ ] **Step 3: Verify locally**

Run: `npx next dev`
Navigate to `http://localhost:3000/economics`
Expected: Policy Flow Diagrams and Budget Visualizer cards no longer show "Coming Soon" badge. They still link correctly. Topics with `hasTabs: true` still show "Notes · Revision · PYQs".

- [ ] **Step 4: Commit**

```bash
git add src/app/economics/page.tsx
git commit -m "fix(economics): remove false Coming Soon badges from visualizer cards"
```

---

### Task 2: Update History Hub Badge Condition

**Files:**
- Modify: `src/app/history/page.tsx:20-25` (Topic interface), `src/app/history/page.tsx:408` (badge condition)

- [ ] **Step 1: Update Topic interface**

In `src/app/history/page.tsx`, add `comingSoon` to the interface (same as economics):

```ts
interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
  comingSoon?: boolean
}
```

- [ ] **Step 2: Update badge condition**

Change line 408 from:
```tsx
{!topic.hasTabs && (
```
to:
```tsx
{topic.comingSoon && (
```

- [ ] **Step 3: Verify locally**

Navigate to `http://localhost:3000/history`
Expected: Timeline and Freedom Movement cards no longer show "Coming Soon". Topics with `hasTabs: true` still show "Notes · Revision · PYQs".

- [ ] **Step 4: Commit**

```bash
git add src/app/history/page.tsx
git commit -m "fix(history): remove false Coming Soon badges from visualizer cards"
```

---

### Task 3: Update Polity and Geography Topic Interfaces for Consistency

**Files:**
- Modify: `src/app/polity/page.tsx:20-25`
- Modify: `src/app/geography/page.tsx:20-25`

Note: These pages do NOT have the `!topic.hasTabs` Coming Soon bug — they only show `topic.hasTabs && "Notes · Revision · PYQs"`. But the Topic interface should be consistent across all hub pages so future topics can use `comingSoon` if needed.

- [ ] **Step 1: Update polity Topic interface**

In `src/app/polity/page.tsx`, change:
```ts
interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
}
```
to:
```ts
interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
  comingSoon?: boolean
}
```

- [ ] **Step 2: Update geography Topic interface**

Same change in `src/app/geography/page.tsx`.

- [ ] **Step 3: Verify build**

Run: `npx next build 2>&1 | tail -20`
Expected: Build succeeds with no type errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/polity/page.tsx src/app/geography/page.tsx
git commit -m "refactor: add comingSoon field to polity and geography Topic interfaces"
```

---

## Chunk 2: Practice Arena — Type Extension & Adapter

### Task 4: Extend MCQ Type with Optional Exam Metadata

**Files:**
- Modify: `src/types/shared.ts:20-28`

- [ ] **Step 1: Add optional fields to MCQ**

In `src/types/shared.ts`, change the MCQ interface from:
```ts
export interface MCQ {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  topic: string
  subject: Subject
}
```
to:
```ts
export interface MCQ {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  topic: string
  subject: Subject
  examName?: string
  examYear?: number
  difficulty?: 'easy' | 'medium' | 'hard'
}
```

- [ ] **Step 2: Verify no type errors**

Run: `npx tsc --noEmit 2>&1 | head -20`
Expected: No errors. Optional fields are additive — all existing MCQ consumers remain valid.

- [ ] **Step 3: Commit**

```bash
git add src/types/shared.ts
git commit -m "feat(types): add optional examName, examYear, difficulty to MCQ"
```

---

### Task 5: Create SubjectProblem → MCQ Adapter

**Files:**
- Create: `src/lib/practice-adapter.ts`

- [ ] **Step 1: Create the adapter file**

```ts
import type { SubjectProblem } from '@/types/subject-notes'
import type { MCQ, Subject } from '@/types/shared'

export function subjectProblemToMCQ(
  problem: SubjectProblem,
  subject: Subject
): MCQ {
  return {
    id: problem.id,
    question: problem.question,
    options: problem.options,
    correctIndex: problem.correctIndex,
    explanation: problem.explanation,
    topic: problem.topic,
    subject,
    examName: problem.examName,
    examYear: problem.examYear,
    difficulty: problem.difficulty,
  }
}

export function subjectProblemsToMCQs(
  problems: SubjectProblem[],
  subject: Subject
): MCQ[] {
  return problems.map((p) => subjectProblemToMCQ(p, subject))
}
```

- [ ] **Step 2: Verify types**

Run: `npx tsc --noEmit 2>&1 | head -10`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/practice-adapter.ts
git commit -m "feat(practice): add SubjectProblem to MCQ adapter"
```

---

### Task 6: Create Practice Problem Registry

**Files:**
- Create: `src/data/practice/subject-problems.ts`

This is the largest file in the plan. It contains:
1. A static topic metadata registry (slug, label, count) for each of the 4 subjects
2. An async loader that dynamically imports the right problem file and converts via adapter

- [ ] **Step 1: Create the registry file**

```ts
import type { MCQ, Subject } from '@/types/shared'
import type { SubjectProblem } from '@/types/subject-notes'
import { subjectProblemsToMCQs } from '@/lib/practice-adapter'

interface PracticeTopic {
  slug: string
  label: string
  count: number
}

// Static metadata — no file imports needed at load time
const POLITY_TOPICS: PracticeTopic[] = [
  { slug: 'historical-background', label: 'Historical Background', count: 30 },
  { slug: 'constituent-assembly', label: 'Constituent Assembly', count: 30 },
  { slug: 'preamble', label: 'Preamble', count: 28 },
  { slug: 'union-territory', label: 'Union & Territory', count: 28 },
  { slug: 'citizenship', label: 'Citizenship', count: 28 },
  { slug: 'official-language', label: 'Official Language', count: 28 },
  { slug: 'comparison-constitutions', label: 'Comparison of Constitutions', count: 29 },
  { slug: 'fundamental-rights', label: 'Fundamental Rights', count: 28 },
  { slug: 'dpsp', label: 'Directive Principles', count: 28 },
  { slug: 'fundamental-duties', label: 'Fundamental Duties', count: 28 },
  { slug: 'rights-issues', label: 'Rights & Issues', count: 28 },
  { slug: 'president-vp', label: 'President & Vice President', count: 30 },
  { slug: 'prime-minister', label: 'Prime Minister & Council', count: 30 },
  { slug: 'parliament', label: 'Parliament', count: 30 },
  { slug: 'attorney-general', label: 'Attorney General', count: 28 },
  { slug: 'governor', label: 'Governor', count: 28 },
  { slug: 'chief-minister', label: 'Chief Minister & Council', count: 28 },
  { slug: 'state-legislature', label: 'State Legislature', count: 28 },
  { slug: 'advocate-general', label: 'Advocate General', count: 28 },
  { slug: 'parliamentary-committees', label: 'Parliamentary Committees', count: 28 },
  { slug: 'parliamentary-privileges', label: 'Parliamentary Privileges', count: 28 },
  { slug: 'supreme-court', label: 'Supreme Court', count: 28 },
  { slug: 'high-courts', label: 'High Courts', count: 28 },
  { slug: 'tribunals', label: 'Tribunals', count: 28 },
  { slug: 'judicial-review', label: 'Judicial Review', count: 28 },
  { slug: 'basic-structure', label: 'Basic Structure Doctrine', count: 28 },
  { slug: 'subordinate-courts', label: 'Subordinate Courts', count: 28 },
  { slug: 'centre-state-relations', label: 'Centre-State Relations', count: 28 },
  { slug: 'inter-state-relations', label: 'Inter-State Relations', count: 28 },
  { slug: 'emergency-provisions', label: 'Emergency Provisions', count: 28 },
  { slug: 'amendment-procedure', label: 'Amendment Procedure', count: 28 },
  { slug: 'special-provisions-states', label: 'Special Provisions for States', count: 28 },
  { slug: 'panchayati-raj', label: 'Panchayati Raj', count: 28 },
  { slug: 'municipalities', label: 'Municipalities', count: 30 },
  { slug: 'cooperative-societies', label: 'Cooperative Societies', count: 28 },
  { slug: 'election-commission', label: 'Election Commission', count: 28 },
  { slug: 'cag', label: 'CAG', count: 28 },
  { slug: 'upsc-spsc', label: 'UPSC & SPSC', count: 28 },
  { slug: 'finance-commission', label: 'Finance Commission', count: 28 },
  { slug: 'statutory-bodies', label: 'Statutory Bodies', count: 28 },
  { slug: 'anti-defection', label: 'Anti-Defection Law', count: 28 },
  { slug: 'scheduled-tribal-areas', label: 'Scheduled & Tribal Areas', count: 28 },
  { slug: 'niti-aayog', label: 'NITI Aayog', count: 28 },
  { slug: 'national-commissions', label: 'National Commissions', count: 28 },
  { slug: 'lokpal-lokayuktas', label: 'Lokpal & Lokayuktas', count: 28 },
  { slug: 'political-parties', label: 'Political Parties', count: 28 },
  { slug: 'pressure-groups', label: 'Pressure Groups', count: 28 },
  { slug: 'representation-people', label: 'Representation of People', count: 28 },
  { slug: 'rti-act', label: 'RTI Act', count: 28 },
  { slug: 'governance-reforms', label: 'Governance Reforms', count: 30 },
]

// NOTE: History, Economics, Geography topic arrays follow the same pattern.
// For brevity in the plan, the implementer should populate these from the
// hub page SECTIONS arrays in each subject's page.tsx file.
// Each entry: { slug: '<topic-slug>', label: '<Topic Label>', count: <N> }
// Count values can be obtained by running:
//   grep -c "id:" src/data/{subject}/problems/{slug}-problems.ts

const HISTORY_TOPICS: PracticeTopic[] = []   // Populate from src/app/history/page.tsx SECTIONS
const ECONOMICS_TOPICS: PracticeTopic[] = [] // Populate from src/app/economics/page.tsx SECTIONS
const GEOGRAPHY_TOPICS: PracticeTopic[] = [] // Populate from src/app/geography/page.tsx SECTIONS

const SUBJECT_TOPIC_MAP: Partial<Record<Subject, PracticeTopic[]>> = {
  polity: POLITY_TOPICS,
  history: HISTORY_TOPICS,
  economics: ECONOMICS_TOPICS,
  geography: GEOGRAPHY_TOPICS,
}

/**
 * Returns static topic metadata for a subject. Synchronous — no file imports.
 * Returns undefined for subjects not in the registry (quant, reasoning, science).
 */
export function getPracticeTopics(subject: Subject): PracticeTopic[] | undefined {
  return SUBJECT_TOPIC_MAP[subject]
}

/**
 * Dynamically imports the problem file for a subject/topic and converts to MCQ[].
 * Only loads the requested file — no bundling of all 5,283 questions.
 */
export async function getPracticeQuestions(
  subject: Subject,
  topic: string
): Promise<MCQ[]> {
  const importMap: Record<string, () => Promise<{ [key: string]: SubjectProblem[] }>> = {
    polity: () => import(`@/data/polity/problems/${topic}-problems`),
    history: () => import(`@/data/history/problems/${topic}-problems`),
    geography: () => import(`@/data/geography/problems/${topic}-problems`),
    economics: () => import(`@/data/economics/problems/${topic}-problems`),
  }

  const importer = importMap[subject]
  if (!importer) return []

  try {
    const mod = await importer()
    // Problem files export a named variable like `fundamentalRightsProblems`
    // Find the first array export
    const problems = Object.values(mod).find(
      (val) => Array.isArray(val)
    ) as SubjectProblem[] | undefined

    if (!problems) return []
    return subjectProblemsToMCQs(problems, subject)
  } catch {
    return []
  }
}
```

- [ ] **Step 2: Verify types**

Run: `npx tsc --noEmit 2>&1 | head -10`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/practice/subject-problems.ts
git commit -m "feat(practice): add problem registry with dynamic imports for 4 subjects"
```

**IMPORTANT — DEPLOYMENT NOTE:** Tasks 6, 7, 8, and 13 form a single deployable unit. Do NOT deploy Task 7 (subject page) without first populating the topic arrays (Task 13). The empty stubs will cause `/practice/history`, `/practice/economics`, and `/practice/geography` to show empty pages. **Populate the arrays immediately after creating the file** — see Task 13 for the bash commands to generate them. If working sequentially, complete Task 13 right after Task 6 before moving to Tasks 7-8.

---

## Chunk 3: Practice Arena — UI Updates

### Task 7: Update Practice Subject Page to Use Registry

**Files:**
- Modify: `src/app/practice/[subject]/page.tsx`

- [ ] **Step 1: Add registry import and expand SUBJECT_TOPICS**

Replace the entire file with:

```tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { AdUnit } from '@/components/ads/AdUnit'
import { AD_SLOTS } from '@/components/ads/AdSlots'
import { getPracticeTopics } from '@/data/practice/subject-problems'
import type { Subject } from '@/types/shared'

// Keep existing static definitions for quant/reasoning/science
const LEGACY_TOPICS: Record<string, { name: string; topics: { slug: string; label: string; count: number }[] }> = {
  quant: {
    name: 'Quantitative Aptitude',
    topics: [
      { slug: 'percentage', label: 'Percentage', count: 4 },
      { slug: 'ratio', label: 'Ratio & Proportion', count: 4 },
      { slug: 'profit-loss', label: 'Profit & Loss', count: 4 },
    ],
  },
  reasoning: {
    name: 'Reasoning & Logic',
    topics: [
      { slug: 'seating', label: 'Seating Arrangement', count: 4 },
      { slug: 'syllogism', label: 'Syllogism', count: 4 },
      { slug: 'series', label: 'Number Series', count: 4 },
    ],
  },
  science: {
    name: 'General Science',
    topics: [
      { slug: 'periodic-table', label: 'Periodic Table', count: 6 },
      { slug: 'body-systems', label: 'Human Body Systems', count: 6 },
    ],
  },
}

const SUBJECT_NAMES: Record<string, string> = {
  quant: 'Quantitative Aptitude',
  reasoning: 'Reasoning & Logic',
  polity: 'Indian Polity',
  history: 'Indian History',
  geography: 'Indian Geography',
  economics: 'Indian Economy',
  science: 'General Science',
}

interface SubjectPageProps {
  params: { subject: string }
}

export default function SubjectPracticePage({ params }: SubjectPageProps) {
  const subjectName = SUBJECT_NAMES[params.subject]
  if (!subjectName) notFound()

  // Try registry first (polity, history, geography, economics)
  const registryTopics = getPracticeTopics(params.subject as Subject)
  // Fall back to legacy static definitions (quant, reasoning, science)
  const legacyConfig = LEGACY_TOPICS[params.subject]

  const topics = registryTopics ?? legacyConfig?.topics
  if (!topics || topics.length === 0) notFound()

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm">
        <Link
          href="/practice"
          className="text-text-secondary no-underline transition-colors hover:text-text-primary"
        >
          Practice
        </Link>
        <ChevronRight size={14} className="text-text-muted" />
        <span className="font-medium text-text-primary">{subjectName}</span>
      </nav>

      <h1 className="mb-2 text-2xl font-bold text-text-primary">{subjectName}</h1>
      <p className="mb-8 text-text-secondary">
        Select a topic to start your practice session.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/practice/${params.subject}/${topic.slug}`}
            className="group rounded-lg border border-border-primary bg-bg-elevated p-5 no-underline transition-shadow hover:shadow-md"
          >
            <h3 className="mb-1 text-base font-semibold text-text-primary group-hover:text-primary">
              {topic.label}
            </h3>
            <p className="text-sm text-text-secondary">
              {topic.count} questions
            </p>
          </Link>
        ))}
      </div>

      <AdUnit slot={AD_SLOTS.practiceSubjectBanner} format="horizontal" className="mt-8" />
    </div>
  )
}
```

- [ ] **Step 2: Verify locally**

Navigate to `http://localhost:3000/practice/polity`
Expected: Shows 50 topic cards with question counts. Quant/reasoning/science pages still work with existing data.

- [ ] **Step 3: Commit**

```bash
git add src/app/practice/[subject]/page.tsx
git commit -m "feat(practice): expand subject page to show all topics from registry"
```

---

### Task 8: Convert Practice Topic Page to Server Component

**Files:**
- Modify: `src/app/practice/[subject]/[topic]/page.tsx`

The current page is `'use client'` and imports all MCQs statically. Convert to a server component that:
- For polity/history/geography/economics: loads questions via the async registry
- For quant/reasoning/science: imports existing MCQ files

- [ ] **Step 1: Rewrite the page as a server component**

Replace the entire file with:

```tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { PracticeSession } from '@/components/practice/PracticeSession'
import { getPracticeQuestions, getPracticeTopics } from '@/data/practice/subject-problems'
import { quantMCQs } from '@/data/practice/quant-mcqs'
import { reasoningMCQs } from '@/data/practice/reasoning-mcqs'
import { gkMCQs } from '@/data/practice/gk-mcqs'
import { scienceMCQs } from '@/data/practice/science-mcqs'
import type { MCQ, Subject } from '@/types/shared'

const LEGACY_MCQS: MCQ[] = [
  ...quantMCQs,
  ...reasoningMCQs,
  ...gkMCQs,
  ...scienceMCQs,
]

const SUBJECT_NAMES: Record<string, string> = {
  quant: 'Quantitative Aptitude',
  reasoning: 'Reasoning & Logic',
  polity: 'Indian Polity',
  history: 'Indian History',
  geography: 'Indian Geography',
  economics: 'Indian Economy',
  science: 'General Science',
}

const REGISTRY_SUBJECTS = new Set(['polity', 'history', 'geography', 'economics'])

interface TopicPageProps {
  params: Promise<{ subject: string; topic: string }>
}

export default async function TopicPracticePage({ params }: TopicPageProps) {
  const { subject, topic } = await params
  const subjectName = SUBJECT_NAMES[subject]
  if (!subjectName) notFound()

  let questions: MCQ[]

  if (REGISTRY_SUBJECTS.has(subject)) {
    // Load from per-topic problem files via registry
    questions = await getPracticeQuestions(subject as Subject, topic)
  } else {
    // Legacy: filter from static MCQ arrays
    questions = LEGACY_MCQS.filter((q) => q.topic === topic)
  }

  if (questions.length === 0) notFound()

  // Resolve topic label
  const registryTopics = getPracticeTopics(subject as Subject)
  const topicLabel = registryTopics?.find((t) => t.slug === topic)?.label
  const topicName = topicLabel ?? topic.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm">
        <Link
          href="/practice"
          className="text-text-secondary no-underline transition-colors hover:text-text-primary"
        >
          Practice
        </Link>
        <ChevronRight size={14} className="text-text-muted" />
        <Link
          href={`/practice/${subject}`}
          className="text-text-secondary no-underline transition-colors hover:text-text-primary"
        >
          {subjectName}
        </Link>
        <ChevronRight size={14} className="text-text-muted" />
        <span className="font-medium text-text-primary">{topicName}</span>
      </nav>

      <h1 className="mb-6 text-xl font-bold text-text-primary">{topicName}</h1>

      <PracticeSession
        questions={questions}
        subject={subject}
        topic={topic}
      />
    </div>
  )
}
```

Note: `params` is `Promise<>` because this is Next.js 14 App Router async server component with dynamic segments.

- [ ] **Step 2: Verify polity topic works**

Navigate to `http://localhost:3000/practice/polity/fundamental-rights`
Expected: Shows practice session with ~28 questions. Questions display correctly in MCQCard.

- [ ] **Step 3: Verify legacy topics still work**

Navigate to `http://localhost:3000/practice/quant/percentage`
Expected: Shows 4 questions as before.

- [ ] **Step 4: Commit**

```bash
git add src/app/practice/[subject]/[topic]/page.tsx
git commit -m "feat(practice): convert to server component, load from per-topic problem files"
```

---

### Task 9: Add Exam Badge & Difficulty Pill to MCQCard

**Files:**
- Modify: `src/components/practice/MCQCard.tsx`

- [ ] **Step 1: Add exam metadata display**

In `src/components/practice/MCQCard.tsx`, add exam badge and difficulty pill above the question text. Insert after line 38 (`<div className="rounded-lg...">`), before the question `<p>`:

```tsx
{(mcq.examName || mcq.difficulty) && (
  <div className="mb-3 flex items-center gap-2">
    {mcq.examName && (
      <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary">
        {mcq.examName}{mcq.examYear ? ` ${mcq.examYear}` : ''}
      </span>
    )}
    {mcq.difficulty && (
      <span className={clsx(
        'rounded-full px-2.5 py-0.5 text-xs font-medium',
        mcq.difficulty === 'easy' && 'bg-green-50 text-green-700',
        mcq.difficulty === 'medium' && 'bg-amber-50 text-amber-700',
        mcq.difficulty === 'hard' && 'bg-red-50 text-red-700'
      )}>
        {mcq.difficulty.charAt(0).toUpperCase() + mcq.difficulty.slice(1)}
      </span>
    )}
  </div>
)}
```

- [ ] **Step 2: Verify display**

Navigate to `http://localhost:3000/practice/polity/fundamental-rights`
Expected: Each question shows an exam badge (e.g., "SSC CGL 2019") and difficulty pill (Easy/Medium/Hard) above the question text.

Navigate to `http://localhost:3000/practice/quant/percentage`
Expected: No badge or pill shown (legacy MCQs don't have these fields). Questions render exactly as before.

- [ ] **Step 3: Commit**

```bash
git add src/components/practice/MCQCard.tsx
git commit -m "feat(practice): show exam badge and difficulty pill on MCQCard"
```

---

## Chunk 4: Content Audit Script

### Task 10: Install tsx Dev Dependency

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install tsx**

Run: `npm install --save-dev tsx`

- [ ] **Step 2: Verify installation**

Run: `npx tsx --version`
Expected: Prints version number.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add tsx dev dependency for running TypeScript scripts"
```

---

### Task 11: Create Content Audit Script

**Files:**
- Create: `scripts/content-audit.ts`

- [ ] **Step 1: Create the audit script**

The script uses dynamic `import()` to load actual TypeScript data modules (same module resolution as the Next.js app), then counts typed fields directly — no regex parsing.

```ts
import * as fs from 'fs'
import * as path from 'path'
import type { SubjectConcept, SubjectRevision, SubjectProblem } from '../src/types/subject-notes'

const SUBJECTS = ['polity', 'history', 'geography', 'economics'] as const
const DATA_DIR = path.join(process.cwd(), 'src/data')

interface TopicAudit {
  subject: string
  topic: string
  noteSections: number
  revisionBullets: number
  comparisons: number
  mnemonics: number
  problems: number
  keyDates: number
  score: 'red' | 'yellow' | 'green'
  gaps: string[]
}

const THRESHOLDS = {
  noteSections: { min: 4, good: 8 },
  revisionBullets: { min: 15, good: 30 },
  comparisons: { min: 1, good: 3 },
  mnemonics: { min: 1, good: 3 },
  problems: { min: 5, good: 10 },
  keyDates: { min: 3, good: 8 },
}

function getTopicSlugs(subject: string): string[] {
  const conceptsDir = path.join(DATA_DIR, subject, 'concepts')
  try {
    return fs
      .readdirSync(conceptsDir)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => f.replace('.ts', ''))
      .sort()
  } catch {
    return []
  }
}

async function auditTopic(subject: string, topicSlug: string): Promise<TopicAudit> {
  let noteSections = 0
  let keyDates = 0
  let revisionBullets = 0
  let comparisons = 0
  let mnemonics = 0
  let problems = 0

  // Import concept file — find the SubjectConcept export
  try {
    const conceptMod = await import(`../src/data/${subject}/concepts/${topicSlug}`)
    const concept = Object.values(conceptMod).find(
      (v): v is SubjectConcept => v != null && typeof v === 'object' && 'notes' in (v as object)
    )
    if (concept) {
      noteSections = concept.notes?.length ?? 0
      keyDates = concept.keyDates?.length ?? 0
    }
  } catch { /* file missing */ }

  // Import revision file — find the SubjectRevision export
  try {
    const revisionMod = await import(`../src/data/${subject}/revision/${topicSlug}`)
    const revision = Object.values(revisionMod).find(
      (v): v is SubjectRevision => v != null && typeof v === 'object' && 'bullets' in (v as object)
    )
    if (revision) {
      revisionBullets = revision.bullets?.length ?? 0
      comparisons = revision.comparisons?.length ?? 0
      mnemonics = revision.mnemonics?.length ?? 0
    }
  } catch { /* file missing */ }

  // Import problems file — find the SubjectProblem[] export
  try {
    const problemsMod = await import(`../src/data/${subject}/problems/${topicSlug}-problems`)
    const problemArr = Object.values(problemsMod).find(
      (v): v is SubjectProblem[] => Array.isArray(v)
    )
    problems = problemArr?.length ?? 0
  } catch { /* file missing */ }

  const gaps: string[] = []
  let worstLevel: 'green' | 'yellow' | 'red' = 'green'

  function check(metric: string, value: number, thresholds: { min: number; good: number }) {
    if (value < thresholds.min) {
      gaps.push(`${metric}: ${value} (need ${thresholds.min}+)`)
      worstLevel = 'red'
    } else if (value < thresholds.good) {
      if (worstLevel !== 'red') worstLevel = 'yellow'
    }
  }

  check('noteSections', noteSections, THRESHOLDS.noteSections)
  check('revisionBullets', revisionBullets, THRESHOLDS.revisionBullets)
  check('comparisons', comparisons, THRESHOLDS.comparisons)
  check('mnemonics', mnemonics, THRESHOLDS.mnemonics)
  check('problems', problems, THRESHOLDS.problems)
  check('keyDates', keyDates, THRESHOLDS.keyDates)

  return {
    subject,
    topic: topicSlug,
    noteSections,
    revisionBullets,
    comparisons,
    mnemonics,
    problems,
    keyDates,
    score: worstLevel,
    gaps,
  }
}

async function generateReport(): Promise<string> {
  const lines: string[] = [
    '# Content Audit Report',
    '',
    `Generated: ${new Date().toISOString().split('T')[0]}`,
    '',
  ]

  let totalRed = 0
  let totalYellow = 0
  let totalGreen = 0

  for (const subject of SUBJECTS) {
    const slugs = getTopicSlugs(subject)
    const audits = await Promise.all(slugs.map((slug) => auditTopic(subject, slug)))

    const red = audits.filter((a) => a.score === 'red').length
    const yellow = audits.filter((a) => a.score === 'yellow').length
    const green = audits.filter((a) => a.score === 'green').length
    totalRed += red
    totalYellow += yellow
    totalGreen += green

    lines.push(`## ${subject.charAt(0).toUpperCase() + subject.slice(1)} (${slugs.length} topics)`)
    lines.push('')
    lines.push(`Summary: ${green} green, ${yellow} yellow, ${red} red`)
    lines.push('')
    lines.push('| Topic | Notes | Bullets | Tables | Mnemonics | Problems | Dates | Score | Gaps |')
    lines.push('|-------|-------|---------|--------|-----------|----------|-------|-------|------|')

    for (const a of audits) {
      const icon = a.score === 'red' ? '🔴' : a.score === 'yellow' ? '🟡' : '🟢'
      lines.push(
        `| ${a.topic} | ${a.noteSections} | ${a.revisionBullets} | ${a.comparisons} | ${a.mnemonics} | ${a.problems} | ${a.keyDates} | ${icon} | ${a.gaps.join('; ') || '—'} |`
      )
    }
    lines.push('')
  }

  lines.push('## Overall Summary')
  lines.push('')
  lines.push(`- Total topics: ${totalRed + totalYellow + totalGreen}`)
  lines.push(`- Green: ${totalGreen}`)
  lines.push(`- Yellow: ${totalYellow}`)
  lines.push(`- Red (needs work): ${totalRed}`)
  lines.push('')

  return lines.join('\n')
}

async function main() {
  const report = await generateReport()
  const outPath = path.join(process.cwd(), 'docs', 'content-audit-report.md')
  fs.writeFileSync(outPath, report)
  console.log(`Audit report written to ${outPath}`)
  console.log(`Total topics audited: ${SUBJECTS.reduce((n, s) => n + getTopicSlugs(s).length, 0)}`)
}

main().catch(console.error)
```

Note: Run with `npx tsx scripts/content-audit.ts` — `tsx` resolves TypeScript imports using the project's `tsconfig.json` path aliases (`@/*` → `src/*`). The `../src/data/...` relative paths in dynamic imports work because the script runs from the project root.

- [ ] **Step 2: Run the audit**

Run: `npx tsx scripts/content-audit.ts`
Expected: Prints "Audit report written to docs/content-audit-report.md" and topic count (~200).

- [ ] **Step 3: Review the report**

Run: `head -50 docs/content-audit-report.md`
Expected: Table with per-topic metrics and scores.

- [ ] **Step 4: Commit**

```bash
git add scripts/content-audit.ts docs/content-audit-report.md
git commit -m "feat: add content audit script and initial report"
```

---

## Chunk 5: Content Deepening

### Task 12: Deepen Red-Flagged Topics

**Files:**
- Modify: Various data files under `src/data/{subject}/concepts/`, `revision/`, `problems/`

This task is driven by the audit report from Task 11. It cannot be fully specified in advance — the audit must run first to identify which topics need work.

- [ ] **Step 1: Review audit report**

Open `docs/content-audit-report.md` and identify all red-flagged topics.

- [ ] **Step 2: For each red topic, expand content**

For each red-flagged topic, follow these rules:

**Concepts (if noteSections < 4):** Add note sections to cover:
- Core definition/introduction
- Key features/characteristics
- Historical context / evolution
- Current relevance / recent developments
- Exam-specific angle (frequently tested aspects)
- Comparisons with related concepts

**Revision (if bullets < 15 or comparisons < 1 or mnemonics < 1):**
- Add bullet points covering all key facts, dates, definitions
- Add at least 1 comparison table relating the topic to similar concepts
- Add at least 1 mnemonic for key lists or sequences

**Problems (if count < 10):**
- Add MCQs following the `SubjectProblem` type
- Include `examName` and `examYear` (use actual exam references)
- Mix difficulty: ~30% easy, ~40% medium, ~30% hard
- Each question needs a detailed `explanation`

Legal rules apply to all new content (see spec).

- [ ] **Step 3: Re-run audit after each subject**

Run: `npx tsx scripts/content-audit.ts`
Verify: Red count decreased. No new reds introduced.

- [ ] **Step 4: Commit per subject**

```bash
git add src/data/polity/
git commit -m "content(polity): deepen thin topics flagged by audit"
```

Repeat for history, geography, economics.

---

### Task 13: Populate Registry Topic Arrays

**Files:**
- Modify: `src/data/practice/subject-problems.ts`

After content deepening is complete, populate the empty `HISTORY_TOPICS`, `ECONOMICS_TOPICS`, and `GEOGRAPHY_TOPICS` arrays.

- [ ] **Step 1: Generate topic arrays from hub pages**

For each subject, extract topic slugs and labels from the SECTIONS arrays in hub pages:
- `src/app/history/page.tsx` → `HISTORY_TOPICS`
- `src/app/economics/page.tsx` → `ECONOMICS_TOPICS`
- `src/app/geography/page.tsx` → `GEOGRAPHY_TOPICS`

Get question counts:
```bash
for f in src/data/history/problems/*.ts; do
  slug=$(basename "$f" -problems.ts)
  count=$(grep -c "id:" "$f")
  echo "  { slug: '$slug', label: '...', count: $count },"
done
```

- [ ] **Step 2: Fill in the arrays in subject-problems.ts**

Replace each empty array with the full topic list.

- [ ] **Step 3: Verify all practice pages work**

Navigate to `http://localhost:3000/practice/history`, `/practice/economics`, `/practice/geography`
Expected: Each shows 50 topic cards with correct question counts.

Pick one topic from each and navigate to its practice session.
Expected: Questions load and display correctly with exam badges.

- [ ] **Step 4: Commit**

```bash
git add src/data/practice/subject-problems.ts
git commit -m "feat(practice): populate topic arrays for history, economics, geography"
```

---

### Task 14: Final Verification

- [ ] **Step 1: Full build**

Run: `npx next build 2>&1 | tail -30`
Expected: Build succeeds. No type errors.

- [ ] **Step 2: Smoke test all subjects**

Navigate to each and verify no "Coming Soon" badges on implemented features:
- `http://localhost:3000/economics` — no badges on visualizers
- `http://localhost:3000/history` — no badges on visualizers

Navigate to Practice for each rewired subject:
- `http://localhost:3000/practice/polity` → pick a topic → questions load
- `http://localhost:3000/practice/history` → pick a topic → questions load
- `http://localhost:3000/practice/geography` → pick a topic → questions load
- `http://localhost:3000/practice/economics` → pick a topic → questions load

Verify legacy practice still works:
- `http://localhost:3000/practice/quant/percentage` → 4 questions

- [ ] **Step 3: Run existing tests**

Run: `npx vitest run 2>&1 | tail -20`
Expected: All existing tests pass.

- [ ] **Step 4: Re-run content audit**

Run: `npx tsx scripts/content-audit.ts`
Expected: Zero red topics. Report shows improvement.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final verification — all Coming Soon removed, Practice rewired, content deepened"
```
