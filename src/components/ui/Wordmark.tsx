interface WordmarkProps {
  size?: number
}

export function Wordmark({ size = 20 }: WordmarkProps) {
  return (
    <span className="inline-flex items-center gap-2 no-underline">
      <span
        className="mono inline-flex items-center justify-center font-extrabold"
        style={{
          width: size,
          height: size,
          borderRadius: 6,
          background: 'var(--ink)',
          color: 'var(--paper)',
          fontSize: size * 0.55,
          letterSpacing: '.04em',
        }}
      >
        gs
      </span>
      <span
        className="font-extrabold"
        style={{
          fontSize: size * 0.95,
          color: 'var(--ink)',
          letterSpacing: '-.025em',
        }}
      >
        govtstudy<span style={{ color: 'var(--indigo-600)' }}>.</span>
      </span>
    </span>
  )
}
