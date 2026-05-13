# GovtExamsStudy Product Requirements Document

Last updated: 2026-04-24

## 1. Product Summary

GovtExamsStudy is a free, web-native study platform for Indian government exam aspirants. The core idea is to make exam preparation explorable: learners should understand topics through interactive visualizers, structured notes, revision aids, and practice questions instead of only reading static PDFs or watching videos.

The current product is a Next.js App Router application covering seven subjects: Quantitative Aptitude, Reasoning & Logic, Indian Polity, Indian History, Indian Geography, Indian Economy, and General Science. It also includes Daily Current Affairs, Practice Arena, Exam Intelligence, SEO/legal pages, analytics/ad plumbing, and structured content data stored directly in git.

## 2. Problem Statement

Government exam aspirants in India study large syllabi across quant, reasoning, general studies, current affairs, and exam-specific patterns. Most free resources are fragmented, static, ad-heavy, or video-first, making it hard for learners to build mental models, revise quickly, and practice topic-wise.

GovtExamsStudy addresses this by turning high-frequency exam topics into structured, interactive web experiences. The product should help aspirants move from passive reading to active understanding, especially for topics where visual relationships, steps, timelines, flows, or diagrams make concepts easier to retain.

## 3. Target Users

Primary users:

- SSC, Banking, Railway, Defence, Teaching, and State PSC aspirants who need free topic-wise preparation.
- UPSC and CSAT aspirants who need quick visual revision for general studies, reasoning, quant, and current affairs.
- Repeat learners who revisit topics daily and need lightweight progress, streaks, and practice feedback without account creation.

Secondary users:

- Teachers, mentors, and content creators who want structured topic references.
- Search visitors arriving from topic-specific SEO pages such as polity articles, economics concepts, or quant formulas.

## 4. Value Proposition

GovtExamsStudy should be positioned as:

- Free: no paid courses, no paywall, no login requirement in Phase 1.
- Visual-first: animated solvers, diagrams, timelines, treemaps, family trees, Venn diagrams, policy flows, and interactive explorers.
- Exam-focused: every topic is tied to SSC, UPSC, Banking, Railway, Defence, or teaching exam relevance.
- Structured: each content area follows predictable topic, revision, and practice models.
- Web-native: content is navigable, searchable by URL, SEO-indexable, and usable directly in the browser.

## 5. Business Model

The intended business model is free access funded by ads. The current implementation loads Google AdSense only in production when `NEXT_PUBLIC_ADSENSE_CLIENT` exists, and renders ad units on Practice pages and quiz result screens.

Ad placement principle:

- Ads are allowed on `/practice`, `/practice/[subject]`, and score/result surfaces.
- Ads should not appear inside core visualizers or learning explanation flows.
- Ad slot IDs are currently placeholders and must be replaced before production launch.

## 6. Goals

User goals:

- Learners can choose a subject and reach a useful learning page within two clicks.
- Learners can study a topic through notes/concepts, revision shortcuts, and practice questions.
- Learners can use animated visualizers for topics where steps, relationships, or spatial reasoning matter.
- Learners can practice MCQs and get immediate explanations and a score.
- Learners can review daily current affairs filtered by exam-relevant categories.

Business goals:

- Build organic search reach through topic-level pages and daily current affairs pages.
- Keep the platform free while monetizing practice workflows through ads.
- Create a differentiated product category: interactive visual learning for government exams.
- Grow reusable structured data assets in git without depending on a CMS.

Success metrics to track:

- Organic clicks and indexed pages by subject/topic.
- Start-to-topic click-through rate from home and subject hubs.
- Practice session completion rate.
- Return visits per user and daily active repeat usage.
- Current affairs archive visits and latest-digest engagement.
- Ad revenue per practice session without harming learning UX.

## 7. Non-Goals for Phase 1

- No login or account system.
- No paid subscriptions.
- No CMS or admin panel.
- No official-exam affiliation claims.
- No user-generated content.
- No personalized server-side recommendations.
- No ads inside visualizer content.
- No high-stakes score prediction or guaranteed exam outcome claims.

## 8. Current Product Surface

### 8.1 Home

Route: `/`

Implemented:

- Hero positioning around "India's First Visual Learning Platform".
- Subject bento grid for seven subjects.
- Featured visualizers for Quant, Polity, and Science.
- How-it-works section.
- CTAs to subject grid and Practice Arena.

Primary requirement:

- The first screen must communicate the core differentiation: not PDF, not video, but interactive visual learning.

### 8.2 Subject Hubs

Shared pattern:

- Most subject hubs use `SubjectHubPage`.
- Hubs group topics into syllabus sections.
- Cards show whether a route is a tabbed learning page or a visualizer.

