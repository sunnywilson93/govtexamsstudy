import type { SubjectConcept } from '@/types/subject-notes'

export const electionCommissionConcept: SubjectConcept = {
  topic: 'election-commission',
  title: 'Election Commission of India',
  description:
    'The Election Commission of India (ECI) is an autonomous constitutional body responsible for administering elections to Parliament, state legislatures, and the offices of President and Vice-President. Established under Article 324, it ensures free and fair elections in the world\'s largest democracy.',
  category: 'Bodies & Special',
  keyDates: [
    { year: '25 Jan 1950', event: 'Election Commission of India established; Sukumar Sen became the first Chief Election Commissioner (CEC)' },
    { year: '1951-52', event: 'First general elections conducted — the largest democratic exercise in the world at that time' },
    { year: '1989', event: 'ECI became multi-member body with appointment of two Election Commissioners (S.S. Dhanoa and V.S. Seshan)' },
    { year: '1993', event: 'T.N. Seshan initiated major electoral reforms — strict enforcement of Model Code of Conduct, voter ID cards, and crackdown on booth capturing' },
    { year: '2003', event: 'Electronic Voting Machines (EVMs) used for the first time across all constituencies in an assembly election (all 5 states)' },
    { year: '2013', event: 'NOTA (None of the Above) option introduced following SC order in PUCL v. Union of India' },
    { year: '2017', event: 'VVPAT (Voter Verifiable Paper Audit Trail) machines introduced for verification' },
    { year: '2023', event: 'SC in Anoop Baranwal v. Union of India directed that CEC and ECs be appointed by a committee of PM, Leader of Opposition, and CJI (until Parliament makes a law)' },
    { year: '2023', event: 'Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act enacted; replaced CJI with a Cabinet Minister nominated by PM in the selection committee' },
  ],
  notes: [
    {
      section: 'Composition and Appointment',
      content:
        'Article 324(2): the ECI consists of the Chief Election Commissioner (CEC) and such number of other Election Commissioners (ECs) as the President may fix from time to time. Currently, the ECI is a 3-member body (1 CEC + 2 ECs). The CEC and ECs are appointed by the President. Until 2023, the appointment was on the PM\'s advice (convention). In Anoop Baranwal v. Union of India (2023), the SC directed appointment by a committee of PM, Leader of Opposition in Lok Sabha, and CJI. Parliament subsequently passed the CEC and ECs (Appointment) Act 2023, providing for appointment by the President on the recommendation of a Selection Committee comprising the PM (Chairman), a Union Cabinet Minister nominated by PM, and the Leader of Opposition in Lok Sabha. The CEC and ECs hold equal status and draw equal salary (equivalent to a SC judge). Term: 6 years or until 65 years of age, whichever is earlier.',
    },
    {
      section: 'Removal and Independence',
      content:
        'The CEC can be removed only through the impeachment process — same as a SC judge (proved misbehavior or incapacity, with special majority in both Houses). This security of tenure ensures independence. However, other Election Commissioners can be removed by the President on the recommendation of the CEC — a weaker protection. In case of difference of opinion, the majority view prevails (ECI works on the principle of majority decision-making). The CEC acts as the Chairman. The SC in T.N. Seshan v. Union of India (1995) held that the CEC and other ECs have equal powers in decision-making. The conditions of service of the CEC and ECs cannot be varied to their disadvantage after appointment. Budget of the ECI is charged on the Consolidated Fund of India.',
    },
    {
      section: 'Powers and Functions',
      content:
        'The ECI has wide-ranging powers: (1) Conduct of elections — superintendence, direction, and control of elections to Parliament, state legislatures, President, and VP (not local body elections — those are conducted by State Election Commissions under Art 243K). (2) Electoral rolls — preparation, revision, and maintenance. (3) Model Code of Conduct (MCC) — enforced from date of announcement of elections until results; MCC is not statutory but has been upheld by courts; covers conduct of parties, ministers, and candidates. (4) Recognition and deregistration of political parties as national or state parties. (5) Allotment of election symbols. (6) Delimitation — in consultation with the Delimitation Commission. (7) Setting election schedules. (8) Power to cancel or countermand elections in case of booth capturing, violence, or malpractice. (9) Advisory jurisdiction — the President consults the ECI on disqualification of MPs/MLAs (Art 103/192).',
    },
    {
      section: 'Electoral Reforms',
      content:
        'Major electoral reforms: introduction of EVMs (replaced paper ballots — cost-effective, faster counting, reduced booth capturing); VVPAT for voter verification; photo voter ID cards (EPIC); NOTA option (2013, PUCL v. Union of India); lowering of voting age from 21 to 18 (61st Amendment, 1988); ceiling on election expenditure; paid news monitoring; C-VIGIL app for citizen reporting of violations; online voter registration; Systematic Voters\' Education and Electoral Participation (SVEEP) program for voter awareness. Pending reforms: state funding of elections (recommended by Indrajit Gupta Committee, 1998, and Law Commission), one nation one election (proposed — currently being examined), regulation of political parties, inner-party democracy, criminalization of politics (SC in Lily Thomas v. Union of India, 2013 — convicted persons immediately disqualified).',
    },
    {
      section: 'Political Parties and Anti-Defection',
      content:
        'ECI recognizes parties as national or state parties based on vote share and seats won. National party criteria: 6% vote share in 4+ states in LS/VS elections AND 4 LS seats from 3+ states; OR 2% of total LS seats from 3+ states; OR recognition as state party in 4+ states. State party: 6% vote share in the state AND 2 seats in state assembly; OR 3% of total seats in state assembly or 3 LS seats, whichever is more; OR 8% vote share in the state. Benefits of recognition: reserved election symbol, free time on state TV/radio, consultation by ECI on rule changes. Anti-Defection Law (Tenth Schedule, 52nd Amendment, 1985): a member is disqualified if they voluntarily give up party membership, vote against or abstain from party whip without prior permission. Exception: merger — when at least 2/3 of the members of a party in the legislature merge with another party. Decision on disqualification is made by the Speaker/Chairman (subject to judicial review — Kihoto Hollohan case, 1993).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very high-yield topic. UPSC tests on: composition, appointment process (especially post-2023 changes), removal procedure (CEC vs other ECs), Art 324 scope, ECI vs SEC jurisdiction, MCC enforcement, and electoral reforms. SSC exams ask about first CEC, EVM introduction, NOTA, voting age, and national/state party criteria.',
}
