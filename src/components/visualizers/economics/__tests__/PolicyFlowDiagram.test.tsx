import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PolicyFlowDiagram } from '../PolicyFlowDiagram'
import type { PolicyFlow } from '@/types/economics'

vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <div {...props}>{children}</div>,
    g: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <g {...props}>{children}</g>,
    line: ({
      initial: _i,
      animate: _a,
      transition: _t,
      ...props
    }: Record<string, unknown>) => <line {...props} />,
    polygon: ({
      initial: _i,
      animate: _a,
      transition: _t,
      ...props
    }: Record<string, unknown>) => <polygon {...props} />,
  },
}))

const mockFlows: PolicyFlow[] = [
  {
    id: 'monetary-test',
    name: 'Monetary Policy Test',
    description: 'Test monetary flow description.',
    category: 'monetary',
    steps: [
      {
        id: 1,
        title: 'RBI changes Repo Rate',
        description: 'Step 1 description.',
        value: 'Repo Rate: 6.50%',
        connections: [{ targetStepId: 2, label: 'Signals cost' }],
      },
      {
        id: 2,
        title: 'Bank Lending Rates adjust',
        description: 'Step 2 description.',
        connections: [{ targetStepId: 3, label: 'Affects borrowing' }],
      },
      {
        id: 3,
        title: 'Consumer Borrowing',
        description: 'Step 3 description.',
        connections: [],
      },
    ],
  },
  {
    id: 'fiscal-test',
    name: 'Fiscal Policy Test',
    description: 'Test fiscal flow description.',
    category: 'fiscal',
    steps: [
      {
        id: 1,
        title: 'Government spending',
        description: 'Fiscal step 1.',
        connections: [{ targetStepId: 2, label: 'Creates projects' }],
      },
      {
        id: 2,
        title: 'Infrastructure Development',
        description: 'Fiscal step 2.',
        connections: [],
      },
    ],
  },
]

describe('PolicyFlowDiagram', () => {
  it('renders flow selector with flow names', () => {
    render(<PolicyFlowDiagram flows={mockFlows} />)

    const select = screen.getByRole('combobox', { name: 'Select flow' })
    expect(select).toBeInTheDocument()

    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(2)
    expect(options[0]).toHaveTextContent('Monetary Policy Test')
    expect(options[1]).toHaveTextContent('Fiscal Policy Test')
  })

  it('shows step controller', () => {
    render(<PolicyFlowDiagram flows={mockFlows} />)

    expect(screen.getByText('Step 1 of 3')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous step' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next step' })).toBeInTheDocument()
  })

  it('shows first flow node as active on step 0', () => {
    render(<PolicyFlowDiagram flows={mockFlows} />)

    const activeNodes = screen.getAllByTestId('flow-node-active')
    expect(activeNodes).toHaveLength(1)

    expect(screen.getByText('RBI changes Repo Rate')).toBeInTheDocument()

    expect(screen.getByText(/Step 1: RBI changes Repo Rate/)).toBeInTheDocument()
    expect(screen.getByText('Step 1 description.')).toBeInTheDocument()
  })

  it('advancing step changes active node', async () => {
    const user = userEvent.setup()

    render(<PolicyFlowDiagram flows={mockFlows} />)

    expect(screen.getAllByTestId('flow-node-active')).toHaveLength(1)
    expect(screen.getByText(/Step 1: RBI changes Repo Rate/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next step' }))

    expect(screen.getByText('Step 2 of 3')).toBeInTheDocument()
    expect(screen.getByText(/Step 2: Bank Lending Rates adjust/)).toBeInTheDocument()
    expect(screen.getByText('Step 2 description.')).toBeInTheDocument()

    const activeNodes = screen.getAllByTestId('flow-node-active')
    expect(activeNodes).toHaveLength(1)

    const completedNodes = screen.getAllByTestId('flow-node-completed')
    expect(completedNodes).toHaveLength(1)
  })
})
