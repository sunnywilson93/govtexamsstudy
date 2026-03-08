import type { SubjectRevision } from '@/types/subject-notes'

export const supremeCourtRevision: SubjectRevision = {
  topic: 'supreme-court',
  bullets: [
    'Art 124: SC consists of CJI + other judges (currently 34 total). Inaugurated 28 January 1950. First CJI: H.J. Kania.',
    'Qualifications: citizen, HC judge for 5+ years OR HC advocate for 10+ years OR distinguished jurist. Retirement: 65 years.',
    'Appointment: by President; Collegium system (CJI + 4 senior-most SC judges recommend). NJAC (99th Amendment) struck down in 2015.',
    'Removal: impeachment — proved misbehavior/incapacity; special majority in each House (no SC judge ever impeached).',
    'Original Jurisdiction (Art 131): Union vs State(s) or State vs State disputes involving legal rights.',
    'Writ Jurisdiction (Art 32): 5 writs for FR enforcement only. Art 32 is itself a Fundamental Right.',
    'Appellate: Constitutional (Art 132), Civil (Art 133), Criminal (Art 134), Special Leave Petition (Art 136 — widest power).',
    'Advisory (Art 143): President can seek SC opinion on law/fact of public importance. Non-binding.',
    'Kesavananda Bharati (1973): Basic Structure Doctrine — Parliament can amend but cannot destroy basic structure. 7:6 majority in 13-judge bench.',
    'Maneka Gandhi (1978): SC read "due process" into Art 21 — procedure must be just, fair, and reasonable.',
    'Art 141: law declared by SC is binding on all courts. Art 142: power to do "complete justice." Art 129: court of record.',
    'PIL pioneered by Justice P.N. Bhagwati and Justice V.R. Krishna Iyer — relaxed locus standi.',
  ],
  comparisons: [
    {
      title: 'SC vs HC Writ Jurisdiction',
      headers: ['Aspect', 'SC (Art 32)', 'HC (Art 226)'],
      rows: [
        ['Scope', 'Only for Fundamental Rights', 'For any purpose (FRs + other legal rights)'],
        ['FR status', 'Art 32 is itself a FR', 'Art 226 is not a FR'],
        ['Suspension', 'Can be suspended during Emergency (Art 359)', 'Can be suspended for suspended FRs'],
        ['Territory', 'All India', 'Within HC jurisdiction'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'SC Jurisdiction Types (OWAA)',
      mnemonic: 'Original, Writ, Appellate, Advisory',
      explanation: 'The four types of jurisdiction exercised by the Supreme Court.',
    },
  ],
}
