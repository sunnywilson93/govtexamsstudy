import {
  CONSENT_CHANGED_EVENT,
  CONSENT_KEY,
  type ConsentValue,
} from '@/components/ui/consentKey'

export function readStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    return stored === 'accepted' || stored === 'declined' ? stored : null
  } catch {
    return null
  }
}

export function saveStoredConsent(value: ConsentValue) {
  window.localStorage.setItem(CONSENT_KEY, value)
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT))
}
