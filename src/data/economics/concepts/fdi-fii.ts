import type { SubjectConcept } from '@/types/subject-notes'

export const fdiFiiConcept: SubjectConcept = {
  topic: 'fdi-fii',
  title: 'FDI, FPI & External Commercial Borrowings',
  description:
    'Foreign Direct Investment, Foreign Portfolio Investment, ECBs, FDI routes, sector-wise limits, and India\'s investment climate.',
  category: 'External Sector',
  keyDates: [
    { year: '1991', event: 'FDI liberalised under LPG reforms — automatic approval route introduced' },
    { year: '2000', event: 'FIPB (Foreign Investment Promotion Board) constituted to approve FDI proposals' },
    { year: '2017', event: 'FIPB abolished — FDI approvals shifted to respective ministries/departments' },
    { year: '2020', event: 'FDI rules amended to require government approval for investments from neighbouring countries (China clause)' },
    { year: '2021', event: 'India received record FDI inflows of $84.8 billion (2021-22)' },
    { year: '2005', event: 'FDI in retail — 51% in single-brand, 100% in cash-and-carry (wholesale)' },
    { year: '2012', event: 'FDI in multi-brand retail allowed up to 51% (controversial, few takers)' },
  ],
  notes: [
    {
      section: 'FDI vs FPI (FII)',
      content:
        'FDI (Foreign Direct Investment): Long-term investment in productive assets — factory, subsidiary, joint venture. Investor typically has management control (10%+ equity stake is the standard threshold). Stable, not easily reversible. Brings technology, management expertise, and employment. FPI/FII (Foreign Portfolio Investment): Investment in financial assets — stocks, bonds, mutual funds. Short-term, volatile, easily reversible ("hot money"). No management control. FPI is regulated by SEBI (FPI regulations 2019). Reclassification: FII/QFI categories merged into a single FPI category in 2014. Key difference: FDI is greenfield (new project) or brownfield (acquisition); FPI is purely financial. Both contribute to capital account of BoP. India prefers FDI over FPI due to stability and development benefits.',
    },
    {
      section: 'FDI Routes & Approval',
      content:
        'Automatic Route: No prior government approval needed. Most sectors now fall under automatic route. Investor only needs to notify RBI within 30 days. Government Route: Prior approval required from the concerned ministry/department. Post-FIPB abolition, proposals are processed through the Foreign Investment Facilitation Portal (FIFP). Sectors requiring government route: Defence (above 74%), media/broadcasting, print media, multi-brand retail, mining, food product retail, telecom (above 49% for certain activities). Prohibited Sectors: Lottery, gambling, chit funds, Nidhi companies, real estate business (not construction development), manufacturing of cigars/tobacco, atomic energy. Press Note 3 (2020): FDI from countries sharing a land border with India (China, Pakistan, Bangladesh, Nepal, Myanmar, Bhutan, Afghanistan) requires government approval — targeted at preventing opportunistic acquisitions.',
    },
    {
      section: 'Sector-wise FDI Limits',
      content:
        '100% Automatic: Construction development, industrial parks, e-commerce marketplace, food processing, IT/BPM, single-brand retail (with conditions), airports (greenfield), coal mining, contract manufacturing. 100% (Automatic + Government): Defence (up to 74% automatic, above 74% government for modern technology), telecom (up to 100% — 49% automatic, rest government), print media. 74% Automatic: Private sector banking. 49% Automatic: Insurance (raised to 74% in 2021), stock exchanges, pension funds. 26%: Digital media/news. Composite Cap: The total foreign investment from all sources (FDI + FPI + NRI) cannot exceed the sectoral cap. FDI in India by source countries (2023-24): Singapore (largest), Mauritius, USA, Netherlands, Japan. FDI by sector: Services, computer software, telecom, trading, construction.',
    },
    {
      section: 'External Commercial Borrowings (ECBs)',
      content:
        'ECBs are commercial loans raised by eligible Indian entities from recognised non-resident lenders. Governed by RBI under FEMA. Two frameworks: (1) Track I — Medium-term (3-5 years), for infrastructure, manufacturing. (2) Track II — Long-term (minimum 5 years). Eligible borrowers: Corporates, NBFCs, port trusts, SEZ units. End-use restrictions: Cannot be used for real estate, capital market, on-lending (with exceptions). Minimum Average Maturity Period (MAMP): 3 years for most ECBs; 1 year for manufacturing sector up to $50 million. All-in-cost ceiling: Benchmark rate + spread (capped by RBI to prevent excessive cost). ECBs carry exchange rate risk — if rupee depreciates, repayment cost in rupees increases. Masala Bonds are rupee-denominated bonds issued overseas — shift exchange rate risk to the investor.',
    },
    {
      section: 'Investment Climate & Ease of Doing Business',
      content:
        'India\'s Ease of Doing Business (EoDB) rank improved from 142 (2014) to 63 (2020) in the World Bank rankings before the exercise was discontinued. Government initiatives to improve FDI climate: Make in India (2014) — promote manufacturing. National Single Window System — unified approval portal. Production Linked Incentive (PLI) scheme — incentivises manufacturing in 14 sectors (electronics, pharma, auto, textiles, etc.) with Rs 1.97 lakh crore outlay. Start-Up India: Tax holidays, self-certification, Fund of Funds. Special Economic Zones: Tax incentives, simplified customs. PM Gati Shakti: Infrastructure connectivity. Bilateral Investment Treaties (BITs): India adopted a new Model BIT in 2016 — more balanced than earlier treaties. India terminated most old BITs and is renegotiating with key partners.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'FDI is one of the most tested economics topics. UPSC asks about FDI routes, sector-wise limits, and Press Note 3. Banking exams test FDI vs FPI differences, top source countries, and ECB norms. SSC exams ask factual questions on FDI limits in specific sectors and India\'s EoDB ranking. PLI scheme is a frequent current affairs question.',
}
