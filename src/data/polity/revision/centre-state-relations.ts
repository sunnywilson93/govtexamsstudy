import type { SubjectRevision } from '@/types/subject-notes'

export const centreStateRelationsRevision: SubjectRevision = {
  topic: 'centre-state-relations',
  bullets: [
    'Part XI (Art 245-263): legislative, administrative, financial relations between Centre and States.',
    'Seventh Schedule — 3 lists: Union List (100 subjects), State List (61 subjects), Concurrent List (52 subjects).',
    'Residuary powers with Parliament (Art 248 + Entry 97 of Union List).',
    'Concurrent List conflict: central law prevails (Art 254).',
    'Parliament can legislate on State List in 5 cases: RS resolution (Art 249), Emergency (Art 250), states\' agreement (Art 252), international treaties (Art 253), President\'s Rule (Art 356).',
    'Art 256: state executive must comply with central laws. Art 257: Centre can give directions to states.',
    'Inter-State Council (Art 263): PM as Chairman; CMs + Union Ministers. Established 1990 (Sarkaria recommendation).',
    'Finance Commission (Art 280): recommends tax revenue distribution between Centre and States.',
    'GST Council (Art 279A, 101st Amendment): Centre (1/3 weight) + States (2/3 weight); decisions by 3/4 majority.',
    'Sarkaria Commission (1983-88): Art 356 as last resort; Governor from outside state; strengthen Inter-State Council.',
    'Punchhi Commission (2007-10): Governor\'s fixed tenure; strengthen ISC; stricter Art 356 guidelines.',
    'Zonal Councils (5): statutory bodies under States Reorganisation Act 1956; chaired by Union Home Minister.',
  ],
  comparisons: [
    {
      title: 'Three Lists (Seventh Schedule)',
      headers: ['List', 'Subjects', 'Who Legislates', 'Examples'],
      rows: [
        ['Union List (I)', '100', 'Parliament only', 'Defence, foreign affairs, banking, currency, railways'],
        ['State List (II)', '61', 'State legislatures', 'Police, public health, agriculture, land, state taxes'],
        ['Concurrent List (III)', '52', 'Both (Centre prevails in conflict)', 'Criminal law, education, forests, trade unions'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'When Parliament legislates on State List (REAST)',
      mnemonic: 'RS Resolution (249), Emergency (250), Agreement of states (252), Satisfying treaties (253), Takeover/President\'s Rule (356)',
      explanation: 'The five circumstances when Parliament can legislate on State List subjects.',
    },
  ],
}
