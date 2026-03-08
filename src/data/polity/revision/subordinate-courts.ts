import type { SubjectRevision } from '@/types/subject-notes'
export const subordinateCourtsRevision: SubjectRevision = {
  topic: 'subordinate-courts',
  bullets: [
    'Articles 233-237 (Part VI, Chapter VI) deal with subordinate courts. Art 233: District judges appointed by Governor in consultation with HC.',
    'District Judge qualification: 7 years as advocate + recommended by HC (for direct recruitment from bar).',
    'Art 235: HC has "control" over subordinate courts — posting, transfer, promotion, leave, disciplinary action.',
    'Art 236: "District judge" includes additional/joint/assistant district judge, sessions judge, chief presidency magistrate.',
    'Civil hierarchy: District Court → Additional District Court → Sub-Court → Civil Judge (Senior) → Civil Judge (Junior)/Munsif.',
    'Criminal hierarchy: Sessions Court → Additional Sessions → CJM → JMFC (3 years max) → JM Second Class (1 year max).',
    'Sessions Judge = District Judge (same person). Can impose any sentence including death (subject to HC confirmation).',
    'CJM: imprisonment up to 7 years. JMFC: up to 3 years. JM Second Class: up to 1 year.',
    'Metropolitan Magistrates in cities with 1 million+ population — same powers as JMFC.',
    'Lok Adalats: Under Legal Services Authorities Act, 1987. Award = civil court decree. Final, no appeal. No court fees.',
    'Gram Nyayalayas Act, 2008: Village courts with civil and criminal powers. Mobile courts at grassroots.',
    'E-Courts Project: Phase I (computerization), Phase II (NJDG — National Judicial Data Grid), Phase III (e-filing, virtual hearings).',
    'Over 4.5 crore cases pending in subordinate courts (87% of total pendency). Judge-to-population: 21 per million.',
    'AIJS (All India Judicial Service) debate: Art 312 allows creation but never implemented. Supported by SC, opposed by HCs and bars.',
    'BNS, BNSS, BSA (2023) replaced IPC, CrPC, Evidence Act — restructured criminal court procedures.',
    'Family Courts Act, 1984: Separate courts for matrimonial disputes, custody, maintenance.',
  ],
  comparisons: [
    { title: 'Criminal Court Hierarchy and Sentencing Powers', headers: ['Court', 'Presiding Officer', 'Max Sentence'], rows: [
      ['Sessions Court', 'Sessions Judge', 'Any sentence including death'],
      ['Addl Sessions Court', 'Addl Sessions Judge', 'Any sentence except death'],
      ['CJM Court', 'Chief Judicial Magistrate', '7 years imprisonment'],
      ['JMFC Court', 'Judicial Magistrate First Class', '3 years imprisonment'],
      ['JM Second Class', 'Judicial Magistrate Second Class', '1 year imprisonment'],
    ]},
  ],
  mnemonics: [
    { title: 'Subordinate Courts Articles — "233-237"', mnemonic: '233=DJ appointment, 234=Other judges, 235=HC control, 236=Definitions, 237=Extension to magistrates', explanation: 'Five articles covering the constitutional framework of subordinate courts.' },
    { title: 'Criminal Sentencing — "Any-7-3-1"', mnemonic: 'Sessions=Any, CJM=7yrs, JMFC=3yrs, JMSC=1yr', explanation: 'Maximum sentencing powers of criminal courts in descending order.' },
  ],
}
