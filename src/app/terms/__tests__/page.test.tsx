import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TermsPage from '../page'

describe('TermsPage', () => {
  it('renders Terms & Disclaimer heading', () => {
    render(<TermsPage />)
    expect(screen.getByRole('heading', { level: 1, name: /terms & disclaimer/i })).toBeInTheDocument()
  })

  it('renders grievance email', () => {
    render(<TermsPage />)
    expect(screen.getByRole('link', { name: /grievance@govtexamsstudy\.org/i })).toBeInTheDocument()
  })
})
