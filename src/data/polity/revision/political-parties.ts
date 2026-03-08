import type { SubjectRevision } from '@/types/subject-notes'
export const politicalPartiesRevision: SubjectRevision = {
  topic: 'political-parties',
  bullets: [
    'Constitution originally did NOT mention political parties. First recognition: 52nd Amendment (1985) — Anti-Defection Law, Tenth Schedule.',
    'Registration under Section 29A of RPA, 1951 with the Election Commission of India.',
    'National party criteria: (a) 6% votes in 4+ states + 4 LS seats; OR (b) 2% LS seats from 3+ states; OR (c) state party in 4+ states.',
    'State party criteria: (a) 6% votes + 2 assembly seats; OR (b) 6% + 1 LS seat; OR (c) 3% assembly seats or 3 seats; OR (d) 1 LS seat per 25 allotted.',
    'As of 2024: 6 national parties, 50+ state parties, ~2,800 registered unrecognized parties.',
    'INC (1885) — oldest party. All India Muslim League (1906, Dhaka). BJP emerged from Bharatiya Jan Sangh (1951).',
    'Electoral Bonds: introduced 2018, struck down by SC in February 2024 as violating right to information (Art 19(1)(a)).',
    'ECI can register but has limited power to deregister parties (Subramanian Swamy v. ECI, 2008).',
    'Section 29B RPA: Donations from individuals and companies. Section 13A IT Act: Tax exemption for parties.',
    'No specific law on inner-party democracy or lobbying regulation in India.',
    'CIC ruled (2013) six national parties are "public authorities" under RTI — parties refuse compliance.',
    'NOTA introduced by SC in PUCL v. UOI (2013) — right to reject all candidates but doesn\'t affect election outcome.',
    'Lily Thomas v. UOI (2013): Convicted MPs/MLAs with 2+ years sentence immediately disqualified.',
    'ADR case (2002): Candidates must declare criminal record, assets, educational qualifications.',
    'Coalition politics dominant since 1989: NDA (BJP-led), UPA (Congress-led). Single-party dominance pre-1967.',
  ],
  comparisons: [
    { title: 'National vs State Party Recognition', headers: ['Criteria', 'National Party', 'State Party'], rows: [
      ['Vote share', '6% in 4+ states', '6% in the state'],
      ['Seats', '4 LS seats from any state(s)', '2 assembly or 1 LS seat'],
      ['Alternative', '2% LS seats from 3+ states', '3% assembly seats or 3 seats'],
      ['Or', 'State party in 4+ states', '1 LS seat per 25 allotted'],
    ]},
  ],
  mnemonics: [
    { title: 'First Constitutional Recognition — "52nd = Tenth"', mnemonic: '52nd Amendment added Tenth Schedule (Anti-Defection) — first mention of political parties', explanation: 'The 52nd Amendment (1985) was the first constitutional recognition of political parties through the Tenth Schedule.' },
    { title: 'Electoral Bonds Struck Down — "19(1)(a) 2024"', mnemonic: 'Art 19(1)(a) right to information — SC struck down Electoral Bonds in 2024', explanation: 'The SC held that anonymous political donations violated the voter\'s right to know about political funding.' },
  ],
}
