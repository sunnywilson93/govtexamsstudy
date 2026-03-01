# govtexamsstudy.org Phase 1 MVP — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build India's first interactive visual learning platform for government exam preparation with step-by-step animated visualizers for Quant, Reasoning, GK (Polity/History/Geography/Economics), and Science.

**Architecture:** Next.js App Router with TypeScript. Each subject has a hub page + nested visualizer routes. Visualizers consume typed data files and render step-by-step animations using Framer Motion. State managed by Zustand. Cookie-based progress tracking. No auth, no CMS.

**Tech Stack:** Next.js 14.2+, TypeScript 5.5, Tailwind CSS v4, Framer Motion 11, Zustand 4.5, Vitest + React Testing Library, Playwright E2E, Lucide React icons.

**Reference:** This project mirrors the architecture of `dsa-visualiser-3` (jsinterview.dev). When in doubt, check that codebase at `/Users/sunnywilson/Documents/projects/dsa-visualiser-3/` for patterns.

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- Create: `vitest.config.ts`, `.eslintrc.json`, `.gitignore`

**Step 1: Initialize Next.js project**

```bash
cd /Users/sunnywilson/Documents/projects/govtexamsstudy
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

If prompted about existing files, allow overwrite. This creates the base Next.js project.

**Step 2: Install dependencies**

```bash
npm install framer-motion@^11.0.0 zustand@^4.5.2 immer@^10.0.4 lucide-react@^0.400.0 clsx@^2.1.1
```

**Step 3: Install dev dependencies**

```bash
npm install -D vitest@^4.0.16 @vitejs/plugin-react@^4.3.1 @testing-library/react@^16.3.1 @testing-library/jest-dom@^6.9.1 @testing-library/user-event@^14.6.1 @vitest/coverage-v8@^4.0.16 jsdom@^27.4.0 @playwright/test@^1.58.0 husky@^9.1.7
```

**Step 4: Upgrade to Tailwind v4**

Replace the Tailwind config with the v4 CSS-first approach:
- Remove `tailwind.config.ts` if generated
- Create `postcss.config.mjs`:
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```
- Install: `npm install -D @tailwindcss/postcss@^4.1.18 tailwindcss@^4.1.18 postcss@^8.5.6`
- Update `src/app/globals.css` to use `@import "tailwindcss"` and a `@theme` block with design tokens

**Step 5: Create vitest.config.ts**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Create `src/test-setup.ts`:
```ts
import "@testing-library/jest-dom/vitest";
```

**Step 6: Add scripts to package.json**

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "vitest",
  "test:run": "vitest run",
  "test:coverage": "vitest run --coverage"
}
```

**Step 7: Create project directory structure**

```bash
mkdir -p src/{components,data,types,store,lib,hooks,constants}
mkdir -p src/components/{layout,ui,visualizers,shared}
mkdir -p src/data/{quant,reasoning,polity,history,geography,economics,science,practice}
```

**Step 8: Verify dev server starts**

```bash
npm run dev
```

Visit http://localhost:3000 — should see default Next.js page.

**Step 9: Run tests to verify setup**

Create a smoke test at `src/lib/__tests__/setup.test.ts`:
```ts
import { describe, it, expect } from "vitest";

describe("test setup", () => {
  it("works", () => {
    expect(1 + 1).toBe(2);
  });
});
```

Run: `npm test -- --run`
Expected: PASS

**Step 10: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind v4, Vitest, and dependencies"
```

---

## Task 2: Design System + Shared UI Components

**Files:**
- Create: `src/app/globals.css` (update with theme tokens)
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/SubjectLayout.tsx`
- Create: `src/components/ui/SubjectCard.tsx`
- Create: `src/components/ui/StepController.tsx`
- Create: `src/components/ui/Badge.tsx`
- Test: `src/components/ui/__tests__/StepController.test.tsx`

**Step 1: Define design tokens in globals.css**

Update `src/app/globals.css` with `@theme` block:
- Colors: primary (indigo-600), secondary (amber-500), subject colors (quant=blue, reasoning=purple, polity=red, history=amber, geography=green, economics=teal, science=cyan)
- Typography: Inter for body, JetBrains Mono for code/numbers
- Spacing, border-radius, shadows

**Step 2: Write failing test for StepController**

`src/components/ui/__tests__/StepController.test.tsx`:
```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { StepController } from "../StepController";

