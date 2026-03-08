import { render, screen, fireEvent } from '@testing-library/react'
import { SubjectPYQSolver } from '../SubjectPYQSolver'
import type { SubjectProblem } from '@/types/subject-notes'

const mockProblems: SubjectProblem[] = [
  {
    id: 'fr-1',
    topic: 'fundamental-rights',
    question: 'Which article guarantees equality before law?',
    options: ['Article 12', 'Article 14', 'Article 19', 'Article 21'],
    correctIndex: 1,
    explanation: 'Article 14 guarantees equality before law and equal protection of laws.',
    examName: 'UPSC Prelims',
    examYear: 2023,
    difficulty: 'easy',
  },
  {
    id: 'fr-2',
    topic: 'fundamental-rights',
    question: 'Right to property was removed by which amendment?',
    options: ['42nd', '44th', '46th', '52nd'],
    correctIndex: 1,
    explanation: 'The 44th Amendment of 1978 removed right to property from fundamental rights.',
    examName: 'SSC CGL',
    examYear: 2022,
    difficulty: 'medium',
  },
]

describe('SubjectPYQSolver', () => {
  it('renders the first question', () => {
    render(<SubjectPYQSolver problems={mockProblems} subject="polity" />)
    expect(screen.getByText('Which article guarantees equality before law?')).toBeInTheDocument()
  })

  it('renders all options for the current question', () => {
    render(<SubjectPYQSolver problems={mockProblems} subject="polity" />)
    expect(screen.getByText('Article 12')).toBeInTheDocument()
    expect(screen.getByText('Article 14')).toBeInTheDocument()
    expect(screen.getByText('Article 19')).toBeInTheDocument()
    expect(screen.getByText('Article 21')).toBeInTheDocument()
  })

  it('renders exam badge', () => {
    render(<SubjectPYQSolver problems={mockProblems} subject="polity" />)
    expect(screen.getByText('UPSC Prelims 2023')).toBeInTheDocument()
  })

  it('renders question counter', () => {
    render(<SubjectPYQSolver problems={mockProblems} subject="polity" />)
    expect(screen.getByText(/1\s*\/\s*2/)).toBeInTheDocument()
  })

  it('shows explanation after selecting correct answer', () => {
    render(<SubjectPYQSolver problems={mockProblems} subject="polity" />)
    fireEvent.click(screen.getByText('Article 14'))
    expect(screen.getByText(/equality before law and equal protection/)).toBeInTheDocument()
  })

  it('shows explanation after selecting incorrect answer', () => {
    render(<SubjectPYQSolver problems={mockProblems} subject="polity" />)
    fireEvent.click(screen.getByText('Article 12'))
    expect(screen.getByText(/equality before law and equal protection/)).toBeInTheDocument()
  })

  it('navigates to next question', () => {
    render(<SubjectPYQSolver problems={mockProblems} subject="polity" />)
    fireEvent.click(screen.getByText('Article 14'))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Right to property was removed by which amendment?')).toBeInTheDocument()
  })

  it('renders exam filter dropdown', () => {
    render(<SubjectPYQSolver problems={mockProblems} subject="polity" />)
    expect(screen.getByLabelText(/filter by exam/i)).toBeInTheDocument()
  })

  it('filters questions by exam name', () => {
    render(<SubjectPYQSolver problems={mockProblems} subject="polity" />)
    fireEvent.change(screen.getByLabelText(/filter by exam/i), { target: { value: 'SSC CGL' } })
    expect(screen.getByText('Right to property was removed by which amendment?')).toBeInTheDocument()
    expect(screen.getByText(/1\s*\/\s*1/)).toBeInTheDocument()
  })
})
