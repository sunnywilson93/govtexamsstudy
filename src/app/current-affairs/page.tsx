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
                  <div className="flex flex-wrap items-center justify-between gap-2">
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
