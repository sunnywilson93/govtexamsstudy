# govtexamsstudy

<!-- AUTO-MANAGED: project-description -->
## Project Description

India's first interactive visual learning platform for government exam preparation (UPSC, SSC, etc.). Builds web-native, animated, explorable visualizations — not video/PDF/mock tests like competitors. Paradigm: jsinterview.dev (DSA visualizer) applied to exam content.

- Business model: fully free + ads; ad placements on practice pages only, not visualizers
- No CMS — content stored as structured JSON/TS data files, versioned in git
- No auth in Phase 1 — cookie-based progress tracking only
<!-- END AUTO-MANAGED -->

<!-- AUTO-MANAGED: architecture -->
## Architecture

### Tech Stack

- Next.js (App Router) + TypeScript — path alias `@/*` maps to `src/*`; `next.config.js` uses CJS (`module.exports`), `reactStrictMode: true`, `poweredByHeader: false`
- Tailwind CSS v4 (CSS-first: `@import "tailwindcss"` + `@theme` block in `globals.css`; no `tailwind.config.ts`)
- Framer Motion for step-by-step animations
- Zustand + Immer for visualizer state management
- Lucide React icons
- Vitest + React Testing Library for unit tests; Playwright for E2E
- Husky for git hooks
- Structured JSON/TS data files (no CMS)
- Reference codebase: `/Users/sunnywilson/Documents/projects/dsa-visualiser-3/` (jsinterview.dev)

### Directory Structure

```
src/
  components/
    layout/       Header, Footer, SubjectLayout
    ui/           SubjectCard, StepController, Badge
    visualizers/
    shared/
  data/
    quant/
      concepts/   one file per topic (e.g. percentage.ts) — exports QuantConcept
      tricks/     one file per topic — exports QuantTrick[] (5 per topic)
      problems/   one file per topic (e.g. percentage-problems.ts) — exports MathProblem[]
    reasoning/ polity/ history/ geography/ economics/ science/ practice/
  types/          one file per subject + shared.ts
  store/
  lib/
  hooks/
  constants/
```

### Design Tokens

- Subject colors: quant=blue, reasoning=purple, polity=red, history=amber, geography=green, economics=teal, science=cyan
- Primary: indigo-600 (`#4f46e5`) | Secondary: amber-500 (`#f59e0b`)
- Fonts: Inter (body), JetBrains Mono (code/numbers)
- All tokens defined in `globals.css` `@theme` block — semantic color vars (`--color-bg-*`, `--color-text-*`, `--color-border-*`), subject vars (`--color-subject-{slug}`, `--color-subject-{slug}-light`, `--color-subject-{slug}-dark`)
- **Do not add custom `--spacing-*` vars to `@theme`** — they collide with Tailwind v4's built-in `max-w-*` scale (e.g. `--spacing-xl` makes `max-w-xl` resolve to `2rem` instead of `36rem`); use Tailwind's default spacing scale directly

### Global CSS Utilities (`src/app/globals.css`)

- `.hero-gradient` — `linear-gradient(135deg, #312e81 0%, #4f46e5 40%, #818cf8 100%)`; used on home hero + CTA sections
- `.bento-grid` — 2-col @ mobile (gap 1rem, rows min 140px), 4-col @ md+ (gap 1.25rem, rows min 160px)
- `.bento-wide` — `grid-column: span 2`; applied to quant, polity, science subject cards
- `.bento-tall` — `grid-row: span 2`; available for future use
- `.stat-glow` — indigo text-shadow glow for hero stat counters
- `.glass-stat` — glassmorphism stat card: `rgba(255,255,255,0.08)` bg + `backdrop-filter: blur(8px)` + `1px solid rgba(255,255,255,0.12)` border; used on hero stat cards
- `.subject-card-gradient` — uses `var(--card-color-light)` CSS var; set inline per card; NOT used by BentoSubjectGrid (which uses inline style directly)
- `.dot-pattern` — `radial-gradient(circle, #e2e8f0 1px, transparent 1px)` at 24px grid; used as background on "How It Works" section
- `.feature-card-bar` — 4px colored top bar via `::before` + `var(--bar-color)` CSS var set inline per card; `position: relative; overflow: hidden` on host; used on Featured Visualizers cards
- `.step-connector` — sm+ only dashed connector line via `::after`; `width: 2.5rem; border-top: 2px dashed #c7d2fe`; last-child connector suppressed; used on How It Works step cards
- `prefers-reduced-motion` — globally disables all animations/transitions