describe("StepController", () => {
  it("renders current step and total", () => {
    render(<StepController currentStep={2} totalSteps={5} onStepChange={() => {}} />);
    expect(screen.getByText("Step 2 of 5")).toBeInTheDocument();
  });

  it("calls onStepChange with next step", async () => {
    const onStepChange = vi.fn();
    render(<StepController currentStep={2} totalSteps={5} onStepChange={onStepChange} />);
    await userEvent.click(screen.getByLabelText("Next step"));
    expect(onStepChange).toHaveBeenCalledWith(3);
  });

  it("disables previous on first step", () => {
    render(<StepController currentStep={0} totalSteps={5} onStepChange={() => {}} />);
    expect(screen.getByLabelText("Previous step")).toBeDisabled();
  });

  it("disables next on last step", () => {
    render(<StepController currentStep={4} totalSteps={5} onStepChange={() => {}} />);
    expect(screen.getByLabelText("Next step")).toBeDisabled();
  });
});
```

Run: `npm test -- --run`
Expected: FAIL (component doesn't exist)

**Step 3: Implement StepController**

`src/components/ui/StepController.tsx` — a shared component for all step-based visualizers:
- Previous / Next / Play / Pause / Reset buttons
- Step counter ("Step 2 of 5")
- Keyboard support (arrow keys)
- Uses Lucide icons (ChevronLeft, ChevronRight, Play, Pause, RotateCcw)

**Step 4: Run tests**

Run: `npm test -- --run`
Expected: PASS

**Step 5: Build Header component**

`src/components/layout/Header.tsx`:
- Logo (govtexamsstudy.org)
- Navigation links: Quant, Reasoning, Polity, History, Geography, Economics, Science
- Mobile hamburger menu
- Uses subject colors for each nav item

**Step 6: Build Footer component**

`src/components/layout/Footer.tsx`:
- Copyright, social links, "Free for all aspirants"
- Exam quick links

**Step 7: Build SubjectLayout component**

`src/components/layout/SubjectLayout.tsx`:
- Wraps all subject pages
- Props: `subjectName`, `subjectColor`, `children`
- Sidebar with sub-navigation (hub's visualizer links)
- Breadcrumb

**Step 8: Build SubjectCard component**

`src/components/ui/SubjectCard.tsx`:
- Card component used on hub pages and home page
- Props: `title`, `description`, `icon`, `href`, `color`
- Hover animation with Framer Motion

**Step 9: Build Badge component**

`src/components/ui/Badge.tsx`:
- Props: `level` (bronze | silver | gold), `topic`, `size`
- Visual badge with tier colors

**Step 10: Update root layout**

Update `src/app/layout.tsx`:
- Add Header and Footer
- Set metadata (title, description, OG tags)
- Import fonts (Inter, JetBrains Mono)

**Step 11: Commit**

```bash
git add src/components/ src/app/globals.css src/app/layout.tsx
git commit -m "feat: add design system tokens and shared UI components"
```

---

## Task 3: Type Definitions + Data Layer

**Files:**
- Create: `src/types/quant.ts`
- Create: `src/types/reasoning.ts`
- Create: `src/types/polity.ts`
- Create: `src/types/history.ts`
- Create: `src/types/geography.ts`
- Create: `src/types/economics.ts`
- Create: `src/types/science.ts`
- Create: `src/types/practice.ts`
- Create: `src/types/shared.ts`
- Test: `src/types/__tests__/type-guards.test.ts`

**Step 1: Define shared types**

`src/types/shared.ts`:
```ts
export interface Step {
  id: number;
  title: string;
  description: string;
  highlights: Record<string, string>;
}

export interface Visualizer {
  id: string;
  title: string;
  description: string;
  subject: Subject;
  steps: Step[];
}

export type Subject = "quant" | "reasoning" | "polity" | "history" | "geography" | "economics" | "science";

export type BadgeLevel = "none" | "bronze" | "silver" | "gold";

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
  subject: Subject;
}
```

**Step 2: Define Quant types**

`src/types/quant.ts`:
```ts
export interface MathProblem {
  id: string;
  topic: QuantTopic;
  title: string;
  question: string;
  steps: MathStep[];
  answer: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface MathStep {
  id: number;
  operation: string;
  expression: string;
  result: string;
  explanation: string;
  variables: Record<string, number | string>;
}

export type QuantTopic = "percentage" | "ratio" | "profit-loss" | "time-speed-distance" | "time-work" | "algebra" | "geometry" | "number-system";

export interface GeometryShape {
  id: string;
  type: "triangle" | "circle" | "rectangle" | "square" | "parallelogram";
  properties: Record<string, number>;
  formulas: GeometryFormula[];
}

export interface GeometryFormula {
  name: string;
  formula: string;
  steps: MathStep[];
}
```

**Step 3: Define Reasoning types**

`src/types/reasoning.ts`:
```ts
export interface SeatingProblem {
  id: string;
  type: "circular" | "linear" | "rectangular";
  clues: SeatingClue[];
  people: string[];
  steps: SeatingStep[];
  solution: Record<string, number>;
}

export interface SeatingClue {
  id: number;
  text: string;
  type: "position" | "neighbor" | "direction" | "not-neighbor";
}

export interface SeatingStep {
  id: number;
  clueApplied: number;
  description: string;
  arrangement: (string | null)[];
  deduction: string;
}

export interface SyllogismProblem {
  id: string;
  statements: SyllogismStatement[];
  conclusions: SyllogismConclusion[];
  steps: VennStep[];
}

export interface SyllogismStatement {
  type: "all" | "some" | "no" | "some-not";
  subject: string;
  predicate: string;
}

export interface SyllogismConclusion {
  statement: SyllogismStatement;
  isValid: boolean;
}

export interface VennStep {
  id: number;
  description: string;
  circles: VennCircle[];
  regions: VennRegion[];
}

export interface VennCircle {
  label: string;
  x: number;
  y: number;
  r: number;
}

export interface VennRegion {
  type: "filled" | "shaded" | "empty";
  description: string;
}

export interface SeriesProblem {
  id: string;
  type: "number" | "letter" | "alphanumeric";
  series: (number | string)[];
  missingIndex: number;
  answer: number | string;
  steps: SeriesStep[];
}

export interface SeriesStep {
  id: number;
  description: string;
  pattern: string;
  highlights: number[];
}
```

**Step 4: Define Polity types**

`src/types/polity.ts`:
```ts
export interface Article {
  id: string;
  number: string;
  part: number;
  partName: string;
  title: string;
  description: string;
  amendments: string[];
  cases: string[];
  linkedArticles: string[];
  isFR: boolean;
  isDPSP: boolean;
}

export interface Amendment {
  id: string;
  number: number;
  year: number;
  description: string;
  articlesAffected: string[];
  significance: string;
  category: "major" | "minor" | "landmark";
}

export interface LandmarkCase {
  id: string;
  name: string;
  year: number;
  summary: string;
  articlesInterpreted: string[];
  impact: string;
  verdict: string;
}

export interface ConstitutionalPart {
  number: number;
  name: string;
  articleRange: string;
  articles: string[];
}
```

**Step 5: Define History types**

`src/types/history.ts`:
```ts
export interface HistoricalEvent {
  id: string;
  year: number;
  endYear?: number;
  title: string;
  description: string;
  causes: string[];
  effects: string[];
  relatedEvents: string[];
  persons: string[];
  category: HistoryCategory;
  subcategory: string;
}

export type HistoryCategory = "ancient" | "medieval" | "modern" | "post-independence" | "world";

export interface Period {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  events: string[];
  significance: string;
}

export interface CauseEffectChain {
  id: string;
  title: string;
  events: string[];
  description: string;
}

export interface HistoricalPerson {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  role: string;
  events: string[];
  significance: string;
}
```

**Step 6: Define Geography types**

`src/types/geography.ts`:
```ts
export interface MapLayer {
  id: string;
  name: string;
  type: LayerType;
  features: GeoFeature[];
  visible: boolean;
}

export type LayerType = "rivers" | "mountains" | "minerals" | "crops" | "industrial" | "tribal" | "climate" | "soils";

export interface GeoFeature {
  id: string;
  name: string;
  path: string;
  properties: Record<string, string | number>;
  linkedTopics: string[];
  examFacts: string[];
}

export interface IndiaState {
  id: string;
  name: string;
  capital: string;
  path: string;
  area: number;
  population: number;
  features: string[];
}
```

**Step 7: Define Economics types**

`src/types/economics.ts`:
```ts
export interface EconomicConcept {
  id: string;
  name: string;
  description: string;
  category: EconomicsCategory;
  connections: ConceptConnection[];
}

export type EconomicsCategory = "monetary" | "fiscal" | "trade" | "banking" | "planning" | "growth";

export interface ConceptConnection {
  targetId: string;
  relationship: string;
  effect: "positive" | "negative" | "neutral";
}

export interface PolicyFlow {
  id: string;
  name: string;
  description: string;
  steps: FlowStep[];
  category: EconomicsCategory;
}

export interface FlowStep {
  id: number;
  title: string;
  description: string;
  value?: string;
  connections: { targetStepId: number; label: string }[];
}

export interface BudgetItem {
  id: string;
  name: string;
  category: "revenue" | "expenditure";
  subcategory: string;
  amount: number;
  percentage: number;
  year: string;
  children?: BudgetItem[];
}
```

**Step 8: Define Science types**

`src/types/science.ts`:
```ts
export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: ElementCategory;
  group: number;
  period: number;
  electronConfig: string;
  examFacts: string[];
  uses: string[];
}

