import type { ReasoningTrick } from '@/types/reasoning'
import { ReasoningTrickCard } from './ReasoningTrickCard'

const sectionLabelStyle: React.CSSProperties = {
  fontSize: 10.5,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--ink-3)',
  marginBottom: 12,
}

export function ReasoningTricksPanel({ tricks }: { tricks: ReasoningTrick[] }) {
  const patternShortcuts = tricks.filter((t) => t.type === 'pattern-shortcut')
  const elimination = tricks.filter((t) => t.type === 'elimination')

  return (
    <div className="flex flex-col gap-8">
      {patternShortcuts.length > 0 && (
        <section>
          <h3 className="mono" style={sectionLabelStyle}>
            Pattern Shortcuts
          </h3>
          <div className="flex flex-col gap-3">
            {patternShortcuts.map((trick) => (
              <ReasoningTrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}

      {elimination.length > 0 && (
        <section>
          <h3 className="mono" style={sectionLabelStyle}>
            Elimination Tricks
          </h3>
          <div className="flex flex-col gap-3">
            {elimination.map((trick) => (
              <ReasoningTrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
