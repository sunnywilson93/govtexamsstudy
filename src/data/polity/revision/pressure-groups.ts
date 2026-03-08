import type { SubjectRevision } from '@/types/subject-notes'
export const pressureGroupsRevision: SubjectRevision = {
  topic: 'pressure-groups',
  bullets: [
    'Pressure groups influence policy without contesting elections — unlike political parties.',
    'Types: Institutional, Associational, Non-associational, Anomic (spontaneous/violent).',
    'Business groups: FICCI (1927), CII (1895), ASSOCHAM (1920), NASSCOM — influence economic policy.',
    'Trade unions: AITUC (1920, CPI), INTUC (1947, Congress), BMS (1955, RSS — largest), HMS (1948), CITU (1970, CPI(M)).',
    'Agrarian: BKU (Tikait), All India Kisan Sabha. 2020-21 farmers\' protest — SKM coalition of 40+ unions, led to repeal of 3 farm laws.',
    'Environmental: Chipko (1973, Bahuguna/Bhatt), Narmada Bachao Andolan (1985, Medha Patkar), Silent Valley Movement (Kerala).',
    'Civil society: MKSS (Aruna Roy — RTI movement), NCPRI, India Against Corruption (Anna Hazare 2011 — Lokpal).',
    'Caste/religious: RSS (1925, largest voluntary org), VHP, AIMPLB, Dalit Panthers, various OBC federations.',
    'Student organizations: ABVP (RSS), SFI (CPI(M)), NSUI (Congress), AISA (CPI(ML)).',
    'Methods: lobbying, PIL, demonstrations/strikes, media campaigns, research/advocacy, participation in govt committees.',
    'India has NO specific legislation regulating lobbying (unlike US — Lobbying Disclosure Act, 1995).',
    'Most Indian trade unions are affiliated to political parties — unique feature of Indian pressure group system.',
    'Rajni Kothari described the relationship as "mutual influence and interaction" between pressure groups and parties.',
    'Right to form associations under Art 19(1)(c) implicitly protects pressure group activities.',
    'Peter Odegard coined the term "pressure group" in his study of the Anti-Saloon League (1928).',
  ],
  comparisons: [
    { title: 'Pressure Groups vs Political Parties', headers: ['Feature', 'Pressure Groups', 'Political Parties'], rows: [
      ['Elections', 'Do not contest', 'Contest elections'],
      ['Power', 'Influence policy', 'Seek to form government'],
      ['Focus', 'Specific issues', 'Comprehensive programme'],
      ['Accountability', 'To members only', 'To electorate'],
      ['Examples', 'FICCI, BKU, MKSS', 'BJP, INC, TMC'],
    ]},
  ],
  mnemonics: [
    { title: 'Trade Union — Party Links', mnemonic: 'AITUC=CPI, INTUC=Congress, BMS=RSS/BJP, CITU=CPI(M), HMS=Socialist', explanation: 'Major trade unions and their affiliated political parties/organizations.' },
    { title: 'Environmental Movements — "CNS"', mnemonic: 'Chipko (1973), Narmada (1985), Silent Valley (1973-85)', explanation: 'Three landmark environmental pressure group movements in India.' },
  ],
}
