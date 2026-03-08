import type { SubjectConcept } from '@/types/subject-notes'
import { SUBJECT_CLASSES, type SubjectSlug } from './subject-classes'

interface SubjectNotesPanelProps {
  concept: SubjectConcept
  subject: SubjectSlug
}

export function SubjectNotesPanel({ concept, subject }: SubjectNotesPanelProps) {
  const c = SUBJECT_CLASSES[subject]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-text-primary">{concept.title}</h2>
        <p className="mt-2 text-text-secondary leading-relaxed">{concept.description}</p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
          Key Dates
        </h3>
        <div className="flex flex-col gap-2">
          {concept.keyDates.map((kd) => (
            <div key={kd.year} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className={`h-2.5 w-2.5 rounded-full ${c.bg}`} />
                <div className="w-px flex-1 bg-border-primary" />
              </div>
              <div className="pb-3">
                <span className={`text-sm font-semibold ${c.text}`}>{kd.year}</span>
                <p className="text-sm text-text-secondary">{kd.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {concept.notes.map((note) => (
          <div key={note.section} className="rounded-lg border border-border-primary bg-bg-elevated p-4">
            <h3 className="text-sm font-semibold text-text-primary">{note.section}</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{note.content}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-bg-secondary px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
          Relevant Exams
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {concept.examTags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full ${c.bgLight} px-3 py-0.5 text-xs font-medium ${c.textDark}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-text-muted">{concept.examRelevance}</p>
      </div>
    </div>
  )
}
