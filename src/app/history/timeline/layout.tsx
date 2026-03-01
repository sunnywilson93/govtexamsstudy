import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Historical Events Timeline',
  description:
    'Navigate a zoomable interactive timeline of key events in Indian history for government exam preparation.',
}

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
