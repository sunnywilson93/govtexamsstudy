import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Indian Economy — Interactive Visual Learning',
  description:
    'Master Indian economy for UPSC, SSC CGL, IBPS PO, and other government exams. Banking, fiscal policy, trade, planning, schemes with visual notes, revision tricks, and PYQ practice.',
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
    heading: 'Basic Concepts',
    subheading: 'Fundamental economic principles, income, prices, and employment',
    topics: [
      {
        href: '/economics/basic-concepts',
        title: 'Basic Economic Concepts',
        description: 'GDP, GNP, demand-supply, market types.',
        hasTabs: true,
      },
      {
        href: '/economics/national-income',
        title: 'National Income Accounting',
        description: 'GDP, NDP, NNP, measurement methods.',
        hasTabs: true,
      },
      {
        href: '/economics/money-supply',
        title: 'Money & Money Supply',
        description: 'M0-M3, money multiplier, velocity.',
        hasTabs: true,
      },
      {
        href: '/economics/inflation',
        title: 'Inflation & Price Indices',
        description: 'CPI, WPI, demand-pull, cost-push.',
        hasTabs: true,
      },
      {
        href: '/economics/poverty-unemployment',
        title: 'Poverty & Unemployment',
        description: 'Poverty lines, MGNREGA, PLFS.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Banking & Monetary',
    subheading: 'RBI, banking structure, financial markets, and insurance',
    topics: [
      {
        href: '/economics/rbi',
        title: 'Reserve Bank of India',
        description: 'Monetary policy, repo, CRR, SLR, MPC.',
        hasTabs: true,
      },
      {
        href: '/economics/banking-system',
        title: 'Indian Banking System',
        description: 'PSBs, SFBs, payments banks, RRBs.',
        hasTabs: true,
      },
      {
        href: '/economics/financial-markets',
        title: 'Financial Markets & SEBI',
        description: 'Stock exchanges, bonds, derivatives.',
        hasTabs: true,
      },
      {
        href: '/economics/banking-npas',
        title: 'Banking Reforms & NPAs',
        description: 'Bad loans, IBC, SARFAESI.',
        hasTabs: true,
      },
      {
        href: '/economics/insurance',
        title: 'Insurance & Pension',
        description: 'IRDAI, LIC, PM schemes, NPS.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Public Finance',
    subheading: 'Budget, taxation, fiscal policy, and government spending',
    topics: [
      {
        href: '/economics/union-budget',
        title: 'Union Budget',
        description: 'Receipts, expenditure, documents.',
        hasTabs: true,
      },
      {
        href: '/economics/fiscal-policy',
        title: 'Fiscal Policy & Deficits',
        description: 'Fiscal deficit, FRBM, revenue deficit.',
        hasTabs: true,
      },
      {
        href: '/economics/tax-system',
        title: 'Indian Tax System',
        description: 'GST, income tax, direct vs indirect.',
        hasTabs: true,
      },
      {
        href: '/economics/public-debt',
        title: 'Public Debt',
        description: 'Internal, external, debt-GDP ratio.',
        hasTabs: true,
      },
      {
        href: '/economics/public-expenditure',
        title: 'Public Expenditure',
        description: 'Subsidies, CSS, capital spending.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'External Sector',
    subheading: 'International trade, forex, FDI, and global institutions',
    topics: [
      {
        href: '/economics/foreign-trade',
        title: 'Foreign Trade & BoP',
        description: 'Exports, imports, trade deficit.',
        hasTabs: true,
      },
      {
        href: '/economics/exchange-rate',
        title: 'Exchange Rate & Forex',
        description: 'Fixed vs floating, NEER, REER.',
        hasTabs: true,
      },
      {
        href: '/economics/international-organizations',
        title: 'International Economic Organizations',
        description: 'IMF, World Bank, WTO, BRICS.',
        hasTabs: true,
      },
      {
        href: '/economics/fdi-fii',
        title: 'FDI & FII',
        description: 'Automatic route, sectoral caps.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Planning & Development',
    subheading: 'Economic planning, reforms, agriculture, industry, and infrastructure',
    topics: [
      {
        href: '/economics/planning',
        title: 'Economic Planning in India',
        description: 'FYPs, Planning Commission, NITI Aayog.',
        hasTabs: true,
      },
      {
        href: '/economics/economic-reforms',
        title: 'LPG Reforms (1991)',
        description: 'Liberalisation, privatisation, globalisation.',
        hasTabs: true,
      },
      {
        href: '/economics/agriculture-economy',
        title: 'Agriculture & Food Security',
        description: 'MSP, PDS, Green Revolution.',
        hasTabs: true,
      },
      {
        href: '/economics/industry-policy',
        title: 'Industrial Policy & MSMEs',
        description: 'Make in India, PLI, MSME.',
        hasTabs: true,
      },
      {
        href: '/economics/infrastructure',
        title: 'Infrastructure & Energy',
        description: 'NIP, Bharatmala, power sector.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Social & Contemporary',
    subheading: 'Inclusive growth, government schemes, digital economy, and demographics',
    topics: [
      {
        href: '/economics/inclusive-growth',
        title: 'Inclusive Growth & Financial Inclusion',
        description: 'Jan Dhan, SHGs, PSL.',
        hasTabs: true,
      },
      {
        href: '/economics/government-schemes',
        title: 'Government Schemes',
        description: 'PM-KISAN, Ayushman Bharat, MUDRA.',
        hasTabs: true,
      },
      {
        href: '/economics/digital-economy',
        title: 'Digital Economy & FinTech',
        description: 'UPI, Digital Rupee, India Stack.',
        hasTabs: true,
      },
      {
        href: '/economics/sustainable-development',
        title: 'Sustainable Development & Climate',
        description: 'SDGs, Paris Agreement, net-zero.',
        hasTabs: true,
      },
      {
        href: '/economics/social-security',
        title: 'Social Security & Labour',
        description: 'Labour codes, EPFO, ESIC, NPS.',
        hasTabs: true,
      },
      {
        href: '/economics/demographic-dividend',
        title: 'Demographic Dividend & Human Capital',
        description: 'Population, skills, education.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Interactive Visualizers',
    subheading: 'Animated explorations of economic concepts',
    topics: [
      {
        href: '/economics/flows',
        title: 'Policy Flow Diagrams',
        description: 'Visualize monetary and fiscal policy flows with interactive step-by-step diagrams.',
        hasTabs: false,
      },
      {
        href: '/economics/budget',
        title: 'Budget Visualizer',
        description: 'Explore Union Budget breakdowns with interactive treemaps and comparisons.',
        hasTabs: false,
      },
    ],
  },
]

export default function EconomicsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold" style={{ color: '#14b8a6' }}>Indian Economy</h1>
      <p className="text-text-secondary">
        Explore Indian economy from basic concepts to contemporary issues with visual notes,
        revision tricks, and previous year questions for UPSC, SSC, IBPS, and other government exams.
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
