import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PrivacyPage from '../page'

describe('PrivacyPage', () => {
  it('renders Privacy Policy heading', () => {
    render(<PrivacyPage />)
    expect(screen.getByRole('heading', { level: 1, name: /privacy policy/i })).toBeInTheDocument()
  })

  it('renders DPDPA reference', () => {
    render(<PrivacyPage />)
    const matches = screen.getAllByText(/dpdpa 2023/i)
    expect(matches.length).toBeGreaterThan(0)
  })
})
