import type { SubjectRevision } from '@/types/subject-notes'

export const amendmentProcedureRevision: SubjectRevision = {
  topic: 'amendment-procedure',
  bullets: [
    'Art 368: three methods — simple majority, special majority, special majority + state ratification.',
    'Simple majority: Art 2, 3, 4 (new states/boundaries), Art 169 (state legislative councils), Second Schedule (salaries).',
    'Special majority: 2/3 of members present and voting AND majority of total membership of each House. Most provisions.',
    'Special majority + ratification by half the states: federal provisions — President election, SC/HC, Seventh Schedule lists, Art 368 itself.',
    'Amendment bill: either House, by minister or private member, no President\'s prior permission, no joint sitting.',
    'President MUST give assent to amendment bills (24th Amendment clarified).',
    'Kesavananda Bharati (1973): Basic Structure Doctrine — Parliament can amend but cannot destroy basic structure. 7:6 in 13-judge bench.',
    'Basic structure features: sovereignty, democracy, republic, secularism, separation of powers, federalism, judicial review, rule of law, FR essence, free and fair elections.',
    'Key amendments: 1st (Art 15(4), Ninth Schedule), 42nd ("Mini Constitution"), 44th (emergency safeguards), 52nd (anti-defection), 73rd-74th (local government), 86th (RTE), 101st (GST), 103rd (EWS reservation).',
    'Golaknath (1967): FRs cannot be amended. 24th Amendment (1971): restored power. Kesavananda (1973): can amend but basic structure limits.',
    'Minerva Mills (1980): balance between FRs and DPSPs is basic structure. I.R. Coelho (2007): Ninth Schedule laws subject to basic structure test.',
  ],
  comparisons: [
    {
      title: 'Landmark Amendment Cases',
      headers: ['Case', 'Year', 'Key Ruling'],
      rows: [
        ['Shankari Prasad', '1951', 'Parliament CAN amend FRs'],
        ['Golaknath', '1967', 'Parliament CANNOT amend FRs (overruled Shankari Prasad)'],
        ['24th Amendment', '1971', 'Restored Parliament\'s amending power'],
        ['Kesavananda Bharati', '1973', 'Can amend but cannot destroy basic structure'],
        ['Minerva Mills', '1980', 'FR-DPSP balance is basic structure; Art 368(4)(5) struck down'],
        ['I.R. Coelho', '2007', 'Ninth Schedule laws can be tested against basic structure'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Basic Structure Features (SDSF JRF)',
      mnemonic: 'Sovereignty, Democracy, Secularism, Separation of powers, Federalism, Judicial review, Rule of law, Free elections',
      explanation: 'Key features identified as part of the basic structure across various SC judgments.',
    },
  ],
}
