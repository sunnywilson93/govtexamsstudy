import type { SubjectConcept } from '@/types/subject-notes'

export const publicExpenditureConcept: SubjectConcept = {
  topic: 'public-expenditure',
  title: 'Public Expenditure & Subsidies',
  description:
    'Government expenditure patterns, subsidies, disinvestment, public sector enterprises, and expenditure reforms in India.',
  category: 'Public Finance',
  keyDates: [
    { year: '1991', event: 'Disinvestment process began — government started selling shares of PSUs' },
    { year: '2005', event: 'National Food Security Act discussions began; NREGA enacted (later renamed MGNREGA)' },
    { year: '2013', event: 'National Food Security Act passed — providing subsidised food grains to 67% of population' },
    { year: '2014', event: 'DBT (Direct Benefit Transfer) expanded under JAM Trinity — reduced leakage in subsidy delivery' },
    { year: '2020', event: 'Aatmanirbhar Bharat stimulus package (~Rs 20 lakh crore) announced during COVID-19' },
    { year: '2021', event: 'DIPAM (Department of Investment and Public Asset Management) targets raised; LIC IPO planned' },
    { year: '2023', event: 'Capital expenditure emphasis — CapEx budget raised to Rs 10 lakh crore (3.3% of GDP)' },
  ],
  notes: [
    {
      section: 'Classification of Public Expenditure',
      content:
        'Revenue Expenditure: Does not create assets or reduce liabilities. Examples: salaries, pensions, interest payments, subsidies, defence revenue expenditure, grants to states. Capital Expenditure: Creates assets (roads, buildings, equipment) or reduces liabilities (loan repayments). Examples: infrastructure projects, defence capital acquisition, loans to states/PSUs. Since 2017, the Plan vs Non-Plan classification was abolished and replaced by Revenue/Capital classification. Developmental Expenditure: Social and economic services (education, health, agriculture, industry). Non-Developmental Expenditure: Administrative services, defence, interest payments. Wagner\'s Law: As economies develop, public expenditure increases more than proportionally (due to expanding government functions).',
    },
    {
      section: 'Subsidies in India',
      content:
        'Major subsidies: Food Subsidy (~Rs 2 lakh crore): Difference between economic cost (procurement + distribution) and Central Issue Price (CIP) of food grains distributed through PDS. FCI (Food Corporation of India) is the nodal agency. Fertiliser Subsidy (~Rs 1.64 lakh crore): Government controls MRP of urea and reimburses the difference to manufacturers. Nutrient-Based Subsidy (NBS) for non-urea fertilisers. Petroleum/LPG Subsidy: PAHAL scheme (DBTL) — LPG subsidy transferred directly to Aadhaar-linked bank accounts. Give-It-Up campaign encouraged voluntary surrender. Other subsidies: interest subvention on crop loans, housing (PMAY), MSME credit. Total subsidies = ~8-10% of central government expenditure. DBT has helped reduce leakage — Aadhaar authentication has eliminated duplicate/ghost beneficiaries.',
    },
    {
      section: 'Capital Expenditure & Multiplier Effect',
      content:
        'Capital expenditure has a higher fiscal multiplier than revenue expenditure — every Rs 1 of CapEx generates Rs 2.5-4.0 of output (IMF/RBI estimates for India). India has significantly increased CapEx allocation: Rs 4.39 lakh crore (2021-22) → Rs 7.50 lakh crore (2022-23) → Rs 10.00 lakh crore (2023-24) → Rs 11.11 lakh crore (2024-25). National Infrastructure Pipeline (NIP): Rs 111 lakh crore investment target across sectors (2020-25). National Monetisation Pipeline (NMP): Rs 6 lakh crore target from monetising brownfield infrastructure assets (highways, railways, pipelines, airports) — not privatisation but long-term lease. PM Gati Shakti: Integrated multi-modal connectivity master plan — digital platform for planning and synchronising infrastructure projects across ministries.',
    },
    {
      section: 'Disinvestment & Strategic Sale',
      content:
        'Disinvestment: Government reduces its shareholding in PSUs by selling shares. Types: Minority Disinvestment (government retains majority stake), Strategic Disinvestment/Privatisation (transfer of management control with sale of 51%+ stake). Major strategic sales: Air India (sold to Tata Group, 2022), BPCL and other proposed but not completed. DIPAM (Department of Investment and Public Asset Management) under Finance Ministry manages the process. Objectives: Reduce fiscal deficit, improve efficiency of PSUs, promote market discipline. New Public Sector Enterprise Policy (2021): Classified sectors into Strategic (government presence) and Non-Strategic (privatisation, merger, or closure). Strategic sectors: atomic energy, space, defence, transport, telecom, power, petroleum, coal, banking, insurance.',
    },
    {
      section: 'Central Sector vs Centrally Sponsored Schemes',
      content:
        'Central Sector Schemes (CSS): 100% funded by the Centre, implemented by central agencies. Examples: PM-KISAN, MGNREGA (Centre bears full wage cost, materials cost shared), Scholarships. Centrally Sponsored Schemes (CS): Funded jointly by Centre and States in specified ratios (60:40, 75:25, or 90:10 for NE/hill states). Examples: PMAY (Pradhan Mantri Awas Yojana), National Health Mission, Mid-Day Meal (PM POSHAN), ICDS (Integrated Child Development Services). Restructuring: Government has rationalised CSS into umbrella schemes — from 300+ schemes to ~28 umbrella schemes. Finance Commission and NITI Aayog have recommended reducing the number of CSS and giving states more flexibility in implementation. Outcome budgeting: Focus on outputs/outcomes rather than just expenditure allocation.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Public expenditure and subsidies are important for UPSC (subsidy reform, CapEx multiplier, disinvestment policy) and SSC/banking exams (subsidy amounts, DBT, disinvestment). Questions on food subsidy (FCI, PDS), fertiliser subsidy (NBS), and the distinction between revenue and capital expenditure are frequently tested.',
}
