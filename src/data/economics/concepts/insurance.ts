import type { SubjectConcept } from '@/types/subject-notes'

export const insuranceConcept: SubjectConcept = {
  topic: 'insurance',
  title: 'Insurance & Pension Sector',
  description:
    'IRDAI, types of insurance, government insurance schemes, pension reforms, NPS, and social security through insurance in India.',
  category: 'Banking & Monetary',
  keyDates: [
    { year: '1956', event: 'Life Insurance Corporation (LIC) established by nationalising 245 private insurance companies' },
    { year: '1972', event: 'General Insurance Corporation (GIC) established — general insurance nationalised' },
    { year: '1999', event: 'IRDA (Insurance Regulatory and Development Authority) established under IRDA Act' },
    { year: '2000', event: 'Insurance sector opened to private participation with 26% FDI cap' },
    { year: '2015', event: 'FDI in insurance raised to 49%; IRDA renamed IRDAI (added "of India")' },
    { year: '2021', event: 'FDI in insurance raised to 74% (Insurance Amendment Act 2021)' },
    { year: '2015', event: 'PMJJBY, PMSBY, and APY launched (May 9) for universal insurance and pension coverage' },
    { year: '2022', event: 'LIC IPO — largest IPO in Indian history at the time (Rs 20,557 crore)' },
  ],
  notes: [
    {
      section: 'Insurance Regulation in India',
      content:
        'IRDAI (Insurance Regulatory and Development Authority of India) is the apex regulatory body for insurance. Established under the IRDA Act 1999, headquartered in Hyderabad. Functions: Issue licences to insurers, protect policyholder interests, regulate premium rates, promote insurance penetration. Insurance penetration in India: ~4.2% of GDP (2022-23) — life insurance ~3.2%, non-life ~1%. Insurance density: ~$92 per capita (2022-23). India is one of the least insured large economies. The Insurance Laws (Amendment) Act 2015 raised FDI to 49% and the 2021 amendment raised it further to 74%.',
    },
    {
      section: 'Types of Insurance',
      content:
        'Life Insurance: Provides financial protection against death/disability. Types include Term Insurance (pure risk cover), Endowment (savings + insurance), ULIP (Unit Linked Insurance Plan — market-linked), Whole Life, Money Back. LIC is the largest life insurer (65%+ market share). Non-Life/General Insurance: Covers health, motor, fire, marine, crop, and travel insurance. GIC Re (General Insurance Corporation of India) is the sole national reinsurer. 4 PSU general insurers: New India Assurance, United India Insurance, Oriental Insurance, National Insurance. Health Insurance: Standalone health insurers like Star Health are growing. Crop Insurance: Pradhan Mantri Fasal Bima Yojana (PMFBY) 2016 — covers crop losses due to natural calamities at low premiums (2% kharif, 1.5% rabi, 5% commercial crops).',
    },
    {
      section: 'Government Insurance Schemes',
      content:
        'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY): Life insurance cover of Rs 2 lakh at a premium of Rs 436/year. Age: 18-50 years. Auto-debit from bank account. Pradhan Mantri Suraksha Bima Yojana (PMSBY): Accident insurance cover — Rs 2 lakh for death/permanent total disability, Rs 1 lakh for permanent partial disability. Premium: Rs 20/year. Age: 18-70 years. Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (PM-JAY): Health insurance cover of Rs 5 lakh per family per year for secondary and tertiary hospitalisation. Covers ~12 crore poor families (~55 crore beneficiaries). Cashless and paperless treatment at empanelled hospitals. Largest government-funded health insurance scheme in the world.',
    },
    {
      section: 'Pension System — NPS & APY',
      content:
        'National Pension System (NPS): Defined contribution pension scheme regulated by PFRDA (Pension Fund Regulatory and Development Authority). Mandatory for central government employees joining after January 1, 2004 (replacing the old defined benefit pension). Voluntary for all citizens (18-70 years). Two tiers: Tier-I (retirement, locked until 60), Tier-II (flexible withdrawal). At maturity, minimum 40% must be used to buy an annuity; 60% can be withdrawn tax-free. NPS has multiple fund managers and investment choices (equity, corporate bonds, G-Secs, alternative assets). Atal Pension Yojana (APY): For unorganised sector workers. Guaranteed monthly pension of Rs 1,000 to Rs 5,000 after age 60. Government co-contributes 50% for eligible subscribers. Age: 18-40 years.',
    },
    {
      section: 'Social Security & Employee Insurance',
      content:
        'Employees\' State Insurance (ESI): Provides medical, sickness, maternity, disability, and dependent benefits. Applicable to establishments with 10+ employees, for workers earning up to Rs 21,000/month. Administered by ESIC under the ESI Act 1948. Employees\' Provident Fund (EPF): Retirement savings scheme under the EPF Act 1952. Both employer and employee contribute 12% of basic salary. Managed by EPFO. Employees\' Pension Scheme (EPS 1995): Pension from employer\'s EPF contribution (8.33% of 12%). Minimum pension: Rs 1,000/month after 10 years of service. Code on Social Security 2020: Consolidates 9 labour laws related to social security, including EPF, ESI, gratuity, maternity benefit. Extends coverage to gig workers and platform workers.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Insurance and pension topics are increasingly important in competitive exams. Banking exams test PMJJBY/PMSBY details, NPS structure, and IRDAI functions. UPSC asks about insurance penetration, FDI limits, and PM-JAY coverage. SSC exams test factual details about LIC establishment, premium amounts under government schemes, and EPFO/ESIC provisions.',
}
