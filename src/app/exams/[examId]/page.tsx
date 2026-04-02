import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Clock,
  AlertTriangle,
  BookOpen,
  Users,
  FileText,
  Calendar,
} from 'lucide-react'
import { EXAM_DATA } from '@/data/exams'
import type { CutoffEntry, ExamCategory } from '@/types/exam'

const CATEGORY_COLORS: Record<ExamCategory, string> = {
  upsc: '#dc2626',
  ssc: '#2563eb',
  banking: '#0d9488',
  railway: '#16a34a',
  defence: '#d97706',
  teaching: '#7c3aed',
}

export function generateStaticParams() {
  return Object.keys(EXAM_DATA).map((examId) => ({ examId }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ examId: string }>
}): Promise<Metadata> {
  const { examId } = await params
  const exam = EXAM_DATA[examId]
  if (!exam) return {}
  const year = new Date().getFullYear()
  return {
    title: `${exam.name} ${year} — Exam Pattern, Eligibility, Syllabus & Cutoffs | GovtExamsStudy`,
    description: exam.description,
  }
}

function groupCutoffsByYear(cutoffs: CutoffEntry[]) {
  const years = Array.from(new Set(cutoffs.map((c) => c.year))).sort((a, b) => b - a)
  return years.map((year) => ({
    year,
    entries: cutoffs.filter((c) => c.year === year),
  }))
}

