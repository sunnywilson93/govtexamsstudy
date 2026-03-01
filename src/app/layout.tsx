import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

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
    "India's first free interactive visual learning platform for UPSC, SSC, Banking, Railways, and all government exam preparation. Learn through interactive visualizations.",
  keywords: [
    'govt exam preparation',
    'UPSC preparation',
    'SSC preparation',
    'interactive learning',
    'visual study',
    'free exam preparation',
    'government exam',
    'competitive exam India',
  ],
  authors: [{ name: 'GovtExamsStudy' }],
  openGraph: {
    title: 'GovtExamsStudy - Free Interactive Visual Learning',
    description:
      "India's first free interactive visual learning platform for government exams.",
    url: 'https://govtexamsstudy.org',
    siteName: 'GovtExamsStudy',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GovtExamsStudy - Free Interactive Visual Learning',
    description:
      'Learn for govt exams through interactive visualizations. 100% Free.',
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
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