### Platform Modules

- **Subject Visualizers** — interactive explorable visualizations per subject (core product)
- **Daily Current Affairs** — visual timeline of daily news linked to syllabus
- **Practice Arena** — topic-wise MCQs with visual explanations
- **Streak & Progress** — daily streak, spaced repetition, topic mastery badges
- **Exam Intelligence** — cutoff trends, exam calendar, exam targeting tool

### Routing Structure

```
/                              Home — Hero + BentoSubjectGrid (#subjects) + Featured Visualizers (4 cards) + How It Works (3 steps) + CTA
/quant                         Quantitative Aptitude hub — SECTIONS layout: Arithmetic (5) + Advanced Arithmetic (5) + Higher Maths (4) + Visualizer (geometry) + Miscellaneous (5); each topic card has hasTabs:true flag; no "Coming Soon" badges on implemented topics
/quant/step-solver             Redirects to /quant/percentage
/quant/[topic]                 Dynamic route — Concept | Tricks | Problems tabs; 19 slugs statically generated via Object.keys(TOPIC_DATA) (all phases wired)
/quant/percentage              Percentage (Phase 1)
/quant/profit-loss             Profit, Loss & Discount (Phase 1)
/quant/ratio                   Ratio & Proportion (Phase 1)
/quant/time-speed-distance     Time, Speed & Distance (Phase 1)
/quant/time-work               Time & Work + Pipes (Phase 1)
/quant/number-system           Number System + HCF/LCM (Phase 2)
/quant/average                 Averages (Phase 2)
/quant/simple-compound-interest Simple & Compound Interest (Phase 2)
/quant/mixture-alligation      Mixture & Alligation (Phase 2)
/quant/mensuration             Mensuration 2D/3D (Phase 2)
/quant/algebra                 Algebra — equations & identities (Phase 3)
/quant/geometry                Interactive geometry visualizer (standalone, not via [topic])
/quant/trigonometry            Trigonometry + heights & distances (Phase 3)
/quant/data-interpretation     Data Interpretation — tables, charts (Phase 3)
/quant/statistics-probability  Statistics & Probability (Phase 3)
/quant/surds-indices           Surds & Indices (Miscellaneous)
/quant/partnership             Partnership (Miscellaneous)
/quant/ages                    Problems on Ages (Miscellaneous)
/quant/simplification          Simplification (Miscellaneous)
/quant/sequences-series        Sequences & Series (Miscellaneous)
/reasoning                     Reasoning & Logic hub
/reasoning/seating             Seating arrangement solver
/reasoning/syllogism           Venn diagram builder
/reasoning/series              Pattern detection visualizer
/polity                        Polity hub
/polity/articles               Interactive Article explorer
/polity/amendments             Amendment timeline
/polity/landmark-cases         SC Judgments linked to Articles
/history                       History hub
/history/timeline              Interactive zoomable timeline
/history/freedom-movement      Cause-effect chains
/geography                     Geography hub
/geography/map                 Interactive India map with layers
/economics                     Economics hub
/economics/flows               Policy flow diagrams
/economics/budget              Budget visualizer
/science                       General Science hub
/science/periodic-table        Interactive periodic table
/science/human-body            Body systems explorer
/current-affairs               Daily visual current affairs
/practice                      Practice arena
/practice/[subject]/[topic]    Topic-wise MCQs
/dashboard                     Progress, streaks, weak areas
/exams                         Exam intelligence hub
/exams/[examId]                Cutoff trends, syllabus, calendar
```

### Shared Types (`src/types/shared.ts`)

- `Step { id, title, description, highlights }`
- `Visualizer { id, title, description, subject, steps }`
- `Subject = "quant" | "reasoning" | "polity" | "history" | "geography" | "economics" | "science"`
- `BadgeLevel = "none" | "bronze" | "silver" | "gold"`
- `MCQ { id, question, options[], correctIndex, explanation, topic, subject }`

### State Management

