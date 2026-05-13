const TRUST = ['PRSIndia', 'PIB', 'Parliament of India', 'RBI', 'NCERT', 'Census of India']

export function HomeTrust() {
  return (
    <section
      className="px-4 py-10 text-center sm:py-12"
      style={{ borderTop: '.5px solid var(--rule)' }}
    >
      <div
        className="mono text-[10.5px] uppercase"
        style={{
          color: 'var(--ink-3)',
          letterSpacing: '.1em',
        }}
      >
        Sourced from
      </div>
      <div
        className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold sm:text-[15px]"
        style={{ color: 'var(--ink-2)' }}
      >
        {TRUST.map((source, i) => (
          <span key={source} className="flex items-center gap-5">
            <span>{source}</span>
            {i < TRUST.length - 1 && (
              <span style={{ color: 'var(--ink-4)' }} aria-hidden="true">
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  )
}
