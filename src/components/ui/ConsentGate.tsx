'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { CONSENT_KEY } from './consentKey'

interface ConsentGateProps {
  gaId: string
  adsenseClient: string
}

export function ConsentGate({ gaId, adsenseClient }: ConsentGateProps) {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    setAccepted(stored === 'accepted')
  }, [])

  if (!accepted) return null

  return (
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
