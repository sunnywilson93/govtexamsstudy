import Link from 'next/link'
import {
  Landmark,
  FileText,
  Building2,
  Train,
  Shield,
  GraduationCap,
  ChevronRight,
  Users,
  Clock,
  BookOpen,
} from 'lucide-react'
import { EXAM_LIST } from '@/data/exams'
import type { ExamCategory, ExamInfo } from '@/types/exam'

const CATEGORY_ORDER: ExamCategory[] = ['upsc', 'ssc', 'banking', 'railway', 'defence', 'teaching']

const CATEGORY_CONFIG: Record<ExamCategory, {
  label: string
  description: string
  icon: typeof Landmark
  color: string
  lightBg: string
}> = {
  upsc: {
    label: 'UPSC',
    description: 'Civil services and defence examinations',
    icon: Landmark,
    color: '#dc2626',
    lightBg: '#fef2f2',
  },
  ssc: {
    label: 'SSC',
    description: 'Central government Group B & C posts',
    icon: FileText,
    color: '#2563eb',
    lightBg: '#eff6ff',
  },
  banking: {
    label: 'Banking',
    description: 'Public sector bank officer recruitment',
    icon: Building2,
    color: '#0d9488',
    lightBg: '#f0fdfa',
  },
  railway: {
    label: 'Railways',
    description: 'Indian Railways technical & non-technical posts',
    icon: Train,
    color: '#16a34a',
    lightBg: '#f0fdf4',
  },
  defence: {
    label: 'Defence',
    description: 'Armed Forces officer entry',
    icon: Shield,
    color: '#475569',
    lightBg: '#f1f5f9',
  },
  teaching: {
    label: 'Teaching',
    description: 'Central government school eligibility',
    icon: GraduationCap,
    color: '#7c3aed',
    lightBg: '#f5f3ff',
  },
}

function ExamCard({ exam, color }: { exam: ExamInfo; color: string }) {
  const totalMarks = exam.stages.reduce((sum, s) => sum + s.totalMarks, 0)

  return (
    <Link
      href={`/exams/${exam.id}`}
      className="group relative cursor-pointer rounded-xl border border-border-primary bg-bg-elevated p-5 no-underline transition-all duration-200 hover:border-border-secondary hover:shadow-lg"
    >
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl" style={{ backgroundColor: color }} />

      <div className="mb-2 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-text-primary">{exam.name}</h3>
          <p className="text-[11px] text-text-muted">{exam.conductingBody}</p>
        </div>
        <ChevronRight
          size={16}
          className="mt-1 shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-text-secondary"
        />
      </div>

      <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-text-secondary">
        {exam.description}
      </p>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-border-primary pt-3">
        <span className="flex items-center gap-1 text-[11px] text-text-muted">
          <BookOpen size={11} />
          {exam.stages.length} {exam.stages.length === 1 ? 'Stage' : 'Stages'}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-text-muted">
          <Clock size={11} />
          {exam.frequency}
        </span>
        {totalMarks > 0 && (
          <span className="flex items-center gap-1 text-[11px] text-text-muted">
            <Users size={11} />
            {totalMarks} Marks
          </span>
        )}
      </div>
    </Link>
  )
}

export default function ExamsPage() {
  const examsByCategory = CATEGORY_ORDER
    .map((cat) => ({
      category: cat,
      config: CATEGORY_CONFIG[cat],
      exams: EXAM_LIST.filter((e) => e.category === cat),
    }))
    .filter((group) => group.exams.length > 0)

  const totalExams = EXAM_LIST.length

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Hero */}
      <div className="mb-8 rounded-2xl border border-border-primary bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Government Exams</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-300">
          Comprehensive guide to India&apos;s top competitive exams — eligibility, exam pattern, syllabus, and cutoff trends. All data sourced from official conducting body websites.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <p className="text-lg font-bold text-white">{totalExams}</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Exams</p>
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <p className="text-lg font-bold text-white">{CATEGORY_ORDER.length}</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Categories</p>
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <p className="text-lg font-bold text-white">100%</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Free</p>
          </div>
        </div>
      </div>

      {/* Category Sections */}
      <div className="space-y-10">
        {examsByCategory.map((group) => {
          const Icon = group.config.icon
          return (
            <section key={group.category}>
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: group.config.lightBg }}
                >
                  <Icon size={18} style={{ color: group.config.color }} />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-text-primary">{group.config.label} Exams</h2>
                  <p className="text-xs text-text-muted">{group.config.description}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.exams.map((exam) => (
                  <ExamCard key={exam.id} exam={exam} color={group.config.color} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
