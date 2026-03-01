import type { QuantTrick } from '@/types/quant'
import { TrickCard } from './TrickCard'

interface TricksPanelProps {
  tricks: QuantTrick[]
}

export function TricksPanel({ tricks }: TricksPanelProps) {
  const formulaShortcuts = tricks.filter(t => t.type === 'formula-shortcut')
  const mentalMath = tricks.filter(t => t.type === 'mental-math')

  return (
    <div className="flex flex-col gap-8">
      {formulaShortcuts.length > 0 && (
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Formula Shortcuts
          </h3>
          <div className="flex flex-col gap-3">
            {formulaShortcuts.map(trick => (
              <TrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}

      {mentalMath.length > 0 && (
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Mental Math
          </h3>
          <div className="flex flex-col gap-3">
            {mentalMath.map(trick => (
              <TrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
