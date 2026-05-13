import type { NewsCategory } from '@/types/current-affairs'

export interface CategoryConfig {
  c: string
  ink: string
  label: string
}

export const CATEGORY_COLORS: Record<NewsCategory, CategoryConfig> = {
  polity: { c: 'var(--subj-polity)', ink: 'var(--subj-polity-ink)', label: 'Polity' },
  economics: { c: 'var(--subj-economics)', ink: 'var(--subj-economics-ink)', label: 'Economy' },
  history: { c: 'var(--subj-history)', ink: 'var(--subj-history-ink)', label: 'History' },
  geography: { c: 'var(--subj-geography)', ink: 'var(--subj-geography-ink)', label: 'Geography' },
  science: { c: 'var(--subj-science)', ink: 'var(--subj-science-ink)', label: 'Science' },
  international: { c: '#6366f1', ink: '#3730a3', label: 'World' },
  environment: { c: '#16a34a', ink: '#166534', label: 'Environment' },
  defence: { c: '#475569', ink: '#1e293b', label: 'Defence' },
  appointments: { c: '#9333ea', ink: '#6b21a8', label: 'Appointments' },
  schemes: { c: 'var(--indigo-600)', ink: 'var(--indigo-700)', label: 'Schemes' },
}

export function parseExamTags(rel?: string): string[] {
  if (!rel) return []
  const segs = rel
    .split(/[|;]/)
    .flatMap((s) => s.split(':'))
    .map((s) => s.trim())
    .filter(Boolean)
  return Array.from(new Set(segs))
    .filter((s) => /^(SSC|UPSC|IBPS|RBI|RRB|CDS|NDA|KAS|MPSC|BPSC|UPPSC|SBI)/i.test(s))
    .slice(0, 3)
}

export function formatDateLong(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

export function formatDateEyebrow(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
