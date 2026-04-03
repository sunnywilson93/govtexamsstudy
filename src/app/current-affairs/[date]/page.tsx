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
