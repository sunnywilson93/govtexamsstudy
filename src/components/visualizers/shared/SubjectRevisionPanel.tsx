import type { SubjectRevision } from '@/types/subject-notes'
import { SUBJECT_CLASSES, type SubjectSlug } from './subject-classes'

interface SubjectRevisionPanelProps {
  revision: SubjectRevision
  subject: SubjectSlug
}

export function SubjectRevisionPanel({ revision, subject }: SubjectRevisionPanelProps) {
  const c = SUBJECT_CLASSES[subject]

  return (
    <div className="flex flex-col gap-8">
      {revision.bullets.length > 0 && (
        <section>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Quick Recall Points
          </h3>
          <div className={`rounded-lg border-l-4 ${c.border} ${c.bgLight} p-4`}>
            <ol className="flex flex-col gap-2">
              {revision.bullets.map((bullet, i) => (
                <li key={i} className={`flex gap-2 text-sm ${c.textDark}`}>
                  <span className="font-semibold">{i + 1}.</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {revision.comparisons.map((table) => (
        <section key={table.title}>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
            {table.title}
          </h3>
          <div className="overflow-x-auto rounded-lg border border-border-primary">
            <table className="w-full text-sm">
              <thead>
                <tr className={`${c.bg} text-white`}>
                  {table.headers.map((h) => (
                    <th key={h} className="px-4 py-2 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-bg-elevated' : 'bg-bg-secondary'}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2 text-text-primary">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {revision.mnemonics.length > 0 && (
        <section>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Memory Tricks
          </h3>
          <div className="flex flex-col gap-3">
            {revision.mnemonics.map((m) => (
              <div key={m.title} className={`rounded-lg border ${c.border} ${c.bgLight} p-4`}>
                <p className={`text-sm font-semibold ${c.textDark}`}>{m.title}</p>
                <p className={`mt-1 text-lg font-bold ${c.text}`}>{m.mnemonic}</p>
                <p className={`mt-1 text-sm ${c.textDark}`}>{m.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
