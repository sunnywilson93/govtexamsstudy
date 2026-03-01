import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import { SeatingVisualizer } from '../SeatingVisualizer'
import { seatingProblems } from '@/data/reasoning/seating-problems'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

describe('SeatingVisualizer', () => {
  it('renders problem selector with problem titles', () => {
    render(<SeatingVisualizer problems={seatingProblems} />)
    const select = screen.getByLabelText('Select problem')
    expect(select).toBeInTheDocument()
    for (const p of seatingProblems) {
      expect(screen.getByRole('option', { name: p.id })).toBeInTheDocument()
    }
  })

  it('shows the correct number of seats', () => {
    render(<SeatingVisualizer problems={seatingProblems} />)
    const seatCount = seatingProblems[0].people.length
    const seats = screen.getAllByTestId(/^seat-/)
    expect(seats).toHaveLength(seatCount)
  })

  it('shows step controller', () => {
    render(<SeatingVisualizer problems={seatingProblems} />)
    expect(screen.getByText(/Step 1 of/)).toBeInTheDocument()
  })

  it('navigates to next step and updates clue highlight', async () => {
    render(<SeatingVisualizer problems={seatingProblems} />)
    const firstClueId = seatingProblems[0].steps[0].clueApplied
    const firstClue = seatingProblems[0].clues.find((c) => c.id === firstClueId)!
    expect(screen.getByTestId(`clue-${firstClue.id}-active`)).toBeInTheDocument()

    await userEvent.click(screen.getByLabelText('Next step'))
    expect(screen.getByText(/Step 2 of/)).toBeInTheDocument()

    const secondClueId = seatingProblems[0].steps[1].clueApplied
    const secondClue = seatingProblems[0].clues.find((c) => c.id === secondClueId)!
    expect(screen.getByTestId(`clue-${secondClue.id}-active`)).toBeInTheDocument()
  })
})
