import Link from 'next/link'
import { getAllDates, getDigest, getLatestDigest } from '@/data/current-affairs'
import { NewsCard } from './_components/NewsCard'
import { DateSelector } from './_components/DateSelector'
import { DayStrip } from './_components/DayStrip'
import { formatDateEyebrow } from './_components/categories'

type SearchParams = Promise<{ date?: string }>

export default async function CurrentAffairsPage({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  const allDates = getAllDates()
  const latest = getLatestDigest()
  if (!latest) {
    return (
      <main
        style={{ background: 'var(--paper)', minHeight: '60vh' }}
        className="mx-auto max-w-3xl px-4 py-16 text-center"
      >
        <p style={{ color: 'var(--ink-2)' }}>No current affairs available yet. Check back tomorrow.</p>
      </main>
    )
  }

  const resolved = searchParams ? await searchParams : {}
  const requested = resolved.date
  const isValid = !!requested && allDates.includes(requested)
  const digest = isValid ? getDigest(requested!)! : latest
  const fallback = !!requested && !isValid

  return (
    <main style={{ background: 'var(--paper)' }}>
      <TopBand
        digest={digest}
        allDates={allDates}
        fallback={fallback}
        requested={requested}
      />

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          {digest.items.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <FooterNote latestDate={latest.date} currentDate={digest.date} />
      </section>
    </main>
  )
}

function TopBand({
  digest,
  allDates,
  fallback,
  requested,
}: {
  digest: { date: string; items: { id: string }[] }
  allDates: string[]
  fallback: boolean
  requested?: string
}) {
  return (
    <section
      className="dot-bg"
      style={{
        position: 'relative',
        background: 'var(--paper-2)',
        borderBottom: '.5px solid var(--rule)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(100% 80% at 0% 0%, rgba(99,102,241,.10), transparent 55%), radial-gradient(80% 80% at 100% 100%, rgba(245,158,11,.08), transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="mx-auto max-w-6xl px-4 pb-7 pt-10 sm:px-6 sm:pb-9 sm:pt-14 lg:px-10"
        style={{ position: 'relative' }}
      >
        <nav
          className="mono"
          aria-label="Breadcrumb"
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            color: 'var(--ink-3)',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            marginBottom: 14,
            display: 'inline-flex',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Link href="/" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>
            Home
          </Link>
          <span aria-hidden style={{ color: 'var(--ink-4)' }}>
            /
          </span>
          <span style={{ color: 'var(--ink-2)' }}>Current Affairs</span>
        </nav>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 18,
          }}
        >
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <div
              className="mono"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '.14em',
                color: 'var(--ink-3)',
                textTransform: 'uppercase',
              }}
            >
              {formatDateEyebrow(digest.date)}
            </div>
            <h1
              style={{
                margin: '8px 0 0',
                fontSize: 'var(--t-display)',
                fontWeight: 800,
                letterSpacing: '-.03em',
                lineHeight: 1,
                color: 'var(--ink)',
              }}
            >
              Daily Current Affairs
            </h1>
            <p
              style={{
                margin: '12px 0 0',
                fontSize: 14.5,
                color: 'var(--ink-2)',
                maxWidth: 560,
                lineHeight: 1.55,
              }}
            >
              <span className="mono" style={{ fontWeight: 700, color: 'var(--ink)' }}>
                PIB-sourced
              </span>{' '}
              · {digest.items.length} items today · linked to syllabus topics for UPSC, SSC,
              IBPS &amp; State PSCs.
            </p>
          </div>

          <DateSelector dates={allDates} active={digest.date} />
        </div>

        {fallback && requested && (
          <div
            role="alert"
            style={{
              marginTop: 18,
              padding: '10px 14px',
              borderRadius: 'var(--r-sm)',
              background: 'color-mix(in oklch, var(--amber-500) 12%, var(--paper))',
              border: '.5px solid color-mix(in oklch, var(--amber-500) 35%, transparent)',
              color: 'var(--amber-700)',
              fontSize: 12.5,
              lineHeight: 1.5,
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start',
            }}
          >
            <span aria-hidden style={{ fontSize: 14, lineHeight: 1.2 }}>
              ⓘ
            </span>
            <span>
              No digest for{' '}
              <span className="mono" style={{ fontWeight: 700 }}>
                {requested}
              </span>
              . Showing the latest available day instead.
            </span>
          </div>
        )}

        <div style={{ marginTop: 22 }}>
          <DayStrip dates={allDates} active={digest.date} />
        </div>
      </div>
    </section>
  )
}

function FooterNote({ latestDate, currentDate }: { latestDate: string; currentDate: string }) {
  const isLatest = latestDate === currentDate
  return (
    <div
      style={{
        marginTop: 32,
        padding: '16px 18px',
        borderTop: '.5px solid var(--rule)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 12,
          color: 'var(--ink-3)',
          lineHeight: 1.5,
          maxWidth: 560,
        }}
      >
        Items curated from official PIB releases. Tap{' '}
        <span className="mono" style={{ fontWeight: 700, color: 'var(--ink-2)' }}>
          Read source
        </span>{' '}
        on any card to verify directly with the originating ministry or body.
      </p>
      {!isLatest && (
        <Link
          href={`/current-affairs?date=${latestDate}`}
          className="mono"
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            color: 'var(--indigo-600)',
            letterSpacing: '.06em',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          ← Back to latest
        </Link>
      )}
    </div>
  )
}
