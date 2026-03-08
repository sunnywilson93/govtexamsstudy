import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function EconomicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Indian Economy"
      subjectColor="#14b8a6"
      subjectSlug="economics"
      showHeading={false}
      links={[
        { href: '/economics/basic-concepts', label: 'Basic Economic Concepts', group: 'Basic Concepts' },
        { href: '/economics/national-income', label: 'National Income', group: 'Basic Concepts' },
        { href: '/economics/money-supply', label: 'Money & Money Supply', group: 'Basic Concepts' },
        { href: '/economics/inflation', label: 'Inflation & Prices', group: 'Basic Concepts' },
        { href: '/economics/poverty-unemployment', label: 'Poverty & Unemployment', group: 'Basic Concepts' },
        { href: '/economics/demand-supply', label: 'Demand, Supply & Elasticity', group: 'Basic Concepts' },
        { href: '/economics/market-structures', label: 'Market Structures', group: 'Basic Concepts' },
        { href: '/economics/rbi', label: 'Reserve Bank of India', group: 'Banking & Monetary' },
        { href: '/economics/banking-system', label: 'Banking System', group: 'Banking & Monetary' },
        { href: '/economics/financial-markets', label: 'Financial Markets', group: 'Banking & Monetary' },
        { href: '/economics/banking-npas', label: 'Banking NPAs', group: 'Banking & Monetary' },
        { href: '/economics/insurance', label: 'Insurance & Pension', group: 'Banking & Monetary' },
        { href: '/economics/sebi', label: 'SEBI & Capital Markets', group: 'Banking & Monetary' },
        { href: '/economics/nabard-sidbi', label: 'NABARD & SIDBI', group: 'Banking & Monetary' },
        { href: '/economics/microfinance-shgs', label: 'Microfinance & SHGs', group: 'Banking & Monetary' },
        { href: '/economics/union-budget', label: 'Union Budget', group: 'Public Finance' },
        { href: '/economics/fiscal-policy', label: 'Fiscal Policy', group: 'Public Finance' },
        { href: '/economics/tax-system', label: 'Tax System', group: 'Public Finance' },
        { href: '/economics/public-debt', label: 'Public Debt', group: 'Public Finance' },
        { href: '/economics/public-expenditure', label: 'Public Expenditure', group: 'Public Finance' },
        { href: '/economics/gst-detail', label: 'GST — Detailed Analysis', group: 'Public Finance' },
        { href: '/economics/direct-taxes', label: 'Direct Taxes & Reforms', group: 'Public Finance' },
        { href: '/economics/foreign-trade', label: 'Foreign Trade & BoP', group: 'External Sector' },
        { href: '/economics/exchange-rate', label: 'Exchange Rate & Forex', group: 'External Sector' },
        { href: '/economics/international-organizations', label: 'International Organizations', group: 'External Sector' },
        { href: '/economics/fdi-fii', label: 'FDI & FII', group: 'External Sector' },
        { href: '/economics/balance-of-payments', label: 'Balance of Payments', group: 'External Sector' },
        { href: '/economics/wto-india', label: 'WTO & India', group: 'External Sector' },
        { href: '/economics/regional-trade', label: 'Regional Trade & FTAs', group: 'External Sector' },
        { href: '/economics/external-debt', label: 'External Debt', group: 'External Sector' },
        { href: '/economics/planning', label: 'Economic Planning', group: 'Planning & Development' },
        { href: '/economics/economic-reforms', label: 'LPG Reforms (1991)', group: 'Planning & Development' },
        { href: '/economics/agriculture-economy', label: 'Agriculture & Food', group: 'Planning & Development' },
        { href: '/economics/industry-policy', label: 'Industrial Policy', group: 'Planning & Development' },
        { href: '/economics/infrastructure', label: 'Infrastructure & Energy', group: 'Planning & Development' },
        { href: '/economics/disinvestment', label: 'Disinvestment & Privatisation', group: 'Planning & Development' },
        { href: '/economics/ppp-model', label: 'PPP Model', group: 'Planning & Development' },
        { href: '/economics/sez-corridors', label: 'SEZs & Corridors', group: 'Planning & Development' },
        { href: '/economics/land-reforms', label: 'Land Reforms', group: 'Planning & Development' },
        { href: '/economics/msme-sector', label: 'MSME Sector', group: 'Planning & Development' },
        { href: '/economics/inclusive-growth', label: 'Inclusive Growth', group: 'Social & Contemporary' },
        { href: '/economics/government-schemes', label: 'Government Schemes', group: 'Social & Contemporary' },
        { href: '/economics/digital-economy', label: 'Digital Economy', group: 'Social & Contemporary' },
        { href: '/economics/sustainable-development', label: 'Sustainable Development', group: 'Social & Contemporary' },
        { href: '/economics/social-security', label: 'Social Security', group: 'Social & Contemporary' },
        { href: '/economics/demographic-dividend', label: 'Demographic Dividend', group: 'Social & Contemporary' },
        { href: '/economics/hdi-mpi', label: 'HDI & MPI', group: 'Social & Contemporary' },
        { href: '/economics/food-security', label: 'Food Security & PDS', group: 'Social & Contemporary' },
        { href: '/economics/labour-reforms', label: 'Labour Reforms', group: 'Social & Contemporary' },
        { href: '/economics/startup-innovation', label: 'Startup & Innovation', group: 'Social & Contemporary' },
        { href: '/economics/flows', label: 'Policy Flow Diagrams', group: 'Visualizers' },
        { href: '/economics/budget', label: 'Budget Visualizer', group: 'Visualizers' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
