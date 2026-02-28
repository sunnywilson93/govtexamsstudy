# govtexamsstudy.org — Product Roadmap Design

**Date:** 2026-03-01
**Status:** Approved

## Vision

India's first interactive visual learning platform for government exam preparation. While every competitor does Video + PDF + Mock Test, we build explorable, step-by-step visualizations that make abstract concepts tangible.

## Differentiation

No Indian platform offers interactive visualizations for exam subjects. Drishti IAS has static PDF infographics. Insights IAS has downloadable mind map images. We build web-native, interactive, animated explorations — the same paradigm as jsinterview.dev (DSA visualizer) applied to government exam content.

## Tech Stack

- Next.js 14+ (App Router) + TypeScript 5.5
- Tailwind CSS v4 + Framer Motion
- Zustand (visualizer state management)
- Structured JSON/TS data files (no CMS initially)
- Content versioned in git

## Business Model

Fully free + ads. All content and visualizations free. Ad placements on practice pages (not on visualizers). Future premium ad-free tier possible.

---

## Platform Modules

| Module | Purpose |
|--------|---------|
| Subject Visualizers | Interactive explorable visualizations per subject |
| Daily Current Affairs | Visual timeline of daily news linked to syllabus |
| Practice Arena | Topic-wise MCQs with visual explanations |
| Streak & Progress | Gamification — streaks, spaced repetition, badges |
| Exam Intelligence | Cutoff trends, exam calendar, exam targeting tool |

## Routing Structure

```
/                              -> Home (exam selector + featured visualizations)
/quant                         -> Quantitative Aptitude hub
/quant/step-solver             -> Step-by-step problem solver
/quant/geometry                -> Interactive geometry visualizer
/reasoning                     -> Reasoning & Logic hub
/reasoning/seating             -> Seating arrangement solver
/reasoning/syllogism           -> Venn diagram builder
/reasoning/series              -> Pattern detection visualizer
/polity                        -> Polity hub
/polity/articles               -> Interactive Article explorer
/polity/amendments             -> Amendment timeline
/polity/landmark-cases         -> SC Judgments linked to Articles
/history                       -> History hub
/history/timeline              -> Interactive zoomable timeline
/history/freedom-movement      -> Cause-effect chains
/geography                     -> Geography hub
/geography/map                 -> Interactive India map with layers
/economics                     -> Economics hub
/economics/flows               -> Policy flow diagrams
/economics/budget              -> Budget visualizer
/science                       -> General Science hub
/science/periodic-table        -> Interactive periodic table
/science/human-body            -> Body systems explorer
/current-affairs               -> Daily visual current affairs
/practice                      -> Practice arena
/practice/[subject]/[topic]    -> Topic-wise MCQs
/dashboard                     -> Progress, streaks, weak areas
/exams                         -> Exam intelligence hub
/exams/[examId]                -> Cutoff trends, syllabus, calendar
```

---

## Phase 1: MVP — Subject Visualizers

All 4 subject areas ship together with 2-3 core visualizations each.

### 1. Quantitative Aptitude Visualizer

**Step-by-step problem solver:**
- User selects a topic (Percentage, Ratio, Profit-Loss, TSD, etc.)
- Picks a problem from curated set
- Visualizer shows each solving step animated — like DSA code execution but for math
- Variables panel shows changing values at each step
- Multiple approaches shown side-by-side for the same problem

**Geometry visualizer:**
- Interactive shapes (triangles, circles, quadrilaterals)
- Click to see area/perimeter formulas applied with animation
- Angle relationships, similarity/congruence proofs step-by-step

### 2. Reasoning & Logic Visualizer

**Seating arrangement solver:**
- Reads clues one by one
- Animates person placement in circular/linear/rectangular arrangement
- Shows deduction logic at each step
- User can try solving, then see the step-by-step solution

**Syllogism Venn diagram builder:**
- Input statements ("All A are B", "Some B are C")
- Animated Venn diagram construction
- Conclusion validation with visual proof

