import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive India Map with Layers',
  description:
    'Explore Indian states and geographical features on an interactive layered map for government exam preparation.',
}

export default function MapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
