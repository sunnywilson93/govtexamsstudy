'use client'

import { useState } from 'react'
import type { NewsItem, NewsCategory } from '@/types/current-affairs'
import { NewsCard } from '../_components/NewsCard'
import { CATEGORY_COLORS } from '../_components/categories'

interface DigestFilterProps {
  items: NewsItem[]
}

export function DigestFilter({ items }: DigestFilterProps) {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'all'>('all')

  const presentCategories = Array.from(new Set(items.map((i) => i.category)))
  const filtered =
    activeCategory === 'all' ? items : items.filter((i) => i.category === activeCategory)

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 6,
          flexWrap: 'wrap',
          marginBottom: 22,
        }}
      >
        <FilterChip
          active={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          label="All"
          count={items.length}
        />
        {presentCategories.map((cat) => {
          const config = CATEGORY_COLORS[cat]
          const count = items.filter((i) => i.category === cat).length
          return (
            <FilterChip
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              label={config.label}
              count={count}
              color={config.c}
              ink={config.ink}
            />
          )
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        {filtered.map((item, i) => (
          <NewsCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </>
  )
}

function FilterChip({
  active,
  onClick,
  label,
  count,
  color,
  ink,
}: {
  active: boolean
  onClick: () => void
  label: string
  count: number
  color?: string
  ink?: string
}) {
  const tint = color ?? 'var(--ink)'
  const tintInk = ink ?? 'var(--ink)'
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: '7px 12px',
        borderRadius: 999,
        background: active ? 'var(--ink)' : 'var(--paper)',
        color: active ? 'var(--paper)' : 'var(--ink-2)',
        border: active ? '1px solid var(--ink)' : '.5px solid var(--rule-2)',
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        cursor: 'pointer',
        boxShadow: active ? 'var(--sh-1)' : 'none',
        transition: 'all var(--dur-fast) var(--ease-out-soft)',
      }}
    >
      {color && (
        <span
          aria-hidden
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            background: active ? tint : color,
          }}
        />
      )}
      <span>{label}</span>
      <span
        className="mono"
        style={{
          fontSize: 10.5,
          fontWeight: 700,
          color: active ? 'color-mix(in oklch, var(--paper) 70%, transparent)' : tintInk,
          letterSpacing: '.04em',
          opacity: active ? 1 : color ? 0.85 : 0.6,
        }}
      >
        {count}
      </span>
    </button>
  )
}
