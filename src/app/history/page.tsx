import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Indian History — Notes, Revision & PYQs for UPSC, SSC | GovtExamsStudy',
  description:
    'Complete Indian History study material for UPSC, SSC CGL, IBPS PO, and government exams. 50 topics covering Ancient, Medieval, Modern India, Post-Independence, and Art & Culture with notes, revision tricks, and PYQ practice.',
  keywords: ['Indian History', 'ancient India UPSC', 'medieval India notes', 'modern India freedom movement', 'history for SSC', 'Bipin Chandra notes', 'NCERT history', 'Indian history study material'],
  openGraph: {
    title: 'Indian History — 50 Topics with Notes, Revision & PYQs',
    description: 'Complete Indian History study material for UPSC, SSC CGL, IBPS PO, and government exams.',
    type: 'website',
    siteName: 'GovtExamsStudy',
  },
}

interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
}

interface Section {
  heading: string
  subheading: string
  topics: Topic[]
}

const SECTIONS: Section[] = [
  {
    heading: 'Ancient India',
    subheading: 'Indus Valley to Gupta Empire — foundation of Indian civilization',
    topics: [
      {
        href: '/history/indus-valley',
        title: 'Indus Valley Civilization',
        description: 'Harappan sites, town planning, seals, script, decline.',
        hasTabs: true,
      },
      {
        href: '/history/vedic-period',
        title: 'Vedic Period',
        description: 'Early vs Later Vedic, society, polity, literature.',
        hasTabs: true,
      },
      {
        href: '/history/buddhism-jainism',
        title: 'Buddhism & Jainism',
        description: 'Founders, councils, teachings, sects, spread.',
        hasTabs: true,
      },
      {
        href: '/history/mahajanapadas',
        title: 'Mahajanapadas & Rise of Magadha',
        description: '16 kingdoms, Haryanka to Nanda.',
        hasTabs: true,
      },
      {
        href: '/history/maurya-empire',
        title: 'Maurya Empire & Ashoka',
        description: 'Arthashastra, edicts, Dhamma, decline.',
        hasTabs: true,
      },
      {
        href: '/history/post-maurya',
        title: 'Post-Maurya Period',
        description: 'Sungas, Kanvas, Kushanas, Satavahanas.',
        hasTabs: true,
      },
      {
        href: '/history/sangam-age',
        title: 'Sangam Age',
        description: 'Tamil kingdoms, literature, trade.',
        hasTabs: true,
      },
      {
        href: '/history/gupta-empire',
        title: 'Gupta Empire & Golden Age',
        description: 'Science, literature, art.',
        hasTabs: true,
      },
      {
        href: '/history/south-indian-dynasties',
        title: 'South Indian Dynasties',
        description: 'Chalukyas, Pallavas, Cholas.',
        hasTabs: true,
      },
      {
        href: '/history/prehistoric-india',
        title: 'Prehistoric India',
        description: 'Palaeolithic, Mesolithic, Neolithic, Chalcolithic.',
        hasTabs: true,
      },
      {
        href: '/history/philosophical-schools',
        title: 'Indian Philosophical Schools',
        description: 'Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta.',
        hasTabs: true,
      },
      {
        href: '/history/chola-dynasty',
        title: 'Chola Dynasty',
        description: 'Rajaraja I, Rajendra I, naval power, temples.',
        hasTabs: true,
      },
      {
        href: '/history/pallava-dynasty',
        title: 'Pallava Dynasty',
        description: 'Mahabalipuram, Kanchipuram, rock-cut architecture.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Medieval India',
    subheading: 'Delhi Sultanate to Maratha Empire — conquests, culture, and administration',
    topics: [
      {
        href: '/history/delhi-sultanate',
        title: 'Delhi Sultanate',
        description: '5 dynasties, administration.',
        hasTabs: true,
      },
      {
        href: '/history/vijayanagara-bahmani',
        title: 'Vijayanagara & Bahmani',
        description: 'Krishnadevaraya, Hampi.',
        hasTabs: true,
      },
      {
        href: '/history/bhakti-sufi',
        title: 'Bhakti & Sufi Movements',
        description: 'Saints, philosophy, impact.',
        hasTabs: true,
      },
      {
        href: '/history/mughal-empire',
        title: 'Mughal Empire',
        description: 'Babur to Aurangzeb, Mansabdari.',
        hasTabs: true,
      },
      {
        href: '/history/maratha-empire',
        title: 'Maratha Empire',
        description: 'Shivaji, Peshwas, Panipat III.',
        hasTabs: true,
      },
      {
        href: '/history/medieval-kingdoms',
        title: 'Other Medieval Kingdoms',
        description: 'Rajputs, Sikhs, Ahom.',
        hasTabs: true,
      },
      {
        href: '/history/rajput-kingdoms',
        title: 'Rajput Kingdoms',
        description: 'Pratiharas, Chahamanas, Rajput polity.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Modern India',
    subheading: 'European arrival to Independence — colonialism, reform, and freedom struggle',
    topics: [
      {
        href: '/history/european-companies',
        title: 'European Trading Companies',
        description: 'Portuguese, Dutch, French, EIC.',
        hasTabs: true,
      },
      {
        href: '/history/british-expansion',
        title: 'British Conquest & Expansion',
        description: 'Plassey, Buxar, Doctrine of Lapse.',
        hasTabs: true,
      },
      {
        href: '/history/governor-generals',
        title: 'Governor-Generals & Viceroys',
        description: 'Key policies, reforms.',
        hasTabs: true,
      },
      {
        href: '/history/british-economic-policies',
        title: 'British Economic Policies',
        description: 'Land revenue, Drain of Wealth.',
        hasTabs: true,
      },
      {
        href: '/history/revolt-1857',
        title: 'Revolt of 1857',
        description: 'Causes, centres, leaders.',
        hasTabs: true,
      },
      {
        href: '/history/reform-movements',
        title: 'Social & Religious Reform Movements',
        description: 'Brahmo Samaj, Arya Samaj.',
        hasTabs: true,
      },
      {
        href: '/history/congress-national-movement',
        title: 'INC & National Movement',
        description: 'Moderates, Extremists, Swadeshi.',
        hasTabs: true,
      },
      {
        href: '/history/gandhian-movements',
        title: 'Gandhian Era & Mass Movements',
        description: 'NCM, CDM, QIM.',
        hasTabs: true,
      },
      {
        href: '/history/revolutionary-movement',
        title: 'Revolutionary Movement',
        description: 'Ghadar, HSRA, INA, Bose.',
        hasTabs: true,
      },
      {
        href: '/history/constitutional-development',
        title: 'Constitutional Development',
        description: 'Acts 1773-1935.',
        hasTabs: true,
      },
      {
        href: '/history/tribal-peasant-movements',
        title: 'Tribal & Peasant Movements',
        description: 'Santhal, Munda, Indigo.',
        hasTabs: true,
      },
      {
        href: '/history/anglo-wars',
        title: 'Anglo-Mysore, Anglo-Maratha & Anglo-Sikh Wars',
        description: 'Hyder Ali, Tipu Sultan, treaties.',
        hasTabs: true,
      },
      {
        href: '/history/land-revenue-systems',
        title: 'Land Revenue Systems',
        description: 'Permanent Settlement, Ryotwari, Mahalwari.',
        hasTabs: true,
      },
      {
        href: '/history/press-education-british',
        title: 'Press & Education Under British Rule',
        description: 'Vernacular Press Act, Wood Despatch.',
        hasTabs: true,
      },
      {
        href: '/history/caste-reform-movements',
        title: 'Caste Reform & Anti-Caste Movements',
        description: 'Phule, Ambedkar, Periyar, SNDP.',
        hasTabs: true,
      },
      {
        href: '/history/womens-movements',
        title: "Women's Movements in Modern India",
        description: 'Sati abolition, widow remarriage, WIA.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Post-Independence',
    subheading: 'Partition to liberalisation — nation building and foreign policy',
    topics: [
      {
        href: '/history/independence-partition',
        title: 'Independence & Partition',
        description: 'Cabinet Mission, Mountbatten Plan.',
        hasTabs: true,
      },
      {
        href: '/history/princely-states',
        title: 'Integration of Princely States',
        description: 'Sardar Patel, Hyderabad.',
        hasTabs: true,
      },
      {
        href: '/history/nation-building',
        title: 'Nation Building & Economic Development',
        description: 'FYPs, LPG 1991.',
        hasTabs: true,
      },
      {
        href: '/history/wars-foreign-policy',
        title: 'Wars & Foreign Policy',
        description: '1962, 1965, 1971, NAM.',
        hasTabs: true,
      },
      {
        href: '/history/post-independence-consolidation',
        title: 'Post-Independence Consolidation',
        description: 'Constitution, FYPs, linguistic states.',
        hasTabs: true,
      },
      {
        href: '/history/non-aligned-movement',
        title: 'Non-Aligned Movement & Foreign Policy',
        description: 'Panchsheel, Belgrade, Bandung.',
        hasTabs: true,
      },
      {
        href: '/history/green-white-revolution',
        title: 'Green, White & Other Revolutions',
        description: 'Green, White, Blue, Yellow revolutions.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Art & Culture',
    subheading: 'Architecture, paintings, performing arts, and heritage',
    topics: [
      {
        href: '/history/indian-architecture',
        title: 'Indian Architecture',
        description: 'Nagara, Dravida, Indo-Islamic.',
        hasTabs: true,
      },
      {
        href: '/history/paintings-sculpture',
        title: 'Indian Paintings & Sculpture',
        description: 'Cave art, miniatures.',
        hasTabs: true,
      },
      {
        href: '/history/music-dance',
        title: 'Music, Dance & Theatre',
        description: 'Classical forms.',
        hasTabs: true,
      },
      {
        href: '/history/indian-literature',
        title: 'Indian Literature & Philosophy',
        description: 'Vedic, Sangam.',
        hasTabs: true,
      },
      {
        href: '/history/heritage-sites',
        title: 'UNESCO World Heritage Sites',
        description: 'Key sites.',
        hasTabs: true,
      },
      {
        href: '/history/indian-cinema-theatre',
        title: 'Indian Cinema & Theatre',
        description: 'Phalke, Satyajit Ray, Natyashastra.',
        hasTabs: true,
      },
      {
        href: '/history/fairs-festivals',
        title: 'Indian Fairs & Festivals',
        description: 'Kumbh Mela, harvest, tribal festivals.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Interactive Visualizers',
    subheading: 'Animated explorations of Indian history',
    topics: [
      {
        href: '/history/timeline',
        title: 'Interactive Timeline',
        description: 'Navigate a zoomable timeline from the Indus Valley civilization to modern India.',
        hasTabs: false,
      },
      {
        href: '/history/freedom-movement',
        title: 'Freedom Movement',
        description: 'Explore cause-effect chains of key events in the Indian freedom struggle.',
        hasTabs: false,
      },
    ],
  },
]

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold" style={{ color: '#f59e0b' }}>Indian History</h1>
      <p className="text-text-secondary">
        Explore Indian history from ancient civilizations to modern India with visual notes,
        revision tricks, and previous year questions for UPSC, SSC, and other government exams.
      </p>

      {SECTIONS.map((section) => (
        <section key={section.heading}>
          <div className="mb-3">
            <h2 className="text-base font-semibold text-text-primary">{section.heading}</h2>
            <p className="text-xs text-text-muted">{section.subheading}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="rounded-lg border border-border-primary bg-bg-elevated p-4 no-underline transition-shadow hover:shadow-md"
              >
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-text-primary">{topic.title}</h3>
                  {!topic.hasTabs && (
                    <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="mb-2 text-xs leading-relaxed text-text-secondary">{topic.description}</p>
                {topic.hasTabs && (
                  <p className="text-xs text-text-muted">Notes · Revision · PYQs</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
