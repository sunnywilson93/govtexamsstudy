import { describe, it, expect, beforeEach } from 'vitest'
import { useProgressStore } from '../progressStore'

describe('progressStore', () => {
  beforeEach(() => {
    useProgressStore.getState().reset()
  })

  it('initializes with zero streak', () => {
    expect(useProgressStore.getState().streak).toBe(0)
  })

  it('increments streak on daily activity', () => {
    useProgressStore.getState().recordActivity()
    expect(useProgressStore.getState().streak).toBe(1)
  })

  it('tracks topic completion', () => {
    useProgressStore.getState().markTopicCompleted('polity', 'articles')
    expect(useProgressStore.getState().completedTopics).toContain('polity:articles')
  })

  it('calculates badge level based on accuracy', () => {
    const level = useProgressStore.getState().getBadgeLevel('polity', 85)
    expect(level).toBe('silver')
  })

  it('returns none badge for low accuracy', () => {
    expect(useProgressStore.getState().getBadgeLevel('quant', 30)).toBe('none')
  })

  it('returns bronze for 50-69%', () => {
    expect(useProgressStore.getState().getBadgeLevel('quant', 65)).toBe('bronze')
  })

  it('returns gold for 90%+', () => {
    expect(useProgressStore.getState().getBadgeLevel('quant', 95)).toBe('gold')
  })

  it('does not double-increment streak for same day', () => {
    useProgressStore.getState().recordActivity()
    useProgressStore.getState().recordActivity()
    expect(useProgressStore.getState().streak).toBe(1)
  })

  it('records topic score', () => {
    useProgressStore.getState().recordScore('polity', 'articles', 80)
    expect(useProgressStore.getState().topicScores['polity:articles']).toBe(80)
  })
})
