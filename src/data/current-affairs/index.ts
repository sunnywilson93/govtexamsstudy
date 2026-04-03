import type { DailyDigest } from '@/types/current-affairs'
import { digest20260403 } from './2026-04-03'
import { digest20260402 } from './2026-04-02'
import { digest20260401 } from './2026-04-01'

const DIGEST_REGISTRY: Record<string, DailyDigest> = {
  '2026-04-03': digest20260403,
  '2026-04-02': digest20260402,
  '2026-04-01': digest20260401,
}

export function getAllDates(): string[] {
  return Object.keys(DIGEST_REGISTRY).sort((a, b) => b.localeCompare(a))
}

export function getDigest(date: string): DailyDigest | undefined {
  return DIGEST_REGISTRY[date]
}

export function getLatestDigest(): DailyDigest | undefined {
  const dates = getAllDates()
  return dates.length > 0 ? DIGEST_REGISTRY[dates[0]] : undefined
}
