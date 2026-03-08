import type { SubjectRevision } from '@/types/subject-notes'

export const emergencyProvisionsRevision: SubjectRevision = {
  topic: 'emergency-provisions',
  bullets: [
    'Part XVIII, Art 352-360. Three types: National (352), State/President\'s Rule (356), Financial (360).',
    'National Emergency (Art 352): grounds — war, external aggression, armed rebellion (44th Amendment changed from "internal disturbance").',
    'Art 352 requires written advice of Cabinet (44th Amendment). Approval within 1 month by special majority.',
    'Declared 3 times: 1962 (Chinese aggression), 1971 (Pakistan war), 1975 (internal disturbance).',
    'Art 358: Art 19 (freedoms) automatically suspended during Emergency for war/external aggression ONLY (not armed rebellion — 44th Amendment).',
    'Art 359: President can suspend enforcement of FRs by order. Art 20 and 21 CANNOT be suspended (44th Amendment).',
    'President\'s Rule (Art 356): Governor reports or President satisfied; initially 6 months; max 3 years with parliamentary approval.',
    'S.R. Bommai (1994): floor test is the only test of majority; assembly not dissolved until Parliament approves; judicial review available.',
    'President\'s Rule imposed 130+ times. Art 365: non-compliance with Union directions can trigger Art 356.',
    'Financial Emergency (Art 360): never declared; President can direct salary reductions including judges; continues until revoked.',
    '44th Amendment safeguards: written Cabinet advice; "armed rebellion" threshold; Art 20/21 non-suspendable; 1/10 LS members can requisition session for revocation; LS can revoke by simple majority.',
  ],
  comparisons: [
    {
      title: 'Three Types of Emergencies',
      headers: ['Feature', 'National (Art 352)', 'State (Art 356)', 'Financial (Art 360)'],
      rows: [
        ['Grounds', 'War, external aggression, armed rebellion', 'Constitutional machinery failure', 'Financial stability threatened'],
        ['Declared by', 'President', 'President', 'President'],
        ['Approval', 'Special majority within 1 month', 'Simple majority within 2 months', 'Simple majority within 2 months'],
        ['Duration', '6 months at a time; indefinite', '6 months; max 3 years', 'Until revoked'],
        ['Times declared', '3 times', '130+ times', 'Never'],
        ['Effect on FRs', 'Art 19 suspended (war/aggression only); Art 20,21 not suspendable', 'No direct effect on FRs', 'No direct effect on FRs'],
      ],
    },
  ],
  mnemonics: [
    {
      title: '44th Amendment Emergency Safeguards (WART)',
      mnemonic: 'Written Cabinet advice, Armed rebellion (not internal disturbance), Rights 20+21 protected, Tenth of LS can requisition revocation session',
      explanation: 'The four key safeguards introduced by the 44th Amendment against emergency misuse.',
    },
  ],
}
