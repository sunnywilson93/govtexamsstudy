import type { SubjectRevision } from '@/types/subject-notes'

export const parliamentRevision: SubjectRevision = {
  topic: 'parliament',
  bullets: [
    'Art 79: Parliament = President + Rajya Sabha (Council of States) + Lok Sabha (House of the People).',
    'RS: max 250 (238 elected by state/UT assemblies + 12 nominated by President). Permanent body; 1/3 retire every 2 years. Each member: 6-year term.',
    'LS: max 552 (530 states + 20 UTs + 2 Anglo-Indians — nomination deleted by 104th Amendment, 2020). Normal term: 5 years. Directly elected.',
    'Voting age: 18 years (61st Amendment, 1988 — reduced from 21).',
    'Quorum: 1/10 of total membership of each House (Art 100).',
    'Speaker presides over LS; elected from members; casting vote only; decides Money Bills; chairs Joint Sittings.',
    'VP is ex-officio Chairman of RS; Deputy Chairman elected from members.',
    'Money Bill (Art 110): only in LS; RS has 14 days to suggest; no joint sitting. Speaker certifies — decision is final.',
    'Joint Sitting (Art 108): for ordinary bills when Houses disagree. Speaker presides. Only 3 joint sittings ever: 1961 (Dowry), 1978 (Banking), 2002 (POTA).',
    'Question Hour: first hour — Starred (oral + supplementaries), Unstarred (written), Short Notice. Zero Hour: unofficial; after Question Hour.',
    'PAC: 22 members (15 LS + 7 RS); chaired by opposition member (convention since 1967); examines CAG reports.',
    'Estimates Committee: 30 members (all LS). Committee on Public Undertakings: 22 members (15 LS + 7 RS).',
  ],
  comparisons: [
    {
      title: 'Lok Sabha vs Rajya Sabha',
      headers: ['Aspect', 'Lok Sabha', 'Rajya Sabha'],
      rows: [
        ['Max strength', '552 (now 550 effective)', '250'],
        ['Election', 'Direct election', 'Indirect election (by state MLAs) + nomination'],
        ['Term', '5 years (dissolvable)', 'Permanent; members serve 6 years'],
        ['Presiding officer', 'Speaker', 'Chairman (Vice-President)'],
        ['Money Bills', 'Can originate; Exclusive power', 'Can only suggest within 14 days'],
        ['No-confidence motion', 'Only in Lok Sabha', 'Cannot be moved'],
        ['Council of Ministers responsible to', 'Lok Sabha', 'Not directly responsible'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Three Joint Sittings (DBP)',
      mnemonic: 'Dowry 1961, Banking 1978, POTA 2002',
      explanation: 'The only three instances of Joint Sittings of Parliament in Indian history.',
    },
  ],
}
