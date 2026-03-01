import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Timeline } from '../Timeline'
import type { HistoricalEvent, Period } from '@/types/history'

vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      whileHover: _wh,
      layout: _l,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <div {...props}>{children}</div>,
    aside: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <aside {...props}>{children}</aside>,
    button: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      whileHover: _wh,
      whileTap: _wt,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <button {...props}>{children}</button>,
  },
}))

const mockEvents: HistoricalEvent[] = [
  {
    id: 'maurya-empire',
    year: -322,
    endYear: -185,
    title: 'Maurya Empire',
    description: 'Founded by Chandragupta Maurya.',
    causes: ['Overthrow of the Nanda dynasty'],
    effects: ['Political unification of India'],
    relatedEvents: ['kalinga-war'],
    persons: ['chandragupta-maurya', 'ashoka'],
    category: 'ancient',
    subcategory: 'Empire',
  },
  {
    id: 'kalinga-war',
    year: -261,
    title: 'Kalinga War',
    description: 'Ashoka conquered Kalinga.',
    causes: ["Ashoka's imperial expansion"],
    effects: ["Ashoka's conversion to Buddhism"],
    relatedEvents: ['maurya-empire'],
    persons: ['ashoka'],
    category: 'ancient',
    subcategory: 'War',
  },
  {
    id: 'delhi-sultanate',
    year: 1206,
    endYear: 1526,
    title: 'Delhi Sultanate',
    description: 'Five successive dynasties ruled from Delhi.',
    causes: ["Muhammad Ghori's conquests"],
    effects: ['Indo-Islamic architecture'],
    relatedEvents: [],
    persons: [],
    category: 'medieval',
    subcategory: 'Sultanate',
  },
  {
    id: 'quit-india',
    year: 1942,
    title: 'Quit India Movement',
    description: "Gandhi's call for British to Quit India.",
    causes: ['Failure of Cripps Mission'],
    effects: ['Massive underground resistance'],
    relatedEvents: [],
    persons: ['mahatma-gandhi'],
    category: 'modern',
    subcategory: 'Movement',
  },
  {
    id: 'constitution-adoption',
    year: 1950,
    title: 'Adoption of the Constitution of India',
    description: 'India became a sovereign democratic republic.',
    causes: ['Independence of India'],
    effects: ['India became a republic'],
    relatedEvents: [],
    persons: ['br-ambedkar'],
    category: 'post-independence',
    subcategory: 'Constitution',
  },
]

const mockPeriods: Period[] = [
  {
    id: 'ancient',
    name: 'Ancient India',
    startYear: -3300,
    endYear: 600,
    events: ['maurya-empire', 'kalinga-war'],
    significance: 'Ancient period.',
  },
  {
    id: 'medieval',
    name: 'Medieval India',
    startYear: 600,
    endYear: 1526,
    events: ['delhi-sultanate'],
    significance: 'Medieval period.',
  },
  {
    id: 'colonial',
    name: 'Colonial Period',
    startYear: 1757,
    endYear: 1947,
    events: ['quit-india'],
    significance: 'Colonial period.',
  },
  {
    id: 'post-independence',
    name: 'Post-Independence India',
    startYear: 1947,
    endYear: 2025,
    events: ['constitution-adoption'],
    significance: 'Post-independence period.',
  },
]

describe('Timeline', () => {
  it('renders filter buttons for categories', () => {
    render(<Timeline events={mockEvents} periods={mockPeriods} />)

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Ancient' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Medieval' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Modern' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Post-Independence' })).toBeInTheDocument()
  })

  it('shows event markers on the timeline', () => {
    render(<Timeline events={mockEvents} periods={mockPeriods} />)

    expect(screen.getByText('Maurya Empire')).toBeInTheDocument()
    expect(screen.getByText('Kalinga War')).toBeInTheDocument()
    expect(screen.getByText('Delhi Sultanate')).toBeInTheDocument()
    expect(screen.getByText('Quit India Movement')).toBeInTheDocument()
    expect(screen.getByText('Adoption of the Constitution of India')).toBeInTheDocument()
  })

  it('filters by category to show only matching events', async () => {
    const user = userEvent.setup()

    render(<Timeline events={mockEvents} periods={mockPeriods} />)

    await user.click(screen.getByRole('button', { name: 'Ancient' }))

    expect(screen.getByText('Maurya Empire')).toBeInTheDocument()
    expect(screen.getByText('Kalinga War')).toBeInTheDocument()
    expect(screen.queryByText('Delhi Sultanate')).not.toBeInTheDocument()
    expect(screen.queryByText('Quit India Movement')).not.toBeInTheDocument()
    expect(screen.queryByText('Adoption of the Constitution of India')).not.toBeInTheDocument()
  })

  it('clicking an event shows the EventCard', async () => {
    const user = userEvent.setup()

    render(<Timeline events={mockEvents} periods={mockPeriods} />)

    await user.click(screen.getByText('Maurya Empire'))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/322 BCE/)).toBeInTheDocument()
  })
})
