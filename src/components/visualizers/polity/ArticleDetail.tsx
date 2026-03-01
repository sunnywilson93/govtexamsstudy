'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Article, Amendment, LandmarkCase } from '@/types/polity'

interface ArticleDetailProps {
  article: Article | null
  amendments: Amendment[]
  cases: LandmarkCase[]
  onClose: () => void
  onSelectArticle?: (articleNumber: string) => void
}

export function ArticleDetail({
  article,
  amendments,
  cases,
  onClose,
  onSelectArticle,
}: ArticleDetailProps) {
  const relatedAmendments = amendments.filter((a) =>
    article?.amendments.some((aid) => aid === `${a.number}${ordinalSuffix(a.number)}` || aid === String(a.number))
  )
  const relatedCases = cases.filter((c) =>
    article?.cases.includes(c.id)
  )

  return (
    <AnimatePresence>
      {article && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col overflow-y-auto bg-bg-primary shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-label={`Article ${article.number} details`}
          >
            <div className="flex items-center justify-between border-b border-border-primary p-4">
              <h2 className="text-lg font-semibold text-text-primary">
                Article {article.number}
              </h2>
              <button
                onClick={onClose}
                className="rounded-md p-1 text-text-muted hover:bg-bg-tertiary hover:text-text-primary"
                aria-label="Close detail panel"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-5 p-4">
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {article.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {article.isFR && (
                  <span className="rounded-full bg-subject-polity-light px-3 py-1 text-xs font-medium text-subject-polity-dark">
                    Fundamental Right
                  </span>
                )}
                {article.isDPSP && (
                  <span className="rounded-full bg-secondary-100 px-3 py-1 text-xs font-medium text-secondary-700">
                    Directive Principle
                  </span>
                )}
              </div>

              {relatedAmendments.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-text-primary">
                    Amendments Affecting This Article
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {relatedAmendments.map((a) => (
                      <li
                        key={a.id}
                        className="rounded-md border border-border-primary p-3 text-sm"
                      >
                        <span className="font-medium text-subject-quant">
                          {a.number}{ordinalSuffix(a.number)} Amendment ({a.year})
                        </span>
                        <p className="mt-1 text-text-secondary">{a.significance}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedCases.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-text-primary">
                    Landmark Cases
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {relatedCases.map((c) => (
                      <li
                        key={c.id}
                        className="rounded-md border border-border-primary p-3 text-sm"
                      >
                        <span className="font-medium text-subject-geography-dark">
                          {c.name} ({c.year})
                        </span>
                        <p className="mt-1 text-text-secondary">{c.summary}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {article.linkedArticles.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-text-primary">
                    Related Articles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {article.linkedArticles.map((num) => (
                      <button
                        key={num}
                        onClick={() => onSelectArticle?.(num)}
                        className="rounded-md border border-border-primary px-3 py-1.5 text-sm font-medium text-subject-polity hover:bg-subject-polity-light"
                      >
                        Art. {num}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function ordinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return s[(v - 20) % 10] || s[v] || s[0]
}
