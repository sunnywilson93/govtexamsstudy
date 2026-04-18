'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CONSENT_KEY, type ConsentValue } from './consentKey'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setVisible(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'accepted' satisfies ConsentValue)
    setVisible(false)
    window.location.reload()
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, 'declined' satisfies ConsentValue)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border-primary bg-bg-primary px-4 py-4 shadow-lg"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-secondary">
          We use cookies for analytics and ads to keep this platform free. Read our{' '}
          <Link href="/privacy" className="text-indigo-600 underline hover:text-indigo-700">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={handleDecline}
            className="rounded-md border border-border-primary px-4 py-1.5 text-sm text-text-secondary transition-colors hover:bg-bg-elevated"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
