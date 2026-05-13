# GovtExamsStudy — UX Redesign PRD

**Owner:** Sunny Wilson
**Status:** Draft v1
**Last updated:** 2026-04-24
**Primary audience:** UX research, product design, visual design, design systems
**Complement to:** [docs/PRD.md](./PRD.md) (engineering-facing product requirements)
**Current-state screenshots:** [docs/ux-audit/](./ux-audit/) (31 desktop + 8 mobile captures of the live app)

---

## 0. TL;DR for the UX team

We're commissioning a **full redesign** of a live Next.js study platform for Indian government exam aspirants. The product category is *interactive visual learning* — explorable, animated visualizations rather than PDFs or video lectures. The working paradigm reference is [jsinterview.dev](https://jsinterview.dev) (DSA algorithm visualizer) applied to exam syllabi.

The platform already ships:

- ~300 topic pages across 7 subjects (Quant, Reasoning, Polity, History, Geography, Economics, Science)
- ~25 interactive visualizers (step solvers, timelines, network graphs, treemaps, periodic tables, family trees, etc.)
- A practice MCQ engine with 50+ topic registries
- 50+ daily current-affairs digests
- 10 exam intelligence pages

What it doesn't have is a **visual identity that matches the product's ambition**. The current interface is a functional scaffold — the differentiation ("interactive visual learning for government exams") is claimed in copy but not expressed in form. We want a designer-led rethink of brand, information architecture, motion language, visualizer framework, and every major screen.

**Deliverables requested** (see §17 for detail): mood-board / visual direction, design system (tokens + components), high-fidelity mocks of ~25 key screens in desktop + mobile, a prototype of one flagship flow, and a motion/interaction language doc.

---

## 1. Product vision

> *"Stop reading exam material. Start seeing it."*

GovtExamsStudy exists because 3M+ annual Indian government exam aspirants drown in PDFs, bullet-pointed YouTube lectures, and rote mock tests. Topics like constitutional amendments, policy flows, seating arrangements, blood relations, periodic trends, timelines, and cause-effect chains are *inherently visual* — yet almost every existing product renders them as text. We turn high-frequency exam topics into interactive explorables that a learner can pause, scrub, branch into, and replay.

The redesign should make that vision legible in the first 3 seconds: a visitor should know within one scroll that this is not a textbook-in-a-browser, not a video site, not a mock test bank. It is a *learning instrument*.

### What "visual-first" means for designers
- Every topic page has at least one visual primitive (diagram, timeline, flow, graph, map, grid, annotated figure) — never a wall of text.
- Motion is explanatory, not decorative. If a transition doesn't teach something, cut it.
- Interactivity is the default. Static content is an exception that needs justification.
- Visual density is earned. Hubs with 50 topics must feel explorable, not overwhelming.

---

## 2. Why redesign now

### 2.1 Current-state critique

The current app has been built content-first and engineering-first. Visual design has lagged. A walk through the audit set (`docs/ux-audit/`) surfaces these recurring problems — organized by severity.

#### Critical: the product claim is not visible

- **Home hero (`01-home-desktop.png`, `m01-home-mobile.png`)** — a flat indigo-purple gradient with a headline and three stat pills. No visualizer peek, no animated specimen, no proof that this platform is different. A generic SaaS-style hero that a visitor would scroll past. The "India's First Visual Learning Platform" eyebrow chip is a claim without evidence.
- **Featured Visualizers section** is three thin link cards titled "Step-by-Step Math Solver / Constitutional Article Explorer / Periodic Table Explorer" — no thumbnail, no animation loop, no preview. Click-through required to see the actual product.
- **"How It Works" strip** is three circled numerals with generic copy ("Pick a Subject / Explore Visually / Practice & Track"). Could belong to any edtech product.

#### High: hubs are textbook indices, not learning dashboards

- **Polity hub (`09-polity-hub.png`)** lists 50 topic cards in a two-column grid with minor section headers. Visually homogeneous — no differentiation between a visualizer-backed topic (Article Explorer) and a tabs-based notes topic. Sheer density reads as intimidation.
- **Quant hub (`02-quant-hub.png`)** has the same problem across 31 topics split into 7 groups. Each card is pure text. No icon, no preview, no indicator of tool type (visualizer vs. tabs vs. step-solver).
- **Geography hub (`15-geography-hub.png`)** is a content-heavy list of 50 topics with no visualizer — despite Geography being the subject where a map visualizer is most obvious. The brand promise is contradicted on this page.

#### High: "visualizers" that aren't visual

- **Article Explorer (`10-polity-articles-visualizer.png`)** is the flagship visualizer advertised on the home page. In reality it's a search bar plus a collapsible accordion grouped by constitutional parts. A `List / Graph` toggle exists but the default view is a FAQ. The "Constitutional network graph" promise does not deliver.
- **Amendment Timeline (`11-polity-amendments-timeline.png`)** reads as a vertical table of year-labelled cards. It is not a timeline in the experiential sense.
- **History Timeline (`14-history-timeline.png`)** — similar problem. The "zoomable timeline" is a decorated vertical list.

The periodic table (`20-science-periodic-table.png`) and blood-relations family tree (`06-reasoning-blood-relations.png`) *are* genuinely visual, and should anchor the redesign's language.

#### High: navigation doesn't scale

- Header carries 10 top-level nav items at `lg:flex`. On any tablet or smaller this collapses to a hamburger, and the overflow is significant even on desktop. Information architecture (§7) needs to restructure this.
- Sidebar navigation inside subject layouts (see Polity / Quant screenshots) is a dense flat list with thin group headers. Mobile fallback is a grouped `<select>` — an accessibility win but a discoverability loss.
- Footer replicates navigation instead of acting as utility/legal.

#### Medium: gamification is invisible

The product has a streak, topic completion, topic scores, badge levels (`src/store/progressStore.ts`), and a dashboard route advertised in copy — but **`/dashboard` returns 404** (`29-dashboard.png`). The streak flame is a small badge in the header only when active. There is no progress visible on any topic card, no mastery indicator on hubs, no revisit prompt. A returning learner sees the same UI as a brand-new one.

#### Medium: practice feels like a minimum MCQ card

The practice session (`24-practice-session.png`) is a question card with A/B/C/D tiles, a small "SSC CGL 2021 · Easy" chip, a thin progress bar, and a "0 correct" counter. It works, but it's indistinguishable from any free MCQ site. The explanation state, feedback animation, retry experience, and score summary are not yet designed to feel rewarding.

#### Medium: surface inconsistencies

