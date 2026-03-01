'use client'

import { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import type { BudgetItem } from '@/types/economics'

interface BudgetTreemapProps {
  items: BudgetItem[]
}

interface BreadcrumbEntry {
  id: string
  name: string
}

function formatAmount(amountInCrores: number): string {
  if (amountInCrores >= 100000) {
    return `${(amountInCrores / 100000).toFixed(2)} Lakh Cr`
  }
  return `${amountInCrores.toLocaleString('en-IN')} Cr`
}

const categoryColors: Record<string, string> = {
  'revenue-total': 'bg-emerald-600',
  'revenue-revenue-receipts': 'bg-emerald-500',
  'revenue-tax': 'bg-emerald-400',
  'revenue-direct-tax': 'bg-emerald-500',
  'revenue-indirect-tax': 'bg-teal-500',
  'revenue-non-tax': 'bg-green-500',
  'revenue-capital-receipts': 'bg-lime-600',
  'revenue-borrowings': 'bg-lime-500',
  'revenue-disinvestment': 'bg-lime-400',
  'revenue-recoveries': 'bg-lime-300',
  'expenditure-total': 'bg-orange-600',
  'expenditure-revenue-expenditure': 'bg-orange-500',
  'expenditure-interest': 'bg-red-500',
  'expenditure-subsidies': 'bg-red-400',
  'expenditure-defence': 'bg-orange-400',
  'expenditure-pensions': 'bg-amber-500',
  'expenditure-schemes': 'bg-amber-400',
  'expenditure-transfers': 'bg-yellow-500',
  'expenditure-other': 'bg-orange-300',
  'expenditure-capital-expenditure': 'bg-rose-500',
  'expenditure-infrastructure': 'bg-rose-400',
}

function getCellColor(item: BudgetItem): string {
  const key = `${item.category}-${item.subcategory}`
  return categoryColors[key] ?? (item.category === 'revenue' ? 'bg-emerald-400' : 'bg-orange-400')
}

function getCellTextColor(item: BudgetItem): string {
  return item.category === 'revenue' ? 'text-emerald-950' : 'text-orange-950'
}

export function BudgetTreemap({ items }: BudgetTreemapProps) {
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbEntry[]>([])
  const [currentItems, setCurrentItems] = useState<BudgetItem[]>(items)

  const handleDrillDown = useCallback(
    (item: BudgetItem) => {
      if (!item.children || item.children.length === 0) return
      setBreadcrumb((prev) => [...prev, { id: item.id, name: item.name }])
      setCurrentItems(item.children)
    },
    [],
  )

  const handleNavigateUp = useCallback(() => {
    if (breadcrumb.length === 0) return

    const newBreadcrumb = breadcrumb.slice(0, -1)
    setBreadcrumb(newBreadcrumb)

    let target = items
    for (const entry of newBreadcrumb) {
      const found = target.find((i) => i.id === entry.id)
      if (found?.children) {
        target = found.children
      }
    }
    setCurrentItems(target)
  }, [breadcrumb, items])

  const handleBreadcrumbClick = useCallback(
    (index: number) => {
      if (index === -1) {
        setBreadcrumb([])
        setCurrentItems(items)
        return
      }

      const newBreadcrumb = breadcrumb.slice(0, index + 1)
      setBreadcrumb(newBreadcrumb)

      let target = items
      for (const entry of newBreadcrumb) {
        const found = target.find((i) => i.id === entry.id)
        if (found?.children) {
          target = found.children
        }
      }
      setCurrentItems(target)
    },
    [breadcrumb, items],
  )

  const totalPercentage = useMemo(
    () => currentItems.reduce((sum, item) => sum + item.percentage, 0),
    [currentItems],
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1 text-sm">
        <button
          type="button"
          className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
          onClick={() => handleBreadcrumbClick(-1)}
        >
          Budget
        </button>
        {breadcrumb.map((entry, index) => (
          <span key={entry.id} className="flex items-center gap-1">
            <ChevronRight size={14} className="text-text-muted" />
            <button
              type="button"
              className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              onClick={() => handleBreadcrumbClick(index)}
            >
              {entry.name}
            </button>
          </span>
        ))}
      </div>

      {breadcrumb.length > 0 && (
        <button
          type="button"
          className="self-start rounded-md border border-border-primary bg-bg-elevated px-3 py-1.5 text-sm text-text-secondary transition-colors cursor-pointer hover:bg-bg-tertiary"
          onClick={handleNavigateUp}
        >
          Back
        </button>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={breadcrumb.map((b) => b.id).join('-') || 'root'}
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {currentItems.map((item) => {
            const widthPercent = totalPercentage > 0
              ? Math.max((item.percentage / totalPercentage) * 100, 8)
              : 100 / currentItems.length
            const hasChildren = item.children && item.children.length > 0

            return (
              <motion.div
                key={item.id}
                className={clsx(
                  'relative flex flex-col justify-between rounded-lg p-3 min-h-[100px] transition-shadow',
                  getCellColor(item),
                  hasChildren && 'cursor-pointer hover:shadow-lg',
                )}
                style={{ flexBasis: `${widthPercent}%`, flexGrow: 1, minWidth: '120px' }}
                onClick={() => handleDrillDown(item)}
                role={hasChildren ? 'button' : undefined}
                tabIndex={hasChildren ? 0 : undefined}
                onKeyDown={(e) => {
                  if (hasChildren && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault()
                    handleDrillDown(item)
                  }
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                data-testid={`budget-cell-${item.id}`}
              >
                <span className={clsx('text-sm font-semibold leading-tight', getCellTextColor(item))}>
                  {item.name}
                </span>
                <div className="mt-2">
                  <span className={clsx('text-lg font-bold tabular-nums', getCellTextColor(item))}>
                    {formatAmount(item.amount)}
                  </span>
                  <span className={clsx('ml-1.5 text-xs font-medium opacity-80', getCellTextColor(item))}>
                    ({item.percentage}%)
                  </span>
                </div>
                {hasChildren && (
                  <span className={clsx('absolute right-2 top-2 text-xs opacity-60', getCellTextColor(item))}>
                    Tap to explore
                  </span>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
