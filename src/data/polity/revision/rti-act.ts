import type { SubjectRevision } from '@/types/subject-notes'
export const rtiActRevision: SubjectRevision = {
  topic: 'rti-act',
  bullets: [
    'RTI Act, 2005 — passed 15 June 2005, effective 12 October 2005. Applies to whole of India.',
    'Right to information recognized as part of Art 19(1)(a) — State of UP v. Raj Narain (1975), S.P. Gupta (1982).',
    'Applies to all "public authorities" — constitutional, statutory, government-owned/controlled/substantially financed bodies.',
    'Application fee: Rs 10 (central govt). BPL applicants exempted from all fees.',
    'Time limit: 30 days for normal requests. 48 hours for matters involving life or liberty.',
    'Section 8: Lists exemptions — sovereignty/security, court-forbidden, Parliament privilege, trade secrets, cabinet papers, personal info.',
    'Section 8(2): Overrides Official Secrets Act, 1923 — info can be disclosed if public interest outweighs harm.',
    'Section 4: Proactive disclosure — "heart and soul" of the Act. 17 categories must be published suo motu.',
    'Two-tier appeal: 1st Appeal to FAA (within 30 days) → 2nd Appeal to CIC/SIC (within 90 days).',
    'CIC: Chief IC + max 10 ICs. Selection: PM (chair), LoP (LS), Cabinet Minister nominated by PM.',
    'Penalty: Rs 250/day of delay, max Rs 25,000 on PIO for malafide denial or delay (Section 20).',
    'RTI Amendment Act, 2019: Changed tenure/salary of ICs from statutory to "prescribed by Central Government."',
    'Original Act: CIC salary = CEC salary. ICs salary = EC salary. 2019 Amendment removed this parity.',
    'Tamil Nadu — first state to enact RTI law (1997). MKSS (Aruna Roy) pioneered RTI movement in Rajasthan.',
    'CIC ruled (2013) political parties are public authorities — parties refuse to comply.',
    'Over 90 RTI activists murdered. 5-6 million applications filed annually — most used transparency law globally.',
  ],
  comparisons: [
    { title: 'RTI Application Process', headers: ['Step', 'Time Limit', 'Authority'], rows: [
      ['Application', 'Submit with Rs 10 fee', 'PIO'],
      ['Response', '30 days (48 hrs for life/liberty)', 'PIO'],
      ['1st Appeal', 'Within 30 days of decision', 'First Appellate Authority'],
      ['2nd Appeal', 'Within 90 days', 'CIC or SIC'],
    ]},
    { title: 'CIC Selection Committee', headers: ['Member', 'Role'], rows: [
      ['Prime Minister', 'Chairperson'],
      ['Leader of Opposition (LS)', 'Member'],
      ['Union Cabinet Minister', 'Nominated by PM'],
    ]},
  ],
  mnemonics: [
    { title: 'RTI Penalty — "250/25K"', mnemonic: 'Rs 250 per day, Maximum Rs 25,000', explanation: 'The penalty on PIOs for malafide denial or delay in providing information.' },
    { title: 'RTI Time Limits — "30-48"', mnemonic: '30 days normal, 48 hours for life/liberty', explanation: 'Two key time limits for providing information under the RTI Act.' },
  ],
}
