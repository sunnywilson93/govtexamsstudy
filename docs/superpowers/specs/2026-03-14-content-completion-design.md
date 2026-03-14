# Content Completion & Practice Arena Rewire — Design Spec

**Date:** 2026-03-14
**Status:** Approved
**Scope:** Economics, History, Geography, Polity (Science excluded)

## Problem Statement

Several implemented features are incorrectly labeled "Coming Soon" or inaccessible:
1. Economics hub shows "Coming Soon" on 2 fully-built visualizers (Policy Flows, Budget Treemap)
2. History hub shows "Coming Soon" on 2 fully-built visualizers (Timeline, Freedom Movement)
3. Practice arena has only 48 MCQs while per-topic data files contain 5,283 questions
4. Content depth varies across topics — some have 12+ note sections and 28 MCQs, others are thin

## Constraints

- **No maps** of any kind (India or world) — legal risk with boundary depictions
- **No copyrighted text** — all content must be original explanations of public facts
- **No full exam paper reproduction** — individual questions reframed in our own words
- **No NCERT verbatim copying** — rephrase concepts
- **Science subject excluded** from this effort
- Government data, Supreme Court judgments, and constitutional articles are public domain — safe to use

---

## Sub-project 1: Fix "Coming Soon" Badges

### Problem
Economics, History hub pages (and potentially Polity, Geography in future) use `!topic.hasTabs` to render "Coming Soon" badges. Visualizer cards correctly have `hasTabs: false` (they're not tabbed), but this makes them appear unimplemented.

### Solution
Add an explicit `comingSoon?: boolean` field to the `Topic` interface. Change the badge condition from `!topic.hasTabs` to `topic.comingSoon`.

```ts
interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
  comingSoon?: boolean  // only show badge when explicitly true
}
```

### Files Changed
- `src/app/economics/page.tsx` — update Topic interface + badge condition
- `src/app/history/page.tsx` — update Topic interface + badge condition
- `src/app/polity/page.tsx` — update Topic interface for consistency (no visible badge change)
- `src/app/geography/page.tsx` — update Topic interface for consistency (no visible badge change)

All four hub pages define `Topic` locally. All four must be updated so the interface stays consistent across subjects.

### Geography Verification
**TO-DO during implementation:** Verify that all 50 geography topics in the hub page SECTIONS array are present in `[topic]/page.tsx` TOPIC_DATA, and that sidebar link count in `layout.tsx` matches. The `[topic]/page.tsx` file has imports and TOPIC_DATA entries for 50 topics (confirmed by reading the full file), but sidebar link count needs verification.

---

## Sub-project 2: Practice Arena Rewire

### Goal
Surface existing per-topic problem data (5,283 questions) in the Practice arena for Polity, History, Geography, and Economics. Keep existing MCQ data for Quant, Reasoning, and Science (their problem types are incompatible with simple MCQ format).

### Verified Question Counts

Verified via `grep -c "id:"` across all problem files:

| Subject | Files | Total Questions | Avg/Topic | Before (Practice) |
|---------|-------|----------------|-----------|-------------------|
| Polity | 50 | 1,366 | ~27 | 3 |
| History | 50 | 1,280 | ~26 | 3 |
| Economics | 50 | 1,360 | ~27 | 3 |
| Geography | 50 | 1,277 | ~26 | 3 |
| **Total** | **200** | **5,283** | **~26** | **12** |

Quant (12), Reasoning (12), Science (12) remain unchanged.

### Type Extension

Extend `MCQ` in `src/types/shared.ts` with **optional fields only** (preserves all existing consumers without changes):

```ts
export interface MCQ {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  topic: string
  subject: Subject
  // Optional exam metadata — present when sourced from SubjectProblem
  examName?: string
  examYear?: number
  difficulty?: 'easy' | 'medium' | 'hard'
}
```

**Why not a union type:** A discriminated union would require narrowing at every `MCQ` usage site (`MCQCard`, `PracticeSession`, `progressStore`). Optional fields are additive and non-breaking.

### Type Adapter

`src/lib/practice-adapter.ts`:
```ts
function subjectProblemToMCQ(problem: SubjectProblem, subject: Subject): MCQ {
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
```

### Data Registry

Create `src/data/practice/subject-problems.ts`:

```ts
// Static registry — topic metadata with hardcoded counts (sync, no imports needed)
export function getPracticeTopics(subject: Subject): { slug: string; label: string; count: number }[]

// Dynamic loader — imports only the requested topic's data file (async)
export async function getPracticeQuestions(subject: Subject, topic: string): Promise<MCQ[]>
```

`getPracticeTopics` is **synchronous** — returns a static array of topic metadata with hardcoded question counts. No file imports needed. This powers the topic listing page.

`getPracticeQuestions` is **async** — uses `await import()` to load only the requested topic's problem file, then converts via the adapter. This keeps bundles small.

### Why Not Quant/Reasoning

Their problem types (`MathProblem`, `ReasoningProblem`) contain `steps[]` arrays for step-by-step solving. Converting to flat MCQ format loses the core value. Keep existing 12+12 practice MCQs for these subjects.

### Page Architecture — Server/Client Split

**Problem:** The current `/practice/[subject]/[topic]/page.tsx` is `'use client'`. It cannot be `async` or use `await import()`.

**Solution:** Convert to a **server component wrapper** that loads data, passing it as props to the client `PracticeSession`:

```
// page.tsx (SERVER component — no 'use client')
// - Resolves params
// - For polity/history/geography/economics: await getPracticeQuestions()
// - For quant/reasoning/science: import existing ALL_MCQS and filter
// - Passes questions[] as props to <PracticeSession>

// PracticeSession.tsx (CLIENT component — already 'use client')
// - Receives questions: MCQ[] as props (already does this)
// - No changes needed to PracticeSession itself
```

This works because `PracticeSession` already accepts `questions: MCQ[]` as a prop. The only change is moving the data-loading logic from the page component (currently client-side) to a server component wrapper.

### Static Generation Strategy

**Decision: Server-rendered on demand (no `generateStaticParams`).**

Rationale:
- 200 practice topic routes is too many to statically generate (build time + memory)
- Practice pages are interactive sessions, not SEO landing pages — they don't need to be in the sitemap
- The subject topic pages (`/polity/[topic]`, etc.) already serve as SEO landing pages with the same content
- Practice routes are behind a user action (clicking into Practice arena), not direct search traffic
- Next.js App Router handles on-demand server rendering efficiently with streaming

**Sitemap:** Practice routes are NOT added to `src/app/sitemap.ts`. The per-subject topic routes already cover SEO for all topics.

### Practice UI Updates

**`/practice/[subject]/page.tsx`:**
- `SUBJECT_TOPICS` expanded for polity/history/geography/economics using the static registry
- For quant/reasoning/science: keep existing static definitions
- Topic cards show actual question count from the registry

**`/practice/[subject]/[topic]/page.tsx`:**
- Remove `'use client'` — becomes a server component
- For polity/history/geography/economics: `await getPracticeQuestions(subject, topic)`
- For quant/reasoning/science: import existing `ALL_MCQS` and filter (synchronous)
- Pass `questions[]` to `<PracticeSession>` as props

**`MCQCard` enhancement:**
- Optionally render exam badge ("SSC CGL 2019") when `mcq.examName` is defined
- Optionally render difficulty pill (easy/medium/hard) when `mcq.difficulty` is defined
- Progressive enhancement — existing MCQs without these fields render as before

### Bundle Size
Dynamic imports ensure only the requested topic's ~26 questions load per page view. No aggregated bundle.

---

## Sub-project 3: Content Audit

### Audit Script

Create `scripts/content-audit.ts` — run via `npx tsx scripts/content-audit.ts` (the project already has TypeScript tooling; `tsx` is a standard zero-config TS runner, add as a devDependency if not already present).

**Quality thresholds** (calibrated from best-in-class topics):

| Metric | Minimum | Good | Excellent |
|--------|---------|------|-----------|
| Concept note sections | 4 | 8 | 12+ |
| Revision bullets | 15 | 30 | 40+ |
| Comparison tables | 1 | 3 | 5+ |
| Mnemonics | 1 | 3 | 5+ |
| Problems/MCQs | 5 | 10 | 25+ |
| Key dates | 3 | 8 | 12+ |

**Output:** Markdown report at `docs/content-audit-report.md`:
- Every topic across Polity (50), History (50), Geography (50), Economics (50) = 200 topics
- Current counts for each metric
- Quality score: red (below minimum) / yellow (minimum but below good) / green (good+)
- Specific gaps per topic
- Summary statistics per subject

**Runner:** `npx tsx scripts/content-audit.ts` — uses TypeScript imports to read data files directly (same module resolution as the Next.js app). No regex parsing of source files.

---

## Sub-project 4: Content Deepening

### Strategy

After the audit identifies thin topics, expand them to meet at least the "Good" threshold:

1. **Concepts:** Add note sections covering exam-specific angles, comparisons, recent developments, constitutional/statutory context
2. **Revision:** Add comparison tables (high-value for exam prep), mnemonics, ensure bullet coverage of all key facts
3. **Problems:** For topics below 10 MCQs, add more with exam-year attribution, difficulty grading, and detailed explanations

### Legal Safety Rules

All content must follow these rules:
- Original explanations of publicly available facts — no copyrighted text
- No maps of any kind (India or world)
- No reproduction of full exam papers — individual questions reframed
- Government data (census, budget, constitutional articles) = public domain
- Supreme Court judgments = public record, safe to reference
- No verbatim NCERT text — rephrase all concepts
- No proprietary coaching material references

### Execution Order

1. Run audit script to generate the report
2. Prioritize red-flagged topics (below minimum thresholds)
3. Work subject by subject: Polity → History → Geography → Economics
4. Re-run audit after each subject to verify progress

---

## Implementation Order

1. **Sub-project 1** (Fix badges) — minimal changes, no dependencies
2. **Sub-project 2** (Practice rewire) — requires adapter, registry, UI updates, server/client split
3. **Sub-project 3** (Audit script) — independent of 1 and 2
4. **Sub-project 4** (Content deepening) — depends on Sub-project 3 output

Sub-projects 1, 2, and 3 can run in parallel. Sub-project 4 is sequential after 3.

---

## Files Created/Modified Summary

### New Files
- `src/lib/practice-adapter.ts` — SubjectProblem → MCQ adapter
- `src/data/practice/subject-problems.ts` — centralized problem registry (static metadata + dynamic loaders)
- `scripts/content-audit.ts` — audit script
- `docs/content-audit-report.md` — generated audit report

### Modified Files
- `src/app/economics/page.tsx` — Topic interface + badge condition
- `src/app/history/page.tsx` — Topic interface + badge condition
- `src/app/polity/page.tsx` — Topic interface (consistency)
- `src/app/geography/page.tsx` — Topic interface (consistency)
- `src/app/practice/[subject]/page.tsx` — expanded SUBJECT_TOPICS from registry
- `src/app/practice/[subject]/[topic]/page.tsx` — server component conversion + registry loading
- `src/components/practice/MCQCard.tsx` — optional exam badge + difficulty pill
- `src/types/shared.ts` — extend MCQ with optional examName, examYear, difficulty