- Subject colors (blue/purple/red/amber/green/teal/cyan) are declared as tokens but appear inconsistently — present on hub cards, absent inside topic pages, replaced by indigo in navigation.
- Radii, shadows, and card treatments vary screen-to-screen (2xl rounded on some, sharper on others; different shadow weights; some cards have colored top bars, others don't).
- Typography hierarchy is shallow — H1/H2/H3 differ by ~4px only; body copy is one weight.
- Empty states, loading states, error states — mostly absent. The dev error overlay ("1 error") visible in every screenshot is dev-only, but no user-facing error states exist for real failure cases.

#### Low but user-visible

- No search anywhere in the product (despite a `SearchAction` in JSON-LD — see known gaps).
- Current Affairs has a powerful archive (51 digests) but no visual index, no map of categories, no featured story, no reading progress.
- Exam intelligence pages are long scrolls of prose — no calendar widget, no cutoff chart, no eligibility checker.

### 2.2 What's working (preserve in redesign)

- **Subject color system** as an organizing principle — keep the 7-color palette, evolve the shades.
- **Step-by-step navigation primitive** (`StepController` + `useVisualizerStore`) — the pattern of controlled step animation is excellent; every visualizer benefits. Keep the mental model; upgrade the chrome.
- **Blood relations family tree** (`06-reasoning-blood-relations.png`) and **Periodic table** (`20-science-periodic-table.png`) — these should be the visual benchmarks for the rest.
- **Content data model** — topic pages follow Concept / Tricks / Problems (Quant, Reasoning) or Notes / Revision / Practice (Polity, History, Geography, Economics). Design around these shapes; don't invent new ones.
- **No-login, cookie-only progress** — a deliberate product decision for accessibility. Don't design flows that assume accounts in Phase 1.

---

## 3. Target users

Four primary personas. These are evidence-light (constructed from market context, not user research) — **the UX team should validate with 5–8 user interviews in discovery**. Use them as starting hypotheses, not conclusions.

### Persona A — Arjun, the serious SSC aspirant
- 21, commerce graduate, Varanasi.
- Preparing for SSC CGL Tier-1 (Quant + Reasoning + English + GA).
- Studies 6+ hours/day at a paid coaching in the morning, self-study in the evening.
- Primary device: shared family laptop + ₹12,000 Android (6" display).
- Data: 4G on a metered plan; prefers low-bandwidth assets.
- Pain points: forgets shortcut tricks mid-exam; has 20+ YouTube bookmarks he never rewatches; feels Reasoning problems require "seeing the logic" but most prep is text.
- What he values: speed to answer, step-by-step visible workings, mental math shortcuts.
- Design implication: topic pages must load fast, must include *formula + trick + worked example* in a glanceable layout; visualizers must run smoothly on 2GB-RAM Android Chrome.

### Persona B — Meera, the UPSC revision-phase candidate
- 26, postgrad in political science, Delhi.
- 2nd attempt at UPSC CSE. Already knows the syllabus; needs *retrieval practice* and *cause-effect linkages*.
- Studies 8+ hours/day; cross-references topics (e.g. "73rd Amendment" touches Polity, History, Economics, Geography).
- Primary device: MacBook Air + iPhone; Wi-Fi most of the day.
- Pain points: notes lose structure as she accumulates more; can't see linkages between Polity articles, amendments, and landmark cases; current affairs pile up unread.
- What she values: conceptual maps, cross-subject links, quick revision mnemonics, daily current-affairs digest that's *dense but not exhausting*.
- Design implication: the Article Explorer / Amendment Timeline / Landmark Cases trio must be genuinely interconnected; current affairs needs categorization and "saved for revision" affordance (Phase 2 backlog); search is high-value.

### Persona C — Ravi, the banking aspirant (first attempt)
- 23, engineering graduate, Hyderabad.
- Targeting IBPS PO + SBI PO. Strong in Quant, weak in Reasoning puzzles and English.
- Studies 3–4 hours/day after work at a startup.
- Primary device: iPhone 13 during commute + personal laptop.
- Pain points: reasoning puzzles feel like "someone else's logic"; he can't see why a deduction follows.
- What he values: puzzles that *animate* the clue-by-clue solve, a daily practice habit, a visible streak.
- Design implication: Reasoning visualizers (seating, blood relations, puzzles, coding-decoding, direction) are the core value; mobile-first interactions are non-negotiable; streak UI must feel rewarding without being game-show-y.

### Persona D — Priya, the CTET teaching aspirant
- 29, B.Ed, Lucknow.
- Preparing for CTET Paper 2 (maths + science at upper primary level).
- Also a teacher by vocation — uses the platform to *teach her students* visually.
- Primary device: desktop at school, Android phone at home.
- Pain points: explaining abstractions to 11-year-olds; wants shareable visual artifacts.
- What she values: periodic table explorer, human body systems, step-by-step solvers she can screen-share.
- Design implication: visualizers should be presentation-ready (clean full-screen mode, high-contrast labels); share / embed affordances in Phase 2.

### Secondary: SEO arrival
- A visitor who landed on `/polity/article-21` from a Google search.
- Needs: immediate content, no navigation friction, obvious "related topics" surface.
- Design implication: every topic page must stand on its own — generous in-page nav, clear subject context without dependency on the header.

### Non-goals for personas (Phase 1)
- Schoolchildren below 10th standard.
- Non-English primary readers (Hindi/regional coming Phase 3).
- Paid institutional buyers.

---

## 4. Competitive landscape

The UX team should spend time with all of these during discovery. Summary of what each does well and where the design opportunity lies.

| Product | Model | What they do well | What we won't copy |
|---|---|---|---|
| **BYJU's Exam Prep** | Freemium, video-first | Breadth of content, exam calendars, institutional partnerships | Heavy paid funnels, video-lecture format, pop-ups |
| **Unacademy** | Freemium, creator-led live classes | Educator brand, community features | Class-scheduling paradigm, paywalls, live-class UX |
| **Testbook** | Freemium, test-prep | Massive mock-test library, analytics dashboards | Tests-first UX, desktop-heavy |
| **Adda247** | Ad-supported + paid courses | Vernacular reach, cheap mobile app | Cluttered ad-heavy UI, news-site visual language |
| **Gradeup / BYJU's Vidyakul** | App-first | Community, daily quizzes | Notification-heavy gamification |
| **Khan Academy (India)** | Free, global | Quality of explanations | Not India-exam-shaped, US content model |
| **jsinterview.dev** (non-compete, our stated paradigm) | Free, visualizer-first | *The model for how to teach a topic* — step-by-step, animated, controllable | Smaller surface — we have 7 subjects, not one |
| **Observable / Explorable Explanations / Nicky Case** (design inspiration, non-compete) | Essays with interactive diagrams | Long-form pedagogy with embedded visuals | Essay format is too long for exam cramming |

**The design opportunity:** every competitor in the first group treats "visual learning" as a feature. We treat it as the product. Nobody in the Indian exam-prep market is meaningfully doing this. That's the whitespace.

### What the UX team should study specifically
- **jsinterview.dev** — step controller, variable panel, annotation style, minimal chrome.
- **Observable notebooks** — scrubbable parameters, tight layout of prose + diagram.
- **Duolingo** — streak celebration without being infantilising.
- **Stripe Docs** — info density done well; how code + prose coexist.
- **Our own Periodic Table and Blood Relations** — the high-water marks of the current product.

---

## 5. Design principles

Six principles that should drive every design decision. When they conflict, earlier ones win.

### 5.1 Legibility beats novelty
This is a product for people studying for exams that will decide their career. Do not sacrifice clarity for cleverness. If an interaction needs a tooltip to explain, it's probably wrong.

### 5.2 Show, don't tell
Every claim the product makes ("visual learning", "step-by-step", "explorable") should be evidenced on the same screen. No explanatory copy that describes what the product *could* do — show the thing.

### 5.3 Motion teaches or motion leaves
Every animation should communicate a causal, temporal, or structural relationship. Fade-ins for decoration are off-budget. Respect `prefers-reduced-motion` globally (already infrastructure-ready).

### 5.4 Density with structure
We have 300+ topic pages across 7 subjects. Hiding the density is dishonest; disorganizing it is cruel. Design systems of visual hierarchy that let a learner feel the shape of a subject in a glance and drill down without losing place.

### 5.5 Mobile-credible, not mobile-first
60%+ of Indian government exam aspirants prepare primarily on mid-tier Android. Designs that only work on 1440px desktop are unshippable. But equally — this is a *study* product, not a feed product. Don't flatten to mobile-reels patterns; respect that users will often sit down with a phone for 40 minutes of deep work.

### 5.6 Free, with dignity
Ads are the revenue model. They go only on practice surfaces (never inside visualizers), and they must not degrade the learning experience. Design the ad placements — don't let them happen to us. The UX team should propose native-feeling ad formats.

---

## 6. Scope

### 6.1 In scope (Phase 1 redesign)

- **Brand system:** logotype evolution, wordmark, favicon, OG card.
- **Visual identity:** color evolution, typography, iconography, illustration direction, photography (if any).
- **Design system:** tokens, components, documentation. ~50 components (§10).
- **Information architecture:** top nav, subject layout, topic layout, global footer (§7).
- **~25 key screens** designed to hi-fi in desktop + mobile (§9).
- **One flagship flow prototyped** (our recommendation: home → subject → topic → visualizer → practice → score → streak).
- **Motion + interaction language** doc (§11).
- **Visualizer framework** — how every visualizer should frame itself, regardless of topic (§12).
- **Accessibility audit + remediation plan** (§14).
- **Empty / loading / error / 404 states** for every major pattern.
- **Responsive strategy** across desktop, tablet, mobile (§15).

### 6.2 Out of scope (Phase 1 redesign)

- **New product features** — this is a redesign of the existing surface, not a scope expansion. Adding a feature (e.g. live classes, community, user accounts) is a separate initiative.
- **Back-end, data model, CMS** — content remains in TypeScript files in git.
- **Authenticated experiences** — Phase 1 is cookie-only progress. Design for the anonymous-with-streak pattern.
- **Native apps** — web-responsive only.
- **Hindi / regional-language variants** — Phase 3.
- **AI / doubt resolution / chat** — Phase 3.
- **Payment / subscription flows** — business model is ad-supported free for Phase 1.
- **Individual visualizer content logic** — the engineering team owns the content logic inside each visualizer (e.g. the SVG family tree, the periodic grid). UX designs the *chrome, state, controls, and framing*, not the data structure.

### 6.3 Deferred / for discussion

- **Search** — desirable for SEO and navigation but not yet implemented. UX team should design for a search entry point and a results page; engineering will build in follow-up.
- **Dashboard `/dashboard`** — referenced in nav and copy but 404s currently. Must be either designed and built in Phase 1 or explicitly dropped (product decision). Our recommendation: design it, ship it.
- **Share / embed for educators** — Priya persona need; Phase 2 target.

---

## 7. Information architecture

### 7.1 Current state (problems)

- 10-item top nav collapses awkwardly on tablet.
- Exams, Practice, Current Affairs feel like second-class citizens alongside 7 subjects at the same level.
- Subject sidebars mix visualizer routes with notes/tabs routes with no visual differentiation.
- Footer duplicates navigation instead of carrying utility/legal.
- No global search.

### 7.2 Proposed IA

The redesign should consolidate 10 → 5 top-level entry points and push the 7 subjects down one level with a high-quality mega-menu or subject launcher:

```
LEARN          →  mega-menu of 7 subjects (each with topic count, next-up, a featured viz preview)
PRACTICE       →  MCQ arena by subject/topic
CURRENT AFFAIRS →  daily digest + archive
EXAMS          →  exam intelligence directory
DASHBOARD      →  streak, progress, weak topics, revision queue (appears when non-empty)
```

A persistent search affordance lives in the header.

**Subject-level IA** (applies inside any `/<subject>` route):

```
Subject hub
├── Overview / syllabus map (new screen, see §9)
├── Visualizers  — bespoke interactive surfaces (5–10 per subject)
├── Topics       — Notes / Revision / Practice (or Concept / Tricks / Problems for Quant & Reasoning)
└── Practice     — MCQs by topic
```

**Topic-level IA** (inside any `/<subject>/<topic>` route):

Two content shapes, unified under one visual system:

| Subject class | Tab structure | Tab 1 | Tab 2 | Tab 3 |
|---|---|---|---|---|
| Quant, Reasoning | Skills-oriented | **Concept** | **Tricks** | **Problems** |
| Polity, History, Geography, Economics | Knowledge-oriented | **Notes** | **Revision** | **Practice** |

The UX team should design **one** tab system that serves both — same visual chrome, different tab labels. Do not branch into two separate designs.

### 7.3 Footer

Footer becomes utility + legal, not secondary nav:

```
About / Contact  |  Terms  |  Privacy  |  Source attribution  |  © 2026 GovtExamsStudy
```

Subject and exam links move to the header mega-menu.

### 7.4 Mobile IA

Bottom navigation bar with 5 icons (LEARN / PRACTICE / DAILY / EXAMS / ME) for touch reach. Header collapses to just logo + search on mobile. Subject hub navigation inside a subject uses a sticky top-of-page topic picker (grouped select or bottom sheet — designer's call).

---

## 8. Core user journeys

Six journeys the UX team must design end-to-end. Each is annotated with the persona, key screens, and success state.

### J1 — First-time visitor understands the product (3 minutes)
**Persona:** any first-time arrival (organic search or direct)
**Entry:** `/` or any SEO topic page
**Steps:**
1. Land on home. Within one viewport, see an animated specimen of the product (e.g. a looping blood-relations solve or a periodic-table hover).
2. Understand in one sentence what the product is.
3. Click into one subject.
4. Land on subject hub; see topic types visually differentiated.
5. Click into one topic or one visualizer.
6. Experience the product in action for 30+ seconds.
**Success state:** visitor returns within 7 days OR bookmarks OR enters a practice session.
**Design priority:** very high.

### J2 — Daily study session (Arjun, Ravi)
**Persona:** returning daily learner
**Entry:** direct or bookmark
**Steps:**
1. Home (or `/dashboard` if non-empty). See streak prominently. See "continue where you left off" and "today's recommended topic".
2. Click into topic. See Concept / Tricks / Problems or Notes / Revision / Practice.
3. Study. Hit Practice.
4. Complete MCQ session (10 questions). See instant feedback.
5. See score. See streak incremented. See "tomorrow's suggestion".
**Success state:** streak incremented; topic recorded in completion state.
**Design priority:** very high.

### J3 — Deep dive into a visualizer (Meera, Ravi)
**Persona:** engaged learner wanting to *understand*, not just practice
**Entry:** subject hub or direct route
**Steps:**
1. Open a visualizer (e.g. Article Explorer, Blood Relations, Policy Flow, Periodic Table).
2. Orient: what am I looking at? What can I do?
3. Interact: play through steps, filter, search, annotate, zoom.
4. Link: see related topics, related articles, related exam questions.
**Success state:** user spends 5+ minutes; navigates to a related concept without bouncing.
**Design priority:** very high — this is the flagship category-defining moment.

### J4 — Current affairs daily visit (Meera, Priya)
**Persona:** daily-digest reader
**Entry:** `/current-affairs` or homepage daily card
**Steps:**
1. See today's digest with category chips (Polity, Economy, Science & Tech, International, Schemes, Sports, Awards).
2. Scan headlines; click one for detail.
3. See exam relevance tag (UPSC / SSC / Banking / all).
4. Optionally: mark for revision.
**Success state:** reads 3+ items; navigates to a linked syllabus topic at least once.
**Design priority:** medium-high.

### J5 — Exam intelligence lookup (Arjun, Priya)
**Persona:** information-seeking visitor
**Entry:** `/exams` or SEO
**Steps:**
1. Arrive at exam directory. Filter by category (UPSC / SSC / Banking / Railway / Defence / Teaching).
2. Open a specific exam (e.g. SSC CGL).
3. See eligibility, pattern, syllabus, cutoffs, calendar.
4. Export / bookmark / navigate to matching syllabus topics.
**Success state:** visitor finds the information on page without leaving; navigates to a relevant topic.
**Design priority:** medium.

### J6 — SEO arrival (long-tail visitor)
**Persona:** someone who searched "Article 21 Right to Life" and landed directly on the topic page
**Steps:**
1. Land on `/polity/article-21`. Subject context clear without header.
2. Read. Scroll.
3. See related topics / related amendments / related landmark cases inline.
4. Convert: engages with a visualizer, starts practice, or returns to subject hub.
**Success state:** does not bounce within 10 seconds; engages with one piece of inline content.
**Design priority:** high (SEO is a primary growth channel).

---

## 9. Screen inventory

This is the designer's build list. Priority: **P0** = must be in Phase 1 redesign hi-fi, **P1** = strong follow-up, **P2** = explore only. Every screen must be designed for desktop (1440) and mobile (390). Tablet (768) uses responsive rules from §15.

### 9.1 Global

| # | Screen | Priority | Notes |
|---|---|---|---|
| G1 | Header / top nav + mega-menu | P0 | Includes mobile hamburger / bottom nav transition |
| G2 | Footer | P0 | Utility + legal only |
| G3 | Search (entry + overlay + results) | P0 | Even if engineering ships late, design the spec |
| G4 | Cookie consent banner | P0 | Must gate GA4 + AdSense (per [docs/PRD.md §15](./PRD.md)) |
| G5 | 404 / error / offline states | P0 | Including currently broken `/dashboard` |
| G6 | Breadcrumb pattern | P0 | Used across subject, topic, practice |
| G7 | Ad unit frames | P0 | Native-feeling slot, only on practice surfaces |
| G8 | Streak / progress badge (header) | P0 | Evolves from today's flame-and-number |
| G9 | Theme: light (dark mode is P2) | P0 | Light only for Phase 1 |

### 9.2 Home

| # | Screen | Priority | Notes |
|---|---|---|---|
| H1 | Home desktop | P0 | Hero with live visualizer specimen + subjects + featured visualizers + daily digest card + CTA |
| H2 | Home mobile | P0 | Vertical stacking; bottom nav |
| H3 | Empty-state home (first visit) | P0 | No streak, no progress — design for the empty state |
| H4 | Returning-state home | P0 | Shows streak, "continue where you left off", today's pick |

### 9.3 Subject hubs (7 subjects × 2 states)

| # | Screen | Priority | Notes |
|---|---|---|---|
| S1 | Subject hub template (Polity, 50-topic dense example) | P0 | The hardest hub to design; if this works, the others do |
| S2 | Subject hub — Quant (31 topics, sectioned) | P0 | Needs topic-type differentiation (tabs vs. visualizer) |
| S3 | Subject hub — Geography (topic list + missing viz) | P0 | Needs a placeholder "Map coming soon" that doesn't feel broken |
| S4 | Subject overview / syllabus map | P1 | New surface: a visual map of topics-as-nodes per subject |
| S5 | Subject hub mobile | P0 | Topic picker, subject-color theming |

### 9.4 Topic pages

| # | Screen | Priority | Notes |
|---|---|---|---|
| T1 | Topic page — tabs template (Notes/Revision/Practice OR Concept/Tricks/Problems) | P0 | One design, two label sets |
| T2 | Topic page mobile | P0 | Sticky tab bar, collapsible sidebar |
| T3 | Concept / Notes panel | P0 | Prose + formulas + key-idea callout + exam relevance |
| T4 | Tricks / Revision panel | P0 | Card stack with type badges and time-saved chips |
| T5 | Problems / Practice panel | P0 | Step solver embedded or MCQ list |
| T6 | Topic empty state | P1 | For content gaps (some topics may be placeholders) |

### 9.5 Visualizers — framework + key examples

The UX team designs the **framework** (§12), then applies it to every existing visualizer. Hi-fi for the flagship ones:

| # | Visualizer | Priority | Notes |
|---|---|---|---|
| V1 | Visualizer framework spec | P0 | Chrome, step controller, variable panel, legend, help, fullscreen, reset — documented once |
| V2 | Step Solver (Quant) | P0 | The canonical step-by-step animator |
| V3 | Blood Relations family tree | P0 | Already strong; upgrade chrome |
| V4 | Article Explorer (Polity) | P0 | Current version is a FAQ; redesign to be a real network graph |
| V5 | Amendment Timeline | P0 | Design a real timeline (horizontal scrubbable) |
| V6 | Landmark Cases Explorer | P0 | Linked to articles + amendments |
| V7 | Periodic Table | P1 | Working well; small polish pass |
| V8 | Human Body Systems | P1 | Current state unaudited — assume polish pass |
| V9 | Policy Flow Diagram (Economics) | P1 | SVG flow with animated connectors + labels |
| V10 | Budget Treemap | P1 | Drill-down treemap |
| V11 | History Timeline + cause-effect | P0 | Current state is a decorated list; design a real timeline |
| V12 | Geography map (Phase 1 — single layer) | P0 | India SVG with one layer (rivers). Placeholder is a trust problem |
| V13 | Seating / Syllogism / Series / Puzzles (existing) | P1 | Apply framework; upgrade chrome |
| V14 | Visualizer mobile layouts | P0 | Control placement, reduced interactions for touch |

### 9.6 Practice

| # | Screen | Priority | Notes |
|---|---|---|---|
| P1 | Practice hub (subject selector) | P0 | |
| P2 | Practice — topic list | P0 | Shows coverage %, difficulty, last attempt |
| P3 | Practice session — question | P0 | Card, progress, question chip, difficulty, answer tiles |
| P4 | Practice session — answered state (correct) | P0 | Celebration motion, explanation reveal, next-question control |
| P5 | Practice session — answered state (incorrect) | P0 | Correction motion, explanation, retry path |
| P6 | Score summary | P0 | Badges, streak, topic mastery, next-topic suggestion |
| P7 | Practice empty / no-questions state | P1 | For topics without content yet |
| P8 | Ad slot placements (inline, end-of-session) | P0 | Native-feeling, clearly labelled |

### 9.7 Current affairs

| # | Screen | Priority | Notes |
|---|---|---|---|
| C1 | Current affairs hub — today's digest | P0 | Featured story, category chips, archive peek |
| C2 | Current affairs — date detail | P0 | Per-item card with source, category, exam-relevance, linked syllabus |
| C3 | Current affairs — archive / calendar view | P1 | Calendar scrubber for browsing by date |
| C4 | Current affairs mobile | P0 | |

### 9.8 Exam intelligence

| # | Screen | Priority | Notes |
|---|---|---|---|
| E1 | Exam directory | P0 | Categorized; filter by type |
| E2 | Exam detail | P0 | Eligibility / pattern / syllabus / cutoffs / calendar; currently long prose |
| E3 | Cutoff visualization | P1 | Chart, not a table |
| E4 | Exam calendar widget | P1 | Global; also embeddable on home |

### 9.9 Dashboard / me

| # | Screen | Priority | Notes |
|---|---|---|---|
| D1 | Dashboard — returning learner | P0 | Streak, completed topics, weak topics, revision prompts, radar chart |
| D2 | Dashboard — first-visit (empty) | P0 | Onboarding prompt |
| D3 | Badge grid | P0 | Bronze / silver / gold per topic |
| D4 | Revision prompts | P0 | Spaced-repetition UI |

### 9.10 Legal & utility

| # | Screen | Priority | Notes |
|---|---|---|---|
| L1 | Privacy policy | P0 | Visual pass only (content already written) |
| L2 | Terms & disclaimer | P0 | Same |
| L3 | Source attribution | P0 | Callout pattern referenced across data |

---

## 10. Design system

### 10.1 What exists (in `src/app/globals.css`)

The product ships a Tailwind v4 CSS-first token system. Audit what's there:

- **Colors:** primary (indigo 50–900), secondary (amber 50–900), 7 subject colors (blue/purple/red/amber/green/teal/cyan) with `-light` and `-dark` variants, 10-step gray scale, semantic vars for bg/text/border.
- **Typography:** Inter (body), JetBrains Mono (code/numbers). Font scale 12px → 36px (xs → 4xl). Font weights 400/500/600/700. Line heights tight/normal/relaxed.
- **Radii:** 0.25 / 0.5 / 0.75 / 1 / 1.5rem + full.
- **Shadows:** 4 tiers (sm/md/lg/xl) — all neutral, no colored shadows.
- **Transitions:** 3 speeds (150/250/350ms ease).
- **Custom classes:** `.hero-gradient`, `.bento-grid`, `.subject-card-gradient`, `.dot-pattern`, `.feature-card-bar`, `.step-connector`, `.glass-stat`, `.stat-glow`.
- `prefers-reduced-motion` wired globally.

### 10.2 What to evolve (designer's remit)

- **Color evolution:** the 7 subject colors are a strength. Evolve them to work harmoniously together (they currently feel like disconnected swatches). Introduce subject *duotones* for richer visual treatments inside topic pages. Consider pairing each subject color with a secondary accent for states.
- **Primary color:** `indigo-600 #4f46e5` is fine but generic. Consider whether to keep indigo as primary or let subject color take primary role on subject pages and use a neutral / black-on-white identity at the brand/home level.
- **Hero gradient:** current `#312e81 → #4f46e5 → #818cf8` linear is the most dated element visually. Redesign. Options: complex mesh gradient, dark-navy with single color accent, white/off-white with colored visualizer specimen. Defer to the designer.
- **Typography:** evolve hierarchy. Current H1/H2/H3 differ by ~4px; introduce a display face for hero and topic titles, keep Inter for body. JetBrains Mono stays for formulas and numbers.
- **Iconography:** currently Lucide React (fine but generic). The UX team should choose — stay with Lucide, switch to a custom set, or commission a small bespoke set for subjects and visualizer types.
- **Illustration direction:** none currently. Decide: photorealistic? Flat? Isometric? Our recommendation: **low-fidelity diagrammatic** — line-art schematic illustrations that feel pedagogical, not decorative.
- **Shadows:** upgrade to a mix of elevation shadow + 1px border-tint for the modern soft-elevation look, instead of pure drop shadows.

### 10.3 Components — inventory

Catalog of components the UX team will design / redesign. Roughly ~50 components. Annotated with whether they exist today.

| Category | Component | Exists? |
|---|---|---|
| Layout | Header, Footer, SubjectLayout, SubjectHubPage | ✓ |
| Layout | Mega-menu, Bottom nav (mobile), Search overlay | — |
| Navigation | Breadcrumb, Sidebar nav, Tab bar, Pill nav | ✓ (all, but need evolution) |
| Content | Card (topic, visualizer, current affairs, exam), Badge, Chip | ✓ (inconsistent) |
| Content | Stat card, Glass-stat, Hero stat | ✓ |
| Content | Formula block, Key-idea callout, Trick card | ✓ |
| Content | Table, Timeline, Step list | partial |
| Controls | Button (primary, secondary, ghost, destructive), Icon button | ✓ (loose) |
| Controls | Input, Textarea, Select, Search input, Filter chip | partial |
| Controls | Toggle, Checkbox, Radio, Segmented control | — |
| Feedback | Alert, Toast, Inline error, Success state | — |
| Feedback | Skeleton / loading, Empty state, 404 | partial |
| Feedback | Modal, Bottom sheet, Drawer, Tooltip, Popover | — |
| Visualizer chrome | StepController, ProgressBar, VariablePanel, Legend, Help-overlay, Reset, Fullscreen toggle | ✓ (ship-quality on StepController only) |
| Visualizer chrome | Annotation marker, Highlight ring, Pulse indicator | partial |
| Practice | MCQCard, PracticeSession, ScoreSummary, Question progress, Difficulty chip | ✓ (basic) |
| Gamification | Streak flame, Badge (bronze/silver/gold), Progress ring, Radar chart, Heatmap | partial (logic exists, UI weak) |
| Ads | AdUnit (native, labelled) | ✓ (placeholder) |
| Utility | Avatar (future), Link, Code block, Mono number, Label, Divider | partial |

**Design deliverable:** one Figma library file with every component documented (variants, states, tokens applied, accessibility notes).

### 10.4 Typography system (proposed starting point)

Proposed scale — designer refines:

| Role | Size / weight / line-height | Use |
|---|---|---|
| Display 1 | 48/56/1.05 bold | Home hero |
| Display 2 | 36/44/1.1 bold | Page title (topic, visualizer) |
| Heading 1 | 28/36/1.2 semibold | Subject hub title |
| Heading 2 | 22/28/1.25 semibold | Section headers |
| Heading 3 | 18/24/1.3 semibold | Card titles |
| Body large | 17/28/1.6 | Topic content |
| Body | 15/24/1.6 | Default |
| Body small | 13/20/1.5 | Captions, metadata |
| Mono / number | JetBrains Mono 15/20 | Formulas, step values |
| Label | 12/16/1.2 uppercase 0.05em | Section labels, chips |

---

## 11. Motion & interaction language

### 11.1 Principles

- **Easing:** prefer `cubic-bezier(0.4, 0, 0.2, 1)` for entrances, `cubic-bezier(0.4, 0, 1, 1)` for exits. No bounce by default.
- **Durations:** 150ms for UI affordance (hover, press), 250ms for mid-level transitions (tab switches, modal), 350–500ms for storytelling (step reveals, visualizer advances).
- **Stagger:** 40–80ms stagger for list-item entrances is OK; nothing above 100ms — feels slow.
- **Reduced motion:** must be globally respected. Provide equivalent non-animated states.

### 11.2 Named motion patterns

The UX team should name and document the patterns below; engineering will implement them with Framer Motion.

| Pattern | Behavior | Used in |
|---|---|---|
| **Step reveal** | Node/element fades + translates up 8px + highlight ring pulses once | Every visualizer |
| **Step connect** | SVG path animates stroke-dashoffset 0→full | Family trees, flows, networks |
| **Correct feedback** | Option tile flashes subject-green with scale 1→1.04→1 + particle sparkle | Practice session |
| **Incorrect feedback** | Option tile horizontal shake ±4px 4× over 300ms + red border pulse | Practice session |
| **Streak increment** | Flame icon morph with count flip animation | Header, dashboard |
| **Page enter** | Subtle 12px fade-up, 250ms | Every route |
| **Tab switch** | Content crossfade 200ms + tab underline slide 180ms | Topic pages |

### 11.3 Interaction rules

- No scroll-jacking.
- No auto-advancing carousels.
- No decorative parallax.
- Hover states on desktop. Press states on touch.
- Keyboard arrow keys must navigate visualizer steps (currently missing — flagged in [docs/PRD.md](./PRD.md)).
- Tap targets ≥ 44×44px on touch.

---

## 12. Visualizer framework

This is the single most category-defining surface. Every visualizer — regardless of subject — should share the same chrome so that a learner who's used one can immediately use any other.

### 12.1 Shared layout

Proposed frame (designer may evolve):

```
┌──────────────────────────────────────────────────────────┐
│  Visualizer title  ·  subject chip          [?] [⛶] [↻] │  ← header: title, subject chip, help, fullscreen, reset
├──────────────────────────────────────────────────────────┤
│                                                          │
│                                                          │
│                    VISUALIZER CANVAS                     │  ← main stage: SVG / DOM / Canvas
│                                                          │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Current step description / variable panel               │  ← explanation / state
├──────────────────────────────────────────────────────────┤
│   ◄   ▌▌ / ▶   ►   ↻          Step 3 of 7               │  ← step controller
└──────────────────────────────────────────────────────────┘
```

### 12.2 Required affordances

Every visualizer must have:

1. **Title + subject chip** (top-left). Sets context for SEO arrivals.
2. **Help overlay** (top-right `?`). First-time tooltip or modal explaining the visualizer in 3 sentences.
3. **Fullscreen toggle** (top-right `⛶`). Removes page chrome, keeps visualizer + controller.
4. **Reset** (top-right `↻`). Clears state, returns to step 0.
5. **Step controller** (bottom). Prev / Play-Pause / Next / current/total. Keyboard-navigable.
6. **Explanation surface** (between canvas and controller). Shows the current step's meaning in plain language.
7. **Variable / state panel** (optional, right side or below). Shows changing values (used in Step Solver, Cube/Dice, Coding-Decoding).
8. **Legend** (optional, top or right). For color-coded elements (periodic table, map layers).

### 12.3 Visual treatment

- The canvas area uses the **subject color** as accent (not dominant).
- Background is neutral (white or `--color-bg-secondary`), not colored.
- Annotations and highlights animate in with Step reveal pattern.
- Controls chrome is always visible at step 0; no "launch" screen.
- Fullscreen mode is keyboard-dismissible (ESC).

### 12.4 Visualizer-type taxonomy

Designer should propose a small set of visualizer *types* that most existing and future visualizers map to:

- **Step-solver** (Quant StepSolver, Reasoning StepSolver) — worked example with variables.
- **Spatial-grid** (Periodic Table, Cube/Dice, Counting Figures, Puzzles) — interactive grid with filter/highlight.
- **Network** (Article Explorer, Landmark Cases, Knowledge Graph) — nodes + edges with zoom/filter.
- **Timeline** (History Timeline, Amendment Timeline) — horizontal/vertical scrubbable axis with events.
- **Flow** (Policy Flow, Freedom Movement cause-effect) — directed graph with animated connectors.
- **Tree** (Blood Relations, Directory of Concepts) — hierarchical layout with reveal animation.
- **Map** (Geography, future) — GeoJSON India with toggleable layers.
- **Treemap** (Budget) — rectangle pack with drill-down.

Each type needs a visual spec. Existing components map cleanly — see `src/components/visualizers/` for the list.

---

## 13. Brand & voice

### 13.1 Brand positioning

- **Name:** GovtExamsStudy (may evolve — consider shorter wordmark like **GES**, already used in mobile header). Designer may propose a rename; stakeholder-approved.
- **Tagline options for exploration:**
  - *"Stop reading. Start seeing."* (current, keep as one option)
  - *"Exam prep you can watch think."*
  - *"Where concepts click."*
- **Logotype:** current is a book + wordmark. Dated. Redesign.
- **Color identity:** see §10. Recommendation: subject colors carry subject, primary stays indigo at brand level, but consider a more distinctive primary (oxblood? forest? tealish-blue?) that isn't a Tailwind default.

### 13.2 Voice

- **Tone:** serious, clean, respectful. These are adults studying for career-making exams.
- **Word choice:** avoid "hack", "ace", "crack", "demolish" — Indian edtech cliches. Prefer verbs like *understand, solve, reason, revise, practice*.
- **Copy density:** low. We are a product, not a content site.
- **Examples:**
  - ✗ "Crack SSC with our killer shortcuts!"
  - ✓ "See every step. Solve every shortcut."
  - ✗ "Don't miss out on free mock tests!"
  - ✓ "Practice by topic. See how you're improving."

### 13.3 What the brand must *never* claim

- Official affiliation with UPSC, SSC, IBPS, Railways, or any exam body.
- Guaranteed selection or score.
- Reproduction of official past papers as content (educational original-question policy).

(These are in [docs/PRD.md §7](./PRD.md#7-non-goals-for-phase-1) and are non-negotiable.)

---

## 14. Accessibility

### 14.1 Requirements

- **WCAG 2.2 AA** for all non-visualizer content. Visualizers target AA where reasonable but may rely on alternative content for the irreducibly visual parts.
- **Color contrast:** text ≥ 4.5:1, large text ≥ 3:1, UI ≥ 3:1.
- **Keyboard navigation:** every interactive element must be operable by keyboard. Tab order follows visual order.
- **Focus states:** visible, high-contrast, never suppressed.
- **Screen reader support:** visualizers provide a text alternative describing the current step and state.
- **Reduced motion:** already respected globally.
- **Color-blind safe:** subject colors should pass Deuteranopia / Protanopia checks. Green + red (Geography + Polity) are the riskiest pairing.
- **Touch targets:** ≥ 44×44px.
- **Text scaling:** layout holds up to 200% browser zoom.
- **Language:** `<html lang="en-IN">` set; tone and idiom should be India-English.

### 14.2 Specific design tasks

- Audit subject-color pairings for color-blindness.
- Design the visualizer alt-text pattern (screen-reader narration of each step).
- Design a visible skip-link.
- Design a text-only fallback for every visualizer (a bulleted summary of steps that narrates what the visualizer shows).

---

## 15. Responsive strategy

### 15.1 Breakpoints

Match Tailwind v4 defaults; designer may propose custom:

| Name | Min width | Primary device |
|---|---|---|
| `sm` | 640px | Large phones landscape |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / small laptop |
| `xl` | 1280px | Laptop |
| `2xl` | 1536px | Large display |

Design to **1440 (desktop primary)** and **390 (mobile primary)**. Tablet (768) uses responsive rules from desktop designs.

### 15.2 Mobile-specific patterns

- Bottom tab nav (5 items).
- Topic sidebar becomes a sticky top picker (grouped select or bottom sheet).
- Visualizer controls relocate to bottom of viewport; canvas takes remaining height.
- Full-page practice session (no sidebar).
- Step-by-step visualizers: horizontal swipe as alt for prev/next.
- Collapse long content to accordions; expand on scroll or tap.
- Reduce motion durations by ~20% on mobile to feel crisp.

### 15.3 Performance constraints affecting design

- Target: **Lighthouse mobile performance score ≥ 85** on the home and a representative topic page.
- **No hero video.** Animated SVG loops OK (use `will-change` sparingly).
- Web fonts: limit to Inter + JetBrains Mono. No additional brand face unless absolutely worth it; if added, use font-display: swap and keep subset size ≤ 40KB per family per weight.
- Images: WebP / AVIF only. Max ~150KB per hero specimen.

---

## 16. Content constraints affecting design

The UX team should know these constraints so designs don't collide with how content is authored:

- **Concept data structure** (`QuantConcept`, `ReasoningConcept`, and general-studies equivalents) have a fixed shape: `title`, `description`, `keyIdea`, array of formulas/rules, `examTags` (string array of exam names), `examRelevance` (prose). Design a tabbed concept panel that renders these shapes well.
- **Trick data structure** (`QuantTrick`, `ReasoningTrick`): `type` (formula-shortcut / mental-math / pattern-shortcut / elimination), `title`, `description`, optional `formula`, `example` (problem + solution), optional `timeSaved`. Design a card that makes the type legible.
- **Problem data structure** (`MathProblem`, `ReasoningProblem`): multi-step with each step having `operation`, `expression`, `result`, `explanation`. Design a Step Solver that renders all four per step.
- **Exam data** is structured: eligibility / pattern / syllabus / cutoffs. Design a consistent exam-detail template.
- **Current affairs** per item: headline, summary, category, source name + URL, exam relevance. Design a digest-item card.
- Content is **five items per topic** in Quant and Reasoning (5 concepts, 5 tricks, 5 problems). Design for lists of 5, not arbitrary lengths.

---

## 17. Deliverables expected from the UX team

In rough delivery order. A deliverable is "done" when the engineering team can build from it without further clarification.

### 17.1 Discovery (weeks 1–3)
- 5–8 user interviews across the 4 personas.
- Competitive teardown deck.
- Baseline analytics review (GA4 property ID `G-GPQEH3V7KN`, see [docs/PRD.md §14](./PRD.md#14-measurement-plan)).
- Heuristic audit of current app (this document is a starting point; designer should add their own).
- Discovery report with refined personas + journeys.

### 17.2 Direction (weeks 3–5)
- Mood board / visual direction (3 directions, converging to 1).
- Brand evolution: logotype, wordmark, color, type.
- Two "provocation" hero frames (one conservative, one ambitious).
- Homepage direction locked.

### 17.3 System (weeks 5–8)
- Design system v1 (tokens + ~50 components) in Figma.
- Documented naming (design tokens → CSS var names — engineering will need these to match `globals.css`).
- Motion & interaction language doc.
- Visualizer framework spec (§12).

### 17.4 Screens (weeks 8–14)
- All P0 screens from §9 in desktop + mobile.
- All P1 screens from §9 in desktop (mobile optional).
- Empty / loading / error states for every major pattern.

### 17.5 Prototype (weeks 12–14)
- Interactive Figma prototype of the flagship flow: home → subject hub → topic → visualizer → practice → score → streak.
- Used for user testing (round 2).

### 17.6 Handoff (weeks 14–16)
- Figma file with all screens, components, tokens.
- Design tokens exported (JSON) — engineering will map to Tailwind v4 `@theme` block.
- Motion specs in Framer Motion-friendly form.
- Asset exports: icons (SVG), illustrations (SVG), favicons, OG cards.
- Accessibility notes per screen.
- Ownership handoff doc: what's shipped Phase 1, what's P1, what's P2.

---

## 18. Phasing

### Phase A — Foundations (weeks 1–8)
- Discovery + direction + design system v1 + visualizer framework.

### Phase B — Core screens (weeks 8–14)
- Home, one subject hub template (test with Polity — the hardest), topic page template, practice flow, dashboard, current affairs.

### Phase C — Visualizer redesigns (weeks 10–16, parallel to B from week 10)
- 12 visualizers, starting with Article Explorer, Amendment Timeline, and History Timeline (the three worst today).

### Phase D — Polish + prototype + handoff (weeks 14–18)
- Edge states, prototype, token export.

Total: **~18 weeks**. Aggressive but achievable with 2 designers + 1 researcher.

---

## 19. Success metrics

UX team's redesign is successful if, **90 days post-launch**, the following move:

### 19.1 Business metrics
- Organic sessions +40% (SEO gains from improved IA).
- 7-day return rate +50% (better dashboard + streak visibility).
- Practice completion rate ≥ 65% (up from current ~60% target).
- Ad RPM on practice pages: non-degraded (ads must not hurt revenue).

### 19.2 UX health
- Home → subject hub CTR ≥ 45% (up from 40% target).
- Subject hub → topic CTR ≥ 30% (up from 25%).
- Median topic-page dwell time ≥ 4 minutes.
- Visualizer engagement: ≥ 40% of visualizer arrivals advance past step 0.
- Practice session completion ≥ 65%.
- Lighthouse mobile perf ≥ 85 on home + 1 topic page.

### 19.3 Design system health
- ≥ 90% of components in shipped screens come from the system.
- Token drift (arbitrary CSS values in code): < 5% of total.

### 19.4 Qualitative
- Usability test: 8/10 users can complete J1 (first-time visit) without guidance.
- Brand survey: "looks like a modern, premium product" agreement ≥ 70%.

---

## 20. Risks & open questions

### 20.1 Risks

- **Scope creep.** 300+ topic pages × 7 subjects × multiple states is vast. Designer must systemize or the project dies under its own weight. Risk mitigation: the one-template-per-pattern rule (§9).
- **Content-design mismatch.** If content shape changes mid-redesign, screens break. Risk mitigation: lock content model first (§16).
- **Engineering debt.** Current CSS has drift; Tailwind v4 tokens may not cleanly accommodate arbitrary designer tokens. Risk mitigation: early token workshop between designer and engineering.
- **Visualizer ambition vs. complexity.** Real network graph (Article Explorer) is 10× the effort of an accordion. Designer specs must flag complexity tiers; product triages.
- **Ad impact.** Native ads integrated into learning pages would be catastrophic. Rule: ads live on `/practice*` only. If designer proposes anything else, escalate.
- **Accessibility debt.** No a11y audit done to date. Risk is designer ships beautiful screens that fail WCAG; require a11y pass per sprint.

### 20.2 Open questions for product to answer before design work starts

- Should the brand name change? Keep GovtExamsStudy, or shorten?
- Is dark mode Phase 1 or Phase 2?
- Dashboard — ship in Phase 1 or defer?
- Geography map — single-layer India in Phase 1, or full placeholder?
- Search — in scope for design (P0), but engineering timeline unclear.
- Mobile app — is a PWA install prompt in scope? (Our recommendation: yes, P1.)
- Current affairs "save for revision" — Phase 1 or 2?
- Login / accounts — Phase 1 is no-login; does this redesign anticipate Phase 2 account flow, or ignore it?

---

## 21. Appendices

### Appendix A — Current-state screenshot index

Full 39-screenshot audit at `docs/ux-audit/`. Annotated index:

**Desktop (1440×900, full page):**

| # | File | Route | Notes for designer |
|---|---|---|---|
| 01 | `01-home-desktop.png` | `/` | Hero + bento + featured + how-it-works + CTA. Generic SaaS language. |
| 02 | `02-quant-hub.png` | `/quant` | 31 topics in 7 sections. Dense. |
| 03 | `03-quant-percentage-tabs.png` | `/quant/percentage` | Concept / Tricks / Problems tabs. |
| 04 | `04-quant-geometry-visualizer.png` | `/quant/geometry` | Standalone visualizer route. |
| 05 | `05-reasoning-hub.png` | `/reasoning` | 14 topics in 3 sections. |
| 06 | `06-reasoning-blood-relations.png` | `/reasoning/blood-relations` | **Strong visualizer example.** |
| 07 | `07-reasoning-seating.png` | `/reasoning/seating` | Standalone legacy visualizer. |
| 08 | `08-reasoning-inequalities-tabs.png` | `/reasoning/inequalities` | Tabs topic. |
| 09 | `09-polity-hub.png` | `/polity` | **50 topics. The hardest hub to redesign.** |
| 10 | `10-polity-articles-visualizer.png` | `/polity/articles` | **Flagship visualizer that isn't visual.** Redesign target. |
| 11 | `11-polity-amendments-timeline.png` | `/polity/amendments` | Not really a timeline. Redesign target. |
| 12 | `12-polity-topic-tabs.png` | `/polity/fundamental-rights` | Notes / Revision / Practice tabs. Very long. |
| 13 | `13-history-hub.png` | `/history` | 50 topics. |
| 14 | `14-history-timeline.png` | `/history/timeline` | Decorated list, not a timeline. Redesign target. |
| 15 | `15-geography-hub.png` | `/geography` | Hub with 50 topics, no visualizer. |
| 16 | `16-economics-hub.png` | `/economics` | 50 topics. |
| 17 | `17-economics-flows.png` | `/economics/flows` | Policy flow diagram. SVG with animated edges. |
| 18 | `18-economics-budget-treemap.png` | `/economics/budget` | Drill-down treemap. |
| 19 | `19-science-hub.png` | `/science` | Simple hub — only periodic table + human body. |
| 20 | `20-science-periodic-table.png` | `/science/periodic-table` | **Strongest visualizer today.** |
| 21 | `21-science-human-body.png` | `/science/human-body` | Body systems explorer. |
| 22 | `22-practice-hub.png` | `/practice` | Subject grid. |
| 23 | `23-practice-polity-topics.png` | `/practice/polity` | Topic list with "questions" counts. |
| 24 | `24-practice-session.png` | `/practice/polity/fundamental-rights` | **Practice MCQ card — baseline for redesign.** |
| 25 | `25-current-affairs-hub.png` | `/current-affairs` | Archive list. |
| 26 | `26-current-affairs-detail.png` | `/current-affairs/2026-04-24` | Per-day detail page. |
| 27 | `27-exams-directory.png` | `/exams` | Exam categories. |
| 28 | `28-exam-detail-upsc.png` | `/exams/upsc-cse` | Long prose. Needs visualization. |
| 29 | `29-dashboard.png` | `/dashboard` | **404 — must be designed and built or dropped.** |
| 30 | `30-privacy.png` | `/privacy` | Legal. |
| 31 | `31-terms.png` | `/terms` | Legal. |

**Mobile (390×844, iPhone 14, full page):**

| # | File | Route | Notes |
|---|---|---|---|
| m01 | `m01-home-mobile.png` | `/` | Hero cramped; stat cards awkward. |
| m02 | `m02-quant-hub-mobile.png` | `/quant` | Single-column long scroll. |
| m03 | `m03-quant-percentage-mobile.png` | `/quant/percentage` | Tabs responsive. |
| m04 | `m04-blood-relations-mobile.png` | `/reasoning/blood-relations` | **Viz works; controls cramped.** |
| m05 | `m05-polity-articles-mobile.png` | `/polity/articles` | Accordion-heavy. |
| m06 | `m06-periodic-table-mobile.png` | `/science/periodic-table` | Works; could be better. |
| m07 | `m07-practice-session-mobile.png` | `/practice/polity/fundamental-rights` | Practice flow on mobile. |
| m08 | `m08-current-affairs-mobile.png` | `/current-affairs/2026-04-24` | Digest detail on mobile. |

### Appendix B — Reference links

- [jsinterview.dev](https://jsinterview.dev) — the paradigm reference.
- [Observable](https://observablehq.com) — explorable explanations.
- [explorabl.es](https://explorabl.es) — curated explorable catalog.
- Nicky Case — [ncase.me](https://ncase.me) — interactive essay design.
- [Stripe docs](https://stripe.com/docs) — info density done well.
- [Vercel design](https://vercel.com/design) — modern developer-tool aesthetic.

### Appendix C — Tech constraints for designers

- Next.js 14 App Router (SSR; screens are server-first, interactivity is islands).
- Tailwind v4 CSS-first tokens (see `src/app/globals.css`).
- Framer Motion for animations (has `layout`, `layoutId`, `AnimatePresence`).
- Zustand for state — the `useVisualizerStore` (step state) and `useProgressStore` (streak, scores) are already in place.
- No runtime CSS-in-JS. Styling is Tailwind utility classes + the global CSS custom properties.
- Every topic page is statically generated at build; design should assume fast first paint.

### Appendix D — Glossary

- **Hub** — subject-level landing page (`/quant`, `/polity`, …).
- **Topic page** — subject + topic (`/quant/percentage`, `/polity/fundamental-rights`).
- **Visualizer** — bespoke interactive surface (`/polity/articles`, `/quant/geometry`).
- **Step solver** — the Quant/Reasoning animated worked-example component.
- **Tabs** — the three-panel content shape per topic (Concept/Tricks/Problems or Notes/Revision/Practice).
- **Practice session** — an MCQ run through a topic's questions.
- **Digest** — a day's current-affairs content.

---

*End of UX PRD v1. Questions, pushback, or alternate directions: ping Sunny directly or comment inline.*