Implemented hubs:

| Subject | Route | Current coverage |
| --- | --- | --- |
| Quantitative Aptitude | `/quant` | 31 topic pages plus geometry visualizer |
| Reasoning & Logic | `/reasoning` | 15 tab topics plus 12 visualizer routes |
| Indian Polity | `/polity` | 50 topic pages plus 3 constitutional visualizers |
| Indian History | `/history` | 50 topic pages plus timeline and cause-effect visualizer |
| Indian Geography | `/geography` | 50 topic pages |
| Indian Economy | `/economics` | 50 topic pages plus 2 economics visualizers |
| General Science | `/science` | Periodic table and human body explorers |

### 8.3 Topic Learning Pages

Quant topic pages:

- Route pattern: `/quant/[topic]`
- Model: Concept, Tricks, Problems
- Data: `src/data/quant/concepts`, `src/data/quant/tricks`, `src/data/quant/problems`
- UX: `TopicTabs`, `ConceptPanel`, `TricksPanel`, `StepSolver`

Reasoning tab pages:

- Route pattern: `/reasoning/[topic]`
- Model: Concept, Tricks, Problems
- Data: `src/data/reasoning/concepts`, `tricks`, `problems`
- UX: `ReasoningTopicTabs`, `ReasoningConceptPanel`, `ReasoningTricksPanel`, `ReasoningStepSolver`

General studies topic pages:

- Routes: `/polity/[topic]`, `/history/[topic]`, `/geography/[topic]`, `/economics/[topic]`
- Model: Notes, Revision, Practice
- Data: subject-specific `concepts`, `revision`, and `problems` folders
- UX: shared `SubjectTopicTabs` for Polity, Geography, Economics; History uses its own history-specific tabs.

### 8.4 Visualizers

Current visualizer categories:

- Quant: geometry visualizer, animated step solver inside problem tabs.
- Reasoning: seating, syllogism, series, blood relations, direction-distance, coding-decoding, puzzles, mirror/water images, cubes/dice, paper folding, clock reasoning, counting figures.
- Polity: article explorer, amendment timeline, landmark case explorer.
- History: timeline, freedom movement cause-effect chains.
- Economics: policy flow diagrams, budget treemap.
- Science: periodic table, human body systems explorer.

Core visualizer requirements:

- Every step must be independently renderable.
- Step state should be controlled through the shared visualizer store and `StepController` where applicable.
- Visualizers should use animation to clarify logic, not as decorative motion.
- Reduced motion preference must be respected globally.

### 8.5 Practice Arena

Routes:

- `/practice`
- `/practice/[subject]`
- `/practice/[subject]/[topic]`

Implemented:

- Practice subject grid for seven subjects.
- Topic lists for Polity, History, Geography, and Economics via a registry in `src/data/practice/subject-problems.ts`.
- Legacy practice topics for Quant, Reasoning, and Science.
- Practice sessions with progress bar, instant feedback, delayed auto-advance, final score summary, streak update, and score recording.
- Ads on practice hub, subject topic lists, and score summary.

Current limitation:

- Quant, Reasoning, and Science practice coverage is not wired to the same broad registry used by Polity, History, Geography, and Economics.
- Progress is stored in Zustand state but is not currently persisted with Zustand middleware, cookies, or localStorage.

### 8.6 Daily Current Affairs

Routes:

- `/current-affairs`
- `/current-affairs/[date]`

Implemented:

- 51 daily digest files from 2026-03-05 through 2026-04-24.
- Latest digest section.
- Archive listing.
- Per-day detail pages.
- Client-side category filtering through `DigestFilter`.
- Source name, source URL, category, and exam relevance fields.

Current limitation:

- `src/app/sitemap.ts` has a hardcoded current affairs list that only includes dates through 2026-04-04, while the data registry includes newer digests through 2026-04-24.

### 8.7 Exam Intelligence

Routes:

- `/exams`
- `/exams/[examId]`

Implemented:

- Exam directory grouped by category: UPSC, SSC, Banking, Railway, Defence, Teaching.
- 10 exam detail datasets: UPSC CSE, SSC CGL, SSC CHSL, IBPS PO, SBI PO, RRB NTPC, RRB Group D, CDS, NDA, CTET.
- Detail pages include official website links, notification links where present, eligibility, stages, syllabus, cutoff tables, and notes.

Product requirement:

- Exam pages must stay informational and source-led. They should not imply affiliation with official exam bodies.

### 8.8 SEO, Analytics, Legal, and Privacy

Implemented:

