import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { EXAM_DATA } from '@/data/exams'
import type { CutoffEntry } from '@/types/exam'

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

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-xs text-text-muted" aria-label="Breadcrumb">
        <Link href="/" className="text-text-muted no-underline hover:text-text-primary">Home</Link>
        <span className="mx-1.5">›</span>
        <Link href="/exams" className="text-text-muted no-underline hover:text-text-primary">Exams</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text-primary">{exam.name}</span>
      </nav>

      {/* Hero */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">{exam.name}</h1>
        <p className="mt-1 text-sm text-text-muted">{exam.fullName}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-text-secondary">{exam.conductingBody}</span>
          <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-orange-700">
            {exam.frequency}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{exam.description}</p>
        <a
          href={exam.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-md bg-orange-500 px-4 py-2 text-xs font-medium text-white no-underline transition-colors hover:bg-orange-600"
        >
          Official Website ↗
        </a>
      </section>

      {/* Exam Pattern */}
      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-text-primary">Exam Pattern</h2>
        <div className="space-y-4">
          {exam.stages.map((stage, i) => (
            <div key={i} className="rounded-lg border border-border-primary bg-bg-elevated p-4">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-text-primary">{stage.name}</h3>
                <div className="flex gap-2">
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] text-text-muted">{stage.mode}</span>
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] text-text-muted">{stage.duration}</span>
                </div>
              </div>
              <p className="mb-2 text-xs text-text-secondary">
                Total Marks: <span className="font-semibold">{stage.totalMarks}</span>
                {stage.negativeMarking && (
                  <span className="ml-2 text-red-600">· Negative: {stage.negativeMarking}</span>
                )}
              </p>
              {stage.sections.length > 0 && stage.sections.some((s) => s.marks > 0) && (
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border-primary text-left text-text-muted">
                      <th className="pb-1.5 font-medium">Section</th>
                      <th className="pb-1.5 text-right font-medium">Questions</th>
                      <th className="pb-1.5 text-right font-medium">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stage.sections.map((sec, j) => (
                      <tr key={j} className="border-b border-border-primary/50 last:border-0">
                        <td className="py-1.5 text-text-secondary">{sec.name}</td>
                        <td className="py-1.5 text-right font-mono text-text-primary">{sec.questions || '—'}</td>
                        <td className="py-1.5 text-right font-mono text-text-primary">{sec.marks || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-text-primary">Syllabus</h2>
        <div className="flex flex-wrap gap-2">
          {exam.syllabus.map((subject) => (
            <span key={subject} className="rounded-full border border-border-primary bg-bg-secondary px-3 py-1 text-xs text-text-secondary">
              {subject}
            </span>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-text-primary">Eligibility</h2>
        <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
          <dl className="space-y-3 text-xs">
            <div>
              <dt className="font-medium text-text-muted">Education</dt>
              <dd className="mt-0.5 text-text-secondary">{exam.eligibility.education}</dd>
            </div>
            <div>
              <dt className="font-medium text-text-muted">Age</dt>
              <dd className="mt-0.5 text-text-secondary">
                {exam.eligibility.ageMin}–{exam.eligibility.ageMax} years
                {exam.eligibility.ageRelaxation && (
                  <span className="ml-1 text-text-muted">({exam.eligibility.ageRelaxation})</span>
                )}
              </dd>
            </div>
            {exam.eligibility.attempts && (
              <div>
                <dt className="font-medium text-text-muted">Attempts</dt>
                <dd className="mt-0.5 text-text-secondary">{exam.eligibility.attempts}</dd>
              </div>
            )}
            <div>
              <dt className="font-medium text-text-muted">Nationality</dt>
              <dd className="mt-0.5 text-text-secondary">{exam.eligibility.nationality}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Cutoff Trends */}
      {exam.cutoffs.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Cutoff Trends</h2>
          <div className="space-y-4">
            {cutoffGroups.map((group) => (
              <div key={group.year} className="rounded-lg border border-border-primary bg-bg-elevated p-4">
                <h3 className="mb-2 text-sm font-semibold text-text-primary">{group.year}</h3>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border-primary text-left text-text-muted">
                      <th className="pb-1.5 font-medium">Category</th>
                      {showStageCol && <th className="pb-1.5 font-medium">Stage</th>}
                      <th className="pb-1.5 text-right font-medium">Cutoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.entries.map((entry, i) => (
                      <tr key={i} className="border-b border-border-primary/50 last:border-0">
                        <td className="py-1.5 text-text-secondary">{entry.category}</td>
                        {showStageCol && <td className="py-1.5 text-text-muted">{entry.stage || '—'}</td>}
                        <td className="py-1.5 text-right font-mono text-text-primary">{entry.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Important Notes */}
      {exam.importantNotes && exam.importantNotes.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Important Notes</h2>
          <ul className="space-y-1.5 text-xs text-text-secondary">
            {exam.importantNotes.map((note, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-orange-500">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Official Links */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-text-primary">Official Links</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={exam.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border-primary bg-bg-elevated px-4 py-2 text-xs font-medium text-text-primary no-underline transition-colors hover:bg-bg-tertiary"
          >
            Official Website ↗
          </a>
          {exam.notificationUrl && (
            <a
              href={exam.notificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border-primary bg-bg-elevated px-4 py-2 text-xs font-medium text-text-primary no-underline transition-colors hover:bg-bg-tertiary"
            >
              Latest Notifications ↗
            </a>
          )}
        </div>
      </section>
    </div>
  )
}
