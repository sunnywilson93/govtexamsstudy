# Exams Directory — Design Spec

**Date**: 2026-03-29
**Status**: Approved

## Overview

Static exam directory listing India's top government competitive exams with dedicated detail pages. Data stored as structured TypeScript files — no live APIs, no scraping, no CMS.

## Scope

### In Scope
- `/exams` listing page with exam cards grouped by conducting body
- `/exams/[examId]` detail pages with pattern, syllabus, eligibility, cutoffs
- 10 exams initially: UPSC CSE, SSC CGL, SSC CHSL, IBPS PO, SBI PO, RRB NTPC, RRB Group D, CDS, NDA, CTET
- Header nav link, footer badge links, sitemap entries

### Out of Scope
- Cross-linking to topic pages (standalone — no deep-links into quant/reasoning/etc.)
- Live notifications, scraping, or API-driven dates
- Exam calendar or targeting tool (future)
- Auth or personalization

## Data Model

### Types (`src/types/exam.ts`)

```typescript
export type ExamCategory = 'upsc' | 'ssc' | 'banking' | 'railway' | 'defence' | 'teaching'

export interface ExamStage {
  name: string                    // e.g. "Tier I (Prelims)"
  mode: string                    // e.g. "CBT (Online)"
  duration: string                // e.g. "60 minutes"
  totalMarks: number
  sections: ExamSection[]
  negativeMarking?: string        // e.g. "0.50 marks per wrong answer"
}

export interface ExamSection {
  name: string                    // e.g. "Quantitative Aptitude"
  questions: number
  marks: number
}

export interface EligibilityCriteria {
  education: string               // e.g. "Bachelor's degree from recognized university"
  ageMin: number
  ageMax: number
  ageRelaxation?: string          // e.g. "5 years for SC/ST, 3 years for OBC"
  attempts?: string               // e.g. "6 attempts (unlimited for SC/ST)"
  nationality: string
}

export interface CutoffEntry {
  year: number
  category: string                // e.g. "General", "OBC", "SC", "ST"
  score: number
  stage?: string                  // e.g. "Tier I" — optional if single-stage exam
}

export interface ExamInfo {
  id: string                      // slug: "ssc-cgl"
  name: string                    // "SSC CGL"
  fullName: string                // "Staff Selection Commission - Combined Graduate Level"
  conductingBody: string          // "Staff Selection Commission (SSC)"
  category: ExamCategory
  frequency: string               // "Annual"
  description: string             // 2-3 line overview
  officialWebsite: string         // "https://ssc.nic.in"
  notificationUrl?: string        // direct link to latest notification
  stages: ExamStage[]
  syllabus: string[]              // broad subject areas as strings
  eligibility: EligibilityCriteria
  cutoffs: CutoffEntry[]          // last 3-5 years
  importantNotes?: string[]       // special info bullets
}
```

## File Structure

```
src/
  types/
    exam.ts                       # All exam types
  data/
    exams/
      index.ts                    # EXAM_DATA record + helpers
      upsc-cse.ts
      ssc-cgl.ts
      ssc-chsl.ts
      ibps-po.ts
      sbi-po.ts
      rrb-ntpc.ts
      rrb-group-d.ts
      cds.ts
      nda.ts
      ctet.ts
  app/
    exams/
      layout.tsx                  # Metadata only (no SubjectLayout)
      page.tsx                    # Listing page
      [examId]/
        page.tsx                  # Detail page
```

### Data File Pattern

Each exam file (e.g. `ssc-cgl.ts`) exports a single `ExamInfo` object:

```typescript
import type { ExamInfo } from '@/types/exam'

export const sscCgl: ExamInfo = {
  id: 'ssc-cgl',
  name: 'SSC CGL',
  // ...
}
```

`index.ts` re-exports all exams as a record:

```typescript
import { upscCse } from './upsc-cse'
import { sscCgl } from './ssc-cgl'
// ...

export const EXAM_DATA: Record<string, ExamInfo> = {
  'upsc-cse': upscCse,
  'ssc-cgl': sscCgl,
  // ...
}

export const EXAM_LIST = Object.values(EXAM_DATA)
```

## Routing

### `/exams` — Listing Page

