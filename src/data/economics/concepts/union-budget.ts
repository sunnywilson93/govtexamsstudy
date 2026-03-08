import type { SubjectConcept } from '@/types/subject-notes'

export const unionBudgetConcept: SubjectConcept = {
  topic: 'union-budget',
  title: 'Union Budget & Budget Process',
  description:
    'Constitutional provisions, budget cycle, revenue and capital accounts, key budget documents, and budgetary reforms in India.',
  category: 'Public Finance',
  keyDates: [
    { year: '1860', event: 'First budget of India presented by James Wilson on April 7 — Finance Member of the Viceroy\'s Council' },
    { year: '1947', event: 'First budget of Independent India presented by R.K. Shanmukham Chetty on November 26' },
    { year: '2017', event: 'Railway Budget merged with General Budget; budget date advanced from end of February to February 1' },
    { year: '2017', event: 'Plan and Non-Plan expenditure classification abolished (post-Planning Commission dissolution)' },
    { year: '1955', event: 'First Five Year Plan expenditure integrated into budget — Plan vs Non-Plan distinction began' },
    { year: '2024', event: 'Interim Budget 2024-25 presented in February; full budget in July after general elections' },
    { year: '2003', event: 'FRBM Act enacted — mandated fiscal deficit targets for the central government' },
  ],
  notes: [
    {
      section: 'Constitutional Provisions',
      content:
        'Article 112: The President shall cause to be laid before Parliament an "Annual Financial Statement" (Budget) showing estimated receipts and expenditure. Article 113: Appropriation Bill — no money can be withdrawn from Consolidated Fund of India without Parliament\'s approval. Article 114: Appropriation Bill procedure. Article 115: Supplementary and Excess Grants. Article 116: Votes on Account, Vote of Credit, Exceptional Grants. Article 265: No tax shall be levied or collected except by authority of law. Article 266: Consolidated Fund of India and Public Account. Article 267: Contingency Fund of India (Rs 500 crore, at the disposal of the President for urgent expenditure). Three types of funds: CFI (all revenues and loans), Public Account (deposits, provident funds — not voted by Parliament), Contingency Fund.',
    },
    {
      section: 'Budget Structure — Revenue & Capital',
      content:
        'Revenue Account: Revenue Receipts = Tax Revenue (income tax, corporation tax, GST, customs, excise) + Non-Tax Revenue (dividends from PSUs, interest receipts, spectrum auction fees, RBI surplus). Revenue Expenditure = Salaries, pensions, interest payments, subsidies, grants to states. Revenue Deficit = Revenue Expenditure − Revenue Receipts (indicates government is borrowing for consumption). Capital Account: Capital Receipts = Borrowings (market loans, external debt), disinvestment proceeds, recovery of loans. Capital Expenditure = Creation of assets (roads, bridges, defence equipment), loans given to states/PSUs. Fiscal Deficit = Total Expenditure − Total Receipts (excluding borrowings). It equals total borrowing by the government. Primary Deficit = Fiscal Deficit − Interest Payments.',
    },
    {
      section: 'Budget Documents',
      content:
        'Key budget documents presented to Parliament: (1) Annual Financial Statement (the Budget itself, Art. 112). (2) Demand for Grants — one for each ministry/department (voted by Lok Sabha). (3) Finance Bill — contains taxation proposals (must be passed within 75 days). (4) Appropriation Bill — authorises expenditure from CFI. (5) Macro-Economic Framework Statement (FRBM requirement). (6) Medium Term Fiscal Policy Statement. (7) Fiscal Policy Strategy Statement. (8) Expenditure Profile. (9) Budget at a Glance. (10) Receipt Budget and Expenditure Budget. Economic Survey (prepared by the Chief Economic Adviser) is presented a day before the Budget — reviews economic performance but is not a budget document.',
    },
    {
      section: 'Budget Process & Timeline',
      content:
        'The budget cycle has four stages: (1) Preparation (September-January): Ministries submit estimates, Finance Ministry compiles. (2) Presentation (February 1): Finance Minister presents in Lok Sabha. President\'s recommendation required (Art. 117). (3) Discussion & Approval: General discussion → Demand for Grants (department-wise) → Guillotine (undiscussed demands put to vote on last allotted day) → Appropriation Bill → Finance Bill. (4) Execution & Review: CAG audits expenditure. Rajya Sabha can only discuss, not vote on Demand for Grants. If budget not passed before April 1, Vote on Account allows government to spend for a limited period (usually 2 months). Interim Budget is a full budget presented before elections; Vote on Account is more limited.',
    },
    {
      section: 'Key Budget Metrics — 2024-25',
      content:
        'Total Expenditure (2024-25 BE): ~Rs 48.21 lakh crore. Capital Expenditure: ~Rs 11.11 lakh crore (23% of total). Revenue Expenditure: ~Rs 37.09 lakh crore. Fiscal Deficit target: 4.9% of GDP (2024-25 revised), target of below 4.5% by 2025-26. Revenue Deficit: Targeted at 1.8% of GDP. Major expenditure heads: Interest Payments (~26% of revenue expenditure), Defence (~8%), Subsidies (food, fertiliser, fuel ~7%), Central Sector and Centrally Sponsored Schemes. Tax revenue is shared with states through Finance Commission recommendations (currently 15th FC: 41% of divisible pool to states). Cess and surcharges are not shared with states.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Union Budget is one of the most important topics for all exams, especially in the months following the budget. UPSC tests constitutional provisions, deficit concepts, and FRBM Act. SSC and banking exams ask about the first budget, budget documents, and deficit definitions. Current affairs questions on fiscal deficit targets and major budget announcements are tested across all exams.',
}
