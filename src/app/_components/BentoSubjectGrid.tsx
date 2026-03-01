'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Calculator,
  Brain,
  Landmark,
  Clock,
  Globe2,
  TrendingUp,
  Atom,
  ArrowRight,
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import type { SubjectInfo } from '@/data/subjects'

const SUBJECT_ICONS: Record<string, React.ComponentType<LucideProps>> = {
  quant: Calculator,
  reasoning: Brain,
  polity: Landmark,
  history: Clock,
  geography: Globe2,
  economics: TrendingUp,
  science: Atom,
}

const SUBJECT_HEX: Record<string, string> = {
  blue: '#3b82f6',
  purple: '#8b5cf6',
  red: '#ef4444',
  amber: '#f59e0b',
  green: '#22c55e',
  teal: '#14b8a6',
  cyan: '#06b6d4',
}

const SUBJECT_LIGHT_HEX: Record<string, string> = {
  blue: '#dbeafe',
  purple: '#ede9fe',
  red: '#fee2e2',
  amber: '#fef3c7',
  green: '#dcfce7',
  teal: '#ccfbf1',
  cyan: '#cffafe',
}

/* Bento layout: which cards span 2 cols (wide) */
const WIDE_SUBJECTS = new Set(['quant', 'polity', 'science'])

interface BentoSubjectGridProps {
  subjects: SubjectInfo[]
}

export function BentoSubjectGrid({ subjects }: BentoSubjectGridProps) {
  return (
    <div className="bento-grid">
      {subjects.map((subject, i) => {
        const Icon = SUBJECT_ICONS[subject.slug]
        const color = SUBJECT_HEX[subject.color] ?? subject.color
        const lightColor = SUBJECT_LIGHT_HEX[subject.color] ?? '#f1f5f9'
        const isWide = WIDE_SUBJECTS.has(subject.slug)

        return (
          <Link
            key={subject.slug}
            href={`/${subject.slug}`}
            className={`group no-underline ${isWide ? 'bento-wide' : ''}`}
          >
            <motion.div
              className="relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-border-primary bg-white p-5 shadow-sm transition-shadow sm:p-6"
              style={{
                background: `linear-gradient(145deg, ${lightColor} 0%, #ffffff 50%, #ffffff 100%)`,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 12px 28px -8px ${color}25, 0 4px 10px -4px rgba(0,0,0,0.06)`,
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {/* Decorative background circle */}
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-[0.07]"
                style={{ backgroundColor: color }}
              />

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl shadow-sm"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    {Icon && <Icon size={22} />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary sm:text-lg">
                      {subject.name}
                    </h3>
                    <span className="text-[11px] font-medium text-text-muted">
                      {subject.routes.length} {subject.routes.length === 1 ? 'tool' : 'tools'}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {subject.description}
                </p>
              </div>

              {/* Route pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {subject.routes.map((route) => (
                  <span
                    key={route.path}
                    className="rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors"
                    style={{
                      backgroundColor: `${color}08`,
                      borderColor: `${color}20`,
                      color,
                    }}
                  >
                    {route.label}
                  </span>
                ))}
                <span className="inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold text-text-muted transition-colors group-hover:text-primary">
                  Explore
                  <ArrowRight size={10} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.div>
          </Link>
        )
      })}
    </div>
  )
}
