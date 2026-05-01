'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { useConsentValue } from '@/hooks/useConsentValue'

interface ConsentScriptsProps {
  enabled: boolean
  gaId: string
  adsenseClient: string
}

export function ConsentScripts({ enabled, gaId, adsenseClient }: ConsentScriptsProps) {
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

  if (!canLoadScripts) return null

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
    </>
  )
}
