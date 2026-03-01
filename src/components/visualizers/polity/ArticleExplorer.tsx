'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, LayoutGrid, List, Search } from 'lucide-react'
import { clsx } from 'clsx'
import type { Article, Amendment, LandmarkCase } from '@/types/polity'
import { ArticleDetail } from './ArticleDetail'
import { ArticleGraph } from './ArticleGraph'

interface ArticleExplorerProps {
  articles: Article[]
  amendments: Amendment[]
  cases: LandmarkCase[]
}

type ViewMode = 'list' | 'graph'

export function ArticleExplorer({ articles, amendments, cases }: ArticleExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [expandedParts, setExpandedParts] = useState<Set<number>>(new Set())
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return articles
    const q = searchQuery.toLowerCase()
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.number.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
    )
  }, [articles, searchQuery])

  const groupedByPart = useMemo(() => {
    const map = new Map<number, { partName: string; articles: Article[] }>()
    for (const a of filteredArticles) {
      if (!map.has(a.part)) {
        map.set(a.part, { partName: a.partName, articles: [] })
      }
      map.get(a.part)!.articles.push(a)
    }
    return Array.from(map.entries()).sort(([a], [b]) => a - b)
  }, [filteredArticles])

  const togglePart = (partNum: number) => {
    setExpandedParts((prev) => {
      const next = new Set(prev)
      if (next.has(partNum)) next.delete(partNum)
      else next.add(partNum)
      return next
    })
  }

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article)
  }

  const handleSelectArticleByNumber = (num: string) => {
    const found = articles.find((a) => a.number === num)
    if (found) setSelectedArticle(found)
  }

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
            placeholder="Search articles by title or number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-border-primary bg-bg-elevated py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted focus:border-subject-polity focus:outline-none"
            aria-label="Search articles"
          />
        </div>

        <div className="flex rounded-md border border-border-primary">
          <button
            onClick={() => setViewMode('list')}
            className={clsx(
              'flex items-center gap-1.5 rounded-l-md px-3 py-2 text-sm',
              viewMode === 'list'
                ? 'bg-subject-polity text-white'
                : 'bg-bg-elevated text-text-secondary hover:bg-bg-tertiary'
            )}
            aria-label="List view"
            aria-pressed={viewMode === 'list'}
          >
            <List size={14} />
            List
          </button>
          <button
            onClick={() => setViewMode('graph')}
            className={clsx(
              'flex items-center gap-1.5 rounded-r-md px-3 py-2 text-sm',
              viewMode === 'graph'
                ? 'bg-subject-polity text-white'
                : 'bg-bg-elevated text-text-secondary hover:bg-bg-tertiary'
            )}
            aria-label="Graph view"
            aria-pressed={viewMode === 'graph'}
          >
            <LayoutGrid size={14} />
            Graph
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="flex flex-col gap-2">
          {groupedByPart.length === 0 && (
            <p className="py-8 text-center text-sm text-text-muted">
              No articles match your search.
            </p>
          )}
          {groupedByPart.map(([partNum, { partName, articles: partArticles }]) => (
            <div
              key={partNum}
              className="overflow-hidden rounded-lg border border-border-primary"
            >
              <button
                onClick={() => togglePart(partNum)}
                className="flex w-full items-center justify-between bg-bg-tertiary px-4 py-3 text-left"
                aria-expanded={expandedParts.has(partNum)}
              >
                <span className="text-sm font-semibold text-text-primary">
                  Part {partNum} &mdash; {partName}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted">
                    {partArticles.length} article{partArticles.length !== 1 ? 's' : ''}
                  </span>
                  <ChevronDown
                    size={16}
                    className={clsx(
                      'text-text-muted transition-transform',
                      expandedParts.has(partNum) && 'rotate-180'
                    )}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {expandedParts.has(partNum) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-2 p-3">
                      {partArticles.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => handleSelectArticle(a)}
                          className="flex items-start gap-3 rounded-md border border-border-primary bg-bg-elevated p-3 text-left transition-shadow hover:shadow-sm"
                        >
                          <span className="mt-0.5 shrink-0 rounded bg-subject-polity-light px-2 py-0.5 font-mono text-xs font-semibold text-subject-polity-dark">
                            {a.number}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-text-primary">
                              {a.title}
                            </p>
                            <p className="mt-1 line-clamp-2 text-xs text-text-secondary">
                              {a.description}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {a.isFR && (
                                <span className="rounded-full bg-subject-polity-light px-2 py-0.5 text-[10px] font-medium text-subject-polity-dark">
                                  FR
                                </span>
                              )}
                              {a.isDPSP && (
                                <span className="rounded-full bg-secondary-100 px-2 py-0.5 text-[10px] font-medium text-secondary-700">
                                  DPSP
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      ) : (
        <ArticleGraph
          articles={filteredArticles}
          amendments={amendments}
          cases={cases}
          onSelectArticle={handleSelectArticle}
        />
      )}

      <ArticleDetail
        article={selectedArticle}
        amendments={amendments}
        cases={cases}
        onClose={() => setSelectedArticle(null)}
        onSelectArticle={handleSelectArticleByNumber}
      />
    </div>
  )
}
