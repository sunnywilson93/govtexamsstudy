import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { CookieConsent } from '../CookieConsent'

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

beforeEach(() => {
  localStorageMock.clear()
  vi.restoreAllMocks()
})

describe('CookieConsent', () => {
  it('renders banner when no consent stored', () => {
    render(<CookieConsent />)
    expect(screen.getByRole('region', { name: /cookie consent/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /accept/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /decline/i })).toBeInTheDocument()
  })

  it('hides banner when consent is accepted', () => {
    localStorageMock.setItem('cookie-consent', 'accepted')
    render(<CookieConsent />)
    expect(screen.queryByRole('region', { name: /cookie consent/i })).not.toBeInTheDocument()
  })

  it('hides banner when consent is declined', () => {
    localStorageMock.setItem('cookie-consent', 'declined')
    render(<CookieConsent />)
    expect(screen.queryByRole('region', { name: /cookie consent/i })).not.toBeInTheDocument()
  })

  it('clicking Accept sets localStorage to accepted', async () => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { ...window.location, reload: vi.fn() },
    })
    render(<CookieConsent />)
    await userEvent.click(screen.getByRole('button', { name: /accept/i }))
    expect(localStorageMock.getItem('cookie-consent')).toBe('accepted')
  })

  it('clicking Decline sets localStorage to declined', async () => {
    render(<CookieConsent />)
    await userEvent.click(screen.getByRole('button', { name: /decline/i }))
    expect(localStorageMock.getItem('cookie-consent')).toBe('declined')
  })
})
