import type { ReasoningConcept } from '@/types/reasoning'

interface ReasoningConceptPanelProps {
  concept: ReasoningConcept
}

export function ReasoningConceptPanel({ concept }: ReasoningConceptPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-text-primary">{concept.title}</h2>
        <p className="mt-2 leading-relaxed text-text-secondary">{concept.description}</p>
      </div>

      <div className="rounded-lg border-l-4 border-subject-reasoning bg-subject-reasoning-light p-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-subject-reasoning-dark">
          Key Idea
        </p>
        <p className="text-sm font-medium text-subject-reasoning-dark">{concept.keyIdea}</p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
          Core Rules
        </h3>
        <div className="flex flex-col gap-3">
          {concept.rules.map((r) => (
            <div
              key={r.name}
              className="rounded-lg border border-border-primary bg-bg-elevated p-4"
            >
              <p className="text-sm font-semibold text-text-primary">{r.name}</p>
              <p className="mt-1 font-mono text-base text-subject-reasoning">{r.rule}</p>
              <p className="mt-2 text-xs text-text-muted">{r.whenToUse}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-bg-secondary px-4 py-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Relevant Exams
        </p>
        <div className="mb-2 flex flex-wrap gap-2">
          {concept.examTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-subject-reasoning-light px-3 py-0.5 text-xs font-medium text-subject-reasoning-dark"
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
