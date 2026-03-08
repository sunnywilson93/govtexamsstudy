import type { SubjectRevision } from '@/types/subject-notes'

export const primeMinisterRevision: SubjectRevision = {
  topic: 'prime-minister',
  bullets: [
    'Art 74(1): Council of Ministers headed by PM to aid and advise the President — "shall" act on advice (42nd Amendment). 44th Amendment: President can return advice once for reconsideration.',
    'Art 74(2): advice tendered to President shall not be inquired into by any court — Cabinet secrecy.',
    'Art 75(1): PM appointed by President; other ministers appointed by President on PM\'s advice. Art 75(2): ministers hold office during pleasure of President (effectively PM).',
    'Art 75(3): Council of Ministers collectively responsible to Lok Sabha — "swim and sink together." If PM resigns, entire Council falls.',
    'Art 75(5): minister who is not a member of either House for 6 consecutive months ceases to be a minister.',
    '91st Amendment (2003): Council of Ministers capped at 15% of total LS membership (max 81); Art 75(1A) — member disqualified under Tenth Schedule cannot be a minister.',
    'PM is the leader of majority party in LS (convention). If no clear majority, President uses discretion. S.R. Bommai (1994): floor test is the only way to test majority.',
    'PM can be from either House — Manmohan Singh served from Rajya Sabha (2004-2014). Indira Gandhi was initially a RS member (1966).',
    'Three categories of ministers: Cabinet Ministers (attend Cabinet), Ministers of State (Independent Charge), Ministers of State/Deputy Ministers. Only "Council of Ministers" in Constitution until 44th Amendment added "Cabinet" (Art 352).',
    'Art 78: PM\'s duty — (a) communicate all decisions of CoM to President, (b) furnish information on Union affairs, (c) submit matters for CoM consideration if individual minister has decided.',
    'PM chairs: NITI Aayog, National Development Council, Inter-State Council (Art 263), National Integration Council, Nuclear Command Authority (Political Council), National Disaster Management Authority.',
    'Cabinet Committee on Security (CCS): PM + Defence + External Affairs + Home + Finance. Appointments Committee of Cabinet (ACC): PM + Home Minister only.',
    'Cabinet Secretariat headed by Cabinet Secretary — senior-most civil servant; ex-officio head of civil services.',
    'Collective responsibility: all ministers publicly support Cabinet decisions. Individual responsibility: ministers answerable to PM; PM can dismiss. No legal responsibility: no countersignature required (unlike UK).',
    'Lal Bahadur Shastri resigned as Railway Minister (1956) after a train accident — the gold standard of individual ministerial responsibility.',
    'No-confidence motion: only in LS; needs 50 members to admit; simple majority to pass. Notable: 1999 Vajpayee lost by 1 vote (270 vs 269). 2018 Modi defeated it (325 vs 126).',
    'Charan Singh (1979): only PM who never faced Parliament — his government fell before a single sitting.',
    'Jawaharlal Nehru — longest-serving PM (16+ years). Atal Bihari Vajpayee — shortest (13 days in 1996). Vajpayee — first non-Congress PM to complete full term (1999-2004).',
    'Caretaker government handles only routine matters during dissolution/election period; subject to ECI\'s Model Code of Conduct.',
    'The 1975 Emergency was proclaimed without full Cabinet consultation — 44th Amendment now requires "Cabinet\'s written recommendation" for Art 352.',
    '"Kitchen Cabinet" — PM\'s informal inner circle. "Inner Cabinet" — informal subset of senior Cabinet ministers. Both criticized for undermining collective responsibility.',
    'Government of India (Transaction of Business) Rules, 1961: govern Cabinet functioning, allocation of business, and committee procedures.',
    'PM described as "primus inter pares" (first among equals) but in practice wields dominant authority — "keystone of the cabinet arch" (Ivor Jennings).',
    'Narendra Modi (2014): first PM born in independent India. First single-party majority after 30 years of coalition era.',
    'Art 77: all executive actions taken in President\'s name; PM makes rules for convenient transaction of business and allocation among ministers.',
    'President K.R. Narayanan twice returned CoM advice — Bihar President\'s Rule (1998) and UP (1999) — demonstrating the 44th Amendment proviso.',
  ],
  comparisons: [
    {
      title: 'Cabinet vs Council of Ministers',
      headers: ['Aspect', 'Cabinet', 'Council of Ministers'],
      rows: [
        ['Composition', 'Only Cabinet-rank ministers (15-25 typically)', 'All ministers — Cabinet + MoS (IC) + MoS + Deputy Ministers'],
        ['Constitutional status', 'First mentioned by 44th Amendment in Art 352', 'Art 74-75 (original Constitution)'],
        ['Meetings', 'Meets frequently (weekly or as needed)', 'Rarely meets as a whole body'],
        ['Decision-making', 'Supreme decision-making body', 'Collectively responsible to LS (Art 75(3))'],
        ['Size', 'Smaller (PM + senior ministers)', 'Up to 15% of LS strength (91st Amendment, max 81)'],
        ['Binding nature', 'Decisions binding on all ministers', 'All ministers bound by collective responsibility'],
      ],
    },
    {
      title: 'Three Types of Ministerial Responsibility',
      headers: ['Type', 'Provision', 'Meaning'],
      rows: [
        ['Collective', 'Art 75(3)', 'All ministers swim and sink together; CoM responsible to LS as a whole'],
        ['Individual', 'Convention + Art 75(2)', 'Each minister accountable to PM; can be asked to resign; answerable to Parliament'],
        ['Legal', 'Absent in India', 'No countersignature on Presidential orders; unlike UK where royal acts need ministerial counter-signature'],
      ],
    },
    {
      title: 'PM vs President — Real vs Nominal Executive',
      headers: ['Aspect', 'Prime Minister', 'President'],
      rows: [
        ['Nature', 'Real (de facto) executive', 'Nominal (de jure) executive'],
        ['Source of power', 'Lok Sabha confidence', 'Constitution (Art 52-53)'],
        ['Decision-making', 'Makes all executive decisions via CoM', 'Acts on CoM advice (Art 74)'],
        ['Accountability', 'Directly accountable to LS', 'Not accountable to Parliament (only impeachment)'],
        ['Removal', 'Loss of LS confidence', 'Impeachment for "violation of Constitution"'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'PM\'s Bodies — "NINI-ND"',
      mnemonic: 'NITI Aayog, Inter-State Council, NDC, Nuclear Command, National DMA',
      explanation: 'Five key bodies chaired by the Prime Minister.',
    },
    {
      title: 'Art 75 Clauses — "APCSMO"',
      mnemonic: 'Appointment (75(1)), Pleasure (75(2)), Collective responsibility (75(3)), Six months (75(5)), Minister cap (75(1A))',
      explanation: 'Key clauses of Article 75 governing the PM and Council of Ministers.',
    },
    {
      title: 'Cabinet Committees — "SEAP"',
      mnemonic: 'Security (CCS), Economic Affairs (CCEA), Appointments (ACC), Political Affairs (CCPA)',
      explanation: 'Four major Cabinet Committees — all chaired by the PM. ACC has only PM + Home Minister.',
    },
  ],
}
