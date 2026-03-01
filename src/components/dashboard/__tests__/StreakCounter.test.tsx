import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { StreakCounter } from '../StreakCounter'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, transition, whileHover, ...rest } = props as Record<string, unknown>
      void initial; void animate; void transition; void whileHover
      return <div {...(rest as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>
    },
    span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, transition, ...rest } = props as Record<string, unknown>
      void initial; void animate; void transition
      return <span {...(rest as React.HTMLAttributes<HTMLSpanElement>)}>{children}</span>
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

const mockStore = {
  streak: 5,
  lastActivityDate: new Date().toISOString().split('T')[0],
}

vi.mock('@/store/progressStore', () => ({
  useProgressStore: (selector: (state: typeof mockStore) => unknown) => selector(mockStore),
}))

describe('StreakCounter', () => {
  beforeEach(() => {
    mockStore.streak = 5
    mockStore.lastActivityDate = new Date().toISOString().split('T')[0]
  })

  it('renders streak count', () => {
    render(<StreakCounter />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('shows "day streak" text', () => {
    render(<StreakCounter />)
    expect(screen.getByText('day streak')).toBeInTheDocument()
  })

  it('shows last 7 days dots', () => {
    render(<StreakCounter />)
    const dots = screen.getAllByTestId(/^streak-dot-/)
    expect(dots).toHaveLength(7)
  })

  it('renders singular "day streak" for streak of 1', () => {
    mockStore.streak = 1
    render(<StreakCounter />)
    expect(screen.getByText('day streak')).toBeInTheDocument()
  })

  it('shows flame icon', () => {
    render(<StreakCounter />)
    expect(screen.getByLabelText('Streak flame')).toBeInTheDocument()
  })
})
