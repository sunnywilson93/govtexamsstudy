import type { SubjectRevision } from '@/types/subject-notes'

export const highCourtsRevision: SubjectRevision = {
  topic: 'high-courts',
  bullets: [
    'Art 214: HC for every state. Currently 25 HCs. First 3 HCs: Calcutta, Bombay, Madras (1862).',
    'Qualifications (Art 217): citizen, judicial office 10+ years OR HC advocate 10+ years. Retirement: 62 years (vs SC 65).',
    'Appointment: by President after consulting CJI, Governor, and CJ of concerned HC. Collegium (CJI + 2 senior SC judges) recommends.',
    'Art 226: writ jurisdiction — broader than SC\'s Art 32 (writs for "any purpose," not just FRs).',
    'Art 227: supervisory jurisdiction over all courts and tribunals within its territory.',
    'Art 215: HC is a court of record — can punish for contempt.',
    'Art 228: HC can transfer cases from subordinate courts involving substantial constitutional questions.',
    'Art 233-235: HC controls subordinate courts — appoints, posts, promotes district judges.',
    'L. Chandra Kumar (1997): judicial review under Art 226/227 is part of the basic structure.',
    'Transfer of HC judges: by President after consulting CJI (Art 222).',
    'Additional judges: appointed for up to 2 years (Art 224). Acting CJ: appointed by President when CJ office vacant (Art 223).',
    'Post-retirement: HC judges can practice but NOT in the same HC or subordinate courts under it.',
  ],
  comparisons: [
    {
      title: 'SC vs HC — Key Differences',
      headers: ['Aspect', 'Supreme Court', 'High Court'],
      rows: [
        ['Article', 'Art 124-147', 'Art 214-231'],
        ['Number', '1 (apex)', '25'],
        ['Retirement age', '65 years', '62 years'],
        ['Writ scope', 'Only for FRs (Art 32)', 'For any purpose (Art 226)'],
        ['Binding precedent', 'Binding on ALL courts (Art 141)', 'Binding on subordinate courts within jurisdiction'],
        ['Salary charged on', 'Consolidated Fund of India', 'Consolidated Fund of State'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'HC Retirement Age',
      mnemonic: 'HC 62, SC 65 — High Courts retire three years earlier',
      explanation: 'SC judges retire at 65 and HC judges at 62.',
    },
  ],
}
