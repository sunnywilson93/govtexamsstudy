import { render, screen } from '@testing-library/react'
import { HistoryNotesPanel } from '../HistoryNotesPanel'
import type { HistoryConcept } from '@/types/history'

const mockConcept: HistoryConcept = {
  topic: 'indus-valley',
  title: 'Indus Valley Civilization',
  description: 'One of the earliest urban civilizations.',
  period: 'Ancient India',
  keyDates: [
    { year: '3300 BCE', event: 'Harappan civilization begins' },
    { year: '1300 BCE', event: 'Decline of the civilization' },
  ],
  notes: [
    { section: 'Town Planning', content: 'Grid-pattern streets with advanced drainage systems.' },
    { section: 'Trade & Economy', content: 'Evidence of trade with Mesopotamia.' },
  ],
  examTags: ['UPSC Prelims', 'SSC CGL'],
  examRelevance: 'Asked in 2-3 questions every year in UPSC.',
}

describe('HistoryNotesPanel', () => {
  it('renders the topic title', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('Indus Valley Civilization')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('One of the earliest urban civilizations.')).toBeInTheDocument()
  })

  it('renders key dates', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('3300 BCE')).toBeInTheDocument()
    expect(screen.getByText('Harappan civilization begins')).toBeInTheDocument()
    expect(screen.getByText('1300 BCE')).toBeInTheDocument()
  })

  it('renders note sections', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('Town Planning')).toBeInTheDocument()
    expect(screen.getByText('Grid-pattern streets with advanced drainage systems.')).toBeInTheDocument()
    expect(screen.getByText('Trade & Economy')).toBeInTheDocument()
  })

  it('renders exam tags as chips', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText('UPSC Prelims')).toBeInTheDocument()
    expect(screen.getByText('SSC CGL')).toBeInTheDocument()
  })

  it('renders exam relevance note', () => {
    render(<HistoryNotesPanel concept={mockConcept} />)
    expect(screen.getByText(/2-3 questions/)).toBeInTheDocument()
  })
})
