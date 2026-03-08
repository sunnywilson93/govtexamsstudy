import type { SubjectRevision } from '@/types/subject-notes'

export const chiefMinisterRevision: SubjectRevision = {
  topic: 'chief-minister',
  bullets: [
    'Art 163: Council of Ministers to aid and advise the Governor. Art 164: CM appointed by Governor; other ministers on CM\'s advice.',
    'CM is the leader of the majority party in Vidhan Sabha. Can be from either House (VS or VP).',
    'Art 164(2): Council of Ministers collectively responsible to Vidhan Sabha.',
    '91st Amendment (2003): State Council of Ministers capped at 15% of total VS strength, minimum 12.',
    'If CM resigns or loses confidence, entire Council of Ministers falls.',
    'Art 167: CM\'s duty — communicate Council decisions to Governor; furnish information.',
    'CM is the real executive; Governor is the constitutional (nominal) head at the state level.',
    'CM chairs: State Planning Board, State Disaster Management Authority.',
    'CM is member of: Inter-State Council, NITI Aayog Governing Council, concerned Zonal Council.',
    'Minister not a member of legislature for 6 consecutive months ceases to be a minister (Art 164(4)).',
  ],
  comparisons: [
    {
      title: 'Prime Minister vs Chief Minister',
      headers: ['Aspect', 'Prime Minister', 'Chief Minister'],
      rows: [
        ['Level', 'Union', 'State'],
        ['Appointed by', 'President', 'Governor'],
        ['Responsible to', 'Lok Sabha', 'Vidhan Sabha'],
        ['Scope', 'Union List + Concurrent', 'State List + Concurrent'],
        ['Military role', 'Advises Supreme Commander', 'No military role'],
        ['Chairs', 'NITI Aayog, Inter-State Council', 'State Planning Board'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'CM Articles (163-167)',
      mnemonic: '163 = Council advises, 164 = Appointment, 165 = Advocate General, 166 = Conduct of business, 167 = CM duties',
      explanation: 'The five key articles dealing with the state executive at the CM level.',
    },
  ],
}
