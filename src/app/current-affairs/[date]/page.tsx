import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllDates, getDigest } from '@/data/current-affairs'
import { DigestFilter } from './DigestFilter'
import { DateSelector } from '../_components/DateSelector'
import { DayStrip } from '../_components/DayStrip'
import { formatDateEyebrow, formatDateShort } from '../_components/categories'

export function generateStaticParams() {
  return getAllDates().map((date) => ({ date }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>
}): Promise<Metadata> {
  const { date } = await params
  const formatted = formatDateEyebrow(date)
  return {
    title: `${formatDateShort(date)} — Daily Current Affairs | GovtExamsStudy`,
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
    <main style={{ background: 'var(--paper)' }}>
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
              flexWrap: 'wrap',
            }}
          >
            <Link href="/" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>
              Home
            </Link>
            <span aria-hidden style={{ color: 'var(--ink-4)' }}>
              /
            </span>
            <Link
              href="/current-affairs"
              style={{ color: 'var(--ink-3)', textDecoration: 'none' }}
            >
              Current Affairs
            </Link>
            <span aria-hidden style={{ color: 'var(--ink-4)' }}>
              /
            </span>
            <span style={{ color: 'var(--ink-2)' }}>{formatDateShort(date)}</span>
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
                {formatDateEyebrow(date)}
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
                · {digest.items.length} items · filter by topic below.
              </p>
            </div>

            <DateSelector dates={allDates} active={date} basePath="/current-affairs/date" />
          </div>

          <div style={{ marginTop: 22 }}>
            <DayStrip dates={allDates} active={date} basePath="/current-affairs/date" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-10">
        <DigestFilter items={digest.items} />

        <nav
          style={{
            marginTop: 32,
            paddingTop: 18,
            borderTop: '.5px solid var(--rule)',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 10,
            flexWrap: 'wrap',
          }}
        >
          {prevDate ? (
            <Link
              href={`/current-affairs/${prevDate}`}
              className="mono"
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: 'var(--indigo-600)',
                letterSpacing: '.06em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span aria-hidden>←</span> {formatDateShort(prevDate)}
            </Link>
          ) : (
            <span />
          )}
          {nextDate ? (
            <Link
              href={`/current-affairs/${nextDate}`}
              className="mono"
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: 'var(--indigo-600)',
                letterSpacing: '.06em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {formatDateShort(nextDate)} <span aria-hidden>→</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </section>
    </main>
  )
}
