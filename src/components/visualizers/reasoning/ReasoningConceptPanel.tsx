import type { ReasoningConcept } from '@/types/reasoning'

interface ReasoningConceptPanelProps {
  concept: ReasoningConcept
}

export function ReasoningConceptPanel({ concept }: ReasoningConceptPanelProps) {
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
          borderLeft: '4px solid var(--subj-reasoning)',
          background: 'color-mix(in oklch, var(--subj-reasoning) 8%, var(--paper))',
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
            color: 'var(--subj-reasoning-ink)',
            marginBottom: 6,
          }}
        >
          Key Idea
        </p>
        <p
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: 'var(--subj-reasoning-ink)',
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
          Rules
        </h3>
        <div className="flex flex-col gap-3">
          {concept.rules.map((r) => (
            <div
              key={r.name}
              style={{
                borderRadius: 'var(--r-md)',
                border: '.5px solid var(--rule)',
                background: 'var(--paper)',
                boxShadow: 'var(--sh-1)',
                padding: 14,
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{r.name}</p>
              <p
                className="mono"
                style={{
                  marginTop: 4,
                  fontSize: 14,
                  color: 'var(--subj-reasoning)',
                  fontWeight: 600,
                  background: 'var(--paper-2)',
                  borderRadius: 'var(--r-sm)',
                  padding: '8px 10px',
                  display: 'inline-block',
                }}
              >
                {r.rule}
              </p>
              <p style={{ marginTop: 8, fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.5 }}>
                {r.whenToUse}
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
