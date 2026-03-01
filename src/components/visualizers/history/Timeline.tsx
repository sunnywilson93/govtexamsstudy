'use client'

import { useMemo, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import type { HistoricalEvent, HistoryCategory, Period } from '@/types/history'
import { EventCard } from './EventCard'

interface TimelineProps {
  events: HistoricalEvent[]
  periods: Period[]
}

type FilterCategory = 'all' | HistoryCategory

const FILTER_OPTIONS: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Ancient', value: 'ancient' },
  { label: 'Medieval', value: 'medieval' },
  { label: 'Modern', value: 'modern' },
  { label: 'Post-Independence', value: 'post-independence' },
]

const PERIOD_COLORS: Record<string, string> = {
  ancient: 'bg-amber-50 border-amber-200',
  medieval: 'bg-orange-50 border-orange-200',
  mughal: 'bg-rose-50 border-rose-200',
  colonial: 'bg-red-50 border-red-200',
  'post-independence': 'bg-emerald-50 border-emerald-200',
}

const CATEGORY_DOT_COLORS: Record<HistoryCategory, string> = {
  ancient: 'bg-amber-500',
  medieval: 'bg-orange-500',
  modern: 'bg-red-500',
  'post-independence': 'bg-emerald-500',
  world: 'bg-blue-500',
}

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`
  return `${year} CE`
}

export function Timeline({ events, periods }: TimelineProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => a.year - b.year),
    [events]
  )

  const filteredEvents = useMemo(
    () =>
      activeFilter === 'all'
        ? sortedEvents
        : sortedEvents.filter((e) => e.category === activeFilter),
    [sortedEvents, activeFilter]
  )

  const timelineRange = useMemo(() => {
    const allYears = periods.flatMap((p) => [p.startYear, p.endYear])
    return { min: Math.min(...allYears), max: Math.max(...allYears) }
  }, [periods])

  const totalSpan = timelineRange.max - timelineRange.min
  const timelineWidth = 3000

  function yearToX(year: number): number {
    return ((year - timelineRange.min) / totalSpan) * timelineWidth
  }

  function handleEventClick(eventId: string) {
    const event = events.find((e) => e.id === eventId)
    if (event) setSelectedEvent(event)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Category filters">
        {FILTER_OPTIONS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            className={clsx(
              'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
              activeFilter === value
                ? 'bg-amber-600 text-white'
                : 'bg-bg-elevated text-text-secondary hover:bg-bg-tertiary'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        ref={scrollRef}
        className="relative overflow-x-auto rounded-lg border border-border-primary bg-bg-elevated"
        role="region"
        aria-label="Historical timeline"
      >
        <div className="relative" style={{ width: timelineWidth, minHeight: 200 }}>
          {periods.map((period) => {
            const left = yearToX(period.startYear)
            const width = yearToX(period.endYear) - left
            const colorClass = PERIOD_COLORS[period.id] ?? 'bg-gray-50 border-gray-200'

            return (
              <div
                key={period.id}
                className={clsx('absolute inset-y-0 border-r', colorClass)}
                style={{ left, width }}
              >
                <span className="absolute left-2 top-2 text-xs font-medium text-text-muted">
                  {period.name}
                </span>
              </div>
            )
          })}

          <div
            className="absolute left-0 right-0 top-1/2 h-0.5 bg-border-secondary"
            style={{ width: timelineWidth }}
          />

          {filteredEvents.map((event) => {
            const x = yearToX(event.year)
            const hasEndYear = !!event.endYear
            const dotSize = hasEndYear ? 14 : 10
            const colorClass = CATEGORY_DOT_COLORS[event.category]

            return (
              <motion.div
                key={event.id}
                className="absolute flex flex-col items-center cursor-pointer"
                style={{
                  left: x - dotSize / 2,
                  top: `calc(50% - ${dotSize / 2}px)`,
                }}
                whileHover={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                onClick={() => setSelectedEvent(event)}
                role="button"
                tabIndex={0}
                aria-label={`${event.title} (${formatYear(event.year)})`}
              >
                <div
                  className={clsx(
                    'rounded-full shadow-sm transition-shadow hover:shadow-md',
                    colorClass
                  )}
                  style={{ width: dotSize, height: dotSize }}
                />
                <span
                  className="mt-1 max-w-[100px] whitespace-nowrap text-[10px] font-medium text-text-secondary"
                  style={{ transform: 'rotate(-45deg)', transformOrigin: 'top left' }}
                >
                  {event.title}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      <EventCard
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onEventClick={handleEventClick}
        allEvents={events}
      />
    </div>
  )
}
