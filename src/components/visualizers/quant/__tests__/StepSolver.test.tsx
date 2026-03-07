import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import { StepSolver } from '../StepSolver'
import { percentageProblems } from '@/data/quant/problems/percentage-problems'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

describe('StepSolver', () => {
  it('renders problem selector', () => {
    render(<StepSolver problems={percentageProblems} />)
    expect(screen.getByLabelText('Select problem')).toBeInTheDocument()
  })

  it('shows problem title when selected', () => {
    render(<StepSolver problems={percentageProblems} />)
    expect(
      screen.getByRole('heading', { name: percentageProblems[0].title })
    ).toBeInTheDocument()
  })

  it('shows step controller', () => {
    render(<StepSolver problems={percentageProblems} />)
    expect(screen.getByText(/Step 1 of/)).toBeInTheDocument()
  })

  it('navigates to next step', async () => {
    render(<StepSolver problems={percentageProblems} />)
    await userEvent.click(screen.getByLabelText('Next step'))
    expect(screen.getByText(/Step 2 of/)).toBeInTheDocument()
  })
})
