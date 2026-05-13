export type BillLane = 'pre' | 'lok' | 'rajya' | 'pres'

export interface BillVote {
  for: number
  against: number
  abstain: number
  total: number
  label: string
}

export interface BillStep {
  id: string
  house: 'lok' | 'rajya' | 'president' | null
  lane: BillLane
  title: string
  tag: string
  body: string
  fact: string
  vote?: BillVote
}

export const BILL_STEPS: BillStep[] = [
  {
    id: 'draft',
    house: null,
    lane: 'pre',
    title: 'Drafting',
    tag: 'Pre-legislative',
    body: 'A Bill is drafted by the concerned Ministry (or a Private Member) after stakeholder consultation.',
    fact: 'Most Bills in India are introduced by the Government — these are called Public Bills.',
  },
  {
    id: 'intro',
    house: 'lok',
    lane: 'lok',
    title: 'Introduction · First Reading',
    tag: 'Art. 107',
    body: 'The Bill is introduced in Lok Sabha. Only the title and objectives are read — no debate yet.',
    fact: 'Money Bills (Art. 110) can ONLY be introduced in Lok Sabha, with the President’s prior recommendation.',
  },
  {
    id: 'lok-debate',
    house: 'lok',
    lane: 'lok',
    title: 'Second Reading — Lok Sabha',
    tag: 'Art. 107',
    body: 'Clause-by-clause discussion. Amendments may be moved. The Bill may be referred to a Standing Committee.',
    fact: 'Standing Committees scrutinise Bills line-by-line away from the public eye — they’re where the real work happens.',
  },
  {
    id: 'lok-pass',
    house: 'lok',
    lane: 'lok',
    title: 'Third Reading — passed by Lok Sabha',
    tag: 'Art. 100',
    body: 'A final vote. Simple majority of members present and voting is enough for an ordinary Bill.',
    vote: { for: 318, against: 196, abstain: 29, total: 543, label: 'Lok Sabha vote' },
    fact: 'Constitutional Amendment Bills need a special majority — two-thirds of members present + majority of total strength.',
  },
  {
    id: 'rajya-arrive',
    house: 'rajya',
    lane: 'rajya',
    title: 'Transmitted to Rajya Sabha',
    tag: 'Art. 109 / 111',
    body: 'The Bill travels to the Upper House. Rajya Sabha repeats the three readings.',
    fact: 'For Money Bills, Rajya Sabha has only 14 days and can recommend — not reject — amendments.',
  },
  {
    id: 'rajya-pass',
    house: 'rajya',
    lane: 'rajya',
    title: 'Passed by Rajya Sabha',
    tag: 'Art. 100',
    body: 'Both Houses must pass identical text. If they disagree, the President may summon a joint sitting.',
    vote: { for: 162, against: 73, abstain: 10, total: 245, label: 'Rajya Sabha vote' },
    fact: 'Joint sittings (Art. 108) have been called only 3 times in Indian history — Dowry Prohibition, Banking Service, POTA.',
  },
  {
    id: 'president',
    house: 'president',
    lane: 'pres',
    title: 'Presented to the President',
    tag: 'Art. 111',
    body: 'The President may assent, withhold assent, or return the Bill (if not a Money Bill) for reconsideration.',
    fact: 'If returned and re-passed by Parliament, the President MUST give assent. No second return.',
  },
  {
    id: 'act',
    house: 'president',
    lane: 'pres',
    title: 'Becomes an Act of Parliament',
    tag: 'Art. 111',
    body: 'On Presidential assent, the Bill becomes law and is published in the Gazette of India.',
    fact: 'Acts come into force on a date notified by the Government — sometimes years after assent.',
  },
]
