import type { QuantConcept } from '@/types/quant'

interface ConceptPanelProps {
  concept: QuantConcept
}

export function ConceptPanel({ concept }: ConceptPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2
          className="text-2xl font-extrabold tracking-tight"
          style={{ color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
        >
          {concept.title}
        </h2>
        <p
          className="mt-2 leading-relaxed"
          style={{ color: 'var(--ink-2)', fontSize: 14.5 }}
        >
          {concept.description}
        </p>
      </div>

      <div
        style={{
          borderLeft: '4px solid var(--subj-quant)',
          background: 'color-mix(in oklch, var(--subj-quant) 8%, var(--paper))',
          borderRadius: 'var(--r-md)',
          padding: '14px 16px',
        }}
      >
        <p
          className="mono"
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--subj-quant-ink)',
            marginBottom: 6,
          }}
        >
          Key Idea
        </p>
        <p
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: 'var(--subj-quant-ink)',
            lineHeight: 1.5,
          }}
        >
          {concept.keyIdea}
        </p>
      </div>

      <div>
        <h3
          className="mono"
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
            marginBottom: 10,
          }}
        >
          Core Formulas
        </h3>
        <div className="flex flex-col gap-3">
          {concept.formulas.map((f) => (
            <div
              key={f.name}
              style={{
                borderRadius: 'var(--r-md)',
                border: '.5px solid var(--rule)',
                background: 'var(--paper)',
                boxShadow: 'var(--sh-1)',
                padding: 14,
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--ink)',
                }}
              >
                {f.name}
              </p>
              <p
                className="mono"
                style={{
                  marginTop: 4,
                  fontSize: 14,
                  color: 'var(--subj-quant)',
                  fontWeight: 600,
                  background: 'var(--paper-2)',
                  borderRadius: 'var(--r-sm)',
                  padding: '8px 10px',
                  display: 'inline-block',
                }}
              >
                {f.formula}
              </p>
              <p style={{ marginTop: 8, fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.5 }}>
                {f.whenToUse}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: 'var(--paper-2)',
          borderRadius: 'var(--r-md)',
          padding: '14px 16px',
        }}
      >
        <p
          className="mono"
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
            marginBottom: 8,
          }}
        >
          Relevant Exams
        </p>
        <div className="mb-2 flex flex-wrap gap-2">
          {concept.examTags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>
          {concept.examRelevance}
        </p>
      </div>
    </div>
  )
}
