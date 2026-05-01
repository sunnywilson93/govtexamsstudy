import { render } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { CONSENT_KEY } from '@/components/ui/consentKey'

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

async function importProductionAdUnit() {
  vi.resetModules()
  vi.stubEnv('NODE_ENV', 'production')
  vi.stubEnv('NEXT_PUBLIC_ADSENSE_CLIENT', 'ca-pub-test')
  return import('../AdUnit')
}

beforeEach(() => {
  window.localStorage.clear()
  vi.unstubAllEnvs()
  delete window.adsbygoogle
})

describe('AdUnit', () => {
  it('does not render an ad request before cookie consent is accepted', async () => {
    const { AdUnit } = await importProductionAdUnit()

    render(<AdUnit slot="9876543210" />)

    expect(document.querySelector('.adsbygoogle')).not.toBeInTheDocument()
  })

  it('renders an ad request when production config and consent are present', async () => {
    window.localStorage.setItem(CONSENT_KEY, 'accepted')
    const { AdUnit } = await importProductionAdUnit()

    render(<AdUnit slot="9876543210" />)

    expect(document.querySelector('.adsbygoogle')).toBeInTheDocument()
    expect(window.adsbygoogle).toHaveLength(1)
  })
})
