# Daily Current Affairs — Design Spec

**Date**: 2026-04-03
**Status**: Approved

## Overview

Daily current affairs digest for govt exam aspirants. 10-15 AI-assisted items per day, each linking to official/primary sources. Static TS data files — one per day, versioned in git. 30 days seeded at launch.

## Scope

### In Scope
- `/current-affairs` listing page with latest digest + date archive
- `/current-affairs/[date]` daily digest pages with client-side category filters
- Data model: `NewsItem` with headline, summary, category, source URL, exam relevance
- One TS file per day in `src/data/current-affairs/`
- 30 days of seeded content at launch
- Header nav link, footer link, sitemap entries
- UX consistent with exams/hub pages (dark hero, left-accent cards, category badges)

### Out of Scope
- Live RSS/API feeds or scraping
- MCQs based on daily news (future enhancement)
- Push notifications or email digests
- Cross-linking to subject topic pages

## Data Sourcing Rules

**All sources must be official/primary — never newspapers.**

Acceptable sources:
- PIB (pib.gov.in) — government press releases
- Ministry websites (e.g., finmin.nic.in, mea.gov.in)
- RBI circulars and press releases (rbi.org.in)
- Gazette of India notifications (egazette.gov.in)
- UPSC/SSC/IBPS official notices
- ISRO, DRDO, DAE official announcements
- Supreme Court judgments (sci.gov.in)
- Parliament bills and acts (sansad.in)
- UN/WHO/IMF official releases (for international items)

Not acceptable: The Hindu, Indian Express, NDTV, Times of India, or any newspaper/media outlet.

## Data Model

### Types (`src/types/current-affairs.ts`)

```typescript
export type NewsCategory =
  | 'polity' | 'economics' | 'history' | 'geography'
  | 'science' | 'international' | 'environment'
  | 'defence' | 'appointments' | 'schemes'

export interface NewsItem {
  id: string                      // "2026-04-03-01"
  headline: string                // "RBI keeps repo rate unchanged at 6.5%"
  summary: string                 // 2-3 line exam-oriented summary
  category: NewsCategory
  sourceUrl: string               // official source URL
  sourceName: string              // "Reserve Bank of India"
  examRelevance?: string          // "Prelims: Monetary Policy | Mains: GS III"
}

export interface DailyDigest {
  date: string                    // ISO date: "2026-04-03"
  items: NewsItem[]               // 10-15 items
}
```

### Category Config

```typescript
const CATEGORY_CONFIG: Record<NewsCategory, { label: string; color: string }> = {
  polity: { label: 'Polity', color: '#ef4444' },
  economics: { label: 'Economy', color: '#14b8a6' },
  history: { label: 'History', color: '#f59e0b' },
  geography: { label: 'Geography', color: '#22c55e' },
  science: { label: 'Science', color: '#06b6d4' },
  international: { label: 'International', color: '#6366f1' },
  environment: { label: 'Environment', color: '#10b981' },
  defence: { label: 'Defence', color: '#475569' },
  appointments: { label: 'Appointments', color: '#8b5cf6' },
  schemes: { label: 'Schemes', color: '#f97316' },
}
```

Colors reuse existing subject colors where categories map to subjects (polity=red, economics=teal, etc.). New categories get distinct colors that don't clash.

## File Structure

```
src/
  types/
    current-affairs.ts
  data/
    current-affairs/
      index.ts                    # getAllDates(), getDigest(date), DIGEST_REGISTRY
      2026-04-03.ts               # DailyDigest for April 3
      2026-04-02.ts
      ...                         # 30 days total at launch
  app/
    current-affairs/
      layout.tsx                  # Metadata only
      page.tsx                    # Listing page
      [date]/
        page.tsx                  # Daily digest page
```

### Data File Pattern

Each file exports a `DailyDigest`:

```typescript
// src/data/current-affairs/2026-04-03.ts
import type { DailyDigest } from '@/types/current-affairs'

export const digest20260403: DailyDigest = {
  date: '2026-04-03',
  items: [
    {
      id: '2026-04-03-01',
      headline: '...',
      summary: '...',
      category: 'economics',
      sourceUrl: 'https://rbi.org.in/...',
      sourceName: 'Reserve Bank of India',
      examRelevance: 'Prelims: Monetary Policy | Mains: GS III',
    },
    // ... 9-14 more items
  ],
}
```

### Barrel (`index.ts`)

