# Legal Audit & Content Improvement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** De-risk the platform legally (map removal, PYQ branding, privacy compliance, textbook reference cleanup) then improve content quality and fill gaps (science expansion, practice arena completion).

**Architecture:** Surgical edits to existing files — no new frameworks, no restructuring. Legal cleanup tasks are independent and can run in parallel. Content rewriting is sequential (polity first, then economics, history, geography, quant/reasoning).

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, Vitest + React Testing Library

**Spec:** `docs/superpowers/specs/2026-03-20-legal-audit-and-content-improvement-design.md`

---

## Phase 1: Legal Risk Elimination (Tasks 1-5)

### Task 1: Remove Geography Map Type Definitions

**Files:**
- Modify: `src/types/geography.ts` (delete entire file — all 3 types are map-related)
- Verify: `src/app/geography/map/` does not exist
- Verify: `src/data/geography/india-states.ts` does not exist
- Verify: `src/data/geography/rivers.ts` does not exist
- Verify: `src/components/visualizers/geography/` is empty or absent

- [ ] **Step 1: Verify no map route, data, or components exist**

Run: `ls src/app/geography/map/ 2>/dev/null; ls src/data/geography/india-states.ts 2>/dev/null; ls src/data/geography/rivers.ts 2>/dev/null; ls src/components/visualizers/geography/ 2>/dev/null`
Expected: All four commands return errors or empty — nothing exists.

- [ ] **Step 2: Check if geography.ts types are imported anywhere**

Run: `grep -r "MapLayer\|IndiaState\|GeoFeature\|LayerType" src/ --include="*.ts" --include="*.tsx" | grep -v "types/geography.ts"`
Expected: No matches (types are defined but unused).

- [ ] **Step 3: Delete the geography types file**

Delete `src/types/geography.ts` entirely. It contains only map-related types (`MapLayer`, `GeoFeature`, `IndiaState`, `LayerType`) that are unused.

- [ ] **Step 4: Verify sitemap has no /geography/map entry**

Read `src/app/sitemap.ts` and confirm no `/geography/map` URL is generated. The sitemap only enumerates topic pages.

- [ ] **Step 5: Verify geography hub and layout have no map links**

Read `src/app/geography/page.tsx` and `src/app/geography/layout.tsx` — confirm no link to `/geography/map`.

- [ ] **Step 6: Run build to confirm no breakage**

Run: `npx next build 2>&1 | tail -20`
Expected: Build succeeds with no import errors.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "chore(legal): remove unused geography map type definitions