function hasStageColumn(cutoffs: CutoffEntry[]) {
  return cutoffs.some((c) => c.stage)
}

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ examId: string }>
}) {
  const { examId } = await params
  const exam = EXAM_DATA[examId]
  if (!exam) notFound()

  const cutoffGroups = groupCutoffsByYear(exam.cutoffs)
  const showStageCol = hasStageColumn(exam.cutoffs)
  const accentColor = CATEGORY_COLORS[exam.category]
  const totalMarks = exam.stages.reduce((sum, s) => sum + s.totalMarks, 0)

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1 text-xs text-text-muted" aria-label="Breadcrumb">
        <Link href="/" className="text-text-muted no-underline hover:text-text-primary">Home</Link>
        <ChevronRight size={12} />
        <Link href="/exams" className="text-text-muted no-underline hover:text-text-primary">Exams</Link>
        <ChevronRight size={12} />
        <span className="text-text-primary">{exam.name}</span>
      </nav>

      {/* Hero Banner */}
      <section className="mb-8 overflow-hidden rounded-2xl border border-border-primary">
        <div
          className="px-6 py-6 sm:px-8 sm:py-8"
          style={{ background: `linear-gradient(135deg, ${accentColor}08 0%, ${accentColor}03 100%)` }}
        >
          <div className="mb-1 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white"
              style={{ backgroundColor: accentColor }}
            >
              {exam.category}
            </span>
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-medium text-text-muted">
              {exam.frequency}
            </span>
          </div>

          <h1 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl">{exam.name}</h1>
          <p className="mt-1 text-sm text-text-muted">{exam.fullName}</p>
          <p className="mt-1 text-xs text-text-muted">{exam.conductingBody}</p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">{exam.description}</p>

          {/* Quick Stats */}
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 rounded-lg border border-border-primary bg-white px-3 py-2">
              <BookOpen size={14} style={{ color: accentColor }} />
              <div>
                <p className="text-sm font-semibold text-text-primary">{exam.stages.length}</p>
                <p className="text-[10px] text-text-muted">{exam.stages.length === 1 ? 'Stage' : 'Stages'}</p>
              </div>
            </div>
            {totalMarks > 0 && (
              <div className="flex items-center gap-1.5 rounded-lg border border-border-primary bg-white px-3 py-2">
                <FileText size={14} style={{ color: accentColor }} />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{totalMarks}</p>
                  <p className="text-[10px] text-text-muted">Total Marks</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-1.5 rounded-lg border border-border-primary bg-white px-3 py-2">
              <Users size={14} style={{ color: accentColor }} />
              <div>
                <p className="text-sm font-semibold text-text-primary">{exam.eligibility.ageMin}–{exam.eligibility.ageMax}</p>
                <p className="text-[10px] text-text-muted">Age Range</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={exam.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold text-white no-underline transition-opacity hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              Official Website
              <ExternalLink size={12} />
            </a>
            {exam.notificationUrl && (
              <a
                href={exam.notificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-border-primary bg-white px-4 py-2.5 text-xs font-semibold text-text-primary no-underline transition-colors hover:bg-bg-tertiary"
              >
                Latest Notifications
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: `${accentColor}15` }}>
            <Calendar size={14} style={{ color: accentColor }} />
          </div>
          <h2 className="text-lg font-semibold text-text-primary">Exam Pattern</h2>
        </div>

        {/* Stage Progress */}
        <div className="mb-4 flex items-center gap-1 overflow-x-auto pb-2">
          {exam.stages.map((stage, i) => (
            <div key={i} className="flex items-center">
              <div className="flex shrink-0 items-center gap-2 rounded-full border border-border-primary bg-bg-elevated px-3 py-1.5">
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: accentColor }}
                >
                  {i + 1}
                </span>
                <span className="whitespace-nowrap text-[11px] font-medium text-text-primary">{stage.name}</span>
              </div>
              {i < exam.stages.length - 1 && (
                <ChevronRight size={14} className="mx-1 shrink-0 text-text-muted" />
              )}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {exam.stages.map((stage, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border-primary">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-primary bg-bg-secondary px-4 py-3">
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-text-primary">{stage.name}</h3>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-bg-elevated px-2 py-1 text-[10px] text-text-muted">
                    <Clock size={10} />
                    {stage.duration}
                  </span>
                  <span className="rounded-md bg-bg-elevated px-2 py-1 text-[10px] text-text-muted">
                    {stage.mode}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-text-secondary">
                  <span>Total: <span className="font-semibold text-text-primary">{stage.totalMarks} marks</span></span>
                  {stage.negativeMarking && (
                    <span className="flex items-center gap-1 text-red-600">
                      <AlertTriangle size={10} />
                      {stage.negativeMarking}
                    </span>
                  )}
                </div>

                {stage.sections.length > 0 && stage.sections.some((s) => s.marks > 0) && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border-primary text-left">
                          <th className="pb-2 pr-4 font-medium text-text-muted">Section</th>
                          <th className="pb-2 pr-4 text-right font-medium text-text-muted">Questions</th>
                          <th className="pb-2 text-right font-medium text-text-muted">Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stage.sections.map((sec, j) => (
                          <tr key={j} className="border-b border-border-primary/50 last:border-0">
                            <td className="py-2 pr-4 text-text-primary">{sec.name}</td>
                            <td className="py-2 pr-4 text-right font-mono text-text-secondary">{sec.questions || '—'}</td>
                            <td className="py-2 text-right font-mono font-semibold text-text-primary">{sec.marks || '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: `${accentColor}15` }}>
            <BookOpen size={14} style={{ color: accentColor }} />
          </div>
          <h2 className="text-lg font-semibold text-text-primary">Syllabus</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {exam.syllabus.map((subject) => (
            <span
              key={subject}
              className="rounded-lg border border-border-primary bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-bg-tertiary"
            >
              {subject}
            </span>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: `${accentColor}15` }}>
            <GraduationCap size={14} style={{ color: accentColor }} />
          </div>
          <h2 className="text-lg font-semibold text-text-primary">Eligibility</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border-primary bg-bg-elevated p-4">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Education</p>
            <p className="text-sm text-text-primary">{exam.eligibility.education}</p>
          </div>
          <div className="rounded-xl border border-border-primary bg-bg-elevated p-4">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Age Limit</p>
            <p className="text-sm text-text-primary">{exam.eligibility.ageMin}–{exam.eligibility.ageMax} years</p>
            {exam.eligibility.ageRelaxation && (
              <p className="mt-1 text-[11px] text-text-muted">{exam.eligibility.ageRelaxation}</p>
            )}
          </div>
          {exam.eligibility.attempts && (
            <div className="rounded-xl border border-border-primary bg-bg-elevated p-4">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Attempts</p>
              <p className="text-sm text-text-primary">{exam.eligibility.attempts}</p>
            </div>
          )}
          <div className="rounded-xl border border-border-primary bg-bg-elevated p-4">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Nationality</p>
            <p className="text-sm text-text-primary">{exam.eligibility.nationality}</p>
          </div>
        </div>
      </section>

      {/* Cutoff Trends */}
      {exam.cutoffs.length > 0 && (
        <section className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: `${accentColor}15` }}>
              <FileText size={14} style={{ color: accentColor }} />
            </div>
            <h2 className="text-lg font-semibold text-text-primary">Cutoff Trends</h2>
          </div>

          <div className="overflow-hidden rounded-xl border border-border-primary">
            {cutoffGroups.map((group, gi) => (
              <div key={group.year} className={gi > 0 ? 'border-t border-border-primary' : ''}>
                <div className="border-b border-border-primary bg-bg-secondary px-4 py-2.5">
                  <h3 className="text-sm font-semibold text-text-primary">{group.year}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border-primary bg-bg-secondary/50 text-left">
                        <th className="px-4 py-2 font-medium text-text-muted">Category</th>
                        {showStageCol && <th className="px-4 py-2 font-medium text-text-muted">Stage</th>}
                        <th className="px-4 py-2 text-right font-medium text-text-muted">Cutoff Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.entries.map((entry, i) => (
                        <tr
                          key={i}
                          className={`border-b border-border-primary/50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-bg-secondary/30'}`}
                        >
                          <td className="px-4 py-2.5 font-medium text-text-primary">{entry.category}</td>
                          {showStageCol && <td className="px-4 py-2.5 text-text-muted">{entry.stage || '—'}</td>}
                          <td className="px-4 py-2.5 text-right font-mono font-semibold text-text-primary">{entry.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Important Notes */}
      {exam.importantNotes && exam.importantNotes.length > 0 && (
        <section className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-50">
              <AlertTriangle size={14} className="text-amber-500" />
            </div>
            <h2 className="text-lg font-semibold text-text-primary">Important Notes</h2>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
            <ul className="space-y-2">
              {exam.importantNotes.map((note, i) => (
                <li key={i} className="flex gap-2.5 text-xs leading-relaxed text-text-secondary">
                  <span className="mt-0.5 shrink-0 text-amber-500">●</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}