```typescript
import type { DailyDigest } from '@/types/current-affairs'
import { digest20260403 } from './2026-04-03'
import { digest20260402 } from './2026-04-02'
// ... all 30 days

const DIGEST_REGISTRY: Record<string, DailyDigest> = {
  '2026-04-03': digest20260403,
  '2026-04-02': digest20260402,
  // ...
}

export function getAllDates(): string[] {
  return Object.keys(DIGEST_REGISTRY).sort((a, b) => b.localeCompare(a))
}

export function getDigest(date: string): DailyDigest | undefined {
  return DIGEST_REGISTRY[date]
}

export function getLatestDigest(): DailyDigest | undefined {
  const dates = getAllDates()
  return dates.length > 0 ? DIGEST_REGISTRY[dates[0]] : undefined
}
```

## Routing

### `/current-affairs` — Listing Page

- **Server component**
- Layout: `max-w-5xl mx-auto px-4 py-8`

**Structure:**
1. **Dark hero banner** (matches exams/practice pattern) — `bg-gradient-to-br from-gray-900 to-gray-800`, rounded-2xl
   - Newspaper icon (`Newspaper` from lucide) + "Daily Current Affairs" heading
   - Intro: "Exam-relevant news from official sources — PIB, RBI, ministry notifications, and more."
   - Stat pills: `{totalDays}` Days, `10-15` Items/Day, `Official Sources Only`
2. **Latest digest inline** — today's (or most recent) items rendered as cards directly on the listing page. This gives the page substantial indexable content for SEO.
3. **Previous days archive** — `grid gap-3 sm:grid-cols-2 lg:grid-cols-3` of date cards below. Each card:
   - Date (formatted: "3 Apr 2026")
   - Item count
   - Top 2 headline previews (truncated)
   - Left accent bar (indigo — primary color)
   - ChevronRight on hover
   - Links to `/current-affairs/[date]`

**Metadata:** "Daily Current Affairs for UPSC, SSC, Banking Exams — {Month Year} | GovtExamsStudy"

### `/current-affairs/[date]` — Daily Digest Page

- **Server component** (page-level) with a **client component wrapper** for category filtering
- `generateStaticParams` from `getAllDates()`
- `notFound()` for unknown dates
- Layout: `max-w-4xl mx-auto px-4 py-8`

**Structure:**
1. **Breadcrumb**: Home > Current Affairs > 3 April 2026 (chevron separators)
2. **Header**: Date as `h1` (formatted), item count pill, Prev/Next day links
3. **Filter chips** (`'use client'` component): "All" + one chip per category present in that day's items. Active chip uses category color. Filtering is client-side useState.
4. **Items list**: Vertically stacked cards, each with:
   - Left accent bar in category color
   - Category badge (colored pill, top-right area)
   - Headline (`h3`, bold)
   - Summary (2-3 lines, `text-text-secondary`)
   - Source link (`ExternalLink` icon, `target="_blank"`) showing `sourceName`
   - Exam relevance note (muted, if present)
   - ChevronRight on card hover
5. **Prev/Next day navigation** — bottom of page, links to adjacent dates

**Metadata per day:** "{date formatted} — Daily Current Affairs for UPSC, SSC | GovtExamsStudy"

## UX Consistency

All patterns match the exams/hub redesign:

| Pattern | How it's used |
|---|---|
| Dark hero banner | Listing page hero with stats |
| Left-accent-bar cards | Each news item card + date archive cards |
| Category color badges | Colored pills per `NewsCategory` |
| ChevronRight hover | On cards linking to detail pages |
| Section icons | Newspaper icon on hero, category icons on filter chips |
| Breadcrumb with chevrons | Detail page breadcrumb |
| `rounded-xl border border-border-primary bg-bg-elevated` | All cards |
| Stat pills (`bg-white/10` on dark, `bg-{color}10` on light) | Hero stats |

## Navigation Updates

### Header (`src/components/layout/Header.tsx`)
- Add "Current Affairs" to `UTIL_LINKS` (after Practice)
- `{ href: '/current-affairs', label: 'Current Affairs', colorClass: 'hover:text-primary' }`

### Footer (`src/components/layout/Footer.tsx`)
- Add to `TOOL_LINKS`: `{ href: '/current-affairs', label: 'Daily Current Affairs' }`

### Sitemap (`src/app/sitemap.ts`)
- Add `/current-affairs` with priority 0.9 (updates daily — highest non-root priority)
- Add all `/current-affairs/[date]` routes with priority 0.7

## Content Generation Workflow

1. Use AI (Claude/GPT) to draft daily digest from official source feeds
2. Review for accuracy and source validity
3. Create `src/data/current-affairs/YYYY-MM-DD.ts` file
4. Add import + registry entry to `index.ts`
5. Commit and deploy

## Seed Content

30 days of content (2026-03-05 to 2026-04-03) seeded at launch. Each day contains 10-15 items sourced exclusively from official government/institutional sources.
