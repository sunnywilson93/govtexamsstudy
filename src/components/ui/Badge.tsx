import { Lock } from 'lucide-react'
import { clsx } from 'clsx'

type BadgeLevel = 'none' | 'bronze' | 'silver' | 'gold'

interface BadgeProps {
  level: BadgeLevel
  topic: string
  size?: 'sm' | 'md' | 'lg'
}

const TIER_COLORS: Record<BadgeLevel, string> = {
  none: '#9ca3af',
  bronze: '#CD7F32',
  silver: '#C0C0C0',
  gold: '#FFD700',
}

const SIZE_MAP: Record<NonNullable<BadgeProps['size']>, { circle: string; icon: number; text: string }> = {
  sm: { circle: 'h-8 w-8', icon: 12, text: 'text-xs' },
  md: { circle: 'h-12 w-12', icon: 18, text: 'text-sm' },
  lg: { circle: 'h-16 w-16', icon: 24, text: 'text-base' },
}

export function Badge({ level, topic, size = 'md' }: BadgeProps) {
  const color = TIER_COLORS[level]
  const isLocked = level === 'none'
  const sizeConfig = SIZE_MAP[size]

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={clsx(
          'flex items-center justify-center rounded-full border-2',
          sizeConfig.circle,
          isLocked && 'opacity-40'
        )}
        style={{
          borderColor: color,
          backgroundColor: isLocked ? 'transparent' : `${color}20`,
        }}
        aria-label={isLocked ? `${topic} badge locked` : `${topic} ${level} badge`}
      >
        {isLocked ? (
          <Lock size={sizeConfig.icon} className="text-text-muted" />
        ) : (
          <span
            className="text-xs font-bold uppercase"
            style={{ color }}
          >
            {level.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <span className={clsx('text-center text-text-secondary', sizeConfig.text)}>
        {topic}
      </span>
    </div>
  )
}
