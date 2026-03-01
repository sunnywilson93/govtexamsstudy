import type { QuantConcept } from '@/types/quant'

interface ConceptPanelProps {
  concept: QuantConcept
}

export function ConceptPanel({ concept }: ConceptPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-text-primary">{concept.title}</h2>
        <p className="mt-2 text-text-secondary leading-relaxed">{concept.description}</p>
      </div>

      <div className="rounded-lg border-l-4 border-subject-quant bg-subject-quant-light p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-subject-quant-dark mb-1">
          Key Idea
        </p>
        <p className="text-sm font-medium text-subject-quant-dark">{concept.keyIdea}</p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
          Core Formulas
        </h3>
        <div className="flex flex-col gap-3">
          {concept.formulas.map((f) => (
            <div
              key={f.name}
              className="rounded-lg border border-border-primary bg-bg-elevated p-4"
            >
              <p className="text-sm font-semibold text-text-primary">{f.name}</p>
              <p className="mt-1 font-mono text-base text-subject-quant">{f.formula}</p>
              <p className="mt-2 text-xs text-text-muted">{f.whenToUse}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-bg-secondary px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
          Exam Relevance
        </p>
        <p className="text-sm text-text-secondary">{concept.examRelevance}</p>
      </div>
    </div>
  )
}