Eliminates residual MapLayer, GeoFeature, IndiaState types.
No map components/routes/data existed — types were orphaned."
```

---

### Task 2: Rename All PYQ References to Practice

**Files:**
- Rename: `src/components/visualizers/shared/SubjectPYQSolver.tsx` → `SubjectPracticeSolver.tsx`
- Rename: `src/components/visualizers/shared/__tests__/SubjectPYQSolver.test.tsx` → `SubjectPracticeSolver.test.tsx`
- Rename: `src/components/visualizers/history/HistoryPYQSolver.tsx` → `HistoryPracticeSolver.tsx`
- Rename: `src/components/visualizers/history/__tests__/HistoryPYQSolver.test.tsx` → `HistoryPracticeSolver.test.tsx`
- Modify: `src/components/visualizers/shared/SubjectTopicTabs.tsx` (tab id + label + import)
- Modify: `src/components/visualizers/history/HistoryTopicTabs.tsx` (tab id + label + import)
- Modify: `src/components/visualizers/shared/__tests__/SubjectTopicTabs.test.tsx` (test assertions)
- Modify: `src/components/visualizers/history/__tests__/HistoryTopicTabs.test.tsx` (test assertions)
- Modify: 4x `src/app/{polity,history,geography,economics}/[topic]/page.tsx` (metadata strings)
- Modify: 4x `src/app/{polity,history,geography,economics}/page.tsx` (hub page strings)
- Modify: `src/components/JsonLd.tsx` (schema descriptions)

- [ ] **Step 1: Rename the component files**

```bash
cd src/components/visualizers
mv shared/SubjectPYQSolver.tsx shared/SubjectPracticeSolver.tsx
mv shared/__tests__/SubjectPYQSolver.test.tsx shared/__tests__/SubjectPracticeSolver.test.tsx
mv history/HistoryPYQSolver.tsx history/HistoryPracticeSolver.tsx
mv history/__tests__/HistoryPYQSolver.test.tsx history/__tests__/HistoryPracticeSolver.test.tsx
```

- [ ] **Step 2: Update component internals — SubjectPracticeSolver.tsx**

In `src/components/visualizers/shared/SubjectPracticeSolver.tsx`:
- Rename interface `SubjectPYQSolverProps` → `SubjectPracticeSolverProps`
- Rename export `SubjectPYQSolver` → `SubjectPracticeSolver`

- [ ] **Step 3: Update component internals — HistoryPracticeSolver.tsx**

In `src/components/visualizers/history/HistoryPracticeSolver.tsx`:
- Rename interface `HistoryPYQSolverProps` → `HistoryPracticeSolverProps`
- Rename export `HistoryPYQSolver` → `HistoryPracticeSolver`

- [ ] **Step 4: Update SubjectTopicTabs.tsx**

In `src/components/visualizers/shared/SubjectTopicTabs.tsx`:
- Change import: `'./SubjectPYQSolver'` → `'./SubjectPracticeSolver'`
- Change type: `'notes' | 'revision' | 'pyq'` → `'notes' | 'revision' | 'practice'`
- Change tab definition: `{ id: 'pyq', label: 'PYQ Practice' }` → `{ id: 'practice', label: 'Practice' }`
- Change render: `activeTab === 'pyq' && <SubjectPYQSolver` → `activeTab === 'practice' && <SubjectPracticeSolver`

- [ ] **Step 5: Update HistoryTopicTabs.tsx**

Same changes as Step 4 but in `src/components/visualizers/history/HistoryTopicTabs.tsx`:
- Import: `'./HistoryPYQSolver'` → `'./HistoryPracticeSolver'`
- Type: `'pyq'` → `'practice'`
- Tab: `{ id: 'pyq', label: 'PYQ Practice' }` → `{ id: 'practice', label: 'Practice' }`
- Render: `activeTab === 'pyq' && <HistoryPYQSolver` → `activeTab === 'practice' && <HistoryPracticeSolver`

- [ ] **Step 6: Update test files — SubjectPracticeSolver.test.tsx**

In `src/components/visualizers/shared/__tests__/SubjectPracticeSolver.test.tsx`:
- Change import to `'../SubjectPracticeSolver'`
- Replace all `SubjectPYQSolver` → `SubjectPracticeSolver` in describe/render calls

- [ ] **Step 7: Update test files — HistoryPracticeSolver.test.tsx**

In `src/components/visualizers/history/__tests__/HistoryPracticeSolver.test.tsx`:
- Change import to `'../HistoryPracticeSolver'`
- Replace all `HistoryPYQSolver` → `HistoryPracticeSolver` in describe/render calls

- [ ] **Step 8: Update test files — SubjectTopicTabs.test.tsx**

In `src/components/visualizers/shared/__tests__/SubjectTopicTabs.test.tsx`:
- Change `'PYQ Practice'` → `'Practice'` in all `getByRole('button', { name: ... })` calls
- Update test names: `'renders PYQ Practice tab button'` → `'renders Practice tab button'`
- Update test names: `'switches to PYQ Practice tab on click'` → `'switches to Practice tab on click'`

- [ ] **Step 9: Update test files — HistoryTopicTabs.test.tsx**

Same changes as Step 8 in `src/components/visualizers/history/__tests__/HistoryTopicTabs.test.tsx`.

- [ ] **Step 10: Update metadata strings in all 4 [topic]/page.tsx files**

In each of `src/app/{polity,history,geography,economics}/[topic]/page.tsx`:
- Replace all `PYQs` → `Practice` in metadata title/description strings
- Replace all `PYQ` → `Practice` in keywords arrays
- Example: `'Indian Polity — Notes, Revision & PYQs'` → `'Indian Polity — Notes, Revision & Practice'`

- [ ] **Step 11: Update metadata strings in all 4 hub page.tsx files**

In each of `src/app/{polity,history,geography,economics}/page.tsx`:
- Replace `PYQs` → `Practice` in metadata title/description
- Replace `PYQ Practice` → `Practice` in card badge text
- Example: `Notes · Revision · PYQs` → `Notes · Revision · Practice`

- [ ] **Step 12: Update JsonLd.tsx**

In `src/components/JsonLd.tsx`:
- Replace 4 occurrences of `PYQs` → `Practice` in schema descriptions

- [ ] **Step 13: Final grep to catch any remaining PYQ references**

Run: `grep -ri "pyq" src/ --include="*.ts" --include="*.tsx"`
Expected: Zero matches.

- [ ] **Step 14: Run tests**

Run: `npx vitest run 2>&1 | tail -30`
Expected: All tests pass.

- [ ] **Step 15: Commit**

```bash
git add -A && git commit -m "chore(legal): rename all PYQ references to Practice

