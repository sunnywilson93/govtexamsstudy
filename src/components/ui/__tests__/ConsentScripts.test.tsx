import { act, render, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
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

const ADSENSE_SRC = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-test'

function getAdsenseScript() {
  return Array.from(document.scripts).find((script) => script.src === ADSENSE_SRC)
}

beforeEach(() => {
  window.localStorage.clear()
  document.querySelectorAll(`script[src="${ADSENSE_SRC}"]`).forEach((script) => script.remove())
})

describe('ConsentScripts', () => {
  it('does not load AdSense before consent is accepted', () => {
    render(<ConsentScripts enabled adsenseClient="ca-pub-test" />)

    expect(getAdsenseScript()).toBeUndefined()
  })

  it('does not load AdSense when consent is declined', () => {
    window.localStorage.setItem(CONSENT_KEY, 'declined')

    render(<ConsentScripts enabled adsenseClient="ca-pub-test" />)

    expect(getAdsenseScript()).toBeUndefined()
  })

  it('loads AdSense when accepted consent is stored', async () => {
    window.localStorage.setItem(CONSENT_KEY, 'accepted')

    render(<ConsentScripts enabled adsenseClient="ca-pub-test" />)

    await waitFor(() => {
      expect(getAdsenseScript()).toBeDefined()
    })
  })

  it('loads AdSense after consent changes to accepted in the current tab', async () => {
    render(<ConsentScripts enabled adsenseClient="ca-pub-test" />)

    act(() => {
      window.localStorage.setItem(CONSENT_KEY, 'accepted')
      window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT))
    })

    await waitFor(() => {
      expect(getAdsenseScript()).toBeDefined()
    })
  })
})
