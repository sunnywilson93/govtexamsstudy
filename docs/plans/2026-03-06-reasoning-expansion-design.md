# Reasoning Expansion Design — 27 Topics + Depth

**Date:** 2026-03-06
**Status:** Approved

## Context

The reasoning section currently has 14 topics (7 visualizers + 7 tabs topics). Each tabs topic has 1 concept + 5 tricks + 5 problems. Government exam syllabi (SSC CGL, IBPS PO, RRB NTPC, UPSC CSAT) cover significantly more reasoning topics, and existing topics need deeper practice content.

## Goals

1. Add 13 new reasoning topics covering Verbal, Logical, and Non-Verbal reasoning gaps
2. Deepen existing 7 tabs topics from 5 to 15 problems each (tricks stay at 5)
3. Top up standalone visualizer problems (seating 2->5, syllogism 3->5)
4. Add a 4th hub section: Non-Verbal Reasoning

## Topic Inventory (27 total)

### Existing Topics (14) — Deepened

| # | Topic | Type | Change |
|---|-------|------|--------|
| 1-3 | seating, syllogism, series | Standalone visualizer | Top up problems to 5 each |
| 4-7 | blood-relations, direction-distance, coding-decoding, puzzles | Bespoke visualizer | No change (already 5+) |
| 8-14 | inequalities, analogies, classification, alphabet-tests, input-output, statement-conclusions, cause-effect | Tabs | 5->15 problems per topic |

### New Tabs Topics (8)

| # | Slug | Hub Section | Content |
|---|------|-------------|---------|
| 15 | order-ranking | Verbal | 1 concept + 5 tricks + 15 problems |
| 16 | data-sufficiency | Logical | 1 concept + 5 tricks + 15 problems |
| 17 | calendar-reasoning | Logical | 1 concept + 5 tricks + 15 problems |
| 18 | logical-venn-diagrams | Logical | 1 concept + 5 tricks + 15 problems |
| 19 | linear-arrangements | Logical | 1 concept + 5 tricks + 15 problems |
| 20 | critical-reasoning | Logical | 1 concept + 5 tricks + 15 problems |
| 21 | figure-series | Non-Verbal | 1 concept + 5 tricks + 15 problems |
| 22 | embedded-figures | Non-Verbal | 1 concept + 5 tricks + 15 problems |

### New Bespoke Visualizers (5)

| # | Slug | Hub Section | Visualization | Problems |
|---|------|-------------|---------------|----------|
| 23 | mirror-water-images | Non-Verbal | Side-by-side grids with flip/reflect animation | 5 |
| 24 | cubes-dice | Non-Verbal | 2D cube net with isometric fold animation | 5 |
| 25 | paper-folding | Non-Verbal | Step-by-step fold + punch + unfold reveal | 5 |
| 26 | clock-reasoning | Logical | Animated clock face with angle overlay | 5 |
| 27 | counting-figures | Non-Verbal | SVG figure with highlighted sub-shapes + running count | 5 |

## Data Models

### Existing Types (reused for new tabs topics)

- `ReasoningConcept` — 1 per topic
- `ReasoningTrick[]` — 5 per topic
- `ReasoningProblem[]` — 15 per topic (expanded from 5)

### New Types (added to `src/types/reasoning.ts`)

```ts
// Mirror & Water Images
interface MirrorImageProblem {
  id: string
  type: "mirror" | "water"
  question: string
  originalGrid: string[][]
  transformedGrid: string[][]
  steps: string[]
  answer: string
}

// Cubes & Dice
interface CubeFace {
  position: number
  content: string
  color: string
}

interface CubeDiceProblem {
  id: string
  type: "cube-fold" | "dice-opposite" | "dice-adjacent"
  question: string
  faces: CubeFace[]
  steps: string[]
  answer: string
}

// Paper Folding & Cutting
interface FoldStep {
  direction: "left" | "right" | "top" | "bottom" | "diagonal"
  description: string
}

interface PaperFoldProblem {
  id: string
  question: string
  folds: FoldStep[]
  punchPosition: { x: number; y: number }
  unfoldedResult: string
  steps: string[]
  answer: string
}

// Clock Reasoning
interface ClockProblem {
  id: string
  type: "angle" | "time-gain-loss" | "mirror"
  question: string
  hourAngle: number
  minuteAngle: number
  steps: string[]
  answer: string
}

// Counting Figures
interface FigureHighlight {
  id: string
  path: string
  label: string
}

interface CountingFigureProblem {
  id: string
  type: "triangles" | "squares" | "lines" | "mixed"
  question: string
  svgPath: string
  highlights: FigureHighlight[]
  steps: string[]
  answer: string
  totalCount: number
}
```

## Component Designs

All 5 new visualizers follow established patterns: SVG-native, driven by `useVisualizerStore`, `StepController` for navigation, `motion.*` from Framer Motion for step animations.

