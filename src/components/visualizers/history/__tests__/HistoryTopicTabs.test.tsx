import { render, screen, fireEvent } from '@testing-library/react'
import { HistoryTopicTabs } from '../HistoryTopicTabs'
import type { HistoryConcept, HistoryRevision, HistoryProblem } from '@/types/history'

const mockConcept: HistoryConcept = {
  topic: 'indus-valley',
  title: 'Indus Valley Civilization',
  description: 'Early urban civilization.',
  period: 'Ancient India',
  keyDates: [{ year: '3300 BCE', event: 'Civilization begins' }],
  notes: [{ section: 'Overview', content: 'Great civilization.' }],
  examTags: ['UPSC Prelims'],
  examRelevance: 'Frequently asked.',
}

const mockRevision: HistoryRevision = {
  topic: 'indus-valley',
  bullets: ['Key fact one.'],
  comparisons: [],
  mnemonics: [],
}

const mockProblems: HistoryProblem[] = [
  {
    id: 'iv-1',
    topic: 'indus-valley',
    question: 'Test question?',
    options: ['A', 'B', 'C', 'D'],
    correctIndex: 0,
    explanation: 'Explanation here.',
    examName: 'UPSC Prelims',
    examYear: 2023,
    difficulty: 'easy',
  },
]

describe('HistoryTopicTabs', () => {
  it('renders Notes tab button', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Notes' })).toBeInTheDocument()
  })

  it('renders Revision tab button', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Revision' })).toBeInTheDocument()
  })

  it('renders PYQ Practice tab button', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'PYQ Practice' })).toBeInTheDocument()
  })

  it('shows Notes content by default', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    expect(screen.getByText('Indus Valley Civilization')).toBeInTheDocument()
    expect(screen.getByText('3300 BCE')).toBeInTheDocument()
  })

  it('switches to Revision tab on click', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    fireEvent.click(screen.getByRole('button', { name: 'Revision' }))
    expect(screen.getByText('Key fact one.')).toBeInTheDocument()
  })

  it('switches to PYQ Practice tab on click', () => {
    render(<HistoryTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} />)
    fireEvent.click(screen.getByRole('button', { name: 'PYQ Practice' }))
    expect(screen.getByText('Test question?')).toBeInTheDocument()
  })
})
