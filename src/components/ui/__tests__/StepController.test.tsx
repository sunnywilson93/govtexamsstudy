import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { StepController } from '../StepController'

describe('StepController', () => {
  it('renders current step and total', () => {
    render(<StepController currentStep={2} totalSteps={5} onStepChange={() => {}} />)
    expect(screen.getByText('Step 2 of 5')).toBeInTheDocument()
  })

  it('calls onStepChange with next step', async () => {
    const onStepChange = vi.fn()
    render(<StepController currentStep={2} totalSteps={5} onStepChange={onStepChange} />)
    await userEvent.click(screen.getByLabelText('Next step'))
    expect(onStepChange).toHaveBeenCalledWith(3)
  })

  it('disables previous on first step', () => {
    render(<StepController currentStep={0} totalSteps={5} onStepChange={() => {}} />)
    expect(screen.getByLabelText('Previous step')).toBeDisabled()
  })

  it('disables next on last step', () => {
    render(<StepController currentStep={4} totalSteps={5} onStepChange={() => {}} />)
    expect(screen.getByLabelText('Next step')).toBeDisabled()
  })
})
