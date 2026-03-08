import type { SubjectRevision } from '@/types/subject-notes'

export const governorRevision: SubjectRevision = {
  topic: 'governor',
  bullets: [
    'Art 153-167 deal with the state executive. Governor appointed by President (Art 155); not elected.',
    'Qualifications (Art 157): citizen of India, 35+ years. Term: 5 years; holds office during pleasure of President (Art 156).',
    'B.P. Singhal case (2010): Governor can be removed at any time but not arbitrarily; President need not give reasons.',
    'One Governor can serve two or more states (Art 153, 7th Amendment).',
    'Governor\'s pardoning power (Art 161): pardon, reprieve, respite, remission, commutation — but CANNOT pardon death sentences or court martial sentences (unlike President under Art 72).',
    'Discretionary powers: reserve bills for President; recommend President\'s Rule (Art 356); appoint CM when no clear majority; special responsibilities for tribal areas.',
    'Samsher Singh case (1974): Governor is a constitutional head; must normally act on ministerial advice.',
    'S.R. Bommai case (1994): Governor\'s report for Art 356 is subject to judicial review; floor test is the only way to test majority.',
    'Sarkaria Commission: Governor should be from outside the state; non-partisan; appointed after consulting CM; fixed 5-year tenure.',
    'Punchhi Commission: Governor should be removable only through impeachment by state legislature; fixed tenure.',
    'Governor can issue ordinances (Art 213) when state legislature not in session.',
    'Governor nominates 1/6 members of Vidhan Parishad (Art 171).',
  ],
  comparisons: [
    {
      title: 'President vs Governor',
      headers: ['Aspect', 'President', 'Governor'],
      rows: [
        ['Selection', 'Elected (Electoral College)', 'Appointed by President'],
        ['Removal', 'Impeachment only', 'At pleasure of President'],
        ['Pardoning power', 'Can pardon death sentences + court martial', 'Cannot pardon death sentences or court martial'],
        ['Emergency', 'Declares all 3 emergencies', 'Recommends Art 356 only'],
        ['Ordinance', 'Art 123', 'Art 213'],
        ['Discretion', 'Very limited', 'More discretionary powers'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Governor\'s Discretion (RCAS)',
      mnemonic: 'Reserve bills, Choose CM (hung assembly), Advise President\'s Rule, Special tribal responsibilities',
      explanation: 'The four main areas where the Governor exercises discretionary power.',
    },
  ],
}
