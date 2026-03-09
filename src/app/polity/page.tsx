import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Indian Polity — Notes, Revision & PYQs for UPSC, SSC | GovtExamsStudy',
  description:
    'Complete Indian Polity and Constitution study material for UPSC, SSC CGL, IBPS PO, and government exams. 50 topics covering constitutional foundations, rights, executive, judiciary, local governance with notes, revision tricks, and PYQ practice.',
  keywords: ['Indian Polity', 'Indian Constitution', 'polity notes UPSC', 'polity for SSC CGL', 'constitutional articles', 'fundamental rights notes', 'Indian polity study material', 'Laxmikanth polity notes'],
  openGraph: {
    title: 'Indian Polity — 50 Topics with Notes, Revision & PYQs',
    description: 'Complete Indian Polity and Constitution study material for UPSC, SSC CGL, IBPS PO, and government exams.',
    type: 'website',
    siteName: 'GovtExamsStudy',
  },
  alternates: {
    canonical: 'https://govtexamsstudy.org/polity',
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
    heading: 'Constitutional Foundations',
    subheading: 'Historical evolution, Constituent Assembly, Preamble, and basic framework',
    topics: [
      {
        href: '/polity/historical-background',
        title: 'Historical Background',
        description: 'British Acts from 1773 to 1947, evolution of constitutional governance.',
        hasTabs: true,
      },
      {
        href: '/polity/constituent-assembly',
        title: 'Constituent Assembly',
        description: 'Formation, committees, Drafting Committee, key dates.',
        hasTabs: true,
      },
      {
        href: '/polity/preamble',
        title: 'Preamble',
        description: 'Key terms, 42nd Amendment, landmark cases.',
        hasTabs: true,
      },
      {
        href: '/polity/union-territory',
        title: 'Union & Its Territory',
        description: 'States, UTs, reorganisation, Art 1-4.',
        hasTabs: true,
      },
      {
        href: '/polity/citizenship',
        title: 'Citizenship',
        description: 'Acquisition, termination, Art 5-11, CAA.',
        hasTabs: true,
      },
      {
        href: '/polity/official-language',
        title: 'Official Language',
        description: 'Art 343-351, Hindi-English, 8th Schedule, three-language formula.',
        hasTabs: true,
      },
      {
        href: '/polity/comparison-constitutions',
        title: 'Comparison of Constitutions',
        description: 'Sources borrowed from UK, USA, Ireland, Australia, Canada, and more.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Rights & Duties',
    subheading: 'Fundamental Rights, DPSPs, and Fundamental Duties — the trinity of the Constitution',
    topics: [
      {
        href: '/polity/fundamental-rights',
        title: 'Fundamental Rights',
        description: 'Art 12-35, six categories, key cases.',
        hasTabs: true,
      },
      {
        href: '/polity/dpsp',
        title: 'Directive Principles (DPSP)',
        description: 'Art 36-51, classification, DPSP vs FR.',
        hasTabs: true,
      },
      {
        href: '/polity/fundamental-duties',
        title: 'Fundamental Duties',
        description: 'Art 51A, 11 duties, Swaran Singh Committee.',
        hasTabs: true,
      },
      {
        href: '/polity/rights-issues',
        title: 'Rights & Contemporary Issues',
        description: 'Privacy, RTE, NFSA, EWS reservation, SC landmark verdicts on rights.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Union Executive',
    subheading: 'President, Prime Minister, and Parliament — the central machinery of governance',
    topics: [
      {
        href: '/polity/president-vp',
        title: 'President & Vice-President',
        description: 'Election, powers, impeachment, veto.',
        hasTabs: true,
      },
      {
        href: '/polity/prime-minister',
        title: 'Prime Minister & Council of Ministers',
        description: 'Appointment, collective responsibility.',
        hasTabs: true,
      },
      {
        href: '/polity/parliament',
        title: 'Parliament of India',
        description: 'Lok Sabha, Rajya Sabha, sessions, bills.',
        hasTabs: true,
      },
      {
        href: '/polity/attorney-general',
        title: 'Attorney General of India',
        description: 'Art 76, appointment, duties, rights, AG vs Solicitor General.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'State Government',
    subheading: 'Governor, Chief Minister, and State Legislature — governance at the state level',
    topics: [
      {
        href: '/polity/governor',
        title: 'Governor',
        description: 'Appointment, powers, discretionary role.',
        hasTabs: true,
      },
      {
        href: '/polity/chief-minister',
        title: 'Chief Minister & State CoM',
        description: 'Appointment, powers, CM vs PM.',
        hasTabs: true,
      },
      {
        href: '/polity/state-legislature',
        title: 'State Legislature',
        description: 'Vidhan Sabha, Vidhan Parishad, legislation.',
        hasTabs: true,
      },
      {
        href: '/polity/advocate-general',
        title: 'Advocate General',
        description: 'Art 165, appointment, role, AG vs Advocate General comparison.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Parliament',
    subheading: 'Committees, privileges, and the inner workings of the legislature',
    topics: [
      {
        href: '/polity/parliamentary-committees',
        title: 'Parliamentary Committees',
        description: 'Standing, select, joint committees, PAC, estimates, DRSCs.',
        hasTabs: true,
      },
      {
        href: '/polity/parliamentary-privileges',
        title: 'Parliamentary Privileges',
        description: 'Art 105 & 194, freedom of speech, breach of privilege, codification.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Judiciary',
    subheading: 'Supreme Court, High Courts, and Tribunals — the independent judicial pillar',
    topics: [
      {
        href: '/polity/supreme-court',
        title: 'Supreme Court',
        description: 'Jurisdiction, composition, judicial review.',
        hasTabs: true,
      },
      {
        href: '/polity/high-courts',
        title: 'High Courts',
        description: 'Writ jurisdiction, SC vs HC comparison.',
        hasTabs: true,
      },
      {
        href: '/polity/tribunals',
        title: 'Tribunals',
        description: 'CAT, SAT, NCLT, Art 323A & 323B.',
        hasTabs: true,
      },
      {
        href: '/polity/judicial-review',
        title: 'Judicial Review',
        description: 'Art 13, 32, 226, constitutional validity, US vs India comparison.',
        hasTabs: true,
      },
      {
        href: '/polity/basic-structure',
        title: 'Basic Structure Doctrine',
        description: 'Kesavananda Bharati, key features, evolution of the doctrine.',
        hasTabs: true,
      },
      {
        href: '/polity/subordinate-courts',
        title: 'Subordinate Courts',
        description: 'District courts, Lok Adalats, Art 233-237, judicial hierarchy.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Federal Structure',
    subheading: 'Centre-State relations, emergency powers, and the amendment process',
    topics: [
      {
        href: '/polity/centre-state-relations',
        title: 'Centre-State Relations',
        description: 'Three lists, legislative-admin-financial relations.',
        hasTabs: true,
      },
      {
        href: '/polity/inter-state-relations',
        title: 'Inter-State Relations',
        description: 'ISC, water disputes, zonal councils.',
        hasTabs: true,
      },
      {
        href: '/polity/emergency-provisions',
        title: 'Emergency Provisions',
        description: 'Art 352, 356, 360, three types of emergency.',
        hasTabs: true,
      },
      {
        href: '/polity/amendment-procedure',
        title: 'Amendment Procedure',
        description: 'Art 368, three types, basic structure.',
        hasTabs: true,
      },
      {
        href: '/polity/special-provisions-states',
        title: 'Special Provisions for States',
        description: 'Art 370 (abrogated), Art 371-series, J&K, NE states, special status.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Local Government',
    subheading: 'Panchayati Raj and Municipalities — grassroots democracy',
    topics: [
      {
        href: '/polity/panchayati-raj',
        title: 'Panchayati Raj',
        description: '73rd Amendment, three-tier system, Gram Sabha.',
        hasTabs: true,
      },
      {
        href: '/polity/municipalities',
        title: 'Municipalities',
        description: '74th Amendment, types, 12th Schedule.',
        hasTabs: true,
      },
      {
        href: '/polity/cooperative-societies',
        title: 'Cooperative Societies',
        description: '97th Amendment, Art 243ZH-ZT, Part IXB, NAFED, NCDC.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Bodies & Special Provisions',
    subheading: 'Constitutional and statutory bodies, anti-defection law, and tribal area provisions',
    topics: [
      {
        href: '/polity/election-commission',
        title: 'Election Commission',
        description: 'Art 324, composition, powers, EVM.',
        hasTabs: true,
      },
      {
        href: '/polity/cag',
        title: 'Comptroller & Auditor General',
        description: 'Art 148-151, duties, audit reports.',
        hasTabs: true,
      },
      {
        href: '/polity/upsc-spsc',
        title: 'UPSC & State PSCs',
        description: 'Art 315-323, composition, functions.',
        hasTabs: true,
      },
      {
        href: '/polity/finance-commission',
        title: 'Finance Commission',
        description: 'Art 280, devolution, recommendations.',
        hasTabs: true,
      },
      {
        href: '/polity/statutory-bodies',
        title: 'Statutory & Quasi-Judicial Bodies',
        description: 'NHRC, NCW, CIC, Lokpal.',
        hasTabs: true,
      },
      {
        href: '/polity/anti-defection',
        title: 'Anti-Defection Law',
        description: '10th Schedule, exceptions, cases.',
        hasTabs: true,
      },
      {
        href: '/polity/scheduled-tribal-areas',
        title: 'Scheduled & Tribal Areas',
        description: 'Fifth & Sixth Schedules, ADCs, PESA.',
        hasTabs: true,
      },
      {
        href: '/polity/niti-aayog',
        title: 'NITI Aayog',
        description: 'Replacement of Planning Commission, composition, functions, indices.',
        hasTabs: true,
      },
      {
        href: '/polity/national-commissions',
        title: 'National Commissions',
        description: 'NCSC, NCST, NCBC, NCM, NCW — constitutional and statutory.',
        hasTabs: true,
      },
      {
        href: '/polity/lokpal-lokayuktas',
        title: 'Lokpal & Lokayuktas',
        description: 'Anti-corruption ombudsmen, 2013 Act, state Lokayuktas.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Political Process',
    subheading: 'Political parties, pressure groups, and electoral representation',
    topics: [
      {
        href: '/polity/political-parties',
        title: 'Political Parties',
        description: 'National & state parties, recognition criteria, anti-defection, ECI role.',
        hasTabs: true,
      },
      {
        href: '/polity/pressure-groups',
        title: 'Pressure Groups',
        description: 'Types, methods, business groups, trade unions, role in Indian democracy.',
        hasTabs: true,
      },
      {
        href: '/polity/representation-people',
        title: 'Representation of People',
        description: 'RPA 1950 & 1951, election offences, NOTA, electoral reforms.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Governance & Transparency',
    subheading: 'Right to Information, e-governance, and administrative reforms',
    topics: [
      {
        href: '/polity/rti-act',
        title: 'RTI Act, 2005',
        description: 'Sec 2-31, CIC, SIC, exemptions, 2019 amendment.',
        hasTabs: true,
      },
      {
        href: '/polity/governance-reforms',
        title: 'Governance Reforms',
        description: 'ARC reports, Digital India, DBT, Mission Karmayogi, lateral entry.',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Interactive Visualizers',
    subheading: 'Animated explorations of the Indian Constitution',
    topics: [
      {
        href: '/polity/articles',
        title: 'Article Explorer',
        description: 'Browse all constitutional articles with linked amendments and landmark cases.',
        hasTabs: false,
      },
      {
        href: '/polity/amendments',
        title: 'Amendment Timeline',
        description: 'Explore constitutional amendments on an interactive timeline with impact analysis.',
        hasTabs: false,
      },
      {
        href: '/polity/landmark-cases',
        title: 'Landmark Cases',
        description: 'Study Supreme Court landmark cases and their connections to constitutional articles.',
        hasTabs: false,
      },
    ],
  },
]

export default function PolityPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold" style={{ color: '#ef4444' }}>Indian Polity</h1>
      <p className="text-text-secondary">
        Explore the Indian Constitution and Polity with visual notes, revision tricks, and previous
        year questions for UPSC, SSC, and other government exams.
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
