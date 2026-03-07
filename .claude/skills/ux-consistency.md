---
name: ux-consistency
description: UX consistency rules for govtexamsstudy. Use when creating, modifying, or reviewing any subject topic page, hub page, layout, or visualizer component. Ensures all subjects follow the same patterns.
---

# UX Consistency Rules

These rules define the canonical UX patterns for govtexamsstudy. **Reasoning is the gold standard** — all subjects must align to its patterns.

## 1. Data Counts (Per Tabs Topic)

| Data Type   | Count | File Location                                    |
|-------------|-------|--------------------------------------------------|
| Concepts    | 1 file (3+ rules/formulas) | `src/data/{subject}/concepts/{topic}.ts` |
| Tricks      | 5     | `src/data/{subject}/tricks/{topic}.ts`            |
| Problems    | 30    | `src/data/{subject}/problems/{topic}-problems.ts` |

- Problems must be sourced from real PYQs (SSC CGL, IBPS PO, SBI PO, RRB NTPC, UPSC CSAT, 2018-2024)
- Problem titles must include exam name and year: `"SSC CGL 2023: Problem Title"`
- Difficulty distribution: 10 easy, 10 medium, 10 hard
- Visualizer-only topics have 5 problems each (in `src/data/{subject}/visualizer/`)

## 2. Hub Page (`/{subject}/page.tsx`)

```
Structure:
  H1 (subject color inline style)
  P (intro text)
  SECTIONS.map => section
    H2 heading + P subheading
    grid gap-3 sm:grid-cols-2
      Link cards (rounded-lg border bg-bg-elevated p-4)
        H3 title
        P description
        Badge (if hasTabs): "5 concepts . 5 tricks . 30 problems"
```

Rules:
- Badge text is always `"5 concepts . 5 tricks . 30 problems"` for `hasTabs: true` topics
- `hasTabs: false` for standalone visualizer topics (no badge)
- SECTIONS array mirrors the sidebar group order in layout.tsx
- Topic interface: `{ href, title, description, hasTabs: boolean }`

## 3. Layout (`/{subject}/layout.tsx`)

```tsx
<SubjectLayout
  subjectName="..."
  subjectColor="..."    // subject hex from design tokens
  subjectSlug="..."
  showHeading={false}   // always false — topic pages render their own H1
  links={[...]}         // grouped sidebar nav
>
```

Rules:
- Every link has a `group` string — no ungrouped links
- Group names must match SECTIONS headings in the hub page
- Links sorted by group, matching the hub page section order

## 4. Topic Page (`/{subject}/[topic]/page.tsx`)

### Tabs Topics (kind: 'tabs')

```
Structure:
  H1 (text-2xl font-bold text-text-primary)
  TopicTabs (concept, tricks, problems)
```

### Visualizer Topics (kind: 'visualizer')

```
Structure:
  H1 (text-2xl font-bold text-text-primary)
  VisualizerComponent (problem={problems[0]})
```

Rules:
- Uses discriminated union: `TabsTopicData { kind: 'tabs' }` | `VisualizerTopicData { kind: 'visualizer' }`
- `generateStaticParams()` = `Object.keys(TOPIC_DATA)`
- `generateMetadata()` produces per-topic SEO title + description
- Title format: `"{Label} -- Concepts, Tricks & Problems | GovtExams"`

## 5. TopicTabs Component

```
Tabs: Concept | Tricks | Problems
Default: 'concept'
Active tab: border-b-2 in subject color, text in subject color
Inactive: border-transparent text-text-muted hover:text-text-secondary
Tab switch: motion.div fade (opacity 0->1, y 8->0, 0.2s)
```

Rules:
- Subject color via CSS token: `border-subject-{slug} text-subject-{slug}`
- Tab IDs: `'concept' | 'tricks' | 'problems'`
- 3 tabs only — no extra tabs

## 6. StepSolver (Problems Tab)

```
Structure:
  Problem selector dropdown (single <select>, no topic filter)
  Problem card (title + question)
  Step display card:
    operation (xs uppercase tracking-wider text-text-muted)
    expression (mono text-base text-subject-{slug})
    result (text-sm font-medium text-text-primary, prefixed with ->)
  StepController
  Explanation (AnimatePresence fade, centered text-sm)
  Answer reveal card (shown only at final step):
    Subject-colored border + light bg
    "Answer" label (xs uppercase)
    Answer text
```

