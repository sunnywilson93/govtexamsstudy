# Legal Audit & Content Improvement Design

**Date:** 2026-03-20
**Status:** Approved
**Priority:** Legal cleanup first, then gap-filling

## Context

govtexamsstudy has ~3.9M words across 7 subjects (quant 31, reasoning 15, polity 50, history 50, geography 50, economics 50, science 2). Content is AI-generated (Claude/GPT), reviewed by the author. The platform is free + ads (Google AdSense + GA4), targeting Indian government exam aspirants (UPSC, SSC, IBPS, RRB). No auth — cookie-based progress tracking only.

**Four legal risk areas identified:**
1. **India map depiction** — criminal offense under Criminal Law (Amendment) Act 1961 for incorrect boundaries
2. **Exam question copyright** — risk of reproducing exact PYQ wording from published papers
3. **Textbook phrasing** — AI output may echo Laxmikanth, R.S. Aggarwal, NCERT prose
4. **Data privacy** — GA4 + AdSense + cookies require DPDPA 2023 compliance and IT Act 2000 provisions

## Approach

Targeted audit + surgical fixes. Not a full rewrite. Focus on areas with actual legal exposure.

---

## Section 1: Remove Geography Map References (Criminal Risk Elimination)

The geography map visualizer was never fully implemented — no map components, route, or data files exist. However, residual type definitions and references remain.

### Verify and clean up
- Confirm no map components exist in `src/components/visualizers/geography/` (directory is empty or absent)
- Confirm no `src/app/geography/map/` route exists
- Confirm no `india-states.ts` or `rivers.ts` in `src/data/geography/`
- Remove map-related type definitions from `src/types/geography.ts` (`IndiaState`, `MapLayer`, `GeoFeature` if present)
- Remove any map references from geography hub page and layout sidebar
- Verify `src/app/sitemap.ts` has no `/geography/map` entry

### Keep untouched
- All 50 geography topic pages (text-based, no legal risk)
- Geography concepts, revision, problems data files
- Geography practice arena integration

---

## Section 2: MCQ / Problem Content Audit (Copyright Risk)

### Legal basis
- The Indian Constitution, legislation, court judgments, government data, and official statistics are **public domain** — quoting them verbatim is legal
- **Copyrightable:** textbook explanations (Laxmikanth's commentary, NCERT prose, R.S. Aggarwal's problem formulations), coaching material
- **Not copyrightable:** facts, constitutional articles, mathematical formulas, historical events, geographic data

