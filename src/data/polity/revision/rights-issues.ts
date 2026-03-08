import type { SubjectRevision } from '@/types/subject-notes'
export const rightsIssuesRevision: SubjectRevision = {
  topic: 'rights-issues',
  bullets: [
    'Art 21 expanded from narrow scope (A.K. Gopalan, 1950) to comprehensive charter of rights (Maneka Gandhi, 1978 — due process).',
    'Art 21 now includes: privacy, livelihood, education, health, shelter, clean environment, speedy trial, legal aid, dignity, sleep.',
    'K.S. Puttaswamy (2017): 9-judge bench — Right to Privacy is FR under Art 21. Led to DPDP Act, 2023.',
    'Navtej Singh Johar (2018): Decriminalized homosexuality — struck down Section 377 IPC for consensual adult relations.',
    'Supriyo v. UOI (2023): SC declined to recognize same-sex marriage as FR — left it to Parliament.',
    'NALSA v. UOI (2014): Recognized transgender persons as "third gender." Directed affirmative action.',
    'Shreya Singhal (2015): Struck down Section 66A IT Act — unconstitutional for vagueness and overbreadth.',
    'Anuradha Bhasin (2020): Internet access is FR under Art 19(1)(a). Shutdowns must be proportionate + judicially reviewable.',
    'CAA (2019): Citizenship for persecuted minorities from Pak/Bangladesh/Afghanistan — excludes Muslims. Protests erupted.',
    'NFSA (2013): Right to food — 5 kg/person/month at Rs 3/2/1 for rice/wheat/coarse grains. Covers 67% population.',
    'RTE Act (2009): Art 21A — free compulsory education for 6-14 years. 25% reservation in private schools for EWS.',
    'SC/ST Prevention of Atrocities Act (1989, amended 2015). Forest Rights Act (2006): tribal rights over forest land.',
    '103rd Amendment (2019): 10% EWS reservation — upheld by SC in Janhit Abhiyan (2022).',
    'Indra Sawhney (1992): 50% ceiling on reservation. "Creamy layer" concept for OBCs.',
    'MGNREGA (2005): 100 days guaranteed employment — world\'s largest rights-based employment programme.',
    'Vishaka (1997): SC guidelines on sexual harassment at workplace — replaced by POSH Act, 2013.',
  ],
  comparisons: [
    { title: 'Key Rights Legislation', headers: ['Right', 'Legislation/Amendment', 'Year'], rows: [
      ['Education', 'Art 21A (86th Amendment) + RTE Act', '2002/2009'],
      ['Food', 'National Food Security Act', '2013'],
      ['Employment', 'MGNREGA', '2005'],
      ['Information', 'RTI Act', '2005'],
      ['Privacy', 'DPDP Act (post-Puttaswamy)', '2023'],
    ]},
  ],
  mnemonics: [
    { title: 'Art 21 Expansion Cases — "MOPP"', mnemonic: 'Maneka Gandhi (due process), Olga Tellis (livelihood), Puttaswamy (privacy), Paschim Banga (health)', explanation: 'Four landmark cases that expanded Article 21 to include due process, livelihood, privacy, and health.' },
    { title: 'Section 377 & 66A — "2018 & 2015"', mnemonic: 'Navtej Johar struck 377 (2018), Shreya Singhal struck 66A (2015)', explanation: 'Two landmark cases striking down criminal provisions that restricted personal liberty and speech.' },
  ],
}
