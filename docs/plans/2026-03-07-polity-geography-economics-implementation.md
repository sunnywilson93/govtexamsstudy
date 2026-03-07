# Polity, Geography & Economics Topic Tabs — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Notes / Revision / PYQ Practice topic pages for Polity (30 topics), Geography (30 topics), and Economics (30 topics) using shared generic components.

**Architecture:** Shared types in `src/types/subject-notes.ts` + shared components in `src/components/visualizers/shared/` with static Tailwind class map. Each subject gets its own data files, dynamic `[topic]` route, updated hub page, layout, and sitemap entries. Existing visualizer routes (polity/articles, economics/flows, etc.) are preserved.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, Vitest + RTL

**Indian Sovereignty:** All content must use India's official position on borders, territories. No maps. J&K/Ladakh are Indian UTs. PoK/Aksai Chin are Indian territory under illegal occupation. Arunachal Pradesh is an Indian state.

---

## Dependency Graph

```
Task 1 (shared types)
  └─► Task 2 (shared components + tests)
        └─► Task 3 (polity data + route)  ─┐
        └─► Task 4 (geography data + route) ├─► Task 6 (sitemap + final verify)
        └─► Task 5 (economics data + route) ─┘
```

Tasks 3, 4, 5 are **fully independent** and can run in parallel.

---

### Task 1: Shared Types

**Files:**
- Create: `src/types/subject-notes.ts`

**Step 1: Create shared types file**