### 2a. Structural originality check
- Every MCQ must have original question text — not copy-pasted from any published paper
- Questions testing the same concept are fine (can't copyright "What is Article 21?"), but exact wording, option ordering, and distractor choices must be our own
- Sampling strategy: spot-check **10 random problem files per subject** across polity, history, geography, economics (40 files total). For quant/reasoning, check 5 each (10 files). Total: **50 files sampled**

### 2b. Remove all "PYQ" branding
The codebase has 17 files referencing "PYQ". Full rename scope:
- `src/components/visualizers/shared/SubjectPYQSolver.tsx` → `SubjectPracticeSolver.tsx`
- `src/components/visualizers/shared/__tests__/SubjectPYQSolver.test.tsx` → `SubjectPracticeSolver.test.tsx`
- `src/components/visualizers/history/HistoryPYQSolver.tsx` → `HistoryPracticeSolver.tsx`
- `src/components/visualizers/history/__tests__/HistoryPYQSolver.test.tsx` → `HistoryPracticeSolver.test.tsx`
- `src/components/visualizers/shared/SubjectTopicTabs.tsx` — rename tab label from "PYQ Practice" to "Practice", tab id from `'pyq'` to `'practice'`
- `src/components/visualizers/history/HistoryTopicTabs.tsx` — same tab rename
- All 4 subject `[topic]/page.tsx` files (polity, history, geography, economics) — update imports
- All 4 subject hub `page.tsx` files — update any PYQ references
- Grep for any remaining `PYQ` or `pyq` references and update

### 2c. Quant & Reasoning (lower risk)
- Math problems can't be copyrighted. Step-by-step solution text is where risk lives
- Spot-check 5 trick files per subject for phrasing that mirrors R.S. Aggarwal's distinctive explanations

---

## Section 3: Content Quality & Originality Pass

### 3a. Establish a "govtexamsstudy voice"
- **Concise and exam-focused** — every explanation ties back to "how this gets asked in exams"
- **Visual-first language** — "picture this as...", "think of it like..." (matches platform identity)
- **No academic prose** — short sentences, direct, Hindi-English mix where natural for the audience
- **Mnemonic-heavy** — original memory tricks, not recycled coaching ones

Document this voice guide in `docs/content-style-guide.md` so it can be referenced during rewrites and future content creation.

### 3b. Scoped rewrite — keyIdea and description fields only
Full rewrite of all 3.9M words is infeasible. Scope the originality pass to:
- **`description`** field in concept files — the main prose that explains the topic
- **`keyIdea`** field — the one-liner summary
- **`notes[].content`** sections — the detailed explanatory prose (polity/history/geography/economics)
- Leave revision bullets, problem text, and formula strings untouched (these are factual, low risk)

### 3c. Subject-by-subject priority

| Subject | Topics | Files to Review | Risk Level | Action |
|---------|--------|----------------|-----------|--------|
| Polity | 50 | 50 concept files | **High** | Rewrite description + keyIdea + notes in our voice. Keep constitutional quotes verbatim |
| Economics | 50 | 50 concept files | Moderate | Rewrite policy analysis sections |
| History | 50 | 50 concept files | Moderate | Check for NCERT-style phrasing, rewrite where found |
| Geography | 50 | 50 concept files | Low | Geographic facts aren't copyrightable, but rewrite prose that reads like NCERT |
| Quant | 31 | 31 concept files | Low | Ensure trick explanations are original voice |
| Reasoning | 15 | 15 concept files | Low | Same as quant |
| Science | 2 | 0 | None | Public domain reference data |

### 3d. Acceptance criteria
A rewritten section is "original enough" when:
- It does not use the same sentence structure as the source textbook for >2 consecutive sentences
- It includes our platform-specific framing ("in SSC CGL, this appears as...", "visualize this as...")
- It reads distinctly from Laxmikanth/NCERT when placed side by side

---

## Section 4: Legal Safeguards (Disclaimers, Privacy & Attribution)

### 4a. Terms & Disclaimer page (`/terms`)
- "All content on this platform is original and created for educational purposes"
- "Constitutional text, legislation, and government data are quoted from public domain sources"
- "Practice questions are original compositions. They are not reproductions of any official examination paper"
- "This platform is not affiliated with UPSC, SSC, IBPS, or any government examination body"
- Takedown procedure per IT Act 2000 Section 79 + IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021 — include grievance officer email

### 4b. Privacy Policy page (`/privacy`)
Required under DPDPA 2023 and IT Act 2000 (IT Rules 2011, Rule 4). Must cover:
- What data is collected: cookies (progress tracking), Google Analytics (IP, device fingerprint, page views), Google AdSense (ad tracking cookies)
- Purpose: progress tracking (cookies), analytics (GA4), ad serving (AdSense)
- User rights under DPDPA 2023: right to access, correct, erase personal data
- Data retention: cookie expiry (1 year for progress cookies)
- No PII stored server-side (no auth, no accounts)
- Contact for data requests

### 4c. Cookie consent banner
Required for DPDPA 2023 compliance since GA4 and AdSense set tracking cookies:
- Simple "Accept / Decline" bar at bottom of page
- If declined: do not load GA4 scripts or AdSense
- Store consent choice in a cookie (ironic but standard)
- Component: `src/components/ui/CookieConsent.tsx`
- Gate the GA4 `<Script>` tags in `layout.tsx` behind consent state

### 4d. Practice arena disclaimer
- One-liner above MCQ sessions: "Original practice questions — not from any official exam paper"

### 4e. Footer attribution
- "Constitutional text sourced from legislative.gov.in"
- "Budget data sourced from indiabudget.gov.in"
- Links to official government sources strengthen our position

### 4f. Exam body trademark usage
- Using UPSC, SSC, IBPS names for descriptive/SEO purposes is permissible under nominative fair use
- Do NOT use official logos, seals, or imply endorsement
- Verify no official logos are used anywhere in the codebase

### 4g. Remove textbook references
- Grep `src/data/` for mentions of: "Laxmikanth", "R.S. Aggarwal", "NCERT", "Arihant", "Lucent", "Tata McGraw", "S. Chand", "Pearson", "Byju", "Unacademy", or any publisher/author/coaching name
- Remove or replace with generic references, or cite the original government source

---

## Section 5: Gap-Filling (Post-Legal Cleanup)

### 5a. Science expansion
- Add concept/revision/problems structure matching other subjects
- **Definitive topic list** (15 topics, to be finalized in a separate design spec before implementation):
  1. physics-basics, 2. chemistry-basics, 3. biology-basics, 4. space-isro, 5. environment-ecology, 6. science-tech-current, 7. diseases-health, 8. agriculture-science, 9. nuclear-defense, 10. computer-it, 11. genetics-evolution, 12. nutrition-food-science, 13. everyday-science, 14. inventions-discoveries, 15. science-organizations
- Wire into Practice Arena
- Exact topic list deferred to a separate mini-design to align with actual UPSC/SSC syllabus

### 5b. Practice Arena completion
- Quant — generate MCQ-format problems, wire into practice
- Reasoning — MCQ-format questions for practice alongside visualizers
- Science — wire once 5a is done
- Result: all 7 subjects available in Practice Arena

### 5c. Geography map replacement
- **Decision: skip entirely** — no map visualizer, no schematic replacement
- The 50 text-based topics cover geography thoroughly
- Revisit only if users specifically request it, and only with non-boundary visualizations

### 5d. Data freshness review
- Budget data currently says "Union Budget 2024-25" — verify if this should be updated
- Check all government data files for currency and accuracy
- Establish a process: review government data files at the start of each fiscal year

---

## Execution Order

1. **Section 1** — Verify and clean up geography map remnants (1 session)
2. **Section 4g** — Grep and remove textbook references (1 session)
3. **Section 2b** — Rename all PYQ references (1 session)
4. **Section 4a-f** — Add /terms, /privacy, cookie consent, disclaimers (2 sessions)
5. **Section 2a,c** — MCQ audit across 50 sample files (2-3 sessions)
6. **Section 3** — Content originality pass, scoped to description/keyIdea/notes (8-12 sessions, polity first)
7. **Section 5a** — Science expansion (3-4 sessions)
8. **Section 5b** — Practice Arena completion (2-3 sessions)
9. **Section 5d** — Data freshness review (1 session)

**Total estimated effort:** 20-28 sessions

---

## What's NOT in scope

- Full 3.9M word rewrite (scoped to description/keyIdea/notes fields only)
- New interactive visualizers for GA subjects (separate design)
- India map implementation (removed entirely)
- Auth, community, AI features (Phase 2+)
- Dashboard rebuild (removed in prior commit, separate decision)
- AdSense publisher ID setup (operational, not design work — placeholder slot IDs need replacing before go-live)
