import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/JsonLd'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-GPQEH3V7KN'
const isProduction = process.env.NODE_ENV === 'production'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'GovtExamsStudy - Free Interactive Visual Learning for Govt Exams',
    template: '%s | GovtExamsStudy',
  },
  description:
    "India's first free interactive visual learning platform for UPSC, SSC CGL, IBPS PO, RRB NTPC, and all government exam preparation. Learn through animated, step-by-step visualizations.",
  keywords: [
    'govt exam preparation India',
    'UPSC preparation',
    'SSC CGL preparation',
    'SSC CHSL preparation',
    'IBPS PO preparation',
    'IBPS Clerk preparation',
    'RRB NTPC preparation',
    'SBI PO preparation',
    'State PSC preparation',
    'UPPSC preparation',
    'MPPSC preparation',
    'interactive learning India',
    'free exam preparation India',
    'government exam India',
    'competitive exam India',
    'visual study material',
    'reasoning tricks',
    'quantitative aptitude tricks',
    'polity for UPSC',
    'Indian history for SSC',
  ],
  authors: [{ name: 'GovtExamsStudy' }],
  alternates: {
    canonical: 'https://govtexamsstudy.org',
    languages: {
      'en-IN': 'https://govtexamsstudy.org',
      'x-default': 'https://govtexamsstudy.org',
    },
  },
  openGraph: {
    title: 'GovtExamsStudy - Free Interactive Visual Learning for Indian Govt Exams',
    description:
      "India's first free interactive visual learning platform for UPSC, SSC, IBPS, RRB and all government exams.",
    url: 'https://govtexamsstudy.org',
    siteName: 'GovtExamsStudy',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GovtExamsStudy - Free Visual Learning for Indian Govt Exams',
    description:
      'Interactive visualizations for UPSC, SSC, IBPS, RRB exams. 100% Free.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <head>
        <JsonLd />
        {isProduction && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
