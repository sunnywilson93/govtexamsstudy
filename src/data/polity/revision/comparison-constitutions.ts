import type { SubjectRevision } from '@/types/subject-notes'
export const comparisonConstitutionsRevision: SubjectRevision = {
  topic: 'comparison-constitutions',
  bullets: [
    'British: Parliamentary system, rule of law, single citizenship, legislative procedure, Speaker, Cabinet, bicameralism, writs.',
    'USA: Fundamental Rights, judicial review, independence of judiciary, written constitution, federal structure, VP presides upper house, impeachment, Preamble.',
    'Ireland: DPSPs, nomination to Rajya Sabha (12 members), method of presidential election (proportional representation, STV).',
    'Canada: Federation with strong centre, residuary powers with Centre (Art 248), appointment of Governors by Centre, advisory jurisdiction of SC (Art 143).',
    'Australia: Concurrent List, freedom of trade/commerce (Art 301), joint sitting to resolve deadlocks (Art 108).',
    'Germany (Weimar): Suspension of FRs during Emergency, federal emergency converting federation to unitary state.',
    'South Africa: Amendment procedure (Art 368), election of RS members (indirect election).',
    'Japan: "Procedure established by law" in Art 21 (not "due process" — but Maneka Gandhi effectively imported due process).',
    'France: Liberty, Equality, Fraternity in Preamble. Republic concept.',
    'USSR (Soviet): Fundamental Duties (Art 51A, 42nd Amendment 1976). Five Year Plan concept.',
    'Government of India Act, 1935: Single LARGEST source. Federal scheme, Governor, emergency, PSCs, three lists, administrative structure.',
    'Estimated 250 of original 395 articles drawn from the GoI Act, 1935.',
    'India\'s unique features: longest written constitution, basic structure doctrine, integrated judiciary, blend of rigid and flexible.',
    'Panchayati Raj as constitutional institution (73rd/74th), comprehensive SC/ST/OBC provisions — no other constitution has these.',
    'Constituent Assembly studied 60+ constitutions. Dr. Ambedkar: "not necessary to be original, must meet country\'s needs."',
  ],
  comparisons: [
    { title: 'Features Borrowed from Different Countries', headers: ['Country', 'Features Borrowed'], rows: [
      ['Britain', 'Parliamentary system, Rule of law, Single citizenship, Cabinet system'],
      ['USA', 'Fundamental Rights, Judicial review, Federal structure, Preamble "We the People"'],
      ['Ireland', 'DPSPs, RS nominations, Presidential election method'],
      ['Canada', 'Strong centre, Residuary powers, Governor appointment, Advisory jurisdiction'],
      ['Australia', 'Concurrent List, Joint sitting, Freedom of trade'],
      ['Germany', 'Emergency provisions, FR suspension'],
      ['USSR', 'Fundamental Duties, Five Year Plans'],
      ['Japan', '"Procedure established by law" (Art 21)'],
      ['GoI Act 1935', 'Federal scheme, Emergency, PSCs, Three lists'],
    ]},
  ],
  mnemonics: [
    { title: 'Ireland = "DPN"', mnemonic: 'DPSPs, Presidential election, Nominations to RS', explanation: 'Three features borrowed from the Irish Constitution.' },
    { title: 'Canada = "FRAG"', mnemonic: 'Federation strong centre, Residuary powers, Advisory jurisdiction, Governor appointment', explanation: 'Four features borrowed from the Canadian Constitution.' },
    { title: 'Australia = "CJF"', mnemonic: 'Concurrent list, Joint sitting, Freedom of trade', explanation: 'Three features borrowed from the Australian Constitution.' },
  ],
}