export type ElementCategory =
  | "alkali-metal"
  | "alkaline-earth"
  | "transition-metal"
  | "post-transition-metal"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide";

export interface BodySystem {
  id: string;
  name: string;
  description: string;
  organs: Organ[];
  diseases: Disease[];
  examFacts: string[];
}

export interface Organ {
  id: string;
  name: string;
  function: string;
  position: { x: number; y: number };
}

export interface Disease {
  id: string;
  name: string;
  system: string;
  cause: string;
  symptoms: string[];
  examRelevance: string;
}
```

**Step 9: Write type guard tests**

`src/types/__tests__/type-guards.test.ts` — verify that sample data conforms to types. Create a simple type guard utility and test with fixture data.

**Step 10: Commit**

```bash
git add src/types/
git commit -m "feat: add TypeScript type definitions for all subject data models"
```

---

## Task 4: Seed Data Files (Starter Content)

**Files:**
- Create: `src/data/quant/percentage-problems.ts` (3-5 problems)
- Create: `src/data/reasoning/seating-problems.ts` (2-3 problems)
- Create: `src/data/reasoning/syllogism-problems.ts` (3-4 problems)
- Create: `src/data/reasoning/series-problems.ts` (5-6 series)
- Create: `src/data/polity/articles.ts` (20-30 key articles)
- Create: `src/data/polity/amendments.ts` (15-20 key amendments)
- Create: `src/data/polity/landmark-cases.ts` (10-15 landmark cases)
- Create: `src/data/polity/parts.ts` (all 22 parts)
- Create: `src/data/history/events.ts` (30-40 major events)
- Create: `src/data/history/periods.ts` (all major periods)
- Create: `src/data/history/cause-effect-chains.ts` (3-5 chains)
- Create: `src/data/geography/india-map.ts` (state SVG paths)
- Create: `src/data/geography/rivers.ts` (major rivers with paths)
- Create: `src/data/economics/policy-flows.ts` (2-3 flows)
- Create: `src/data/economics/budget-2025.ts` (Union Budget breakdown)
- Create: `src/data/science/elements.ts` (all 118 elements)
- Create: `src/data/science/body-systems.ts` (major systems)
- Create: `src/data/subjects.ts` (subject metadata for navigation)

**Step 1: Create subjects metadata**

`src/data/subjects.ts` — array of all subjects with their slug, name, color, icon, and sub-routes. This is the single source of truth for navigation.

**Step 2: Create Quant seed data**

Start with 3-5 percentage problems, each with full step-by-step solutions. Each step must include the operation, expression, result, explanation, and current variable state.

**Step 3: Create Reasoning seed data**

- 2 seating problems (1 circular, 1 linear) with full deduction steps
- 3 syllogism problems with Venn diagram steps
- 5 number series with pattern detection steps

**Step 4: Create Polity seed data**

- 25 most-asked Fundamental Rights articles (14-32)
- 15 landmark amendments (1st, 7th, 24th, 25th, 42nd, 44th, 52nd, 61st, 73rd, 74th, 86th, 91st, 97th, 101st, 103rd)
- 10 landmark cases (Kesavananda Bharati, Maneka Gandhi, Minerva Mills, Golak Nath, etc.)
- All 22 Parts metadata

**Step 5: Create History seed data**

- 35 major events spanning Ancient to Modern India
- Period definitions (Vedic, Maurya, Gupta, Mughal, Colonial, Post-Independence)
- 3 cause-effect chains (Revolt of 1857 → Constitutional Evolution, Non-Cooperation → Civil Disobedience → Quit India, Economic Reforms 1991 chain)

**Step 6: Create Geography seed data**

- India outline + 28 states + 8 UTs as SVG paths (use simplified GeoJSON)
- Major river systems: Ganga, Yamuna, Brahmaputra, Godavari, Krishna, Narmada, Tapti, Mahanadi, Kaveri

**Step 7: Create Economics seed data**

- Monetary policy flow (RBI repo rate → bank lending → inflation)
- Fiscal policy flow (govt spending → GDP → tax revenue)
- Union Budget 2025-26 breakdown (revenue + expenditure)

**Step 8: Create Science seed data**

- All 118 elements with atomic number, symbol, name, mass, category, group, period, exam facts
- 6 body systems: digestive, circulatory, respiratory, nervous, skeletal, excretory

**Step 9: Validate data files compile**

```bash
npx tsc --noEmit
```
Expected: No type errors

**Step 10: Commit**

```bash
git add src/data/
git commit -m "feat: add seed data for all subjects"
```

---

## Task 5: Zustand Store + Cookie Persistence

**Files:**
- Create: `src/store/progressStore.ts`
- Create: `src/store/visualizerStore.ts`
- Create: `src/lib/cookies.ts`
- Test: `src/store/__tests__/progressStore.test.ts`
- Test: `src/store/__tests__/visualizerStore.test.ts`

**Step 1: Write failing test for progressStore**

`src/store/__tests__/progressStore.test.ts`:
```ts
import { describe, it, expect, beforeEach } from "vitest";
import { useProgressStore } from "../progressStore";