### MirrorWaterImageVisualizer

- Side-by-side SVG grids: original (left) + transformation (right)
- Steps: (1) show original, (2) draw mirror/water axis line, (3) animate flip transformation cell by cell, (4) reveal answer grid
- Mirror = horizontal flip, Water = vertical flip — axis line animates in with `motion.line`

### CubeDiceVisualizer

- 2D cross-shaped cube net SVG (6 faces laid out flat)
- Steps: (1) show net with face labels, (2) highlight fold edges, (3) animate faces "folding" (opacity + position shift to show 3D perspective), (4) highlight answer faces (opposite/adjacent)
- No actual 3D — uses isometric 2D projection (3 visible faces of cube drawn as parallelograms)

### PaperFoldVisualizer

- Square SVG representing paper sheet
- Steps: (1) show flat paper, (2) animate fold (half the paper slides over with `motion.rect` + opacity), (3) show punch mark, (4) reverse-animate unfold, (5) reveal all punch holes on unfolded paper
- Each `FoldStep` halves the visible area in the fold direction

### ClockReasoningVisualizer

- SVG clock face with hour markers (1-12), hour hand, minute hand
- Steps: (1) show clock, (2) position hands at given time, (3) draw angle arc between hands, (4) show calculation (30h - 5.5m formula), (5) highlight answer
- Hands animate via `motion.line` with `rotate` transform from center

### CountingFigureVisualizer

- Complex SVG figure (triangle grid, overlapping squares, etc.) defined by `svgPath`
- Steps: each step highlights one sub-figure via `FigureHighlight` — fills with translucent color + shows label ("Triangle 1", "Triangle 2"...)
- Running count displayed in corner badge
- Final step shows total count with all highlights visible

## Routing & Layout

### Hub Page (4 sections)

```
Interactive Visualizers (12, hasTabs: false)
  existing: seating, blood-relations, direction-distance, coding-decoding,
            puzzles, syllogism, series
  new:      mirror-water-images, cubes-dice, paper-folding,
            clock-reasoning, counting-figures

Verbal Reasoning (6, hasTabs: true)
  existing: inequalities, analogies, classification, alphabet-tests, input-output
  new:      order-ranking

Logical Reasoning (7, hasTabs: true)
  existing: statement-conclusions, cause-effect
  new:      data-sufficiency, calendar-reasoning, logical-venn-diagrams,
            linear-arrangements, critical-reasoning

Non-Verbal Reasoning (2, hasTabs: true)
  new:      figure-series, embedded-figures
```

### Sidebar Groups (4 groups, 27 links)

| Group | Count | Topics |
|-------|-------|--------|
| Visualizers | 12 | seating, blood-relations, direction-distance, coding-decoding, puzzles, syllogism, series, mirror-water-images, cubes-dice, paper-folding, clock-reasoning, counting-figures |
| Verbal | 6 | inequalities, analogies, classification, alphabet-tests, input-output, order-ranking |
| Logical | 7 | statement-conclusions, cause-effect, data-sufficiency, calendar-reasoning, logical-venn-diagrams, linear-arrangements, critical-reasoning |
| Non-Verbal | 2 | figure-series, embedded-figures |

### Dynamic Route Changes

- New tabs topics (8) added to `TOPIC_DATA` in `reasoning/[topic]/page.tsx` as `kind: 'tabs'`
- New visualizer topics (5) added to `TOPIC_DATA` as `kind: 'visualizer'`
- `generateStaticParams()` automatically picks up new slugs via `Object.keys(TOPIC_DATA)`
- Sitemap updated with 13 new `/reasoning/{slug}` entries

## Testing

### New Component Tests (5 files)

- `MirrorWaterImageVisualizer.test.tsx` — grid render, flip animation per step, StepController integration
- `CubeDiceVisualizer.test.tsx` — net render, face labels, fold step progression
- `PaperFoldVisualizer.test.tsx` — paper render, fold animation, punch hole reveal
- `ClockReasoningVisualizer.test.tsx` — clock face render, hand positioning, angle display
- `CountingFigureVisualizer.test.tsx` — figure render, highlight per step, running count

### Data Validation Tests

- Assert all 8 new tabs topics have 1 concept + 5 tricks + 15 problems
- Assert all 5 new visualizer topics have 5 problems each
- Assert existing 7 tabs topics expanded to 15 problems each

### Existing Tests

Untouched — use mock data, don't depend on problem count.

## File Count

| Category | Files |
|----------|-------|
| New types (in existing reasoning.ts) | +5 interfaces |
| New concept data files | 8 |
| New tricks data files | 8 |
| New problems data files (tabs + visualizer) | 13 |
| Expanded problem files (existing) | 9 |
| New visualizer components | 5 |
| New test files (component + data) | 6 |
| Modified routing files | 3 |
| Modified sitemap | 1 |
| **Total new files** | ~45 |
| **Total modified files** | ~13 |
