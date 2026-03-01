'use client'

import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { clsx } from 'clsx'
import type { HistoricalEvent, HistoryCategory } from '@/types/history'

interface EventCardProps {
  event: HistoricalEvent | null
  onClose: () => void
  onEventClick: (eventId: string) => void
  allEvents?: HistoricalEvent[]
}

const CATEGORY_COLORS: Record<HistoryCategory, string> = {
  ancient: 'bg-amber-100 text-amber-800',
  medieval: 'bg-orange-100 text-orange-800',
  modern: 'bg-red-100 text-red-800',
  'post-independence': 'bg-emerald-100 text-emerald-800',
  world: 'bg-blue-100 text-blue-800',
}

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`
  return `${year} CE`
}

export function EventCard({ event, onClose, onEventClick, allEvents = [] }: EventCardProps) {
  if (!event) return null

  const relatedEventObjects = allEvents.filter((e) => event.relatedEvents.includes(e.id))

  return (
    <AnimatePresence>
      {event && (
        <motion.aside
          role="dialog"
          aria-label={event.title}
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-border-primary bg-bg-primary shadow-xl"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <div className="flex items-center justify-between border-b border-border-primary p-4">
            <div>
              <h2 className="text-lg font-semibold text-text-primary">{event.title}</h2>
              <p className="text-sm text-text-secondary">
                {formatYear(event.year)}
                {event.endYear && ` \u2013 ${formatYear(event.endYear)}`}
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-md p-1.5 text-text-muted transition-colors hover:bg-bg-tertiary hover:text-text-primary"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <span
              className={clsx(
                'inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize',
                CATEGORY_COLORS[event.category]
              )}
            >
              {event.category === 'post-independence' ? 'Post-Independence' : event.category}
            </span>

            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {event.description}
            </p>

            {event.causes.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-text-primary">Causes</h3>
                <ul className="mt-1.5 list-inside list-disc space-y-1 text-sm text-text-secondary">
                  {event.causes.map((cause, i) => (
                    <li key={i}>{cause}</li>
                  ))}
                </ul>
              </div>
            )}

            {event.effects.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-text-primary">Effects</h3>
                <ul className="mt-1.5 list-inside list-disc space-y-1 text-sm text-text-secondary">
                  {event.effects.map((effect, i) => (
                    <li key={i}>{effect}</li>
                  ))}
                </ul>
              </div>
            )}

            {event.persons.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-text-primary">Key Persons</h3>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {event.persons.map((person) => (
                    <span
                      key={person}
                      className="rounded-md bg-bg-tertiary px-2 py-0.5 text-xs capitalize text-text-secondary"
                    >
                      {person.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {relatedEventObjects.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-text-primary">Related Events</h3>
                <div className="mt-1.5 flex flex-col gap-1.5">
                  {relatedEventObjects.map((related) => (
                    <button
                      key={related.id}
                      onClick={() => onEventClick(related.id)}
                      className="text-left text-sm text-amber-600 underline-offset-2 transition-colors hover:text-amber-700 hover:underline"
                    >
                      {related.title} ({formatYear(related.year)})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