describe("progressStore", () => {
  beforeEach(() => {
    useProgressStore.getState().reset();
  });

  it("initializes with zero streak", () => {
    expect(useProgressStore.getState().streak).toBe(0);
  });

  it("increments streak on daily activity", () => {
    useProgressStore.getState().recordActivity();
    expect(useProgressStore.getState().streak).toBe(1);
  });

  it("tracks topic completion", () => {
    useProgressStore.getState().markTopicCompleted("polity", "articles");
    expect(useProgressStore.getState().completedTopics).toContain("polity:articles");
  });

  it("calculates badge level based on accuracy", () => {
    const level = useProgressStore.getState().getBadgeLevel("polity", 85);
    expect(level).toBe("silver");
  });
});
```

Run: `npm test -- --run`
Expected: FAIL

**Step 2: Implement progressStore**

`src/store/progressStore.ts`:
- `streak: number`
- `lastActivityDate: string | null`
- `completedTopics: string[]`
- `topicScores: Record<string, number>`
- `recordActivity()` — increments streak if new day, resets if gap
- `markTopicCompleted(subject, topic)`
- `getBadgeLevel(subject, accuracy)` — none (<50%), bronze (50-69%), silver (70-89%), gold (90%+)
- `reset()`
- Immer middleware for immutable updates

**Step 3: Run tests**

Expected: PASS

**Step 4: Write failing test for visualizerStore**

`src/store/__tests__/visualizerStore.test.ts`:
- Tests for step navigation: `nextStep()`, `prevStep()`, `goToStep(n)`, `reset()`
- Tests for auto-play: `toggleAutoPlay()`, step interval

**Step 5: Implement visualizerStore**

`src/store/visualizerStore.ts`:
- `currentStep: number`
- `totalSteps: number`
- `isPlaying: boolean`
- `setSteps(total)`, `nextStep()`, `prevStep()`, `goToStep(n)`, `toggleAutoPlay()`, `reset()`

**Step 6: Implement cookie persistence**

`src/lib/cookies.ts`:
- `saveToCookie(key, value)` — JSON.stringify + document.cookie with 365d expiry
- `loadFromCookie(key)` — parse cookie value
- Hook into progressStore via Zustand `persist` middleware using cookie storage adapter

**Step 7: Run all tests**

```bash
npm test -- --run
```
Expected: All PASS

**Step 8: Commit**

```bash
git add src/store/ src/lib/cookies.ts
git commit -m "feat: add Zustand stores for progress tracking and visualizer state"
```

---

## Task 6: Home Page + Subject Hub Pages

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/app/quant/page.tsx`
- Create: `src/app/quant/layout.tsx`
- Create: `src/app/reasoning/page.tsx`
- Create: `src/app/reasoning/layout.tsx`
- Create: `src/app/polity/page.tsx`
- Create: `src/app/polity/layout.tsx`
- Create: `src/app/history/page.tsx`
- Create: `src/app/history/layout.tsx`
- Create: `src/app/geography/page.tsx`
- Create: `src/app/geography/layout.tsx`
- Create: `src/app/economics/page.tsx`
- Create: `src/app/economics/layout.tsx`
- Create: `src/app/science/page.tsx`
- Create: `src/app/science/layout.tsx`

**Step 1: Build Home page**

`src/app/page.tsx`:
- Hero section: "India's First Visual Learning Platform for Govt Exams — 100% Free"
- Subject cards grid (7 subjects) using SubjectCard component
- "How it works" section explaining the visual approach
- Featured visualizer preview (animated teaser)
- Exam quick links section

**Step 2: Build Subject Layout**

Each subject gets a shared layout at `src/app/[subject]/layout.tsx`:
- Uses SubjectLayout component
- Passes subject metadata (name, color, sub-routes)
- Sidebar with links to visualizers within that subject

**Step 3: Build Quant hub page**

`src/app/quant/page.tsx`:
- Subject description
- Cards linking to: Step-by-Step Solver, Geometry Visualizer
- Topic list with completion status

**Step 4: Build remaining hub pages**

