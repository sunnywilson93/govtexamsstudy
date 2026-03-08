import type { SubjectConcept } from '@/types/subject-notes'

export const industryPolicyConcept: SubjectConcept = {
  topic: 'industry-policy',
  title: 'Industrial Policy & MSME',
  description:
    'Industrial policy resolutions, MSME sector, Make in India, PLI scheme, competition policy, and manufacturing sector reforms.',
  category: 'Planning & Development',
  keyDates: [
    { year: '1948', event: 'Industrial Policy Resolution 1948 — mixed economy, state control of key industries' },
    { year: '1956', event: 'Industrial Policy Resolution 1956 — Mahalanobis model, 3 categories of industries' },
    { year: '1991', event: 'New Industrial Policy — de-licensing, de-reservation, disinvestment, FDI liberalisation' },
    { year: '2006', event: 'MSME Development Act — defined Micro, Small, and Medium Enterprises' },
    { year: '2014', event: 'Make in India initiative launched (September 25) — 25 focus sectors for manufacturing' },
    { year: '2020', event: 'PLI (Production Linked Incentive) scheme launched across 14 sectors with Rs 1.97 lakh crore outlay' },
    { year: '2020', event: 'MSME definition revised — based on investment AND turnover (Aatmanirbhar Bharat package)' },
  ],
  notes: [
    {
      section: 'Industrial Policy Resolutions',
      content:
        'IPR 1948: Mixed economy framework. Industries divided into 4 categories — (1) Exclusive state monopoly (arms, atomic energy, railways), (2) State-initiative but private participation (coal, iron & steel, aircraft, telecom, shipbuilding, minerals), (3) Government regulation, (4) Remaining — open to private sector. IPR 1956 (most comprehensive): Based on Mahalanobis model and socialist pattern. Schedule A (17 industries — exclusive state), Schedule B (12 industries — state + private), Schedule C (remaining — private sector). This policy dominated until 1991. New Industrial Policy 1991: Abolished industrial licensing (retained only for 6 industries, now 2), reduced reserved industries for public sector from 17 to 8 (now 3: atomic energy, defence, railways — partially opened), initiated disinvestment, liberalised FDI.',
    },
    {
      section: 'MSME Sector',
      content:
        'MSMEs are the backbone of the Indian economy — contribute ~30% of GDP, ~45% of manufacturing output, ~48% of exports, employ ~11 crore people. Revised Definition (2020): Based on Investment + Turnover. Micro: Investment up to Rs 1 crore, Turnover up to Rs 5 crore. Small: Investment up to Rs 10 crore, Turnover up to Rs 50 crore. Medium: Investment up to Rs 50 crore, Turnover up to Rs 250 crore. Earlier classification was only investment-based and had separate limits for manufacturing and services — the distinction was removed. Udyam Registration: Online self-declaration platform for MSME registration (Aadhaar-linked). Benefits: Priority sector lending, lower interest rates, government procurement preference (25% of procurement from MSMEs, 3% from SC/ST and women-owned MSMEs), credit guarantee (CGTMSE), delayed payment monitoring (SAMADHAAN portal).',
    },
    {
      section: 'Make in India & PLI Scheme',
      content:
        'Make in India (2014): Flagship initiative to make India a global manufacturing hub. 25 focus sectors including automobiles, chemicals, IT, pharmaceuticals, textiles, tourism, food processing. Four pillars: New Processes (ease of doing business), New Infrastructure (industrial corridors, smart cities), New Sectors (defence, aviation opened to FDI), New Mindset (government as facilitator). PLI Scheme (2020): Performance-based incentives for manufacturing — 4-6% of incremental sales for 5 years. 14 sectors: Mobile phones & electronics, pharma, telecom, food products, auto & auto components, solar PV modules, advanced chemistry cells (batteries), textiles, speciality steel, white goods (ACs, LEDs), drones, semiconductor. Total outlay: Rs 1.97 lakh crore. Success: Mobile phone manufacturing scaled up (India is now 2nd largest manufacturer globally). Semiconductor fabs being set up in Gujarat (Micron) and other states.',
    },
    {
      section: 'Competition Policy',
      content:
        'Competition Act 2002: Replaced MRTP Act 1969. Regulates anti-competitive agreements, abuse of dominant position, and mergers/acquisitions. Competition Commission of India (CCI): Statutory body, quasi-judicial. HQ: New Delhi. Functions: Prevent anti-competitive practices, promote competition, protect consumer interests. Anti-competitive agreements: Cartels (horizontal — same level competitors fixing prices), vertical agreements (resale price maintenance, tie-in arrangements). Abuse of dominant position: Predatory pricing, discriminatory conditions, entry barriers. Merger regulation: Combinations above threshold (assets Rs 2,000 crore or turnover Rs 6,000 crore) require CCI approval. Digital competition: CCI has investigated Google, Amazon, Flipkart for anti-competitive practices. Digital Competition Bill proposed to regulate Big Tech — ex-ante regulation similar to EU\'s Digital Markets Act.',
    },
    {
      section: 'Industrial Corridors & Infrastructure',
      content:
        'Delhi-Mumbai Industrial Corridor (DMIC): Flagship project — 1,504 km corridor along the Dedicated Freight Corridor. 24 investment nodes, 8 smart cities planned. Japanese collaboration (JICA funding). Other corridors: Chennai-Bengaluru (CBIC), Bengaluru-Mumbai (BMIC), Amritsar-Kolkata (AKIC), East Coast (ECEC), Vizag-Chennai. National Industrial Corridor Development Programme: 11 industrial corridors, 32 new projects. Investment Clearance Cell: Single-window for central approvals. National Infrastructure Pipeline (NIP): Rs 111 lakh crore investment (2020-25) across roads, railways, urban, energy, digital, social sectors. PM Gati Shakti: GIS-based master plan platform for coordinated infrastructure planning across 16 ministries. Sagarmala: Port-led development — modernisation, new ports, coastal economic zones. Bharatmala: National highway development — 83,677 km of roads.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Industrial policy is a core UPSC topic — questions on IPR 1956, 1991 reforms, MSME definitions, and PLI scheme are common. Banking exams test MSME classification, priority sector lending, and CGTMSE. SSC exams ask about Make in India, industrial corridors, and CCI. PLI scheme sector details and MSME turnover limits are frequently tested.',
}
