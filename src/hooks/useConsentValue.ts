'use client'

import { useEffect, useState } from 'react'
import { CONSENT_CHANGED_EVENT, CONSENT_KEY, type ConsentValue } from '@/components/ui/consentKey'
import { readStoredConsent } from '@/lib/consent'

export function useConsentValue() {
  const [consent, setConsent] = useState<ConsentValue | null>(null)

  useEffect(() => {
    function syncConsent() {
      setConsent(readStoredConsent())
    }

    function handleStorage(event: StorageEvent) {
      if (event.key === CONSENT_KEY) {
        syncConsent()
      }
    }

    syncConsent()
    window.addEventListener(CONSENT_CHANGED_EVENT, syncConsent)
    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, syncConsent)
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  return consent
}