Renames SubjectPYQSolver → SubjectPracticeSolver,
HistoryPYQSolver → HistoryPracticeSolver. Updates all tab labels,
metadata, schema descriptions, and tests. Removes 'Previous Year
Question' branding — all questions are original practice content."
```

---

### Task 3: Remove Textbook/Publisher References from Data Files

**Files:**
- Modify: `src/data/economics/revision/startup-innovation.ts`
- Modify: `src/data/economics/concepts/startup-innovation.ts`
- Modify: `src/data/economics/concepts/digital-economy.ts`
- Modify: `src/data/economics/concepts/fdi-fii.ts`
- Skip: `src/data/history/concepts/non-aligned-movement.ts` (false positive — "Arihant" refers to INS Arihant submarine, not Arihant Publications)
- Modify: `src/data/polity/concepts/fundamental-duties.ts`

- [ ] **Step 1: Read each of the 6 flagged files and identify textbook references**

The grep found these 6 files referencing "Byju's", "Unacademy", "NCERT", or similar. Read each file and identify the exact lines.

- [ ] **Step 2: Edit each file — replace references contextually**

For each file:
- `Byju's ($22B → NCLT)` — this is a factual reference to a company, not a textbook citation. Keep as-is (it's news, not copied content). But verify it's used as a case study example, not as a source attribution.
- `Unacademy (mass layoffs)` — same, factual business reference. Keep.
- `NCERT` — if used as "as per NCERT textbook" or "NCERT states", replace with the actual fact sourced from government data. If used as "NCERT curriculum covers...", keep as descriptive reference.
- Any line that reads like "According to Laxmikanth..." or "As explained in NCERT..." → rewrite to state the fact directly with government source citation.

- [ ] **Step 3: Broader grep for additional publisher names**

Run: `grep -ri "laxmikanth\|aggarwal\|arihant\|lucent\|tata mcgraw\|s\. chand\|pearson\|disha\|kiran\|rakesh yadav\|paramount\|pinnacle" src/data/ --include="*.ts"`
Expected: Zero matches (or flag any found for editing).

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore(legal): clean up textbook/publisher references in data files

