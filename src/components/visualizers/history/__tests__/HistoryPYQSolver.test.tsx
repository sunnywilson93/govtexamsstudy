import { render, screen, fireEvent } from '@testing-library/react'
import { HistoryPYQSolver } from '../HistoryPYQSolver'
import type { HistoryProblem } from '@/types/history'

const mockProblems: HistoryProblem[] = [
  {
    id: 'iv-1',
    topic: 'indus-valley',
    question: 'Which site had a dockyard?',
    options: ['Harappa', 'Lothal', 'Kalibangan', 'Banawali'],
    correctIndex: 1,
    explanation: 'Lothal in Gujarat had the first known dockyard.',
    examName: 'UPSC Prelims',
    examYear: 2023,
    difficulty: 'easy',
  },
  {
    id: 'iv-2',
    topic: 'indus-valley',
    question: 'Who discovered Mohenjo-daro?',
    options: ['Daya Ram Sahni', 'R.D. Banerjee', 'John Marshall', 'Mortimer Wheeler'],
    correctIndex: 1,
    explanation: 'R.D. Banerjee discovered Mohenjo-daro in 1922.',
    examName: 'SSC CGL',
    examYear: 2022,
    difficulty: 'medium',
  },
]

describe('HistoryPYQSolver', () => {
  it('renders the first question', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByText('Which site had a dockyard?')).toBeInTheDocument()
  })

  it('renders all options for the current question', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByText('Harappa')).toBeInTheDocument()
    expect(screen.getByText('Lothal')).toBeInTheDocument()
    expect(screen.getByText('Kalibangan')).toBeInTheDocument()
    expect(screen.getByText('Banawali')).toBeInTheDocument()
  })

  it('renders exam badge', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByText('UPSC Prelims 2023')).toBeInTheDocument()
  })

  it('renders question counter', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByText(/1\s*\/\s*2/)).toBeInTheDocument()
  })

  it('shows explanation after selecting correct answer', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    fireEvent.click(screen.getByText('Lothal'))
    expect(screen.getByText(/first known dockyard/)).toBeInTheDocument()
  })

  it('shows explanation after selecting incorrect answer', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    fireEvent.click(screen.getByText('Harappa'))
    expect(screen.getByText(/first known dockyard/)).toBeInTheDocument()
  })

  it('navigates to next question', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    fireEvent.click(screen.getByText('Lothal'))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Who discovered Mohenjo-daro?')).toBeInTheDocument()
  })

  it('renders exam filter dropdown', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    expect(screen.getByLabelText(/filter by exam/i)).toBeInTheDocument()
  })

  it('filters questions by exam name', () => {
    render(<HistoryPYQSolver problems={mockProblems} />)
    fireEvent.change(screen.getByLabelText(/filter by exam/i), { target: { value: 'SSC CGL' } })
    expect(screen.getByText('Who discovered Mohenjo-daro?')).toBeInTheDocument()
    expect(screen.getByText(/1\s*\/\s*1/)).toBeInTheDocument()
  })
})