- **Server component**
- Layout: `max-w-5xl mx-auto px-4 py-8`
- Header: `h1` "Government Exams" + intro paragraph
- Body: Exams grouped by `ExamCategory`, rendered in order: UPSC → SSC → Banking → Railway → Defence → Teaching
- Each category section: `h2` heading (e.g. "SSC Exams") + `grid gap-4 sm:grid-cols-2` card grid
- Card contents: exam name (bold), conducting body (muted), frequency badge, 1-line description, stage count, arrow link to detail page
- Card style: `rounded-lg border border-border-primary bg-bg-elevated p-4` — same as quant/reasoning hub topic cards
- `generateMetadata`: title "Government Exams — Eligibility, Pattern & Cutoffs | GovtExamsStudy"

### `/exams/[examId]` — Detail Page

- **Server component**
- `generateStaticParams` = `Object.keys(EXAM_DATA)`
- `notFound()` for unknown slugs
- Layout: `max-w-4xl mx-auto px-4 py-8`
- Breadcrumb: Home > Exams > {exam.name}

Sections rendered top-to-bottom:

1. **Hero** — `h1` exam name, full name (muted), conducting body, frequency badge, official website external link button
2. **Exam Pattern** — One card per stage. Each stage card shows: name, mode, duration, total marks, negative marking note. Sub-table within each stage: section name, questions, marks columns.
3. **Syllabus** — Subject areas rendered as chips/tags in a flex-wrap container
4. **Eligibility** — Single card: education requirement, age range + relaxation, attempts, nationality
5. **Cutoff Trends** — Table grouped by year (most recent first). Columns: category, score. Stage column if multi-stage cutoffs exist.
6. **Important Notes** — Bullet list, conditionally rendered if `importantNotes` exists
7. **Official Links** — External link buttons to `officialWebsite` and `notificationUrl`

`generateMetadata`: title "{exam.name} {currentYear} — Exam Pattern, Eligibility, Syllabus & Cutoffs | GovtExamsStudy"

## Navigation Updates

### Header (`src/components/layout/Header.tsx`)
- Add "Exams" to `NAV_LINKS` after Science, before Practice
- Hover color: `hover:text-orange-500`
- href: `/exams`

### Footer (`src/components/layout/Footer.tsx`)
- Convert "Exams Covered" static badges to `<Link>` elements pointing to `/exams/[examId]`
- Update badge list to match the 10 exams we have data for
- Badge-to-exam mapping: UPSC→`upsc-cse`, SSC CGL→`ssc-cgl`, SSC CHSL→`ssc-chsl`, Banking PO→`ibps-po`, Railways→`rrb-ntpc`, NDA→`nda`, CDS→`cds`, CTET→`ctet`
- "State PSC" has no detail page — keep as static span

### Sitemap (`src/app/sitemap.ts`)
- Add `/exams` with priority 0.8
- Add `/exams/[examId]` for each exam slug with priority 0.6

## Design Tokens

- Exam accent color: orange-500 (`#f97316`) — distinct from all subject colors
- Category label colors: reuse existing subject palette where natural (banking=teal, defence=amber, etc.) or just use neutral gray labels
- Card, typography, spacing: follow existing patterns — no new tokens needed

## Initial Exam Set (10)

| ID | Name | Category |
|---|---|---|
| `upsc-cse` | UPSC CSE (IAS/IPS) | upsc |
| `ssc-cgl` | SSC CGL | ssc |
| `ssc-chsl` | SSC CHSL | ssc |
| `ibps-po` | IBPS PO | banking |
| `sbi-po` | SBI PO | banking |
| `rrb-ntpc` | RRB NTPC | railway |
| `rrb-group-d` | RRB Group D | railway |
| `cds` | CDS | defence |
| `nda` | NDA | defence |
| `ctet` | CTET | teaching |

## Data Sourcing

All exam data must be sourced from official conducting body websites:
- UPSC: upsc.gov.in
- SSC: ssc.gov.in (formerly ssc.nic.in)
- IBPS: ibps.in
- SBI: sbi.co.in/careers
- RRB: rrbcdg.gov.in (or regional RRB sites)
- UPSC (CDS/NDA): upsc.gov.in
- CBSE (CTET): ctet.nic.in

Cutoff data from official result notifications. No third-party aggregator data.