```ts
// src/types/subject-notes.ts

export interface SubjectNote {
  section: string
  content: string
}

export interface KeyDate {
  year: string
  event: string
}

export interface SubjectConcept {
  topic: string
  title: string
  description: string
  category: string
  keyDates: KeyDate[]
  notes: SubjectNote[]
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

export interface SubjectRevision {
  topic: string
  bullets: string[]
  comparisons: ComparisonTable[]
  mnemonics: Mnemonic[]
}

export interface SubjectProblem {
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

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: PASS

**Step 3: Commit**

```bash
git add src/types/subject-notes.ts
git commit -m "feat: add shared SubjectConcept, SubjectRevision, SubjectProblem types"
```

---

### Task 2: Shared Components + Tests (TDD)

**Files:**
- Create: `src/components/visualizers/shared/SubjectNotesPanel.tsx`
- Create: `src/components/visualizers/shared/SubjectRevisionPanel.tsx`
- Create: `src/components/visualizers/shared/SubjectPYQSolver.tsx`
- Create: `src/components/visualizers/shared/SubjectTopicTabs.tsx`
- Create: `src/components/visualizers/shared/__tests__/SubjectNotesPanel.test.tsx`
- Create: `src/components/visualizers/shared/__tests__/SubjectRevisionPanel.test.tsx`
- Create: `src/components/visualizers/shared/__tests__/SubjectPYQSolver.test.tsx`
- Create: `src/components/visualizers/shared/__tests__/SubjectTopicTabs.test.tsx`

**Reference:** Mirror the History components exactly, but replace hardcoded `subject-history` classes with a static class map. Reference files:
- `src/components/visualizers/history/HistoryNotesPanel.tsx`
- `src/components/visualizers/history/HistoryRevisionPanel.tsx`
- `src/components/visualizers/history/HistoryPYQSolver.tsx`
- `src/components/visualizers/history/HistoryTopicTabs.tsx`
- `src/components/visualizers/history/__tests__/*.test.tsx`

**Static class map (use in all 4 components):**

```ts
export type SubjectSlug = 'polity' | 'geography' | 'economics'

export const SUBJECT_CLASSES: Record<SubjectSlug, {
  bg: string; text: string; border: string; bgLight: string; textDark: string
}> = {
  polity: {
    bg: 'bg-subject-polity',
    text: 'text-subject-polity',
    border: 'border-subject-polity',
    bgLight: 'bg-subject-polity-light',
    textDark: 'text-subject-polity-dark',
  },
  geography: {
    bg: 'bg-subject-geography',
    text: 'text-subject-geography',
    border: 'border-subject-geography',
    bgLight: 'bg-subject-geography-light',
    textDark: 'text-subject-geography-dark',
  },
  economics: {
    bg: 'bg-subject-economics',
    text: 'text-subject-economics',
    border: 'border-subject-economics',
    bgLight: 'bg-subject-economics-light',
    textDark: 'text-subject-economics-dark',
  },
}
```

Put this in a shared file: `src/components/visualizers/shared/subject-classes.ts`

**TDD flow:** For each component, write the test file first (mirror the corresponding history test), then implement. Use `subject='polity'` in all tests as the representative subject.

**SubjectNotesPanel** — identical to HistoryNotesPanel but uses `SUBJECT_CLASSES[subject]` instead of hardcoded `subject-history` classes. Props: `{ concept: SubjectConcept; subject: SubjectSlug }`.

**SubjectRevisionPanel** — identical to HistoryRevisionPanel. Props: `{ revision: SubjectRevision; subject: SubjectSlug }`.

**SubjectPYQSolver** — identical to HistoryPYQSolver. Props: `{ problems: SubjectProblem[]; subject: SubjectSlug }`.

**SubjectTopicTabs** — identical to HistoryTopicTabs but imports shared sub-components. Props: `{ concept: SubjectConcept; revision: SubjectRevision; problems: SubjectProblem[]; subject: SubjectSlug }`.

**Step 1: Write all 4 test files**

Mirror the corresponding history test files. Replace `HistoryConcept` imports with `SubjectConcept`, etc. Add `subject="polity"` prop to all component renders.

**Step 2: Run tests to verify they fail**

Run: `npx vitest run src/components/visualizers/shared/`
Expected: FAIL (components don't exist yet)

**Step 3: Create `subject-classes.ts` with the static class map**

**Step 4: Implement all 4 components**

Each component follows the same structure as its History counterpart but:
- Imports types from `@/types/subject-notes` instead of `@/types/history`
- Imports `SUBJECT_CLASSES, SubjectSlug` from `./subject-classes`
- Uses `const c = SUBJECT_CLASSES[subject]` then `c.bg`, `c.text`, etc. in className strings
- Tab active class uses `${c.border} ${c.text}` instead of `border-subject-history text-subject-history`

**Step 5: Run tests to verify they pass**

Run: `npx vitest run src/components/visualizers/shared/`
Expected: ALL PASS

**Step 6: Commit**

```bash
git add src/components/visualizers/shared/
git commit -m "feat: add shared SubjectTopicTabs components with tests"
```

---

### Task 3: Polity — Data Files + Route + Layout + Hub Page

**This task is INDEPENDENT of Tasks 4 and 5. Can run in parallel.**

**Files:**
- Create: `src/data/polity/concepts/{slug}.ts` (30 files)
- Create: `src/data/polity/revision/{slug}.ts` (30 files)
- Create: `src/data/polity/problems/{slug}-problems.ts` (30 files)
- Create: `src/app/polity/[topic]/page.tsx`
- Modify: `src/app/polity/page.tsx`
- Modify: `src/app/polity/layout.tsx`

**Topics (30) with groups:**

Constitutional Foundations: historical-background, constituent-assembly, preamble, union-territory, citizenship
Rights & Duties: fundamental-rights, dpsp, fundamental-duties
Union Executive: president-vp, prime-minister, parliament
State Government: governor, chief-minister, state-legislature
Judiciary: supreme-court, high-courts, tribunals
Federal Structure: centre-state-relations, inter-state-relations, emergency-provisions, amendment-procedure
Local Government: panchayati-raj, municipalities
Bodies & Special: election-commission, cag, upsc-spsc, finance-commission, statutory-bodies, anti-defection, scheduled-tribal-areas

**Step 1: Create all 90 data files**

Each concept file exports a `SubjectConcept` (from `@/types/subject-notes`):
```ts
import type { SubjectConcept } from '@/types/subject-notes'
export const preambleConcept: SubjectConcept = {
  topic: 'preamble',
  title: 'Preamble of the Constitution',
  description: '...',
  category: 'Constitutional Foundations',
  keyDates: [{ year: '1946', event: 'Objective Resolution by Nehru' }, ...],
  notes: [{ section: 'Key Words', content: '...' }, ...],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', ...],
  examRelevance: '...',
}
```

Each revision file exports a `SubjectRevision`:
```ts
import type { SubjectRevision } from '@/types/subject-notes'
export const preambleRevision: SubjectRevision = {
  topic: 'preamble',
  bullets: ['...', '...'],
  comparisons: [{ title: '...', headers: [...], rows: [[...]] }],
  mnemonics: [{ title: '...', mnemonic: '...', explanation: '...' }],
}
```

Each problems file exports `SubjectProblem[]`:
```ts
import type { SubjectProblem } from '@/types/subject-notes'
export const preambleProblems: SubjectProblem[] = [
  {
    id: 'polity-preamble-1',
    topic: 'preamble',
    question: '...',
    options: ['...', '...', '...', '...'],
    correctIndex: 0,
    explanation: '...',
    examName: 'UPSC CSE Prelims',
    examYear: 2023,
    difficulty: 'medium',
  },
  // ... more problems, no cap on number
]
```

**Content guidelines:**
- Notes should be comprehensive exam-focused content (not brief placeholders)
- Each topic should have 5-10+ key dates
- Each topic should have 4-6+ note sections
- Problems should be tagged with real exam names and realistic years
- Target exams: UPSC CSE, SSC CGL, SSC CHSL, IBPS PO, IBPS Clerk, SBI PO, RRB NTPC, CDS, NDA, State PSCs
- Difficulty mix: ~30% easy, ~50% medium, ~20% hard
- Polity-specific: reference Article numbers, constitutional provisions accurately
- Indian sovereignty: J&K and Ladakh are Indian UTs, Article 370 abrogated in 2019

**Step 2: Create dynamic route `src/app/polity/[topic]/page.tsx`**

Follow the exact pattern from `src/app/history/[topic]/page.tsx`:
- Import all 90 data files (30 concepts + 30 revisions + 30 problems)
- Build `TOPIC_DATA: Record<string, TopicData>` with all 30 entries
- Import `SubjectTopicTabs` from `@/components/visualizers/shared/SubjectTopicTabs`
- Pass `subject="polity"` to `SubjectTopicTabs`
- `generateStaticParams()` returns `Object.keys(TOPIC_DATA)`
- `generateMetadata()` produces per-topic SEO
- `notFound()` for unknown slugs
- Page renders `<h1>` + `<SubjectTopicTabs>`

```ts
interface TopicData {
  concept: SubjectConcept
  revision: SubjectRevision
  problems: SubjectProblem[]
  label: string
  description: string
}
```

**Step 3: Update hub page `src/app/polity/page.tsx`**

Rewrite with SECTIONS pattern (same as history/page.tsx):
- 8 sections matching the groups above
- Each topic card shows "Notes . Revision . PYQs" badge
- Existing visualizer routes (articles, amendments, landmark-cases) go in a "Visualizers" section with `hasTabs: false`

**Step 4: Update layout `src/app/polity/layout.tsx`**

Add `showHeading={false}` and expand links to ~33 grouped sidebar links (30 topics + 3 visualizers):
- Groups: Constitutional Foundations, Rights & Duties, Union Executive, State Government, Judiciary, Federal Structure, Local Government, Bodies & Special, Visualizers

**Step 5: Verify**

Run: `npx tsc --noEmit`
Run: `npx vitest run`
Expected: ALL PASS, no type errors

**Step 6: Commit**

```bash
git add src/data/polity/concepts/ src/data/polity/revision/ src/data/polity/problems/ src/app/polity/
git commit -m "feat(polity): add 30 topic pages with Notes, Revision & PYQ Practice"
```

---

### Task 4: Geography — Data Files + Route + Layout + Hub Page

**This task is INDEPENDENT of Tasks 3 and 5. Can run in parallel.**

**Files:**
- Create: `src/data/geography/concepts/{slug}.ts` (30 files)
- Create: `src/data/geography/revision/{slug}.ts` (30 files)
- Create: `src/data/geography/problems/{slug}-problems.ts` (30 files)
- Create: `src/app/geography/[topic]/page.tsx`
- Modify: `src/app/geography/page.tsx`
- Modify: `src/app/geography/layout.tsx`

**Topics (30) with groups:**

Physical Geography: physiography, drainage-systems, climate-monsoon, soils, natural-vegetation, biodiversity, islands-coasts
Economic Geography: agriculture, irrigation, minerals, energy, industries, transport
Human Geography: population, urbanization, tribes, migration
World Geography: geomorphology, climatology, oceanography, world-mapping
Environment & Ecology: ecosystems, environmental-pollution, climate-change, protected-areas, biodiversity-conservation, disaster-management, environmental-legislation
Resource Geography: water-resources, land-resources

**Follow the exact same pattern as Task 3 (Polity) with these differences:**
- Subject color: green `#22c55e`
- `subject="geography"` passed to `SubjectTopicTabs`
- Data file naming: `geographyConcept` → e.g., `physiographyConcept`, `drainageSystemsConcept`
- Problem IDs prefixed with `geo-`: e.g., `geo-physiography-1`
- No existing visualizer sub-routes (geography has empty links=[])
- Hub page: 6 sections matching groups above

**Content guidelines (geography-specific):**
- NO MAPS of any kind — all content is text-based
- Indian sovereignty: All of J&K (including PoK) and Aksai Chin are Indian territory
- Arunachal Pradesh is an Indian state
- Use official Indian government statistics for population, area, etc.
- Reference Indian Survey data and Census data
- Topics like physiography should describe Himalayan ranges, Indo-Gangetic plains, Deccan Plateau, Coastal Plains, Islands as text
- Rivers: describe courses, tributaries, basins as text — no map diagrams
- Climate: describe monsoon mechanism, climatic zones as text
- Protected areas: list names, locations, key species — no map plots

**Step 1-6:** Same as Task 3 but for geography.

**Commit message:**
```bash
git commit -m "feat(geography): add 30 topic pages with Notes, Revision & PYQ Practice"
```

---

### Task 5: Economics — Data Files + Route + Layout + Hub Page

**This task is INDEPENDENT of Tasks 3 and 4. Can run in parallel.**

**Files:**
- Create: `src/data/economics/concepts/{slug}.ts` (30 files)
- Create: `src/data/economics/revision/{slug}.ts` (30 files)
- Create: `src/data/economics/problems/{slug}-problems.ts` (30 files)
- Create: `src/app/economics/[topic]/page.tsx`
- Modify: `src/app/economics/page.tsx`
- Modify: `src/app/economics/layout.tsx`

**Topics (30) with groups:**

Basic Concepts: basic-concepts, national-income, money-supply, inflation, poverty-unemployment
Banking & Monetary: rbi, banking-system, financial-markets, banking-npas, insurance
Public Finance: union-budget, fiscal-policy, tax-system, public-debt, public-expenditure
External Sector: foreign-trade, exchange-rate, international-organizations, fdi-fii
Planning & Development: planning, economic-reforms, agriculture-economy, industry-policy, infrastructure
Social & Contemporary: inclusive-growth, government-schemes, digital-economy, sustainable-development, social-security, demographic-dividend

**Follow the exact same pattern as Task 3 (Polity) with these differences:**
- Subject color: teal `#14b8a6`
- `subject="economics"` passed to `SubjectTopicTabs`
- Data file naming: e.g., `rbiConcept`, `taxSystemConcept`, `inflationConcept`
- Problem IDs prefixed with `econ-`: e.g., `econ-rbi-1`
- Existing visualizer sub-routes: `/economics/flows`, `/economics/budget` — preserve in "Visualizers" sidebar group
- Hub page: 6 sections matching groups above + 1 "Visualizers" section

**Content guidelines (economics-specific):**
- Use latest available data (GDP figures, budget numbers as of 2024-25)
- Reference RBI, MOSPI, Economic Survey data
- Indian sovereignty alignment: use India's official economic statistics
- Government schemes should cover major schemes (PM-KISAN, MGNREGA, Ayushman Bharat, etc.)
- GST coverage should include rates, council structure, IGST/CGST/SGST

**Step 1-6:** Same as Task 3 but for economics.

**Commit message:**
```bash
git commit -m "feat(economics): add 30 topic pages with Notes, Revision & PYQ Practice"
```

---

### Task 6: Sitemap + Final Verification

**Depends on:** Tasks 3, 4, 5 all complete.

**Files:**
- Modify: `src/app/sitemap.ts`

**Step 1: Add topic arrays to sitemap**

Add three new arrays after `HISTORY_TOPICS`:

```ts
const POLITY_TOPICS = [
  'historical-background', 'constituent-assembly', 'preamble', 'union-territory', 'citizenship',
  'fundamental-rights', 'dpsp', 'fundamental-duties',
  'president-vp', 'prime-minister', 'parliament',
  'governor', 'chief-minister', 'state-legislature',
  'supreme-court', 'high-courts', 'tribunals',
  'centre-state-relations', 'inter-state-relations', 'emergency-provisions', 'amendment-procedure',
  'panchayati-raj', 'municipalities',
  'election-commission', 'cag', 'upsc-spsc', 'finance-commission', 'statutory-bodies',
  'anti-defection', 'scheduled-tribal-areas',
]

const GEOGRAPHY_TOPICS = [
  'physiography', 'drainage-systems', 'climate-monsoon', 'soils', 'natural-vegetation', 'biodiversity', 'islands-coasts',
  'agriculture', 'irrigation', 'minerals', 'energy', 'industries', 'transport',
  'population', 'urbanization', 'tribes', 'migration',
  'geomorphology', 'climatology', 'oceanography', 'world-mapping',
  'ecosystems', 'environmental-pollution', 'climate-change', 'protected-areas', 'biodiversity-conservation', 'disaster-management', 'environmental-legislation',
  'water-resources', 'land-resources',
]

const ECONOMICS_TOPICS = [
  'basic-concepts', 'national-income', 'money-supply', 'inflation', 'poverty-unemployment',
  'rbi', 'banking-system', 'financial-markets', 'banking-npas', 'insurance',
  'union-budget', 'fiscal-policy', 'tax-system', 'public-debt', 'public-expenditure',
  'foreign-trade', 'exchange-rate', 'international-organizations', 'fdi-fii',
  'planning', 'economic-reforms', 'agriculture-economy', 'industry-policy', 'infrastructure',
  'inclusive-growth', 'government-schemes', 'digital-economy', 'sustainable-development', 'social-security', 'demographic-dividend',
]
```

Add routes:
```ts
const polityRoutes = POLITY_TOPICS.map((slug) => `/polity/${slug}`)
const geographyRoutes = GEOGRAPHY_TOPICS.map((slug) => `/geography/${slug}`)
const economicsRoutes = ECONOMICS_TOPICS.map((slug) => `/economics/${slug}`)

const allRoutes = [...staticRoutes, ...quantRoutes, ...reasoningRoutes, ...historyRoutes, ...polityRoutes, ...geographyRoutes, ...economicsRoutes]
```

**Step 2: Run full verification**

```bash
npx tsc --noEmit
npx vitest run
npx next build
```

Expected: All pass, all new topic routes statically generated.

**Step 3: Verify route counts**

The build output should show:
- `/polity/[topic]` — 30 static routes
- `/geography/[topic]` — 30 static routes
- `/economics/[topic]` — 30 static routes

**Step 4: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat: add polity, geography, economics topics to sitemap"
```