Repeat for: reasoning, polity, history, geography, economics, science. Each shows its available visualizers as cards.

**Step 5: Verify navigation works**

```bash
npm run dev
```

Navigate: Home → each subject hub → verify links work. All visualizer links should show "Coming soon" placeholder until Task 7+.

**Step 6: Commit**

```bash
git add src/app/
git commit -m "feat: add home page and all subject hub pages with navigation"
```

---

## Task 7: Quant Visualizers

**Files:**
- Create: `src/app/quant/step-solver/page.tsx`
- Create: `src/components/visualizers/quant/StepSolver.tsx`
- Create: `src/components/visualizers/quant/VariablesPanel.tsx`
- Create: `src/components/visualizers/quant/ExpressionDisplay.tsx`
- Create: `src/app/quant/geometry/page.tsx`
- Create: `src/components/visualizers/quant/GeometryVisualizer.tsx`
- Test: `src/components/visualizers/quant/__tests__/StepSolver.test.tsx`

**Step 1: Write failing test for StepSolver data processing**

Test that given a MathProblem, the component renders the correct number of steps, shows variables at each step, and highlights the current operation.

**Step 2: Build StepSolver component**

`src/components/visualizers/quant/StepSolver.tsx`:
- Topic selector (dropdown to pick problem topic)
- Problem selector (list of problems in that topic)
- Step-by-step display:
  - Left panel: Expression/equation display with the current step highlighted
  - Right panel: Variables panel showing current values (animated number changes with Framer Motion)
  - Bottom: StepController for navigation
- Each step transition animates with Framer Motion (slide + fade)

**Step 3: Build VariablesPanel**

Shows key-value pairs of current variable state. Numbers animate between values using Framer Motion's `animate` prop.

**Step 4: Build ExpressionDisplay**

Renders the math expression with the current operation highlighted. Uses color coding for different operation types.

**Step 5: Run tests**

Expected: PASS

**Step 6: Build GeometryVisualizer**

`src/components/visualizers/quant/GeometryVisualizer.tsx`:
- SVG canvas for drawing shapes
- Shape selector (triangle, circle, rectangle, etc.)
- Interactive: click to change dimensions
- Formula panel: shows area/perimeter calculation step-by-step
- Animated formula application (highlight each variable substitution)

**Step 7: Wire up route pages**

- `src/app/quant/step-solver/page.tsx` — renders StepSolver with data from `src/data/quant/`
- `src/app/quant/geometry/page.tsx` — renders GeometryVisualizer

**Step 8: Verify in browser**

```bash
npm run dev
```

Navigate to `/quant/step-solver` — select a percentage problem, step through it.
Navigate to `/quant/geometry` — select a triangle, see formula steps.

**Step 9: Commit**

```bash
git add src/app/quant/ src/components/visualizers/quant/
git commit -m "feat: add Quant step-by-step solver and geometry visualizer"
```

---

## Task 8: Reasoning Visualizers

**Files:**
- Create: `src/app/reasoning/seating/page.tsx`
- Create: `src/components/visualizers/reasoning/SeatingVisualizer.tsx`
- Create: `src/app/reasoning/syllogism/page.tsx`
- Create: `src/components/visualizers/reasoning/SyllogismVisualizer.tsx`
- Create: `src/app/reasoning/series/page.tsx`
- Create: `src/components/visualizers/reasoning/SeriesVisualizer.tsx`
- Test: `src/components/visualizers/reasoning/__tests__/SeatingVisualizer.test.tsx`

**Step 1: Write failing test for SeatingVisualizer**

Test: given a SeatingProblem, renders the correct number of seats, applies clues step-by-step, and shows final arrangement.

**Step 2: Build SeatingVisualizer**

`src/components/visualizers/reasoning/SeatingVisualizer.tsx`:
- SVG rendering for circular/linear arrangement
- Seats rendered as circles with names (or empty)
- Clue panel on the left — highlights current clue
- Step-by-step: each step applies one clue, animates person placement
- Deduction panel shows reasoning at each step
- Uses Framer Motion for person placement animations (scale + position)

**Step 3: Run tests, verify**

**Step 4: Build SyllogismVisualizer**

`src/components/visualizers/reasoning/SyllogismVisualizer.tsx`:
- SVG Venn diagram renderer (2-3 overlapping circles)
- Statement input panel (shows the premises)
- Step-by-step: each step adds a circle or shades a region
- Conclusion panel: each conclusion shown with check/cross based on validity
- Animated circle drawing and region shading with Framer Motion

**Step 5: Build SeriesVisualizer**

`src/components/visualizers/reasoning/SeriesVisualizer.tsx`:
- Series displayed as a row of number/letter boxes
- Missing element shown as "?"
- Step-by-step pattern detection:
  - Step 1: Show the series
  - Step 2: Highlight groups and show differences/relationships
  - Step 3: Identify the pattern rule
  - Step 4: Apply rule to find missing element
- Color-coded highlights for pattern groups

**Step 6: Wire up route pages**

**Step 7: Verify in browser**

**Step 8: Commit**

```bash
git add src/app/reasoning/ src/components/visualizers/reasoning/
git commit -m "feat: add Reasoning visualizers — seating, syllogism, series"
```

---

## Task 9: Polity Constitutional Explorer

**Files:**
- Create: `src/app/polity/articles/page.tsx`
- Create: `src/components/visualizers/polity/ArticleExplorer.tsx`
- Create: `src/components/visualizers/polity/ArticleGraph.tsx`
- Create: `src/components/visualizers/polity/ArticleDetail.tsx`
- Create: `src/app/polity/amendments/page.tsx`
- Create: `src/components/visualizers/polity/AmendmentTimeline.tsx`
- Test: `src/components/visualizers/polity/__tests__/ArticleExplorer.test.tsx`

**Step 1: Write failing test for ArticleExplorer**

