import type { QuantTrick } from '@/types/quant'
import { TrickCard } from './TrickCard'

interface TricksPanelProps {
  tricks: QuantTrick[]
}

const sectionLabelStyle: React.CSSProperties = {
  fontSize: 10.5,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--ink-3)',
  marginBottom: 12,
}

export function TricksPanel({ tricks }: TricksPanelProps) {
  const formulaShortcuts = tricks.filter((t) => t.type === 'formula-shortcut')
  const mentalMath = tricks.filter((t) => t.type === 'mental-math')

  return (
    <div className="flex flex-col gap-8">
      {formulaShortcuts.length > 0 && (
        <section>
          <h3 className="mono" style={sectionLabelStyle}>
            Formula Shortcuts
          </h3>
          <div className="flex flex-col gap-3">
            {formulaShortcuts.map((trick) => (
              <TrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}

      {mentalMath.length > 0 && (
        <section>
          <h3 className="mono" style={sectionLabelStyle}>
            Mental Math
          </h3>
          <div className="flex flex-col gap-3">
            {mentalMath.map((trick) => (
              <TrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