Replace source attributions to textbooks with direct factual statements.
Business case study references (Byju's, Unacademy) retained as factual."
```

---

### Task 4: Add Terms, Privacy Policy, and Cookie Consent

**Files:**
- Create: `src/app/terms/page.tsx`
- Create: `src/app/privacy/page.tsx`
- Create: `src/components/ui/CookieConsent.tsx`
- Modify: `src/app/layout.tsx` (gate GA4/AdSense behind consent, add CookieConsent component)
- Modify: `src/components/layout/Footer.tsx` (add Terms/Privacy links + attribution)

- [ ] **Step 1: Create /terms page**

Create `src/app/terms/page.tsx` — server component with static metadata. Content:
- Platform disclaimer (original content, educational purposes)
- Public domain sources (constitutional text, legislation, government data)
- Practice question disclaimer (original compositions, not from official exams)
- No affiliation disclaimer (UPSC, SSC, IBPS, etc.)
- Takedown procedure per IT Act 2000 Section 79 + IT Rules 2021
- Grievance officer contact email
- Exam body trademark notice (names used for descriptive purposes only, no endorsement implied)

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Disclaimer',
  description: 'Terms of use, content disclaimer, and grievance redressal for GovtExamsStudy.',
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-text-primary">Terms &amp; Disclaimer</h1>

      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Content Disclaimer</h2>
          <p>All content on GovtExamsStudy is original and created for educational purposes. Our study materials, explanations, and visualizations are independently authored to help aspirants prepare for government examinations.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Public Domain Sources</h2>
          <p>Constitutional text, legislation, court judgments, and government statistics referenced on this platform are sourced from public domain records including:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Constitutional text — <a href="https://legislative.gov.in" className="text-primary underline" target="_blank" rel="noopener noreferrer">legislative.gov.in</a></li>
            <li>Budget data — <a href="https://indiabudget.gov.in" className="text-primary underline" target="_blank" rel="noopener noreferrer">indiabudget.gov.in</a></li>
            <li>Census data — <a href="https://censusindia.gov.in" className="text-primary underline" target="_blank" rel="noopener noreferrer">censusindia.gov.in</a></li>
            <li>Economic data — <a href="https://mospi.gov.in" className="text-primary underline" target="_blank" rel="noopener noreferrer">mospi.gov.in</a></li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Practice Questions</h2>
          <p>All practice questions on this platform are original compositions designed for exam preparation. They are not reproductions of any official examination paper published by UPSC, SSC, IBPS, RBI, or any other government body.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">No Affiliation</h2>
          <p>GovtExamsStudy is not affiliated with, endorsed by, or officially connected to UPSC, SSC, IBPS, RBI, RRB, or any government examination conducting body. Examination names are used solely for descriptive and informational purposes.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Grievance Redressal</h2>
          <p>In accordance with the Information Technology Act, 2000 (Section 79) and the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, if you believe any content on this platform infringes your intellectual property rights, please contact our Grievance Officer:</p>
          <p className="mt-2 font-mono text-xs">grievance@govtexamsstudy.org</p>
          <p className="mt-2">We will review and respond to valid takedown requests within 72 hours.</p>
        </section>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Create /privacy page**

Create `src/app/privacy/page.tsx` — server component. Content covering DPDPA 2023 and IT Act 2000 requirements:
- Data collected (cookies, GA4, AdSense)
- Purpose of data collection
- User rights under DPDPA 2023
- Cookie policy (types, expiry)
- No PII stored server-side
- Contact for data requests

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data practices for GovtExamsStudy.',
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-text-primary">Privacy Policy</h1>
      <p className="mb-6 text-sm text-text-muted">Last updated: March 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Data We Collect</h2>
          <p>GovtExamsStudy collects minimal data to operate the platform:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li><strong>Progress cookies</strong> — Your study progress, streak data, and topic scores are stored locally in your browser cookies. This data never leaves your device.</li>
            <li><strong>Analytics</strong> — If you consent, Google Analytics 4 collects anonymised usage data (pages visited, session duration, device type) to help us improve the platform.</li>
            <li><strong>Advertising</strong> — If you consent, Google AdSense may set cookies to serve relevant advertisements on practice pages only.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">No Account Data</h2>
          <p>GovtExamsStudy does not require registration or login. We do not collect, store, or process any personal information such as names, email addresses, phone numbers, or identification documents.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Your Rights</h2>
          <p>Under the Digital Personal Data Protection Act, 2023 (DPDPA), you have the right to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Access information about data collected about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Withdraw consent for analytics and advertising cookies at any time by clearing your browser cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Cookies</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li><strong>Essential cookies</strong> — Progress tracking (1-year expiry). These are first-party cookies that never leave your browser.</li>
            <li><strong>Analytics cookies</strong> — Google Analytics (consent required). Collects anonymised usage patterns.</li>
            <li><strong>Advertising cookies</strong> — Google AdSense (consent required). Serves relevant ads on practice pages.</li>
          </ul>
          <p className="mt-2">You can manage cookie preferences via the consent banner shown on your first visit, or by clearing your browser cookies.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Contact</h2>
          <p>For data-related requests or questions about this privacy policy:</p>
          <p className="mt-2 font-mono text-xs">privacy@govtexamsstudy.org</p>
        </section>
      </div>
    </main>
  )
}
```

- [ ] **Step 3: Create CookieConsent component**

Create `src/components/ui/CookieConsent.tsx`:

```tsx
'use client'

import { useState, useEffect } from 'react'

const CONSENT_KEY = 'cookie-consent'

type ConsentState = 'pending' | 'accepted' | 'declined'

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>('pending')

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
    window.location.reload()
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setConsent('declined')
  }

  if (consent !== 'pending') return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border-primary bg-bg-primary p-4 shadow-lg">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-secondary">
          We use cookies for analytics and ads.{' '}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleDecline}
            className="rounded-lg border border-border-primary px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-secondary"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-primary px-4 py-2 text-sm text-white transition-colors hover:bg-indigo-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export function hasConsent(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(CONSENT_KEY) === 'accepted'
}
```

- [ ] **Step 4: Create a ConsentGate wrapper for GA4/AdSense scripts**

Create `src/components/ui/ConsentGate.tsx`:

```tsx
'use client'

import Script from 'next/script'
import { useState, useEffect } from 'react'

const CONSENT_KEY = 'cookie-consent'

interface ConsentGateProps {
  gaId: string
  adsenseClient: string
}

export function ConsentGate({ gaId, adsenseClient }: ConsentGateProps) {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    setAccepted(localStorage.getItem(CONSENT_KEY) === 'accepted')
  }, [])

  if (!accepted) return null

  return (
    <>
      {gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}
      {adsenseClient && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}
    </>
  )
}
```

- [ ] **Step 5: Update layout.tsx to use ConsentGate**

In `src/app/layout.tsx`:
- Remove the existing GA4 `<Script>` tags from the `<head>`
- Remove the AdSense `<Script>` tag
- Add `<ConsentGate>` and `<CookieConsent>` as client components inside `<body>`
- Keep `isProduction` gate — only render consent components in production

Replace the `{isProduction && <>` script block with:
```tsx
{isProduction && (
  <>
    <ConsentGate gaId={GA_MEASUREMENT_ID} adsenseClient={ADSENSE_CLIENT} />
    <CookieConsent />
  </>
)}
```

- [ ] **Step 6: Update Footer with Terms/Privacy links and attribution**

In `src/components/layout/Footer.tsx`, add to the bottom section (before the copyright line):

```tsx
<div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
  <Link href="/terms" className="hover:text-gray-300">Terms & Disclaimer</Link>
  <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
</div>
<p className="mt-2 text-xs text-gray-600">
  Constitutional text sourced from legislative.gov.in · Budget data sourced from indiabudget.gov.in
</p>
```

- [ ] **Step 7: Add practice arena disclaimer**

In `src/app/practice/page.tsx`, add a one-liner at the top of the practice content area:

```tsx
<p className="mb-4 text-center text-xs text-text-muted">
  Original practice questions designed for exam preparation — not from any official examination paper.
</p>
```

- [ ] **Step 8: Add /terms and /privacy to sitemap**

In `src/app/sitemap.ts`, add two entries to the static routes array:
```ts
{ url: `${baseUrl}/terms`, lastModified: new Date(), priority: 0.3 },
{ url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
```

- [ ] **Step 9: Write tests for CookieConsent component**

Create `src/components/ui/__tests__/CookieConsent.test.tsx`:
- Test: renders banner when no consent stored
- Test: hides banner when consent is 'accepted'
- Test: hides banner when consent is 'declined'
- Test: clicking Accept sets localStorage and hides banner
- Test: clicking Decline sets localStorage and hides banner

- [ ] **Step 10: Write smoke tests for /terms and /privacy pages**

Create `src/app/terms/__tests__/page.test.tsx`:
- Test: renders Terms & Disclaimer heading
- Test: renders grievance email

Create `src/app/privacy/__tests__/page.test.tsx`:
- Test: renders Privacy Policy heading
- Test: renders DPDPA reference

- [ ] **Step 11: Run tests**

Run: `npx vitest run 2>&1 | tail -30`
Expected: All tests pass including new test files.

- [ ] **Step 12: Run build**

Run: `npx next build 2>&1 | tail -20`
Expected: Build succeeds with new /terms and /privacy routes.

- [ ] **Step 13: Commit**

```bash
git add -A && git commit -m "feat(legal): add terms, privacy policy, cookie consent, and disclaimers

- /terms page with content disclaimer, no-affiliation, IT Act grievance
- /privacy page with DPDPA 2023 compliance, cookie policy
- CookieConsent banner gates GA4 and AdSense behind user consent
- Footer links to terms/privacy + government source attribution
- Practice arena disclaimer about original questions"
```

---

### Task 5: Verify No Official Logos or Seals Used

**Files:**
- Check: `public/` directory for any exam body logos
- Check: `src/` for any `<img>` tags referencing official logos

- [ ] **Step 1: Check public directory for logo files**

Run: `find public/ -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.svg" -o -name "*.ico" \) | head -20`
Expected: Only our own favicon and assets — no UPSC/SSC/IBPS logos.

- [ ] **Step 2: Grep for exam body names in image references**

Run: `grep -ri "upsc.*logo\|ssc.*logo\|ibps.*logo\|rbi.*logo\|nta.*logo" src/ --include="*.tsx" --include="*.ts"`
Expected: Zero matches.

- [ ] **Step 3: No commit needed if clean**

If no logos found, this task requires no code changes — just verification.

---

## Phase 2: Content Voice & Originality (Tasks 6-7)

### Task 6: Create Content Style Guide

**Files:**
- Create: `docs/content-style-guide.md`

- [ ] **Step 1: Write the style guide**

Create `docs/content-style-guide.md` with the govtexamsstudy voice guidelines:

```markdown
# GovtExamsStudy Content Style Guide

## Voice & Tone

- **Exam-focused**: Every explanation ties back to how it gets asked in exams
- **Visual-first**: Use "picture this as...", "think of it like..." framing
- **Direct**: Short sentences. No academic prose. No filler.
- **Hindi-English natural**: Use Hinglish where the audience naturally would
- **Mnemonic-heavy**: Create original memory aids, not recycled coaching tricks

## Do

- State facts directly: "Article 21 guarantees right to life and personal liberty"
- Add exam context: "This is a favourite in SSC CGL — appears almost every year"
- Use our framing: "Visualize the Fundamental Rights as a shield..."
- Cite government sources: "As per Census 2011..." or "Per RBI data..."

## Don't

- Attribute to textbooks: ~~"As Laxmikanth explains..."~~
- Use academic tone: ~~"It is pertinent to note that..."~~
- Copy coaching phrasing: ~~"Important trick from R.S. Aggarwal..."~~
- Use passive voice when active is clearer

## Constitutional & Legal Text

- Quote constitutional articles verbatim — they are public domain
- Quote legislation text directly from legislative.gov.in
- Court judgments can be quoted and cited by case name and year

## Acceptance Criteria for Rewrites

A section is "original enough" when:
1. No >2 consecutive sentences share structure with a known textbook
2. Includes platform-specific framing ("in SSC CGL, this appears as...")
3. Reads distinctly from Laxmikanth/NCERT when placed side by side
```

- [ ] **Step 2: Commit**

```bash
git add docs/content-style-guide.md && git commit -m "docs: add content style guide for originality rewrites"
```

---

### Task 7: MCQ Audit — Sample 50 Problem Files

This task is a **manual review**, not automated code changes. The implementer reads 50 problem files, flags any that look like verbatim PYQs, and rewrites flagged questions.

**Files to sample (50 total):**
- Polity: 10 random from `src/data/polity/problems/` (50 available)
- History: 10 random from `src/data/history/problems/` (50 available)
- Geography: 10 random from `src/data/geography/problems/` (50 available)
- Economics: 10 random from `src/data/economics/problems/` (50 available)
- Quant: 5 random from `src/data/quant/problems/` (31 available)
- Reasoning: 5 random from `src/data/reasoning/problems/` (15 available)

- [ ] **Step 1: Generate random sample file list**

Run: `ls src/data/polity/problems/ | shuf | head -10` (repeat for each subject with appropriate count)

- [ ] **Step 2: Read each sampled file**

For each file, check:
- Do any questions read like exact PYQ wording?
- Are distractor options suspiciously specific (suggests copying)?
- Do explanations cite textbook-specific language?

- [ ] **Step 3: Flag and rewrite any problematic questions**

If a question looks like a verbatim PYQ:
- Rewrite the question stem in our own words
- Shuffle or replace distractor options
- Rewrite explanation in govtexamsstudy voice

- [ ] **Step 4: Audit quant & reasoning trick files (per spec Section 2c)**

Sample 5 trick files each from `src/data/quant/tricks/` and `src/data/reasoning/tricks/` (10 total). Check for phrasing that mirrors R.S. Aggarwal's distinctive explanations or coaching material. Rewrite any flagged trick descriptions in govtexamsstudy voice.

Run: `ls src/data/quant/tricks/ | shuf | head -5` and `ls src/data/reasoning/tricks/ | shuf | head -5`

- [ ] **Step 5: Commit any changes**

```bash
git add -A && git commit -m "content(legal): audit and rewrite flagged MCQ questions and tricks

Sampled 50 problem files + 10 trick files across 6 subjects.
Rewrote [N] items too close to published exam or textbook phrasing."
```

---

## Phase 3: Content Originality Pass (Tasks 8-12)

These tasks follow the priority order: Polity → Economics → History → Geography → Quant/Reasoning. Each task rewrites the `description`, `keyIdea`, and `notes[].content` fields in concept files for one subject.

**Pattern for each task:**
1. Read concept files one by one
2. Rewrite `description` and `keyIdea` in govtexamsstudy voice (per style guide)
3. For GA subjects (polity/history/geography/economics): also rewrite `notes[].content` prose sections
4. Keep constitutional/legislative quotes verbatim
5. Keep factual data (dates, numbers, names) unchanged
6. Add exam-context framing where missing
7. Commit after every 10 files

### Task 8: Polity Content Originality Pass (50 files)

**Files:** `src/data/polity/concepts/*.ts` (50 files)

- [ ] **Step 1-50: For each concept file, rewrite description + keyIdea + notes in our voice**

Read each file. For each:
- Rewrite `description` — make it concise, exam-focused, visual-first
- Rewrite `keyIdea` — one-liner in our voice
- Rewrite `notes[].content` — remove any textbook-echoing prose, add exam context
- Keep: constitutional article text, case names, dates, factual data
- Apply: content style guide rules

After every 10 files, run build verification and commit:
```bash
npx next build 2>&1 | tail -5  # verify no syntax errors in modified .ts files
git add -A && git commit -m "content(polity): rewrite concepts 1-10 in original voice"
```

### Task 9: Economics Content Originality Pass (50 files)

**Files:** `src/data/economics/concepts/*.ts` (50 files)
Same pattern as Task 8.

### Task 10: History Content Originality Pass (50 files)

**Files:** `src/data/history/concepts/*.ts` (50 files)
Same pattern as Task 8.

### Task 11: Geography Content Originality Pass (50 files)

**Files:** `src/data/geography/concepts/*.ts` (50 files)
Same pattern as Task 8.

### Task 12: Quant & Reasoning Content Pass (46 files)

**Files:** `src/data/quant/concepts/*.ts` (31 files) + `src/data/reasoning/concepts/*.ts` (15 files)
Focus on trick explanations and solution text. Lower priority — math/logic concepts are harder to "copy."

---

## Phase 4: Gap-Filling (Tasks 13-15)

### Task 13: Science Expansion (separate design required)

**Blocked:** Requires a separate mini-design spec to finalize the exact 15 topic slugs aligned with UPSC/SSC science syllabus. Run a brainstorming session for this before implementation.

**Scope when unblocked:**
- Create `src/data/science/concepts/`, `revision/`, `problems/` directories
- Create 15 concept + revision + problem files following the existing pattern
- Add Science to `src/data/practice/subject-problems.ts` registry
- Add `/science/[topic]` dynamic route
- Update science hub page, layout sidebar, and sitemap

### Task 14: Practice Arena — Wire Quant & Reasoning

**Files:**
- Modify: `src/data/practice/subject-problems.ts` (add quant + reasoning entries)
- Create: MCQ-format problem files for quant topics (31 files)
- Create: MCQ-format problem files for reasoning topics (15 files)

**Note:** Quant and reasoning already have step-by-step problems. This task creates **separate MCQ-format** problems for the practice arena (multiple choice, not step-solver format).

### Task 15: Data Freshness Review

**Files:**
- Check: `src/data/economics/budget-2025.ts` — verify budget year
- Check: All government data files for outdated statistics
- Create: `docs/data-freshness-checklist.md` with annual review process

---

## Summary

| Phase | Tasks | Effort | Can Parallelize? |
|-------|-------|--------|-----------------|
| 1: Legal Risk Elimination | Tasks 1-5 | 3-4 sessions | Yes — all independent |
| 2: Content Voice | Tasks 6-7 | 1-2 sessions | Yes — independent |
| 3: Content Originality | Tasks 8-12 | 8-12 sessions | No — sequential by subject |
| 4: Gap-Filling | Tasks 13-15 | 6-8 sessions | Task 13 blocked on design |

**Total: 18-26 sessions**

**Quick wins (do first):** Tasks 1, 3, 5 (can all run in parallel, ~1 session total)
**High impact:** Task 4 (privacy/consent — legally required for AdSense)
**Largest effort:** Tasks 8-12 (content rewrite — polity first)
