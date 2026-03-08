import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Indian History"
      subjectColor="#f59e0b"
      subjectSlug="history"
      showHeading={false}
      links={[
        { href: '/history/indus-valley', label: 'Indus Valley Civilization', group: 'Ancient India' },
        { href: '/history/vedic-period', label: 'Vedic Period', group: 'Ancient India' },
        { href: '/history/buddhism-jainism', label: 'Buddhism & Jainism', group: 'Ancient India' },
        { href: '/history/mahajanapadas', label: 'Mahajanapadas', group: 'Ancient India' },
        { href: '/history/maurya-empire', label: 'Maurya Empire & Ashoka', group: 'Ancient India' },
        { href: '/history/post-maurya', label: 'Post-Maurya Period', group: 'Ancient India' },
        { href: '/history/sangam-age', label: 'Sangam Age', group: 'Ancient India' },
        { href: '/history/gupta-empire', label: 'Gupta Empire', group: 'Ancient India' },
        { href: '/history/south-indian-dynasties', label: 'South Indian Dynasties', group: 'Ancient India' },
        { href: '/history/prehistoric-india', label: 'Prehistoric India', group: 'Ancient India' },
        { href: '/history/philosophical-schools', label: 'Philosophical Schools', group: 'Ancient India' },
        { href: '/history/chola-dynasty', label: 'Chola Dynasty', group: 'Ancient India' },
        { href: '/history/pallava-dynasty', label: 'Pallava Dynasty', group: 'Ancient India' },
        { href: '/history/delhi-sultanate', label: 'Delhi Sultanate', group: 'Medieval India' },
        { href: '/history/vijayanagara-bahmani', label: 'Vijayanagara & Bahmani', group: 'Medieval India' },
        { href: '/history/bhakti-sufi', label: 'Bhakti & Sufi Movements', group: 'Medieval India' },
        { href: '/history/mughal-empire', label: 'Mughal Empire', group: 'Medieval India' },
        { href: '/history/maratha-empire', label: 'Maratha Empire', group: 'Medieval India' },
        { href: '/history/medieval-kingdoms', label: 'Other Medieval Kingdoms', group: 'Medieval India' },
        { href: '/history/rajput-kingdoms', label: 'Rajput Kingdoms', group: 'Medieval India' },
        { href: '/history/european-companies', label: 'European Companies', group: 'Modern India' },
        { href: '/history/british-expansion', label: 'British Expansion', group: 'Modern India' },
        { href: '/history/governor-generals', label: 'Governor-Generals & Viceroys', group: 'Modern India' },
        { href: '/history/british-economic-policies', label: 'British Economic Policies', group: 'Modern India' },
        { href: '/history/revolt-1857', label: 'Revolt of 1857', group: 'Modern India' },
        { href: '/history/reform-movements', label: 'Reform Movements', group: 'Modern India' },
        { href: '/history/congress-national-movement', label: 'INC & National Movement', group: 'Modern India' },
        { href: '/history/gandhian-movements', label: 'Gandhian Movements', group: 'Modern India' },
        { href: '/history/revolutionary-movement', label: 'Revolutionary Movement', group: 'Modern India' },
        { href: '/history/constitutional-development', label: 'Constitutional Development', group: 'Modern India' },
        { href: '/history/tribal-peasant-movements', label: 'Tribal & Peasant Movements', group: 'Modern India' },
        { href: '/history/anglo-wars', label: 'Anglo-Mysore/Maratha/Sikh Wars', group: 'Modern India' },
        { href: '/history/land-revenue-systems', label: 'Land Revenue Systems', group: 'Modern India' },
        { href: '/history/press-education-british', label: 'Press & Education', group: 'Modern India' },
        { href: '/history/caste-reform-movements', label: 'Caste Reform Movements', group: 'Modern India' },
        { href: '/history/womens-movements', label: "Women's Movements", group: 'Modern India' },
        { href: '/history/independence-partition', label: 'Independence & Partition', group: 'Post-Independence' },
        { href: '/history/princely-states', label: 'Princely States', group: 'Post-Independence' },
        { href: '/history/nation-building', label: 'Nation Building', group: 'Post-Independence' },
        { href: '/history/wars-foreign-policy', label: 'Wars & Foreign Policy', group: 'Post-Independence' },
        { href: '/history/post-independence-consolidation', label: 'Post-Independence Consolidation', group: 'Post-Independence' },
        { href: '/history/non-aligned-movement', label: 'Non-Aligned Movement', group: 'Post-Independence' },
        { href: '/history/green-white-revolution', label: 'Green & White Revolution', group: 'Post-Independence' },
        { href: '/history/indian-architecture', label: 'Indian Architecture', group: 'Art & Culture' },
        { href: '/history/paintings-sculpture', label: 'Paintings & Sculpture', group: 'Art & Culture' },
        { href: '/history/music-dance', label: 'Music, Dance & Theatre', group: 'Art & Culture' },
        { href: '/history/indian-literature', label: 'Literature & Philosophy', group: 'Art & Culture' },
        { href: '/history/heritage-sites', label: 'UNESCO Heritage Sites', group: 'Art & Culture' },
        { href: '/history/indian-cinema-theatre', label: 'Indian Cinema & Theatre', group: 'Art & Culture' },
        { href: '/history/fairs-festivals', label: 'Fairs & Festivals', group: 'Art & Culture' },
        { href: '/history/timeline', label: 'Interactive Timeline', group: 'Visualizers' },
        { href: '/history/freedom-movement', label: 'Freedom Movement', group: 'Visualizers' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
