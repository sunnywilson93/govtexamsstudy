import type { SubjectConcept } from '@/types/subject-notes'

export const highCourtsConcept: SubjectConcept = {
  topic: 'high-courts',
  title: 'High Courts',
  description:
    'High Courts are the highest courts at the state level, established under Article 214. They exercise original, appellate, and writ jurisdiction. Every state has a High Court, though a single HC can serve two or more states. Currently, India has 25 High Courts.',
  category: 'Judiciary',
  keyDates: [
    { year: '1862', event: 'First three High Courts established at Calcutta, Bombay, and Madras under the Indian High Courts Act 1861' },
    { year: '1866', event: 'Allahabad High Court established (fourth oldest HC)' },
    { year: '1950', event: 'Constitutional provisions for High Courts came into force (Art 214-231)' },
    { year: '2013', event: 'Manipur, Meghalaya, and Tripura got separate High Courts (carved from Gauhati HC)' },
    { year: '2019', event: 'Andhra Pradesh got a separate High Court at Amaravati (carved from the common HC at Hyderabad after bifurcation of AP)' },
    { year: '2024', event: 'India has 25 High Courts; Telangana and Andhra Pradesh have separate HCs' },
  ],
  notes: [
    {
      section: 'Composition and Appointment',
      content:
        'Each HC consists of a Chief Justice and such number of judges as the President may determine (Art 216). There is no fixed strength — it varies by state. Qualifications (Art 217): citizen of India; must have held a judicial office in India for at least 10 years, or been an advocate of a HC for at least 10 years. Appointment: by the President after consultation with the CJI, the Governor of the state, and (for judges other than CJ) the Chief Justice of the concerned HC. Under the Collegium system, the CJI and two senior-most SC judges recommend HC appointments. The CJ of the HC is appointed based on seniority among HC judges (convention, with exceptions). Judges serve until 62 years. Transfer of HC judges from one HC to another is done by the President after consultation with the CJI (Art 222).',
    },
    {
      section: 'Jurisdiction of High Courts',
      content:
        'Original Jurisdiction: enforcement of Fundamental Rights and other legal rights (Art 226 — broader than SC\'s Art 32 as HC writs can be issued for any purpose, not just FRs); revenue matters; cases under company law and election petitions. Appellate Jurisdiction: appeals from subordinate courts in civil and criminal matters. Writ Jurisdiction (Art 226): HCs can issue writs of habeas corpus, mandamus, prohibition, certiorari, and quo warranto — broader than the SC because Art 226 allows writs "for any other purpose" beyond just Fundamental Rights enforcement. Supervisory Jurisdiction (Art 227): HC has superintendence over all courts and tribunals within its jurisdiction (except military tribunals). The HC can call for records, issue rules for practice and procedure, and transfer cases. Court of Record (Art 215): HC is a court of record — its judgments are evidence and cannot be questioned; it can punish for contempt.',
    },
    {
      section: 'HC vs SC — Comparison of Writ Jurisdiction',
      content:
        'Both SC (Art 32) and HC (Art 226) can issue the same five writs. However, key differences: Art 32 is a Fundamental Right itself; Art 226 is not. Art 32 writs are issued only for enforcement of Fundamental Rights; Art 226 writs can be issued for Fundamental Rights AND "for any other purpose" (e.g., enforcement of legal rights). Art 32 makes the SC the "guarantor" of FRs; HCs are an additional forum. A person can approach the HC first or directly go to the SC (no requirement to exhaust HC remedy before approaching SC for FRs, though the SC may refuse if adequate remedy exists). Art 32 cannot be suspended except under Art 359 during Emergency; Art 226 can be suspended during Emergency to the extent of enforcement of suspended FRs. The SC in L. Chandra Kumar v. Union of India (1997) held that judicial review under Art 226/227 is part of the basic structure.',
    },
    {
      section: 'Administrative Functions',
      content:
        'The HC has control over subordinate courts (Art 227-235). The Chief Justice of the HC appoints, posts, and promotes district judges (in consultation with the Governor and state government — Art 233). The HC oversees the working of subordinate courts and can transfer judges. The HC maintains the judicial infrastructure of the state and prescribes rules of procedure for subordinate courts. The HC also plays a role in the appointment of judicial magistrates and civil judges (Art 234 — in consultation with the State PSC and the HC). These administrative functions are crucial for maintaining judicial standards across the state judiciary.',
    },
    {
      section: 'Independence and Safeguards',
      content:
        'Similar to the SC, HC judges enjoy several safeguards: security of tenure (removal only through the same impeachment process as SC judges — Art 218 read with Art 124(4)); conditions of service cannot be varied to their disadvantage (Art 221); salaries charged on the Consolidated Fund of the State (non-votable); conduct cannot be discussed in state legislature except during removal; post-retirement practice is allowed but not in the same HC where they served (or in subordinate courts under that HC). Additional judges can be appointed for a period not exceeding 2 years (Art 224). Acting CJ can be appointed by the President when the CJ\'s office is vacant (Art 223).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'High-yield for all exams. Key areas: Art 226 vs Art 32 comparison, qualifications and retirement age (62 for HC vs 65 for SC), appointment process, number of HCs, which states share HCs, supervisory jurisdiction under Art 227, and administrative control over subordinate courts. The L. Chandra Kumar case on judicial review is frequently tested.',
}
