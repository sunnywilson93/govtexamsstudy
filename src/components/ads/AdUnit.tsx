'use client'

import { useEffect, useRef } from 'react'
import { useConsentValue } from '@/hooks/useConsentValue'

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[]
  }
}

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal'
  layout?: string
  className?: string
}

const ADSENSE_CLIENT = (
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? 'ca-pub-2076517097071570'
).trim()
const isProduction = process.env.NODE_ENV === 'production'

export function AdUnit({ slot, format = 'auto', layout, className }: AdUnitProps) {
  const pushed = useRef(false)
  const consent = useConsentValue()
  const hasAdConfig = isProduction && Boolean(ADSENSE_CLIENT) && Boolean(slot)
  const canRequestAd = hasAdConfig && consent === 'accepted'

  useEffect(() => {
    if (!canRequestAd || pushed.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch {
      // AdSense not loaded or blocked
    }
  }, [canRequestAd])

  if (!isProduction) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border border-dashed border-border-primary bg-bg-secondary py-6 text-xs text-text-muted ${className ?? ''}`}
      >
        Ad Placeholder
      </div>
    )
  }

  if (!canRequestAd) return null

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layout ? { 'data-ad-layout': layout } : {})}
      />
    </div>
  )
}