- Root metadata with India-focused keywords and `en-IN` locale.
- XML sitemap generation.
- `robots.ts` allowing all pages except `/api/`.
- JSON-LD WebSite and Course schema.
- Terms and Privacy pages.
- GA4 configured with measurement ID `G-GPQEH3V7KN`.
- AdSense script loading when production and `NEXT_PUBLIC_ADSENSE_CLIENT` are set.
- Cookie consent banner in production.

Current limitations:

- Consent preference does not currently gate GA4 or AdSense script loading; production scripts load before checking consent.
- JSON-LD says Reasoning has 14 topics, but the current app exposes 27 reasoning routes.
- JSON-LD includes a SearchAction for `/?q=...`, but no search UI or search route exists.

## 9. Data and Content Model

The product intentionally avoids a CMS. Content is stored as TypeScript data files in `src/data`, typed through `src/types`, and versioned with code.

Current content inventory:

| Area | Data inventory |
| --- | --- |
| Quant | 31 concept files, 31 trick files, 31 problem files |
| Reasoning | 15 concept files, 15 trick files, 15 problem files, 9 visualizer data files, plus seating/syllogism/series datasets |
| Polity | 50 concepts, 50 revision files, 50 problem files, articles, amendments, landmark cases, parts |
| History | 50 concepts, 50 revision files, 50 problem files, historical events, periods, cause-effect chains |
| Geography | 50 concepts, 50 revision files, 50 problem files |
| Economics | 50 concepts, 50 revision files, 50 problem files, budget dataset, policy flow dataset |
| Science | Element dataset and body systems dataset |
| Current Affairs | 51 date-based digest files plus registry |
| Exams | 10 exam datasets plus index |

Content requirements:

- Topic routes must be generated from a single source of truth where possible.
- Every topic page must have meaningful metadata and canonical URL.
- Practice questions must be original educational questions, not copied official papers.
- General studies topics should follow Notes, Revision, Practice.
- Quant and Reasoning topics should follow Concept, Tricks, Problems.
- Current affairs items should include source URL and exam relevance.

## 10. Functional Requirements

### P0 - Required for Launch

- Users can browse all seven subjects from home and header navigation.
- Each subject hub has working links to every visible topic card.
- Every topic route renders without missing data or 404 unless intentionally unsupported.
- Quant and Reasoning tab topics render concept/trick/problem tabs.
- Polity, History, Geography, and Economics topic pages render notes/revision/practice tabs.
- Visualizers expose manual step navigation and do not depend on video playback.
- Practice sessions provide immediate feedback, explanations, score summary, retry, and progress recording.
- Ad units appear only on practice-related surfaces.
- Current affairs latest page and date archive render from data registry.
- Exam directory and detail pages render from exam data.
- SEO metadata, sitemap, robots, and JSON-LD are internally consistent with current routes.
- Legal pages clearly state no official affiliation and original practice-question policy.
- Consent must gate analytics and ads before production launch.
- Browser progress must persist across reloads if the product claims local progress.

### P1 - Strong Follow-Ups

- Add a real progress dashboard or remove dashboard references from product copy.
- Expand Practice Arena registry for Quant, Reasoning, and Science.
- Add keyboard controls to `StepController`.
- Add search or remove JSON-LD SearchAction until search exists.
- Generate sitemap route lists from actual registries instead of hardcoded arrays.
- Add current affairs freshness workflow and validation.
- Improve visualizer coverage for Geography, where topic pages exist but map-style visualizers are not implemented.
- Add stronger data-quality checks for every content folder: counts, duplicate IDs, missing topics, empty explanations, and stale exam-year references.

### P2 - Future Considerations

- Optional account sync across devices.
- Personalized revision based on weak topics.
- Spaced repetition scheduler.
- Exam-specific learning paths.
- Bookmarking and saved topics.
- Full-text search across notes, topics, current affairs, and exams.
- Admin/content workflow if git-only content becomes too slow.
- Multilingual or Hinglish variants if user research supports it.

## 11. User Stories

- As an SSC aspirant, I want to open Quant and study percentage through concept, tricks, and step-by-step problems so that I can solve common arithmetic questions faster.
- As a banking aspirant, I want reasoning puzzles to animate each clue so that I can learn the deduction order instead of memorizing final arrangements.
- As a UPSC aspirant, I want Polity topics to show notes, revision mnemonics, and practice questions so that I can revise both prelims facts and conceptual links.
- As a current affairs learner, I want a daily digest with category filters and official source links so that I can focus only on exam-relevant news.
- As a beginner, I want subject hubs to clearly group the syllabus so that I know where to start.
- As a repeat learner, I want my practice score and streak to persist locally so that I can track consistency without creating an account.
- As a learner using a visualizer, I want every step to be navigable manually so that I can pause, go back, and understand the logic.
- As a search visitor, I want topic pages to load directly with useful metadata and canonical content so that I can study without needing to navigate from home.

