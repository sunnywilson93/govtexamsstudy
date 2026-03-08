import type { SubjectRevision } from '@/types/subject-notes'

export const cagRevision: SubjectRevision = {
  topic: 'cag',
  bullets: [
    'Art 148: CAG appointed by President; takes oath before President. Art 149-150: duties and powers. Art 151: reports.',
    'Term: 6 years or 65 years, whichever is earlier. Removal: impeachment (same as SC judge).',
    'Not eligible for any government office after retirement (Art 148(4)).',
    'Salary equivalent to SC judge. Expenses charged on Consolidated Fund of India (non-votable).',
    'Dr. B.R. Ambedkar called the CAG "the most important officer under the Constitution."',
    'CAG audits: Consolidated Fund of India + states, Contingency Fund, Public Account, government companies, government-funded bodies.',
    'Art 151: CAG reports on Union accounts → President → Parliament. State accounts → Governor → state legislature.',
    'Three types of reports: Appropriation Accounts, Finance Accounts, Performance Audit.',
    'CAG reports examined by Public Accounts Committee (PAC) — chaired by opposition MP since 1967.',
    'CAG functions primarily as Auditor General (post-facto audit), NOT as Comptroller (pre-expenditure control).',
    'CAG (DPC) Act, 1971 prescribes duties and powers of the CAG.',
    'Notable reports: 2G spectrum (2010), coal block allocation (2012), Commonwealth Games (2010).',
  ],
  comparisons: [
    {
      title: 'CAG vs Finance Commission',
      headers: ['Aspect', 'CAG', 'Finance Commission'],
      rows: [
        ['Article', 'Art 148-151', 'Art 280'],
        ['Nature', 'Single officer', 'Multi-member body (Chairman + 4)'],
        ['Function', 'Audit government expenditure', 'Recommend tax distribution'],
        ['Tenure', '6 years or 65 years', 'Constituted every 5 years'],
        ['Reports to', 'President/Governor → Parliament/Legislature', 'President → Parliament'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'CAG Articles (148-151)',
      mnemonic: '148 = Appointment, 149 = Duties/Powers, 150 = Form of Accounts, 151 = Reports',
      explanation: 'The four key articles dealing with the Comptroller and Auditor General.',
    },
  ],
}