Test: renders article list, clicking an article shows its details, connected amendments and cases.

**Step 2: Build ArticleGraph**

`src/components/visualizers/polity/ArticleGraph.tsx`:
- SVG force-directed graph (simple implementation without D3 — use Framer Motion for positions)
- Nodes: Articles (red), Amendments (blue), Cases (green)
- Edges: connections between them
- Click node → expand to show details
- Zoom/pan with mouse wheel and drag
- Search bar to find specific article by number

**Step 3: Build ArticleDetail**

`src/components/visualizers/polity/ArticleDetail.tsx`:
- Slide-in panel showing article details
- Sections: Description, Amendments that affected it, Landmark Cases, Related Articles
- Each linked item is clickable (navigates the graph)

**Step 4: Build ArticleExplorer page**

`src/components/visualizers/polity/ArticleExplorer.tsx`:
- Two views: Graph view (default) and List view (toggle)
- List view: Part-wise accordion, each part expands to show its articles
- Both views share the ArticleDetail panel

**Step 5: Build AmendmentTimeline**

`src/components/visualizers/polity/AmendmentTimeline.tsx`:
- Horizontal scrollable timeline
- Each amendment as a card on the timeline
- Color coded by category (major/minor/landmark)
- Click card → expand to show affected articles and significance
- Filter by decade or category

**Step 6: Run tests, verify in browser**

**Step 7: Commit**

```bash
git add src/app/polity/ src/components/visualizers/polity/
git commit -m "feat: add Polity constitutional explorer and amendment timeline"
```

---

## Task 10: History Interactive Timeline

**Files:**
- Create: `src/app/history/timeline/page.tsx`
- Create: `src/components/visualizers/history/Timeline.tsx`
- Create: `src/components/visualizers/history/EventCard.tsx`
- Create: `src/app/history/freedom-movement/page.tsx`
- Create: `src/components/visualizers/history/CauseEffectChain.tsx`
- Test: `src/components/visualizers/history/__tests__/Timeline.test.tsx`

**Step 1: Write failing test for Timeline**

Test: renders events in chronological order, zooming changes visible range, clicking event shows details.

**Step 2: Build Timeline component**

`src/components/visualizers/history/Timeline.tsx`:
- Horizontal scrollable timeline with zoom levels:
  - Zoomed out: Periods (Ancient, Medieval, Modern, Post-Independence)
  - Mid zoom: Centuries and key events
  - Zoomed in: Individual events with details
- Period backgrounds with distinct colors
- Events as dots on the timeline, with title labels
- Mouse wheel zooms, drag scrolls
- Filter by category (freedom movement, constitutional, economic, social)

**Step 3: Build EventCard**

`src/components/visualizers/history/EventCard.tsx`:
- Popup/modal when clicking an event
- Shows: title, year, description, causes, effects, related events, key persons
- Related events are clickable (scrolls timeline to that event)

**Step 4: Build CauseEffectChain**

`src/components/visualizers/history/CauseEffectChain.tsx`:
- Vertical flow diagram (like a flowchart)
- Each event as a node with arrow to next
- Animated step-by-step reveal using StepController
- Each step highlights the current event and shows its cause→effect text
- Uses Framer Motion for node appearance animations

**Step 5: Wire up routes**

**Step 6: Verify in browser**

**Step 7: Commit**

```bash
git add src/app/history/ src/components/visualizers/history/
git commit -m "feat: add History interactive timeline and cause-effect chains"
```

---

## Task 11: Geography Interactive Map

**Files:**
- Create: `src/app/geography/map/page.tsx`
- Create: `src/components/visualizers/geography/IndiaMap.tsx`
- Create: `src/components/visualizers/geography/MapLayer.tsx`
- Create: `src/components/visualizers/geography/FeatureSidebar.tsx`
- Test: `src/components/visualizers/geography/__tests__/IndiaMap.test.tsx`

**Step 1: Write failing test for IndiaMap**

Test: renders SVG with state boundaries, clicking a state shows its details, toggling river layer shows rivers.

**Step 2: Build IndiaMap component**

`src/components/visualizers/geography/IndiaMap.tsx`:
- SVG map of India with state boundaries (paths from data file)
- Zoom and pan (SVG viewBox manipulation)
- Hover state → highlight + tooltip with state name
- Click state → FeatureSidebar opens with details
- Layer toggle checkboxes at top

**Step 3: Build MapLayer component**

`src/components/visualizers/geography/MapLayer.tsx`:
- Renders a specific layer's features on top of the base map
- Phase 1: River layer only — blue SVG paths for major rivers
- Each feature is hoverable (shows name) and clickable (shows details)

**Step 4: Build FeatureSidebar**

`src/components/visualizers/geography/FeatureSidebar.tsx`:
- Slide-in panel from right
- Shows: feature name, properties, exam-relevant facts, linked topics
- Quick quiz: "This river originates from ___" with answer reveal

**Step 5: Wire up route**

**Step 6: Verify in browser**

**Step 7: Commit**

```bash
git add src/app/geography/ src/components/visualizers/geography/
git commit -m "feat: add Geography interactive India map with river layer"
```

---

## Task 12: Economics Flow Diagrams

**Files:**
- Create: `src/app/economics/flows/page.tsx`
- Create: `src/components/visualizers/economics/PolicyFlowDiagram.tsx`
- Create: `src/components/visualizers/economics/FlowNode.tsx`
- Create: `src/app/economics/budget/page.tsx`
- Create: `src/components/visualizers/economics/BudgetTreemap.tsx`
- Test: `src/components/visualizers/economics/__tests__/PolicyFlowDiagram.test.tsx`

**Step 1: Write failing test for PolicyFlowDiagram**

Test: renders correct number of nodes, stepping through highlights current node, connections animate.