## 12. UX Principles

- The learning experience should start immediately; no landing-page-only flow.
- Subject pages should feel like usable syllabus dashboards, not marketing pages.
- Visualizers should be primary learning tools, not decorative demos.
- Practice ads should be clearly separated from learning content.
- Navigation should stay predictable across subjects.
- Mobile users should have accessible topic navigation through grouped selects or compact nav.
- Motion should teach; it should be disabled for reduced-motion users.

## 13. Technical Architecture

Current stack:

- Next.js 14 App Router.
- TypeScript with strict mode and `@/*` alias.
- Tailwind CSS v4 through `globals.css`.
- Framer Motion for animations.
- Zustand + Immer for client-side visualizer and progress state.
- Lucide React icons.
- Vitest + React Testing Library for component/unit tests.
- Playwright dependency present for E2E testing.
- Husky configured through `prepare`.

Current shared primitives:

- `SubjectLayout` for subject shell, breadcrumb, desktop sidebar, and mobile topic navigation.
- `SubjectHubPage` for syllabus hub sections.
- `SubjectTopicTabs` for general-studies topic pages.
- `StepController` for step navigation.
- `PracticeSession`, `MCQCard`, and `ScoreSummary` for practice flow.
- `AdUnit` and `AD_SLOTS` for ad placement.

Security/privacy settings:

- Security headers configured in `next.config.js`.
- `poweredByHeader` disabled.
- Privacy and terms pages implemented.
- Consent and progress persistence need implementation alignment before launch.

## 14. Measurement Plan

Recommended events:

- `subject_hub_viewed`
- `topic_page_viewed`
- `visualizer_started`
- `visualizer_step_changed`
- `practice_subject_selected`
- `practice_topic_started`
- `practice_question_answered`
- `practice_completed`
- `current_affairs_date_viewed`
- `current_affairs_filter_used`
- `exam_detail_viewed`

Recommended dimensions:

- subject
- topic
- exam category
- route type
- visualizer type
- device category
- consent state

Initial targets:

- 40% of home visitors click into a subject hub.
- 25% of subject hub visitors open a topic page.
- 60% of practice starters complete the session.
- 30% of current affairs visitors open at least one date detail page.
- Less than 5% topic-page 404 rate from internal links.

## 15. Launch Readiness Checklist

- Run full typecheck/build.
- Run Vitest suite.
- Verify all visible hub links resolve.
- Verify every sitemap URL renders.
- Update sitemap current affairs list from data registry.
- Update JSON-LD topic counts and remove/implement SearchAction.
- Replace placeholder AdSense slots.
- Gate GA4 and AdSense behind consent.
- Persist progress state or revise product/privacy copy.
- Decide whether `/dashboard` is in Phase 1; implement it or remove references.
- Run content audit for duplicate IDs, missing sources, questionable "previous year" wording, and legal disclaimers.
- Check mobile layouts for subject hub density and visualizer controls.

## 16. Known Gaps and Product Risks

- Progress promise mismatch: privacy copy says progress is saved in localStorage/cookies, but the current progress store is in-memory Zustand state.
- Consent risk: production analytics and ad scripts do not currently wait for cookie consent.
- SEO drift: sitemap and JSON-LD are partly hardcoded and already stale against current route/data coverage.
- Practice coverage imbalance: general studies subjects have broad practice registries, while Quant, Reasoning, and Science use smaller legacy lists.
- Dashboard gap: architecture notes mention `/dashboard`, but no dashboard route is currently present.
- Geography differentiation gap: Geography has strong notes/revision/practice coverage but no interactive map visualizer yet.
- Content maintenance risk: large hand-import registries across dynamic route files can drift from data folders.
- Search schema mismatch: JSON-LD advertises search capability that the app does not implement.

## 17. Recommended Next Product Decisions

1. Decide the Phase 1 launch promise: full visual platform or content-plus-visualizers MVP.
2. Fix compliance blockers first: consent gating, privacy copy alignment, legal wording, ad slot configuration.
3. Make route/data registries single-source where possible to prevent sitemap and metadata drift.
4. Choose whether progress tracking is required for launch; if yes, persist it locally and add the dashboard.
5. Expand Practice Arena for Quant, Reasoning, and Science to match the rest of the subject coverage.
6. Prioritize one Geography visualizer if the visual-learning brand promise needs every subject to have at least one explorable visual surface.
