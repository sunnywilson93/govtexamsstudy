'use client'

import { useEffect } from 'react'
import { useConsentValue } from '@/hooks/useConsentValue'

interface ConsentScriptsProps {
  enabled: boolean
  adsenseClient: string
}

export function ConsentScripts({ enabled, adsenseClient }: ConsentScriptsProps) {
  const consent = useConsentValue()
  const canLoadScripts = enabled && consent === 'accepted'
  const trimmedAdsenseClient = adsenseClient.trim()
  const adsenseSrc = trimmedAdsenseClient
    ? `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${trimmedAdsenseClient}`
    : ''

  useEffect(() => {
    if (!canLoadScripts || !adsenseSrc) return

    const alreadyLoaded = Array.from(document.scripts).some((script) => script.src === adsenseSrc)
    if (alreadyLoaded) return

    const script = document.createElement('script')
    script.async = true
    script.src = adsenseSrc
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)
  }, [adsenseSrc, canLoadScripts])

  return null
}