**Series pattern detector:**
- Number/letter series displayed
- Pattern detection highlighted with color coding
- Step-by-step explanation of the rule

### 3. General Awareness Suite

**Polity — Constitutional Explorer:**

Data model:
- Article { id, number, part, title, description, amendments[], cases[], linkedArticles[] }
- Amendment { id, number, year, description, articlesAffected[], significance }
- LandmarkCase { id, name, year, summary, articlesInterpreted[], impact }

Visualizations:
- Network graph of Articles <-> Amendments <-> Cases (click to expand nodes)
- Part-wise navigator with expandable hierarchy
- Amendment timeline (horizontal scrollable)

**History — Interactive Timeline:**

Data model:
- Event { id, year, title, description, causes[], effects[], relatedEvents[], category }
- Period { id, name, startYear, endYear, events[] }
- CauseEffectChain { id, events[], description }

Visualizations:
- Zoomable horizontal timeline (Ancient India -> Present)
- Cause-effect chains (click event -> see animated downstream impact)

**Geography — Interactive India Map:**

Data model:
- Layer { id, name, type, features[] }
- Feature { id, name, geometry, properties, linkedTopics[] }

Visualizations:
- India map with toggleable layers (Phase 1: rivers)
- Click feature -> sidebar with exam-relevant details

**Economics — Policy Flow Diagrams:**

Data model:
- Concept { id, name, description, category, connections[] }
- Flow { id, name, steps[], description }

Visualizations:
- Animated step-by-step policy flows (repo rate -> lending -> inflation -> GDP)
- Budget breakdown interactive treemap

### 4. General Science Visualizer

**Periodic Table Explorer:**
- Interactive periodic table with category color coding
- Click element -> properties, uses, exam-relevant facts
- Filter by property (metals, non-metals, noble gases, etc.)

**Human Body Systems:**
- Interactive body diagram
- Click system (digestive, circulatory, nervous, etc.) -> animated walkthrough
- Disease linkages per system

---

## Phase 1: Gamification (Lightweight)

| Feature | Description |
|---------|-------------|
| Daily streak | Complete 1 activity/day. Visual flame counter. |
| Topic mastery badges | Bronze -> Silver -> Gold per topic based on accuracy. |
| Progress dashboard | Radar chart of strengths/weaknesses. |
| Spaced repetition | "Revise this" prompts for fading topics. |

---

## Phase 1: Additional Features

- Home page with exam selector + featured visualizations
- Daily current affairs page (text-based initially)
- Basic practice MCQs per topic with visual explanations
- Mobile-responsive design (no native app)
- Cookie-based progress tracking (no auth)

---

## What's NOT in Phase 1

- Native mobile app
- User accounts / authentication
- Community features
- AI-powered features
- Advanced analytics
- Push notifications
- Leaderboards
- Story-driven learning journeys

---

## Phase 2 (Post-Launch)

- User accounts + auth (progress sync across devices)
- Mock tests with visual explanations
- Advanced spaced repetition algorithm
- More geography map layers (minerals, crops, industrial, tribal)
- General Science: Physics (force diagrams, circuits, optics), Chemistry (reactions, bonding)
- English language tools
- Leaderboards + achievements
- Community features

## Phase 3 (Growth)

- Cross-subject knowledge graph ("73rd Amendment" links across Polity, Econ, Geo, History)
- Exam intelligence (cutoff trends, "which exams to target" calculator)
- AI-powered doubt resolution
- Native mobile app
- Regional language support
- Current affairs with visual infographics

---

## Success Metrics

- Monthly Active Users (target: 50K in 6 months)
- Avg. time on visualizer pages (target: 5+ minutes)
- Daily active streak users
- Practice completion rate per topic
- SEO organic traffic growth (target: 100K monthly visits in 12 months)

## Competitive Moat

1. Interactive visualizations are hard to replicate (content + engineering)
2. Fully free removes pricing as a barrier
3. SEO advantage: visual content earns backlinks and dwell time
4. Once users build streaks and progress, switching cost increases
