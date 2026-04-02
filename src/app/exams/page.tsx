import Link from 'next/link'
import { EXAM_LIST } from '@/data/exams'
import type { ExamCategory } from '@/types/exam'

const CATEGORY_ORDER: ExamCategory[] = ['upsc', 'ssc', 'banking', 'railway', 'defence', 'teaching']

const CATEGORY_LABELS: Record<ExamCategory, string> = {
  upsc: 'UPSC Exams',
  ssc: 'SSC Exams',
  banking: 'Banking Exams',
  railway: 'Railway Exams',
  defence: 'Defence Exams',
  teaching: 'Teaching Exams',
}

const CATEGORY_DESCRIPTIONS: Record<ExamCategory, string> = {
  upsc: 'India\'s premier civil services and defence examinations',
  ssc: 'Central government Group B and Group C posts',
  banking: 'Public sector bank officer and clerk recruitment',
  railway: 'Indian Railways technical and non-technical posts',
  defence: 'Armed Forces officer entry through UPSC',
  teaching: 'Central government school teaching eligibility',
}

export default function ExamsPage() {
  const examsByCategory = CATEGORY_ORDER
    .map((cat) => ({
      category: cat,
      label: CATEGORY_LABELS[cat],
      description: CATEGORY_DESCRIPTIONS[cat],
      exams: EXAM_LIST.filter((e) => e.category === cat),
    }))
    .filter((group) => group.exams.length > 0)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary">Government Exams</h1>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        Comprehensive guide to India&apos;s top competitive exams — eligibility, exam pattern, syllabus, and cutoff trends. All data sourced from official conducting body websites.
      </p>

      <div className="mt-8 space-y-8">
        {examsByCategory.map((group) => (
          <section key={group.category}>
            <div className="mb-3">
              <h2 className="text-base font-semibold text-text-primary">{group.label}</h2>
              <p className="text-xs text-text-muted">{group.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {group.exams.map((exam) => (
                <Link
                  key={exam.id}
                  href={`/exams/${exam.id}`}
                  className="group rounded-lg border border-border-primary bg-bg-elevated p-4 no-underline transition-shadow hover:shadow-md"
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-text-primary">{exam.name}</h3>
                    <span className="shrink-0 rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-orange-700">
                      {exam.frequency}
                    </span>
                  </div>
                  <p className="mb-1 text-[11px] text-text-muted">{exam.conductingBody}</p>
                  <p className="mb-2 text-xs leading-relaxed text-text-secondary">{exam.description}</p>
                  <p className="text-xs text-text-muted">
                    {exam.stages.length} {exam.stages.length === 1 ? 'Stage' : 'Stages'} · {exam.syllabus.length} Subjects
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
