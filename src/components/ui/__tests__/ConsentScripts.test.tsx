import { act, render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { CONSENT_CHANGED_EVENT, CONSENT_KEY } from '../consentKey'
import { ConsentScripts } from '../ConsentScripts'

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', { configurable: true, value: localStorageMock })

vi.mock('next/script', () => ({
  default: ({
    id,
    src,
    children,
  }: {
    id?: string
    src?: string
    children?: React.ReactNode
  }) => (
    <div data-testid={id ?? src} data-src={src}>
      {children}
    </div>
  ),
}))

beforeEach(() => {
  window.localStorage.clear()
})

describe('ConsentScripts', () => {
  it('does not load GA or AdSense before consent is accepted', () => {
    render(<ConsentScripts enabled gaId="G-TEST" adsenseClient="ca-pub-test" />)

    expect(screen.queryByTestId('google-analytics')).not.toBeInTheDocument()
    expect(
      screen.queryByTestId('https://www.googletagmanager.com/gtag/js?id=G-TEST')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByTestId(
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-test'
      )
    ).not.toBeInTheDocument()
  })

  it('does not load GA or AdSense when consent is declined', () => {
    window.localStorage.setItem(CONSENT_KEY, 'declined')

    render(<ConsentScripts enabled gaId="G-TEST" adsenseClient="ca-pub-test" />)

    expect(screen.queryByTestId('google-analytics')).not.toBeInTheDocument()
    expect(
      screen.queryByTestId('https://www.googletagmanager.com/gtag/js?id=G-TEST')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByTestId(
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-test'
      )
    ).not.toBeInTheDocument()
  })

  it('loads GA and AdSense when accepted consent is stored', () => {
    window.localStorage.setItem(CONSENT_KEY, 'accepted')

    render(<ConsentScripts enabled gaId="G-TEST" adsenseClient="ca-pub-test" />)

    expect(screen.getByTestId('google-analytics')).toBeInTheDocument()
    expect(screen.getByTestId('https://www.googletagmanager.com/gtag/js?id=G-TEST')).toBeInTheDocument()
    expect(
      screen.getByTestId(
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-test'
      )
    ).toBeInTheDocument()
  })

  it('loads scripts after consent changes to accepted in the current tab', async () => {
    render(<ConsentScripts enabled gaId="G-TEST" adsenseClient="ca-pub-test" />)

    act(() => {
      window.localStorage.setItem(CONSENT_KEY, 'accepted')
      window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT))
    })

    await waitFor(() => {
      expect(screen.getByTestId('google-analytics')).toBeInTheDocument()
    })
  })
})
