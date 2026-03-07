import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Geography - Indian Geography',
  description:
    "Explore India's physical and political geography for government exam preparation.",
}

export default function GeographyPage() {
  return (
    <div>
      <p className="mb-8 text-text-secondary">
        {"Explore India's physical and political geography. Visualizers coming soon."}
      </p>
    </div>
  )
}
