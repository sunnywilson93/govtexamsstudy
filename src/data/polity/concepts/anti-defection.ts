import type { SubjectConcept } from '@/types/subject-notes'

export const antiDefectionConcept: SubjectConcept = {
  topic: 'anti-defection',
  title: 'Anti-Defection Law (Tenth Schedule)',
  description:
    'The Anti-Defection Law was introduced by the 52nd Constitutional Amendment Act, 1985, which added the Tenth Schedule to the Constitution. It aims to curb political defections by providing for disqualification of legislators who switch parties. The law has been amended by the 91st Amendment (2003) to strengthen its provisions.',
  category: 'Bodies & Special',
  keyDates: [
    { year: '1967', event: 'Mass defections after the fourth general elections — "Aaya Ram Gaya Ram" phenomenon began (Haryana MLA Gaya Lal changed parties 3 times in one day)' },
    { year: '1985', event: '52nd Amendment added the Tenth Schedule — Anti-Defection Law enacted' },
    { year: '1992', event: 'Kihoto Hollohan v. Zachillhu — SC upheld the Tenth Schedule as constitutionally valid but held that the Speaker\'s decision is subject to judicial review' },
    { year: '2003', event: '91st Amendment strengthened the law — eliminated the "one-third split" provision; only two-thirds merger allowed; disqualified defectors from holding ministerial positions' },
  ],
  notes: [
    {
      section: 'Grounds for Disqualification',
      content:
        'A member of either House of Parliament or a state legislature is disqualified under the Tenth Schedule if: (1) they voluntarily give up membership of the political party on whose ticket they were elected; (2) they vote or abstain from voting contrary to any direction issued by the political party (party whip) without prior permission — if such voting/abstention is not condoned by the party within 15 days. For nominated members: if they join any political party after the expiry of 6 months from the date they take their seat. For independent members: if they join any political party after the election. "Voluntarily giving up membership" has been interpreted broadly by courts — it includes conduct that is inconsistent with party membership, not just formal resignation.',
    },
    {
      section: 'Exception: Merger',
      content:
        'The only exception to disqualification is merger (Paragraph 4 of the Tenth Schedule, as amended by 91st Amendment, 2003). A merger is deemed to have taken place when at least two-thirds of the members of a legislature party merge with another party. The original 1985 law had an additional exception for "splits" — if one-third of the members of a legislature party formed a separate group, they were not disqualified. This one-third split provision was heavily misused (encouraging defection by engineering one-third breakaways), and was deleted by the 91st Amendment. The 91st Amendment also barred defecting legislators from being appointed as ministers — Art 164(1B) (state) and Art 75(1B) (Centre) disqualify a member who is disqualified under the Tenth Schedule from becoming a minister.',
    },
    {
      section: 'Decision-Making Authority',
      content:
        'Paragraph 6: the decision on disqualification under the Tenth Schedule is made by the Presiding Officer of the House — the Speaker (Lok Sabha/Vidhan Sabha) or the Chairman (Rajya Sabha/Vidhan Parishad). In Kihoto Hollohan v. Zachillhu (1992), the SC held: (1) the Tenth Schedule is constitutionally valid; (2) the Speaker/Chairman\'s decision is subject to judicial review on grounds of mala fides, perversity, or violation of natural justice (but courts will not interfere with proceedings while they are pending before the Speaker); (3) the Speaker acts as a "tribunal" and must follow principles of natural justice. The SC in Keisham Meghachandra Singh v. Speaker, Manipur (2020) observed that the Speaker should decide disqualification petitions within a reasonable time (3 months) and suggested that an independent tribunal should be the deciding authority instead of the Speaker (who may have political biases).',
    },
    {
      section: 'Criticism and Reform Proposals',
      content:
        'Criticisms: (1) the Speaker/Chairman as the deciding authority creates a conflict of interest — the Speaker is often partisan despite the expectation of neutrality; (2) no time limit for deciding disqualification petitions — Speakers have deliberately delayed decisions (some petitions pending for years); (3) the law curbs legitimate dissent within parties — legislators cannot vote according to conscience; (4) the party whip system gives excessive power to party leadership; (5) the two-thirds merger exception still allows wholesale defection. Reform proposals: the Dinesh Goswami Committee (1990) recommended that disqualification should be limited to votes on confidence/no-confidence motions and Money Bills only; the Law Commission (170th Report, 1999) recommended referring disqualification cases to the Election Commission instead of the Speaker; the National Commission to Review the Working of the Constitution (NCRWC, 2002) recommended similar reforms. The SC has repeatedly urged Parliament to fix the time-limit issue.',
    },
    {
      section: 'Important Cases',
      content:
        'Ravi S. Naik v. Union of India (1994): SC held that "voluntarily giving up membership" is wider than formal resignation — it includes conduct inconsistent with party membership. Rajendra Singh Rana v. Swami Prasad Maurya (2007): SC held that when a Speaker fails to act on a disqualification petition, the court can intervene. Keisham Meghachandra Singh v. Speaker, Manipur (2020): SC recommended an amendment to have disqualification decided by an independent authority (like a retired SC judge) instead of the Speaker; suggested a 3-month time limit. In practice, the Anti-Defection Law has reduced but not eliminated defections — the Maharashtra political crisis (2022, Shinde vs Uddhav faction) and subsequent SC judgment in Subhash Desai v. Principal Secretary (2023) highlighted ongoing challenges with the law, especially regarding intra-party splits and the Speaker\'s role.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very frequently tested. UPSC asks about: grounds for disqualification, merger exception (2/3 threshold), Kihoto Hollohan case, 91st Amendment changes, criticism of the Speaker\'s role, and reform proposals. SSC exams test factual recall — which amendment, which schedule, who decides, what percentage for merger. The "Aaya Ram Gaya Ram" origin story is a classic question.',
}