**Step 2: Build PolicyFlowDiagram**

`src/components/visualizers/economics/PolicyFlowDiagram.tsx`:
- Flow selector (Monetary Policy, Fiscal Policy)
- SVG flow diagram with nodes and directed edges
- Step-by-step animation:
  - Step 1: RBI announces repo rate change (node highlighted)
  - Step 2: Banks adjust lending rates (edge animates, next node highlights)
  - Step 3: Borrowing changes (next node)
  - ...continues through the chain
- Each node shows a description panel on the side
- Uses StepController for navigation

**Step 3: Build FlowNode**

`src/components/visualizers/economics/FlowNode.tsx`:
- SVG group: rounded rect + text
- States: inactive (gray), active (colored), completed (faded color)
- Framer Motion transitions between states

**Step 4: Build BudgetTreemap**

`src/components/visualizers/economics/BudgetTreemap.tsx`:
- Interactive treemap of Union Budget
- Top level: Revenue vs Expenditure
- Click to drill down into subcategories
- Each cell shows amount + percentage
- Color coded by category
- Hover shows tooltip with details

**Step 5: Wire up routes**

**Step 6: Verify in browser**

**Step 7: Commit**

```bash
git add src/app/economics/ src/components/visualizers/economics/
git commit -m "feat: add Economics policy flow diagrams and budget treemap"
```

---

## Task 13: Science Visualizers

**Files:**
- Create: `src/app/science/periodic-table/page.tsx`
- Create: `src/components/visualizers/science/PeriodicTable.tsx`
- Create: `src/components/visualizers/science/ElementDetail.tsx`
- Create: `src/app/science/human-body/page.tsx`
- Create: `src/components/visualizers/science/BodySystemExplorer.tsx`
- Test: `src/components/visualizers/science/__tests__/PeriodicTable.test.tsx`

**Step 1: Write failing test for PeriodicTable**

Test: renders 118 elements in correct grid positions, clicking element shows details, filtering by category highlights correct elements.

**Step 2: Build PeriodicTable**

`src/components/visualizers/science/PeriodicTable.tsx`:
- CSS Grid layout matching standard periodic table shape (18 columns, 7 rows + 2 lanthanide/actinide rows)
- Each element as a cell: atomic number, symbol, name
- Color coded by category (metals, nonmetals, etc.)
- Hover: highlight element + show tooltip
- Click: open ElementDetail panel
- Filter bar: category filter (metals, nonmetals, noble gases, etc.)
- Search by element name or symbol

**Step 3: Build ElementDetail**

`src/components/visualizers/science/ElementDetail.tsx`:
- Modal or side panel
- Shows: all properties, electron configuration, uses, exam-relevant facts
- Animated electron shell visualization (simple concentric circles with dots)

**Step 4: Build BodySystemExplorer**

`src/components/visualizers/science/BodySystemExplorer.tsx`:
- SVG human body outline (front view, simplified)
- System selector buttons (digestive, circulatory, respiratory, nervous, skeletal, excretory)
- Selecting a system highlights relevant organs on the body
- Click organ → detail panel with function, diseases, exam facts
- Step-by-step: animated walkthrough of how the system works (e.g., digestive: mouth → esophagus → stomach → intestine → absorption)

**Step 5: Wire up routes**

**Step 6: Verify in browser**

**Step 7: Commit**

```bash
git add src/app/science/ src/components/visualizers/science/
git commit -m "feat: add Science periodic table and body system explorers"
```

---

## Task 14: Practice Arena

**Files:**
- Create: `src/app/practice/page.tsx`
- Create: `src/app/practice/[subject]/page.tsx`
- Create: `src/app/practice/[subject]/[topic]/page.tsx`
- Create: `src/components/practice/MCQCard.tsx`
- Create: `src/components/practice/PracticeSession.tsx`
- Create: `src/components/practice/ScoreSummary.tsx`
- Create: `src/data/practice/quant-mcqs.ts`
- Create: `src/data/practice/reasoning-mcqs.ts`
- Create: `src/data/practice/gk-mcqs.ts`
- Create: `src/data/practice/science-mcqs.ts`
- Test: `src/components/practice/__tests__/MCQCard.test.tsx`

**Step 1: Write failing test for MCQCard**

Test: renders question and 4 options, selecting an option highlights it, submitting shows correct/incorrect with explanation.

**Step 2: Build MCQCard**

`src/components/practice/MCQCard.tsx`:
- Question text
- 4 option buttons (A, B, C, D)
- States: unanswered, selected, correct, incorrect
- After submission: shows explanation with visual hint
- Framer Motion for correct/incorrect animation (green glow / red shake)

**Step 3: Build PracticeSession**

`src/components/practice/PracticeSession.tsx`:
- Shows MCQs one at a time (or 10 per session)
- Progress bar (question X of Y)
- Timer (optional)
- Tracks score in progressStore

**Step 4: Build ScoreSummary**

`src/components/practice/ScoreSummary.tsx`:
- Shows after completing a session
- Score, accuracy %, time taken
- Topic-wise breakdown
- Badge earned (if threshold met)
- "Revise weak topics" links

**Step 5: Create MCQ data files**

10-15 MCQs per subject area (total ~50 for MVP). Each with question, 4 options, correct answer index, and explanation.

**Step 6: Build practice route pages**

- `/practice` — subject picker
- `/practice/[subject]` — topic picker
- `/practice/[subject]/[topic]` — MCQ session

**Step 7: Integrate with progressStore**

After completing a practice session, update progressStore with score, completed topic, and activity (for streak).

**Step 8: Verify in browser**

**Step 9: Commit**

```bash
git add src/app/practice/ src/components/practice/ src/data/practice/
git commit -m "feat: add Practice arena with MCQs, scoring, and progress tracking"
```

---

## Task 15: Gamification Layer — Dashboard

