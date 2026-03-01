import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { MCQCard } from '../MCQCard'
import type { MCQ } from '@/types/shared'

const mockMCQ: MCQ = {
  id: 'test-1',
  question: 'What is 2 + 2?',
  options: ['3', '4', '5', '6'],
  correctIndex: 1,
  explanation: '2 + 2 equals 4.',
  topic: 'percentage',
  subject: 'quant',
}

describe('MCQCard', () => {
  it('renders question text and 4 options', () => {
    render(<MCQCard mcq={mockMCQ} onAnswer={() => {}} />)
    expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
  })

  it('clicking an option calls onAnswer with correct index', async () => {
    const onAnswer = vi.fn()
    render(<MCQCard mcq={mockMCQ} onAnswer={onAnswer} />)
    await userEvent.click(screen.getByText('5'))
    expect(onAnswer).toHaveBeenCalledWith(2)
  })

  it('shows correct/incorrect state when showResult is true', () => {
    render(
      <MCQCard
        mcq={mockMCQ}
        onAnswer={() => {}}
        showResult
        selectedIndex={2}
      />
    )
    const correctButton = screen.getByText('4').closest('button')
    const incorrectButton = screen.getByText('5').closest('button')
    expect(correctButton).toHaveAttribute('data-state', 'correct')
    expect(incorrectButton).toHaveAttribute('data-state', 'incorrect')
  })

  it('shows explanation when showResult is true', () => {
    render(
      <MCQCard
        mcq={mockMCQ}
        onAnswer={() => {}}
        showResult
        selectedIndex={1}
      />
    )
    expect(screen.getByText('2 + 2 equals 4.')).toBeInTheDocument()
  })
})
