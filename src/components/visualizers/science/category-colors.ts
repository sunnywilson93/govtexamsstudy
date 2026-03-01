import type { ElementCategory } from '@/types/science'

interface CategoryColor {
  bg: string
  text: string
  border: string
}

export const CATEGORY_COLORS: Record<ElementCategory, CategoryColor> = {
  'alkali-metal': { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' },
  'alkaline-earth': { bg: '#fde68a', text: '#78350f', border: '#d97706' },
  'transition-metal': { bg: '#fecaca', text: '#991b1b', border: '#ef4444' },
  'post-transition-metal': { bg: '#d1d5db', text: '#374151', border: '#6b7280' },
  'metalloid': { bg: '#bae6fd', text: '#075985', border: '#0284c7' },
  'nonmetal': { bg: '#bbf7d0', text: '#166534', border: '#22c55e' },
  'halogen': { bg: '#e9d5ff', text: '#6b21a8', border: '#a855f7' },
  'noble-gas': { bg: '#c7d2fe', text: '#3730a3', border: '#6366f1' },
  'lanthanide': { bg: '#fbcfe8', text: '#9d174d', border: '#ec4899' },
  'actinide': { bg: '#fed7aa', text: '#9a3412', border: '#f97316' },
}