**`src/store/progressStore.ts`** — `useProgressStore` (Zustand + Immer)
- State: `streak` (number), `lastActivityDate` (string|null, ISO date), `completedTopics` (string[]), `topicScores` (Record<string, number>)
- `recordActivity()` — increments streak if called on consecutive day; resets streak to 1 on gap
- `markTopicCompleted(subject, topic)` / `recordScore(subject, topic, score)` — key format: `"subject:topic"`
- `getBadgeLevel(_subject, accuracy)` — >=90→gold, >=70→silver, >=50→bronze, else none

**`src/store/visualizerStore.ts`** — `useVisualizerStore` (Zustand + Immer)
- State: `currentStep` (number), `totalSteps` (number), `isPlaying` (boolean)
- Actions: `setSteps(total)`, `nextStep()`, `prevStep()`, `goToStep(n)` (clamped 0–totalSteps-1), `toggleAutoPlay()`, `reset()`
- Visualizer components consume this store directly (not via props)

**`src/lib/cookies.ts`**
- `saveToCookie(key, value)` — JSON + encodeURIComponent, 1-year expiry, SameSite=Lax
- `loadFromCookie<T>(key)` — returns T|null, swallows parse errors

### Key Data Models

**Polity**
- `Article { id, number, part, title, description, amendments[], cases[], linkedArticles[] }`
- `Amendment { id, number, year, description, articlesAffected[], significance }`
- `LandmarkCase { id, name, year, summary, articlesInterpreted[], impact }`

**History**
- `Event { id, year, title, description, causes[], effects[], relatedEvents[], category }`
- `Period { id, name, startYear, endYear, events[] }`
- `CauseEffectChain { id, events[], description }`

**Geography**
- `MapLayer { id, name, type ('rivers'|...), features[], visible: boolean }`
- `Feature { id, name, geometry, properties, linkedTopics[] }`

**Economics**
- `PolicyFlow { id, name, description, steps[] }` — consumed by `PolicyFlowDiagram`; data from `@/data/economics/policy-flows` (named export `policyFlows`)
- `PolicyFlow.steps[n].connections[]` — each connection has a `label` rendered as SVG edge text
- `BudgetItem` — consumed by `BudgetTreemap` (drill-down treemap); data from `@/data/economics/budget-2025` (named export `budgetItems`); page title "Union Budget 2024-25"

**Quant**
- `MathProblem { id, topic, title, question, steps[], answer, difficulty }`
- `MathStep { id, operation, expression, result, explanation, variables }`
- `GeometryShape { id, type, properties, formulas[] }`
- `QuantTopic` union — 20 values: `"percentage" | "profit-loss" | "ratio" | "time-speed-distance" | "time-work" | "number-system" | "average" | "simple-compound-interest" | "mixture-alligation" | "mensuration" | "algebra" | "geometry" | "trigonometry" | "data-interpretation" | "statistics-probability" | "surds-indices" | "partnership" | "ages" | "simplification" | "sequences-series"`; Phase 1: first 5; Phase 2: next 5; Phase 3: next 5 (incl. geometry); Miscellaneous: last 5; `TOPIC_DATA` in `quant/[topic]/page.tsx` covers 19 (excludes geometry — it is a standalone visualizer route); see `docs/plans/2026-03-01-quant-syllabus.md`
- `ConceptFormula { name, formula, whenToUse }` — one entry per core formula; used in `QuantConcept.formulas[]`
- `QuantConcept { topic, title, description, keyIdea, formulas: ConceptFormula[], examTags: string[], examRelevance: string }` — `examTags` is a string array of exam names (e.g. `["SSC CGL", "IBPS PO"]`) rendered as chips; `examRelevance` is a prose note; data files at `src/data/quant/concepts/{topic}.ts`
- `QuantTrick { id, topic, type ("formula-shortcut"|"mental-math"), title, description, formula?, example: { problem, solution }, timeSaved? }` — data files at `src/data/quant/tricks/{topic}.ts`; each file exports exactly 5 tricks

**Reasoning**
- `SeatingProblem { id, type, clues[], people[], steps[], solution }`
- `SyllogismProblem { id, statements[], conclusions[], steps[] }`
- `VennStep { id, description, circles[], regions[] }`

