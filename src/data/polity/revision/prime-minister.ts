import type { SubjectRevision } from '@/types/subject-notes'

export const primeMinisterRevision: SubjectRevision = {
  topic: 'prime-minister',
  bullets: [
    'Art 74: Council of Ministers headed by PM to aid and advise the President. Art 75: PM appointed by President; other ministers on PM\'s advice.',
    'PM is the leader of the majority party in Lok Sabha (convention). If not a member, must become one within 6 months.',
    'PM is the real executive; President is the constitutional (nominal) head.',
    'Art 75(3): Council of Ministers collectively responsible to Lok Sabha (swim and sink together).',
    '91st Amendment (2003): Council of Ministers capped at 15% of total Lok Sabha membership (max 81 ministers).',
    'Three categories of ministers: Cabinet Ministers, Ministers of State (Independent Charge), Ministers of State/Deputy Ministers.',
    'Cabinet is a smaller body within the Council of Ministers — makes all key decisions. Term "Cabinet" first mentioned in Art 352 (44th Amendment).',
    'Art 78: PM\'s duty — communicate Council decisions to President, furnish information, submit matters for Council consideration if individual minister decided.',
    'Collective responsibility: all ministers support Cabinet decisions publicly. Cabinet secrecy under Art 74(2).',
    'Individual responsibility: ministers hold office at PM\'s pleasure; PM can ask any minister to resign.',
    'If PM resigns, entire Council of Ministers falls. No-confidence motion in LS requires entire Council to resign.',
    'PM chairs: NITI Aayog, National Development Council, Inter-State Council, Nuclear Command Authority, National Disaster Management Authority.',
  ],
  comparisons: [
    {
      title: 'Cabinet vs Council of Ministers',
      headers: ['Aspect', 'Cabinet', 'Council of Ministers'],
      rows: [
        ['Composition', 'Only Cabinet-rank ministers', 'All ministers (Cabinet + MoS + Deputy)'],
        ['Size', 'Smaller (15-25 typically)', 'Up to 15% of LS strength'],
        ['Constitutional mention', 'First mentioned by 44th Amendment (Art 352)', 'Art 74-75'],
        ['Meetings', 'Meets frequently', 'Rarely meets as a whole'],
        ['Decision-making', 'Supreme decision-making body', 'Collectively responsible to LS'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'PM\'s Bodies (NINI+ND)',
      mnemonic: 'NITI Aayog, Inter-State Council, NDC, Nuclear Command, National DMA',
      explanation: 'Key bodies chaired by the Prime Minister.',
    },
  ],
}
