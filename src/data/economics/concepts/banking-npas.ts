import type { SubjectConcept } from '@/types/subject-notes'

export const bankingNpasConcept: SubjectConcept = {
  topic: 'banking-npas',
  title: 'Banking NPAs & Resolution',
  description:
    'Non-Performing Assets, asset classification, provisioning norms, IBC, SARFAESI, bad bank (NARCL), and NPA resolution mechanisms in Indian banking.',
  category: 'Banking & Monetary',
  keyDates: [
    { year: '1993', event: 'Narasimham Committee-I recommended asset classification and provisioning norms' },
    { year: '2002', event: 'SARFAESI Act enacted — allowed banks to recover NPAs without court intervention' },
    { year: '2016', event: 'Insolvency and Bankruptcy Code (IBC) enacted — unified insolvency resolution framework' },
    { year: '2018', event: 'RBI\'s February 12 circular on NPA resolution — later struck down by Supreme Court (April 2019)' },
    { year: '2021', event: 'National Asset Reconstruction Company Ltd (NARCL) — "Bad Bank" — established' },
    { year: '2023', event: 'Gross NPA ratio of scheduled commercial banks declined to 3.9% — lowest in a decade' },
    { year: '2024', event: 'Gross NPA ratio further improved to around 2.8% — best in over 12 years' },
  ],
  notes: [
    {
      section: 'NPA Classification',
      content:
        'A Non-Performing Asset (NPA) is a loan or advance where interest/principal remains overdue for more than 90 days. Asset Classification (as per RBI norms): Standard Assets: No default, regular repayment. Sub-Standard Assets: NPA for up to 12 months. Doubtful Assets: NPA for more than 12 months. Loss Assets: Identified as uncollectable by the bank or auditor but not yet written off. Special Mention Accounts (SMA): Early warning categories — SMA-0 (1-30 days overdue), SMA-1 (31-60 days), SMA-2 (61-90 days). Gross NPA = Total NPAs before provisions. Net NPA = Gross NPA − Provisions. Provision Coverage Ratio (PCR) = Provisions / Gross NPAs × 100.',
    },
    {
      section: 'Causes of NPAs in India',
      content:
        'Internal factors: Poor credit appraisal, inadequate monitoring, wilful default, diversion of funds. External factors: Economic slowdown, policy paralysis, delayed government clearances, agricultural distress. Sector-specific: Infrastructure projects with cost/time overruns, power sector (stalled projects), steel (global overcapacity), telecom (spectrum liabilities). Twin Balance Sheet Problem: Overleveraged corporates (high debt) + stressed banks (high NPAs) — identified by the Economic Survey 2016-17 as a key impediment to growth. The NPA crisis peaked in 2017-18 when gross NPAs of SCBs reached 11.2%. The 4R strategy (Recognition, Resolution, Recapitalisation, Reforms) was adopted to address the crisis.',
    },
    {
      section: 'NPA Resolution Mechanisms',
      content:
        'SARFAESI Act 2002: Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act. Allows banks to take possession of secured assets, manage/sell them without court intervention. Does not apply to agricultural land or loans below Rs 1 lakh or where remaining debt is less than 20% of the principal. Debt Recovery Tribunals (DRTs): Established under RDDBFI Act 1993 for recovery of debts above Rs 20 lakh. Lok Adalats: For recovery of loans up to Rs 20 lakh. Asset Reconstruction Companies (ARCs): Buy bad loans from banks at a discount and attempt recovery. Regulated by RBI.',
    },
    {
      section: 'Insolvency and Bankruptcy Code (IBC) 2016',
      content:
        'The IBC provides a time-bound process for resolving insolvency. Timeline: 180 days (extendable by 90 days, max 330 days). Adjudicating Authorities: NCLT (National Company Law Tribunal) for companies, DRT for individuals/partnerships. IBBI (Insolvency and Bankruptcy Board of India): Regulates insolvency professionals, agencies, and information utilities. Process: Financial creditor/operational creditor/debtor applies to NCLT → Committee of Creditors (CoC) formed → Resolution Professional appointed → Resolution plan approved by 66% of CoC → NCLT approval. If no resolution, the company goes into liquidation. Waterfall mechanism for distribution: Insolvency resolution costs → Workmen dues (24 months) → Secured creditors → Unsecured creditors → Government dues → Equity.',
    },
    {
      section: 'Bad Bank (NARCL) & Recent Measures',
      content:
        'National Asset Reconstruction Company Limited (NARCL) was set up in 2021 to acquire stressed assets worth Rs 500 crore and above from banks. India Debt Resolution Company Limited (IDRCL) was set up as the operational entity to manage and resolve these assets. NARCL issues Security Receipts (SRs) backed by government guarantee of Rs 30,600 crore. PSBs hold 51% stake in NARCL. Recent measures to reduce NPAs: RBI\'s Prompt Corrective Action (PCA) framework imposes restrictions on weak banks (lending, expansion, dividends). Technical Write-offs: Banks write off bad loans from their books for tax/accounting purposes but continue recovery efforts. Recapitalisation: Government has infused over Rs 3.5 lakh crore in PSBs since 2015-16 through budgetary allocation and recapitalisation bonds.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'NPAs and the IBC are frequently tested in banking exams and UPSC. IBPS PO/Clerk exams ask about NPA classification, SARFAESI Act, and provisioning norms. UPSC tests the IBC process, NCLT, NARCL structure, and the twin balance sheet problem. SSC exams test factual questions on NPA definitions and the 90-day rule.',
}
