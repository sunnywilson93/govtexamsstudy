import type { SubjectConcept } from '@/types/subject-notes'

export const bankingSystemConcept: SubjectConcept = {
  topic: 'banking-system',
  title: 'Indian Banking System',
  description:
    'Structure of the Indian banking system, scheduled vs non-scheduled banks, commercial and cooperative banks, bank nationalisation, and banking reforms.',
  category: 'Banking & Monetary',
  keyDates: [
    { year: '1806', event: 'Bank of Calcutta (later Bank of Bengal) established — first bank in India' },
    { year: '1921', event: 'Three Presidency banks merged to form Imperial Bank of India' },
    { year: '1955', event: 'Imperial Bank of India nationalised as State Bank of India (SBI) under SBI Act 1955' },
    { year: '1969', event: '14 major commercial banks with deposits over Rs 50 crore nationalised (July 19)' },
    { year: '1980', event: '6 more commercial banks with deposits over Rs 200 crore nationalised' },
    { year: '1991', event: 'Narasimham Committee-I recommended banking sector reforms — reduced CRR/SLR, entry of private banks' },
    { year: '2014', event: 'Jan Dhan Yojana launched (August 28) — largest financial inclusion programme globally' },
    { year: '2017', event: 'Banks Board Bureau established; later renamed FSIB (Financial Services Institutions Bureau) in 2022' },
    { year: '2020', event: '10 PSBs merged into 4 — total PSBs reduced from 27 to 12' },
  ],
  notes: [
    {
      section: 'Structure of Indian Banking',
      content:
        'The Indian banking system has a pyramidal structure with RBI at the apex. Banks are classified as: Scheduled Banks (listed in the Second Schedule of the RBI Act) and Non-Scheduled Banks. Scheduled banks include: Commercial Banks (Public Sector Banks — 12, Private Sector Banks — 21, Foreign Banks — 46, Regional Rural Banks — 43, Small Finance Banks — 12, Payments Banks — 6) and Cooperative Banks (State Cooperative Banks, District Central Cooperative Banks, Primary Agricultural Credit Societies in the three-tier short-term structure, and State Cooperative Agriculture & Rural Development Banks in the long-term structure). SBI is the largest commercial bank in India. HDFC Bank is the largest private sector bank.',
    },
    {
      section: 'Bank Nationalisation',
      content:
        'First Phase (1969): 14 banks with deposits over Rs 50 crore were nationalised on July 19, 1969, under PM Indira Gandhi. Objective: Social control of banking, expansion of credit to rural/priority sectors, reducing concentration of economic power. Banks nationalised included: Central Bank of India, Bank of Maharashtra, Dena Bank, Punjab National Bank, Syndicate Bank, Canara Bank, Indian Bank, Indian Overseas Bank, Bank of Baroda, Union Bank, Allahabad Bank, United Bank of India, UCO Bank, Bank of India. Second Phase (1980): 6 more banks (Andhra Bank, Corporation Bank, New Bank of India, Oriental Bank of Commerce, Punjab & Sind Bank, Vijaya Bank). New Bank of India was later merged with Punjab National Bank (1993).',
    },
    {
      section: 'Types of Modern Banks',
      content:
        'Small Finance Banks (SFBs): Licensed since 2015 to provide basic banking services (savings, deposits, lending) to unserved sections. Must lend 75% to priority sector; 50% of loans must be up to Rs 25 lakh. Examples: AU Small Finance Bank, Equitas, Ujjivan. Payments Banks: Can accept deposits up to Rs 2 lakh, cannot lend. Can issue debit cards, offer internet/mobile banking, bill payments. Examples: Paytm Payments Bank, India Post Payments Bank, Airtel Payments Bank, Jio Payments Bank. Differentiated Banks: Concept introduced by Nachiket Mor Committee (2013). Regional Rural Banks (RRBs): Established under RRB Act 1976. Shareholding: Central Govt (50%), State Govt (15%), Sponsor Bank (35%). First RRB: Prathama Bank (1975) in Moradabad, UP.',
    },
    {
      section: 'Banking Reforms & Committees',
      content:
        'Narasimham Committee-I (1991): Recommended reducing CRR and SLR, phasing out directed credit, introducing capital adequacy norms (CRAR), setting up Debt Recovery Tribunals. Narasimham Committee-II (1998): Recommended merging strong banks, strengthening capital adequacy to 10%, reducing government stake in PSBs below 33%. P.J. Nayak Committee (2014): Recommended creating a Bank Investment Company (BIC) to hold government stakes in PSBs. Nachiket Mor Committee (2013): Recommended universal access to financial services by 2016, Payments Banks and SFBs. Recent reforms include EASE (Enhanced Access & Service Excellence) reforms for PSBs, and the merger of 10 PSBs into 4 (effective April 2020).',
    },
    {
      section: 'Financial Inclusion — Jan Dhan Yojana',
      content:
        'Pradhan Mantri Jan Dhan Yojana (PMJDY) launched on August 28, 2014, is the world\'s largest financial inclusion programme. Features: Zero-balance account, RuPay debit card, Rs 1 lakh accident insurance cover, Rs 30,000 life insurance (for accounts opened before January 2015), overdraft facility of Rs 10,000 (for eligible account holders). The JAM Trinity (Jan Dhan + Aadhaar + Mobile) enables Direct Benefit Transfer (DBT), eliminating intermediaries in subsidy distribution. Over 51 crore accounts opened with deposits exceeding Rs 2 lakh crore (as of 2024). Mapped with Aadhaar for LPG subsidy (PAHAL scheme), MGNREGA wages, and other government transfers.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Banking system is the core topic for all banking exams. IBPS and SBI exams test bank types, nationalisation dates, committee recommendations, and Jan Dhan Yojana details. UPSC tests the broader reform landscape, financial inclusion, and the role of different bank types. SSC exams ask factual questions on first banks, mergers, and the number of PSBs/private banks.',
}