### SEO Infrastructure
- `src/app/sitemap.ts` — auto-generates sitemap; priority 1.0 for `/`, 0.8 for subject hubs, 0.6 for sub-routes
- `src/app/robots.ts` — blocks `/api/` paths

### Analytics
- Google Analytics 4 (GA4) — Measurement ID `G-GPQEH3V7KN`; `GA_MEASUREMENT_ID` constant defined at module level in `src/app/layout.tsx`
- Two `next/script` tags with `strategy="afterInteractive"` placed inside explicit `<head>` in `RootLayout`: GTM script loader + inline `gtag('config', ...)` init
<!-- END AUTO-MANAGED -->

<!-- AUTO-MANAGED: patterns -->
## Patterns

### Structural
- Each subject area has a hub route + nested visualizer sub-routes
- Visualizers animate step-by-step — every step must be independently renderable
- Data files are the source of truth; visualizer components consume typed data models
- Ad placements live only on practice pages — never inside visualizer components
- Phase 1 ships all subject areas together (no staggered rollout)

### Layout Components
- `SubjectLayout` (`src/components/layout/SubjectLayout.tsx`) — `'use client'`; wrap all subject hub pages; provides breadcrumb + sticky sidebar nav (desktop, `w-56`) + dropdown/pill nav (mobile); props: `subjectName`, `subjectColor`, `subjectSlug`, `links[]`, `children`, `showHeading?` (default `true`); `showHeading=false` suppresses the H1 (quant layout uses this — each topic page renders its own `<h1>`); `NavLink` has optional `group?` string; `groupLinks()` helper groups consecutive links with the same `group` value under a label header in sidebar; active link uses **exact** `pathname === link.href` (not `startsWith`); active sidebar item bg: `${subjectColor}15` (hex alpha); sidebar sticky wrapper is `div.sticky.top-20`; nav has `overflow-y-auto` + inline `style={{ maxHeight: 'calc(100vh - 5rem)' }}` — **do NOT use Tailwind arbitrary `calc()` here** (missing spaces in `calc(100vh-5rem)` generates invalid CSS; `5rem` matches `top-20`); mobile: when `hasGroups` is true renders `<select>` with `<optgroup>` per group + `--tw-ring-color: subjectColor` focus ring; otherwise renders horizontal pill scroll nav
- `BentoSubjectGrid` (`src/app/_components/BentoSubjectGrid.tsx`) — `'use client'`; renders the home-page subject grid as a bento layout; props: `{ subjects: SubjectInfo[] }`; WIDE_SUBJECTS (`quant`, `polity`, `science`) span 2 cols via `bento-wide` class; each card is a `motion.div` with `whileHover` scale 1.02 + box-shadow and `whileTap` scale 0.98; card gradient: `linear-gradient(145deg, subjectLightColor 0%, #ffffff 50%, #ffffff 100%)`; icon + route pills rendered per subject; `SUBJECT_ICONS` typed as `Record<string, React.ComponentType<LucideProps>>`; purple hex `#8b5cf6`
- `SubjectCardGrid` (`src/app/_components/SubjectCardGrid.tsx`) — `'use client'`; simpler alternative to BentoSubjectGrid; uses `SubjectCard` from `@/components/ui/SubjectCard`; layout: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`; no Framer Motion, no route pills, no Explore arrow; icon map uses inline JSX nodes; purple hex `#a855f7` (differs from BentoSubjectGrid)
- `Header` (`src/components/layout/Header.tsx`) — `'use client'`; sticky (`z-50`, `backdrop-blur-sm`); reads `streak` from `useProgressStore` and shows flame badge when `streak > 0`; active link detected via `pathname.startsWith(link.href)`; NAV_LINKS use per-subject `hover:text-subject-{slug}` color classes; mobile hamburger collapses to full-width dropdown
- `Footer` (`src/components/layout/Footer.tsx`) — server component; dark (`bg-gray-900`); 4-col grid (sm: 2-col, lg: 4-col): Brand, Subjects, Visualizers, Exams Covered; TOOL_LINKS covers: Practice MCQs, Progress Dashboard, Math Solver, Article Explorer, India Map, Periodic Table
- Home hero 2-col layout uses CSS grid (`lg:grid-cols-[1fr_300px] lg:gap-16`), not flexbox — left col: headline + CTAs; right col: 2×2 stats panel (`grid-cols-2 gap-3 max-w-xs`); do not revert to flex

