import { render, screen } from '@testing-library/react'
import { SubjectNotesPanel } from '../SubjectNotesPanel'
import type { SubjectConcept } from '@/types/subject-notes'

const mockConcept: SubjectConcept = {
  topic: 'fundamental-rights',
  title: 'Fundamental Rights',
  description: 'Rights guaranteed by Part III of the Constitution.',
  category: 'Constitutional Framework',
  keyDates: [
    { year: '1950', event: 'Constitution comes into effect' },
    { year: '1978', event: '44th Amendment modifies property right' },
  ],
  notes: [
    { section: 'Right to Equality', content: 'Articles 14-18 guarantee equality before law.' },
    { section: 'Right to Freedom', content: 'Articles 19-22 protect individual liberties.' },
  ],
  examTags: ['UPSC Prelims', 'SSC CGL'],
  examRelevance: 'Asked in 3-4 questions every year in UPSC.',
}

describe('SubjectNotesPanel', () => {
  it('renders the topic title', () => {
    render(<SubjectNotesPanel concept={mockConcept} subject="polity" />)
    expect(screen.getByText('Fundamental Rights')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<SubjectNotesPanel concept={mockConcept} subject="polity" />)
    expect(screen.getByText('Rights guaranteed by Part III of the Constitution.')).toBeInTheDocument()
  })

  it('renders key dates', () => {
    render(<SubjectNotesPanel concept={mockConcept} subject="polity" />)
    expect(screen.getByText('1950')).toBeInTheDocument()
    expect(screen.getByText('Constitution comes into effect')).toBeInTheDocument()
    expect(screen.getByText('1978')).toBeInTheDocument()
  })

  it('renders note sections', () => {
    render(<SubjectNotesPanel concept={mockConcept} subject="polity" />)
    expect(screen.getByText('Right to Equality')).toBeInTheDocument()
    expect(screen.getByText('Articles 14-18 guarantee equality before law.')).toBeInTheDocument()
    expect(screen.getByText('Right to Freedom')).toBeInTheDocument()
  })

  it('renders exam tags as chips', () => {
    render(<SubjectNotesPanel concept={mockConcept} subject="polity" />)
    expect(screen.getByText('UPSC Prelims')).toBeInTheDocument()
    expect(screen.getByText('SSC CGL')).toBeInTheDocument()
  })

  it('renders exam relevance note', () => {
    render(<SubjectNotesPanel concept={mockConcept} subject="polity" />)
    expect(screen.getByText(/3-4 questions/)).toBeInTheDocument()
  })
})