**Files:**
- Create: `src/app/dashboard/page.tsx`
- Create: `src/components/dashboard/StreakCounter.tsx`
- Create: `src/components/dashboard/RadarChart.tsx`
- Create: `src/components/dashboard/BadgeGrid.tsx`
- Create: `src/components/dashboard/RevisionPrompts.tsx`
- Test: `src/components/dashboard/__tests__/StreakCounter.test.tsx`
- Test: `src/components/dashboard/__tests__/RadarChart.test.tsx`

**Step 1: Write failing test for StreakCounter**

Test: renders current streak count, shows flame icon, displays "N day streak" text.

**Step 2: Build StreakCounter**

`src/components/dashboard/StreakCounter.tsx`:
- Large flame icon (Lucide)
- Animated counter (Framer Motion number ticker)
- "X day streak" with last 7 days as dots (filled = active, empty = missed)
- Color: amber/orange theme

**Step 3: Build RadarChart**

`src/components/dashboard/RadarChart.tsx`:
- SVG radar/spider chart
- 7 axes (one per subject)
- Filled area shows relative strength
- Hover axis → show exact score
- Animated fill on mount

**Step 4: Build BadgeGrid**

`src/components/dashboard/BadgeGrid.tsx`:
- Grid of topic badges
- Grouped by subject
- Each badge shows topic name + level (none/bronze/silver/gold)
- Locked badges shown grayed out with "Complete practice to unlock"

**Step 5: Build RevisionPrompts**

`src/components/dashboard/RevisionPrompts.tsx`:
- "Topics to revise" based on spaced repetition logic
- Shows topics last studied >3 days ago with declining accuracy
- Cards with "Revise Now" button → links to practice

**Step 6: Build Dashboard page**

`src/app/dashboard/page.tsx`:
- Layout: StreakCounter (top), RadarChart (left), BadgeGrid (right), RevisionPrompts (bottom)
- Responsive: stacks vertically on mobile

**Step 7: Add streak counter to Header**

Small streak indicator in the Header component (visible on all pages).

**Step 8: Verify in browser**

**Step 9: Commit**

```bash
git add src/app/dashboard/ src/components/dashboard/ src/components/layout/Header.tsx
git commit -m "feat: add Dashboard with streak, radar chart, badges, and revision prompts"
```

---

## Task 16: SEO + Metadata + Final Polish

**Files:**
- Modify: `src/app/layout.tsx` (root metadata)
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Create: `public/og-image.png`
- Modify: All page files (add metadata exports)

**Step 1: Add root metadata**

Update `src/app/layout.tsx` metadata:
```ts
export const metadata: Metadata = {
  title: {
    default: "GovtExamsStudy - Free Interactive Visual Learning for Govt Exams",
    template: "%s | GovtExamsStudy",
  },
  description: "India's first free interactive visual learning platform for UPSC, SSC, Banking, Railways, and all government exam preparation.",
  keywords: ["govt exam preparation", "UPSC", "SSC", "interactive learning", "visual study"],
  openGraph: { ... },
};
```

**Step 2: Add page-level metadata**

Each subject hub and visualizer page exports its own metadata:
```ts
export const metadata: Metadata = {
  title: "Polity - Interactive Constitutional Explorer",
  description: "Explore the Indian Constitution visually — Articles, Amendments, and Landmark Cases in an interactive graph.",
};
```

**Step 3: Create sitemap**

`src/app/sitemap.ts` — dynamically generates sitemap from all routes.

**Step 4: Create robots.ts**

`src/app/robots.ts`:
```ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://govtexamsstudy.org/sitemap.xml",
  };
}
```

**Step 5: Build verification**

```bash
npm run build
```

Expected: Build succeeds with no errors. Check build output for page count and sizes.

**Step 6: Run all tests**

```bash
npm test -- --run
```

Expected: All tests PASS.

**Step 7: Commit**

```bash
git add .
git commit -m "feat: add SEO metadata, sitemap, robots.txt, and build verification"
```

---

## Task Dependencies

```
Task 1 (Scaffold) ─────────────────────────────────────┐
   │                                                     │
Task 2 (Design System)                                   │
   │                                                     │
Task 3 (Types) ─── Task 4 (Seed Data)                   │
   │                    │                                │
Task 5 (Stores) ────────┤                                │
   │                    │                                │
Task 6 (Home + Hubs) ──┤                                │
   │                    │                                │
   ├── Task 7  (Quant)  ──────┐                          │
   ├── Task 8  (Reasoning) ───┤  These can be            │
   ├── Task 9  (Polity) ──────┤  parallelized            │
   ├── Task 10 (History) ─────┤  (independent             │
   ├── Task 11 (Geography) ───┤   subject areas)          │
   ├── Task 12 (Economics) ───┤                          │
   └── Task 13 (Science) ─────┘                          │
                    │                                     │
              Task 14 (Practice Arena) ──── depends on stores + data
                    │
              Task 15 (Dashboard) ──── depends on stores
                    │
              Task 16 (SEO + Polish) ──── final
```

**Parallelizable:** Tasks 7-13 can all be worked on independently after Tasks 1-6 are complete.

---

## Estimated Task Count

| Task | Approx Steps |
|------|-------------|
| 1. Scaffolding | 10 |
| 2. Design System | 11 |
| 3. Types | 10 |
| 4. Seed Data | 10 |
| 5. Stores | 8 |
| 6. Home + Hubs | 6 |
| 7. Quant | 9 |
| 8. Reasoning | 8 |
| 9. Polity | 7 |
| 10. History | 7 |
| 11. Geography | 7 |
| 12. Economics | 7 |
| 13. Science | 7 |
| 14. Practice | 9 |
| 15. Dashboard | 9 |
| 16. SEO | 7 |
| **Total** | **~132 steps** |