### Visualizer Store Integration
- All visualizer components consume `useVisualizerStore` directly — not via props
- On mount or when data changes: call `reset()` then `setSteps(steps.length)` inside a `useEffect` with `[steps.length, reset, setSteps]` as deps
- `PolicyFlowDiagram` renders an SVG; animated connectors use `motion.line` + `motion.polygon` arrowheads; connector label text comes from `step.connections[0].label`

### StepController
- `StepController` (`src/components/ui/StepController.tsx`) is the single shared step control for all visualizers — prev/next/play/pause/reset buttons
- Keyboard arrow key support is not yet implemented (onClick only); add it before launch

### MCQCard State Machine
- Option states: `neutral` → `selected` (pre-result) → `correct` / `incorrect` (post-result)
- Framer Motion feedback: correct option plays glow pulse animation; incorrect option plays horizontal shake (`x: [0,-4,4,-4,4,0]`)
- Options are disabled once any option is selected or result is shown

### Dashboard Components
- `StreakCounter` (`src/components/dashboard/StreakCounter.tsx`) — reads `streak` + `lastActivityDate` from `useProgressStore`; renders last 7 days as dots (approximation: all days up to `lastActivityDate` within the window are shown active)
- `RadarChart` (`src/components/dashboard/RadarChart.tsx`) — accepts `scores: Record<string, number>`; `dashboard/page.tsx` derives scores via `computeSubjectAverages(topicScores)` which groups `"subject:topic"` keys by prefix and averages them per subject
- `BadgeGrid` (`src/components/dashboard/BadgeGrid.tsx`) — implemented
- `RevisionPrompts` (`src/components/dashboard/RevisionPrompts.tsx`) — implemented
- `BudgetTreemap` (`src/components/visualizers/economics/BudgetTreemap.tsx`) — implemented; accepts `items: BudgetItem[]` sourced from `@/data/economics/budget-2025`
- `dashboard/page.tsx` — `'use client'`; top-level layout: `max-w-7xl space-y-8 px-4 py-8`; `computeSubjectAverages` is a local non-exported helper — do not import from elsewhere
- `dashboard/layout.tsx` — server component; exports `metadata` only; passes children through unchanged
- `economics/layout.tsx` — wraps with `SubjectLayout`; `subjectName="Indian Economy"` (not "Economics" or the slug); `subjectColor="#14b8a6"`; links to `/economics/flows` and `/economics/budget`
- `economics/page.tsx` — hub page shows both visualizers (flows, budget) with "Coming Soon" badges even though sub-routes are implemented; badge is a UI affordance, not a gate

### Quant Topic Pages
- `/quant/[topic]` — server component; `TOPIC_DATA` record covers all 19 slugs (Phases 1–3 + Miscellaneous fully wired — no stubs); calls `notFound()` for unknown slugs; `generateStaticParams()` uses `Object.keys(TOPIC_DATA)` — add a new slug to `TOPIC_DATA` and it's automatically statically generated; `generateMetadata` produces per-topic SEO title + description
- `quant/layout.tsx` — wraps with `SubjectLayout`; `showHeading=false`; `subjectColor="#3b82f6"`; sidebar links grouped: Arithmetic (5) / Advanced (5) / Higher Maths (4) / Visualizer (geometry) / Phase 4 (5 — surds-indices, partnership, ages, simplification, sequences-series)
- `quant/page.tsx` — hub page; `SECTIONS` array drives layout (Arithmetic / Advanced Arithmetic / Higher Mathematics / Visualizer / Miscellaneous); each `Topic` object has `hasTabs: boolean`; all implemented topic cards link directly with no "Coming Soon"
- `TopicTabs` (`src/components/visualizers/quant/TopicTabs.tsx`) — `'use client'`; props: `{ concept: QuantConcept, tricks: QuantTrick[], problems: MathProblem[] }`; local `useState<'concept'|'tricks'|'problems'>`; Problems tab renders `<StepSolver problems={problems} />`; tab switch uses `motion.div` with `key={activeTab}` fade (`initial={{ opacity:0, y:8 }}`, 0.2s); active tab: `border-subject-quant text-subject-quant border-b-2 -mb-px`
- `ConceptPanel` (`src/components/visualizers/quant/ConceptPanel.tsx`) — server-compatible (no hooks, no Framer Motion); renders: title h2, description, Key Idea callout (`border-l-4 border-subject-quant bg-subject-quant-light`), formulas grid (name + monospace formula + `whenToUse`), exam tags chips (`rounded-full bg-subject-quant-light`), exam relevance prose; reads `concept.examTags[]` string array
- `TricksPanel` (`src/components/visualizers/quant/TricksPanel.tsx`) — filters tricks into `formulaShortcuts` + `mentalMath` arrays; each group rendered in a `<section>` with uppercase tracking-wider label; renders `TrickCard` per trick
- `TrickCard` (`src/components/visualizers/quant/TrickCard.tsx`) — `'use client'`; `whileHover` scale 1.01 (transition 0.15s); type badge: `formula-shortcut`=bg-blue-100/text-blue-700, `mental-math`=bg-amber-100/text-amber-700; optional `formula` in monospace block; example block (problem + solution); optional `timeSaved` chip (bg-green-100/text-green-700)
- Data layout: `src/data/quant/concepts/{topic}.ts`, `src/data/quant/tricks/{topic}.ts`, `src/data/quant/problems/{topic}-problems.ts`; each file has exactly 5 entries

