import Link from 'next/link'
import type { Subject } from '@/types/shared'
import { SubjectGlyph } from '@/components/ui/SubjectGlyph'

export interface SubjectTileData {
  id: Subject
  label: string
  hindi: string
  href: string
  /** Subject color — solid hex/CSS color */
  color: string
  /** Darker subject color used for ink-on-tint text */
  ink: string
  /** Optional count of visualizers (or other unit) */
  count?: number
  countUnit?: string
}

interface SubjectTileProps {
  s: SubjectTileData
  /** wide = span 2 cols (used in bento layouts) */
  layout?: 'sq' | 'wide' | 'lg'
}

export function SubjectTile({ s, layout = 'sq' }: SubjectTileProps) {
  const isWide = layout === 'wide' || layout === 'lg'
  const isLg = layout === 'lg'
  return (
    <Link
      href={s.href}
      className="group no-underline"
      style={{
        position: 'relative',
        display: 'block',
        borderRadius: 16,
        padding: isLg ? '22px 24px' : 14,
        background: `color-mix(in oklch, ${s.color} 9%, var(--paper))`,
        border: `1px solid color-mix(in oklch, ${s.color} 28%, transparent)`,
        color: 'inherit',
        overflow: 'hidden',
        minHeight: isLg ? 180 : isWide ? 'auto' : 130,
        transition:
          'transform var(--dur-fast) var(--ease-out-soft), box-shadow var(--dur-fast)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${s.color} 1px, transparent 1px)`,
          backgroundSize: '14px 14px',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: isLg ? 'column' : isWide ? 'row' : 'column',
          alignItems: isWide && !isLg ? 'center' : 'flex-start',
          justifyContent: isLg ? 'space-between' : 'flex-start',
          gap: isWide && !isLg ? 12 : 22,
          height: '100%',
        }}
      >
        <div
          style={{
            width: isLg ? 56 : 44,
            height: isLg ? 56 : 44,
            borderRadius: 14,
            background: 'var(--paper)',
            border: `.5px solid color-mix(in oklch, ${s.color} 32%, transparent)`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: s.ink,
            flex: 'none',
          }}
        >
          <SubjectGlyph id={s.id} color={s.ink} size={isLg ? 32 : 24} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 8,
              flexWrap: 'wrap',
              marginBottom: 2,
            }}
          >
            <span
              style={{
                fontSize: isLg ? 26 : 16,
                fontWeight: 800,
                color: 'var(--ink)',
                letterSpacing: '-.02em',
              }}
            >
              {s.label}
            </span>
            <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{s.hindi}</span>
          </div>
          {typeof s.count === 'number' && (
            <div
              className="mono"
              style={{
                fontSize: isLg ? 11.5 : 11,
                color: s.ink,
                fontWeight: 600,
                letterSpacing: '.04em',
                textTransform: 'uppercase',
              }}
            >
              {s.count} {s.countUnit ?? 'visualizers'}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
