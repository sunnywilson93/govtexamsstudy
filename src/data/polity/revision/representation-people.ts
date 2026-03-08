import type { SubjectRevision } from '@/types/subject-notes'
export const representationPeopleRevision: SubjectRevision = {
  topic: 'representation-people',
  bullets: [
    'RPA 1950: Electoral rolls, voter qualifications, delimitation. RPA 1951: Conduct of elections, disputes, corrupt practices, disqualification.',
    'Voting age: 18 years (reduced from 21 by 61st Amendment, 1988). National Voters\' Day: 25 January.',
    'Deposit: Rs 25,000 LS (Rs 12,500 SC/ST); Rs 10,000 Assembly (Rs 5,000 SC/ST). Forfeited if less than 1/6th valid votes.',
    'Section 123 RPA 1951: Corrupt practices — bribery, undue influence, appeal on religion/caste, false statements, free conveyance.',
    'Section 8: Disqualification on conviction. 2+ years imprisonment = immediate disqualification + 6 years from release.',
    'Lily Thomas v. UOI (2013): SC struck down Section 8(4) — convicted sitting MPs/MLAs immediately disqualified (no 3-month window).',
    'Election petition: Filed in HC within 45 days of results. Grounds: corrupt practices, disqualification, improper nomination rejection.',
    'Delimitation: 4 commissions (1952, 1963, 1973, 2002). Seats frozen at 1971 Census levels until 2026 (84th Amendment).',
    '42nd Amendment (1976) froze seats based on 1971 Census to incentivize population control. 84th Amendment (2001) extended freeze to 2026.',
    'NOTA: SC in PUCL v. UOI (2013). Right to reject all candidates but NOTA doesn\'t affect election outcome.',
    'VVPAT: Introduced after SC direction in Subramanian Swamy v. ECI (2013). Voter Verifiable Paper Audit Trail.',
    'Expenditure ceiling: Rs 95 lakh LS (larger states), Rs 75 lakh (smaller); Rs 40 lakh Assembly (larger), Rs 28 lakh (smaller).',
    'ADR case (2002): Mandatory disclosure of criminal record, assets, liabilities, education by candidates.',
    'Election Laws (Amendment) Act, 2021: Aadhaar-voter ID linkage. Four qualifying dates per year (not just 1 January).',
    'Electoral Bond Scheme struck down by SC (2024) — violated right to information under Art 19(1)(a).',
  ],
  comparisons: [
    { title: 'RPA 1950 vs RPA 1951', headers: ['Feature', 'RPA 1950', 'RPA 1951'], rows: [
      ['Focus', 'Electoral rolls, voters', 'Election conduct, disputes'],
      ['Key provisions', 'Voter qualifications, delimitation', 'Corrupt practices, disqualification'],
      ['Party registration', 'Not covered', 'Section 29A'],
      ['Election petitions', 'Not covered', 'Part VI'],
    ]},
  ],
  mnemonics: [
    { title: 'Deposit Amounts — "25-10-1/6"', mnemonic: 'Rs 25,000 LS, Rs 10,000 Assembly, forfeited below 1/6th votes', explanation: 'Election deposit amounts and the forfeiture threshold.' },
    { title: 'Delimitation Freeze — "42-84-2026"', mnemonic: '42nd Amendment froze seats, 84th extended to 2026', explanation: 'Seats frozen at 1971 Census levels; extended by 84th Amendment until after 2026.' },
  ],
}
