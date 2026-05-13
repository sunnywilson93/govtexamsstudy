interface MiniBillProps {
  stamped?: boolean
  progress?: 0 | 1 | 2 | 3
  size?: number
}

const TINTS = ['#9ca3af', '#fbbf24', '#fb923c', '#16a34a']

export function MiniBill({ stamped = false, progress = 0, size = 40 }: MiniBillProps) {
  const tint = TINTS[progress]
  const id = `mini-bill-grad-${progress}`
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 40 48" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdfbf3" />
          <stop offset="1" stopColor="#f1ecd9" />
        </linearGradient>
      </defs>
      <path
        d="M4 3 L30 3 L36 9 L36 45 L4 45 Z"
        fill={`url(#${id})`}
        stroke="#2d2a25"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M30 3 L30 9 L36 9" fill="none" stroke="#2d2a25" strokeWidth="1.2" />
      <rect x="9" y="15" width="18" height="1.6" fill="#2d2a25" opacity=".5" />
      <rect x="9" y="20" width="22" height="1.6" fill="#2d2a25" opacity=".4" />
      <rect x="9" y="25" width="14" height="1.6" fill="#2d2a25" opacity=".4" />
      <rect x="9" y="30" width="20" height="1.6" fill="#2d2a25" opacity=".4" />
      <rect x="9" y="35" width="11" height="1.6" fill="#2d2a25" opacity=".4" />
      <rect x="22" y="-2" width="5" height="14" fill={tint} />
      <path d="M22 12 L24.5 9 L27 12 Z" fill={tint} />
      {stamped && (
        <g transform="translate(20,30) rotate(-14)">
          <circle r="9" fill="none" stroke="#dc2626" strokeWidth="1.4" />
          <text
            textAnchor="middle"
            y="-1"
            fill="#dc2626"
            fontSize="4.2"
            fontWeight="800"
            fontFamily="JetBrains Mono"
          >
            ASSENT
          </text>
          <text
            textAnchor="middle"
            y="4"
            fill="#dc2626"
            fontSize="3"
            fontFamily="JetBrains Mono"
          >
            PRESIDENT
          </text>
        </g>
      )}
    </svg>
  )
}
