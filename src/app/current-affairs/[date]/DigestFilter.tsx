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
