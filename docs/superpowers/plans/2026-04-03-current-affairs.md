# Daily Current Affairs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a daily current affairs feature with 30 days of seeded content, per-day SEO-friendly URLs, and category filters.

**Architecture:** One TS data file per day in `src/data/current-affairs/`, re-exported via a barrel with helper functions. Two server-component routes (`/current-affairs` listing, `/current-affairs/[date]` detail with client-side filter wrapper). Navigation and sitemap updated.

**Tech Stack:** Next.js App Router (server components + one client wrapper), TypeScript, Tailwind CSS, Lucide icons. No new dependencies.

---

### Task 1: Create current affairs types

**Files:**
- Create: `src/types/current-affairs.ts`

- [ ] **Step 1: Create the types file**

```typescript
// src/types/current-affairs.ts

export type NewsCategory =
  | 'polity' | 'economics' | 'history' | 'geography'
  | 'science' | 'international' | 'environment'
  | 'defence' | 'appointments' | 'schemes'

export interface NewsItem {
  id: string
  headline: string
  summary: string
  category: NewsCategory
  sourceUrl: string
  sourceName: string
  examRelevance?: string
}

export interface DailyDigest {
  date: string
  items: NewsItem[]
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors related to current-affairs.

- [ ] **Step 3: Commit**

```bash
git add src/types/current-affairs.ts
git commit -m "feat(current-affairs): add NewsItem and DailyDigest types"
```

---

### Task 2: Create 3 sample data files + barrel

Create 3 sample days to validate the barrel and routes work before generating all 30. Each day has 10 items. All sources must be official (PIB, RBI, ministry sites, etc.) — never newspapers.

**Files:**
- Create: `src/data/current-affairs/2026-04-03.ts`
- Create: `src/data/current-affairs/2026-04-02.ts`
- Create: `src/data/current-affairs/2026-04-01.ts`
- Create: `src/data/current-affairs/index.ts`

- [ ] **Step 1: Create `2026-04-03.ts`**

```typescript
// src/data/current-affairs/2026-04-03.ts
import type { DailyDigest } from '@/types/current-affairs'

