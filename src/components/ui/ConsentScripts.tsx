'use client'

import Script from 'next/script'
import { useConsentValue } from '@/hooks/useConsentValue'

interface ConsentScriptsProps {
  enabled: boolean
  gaId: string
  adsenseClient: string
}

export function ConsentScripts({ enabled, gaId, adsenseClient }: ConsentScriptsProps) {
  const consent = useConsentValue()

  if (!enabled || consent !== 'accepted') return null

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
      {adsenseClient && (
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      )}
    </>
  )
}
