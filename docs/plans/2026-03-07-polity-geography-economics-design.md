# Polity, Geography & Economics — Topic Tabs Design

**Date:** 2026-03-07
**Status:** Approved

## Overview

Add Notes / Revision / PYQ Practice topic pages for three GK subjects — Polity (30 topics), Geography (30 topics), Economics (30 topics) — following the established History pattern. Shared generic components replace per-subject duplication.

## Indian Sovereignty Rules

All content must align with India's official position:

- J&K and Ladakh are Union Territories of India (post Article 370 abrogation, 2019)
- PoK = "Pakistan-Occupied Kashmir" (Indian territory under illegal occupation)
- Aksai Chin = Indian territory under illegal Chinese occupation
- Arunachal Pradesh = Indian state (not "South Tibet")
- No maps of any kind — purely text-based content
- Use official Indian government data and positions

## Architecture

### Shared Types (`src/types/subject-notes.ts`)

Generic types usable by all GK subjects (polity, geography, economics, and future subjects):

```ts
export interface SubjectNote { section: string; content: string }
export interface KeyDate { year: string; event: string }
export interface SubjectConcept {
  topic: string; title: string; description: string; category: string;
  keyDates: KeyDate[]; notes: SubjectNote[]; examTags: string[]; examRelevance: string
}
export interface ComparisonTable { title: string; headers: string[]; rows: string[][] }
export interface Mnemonic { title: string; mnemonic: string; explanation: string }
export interface SubjectRevision { topic: string; bullets: string[]; comparisons: ComparisonTable[]; mnemonics: Mnemonic[] }
export interface SubjectProblem {
  id: string; topic: string; question: string; options: string[];
  correctIndex: number; explanation: string; examName: string; examYear: number;
  difficulty: 'easy' | 'medium' | 'hard'
}
```

### Shared Components (`src/components/visualizers/shared/`)

Four components that accept a `subject` slug and use a static Tailwind class map:

| Component | Props | Mirrors |
|---|---|---|
| `SubjectNotesPanel` | `concept: SubjectConcept, subject: SubjectSlug` | `HistoryNotesPanel` |
| `SubjectRevisionPanel` | `revision: SubjectRevision, subject: SubjectSlug` | `HistoryRevisionPanel` |
| `SubjectPYQSolver` | `problems: SubjectProblem[], subject: SubjectSlug` | `HistoryPYQSolver` |
| `SubjectTopicTabs` | `concept, revision, problems, subject` | `HistoryTopicTabs` |

Static class map (Tailwind-safe):
```ts
type SubjectSlug = 'polity' | 'geography' | 'economics'
const SUBJECT_CLASSES: Record<SubjectSlug, { bg, text, border, bgLight, textDark }> = {
  polity:    { bg: 'bg-subject-polity',    text: 'text-subject-polity',    border: 'border-subject-polity',    bgLight: 'bg-subject-polity-light',    textDark: 'text-subject-polity-dark' },
  geography: { bg: 'bg-subject-geography', text: 'text-subject-geography', border: 'border-subject-geography', bgLight: 'bg-subject-geography-light', textDark: 'text-subject-geography-dark' },
  economics: { bg: 'bg-subject-economics', text: 'text-subject-economics', border: 'border-subject-economics', bgLight: 'bg-subject-economics-light', textDark: 'text-subject-economics-dark' },
}
```

### Tests (`src/components/visualizers/shared/__tests__/`)

4 test files mirroring history's test suite (SubjectNotesPanel, SubjectRevisionPanel, SubjectPYQSolver, SubjectTopicTabs). Test with `subject='polity'` as representative.

## Topic Lists

### Polity — 30 topics, 8 groups

**Constitutional Foundations (5):** historical-background, constituent-assembly, preamble, union-territory, citizenship
**Rights & Duties (3):** fundamental-rights, dpsp, fundamental-duties
**Union Executive (3):** president-vp, prime-minister, parliament
**State Government (3):** governor, chief-minister, state-legislature
**Judiciary (3):** supreme-court, high-courts, tribunals
**Federal Structure (4):** centre-state-relations, inter-state-relations, emergency-provisions, amendment-procedure
**Local Government (2):** panchayati-raj, municipalities
**Bodies & Special (7):** election-commission, cag, upsc-spsc, finance-commission, statutory-bodies, anti-defection, scheduled-tribal-areas

### Geography — 30 topics, 6 groups

**Physical Geography (7):** physiography, drainage-systems, climate-monsoon, soils, natural-vegetation, biodiversity, islands-coasts
**Economic Geography (6):** agriculture, irrigation, minerals, energy, industries, transport
**Human Geography (4):** population, urbanization, tribes, migration
**World Geography (4):** geomorphology, climatology, oceanography, world-mapping
**Environment & Ecology (7):** ecosystems, environmental-pollution, climate-change, protected-areas, biodiversity-conservation, disaster-management, environmental-legislation
**Resource Geography (2):** water-resources, land-resources

### Economics — 30 topics, 6 groups

**Basic Concepts (5):** basic-concepts, national-income, money-supply, inflation, poverty-unemployment
**Banking & Monetary (5):** rbi, banking-system, financial-markets, banking-npas, insurance
**Public Finance (5):** union-budget, fiscal-policy, tax-system, public-debt, public-expenditure
**External Sector (4):** foreign-trade, exchange-rate, international-organizations, fdi-fii
**Planning & Development (5):** planning, economic-reforms, agriculture-economy, industry-policy, infrastructure
**Social & Contemporary (6):** inclusive-growth, government-schemes, digital-economy, sustainable-development, social-security, demographic-dividend

## Per-Subject Changes

### Data Files
- `src/data/{subject}/concepts/{slug}.ts` — exports `SubjectConcept`
- `src/data/{subject}/revision/{slug}.ts` — exports `SubjectRevision`
- `src/data/{subject}/problems/{slug}-problems.ts` — exports `SubjectProblem[]`
- 30 topics x 3 files = 90 files per subject, 270 total

### Routes
- `src/app/{subject}/[topic]/page.tsx` — dynamic route with TOPIC_DATA, generateStaticParams, generateMetadata
- Updated hub page (`page.tsx`) with SECTIONS pattern
- Updated layout with grouped sidebar links (existing visualizer links preserved in "Visualizers" group)

### Sitemap
- Add `POLITY_TOPICS`, `GEOGRAPHY_TOPICS`, `ECONOMICS_TOPICS` arrays to `src/app/sitemap.ts`

### Existing Routes Preserved
- `/polity/articles`, `/polity/amendments`, `/polity/landmark-cases` — kept in "Visualizers" sidebar group
- `/economics/flows`, `/economics/budget` — kept in "Visualizers" sidebar group

## Exam Coverage

All PYQ problems tagged with exam name + year. Target exams:
UPSC CSE Prelims, SSC CGL, SSC CHSL, IBPS PO, IBPS Clerk, SBI PO, RRB NTPC, CDS, NDA, State PSCs (UPPSC, MPPSC, BPSC, etc.)