### Testing
- TDD: write failing tests first (Vitest + React Testing Library), then implement; `StepController` tests are the canonical example
<!-- END AUTO-MANAGED -->

<!-- AUTO-MANAGED: git-insights -->
## Phase Plan

**Phase 1 MVP — ships all together:**
- Quant: per-topic Concept + Tricks + Problems pages for 19 topics via `/quant/[topic]` — Phase 1: percentage, profit-loss, ratio, time-speed-distance, time-work; Phase 2: number-system, average, simple-compound-interest, mixture-alligation, mensuration; Phase 3: algebra, trigonometry, data-interpretation, statistics-probability; Miscellaneous (wired): surds-indices, partnership, ages, simplification, sequences-series; geometry visualizer
- Reasoning: seating solver, syllogism Venn builder, series pattern detector
- General Awareness: Polity constitutional explorer (network graph), History zoomable timeline + cause-effect chains, Geography interactive India map (river layer), Economics policy flow diagrams + budget treemap
- Science: periodic table explorer, human body systems
- Gamification: daily streak, topic mastery badges (Bronze/Silver/Gold), progress radar chart, spaced repetition prompts
- Mobile-responsive; no native app

**Explicitly out of Phase 1:** auth, community features, AI, leaderboards, push notifications, story-driven journeys

**Phase 2:** user accounts + auth, mock tests, advanced spaced repetition, more geography map layers (minerals, crops, industrial, tribal), Physics (force diagrams, circuits, optics) + Chemistry (reactions, bonding), English language tools, leaderboards, community

**Phase 3:** cross-subject knowledge graph ("73rd Amendment" links across Polity, Econ, Geo, History), exam intelligence calculator, AI doubt resolution, native app, regional languages, visual current affairs infographics

**Success targets:** 50K MAU in 6 months; 5+ min avg. time on visualizer pages; 100K monthly organic visits in 12 months

**Plan documents:** `docs/plans/` holds approved implementation plan and product roadmap; consult before adding new routes or modules
- `docs/plans/2026-03-01-quant-syllabus.md` — approved quant syllabus; originally 15 topics across 3 phases; implementation has expanded to 19 topics (+ Miscellaneous: surds-indices, partnership, ages, simplification, sequences-series); each topic structured as 5 Concepts + 5 Tricks + 5 Problem Types; exams targeted: SSC CGL/CHSL, IBPS PO/Clerk, SBI PO, RRB NTPC, CDS, UPSC CSAT
- `docs/plans/2026-03-01-quant-complete-design.md` — approved design for the Concept + Tricks + Problems per-topic feature; data model, component specs, routing rationale
- `docs/plans/2026-03-01-quant-complete-implementation.md` — task-by-task implementation guide for the quant complete feature
<!-- END AUTO-MANAGED -->
