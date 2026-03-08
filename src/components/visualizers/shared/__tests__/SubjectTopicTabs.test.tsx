import { render, screen, fireEvent } from '@testing-library/react'
import { SubjectTopicTabs } from '../SubjectTopicTabs'
import type { SubjectConcept, SubjectRevision, SubjectProblem } from '@/types/subject-notes'

const mockConcept: SubjectConcept = {
  topic: 'fundamental-rights',
  title: 'Fundamental Rights',
  description: 'Rights guaranteed by the Constitution.',
  category: 'Constitutional Framework',
  keyDates: [{ year: '1950', event: 'Constitution comes into effect' }],
  notes: [{ section: 'Overview', content: 'Six fundamental rights.' }],
  examTags: ['UPSC Prelims'],
  examRelevance: 'Frequently asked.',
}

const mockRevision: SubjectRevision = {
  topic: 'fundamental-rights',
  bullets: ['Key fact one.'],
  comparisons: [],
  mnemonics: [],
}

const mockProblems: SubjectProblem[] = [
  {
    id: 'fr-1',
    topic: 'fundamental-rights',
    question: 'Test question?',
    options: ['A', 'B', 'C', 'D'],
    correctIndex: 0,
    explanation: 'Explanation here.',
    examName: 'UPSC Prelims',
    examYear: 2023,
    difficulty: 'easy',
  },
]

describe('SubjectTopicTabs', () => {
  it('renders Notes tab button', () => {
    render(<SubjectTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} subject="polity" />)
    expect(screen.getByRole('button', { name: 'Notes' })).toBeInTheDocument()
  })

  it('renders Revision tab button', () => {
    render(<SubjectTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} subject="polity" />)
    expect(screen.getByRole('button', { name: 'Revision' })).toBeInTheDocument()
  })

  it('renders PYQ Practice tab button', () => {
    render(<SubjectTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} subject="polity" />)
    expect(screen.getByRole('button', { name: 'PYQ Practice' })).toBeInTheDocument()
  })

  it('shows Notes content by default', () => {
    render(<SubjectTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} subject="polity" />)
    expect(screen.getByText('Fundamental Rights')).toBeInTheDocument()
    expect(screen.getByText('1950')).toBeInTheDocument()
  })

  it('switches to Revision tab on click', () => {
    render(<SubjectTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} subject="polity" />)
    fireEvent.click(screen.getByRole('button', { name: 'Revision' }))
    expect(screen.getByText('Key fact one.')).toBeInTheDocument()
  })

  it('switches to PYQ Practice tab on click', () => {
    render(<SubjectTopicTabs concept={mockConcept} revision={mockRevision} problems={mockProblems} subject="polity" />)
    fireEvent.click(screen.getByRole('button', { name: 'PYQ Practice' }))
    expect(screen.getByText('Test question?')).toBeInTheDocument()
  })
})
