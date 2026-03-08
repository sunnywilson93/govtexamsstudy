import type { SubjectConcept } from '@/types/subject-notes'

export const publicDebtConcept: SubjectConcept = {
  topic: 'public-debt',
  title: 'Public Debt & Government Securities',
  description:
    'Internal and external debt, government securities market, debt management, and India\'s debt sustainability for competitive exams.',
  category: 'Public Finance',
  keyDates: [
    { year: '2007', event: 'Consolidated Sinking Fund created by states for debt repayment' },
    { year: '2003', event: 'FRBM Act capped fiscal deficit and set debt reduction targets' },
    { year: '2015', event: 'Public Debt Management Agency (PDMA) proposed to take over debt management from RBI' },
    { year: '1994', event: 'RBI stopped participating in primary auctions of government securities (ad hoc T-Bills abolished)' },
    { year: '2017', event: 'N.K. Singh Committee recommended central government debt-GDP ratio of 40%' },
    { year: '2024', event: 'India\'s central government debt approximately 57% of GDP; total public debt ~81% of GDP' },
  ],
  notes: [
    {
      section: 'Components of Public Debt',
      content:
        'Internal Debt: Borrowing within the country — market loans (dated securities), T-Bills, ways and means advances, small savings, provident funds. Constitutes ~95% of India\'s total public debt. External Debt: Borrowing from foreign governments, international institutions (IMF, World Bank, ADB), external commercial borrowings (ECBs), NRI deposits. India\'s external debt was approximately $663 billion (March 2024). External Debt-to-GDP ratio: ~19%. Short-term debt (by residual maturity): ~44% of total external debt. Foreign exchange reserves cover: ~96% of external debt. Debt service ratio (principal + interest payments as % of current receipts): ~6.7% — comfortable by international standards.',
    },
    {
      section: 'Government Securities Market',
      content:
        'Primary Market: Government issues securities through auctions conducted by RBI. Competitive bidding by banks, primary dealers, and institutional investors. Non-competitive bidding by retail investors. Types: Dated G-Secs (5-40 year tenures), T-Bills (91/182/364 days), Cash Management Bills (less than 91 days), SDLs (State Development Loans). Secondary Market: G-Secs traded on NDS-OM (Negotiated Dealing System — Order Matching) platform. RBI Retail Direct Scheme (2021): Allows retail investors to buy G-Secs directly through a Gilt Account with RBI. Primary Dealers: Licensed by RBI to make a market in G-Secs, support government borrowing programme, underwrite auctions. Currently 21 primary dealers in India.',
    },
    {
      section: 'Debt Management',
      content:
        'RBI currently manages central government debt (as an agent). PDMA proposal to create a separate agency is pending. Key debt management objectives: Minimise borrowing cost, manage maturity profile to avoid bunching, develop the G-Sec market. Weighted Average Maturity of outstanding G-Secs: ~11-12 years. Weighted Average Yield at issuance: varies with market conditions. Ways and Means Advances (WMA): Short-term borrowing by the government from RBI to bridge temporary mismatches between revenue and expenditure. WMA limit is decided by RBI for both Centre and States. Overdraft: If WMA is exceeded, the government goes into overdraft — must be rectified within 10 working days.',
    },
    {
      section: 'Small Savings Instruments',
      content:
        'Small savings instruments are an important source of government borrowing. Major schemes: Public Provident Fund (PPF) — 15-year tenure, current rate ~7.1%, tax-free (EEE status). National Savings Certificate (NSC) — 5-year, current rate ~7.7%. Kisan Vikas Patra (KVP) — doubles money in ~115 months. Sukanya Samriddhi Yojana (SSY) — for girl child, highest interest rate among small savings (~8.2%). Senior Citizens Savings Scheme (SCSS) — 5-year, for 60+ years, ~8.2%. Post Office Savings Account, Time Deposits, Monthly Income Scheme (MIS). Small savings rates are reviewed quarterly by the government, linked to G-Sec yields (Shyamala Gopinath Committee formula) but often set at slightly higher rates for social reasons. Collections flow into the National Small Savings Fund (NSSF).',
    },
    {
      section: 'Debt Sustainability',
      content:
        'India\'s general government (Centre + States) debt-to-GDP ratio is approximately 81% — higher than the N.K. Singh Committee target of 60%. However, India\'s debt is mostly internal (rupee-denominated), which reduces exchange rate risk. IMF classifies India\'s debt as sustainable but with limited fiscal space. Domar Condition for debt sustainability: If the growth rate of the economy exceeds the interest rate on debt, the debt-GDP ratio will decline even with primary deficits. India has generally met this condition (real GDP growth > real interest rate). However, rising interest payments (~40-45% of revenue receipts) constrain fiscal space for developmental expenditure. The Economic Survey regularly discusses the r-g differential (interest rate minus growth rate) as a key metric for debt sustainability.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Public debt concepts are important for UPSC (debt sustainability, FRBM targets, internal vs external debt) and banking exams (G-Sec types, small savings rates, WMA). SSC exams test factual recall on PPF rates, NSC, and KVP. Current affairs questions on fiscal deficit and borrowing programme are common.',
}
