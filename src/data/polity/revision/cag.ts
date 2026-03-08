import type { SubjectRevision } from '@/types/subject-notes'

export const cagRevision: SubjectRevision = {
  topic: 'cag',
  bullets: [
    'Art 148: CAG appointed by President by warrant under his hand and seal; takes oath before President. Art 149-150: duties/powers. Art 151: reports.',
    'Term: 6 years or 65 years, whichever is earlier. Removal: impeachment (same as SC judge — proved misbehaviour or incapacity).',
    'Not eligible for any government office after retirement (Art 148(4)) — stricter post-retirement restriction than most constitutional officers.',
    'Salary equivalent to SC judge. Expenses charged on Consolidated Fund of India (non-votable). Conditions of service cannot be varied to disadvantage.',
    'Dr. B.R. Ambedkar: CAG is "the most important officer under the Constitution of India."',
    'CAG audits: Consolidated Fund of India + states, Contingency Funds, Public Accounts, government companies, government-funded bodies.',
    'Art 151(1): CAG reports on Union accounts → President → laid before each House of Parliament.',
    'Art 151(2): CAG reports on state accounts → Governor → laid before state legislature.',
    'Three types of reports: (1) Appropriation Accounts (expenditure vs grants), (2) Finance Accounts (overall financial position), (3) Performance Audit (efficiency, economy, effectiveness).',
    'CAG reports examined by Public Accounts Committee (PAC) — chaired by opposition MP since 1967; 22 members (15 LS + 7 RS).',
    'CAG functions primarily as Auditor General (post-facto audit), NOT as Comptroller (pre-expenditure control). UK C&AG has both functions.',
    'Accounts separated from audit in 1976: Controller General of Accounts (CGA) in Finance Ministry handles accounts; CAG handles audit.',
    'CAG heads Indian Audit & Accounts Department (IA&AD) — over 45,000 staff; offices in all states and UTs.',
    'CAG (DPC) Act, 1971 prescribes duties, powers, and conditions of service under Art 148(3) and 149.',
    'CAG is member of UN Board of Auditors, ASOSAI, and INTOSAI. Follows International Standards of Supreme Audit Institutions (ISSAIs).',
    'Landmark reports: 2G spectrum (2010, Rs 1.76 lakh crore presumptive loss), Coal blocks (2012, Rs 1.86 lakh crore windfall), Commonwealth Games (2010).',
    'SC cancelled 122 telecom licenses (2G case, 2012) and 204 coal block allocations (2014) based on CAG findings.',
    'First CAG of independent India: V. Narahari Rao. Notable: Vinod Rai (2008-2013) — 2G, coal, CWG reports.',
    'CAG audits government companies under Section 143(6) of Companies Act 2013 — supplementary audit; statutory auditor from CAG panel.',
    'Art 243J: state legislature provides for audit of panchayat accounts. CAG provides Technical Guidance and Supervision (TGS) for local body audit.',
    'No comptrollership in India: executive itself controls issue of money from Consolidated Fund. 1st ARC recommended comptrollership — not implemented.',
    'Estimates Committee examines spending BEFORE it happens (budget estimates). PAC examines spending AFTER (actual vs grants). CAG supports PAC.',
    'Three Financial Committees of Parliament: PAC, Estimates Committee, Committee on Public Undertakings.',
    'CAG expanding into: environmental audit, IT audit, SDG audit, disaster management audit, gender audit.',
    'Challenges: 2-3 year audit gap, enforcement deficit, shrinking jurisdiction (PPPs, trusts), no transparent appointment process.',
  ],
  comparisons: [
    {
      title: 'CAG vs Finance Commission',
      headers: ['Aspect', 'CAG', 'Finance Commission'],
      rows: [
        ['Article', 'Art 148-151', 'Art 280'],
        ['Nature', 'Single constitutional officer', 'Multi-member body (Chairman + 4)'],
        ['Function', 'Audit government expenditure', 'Recommend tax distribution Centre-States'],
        ['Tenure', '6 years or 65 years', 'Constituted every 5 years (not permanent)'],
        ['Reports to', 'President/Governor → Parliament/Legislature', 'President → Parliament'],
        ['Post-retirement', 'No further government office', 'No such restriction'],
      ],
    },
    {
      title: 'Comptroller vs Auditor General Functions',
      headers: ['Aspect', 'Comptroller Function', 'Auditor General Function'],
      rows: [
        ['Timing', 'Pre-expenditure control', 'Post-expenditure audit'],
        ['Purpose', 'Authorize release of funds', 'Verify legality and propriety'],
        ['India', 'NOT performed by CAG', 'Performed by CAG'],
        ['UK', 'Performed by C&AG', 'Performed by C&AG'],
        ['Who does it in India?', 'Executive (CGA, Finance Ministry)', 'CAG and IA&AD'],
      ],
    },
    {
      title: 'Three Financial Committees of Parliament',
      headers: ['Committee', 'Examines', 'Relationship with CAG'],
      rows: [
        ['PAC', 'Actual expenditure (post-facto)', 'Examines CAG reports'],
        ['Estimates Committee', 'Budget estimates (pre-expenditure)', 'No direct link to CAG'],
        ['Committee on Public Undertakings', 'Public sector enterprises', 'Examines CAG reports on PSUs'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'CAG Articles — "148-9-50-51"',
      mnemonic: '148 = Appointment/Removal, 149 = Duties/Powers, 150 = Form of Accounts, 151 = Reports to President/Governor',
      explanation: 'The four consecutive articles dealing with the CAG and their subject matter.',
    },
    {
      title: 'CAG Independence — "SCRIP"',
      mnemonic: 'Security (impeachment), Charged expenditure, Retirement bar (no further office), Independence of conditions, President appoints',
      explanation: 'Five key independence safeguards for the CAG.',
    },
    {
      title: 'Three Reports — "AFP"',
      mnemonic: 'Appropriation accounts, Finance accounts, Performance audit',
      explanation: 'The three types of audit reports prepared by the CAG.',
    },
  ],
}
