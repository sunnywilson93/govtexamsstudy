import type { SubjectRevision } from '@/types/subject-notes'
export const parliamentaryPrivilegesRevision: SubjectRevision = {
  topic: 'parliamentary-privileges',
  bullets: [
    'Art 105: Powers, privileges, immunities of Parliament and members. Art 194: Same for state legislatures.',
    'Art 105(1): Freedom of speech in Parliament — subject to Constitution and rules/standing orders.',
    'Art 105(2): No member liable in any court for anything said or vote given in Parliament or committee. ABSOLUTE immunity.',
    'Art 105(3): Originally referenced UK House of Commons privileges. 44th Amendment (1978) removed this reference.',
    'Parliament has NOT codified privileges (despite Art 105(3) empowering it to do so) — creating legal uncertainty.',
    'Freedom from arrest: Civil cases only — during session + 40 days before and after. Does NOT cover criminal cases.',
    'Sita Soren v. UOI (2023): Overruled JMM bribery case (1998). Bribery for votes NOT protected by parliamentary privilege.',
    'JMM bribery case (1998): 3-2 majority had held that votes in Parliament are immune even if influenced by bribery.',
    'Raja Ram Pal v. Speaker (2007): Parliament CAN expel members but this power is subject to judicial review.',
    'Collective privileges: publish debates, exclude strangers, punish for contempt, regulate internal proceedings.',
    'Individual privileges: free speech, freedom from arrest (civil), freedom from jury service, freedom from witness duty.',
    'Art 122: Courts CANNOT inquire into validity of parliamentary proceedings. But can review if privilege exceeded (Keshav Singh).',
    'Keshav Singh Case (1964): UP Assembly vs Allahabad HC. SC held privilege claims are NOT beyond judicial review.',
    'Searchlight Case (1954): Bihar Assembly punished newspaper editors for premature publication of proceedings.',
    'Contempt of House is broader than breach of privilege — includes any act obstructing House or member functions.',
    'Parliamentary Proceedings (Protection of Publication) Act, 1977: Protects reporting of authorized proceedings.',
  ],
  comparisons: [
    { title: 'Art 105 vs Art 194', headers: ['Feature', 'Art 105 (Parliament)', 'Art 194 (State Legislature)'], rows: [
      ['Scope', 'Parliament and MPs', 'State legislature and MLAs/MLCs'],
      ['Free speech', 'Art 105(1)', 'Art 194(1)'],
      ['Court immunity', 'Art 105(2)', 'Art 194(2)'],
      ['Codification', 'Not codified', 'Not codified'],
      ['Applies to', 'Central level', 'State level'],
    ]},
  ],
  mnemonics: [
    { title: 'Freedom from Arrest — "40-Civil-Only"', mnemonic: '40 days before/after session, Civil cases only, Criminal NOT included', explanation: 'MPs enjoy freedom from arrest in civil cases during and 40 days around sessions. Criminal cases are not covered.' },
    { title: 'Sita Soren Overruled JMM — "2023>1998"', mnemonic: 'Sita Soren (2023) overruled JMM bribery case (1998) — bribery NOT protected', explanation: 'The 7-judge bench in 2023 held that bribery related to parliamentary votes is not protected by privilege.' },
  ],
}