Rules:
- **Single column layout** — no ExpressionDisplay/VariablesPanel split
- **No topic filter dropdown** — all problems passed are same topic already
- **Answer reveal** at final step — colored card with subject border + light bg
- StepController from `@/components/ui/StepController`
- Uses `useVisualizerStore` for step state

## 7. ConceptPanel

```
Structure:
  Title (H2 xl bold)
  Description (text-secondary leading-relaxed)
  Key Idea callout:
    border-l-4 in subject color
    bg in subject light color
    label "Key Idea" (xs uppercase)
    text (sm medium in subject dark)
  Formulas/Rules section:
    label "Core Formulas" (quant) or "Core Rules" (reasoning)
    Cards: name + formula/rule (mono, subject color) + whenToUse (xs muted)
  Relevant Exams:
    bg-bg-secondary rounded-lg
    exam tag chips (rounded-full, subject light bg, subject dark text)
    examRelevance prose
```

## 8. TricksPanel

```
Structure:
  Two grouped sections based on trick type:
    Quant: "Formula Shortcuts" + "Mental Math"
    Reasoning: "Pattern Shortcuts" + "Elimination Tricks"
  Each group:
    H3 label (sm uppercase tracking-wider text-muted)
    TrickCard list
```

## 9. TrickCard

```
Structure:
  motion.div whileHover scale 1.01
  Type badge:
    formula-shortcut / pattern-shortcut: blue bg/text
    mental-math / elimination: amber bg/text
  Title + description
  Optional formula block (mono)
  Example block (problem + solution)
  Optional timeSaved chip (green bg/text)
```

## 10. Color Token Usage

Never hardcode hex colors in components. Use semantic CSS tokens:

| Token Pattern | Usage |
|---|---|
| `text-subject-{slug}` | Active tab text, formula/rule text, expression text |
| `border-subject-{slug}` | Active tab border, Key Idea callout border, answer card border |
| `bg-subject-{slug}-light` | Key Idea callout bg, exam tag chip bg, answer card bg |
| `text-subject-{slug}-dark` | Key Idea text, exam tag text, answer label text |

Exception: Hub page H1 uses inline `style={{ color: '{hex}' }}` since it's a one-off.

## 11. Sitemap

All topic slugs must be in `src/app/sitemap.ts` in the subject's TOPICS array.

## 12. Component Naming Convention

| Subject | Component Prefix | Directory |
|---|---|---|
| quant | (none) | `src/components/visualizers/quant/` |
| reasoning | `Reasoning` | `src/components/visualizers/reasoning/` |

Future subjects should follow: `{Subject}ConceptPanel`, `{Subject}TricksPanel`, etc.

## Checklist for New Subject Topics

- [ ] Data: concept file (3+ formulas/rules)
- [ ] Data: tricks file (exactly 5)
- [ ] Data: problems file (exactly 30, PYQ-sourced, 10/10/10 difficulty split)
- [ ] Hub page: topic entry in SECTIONS with `hasTabs: true`, badge text "5 concepts . 5 tricks . 30 problems"
- [ ] Layout: sidebar link with correct `group`
- [ ] Topic page: entry in TOPIC_DATA with `kind: 'tabs'`
- [ ] Sitemap: slug added to subject TOPICS array
- [ ] Test: data validation test covers new topic (concept topic match, 5 tricks, 30 problems)

## Checklist for New Visualizer Topics

- [ ] Data: visualizer data file (exactly 5 problems)
- [ ] Component: bespoke visualizer consuming `useVisualizerStore` + `StepController`
- [ ] Hub page: topic entry in SECTIONS with `hasTabs: false` (no badge)
- [ ] Layout: sidebar link with correct `group`
- [ ] Topic page: entry in TOPIC_DATA with `kind: 'visualizer'`, type string, component import + render branch
- [ ] Sitemap: slug added to subject TOPICS array
- [ ] Test: data validation test covers new visualizer (5 problems)

## Anti-Patterns (DO NOT)

- Do not use 2-column ExpressionDisplay + VariablesPanel layout in StepSolver
- Do not add topic filter dropdown in StepSolver (problems are pre-filtered)
- Do not show fewer than 30 problems per tabs topic
- Do not use different badge text across subjects
- Do not hardcode subject colors in components — use CSS tokens
- Do not omit the answer reveal card at the final step
- Do not add extra tabs beyond Concept / Tricks / Problems
- Do not use `showHeading={true}` in subject layouts (pages render own H1)