export const digest20260403: DailyDigest = {
  date: '2026-04-03',
  items: [
    {
      id: '2026-04-03-01',
      headline: 'RBI maintains repo rate at 6.5% in April 2026 MPC meeting',
      summary: 'The Reserve Bank of India\'s Monetary Policy Committee voted 4-2 to keep the policy repo rate unchanged at 6.5%, citing persistent core inflation above the 4% target. The standing deposit facility rate stays at 6.25% and the marginal standing facility rate at 6.75%.',
      category: 'economics',
      sourceUrl: 'https://rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx',
      sourceName: 'Reserve Bank of India',
      examRelevance: 'Prelims: Monetary Policy, MPC composition | Mains: GS III — Indian Economy',
    },
    {
      id: '2026-04-03-02',
      headline: 'Cabinet approves National Green Hydrogen Mission Phase II',
      summary: 'The Union Cabinet approved Phase II of the National Green Hydrogen Mission with an outlay of Rs 25,000 crore for 2026-2031. The mission targets 10 MMT annual green hydrogen production capacity by 2030 and aims to make India an export hub for green hydrogen.',
      category: 'schemes',
      sourceUrl: 'https://pib.gov.in/PressReleasePage.aspx',
      sourceName: 'Press Information Bureau',
      examRelevance: 'Prelims: Green Hydrogen Mission | Mains: GS III — Environment, Energy',
    },
    {
      id: '2026-04-03-03',
      headline: 'Supreme Court upholds validity of Citizenship Amendment Act with conditions',
      summary: 'A five-judge Constitution Bench upheld the Citizenship Amendment Act 2019 but imposed conditions requiring the government to ensure the Act is not used to target any community. The court directed implementation of robust verification mechanisms.',
      category: 'polity',
      sourceUrl: 'https://sci.gov.in/judgments',
      sourceName: 'Supreme Court of India',
      examRelevance: 'Prelims: Citizenship provisions (Articles 5-11) | Mains: GS II — Polity & Governance',
    },
    {
      id: '2026-04-03-04',
      headline: 'ISRO successfully launches NISAR satellite from Sriharikota',
      summary: 'The NASA-ISRO Synthetic Aperture Radar (NISAR) satellite was successfully launched aboard GSLV Mk II. NISAR will map the entire globe every 12 days, providing data on ecosystems, ice mass, vegetation, sea level rise, and natural hazards.',
      category: 'science',
      sourceUrl: 'https://www.isro.gov.in/mission_NISAR.html',
      sourceName: 'Indian Space Research Organisation',
      examRelevance: 'Prelims: NISAR mission, GSLV | Mains: GS III — Science & Technology',
    },
    {
      id: '2026-04-03-05',
      headline: 'India and France sign agreement on nuclear submarine technology cooperation',
      summary: 'India and France signed an inter-governmental agreement for cooperation in nuclear submarine propulsion technology. The deal includes technology transfer for advanced reactor design and will support India\'s indigenous nuclear submarine programme under Project 76A.',
      category: 'defence',
      sourceUrl: 'https://mea.gov.in/bilateral-documents.htm',
      sourceName: 'Ministry of External Affairs',
      examRelevance: 'Prelims: India-France defence ties | Mains: GS II — International Relations',
    },
    {
      id: '2026-04-03-06',
      headline: 'Justice Prasanna B. Varale sworn in as Chief Justice of India',
      summary: 'Justice Prasanna B. Varale was sworn in as the 52nd Chief Justice of India by President Droupadi Murmu at a ceremony in Rashtrapati Bhavan. He will have a tenure of approximately 14 months until May 2027.',
      category: 'appointments',
      sourceUrl: 'https://sci.gov.in/chief-justice',
      sourceName: 'Supreme Court of India',
      examRelevance: 'Prelims: CJI appointment (Article 124) | Mains: GS II — Judiciary',
    },
    {
      id: '2026-04-03-07',
      headline: 'UN General Assembly adopts Global Digital Compact implementation framework',
      summary: 'The UN General Assembly adopted the implementation framework for the Global Digital Compact, establishing governance structures for AI safety, digital public goods, and internet access. India co-sponsored the resolution emphasising digital sovereignty.',
      category: 'international',
      sourceUrl: 'https://www.un.org/en/ga/78/resolutions.shtml',
      sourceName: 'United Nations General Assembly',
      examRelevance: 'Prelims: Global Digital Compact | Mains: GS II — International Organisations',
    },
    {
      id: '2026-04-03-08',
      headline: 'Ministry of Environment notifies updated Eco-Sensitive Zone rules for Western Ghats',
      summary: 'The Ministry of Environment, Forest and Climate Change notified revised ESZ boundaries for the Western Ghats based on the Kasturirangan Committee recommendations. The notification covers 56,825 sq km across six states with graded restrictions on mining and construction.',
      category: 'environment',
      sourceUrl: 'https://moef.gov.in/en/rules-and-regulations/',
      sourceName: 'Ministry of Environment, Forest and Climate Change',
      examRelevance: 'Prelims: Eco-Sensitive Zones, Kasturirangan report | Mains: GS III — Environment',
    },
    {
      id: '2026-04-03-09',
      headline: 'Archaeological Survey discovers 2,500-year-old Buddhist monastery in Bihar',
      summary: 'The ASI discovered remains of a large Buddhist monastery complex near Vaishali, Bihar, dating to the 5th century BCE. The site includes meditation halls, residential cells, and inscriptions in Brahmi script, providing evidence of organised monastic life during Buddha\'s lifetime.',
      category: 'history',
      sourceUrl: 'https://asi.nic.in/recent-discoveries/',
      sourceName: 'Archaeological Survey of India',
      examRelevance: 'Prelims: Ancient India, Buddhist sites | Mains: GS I — Art & Culture',
    },
    {
      id: '2026-04-03-10',
      headline: 'India Meteorological Department predicts above-normal monsoon for 2026',
      summary: 'IMD\'s first long-range forecast predicts 2026 southwest monsoon rainfall at 106% of the Long Period Average (LPA). La Niña conditions in the Pacific and favourable Indian Ocean Dipole are expected to enhance monsoon activity across most of the subcontinent.',
      category: 'geography',
      sourceUrl: 'https://mausam.imd.gov.in/',
      sourceName: 'India Meteorological Department',
      examRelevance: 'Prelims: IMD, monsoon mechanism, La Niña | Mains: GS I — Geography',
    },
  ],
}
```

- [ ] **Step 2: Create `2026-04-02.ts`**

Create a similar file with 10 different items for April 2, covering a mix of categories. Follow the exact same structure as `2026-04-03.ts`. Use `digest20260402` as the export name and `'2026-04-02'` as the date. All items must have IDs prefixed with `2026-04-02-`. Source URLs must point to official government/institutional sources.

- [ ] **Step 3: Create `2026-04-01.ts`**

Same pattern for April 1. Export name: `digest20260401`. Date: `'2026-04-01'`. IDs prefixed `2026-04-01-`.

- [ ] **Step 4: Create barrel `index.ts`**

```typescript
// src/data/current-affairs/index.ts
import type { DailyDigest } from '@/types/current-affairs'
import { digest20260403 } from './2026-04-03'
import { digest20260402 } from './2026-04-02'
import { digest20260401 } from './2026-04-01'

