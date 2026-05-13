import type { Subject } from '@/types/shared'

interface SubjectGlyphProps {
  id: Subject
  color?: string
  size?: number
}

export function SubjectGlyph({ id, color = 'currentColor', size = 28 }: SubjectGlyphProps) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    fill: 'none' as const,
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  switch (id) {
    case 'quant':
      return (
        <svg {...props}>
          <rect x="5" y="5" width="22" height="22" rx="2" />
          <line x1="5" y1="13" x2="27" y2="13" />
          <line x1="13" y1="13" x2="13" y2="27" />
          <text
            x="9"
            y="11"
            fontSize="6"
            fill={color}
            stroke="none"
            fontFamily="JetBrains Mono"
          >
            123
          </text>
        </svg>
      )
    case 'reasoning':
      return (
        <svg {...props}>
          <circle cx="12" cy="16" r="8" />
          <circle cx="20" cy="16" r="8" />
        </svg>
      )
    case 'polity':
      return (
        <svg {...props}>
          <path d="M4 26 L28 26" />
          <path d="M6 26 L6 14 M10 26 L10 14 M16 26 L16 14 M22 26 L22 14 M26 26 L26 14" />
          <path d="M4 14 L28 14 L16 6 Z" />
        </svg>
      )
    case 'history':
      return (
        <svg {...props}>
          <path d="M5 24 L11 14 L17 20 L23 8 L27 14" />
          <circle cx="11" cy="14" r="1.5" fill={color} />
          <circle cx="17" cy="20" r="1.5" fill={color} />
          <circle cx="23" cy="8" r="1.5" fill={color} />
        </svg>
      )
    case 'geography':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="11" />
          <path d="M5 16 L27 16" />
          <path d="M16 5 C 22 9, 22 23, 16 27 C 10 23, 10 9, 16 5" />
        </svg>
      )
    case 'economics':
      return (
        <svg {...props}>
          <path d="M5 23 L11 17 L15 19 L21 11 L27 13" />
          <path d="M5 23 L5 8" />
          <path d="M5 23 L27 23" />
          <path d="M22 9 L27 13 L23 16" />
        </svg>
      )
    case 'science':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="2" />
          <ellipse cx="16" cy="16" rx="11" ry="4" />
          <ellipse cx="16" cy="16" rx="11" ry="4" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="11" ry="4" transform="rotate(120 16 16)" />
        </svg>
      )
    default:
      return null
  }
}
