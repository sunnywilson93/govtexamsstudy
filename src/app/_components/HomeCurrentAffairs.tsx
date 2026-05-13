import Link from 'next/link'
import { getLatestDigest } from '@/data/current-affairs'
import type { NewsCategory, NewsItem } from '@/types/current-affairs'

const CATEGORY_COLORS: Record<NewsCategory, { c: string; ink: string; label: string }> = {
  polity: { c: 'var(--subj-polity)', ink: 'var(--subj-polity-ink)', label: 'Polity' },
  economics: {
    c: 'var(--subj-economics)',
    ink: 'var(--subj-economics-ink)',
    label: 'Economy',
  },
  history: { c: 'var(--subj-history)', ink: 'var(--subj-history-ink)', label: 'History' },
  geography: {
    c: 'var(--subj-geography)',
    ink: 'var(--subj-geography-ink)',
    label: 'Geography',
  },
  science: { c: 'var(--subj-science)', ink: 'var(--subj-science-ink)', label: 'Science' },
  international: { c: '#6366f1', ink: '#3730a3', label: 'World' },
  environment: { c: '#16a34a', ink: '#166534', label: 'Environment' },
  defence: { c: '#dc2626', ink: '#991b1b', label: 'Defence' },
  appointments: { c: '#9333ea', ink: '#6b21a8', label: 'Appointments' },
  schemes: { c: 'var(--subj-economics)', ink: 'var(--subj-economics-ink)', label: 'Schemes' },
}

function parseExamTags(rel?: string): string[] {
  if (!rel) return []
  const segs = rel
    .split(/[|;]/)
    .flatMap((s) => s.split(':'))
    .map((s) => s.trim())
    .filter(Boolean)
  return Array.from(new Set(segs))
    .filter((s) => /^(SSC|UPSC|IBPS|RBI|RRB|CDS|NDA|KAS|MPSC|BPSC|UPPSC|SBI)/i.test(s))
    .slice(0, 2)
}

function NewsCard({ n }: { n: NewsItem }) {
  const cat = CATEGORY_COLORS[n.category] ?? CATEGORY_COLORS.polity
  const tags = parseExamTags(n.examRelevance)
  return (
    <article
      style={{
        padding: 16,
        borderRadius: 12,
        background: 'var(--paper)',
        border: '.5px solid var(--rule)',
        boxShadow: 'var(--sh-1)',
        flex: '0 0 80%',
        scrollSnapAlign: 'start',
      }}
      className="sm:flex-auto"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
        <span
          className="mono"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            padding: '3px 7px 3px 4px',
            borderRadius: 4,
            background: `color-mix(in oklch, ${cat.c} 14%, var(--paper))`,
            color: cat.ink,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '.04em',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: cat.c,
            }}
          />
          {cat.label}
        </span>
        <span className="mono" style={{ fontSize: 9.5, color: 'var(--ink-4)' }}>
          PIB
        </span>
      </div>
      <div
        style={{
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: '-.01em',
          lineHeight: 1.3,
          color: 'var(--ink)',
        }}
      >
        {n.headline}
      </div>
      <div
        style={{
          fontSize: 12.5,
          color: 'var(--ink-2)',
          marginTop: 6,
          lineHeight: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {n.summary}
      </div>
      {tags.length > 0 && (
        <div style={{ display: 'flex', gap: 4, marginTop: 12, flexWrap: 'wrap' }}>
          {tags.map((e) => (
            <span key={e} className="tag">
              {e}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export function HomeCurrentAffairs() {
  const digest = getLatestDigest()
  if (!digest) return null
  const items = digest.items.slice(0, 4)
  const dateLabel = new Date(digest.date + 'T00:00:00').toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3 sm:mb-7">
        <div>
          <div
            className="mono text-[10.5px] font-bold uppercase"
            style={{ color: 'var(--ink-3)', letterSpacing: '.1em' }}
          >
            {dateLabel}
          </div>
          <h2
            className="mt-1 text-[22px] font-extrabold sm:text-[28px]"
            style={{ color: 'var(--ink)', letterSpacing: '-.02em' }}
          >
            Daily Current Affairs
          </h2>
        </div>
        <Link
          href="/current-affairs"
          className="mono no-underline"
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--indigo-600)',
            letterSpacing: '.04em',
          }}
        >
          PIB-SOURCED · {digest.items.length} ITEMS · OPEN ALL →
        </Link>
      </div>

      {/* Mobile: snap-scroll. Desktop: 4-col grid */}
      <div
        className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {items.map((n) => (
          <NewsCard key={n.id} n={n} />
        ))}
      </div>
    </section>
  )
}