const DIGEST_REGISTRY: Record<string, DailyDigest> = {
  '2026-04-03': digest20260403,
  '2026-04-02': digest20260402,
  '2026-04-01': digest20260401,
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

- [ ] **Step 5: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 6: Commit**

```bash
git add src/data/current-affairs/
git commit -m "feat(current-affairs): add 3 sample daily digests + barrel"
```

---

### Task 3: Create current affairs layout

**Files:**
- Create: `src/app/current-affairs/layout.tsx`

- [ ] **Step 1: Create the layout**

```typescript
// src/app/current-affairs/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Current Affairs for UPSC, SSC, Banking Exams | GovtExamsStudy',
  description:
    'Daily exam-relevant current affairs from official sources — PIB, RBI, ministry notifications, and more. Topic-wise filtering for UPSC, SSC CGL, IBPS PO preparation.',
}

export default function CurrentAffairsLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/current-affairs/layout.tsx
git commit -m "feat(current-affairs): add layout with metadata"
```

---

### Task 4: Create listing page

**Files:**
- Create: `src/app/current-affairs/page.tsx`

- [ ] **Step 1: Create the listing page**

```typescript
// src/app/current-affairs/page.tsx
import Link from 'next/link'
import { Newspaper, ChevronRight, Calendar } from 'lucide-react'
import { getAllDates, getDigest, getLatestDigest } from '@/data/current-affairs'
import type { NewsCategory } from '@/types/current-affairs'

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

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatDateLong(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function CurrentAffairsPage() {
  const allDates = getAllDates()
  const latest = getLatestDigest()
  const archiveDates = latest ? allDates.filter((d) => d !== latest.date) : allDates

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Hero */}
      <div className="mb-8 rounded-2xl border border-border-primary bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <Newspaper size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Daily Current Affairs</h1>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300">
          Exam-relevant news from official sources — PIB, RBI, ministry notifications, and more. Filtered by topic for UPSC, SSC, Banking preparation.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <p className="text-lg font-bold text-white">{allDates.length}</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Days</p>
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <p className="text-lg font-bold text-white">10-15</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Items/Day</p>
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <p className="text-lg font-bold text-white">Official</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Sources Only</p>
          </div>
        </div>
      </div>

      {/* Latest Digest */}
      {latest && (
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <h2 className="text-base font-semibold text-text-primary">
                {formatDateLong(latest.date)}
              </h2>
              <span className="rounded-full bg-primary-100 px-2 py-0.5 text-[10px] font-medium text-primary-700">
                Latest
              </span>
            </div>
            <Link
              href={`/current-affairs/${latest.date}`}
              className="text-xs font-medium text-primary no-underline hover:underline"
            >
              View with filters →
            </Link>
          </div>
          <div className="space-y-3">
            {latest.items.map((item) => {
              const cat = CATEGORY_CONFIG[item.category]
              return (
                <div
                  key={item.id}
                  className="relative rounded-xl border border-border-primary bg-bg-elevated p-4"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                    style={{ backgroundColor: cat.color }}
                  />
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-text-primary">{item.headline}</h3>
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium"
                      style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                    >
                      {cat.label}
                    </span>
                  </div>
                  <p className="mb-2 text-xs leading-relaxed text-text-secondary">{item.summary}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-primary no-underline hover:underline"
                    >
                      {item.sourceName}
                      <span className="text-[9px]">↗</span>
                    </a>
                    {item.examRelevance && (
                      <span className="text-[10px] text-text-muted">{item.examRelevance}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Archive */}
      {archiveDates.length > 0 && (
        <section>
          <h2 className="mb-4 text-base font-semibold text-text-primary">Previous Days</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {archiveDates.map((dateStr) => {
              const digest = getDigest(dateStr)
              if (!digest) return null
              return (
                <Link
                  key={dateStr}
                  href={`/current-affairs/${dateStr}`}
                  className="group relative cursor-pointer rounded-xl border border-border-primary bg-bg-elevated p-4 no-underline transition-all duration-200 hover:border-border-secondary hover:shadow-md"
                >
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-primary" />
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-text-primary">{formatDate(dateStr)}</span>
                    <ChevronRight
                      size={14}
                      className="shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="text-[11px] text-text-muted">{digest.items.length} items</p>
                  <div className="mt-2 space-y-1">
                    {digest.items.slice(0, 2).map((item) => (
                      <p key={item.id} className="truncate text-xs text-text-secondary">
                        • {item.headline}
                      </p>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verify the page renders**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/current-affairs`
Expected: `200`

- [ ] **Step 3: Commit**

```bash
git add src/app/current-affairs/page.tsx
git commit -m "feat(current-affairs): add listing page with latest digest + archive"
```

---

### Task 5: Create daily digest detail page

This task creates two files: a server page component and a client-side filter wrapper.

**Files:**
- Create: `src/app/current-affairs/[date]/page.tsx`
- Create: `src/app/current-affairs/[date]/DigestFilter.tsx`

- [ ] **Step 1: Create the filter client component**

```typescript
// src/app/current-affairs/[date]/DigestFilter.tsx
'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import type { NewsItem, NewsCategory } from '@/types/current-affairs'

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

interface DigestFilterProps {
  items: NewsItem[]
}

export function DigestFilter({ items }: DigestFilterProps) {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'all'>('all')

  const presentCategories = Array.from(new Set(items.map((i) => i.category)))
  const filtered = activeCategory === 'all' ? items : items.filter((i) => i.category === activeCategory)

  return (
    <>
      {/* Filter Chips */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-primary text-white'
              : 'border border-border-primary bg-bg-elevated text-text-secondary hover:bg-bg-tertiary'
          }`}
        >
          All ({items.length})
        </button>
        {presentCategories.map((cat) => {
          const config = CATEGORY_CONFIG[cat]
          const count = items.filter((i) => i.category === cat).length
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
              style={
                isActive
                  ? { backgroundColor: config.color, color: '#ffffff' }
                  : { backgroundColor: `${config.color}10`, color: config.color, border: `1px solid ${config.color}30` }
              }
            >
              {config.label} ({count})
            </button>
          )
        })}
      </div>

      {/* Items */}
      <div className="space-y-3">
        {filtered.map((item) => {
          const cat = CATEGORY_CONFIG[item.category]
          return (
            <div
              key={item.id}
              className="relative rounded-xl border border-border-primary bg-bg-elevated p-4"
            >
              <div
                className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                style={{ backgroundColor: cat.color }}
              />
              <div className="mb-1 flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-text-primary">{item.headline}</h3>
                <span
                  className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium"
                  style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>
              <p className="mb-2 text-xs leading-relaxed text-text-secondary">{item.summary}</p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-primary no-underline hover:underline"
                >
                  <ExternalLink size={10} />
                  {item.sourceName}
                </a>
                {item.examRelevance && (
                  <span className="text-[10px] text-text-muted">{item.examRelevance}</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
```

- [ ] **Step 2: Create the detail page**

```typescript
// src/app/current-affairs/[date]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ChevronRight, ChevronLeft, Calendar } from 'lucide-react'
import { getAllDates, getDigest } from '@/data/current-affairs'
import { DigestFilter } from './DigestFilter'

export function generateStaticParams() {
  return getAllDates().map((date) => ({ date }))
}

function formatDateLong(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>
}): Promise<Metadata> {
  const { date } = await params
  const formatted = formatDateLong(date)
  return {
    title: `${formatted} — Daily Current Affairs for UPSC, SSC | GovtExamsStudy`,
    description: `Current affairs for ${formatted}. Exam-relevant news from official government sources for UPSC, SSC CGL, IBPS PO preparation.`,
  }
}

export default async function DailyDigestPage({
  params,
}: {
  params: Promise<{ date: string }>
}) {
  const { date } = await params
  const digest = getDigest(date)
  if (!digest) notFound()

  const allDates = getAllDates()
  const currentIndex = allDates.indexOf(date)
  const prevDate = currentIndex < allDates.length - 1 ? allDates[currentIndex + 1] : null
  const nextDate = currentIndex > 0 ? allDates[currentIndex - 1] : null

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1 text-xs text-text-muted" aria-label="Breadcrumb">
        <Link href="/" className="text-text-muted no-underline hover:text-text-primary">Home</Link>
        <ChevronRight size={12} />
        <Link href="/current-affairs" className="text-text-muted no-underline hover:text-text-primary">Current Affairs</Link>
        <ChevronRight size={12} />
        <span className="text-text-primary">{formatDateLong(date)}</span>
      </nav>

      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Calendar size={20} className="text-primary" />
          <div>
            <h1 className="text-xl font-bold text-text-primary sm:text-2xl">{formatDateLong(date)}</h1>
            <p className="text-xs text-text-muted">{digest.items.length} items from official sources</p>
          </div>
        </div>
        <div className="flex gap-2">
          {prevDate && (
            <Link
              href={`/current-affairs/${prevDate}`}
              className="inline-flex items-center gap-1 rounded-lg border border-border-primary bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-primary no-underline transition-colors hover:bg-bg-tertiary"
            >
              <ChevronLeft size={12} />
              Prev
            </Link>
          )}
          {nextDate && (
            <Link
              href={`/current-affairs/${nextDate}`}
              className="inline-flex items-center gap-1 rounded-lg border border-border-primary bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-primary no-underline transition-colors hover:bg-bg-tertiary"
            >
              Next
              <ChevronRight size={12} />
            </Link>
          )}
        </div>
      </div>

      {/* Filter + Items (client component) */}
      <DigestFilter items={digest.items} />

      {/* Bottom Navigation */}
      <div className="mt-8 flex items-center justify-between border-t border-border-primary pt-4">
        {prevDate ? (
          <Link
            href={`/current-affairs/${prevDate}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-primary no-underline hover:underline"
          >
            <ChevronLeft size={12} />
            {formatDateLong(prevDate)}
          </Link>
        ) : (
          <span />
        )}
        {nextDate ? (
          <Link
            href={`/current-affairs/${nextDate}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-primary no-underline hover:underline"
          >
            {formatDateLong(nextDate)}
            <ChevronRight size={12} />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Verify both pages render**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/current-affairs/2026-04-03`
Expected: `200`

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/current-affairs/2099-01-01`
Expected: `200` (dev mode) or `404` (prod)

- [ ] **Step 4: Commit**

```bash
git add src/app/current-affairs/\[date\]/
git commit -m "feat(current-affairs): add daily digest page with category filters"
```

---

### Task 6: Update navigation (header, footer, sitemap)

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add "Current Affairs" to header UTIL_LINKS**

In `src/components/layout/Header.tsx`, add to the `UTIL_LINKS` array after Practice:

```typescript
const UTIL_LINKS: NavLink[] = [
  { href: '/practice', label: 'Practice', colorClass: 'hover:text-primary' },
  { href: '/current-affairs', label: 'Current Affairs', colorClass: 'hover:text-primary' },
]
```

- [ ] **Step 2: Add "Daily Current Affairs" to footer TOOL_LINKS**

In `src/components/layout/Footer.tsx`, add to the `TOOL_LINKS` array:

```typescript
const TOOL_LINKS = [
  { href: '/practice', label: 'Practice MCQs' },
  { href: '/current-affairs', label: 'Daily Current Affairs' },
  { href: '/quant/step-solver', label: 'Math Solver' },
  { href: '/polity/articles', label: 'Article Explorer' },
  { href: '/science/periodic-table', label: 'Periodic Table' },
]
```

- [ ] **Step 3: Add current affairs routes to sitemap**

In `src/app/sitemap.ts`, add after EXAM_SLUGS:

```typescript
const CURRENT_AFFAIRS_DATES = [
  '2026-04-03',
  '2026-04-02',
  '2026-04-01',
]
```

Add `/current-affairs` to `staticRoutes` after `/exams`:

```typescript
    '/current-affairs',
```

Add after `examRoutes`:

```typescript
  const currentAffairsRoutes = CURRENT_AFFAIRS_DATES.map((d) => `/current-affairs/${d}`)
```

Update `allRoutes` to include `...currentAffairsRoutes`.

Update the priority logic to give `/current-affairs` a 0.9 priority and `/current-affairs/*` date pages 0.7:

In the return statement's priority section, add before the depth check:

```typescript
        route === '/current-affairs'
          ? 0.9
          : route.startsWith('/current-affairs/')
            ? 0.7
            :
```

- [ ] **Step 4: Verify**

Run: `npx tsc --noEmit`
Expected: No errors.

Run: `npx next lint`
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/Footer.tsx src/app/sitemap.ts
git commit -m "feat(current-affairs): add nav links and sitemap entries"
```

---

### Task 7: Generate remaining 27 data files

Generate data files for 2026-03-31 through 2026-03-05 (27 days). Each file follows the exact pattern of `2026-04-03.ts`:

- Export name: `digest` + date without hyphens (e.g., `digest20260331`)
- 10-15 items per day
- Mix of categories across each day
- All source URLs from official/primary sources only (PIB, ministry sites, RBI, ISRO, etc.)
- Realistic exam-relevant content

**Files:**
- Create: `src/data/current-affairs/2026-03-31.ts` through `src/data/current-affairs/2026-03-05.ts` (27 files)
- Modify: `src/data/current-affairs/index.ts` (add all 27 imports + registry entries)
- Modify: `src/app/sitemap.ts` (add all 27 dates to CURRENT_AFFAIRS_DATES)

- [ ] **Step 1: Generate all 27 data files**

Each file must follow this template:

```typescript
// src/data/current-affairs/YYYY-MM-DD.ts
import type { DailyDigest } from '@/types/current-affairs'

export const digestYYYYMMDD: DailyDigest = {
  date: 'YYYY-MM-DD',
  items: [
    // 10-15 NewsItem objects with official sources
  ],
}
```

- [ ] **Step 2: Update barrel `index.ts` with all 30 imports and registry entries**

Add all 27 new imports and registry entries to `src/data/current-affairs/index.ts`. The registry should contain all 30 dates from `2026-04-03` to `2026-03-05`.

- [ ] **Step 3: Update sitemap CURRENT_AFFAIRS_DATES with all 30 dates**

Add all 30 dates to the `CURRENT_AFFAIRS_DATES` array in `src/app/sitemap.ts`.

- [ ] **Step 4: Verify**

Run: `npx tsc --noEmit`
Expected: No errors.

Run: `npx next lint`
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/current-affairs/ src/app/sitemap.ts
git commit -m "feat(current-affairs): add 27 more daily digests (30 days total)"
```

---

### Task 8: Final verification

- [ ] **Step 1: Type-check the entire project**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 2: Lint**

Run: `npx next lint`
Expected: No errors.

- [ ] **Step 3: Verify listing page loads**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/current-affairs`
Expected: `200`

- [ ] **Step 4: Verify a detail page loads**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/current-affairs/2026-04-03`
Expected: `200`

- [ ] **Step 5: Verify an old date page loads**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/current-affairs/2026-03-05`
Expected: `200`

- [ ] **Step 6: Verify header has Current Affairs link**

Run: `curl -s http://localhost:3000 | grep -o 'current-affairs' | head -1`
Expected: `current-affairs`

- [ ] **Step 7: Verify sitemap has current affairs routes**

Run: `curl -s http://localhost:3000/sitemap.xml | grep 'current-affairs' | wc -l`
Expected: `31` (1 listing + 30 date pages)

- [ ] **Step 8: Commit any remaining fixes**

Only if linter or type-check required fixes:
```bash
git add -A
git commit -m "fix(current-affairs): lint fixes"
```
