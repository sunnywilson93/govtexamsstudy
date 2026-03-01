'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { clsx } from 'clsx'
import type { Element, ElementCategory } from '@/types/science'
import { ElementDetail } from './ElementDetail'
import { CATEGORY_COLORS } from './category-colors'

interface PeriodicTableProps {
  elements: Element[]
}

type FilterOption = 'all' | 'metals' | 'nonmetals' | 'noble-gases'

const METAL_CATEGORIES: ElementCategory[] = [
  'alkali-metal',
  'alkaline-earth',
  'transition-metal',
  'post-transition-metal',
  'lanthanide',
  'actinide',
]

const NONMETAL_CATEGORIES: ElementCategory[] = [
  'nonmetal',
  'halogen',
  'metalloid',
]

const FILTER_OPTIONS: { value: FilterOption; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'metals', label: 'Metals' },
  { value: 'nonmetals', label: 'Nonmetals' },
  { value: 'noble-gases', label: 'Noble Gases' },
]

const LANTHANIDE_RANGE = { start: 57, end: 71 }
const ACTINIDE_RANGE = { start: 89, end: 103 }

function isLanthanide(el: Element): boolean {
  return el.atomicNumber >= LANTHANIDE_RANGE.start && el.atomicNumber <= LANTHANIDE_RANGE.end
}

function isActinide(el: Element): boolean {
  return el.atomicNumber >= ACTINIDE_RANGE.start && el.atomicNumber <= ACTINIDE_RANGE.end
}

function getGridPosition(el: Element): { col: number; row: number } {
  if (isLanthanide(el)) {
    return {
      col: el.atomicNumber - LANTHANIDE_RANGE.start + 4,
      row: 9,
    }
  }
  if (isActinide(el)) {
    return {
      col: el.atomicNumber - ACTINIDE_RANGE.start + 4,
      row: 10,
    }
  }
  return { col: el.group, row: el.period }
}

export function PeriodicTable({ elements }: PeriodicTableProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<FilterOption>('all')
  const [selectedElement, setSelectedElement] = useState<Element | null>(null)

  const filteredElements = useMemo(() => {
    let result = elements

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (el) =>
          el.name.toLowerCase().includes(q) ||
          el.symbol.toLowerCase().includes(q)
      )
    }

    if (filter === 'metals') {
      result = result.filter((el) => METAL_CATEGORIES.includes(el.category))
    } else if (filter === 'nonmetals') {
      result = result.filter((el) => NONMETAL_CATEGORIES.includes(el.category))
    } else if (filter === 'noble-gases') {
      result = result.filter((el) => el.category === 'noble-gas')
    }

    return result
  }, [elements, searchQuery, filter])

  const hasSearch = searchQuery.trim().length > 0

  const displayElements = useMemo(() => {
    if (hasSearch) return filteredElements
    return elements
  }, [elements, filteredElements, hasSearch])

  const filteredSet = useMemo(
    () => new Set(filteredElements.map((el) => el.atomicNumber)),
    [filteredElements]
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            placeholder="Search by name or symbol..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-border-primary bg-bg-elevated py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted focus:border-subject-science focus:outline-none"
            aria-label="Search elements"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={clsx(
                'rounded-md px-3 py-1.5 text-sm transition-colors',
                filter === opt.value
                  ? 'bg-subject-science text-white'
                  : 'bg-bg-elevated text-text-secondary hover:bg-bg-tertiary'
              )}
              aria-pressed={filter === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div
          className="grid gap-0.5"
          style={{
            gridTemplateColumns: 'repeat(18, minmax(48px, 1fr))',
            gridTemplateRows: 'repeat(10, auto)',
          }}
        >
          {displayElements.map((el) => {
            const pos = getGridPosition(el)
            const colors = CATEGORY_COLORS[el.category]
            const visible = filteredSet.has(el.atomicNumber)

            return (
              <motion.button
                key={el.atomicNumber}
                onClick={() => setSelectedElement(el)}
                className={clsx(
                  'group relative flex flex-col items-center justify-center rounded border p-1 text-center transition-opacity',
                  visible ? 'cursor-pointer' : 'cursor-default opacity-20'
                )}
                style={{
                  gridColumn: pos.col,
                  gridRow: pos.row,
                  backgroundColor: colors.bg,
                  borderColor: colors.border,
                  minHeight: '52px',
                }}
                whileHover={visible ? { scale: 1.1 } : undefined}
                whileTap={visible ? { scale: 0.95 } : undefined}
                aria-label={`${el.name}, atomic number ${el.atomicNumber}`}
                tabIndex={visible ? 0 : -1}
              >
                <span className="text-[9px] leading-none text-text-muted">
                  {el.atomicNumber}
                </span>
                <span
                  className="text-sm font-bold leading-tight"
                  style={{ color: colors.text }}
                >
                  {el.symbol}
                </span>
                <span className="truncate text-[7px] leading-none text-text-muted">
                  {el.name}
                </span>
                <div className="pointer-events-none absolute -top-10 left-1/2 z-30 hidden -translate-x-1/2 whitespace-nowrap rounded bg-bg-primary px-2 py-1 text-xs shadow-lg group-hover:block">
                  {el.name} ({el.atomicMass})
                </div>
              </motion.button>
            )
          })}

          <div
            className="col-span-15 mt-1 flex items-center pl-1 text-[10px] text-text-muted"
            style={{ gridColumn: '4 / 19', gridRow: 8 }}
          >
            &uarr; Lanthanides &amp; Actinides below
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(CATEGORY_COLORS).map(([category, colors]) => (
          <div key={category} className="flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-sm border"
              style={{ backgroundColor: colors.bg, borderColor: colors.border }}
            />
            <span className="text-[10px] text-text-muted">
              {formatCategory(category)}
            </span>
          </div>
        ))}
      </div>

      <ElementDetail
        element={selectedElement}
        onClose={() => setSelectedElement(null)}
      />
    </div>
  )
}

function formatCategory(category: string): string {
  return category
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
