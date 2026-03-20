import type { SubjectConcept } from '@/types/subject-notes'

export const electionCommissionConcept: SubjectConcept = {
  topic: 'election-commission',
  title: 'Election Commission of India',
  description:
    'Art 324 vests "superintendence, direction, and control" of all elections in the ECI — those three words give it sweeping plenary power. Currently a 3-member body (1 CEC + 2 ECs). The 2023 appointment controversy (Anoop Baranwal case vs Parliament\'s response Act) is hot exam territory. The ECI does NOT handle panchayat/municipality elections — that\'s the State Election Commission under Art 243K. SSC loves testing: first CEC (Sukumar Sen), EVMs (first used 1982, nationwide 2003), NOTA (2013), and VVPAT (2017).',
  category: 'Bodies & Special',
  keyDates: [
    { year: '25 Jan 1950', event: 'Election Commission of India established; Sukumar Sen became the first Chief Election Commissioner (CEC)' },
    { year: '1951-52', event: 'First general elections conducted — the largest democratic exercise in the world at that time, with 17.3 crore eligible voters' },
    { year: '1961', event: 'Rajya Sabha elections started under ECI supervision; ECI also oversaw the first delimitation exercise under the Delimitation Commission Act, 1952' },
    { year: '1982', event: 'Electronic Voting Machines (EVMs) first used on a trial basis in the Paravur Assembly constituency in Kerala' },
    { year: '1988', event: '61st Amendment lowered voting age from 21 to 18 years; first applied in 1989 general elections' },
    { year: '1989', event: 'ECI became multi-member body with appointment of two Election Commissioners (S.S. Dhanoa and V.S. Seigell); later reverted to single member; permanently multi-member from 1993' },
    { year: '1990-96', event: 'T.N. Seshan era (10th CEC) — strict enforcement of Model Code of Conduct, photo voter ID cards (EPIC), crackdown on booth capturing, election expenditure monitoring. Magsaysay Award 1996.' },
    { year: '1998', event: 'SC in Union of India v. Association for Democratic Reforms directed disclosure of criminal/financial background of candidates' },
    { year: '2003', event: 'EVMs used nationwide for the first time in all constituencies. Representation of People Act amended for disclosure norms' },
    { year: '2013', event: 'NOTA (None of the Above) option introduced following SC order in PUCL v. Union of India; Lily Thomas v. UoI struck down Section 8(4) RPA (convicted legislators immediately disqualified)' },
    { year: '2017', event: 'VVPAT (Voter Verifiable Paper Audit Trail) machines deployed alongside EVMs for voter verification in all states' },
    { year: '2023', event: 'SC in Anoop Baranwal v. Union of India directed CEC/ECs appointment by PM, Leader of Opposition, and CJI; Parliament enacted CEC & ECs (Appointment) Act replacing CJI with Cabinet Minister' },
    { year: '2024', event: 'SC struck down electoral bonds (Association for Democratic Reforms v. UoI) — violated right to information; SBI ordered to disclose all bond data. Kovind Committee recommended simultaneous elections.' },
  ],
  notes: [
    {
      section: 'Constitutional Basis and Composition (Art 324)',
      content:
        'Art 324(1) vests "superintendence, direction, and control" of ALL elections (Parliament, state legislatures, President, VP) in the ECI. Art 324(2): ECI = CEC + such number of ECs as the President fixes. Currently: 1 CEC + 2 ECs. Timeline of composition changes — exams test this: 1950-1989 single-member; October 1989 two ECs added; January 1990 reverted to single-member; October 1993 two ECs added permanently. Business transacted by majority — CEC cannot override the other two (T.N. Seshan case, 1995). CEC acts as Chairman. Salaries = Supreme Court judge level (CEC & Other ECs Conditions of Service Act, 1991). Key exam point: Art 324 does NOT specify the number of ECs — the President decides. The Constitution doesn\'t mandate a multi-member body.',
    },
    {
      section: 'Appointment Process — Pre and Post 2023 Reforms',
      content:
        'The appointment process changed dramatically in 2023 — this is current affairs gold. Pre-2023: President appointed CEC/ECs on PM\'s advice (convention, not constitutional mandate). Anoop Baranwal v. Union of India (March 2023): Constitution Bench directed appointment by a committee of PM + Leader of Opposition + CJI — until Parliament makes a law. Parliament\'s response: the CEC & ECs (Appointment) Act, 2023 replaced the CJI with a Cabinet Minister nominated by the PM. The Selection Committee: (1) PM (Chairperson), (2) Cabinet Minister nominated by PM, (3) Leader of Opposition in LS. A Search Committee (headed by Law Minister) prepares a panel of 5 candidates. Critics say this dilutes the SC\'s directive — 2 of 3 committee members are from the ruling party. For UPSC: know both the SC judgment (PM + LoP + CJI) AND the Parliament\'s Act (PM + Cabinet Minister + LoP). The difference between the two is a guaranteed question.',
    },
    {
      section: 'Removal and Independence Safeguards',
      content:
        'The asymmetry in removal is a classic UPSC question. CEC: removed only through impeachment (same as SC judge — Art 324(5), proved misbehaviour or incapacity, special majority in both Houses). Other ECs: removed by the President on CEC\'s recommendation — much weaker protection. This means the CEC enjoys impeachment-level security but other ECs are potentially subject to the CEC\'s will. However, T.N. Seshan v. Union of India (1995) clarified: CEC and ECs have EQUAL powers in decision-making. The CEC cannot override the other two. His special status is tenure security only, not decision-making authority. Other safeguards: conditions of service cannot be varied to disadvantage after appointment; ECI expenses charged on Consolidated Fund of India (non-votable). Exam trap: CEC removal = impeachment; other ECs removal = President on CEC\'s recommendation. These are NOT the same.',
    },
    {
      section: 'Powers and Functions — Elections',
      content:
        'Art 324 gives the ECI "superintendence, direction, and control" — broad plenary powers. Functions: (1) Conduct elections to Parliament (LS + RS), state assemblies and councils, President, VP. Critical distinction: ECI does NOT conduct panchayat/municipality elections — that\'s the State Election Commission under Art 243K/243ZA. This ECI vs SEC jurisdiction question appears every year. (2) Electoral rolls — preparation, revision, maintenance. (3) Election schedules — notification, nominations, scrutiny, withdrawal, polling, counting. (4) Party recognition and symbol allotment (Election Symbols Order, 1968). (5) National/state party status — granting or withdrawing. (6) Election machinery — observers, returning officers, presiding officers. (7) Advisory role under Art 103 and 192 — President/Governor consults ECI on disqualification of MPs/MLAs, and is BOUND by ECI\'s opinion. (8) Power to cancel/countermand polls for booth capturing, violence, or malpractice. For SSC: the Art 103/192 advisory jurisdiction is frequently tested — the President/Governor must follow ECI\'s advice on disqualification.',
    },
    {
      section: 'Model Code of Conduct (MCC)',
      content:
        'The MCC is NOT statutory — no Act of Parliament backs it. This is the #1 exam fact about the MCC. It\'s a voluntary code evolved through party consensus, enforced by ECI using Art 324 plenary powers. The SC has upheld this enforcement power. MCC activates from election announcement date, lasts until results declared. Key provisions: no financial grants/foundation stones/construction promises by ministers; no government machinery for campaigning; no caste/communal appeals; no criticism of candidates\' private lives; no places of worship for propaganda; no government-funded ads; state media gives equal time. Violations lead to: ECI warnings, FIRs under RPA or IPC, official transfers, or poll deferment. The 2nd ARC recommended statutory backing — not implemented. The MCMC (Media Certification and Monitoring Committee) screens political ads during elections. For exams: MCC = non-statutory, voluntary, enforceable through Art 324. If an option says "enacted by Parliament" — it\'s wrong.',
    },
    {
      section: 'Electoral Reforms — EVMs, VVPAT, NOTA',
      content:
        'EVM timeline — SSC loves this. First trial: 1982 (Paravur, Kerala). Nationwide use: 2003. Advantages: reduced booth capturing (one vote at a time), faster counting, fewer invalid votes, cost-effective, environmentally better. VVPAT (Voter Verifiable Paper Audit Trail): SC directed in Subramanian Swamy v. ECI (2013). VVPATs print a slip showing the party symbol, visible for 7 seconds through a window before dropping into a sealed box. In 2019, SC directed VVPAT verification of 5 randomly selected EVMs per constituency. NOTA: introduced 2013 following PUCL v. Union of India. Voters can reject all candidates. The catch — NOTA has NO legal consequence. Even if NOTA tops the poll, the candidate with the most votes wins. ECI has pushed for legal teeth, but no amendment has happened. For exams: EVM first used 1982 (Kerala), nationwide 2003, VVPAT 2013 (SC direction), NOTA 2013 (PUCL case). The "NOTA has no legal effect" fact is frequently tested.',
    },
    {
      section: 'Political Party Recognition — National and State Parties',
      content:
        'National and state party criteria are heavily tested — memorize the thresholds. National party (any ONE criterion met): (a) 6% of valid votes in 4+ states AND 4+ LS seats; (b) 2% of total LS seats (currently 11) from 3+ states; (c) recognized as state party in 4+ states. State party (any ONE): (a) 6% valid votes in the state AND 2 assembly seats; (b) 3% of total assembly seats or 3 LS seats (whichever is more); (c) 8% of total valid votes in the state; (d) 1 LS seat per 25 seats allotted to the state. Benefits: reserved symbol, free Doordarshan/AIR time, consultation rights, electoral roll supply. As of 2024: 6 national parties, ~57 state parties. ECI reviews recognition after each general election under the Election Symbols (Reservation and Allotment) Order, 1968. The 6% threshold and minimum seat requirements are the most tested numbers.',
    },
    {
      section: 'T.N. Seshan and Landmark Reforms',
      content:
        'T.N. Seshan (10th CEC, 1990-96) transformed the ECI from a passive body into a powerful institution. His reforms defined modern Indian elections: strict MCC enforcement (first time violations had real consequences); photo voter ID cards (EPIC) to prevent impersonation; central paramilitary deployment to stop booth capturing; election expenditure monitoring; transfer of partisan officials; election observers in all constituencies; videography of polling; crackdown on liquor/cash distribution. The government responded by appointing two additional ECs to dilute his authority. SC in T.N. Seshan v. UoI (1995) upheld the government\'s power to appoint additional ECs — decisions by majority, CEC can\'t override. Despite this, Seshan\'s legacy is foundational. He received the Magsaysay Award in 1996. SSC asks: who was the 10th CEC? T.N. Seshan. Who was the first CEC? Sukumar Sen.',
    },
    {
      section: 'Key Supreme Court Judgments on Elections',
      content:
        'Landmark cases checklist — know case name, year, and holding. Association for Democratic Reforms (2002): candidates must disclose criminal cases, assets, liabilities, educational qualifications. PUCL v. UoI (2013): NOTA on EVMs. Lily Thomas v. UoI (2013): struck down RPA Section 8(4) — conviction now immediately disqualifies MPs/MLAs (no grace period during appeal). Subramanian Swamy v. ECI (2013): VVPAT alongside EVMs. Anoop Baranwal v. UoI (2023): CEC/EC appointment by PM + LoP + CJI committee. Common Cause v. UoI (2018): upheld contesting from two constituencies (RPA Sec 33(7)) but recommended limiting to one. Association for Democratic Reforms v. UoI (2024): struck down electoral bonds — violated Art 19(1)(a). Pattern: the SC has consistently filled gaps where Parliament wouldn\'t act. For exams: Lily Thomas (immediate disqualification on conviction) and PUCL (NOTA) are the most tested — both decided in 2013.',
    },
    {
      section: 'Delimitation and Electoral Rolls',
      content:
        'Delimitation = redrawing constituency boundaries for equal population representation. Art 82 empowers Parliament to enact a Delimitation Act after each census. Delimitation Commission orders have the force of law — cannot be questioned in any court. Four Commissions: 1952 (Justice Fazl Ali), 1962, 1972, 2002. The freeze is the key exam point: 42nd Amendment (1976) froze seat allocation on 1971 Census basis until 2000. 84th Amendment (2001) extended freeze until 2026. 87th Amendment (2003) allowed INTERNAL readjustment of constituencies within states (based on 2001 Census) WITHOUT changing total seats per state. Why the freeze? To incentivize population control — states that reduced growth wouldn\'t lose seats. This freeze expires after the first census post-2026. Southern states are anxious — they controlled population growth and fear losing seats to northern states. Electoral rolls: prepared by ECI under Registration of Electors Rules, 1960; continuous updation + special summary revision before elections. For exams: 84th Amendment (2026 freeze) and 87th Amendment (2001 Census internal readjustment) are the key amendments.',
    },
    {
      section: 'Election Expenditure and Criminalization',
      content:
        'Expenditure ceilings: Rs 95 lakh for LS elections, Rs 40 lakh for state assemblies (larger states; lower for smaller states/UTs). The big loophole — only CANDIDATE expenditure is capped; PARTY expenditure is unlimited. ECI deploys expenditure observers and income tax teams to monitor cash/liquor/freebies. Electoral bonds (introduced 2018): struck down by SC in Association for Democratic Reforms v. UoI (February 2024) as violating Art 19(1)(a) (right to information). SBI ordered to disclose all bond data. The disclosed data showed BJP received ~55% of all bonds, with significant contributions from companies facing regulatory action. Criminalization: Public Interest Foundation v. UoI (2018) — parties must publish candidates\' criminal records on websites and in newspapers. Despite this, 40%+ of recently elected MPs have criminal cases (ADR data). Vohra Committee (1993) first flagged the criminal-politician nexus. For UPSC: electoral bonds judgment (2024) is hot current affairs. Know the constitutional basis (Art 19(1)(a)) and the SBI disclosure order.',
    },
    {
      section: 'Pending Electoral Reforms',
      content:
        'Pending reforms make excellent UPSC Mains essay material. State funding of elections: Indrajit Gupta Committee (1998) and Law Commission (1999) recommended it — not implemented. One Nation One Election: Kovind Committee (2024) recommended simultaneous LS and state elections; constitutional amendment bill introduced. Regulation of political parties: no comprehensive law on internal democracy, finances, or functioning — 2nd ARC and Law Commission recommended requirements. Right to recall: power to remove elected reps before term expires — proposed but not implemented (instability concerns). Exit poll regulation: currently banned between first and last polling phase. NOTA with legal teeth: fresh elections if NOTA tops — ECI supports but no amendment. Compulsory voting: practiced elsewhere but not recommended for India\'s scale. For UPSC Mains: frame these as the gap between India\'s electoral aspirations and ground reality. The Kovind Committee and One Nation One Election are the hottest current affairs items in this space.',
    },
    {
      section: 'Representation of People Act — Key Provisions',
      content:
        'Two RPAs — know the division of subjects. RPA 1950: seat allocation, electoral rolls, voter qualifications, delimitation. RPA 1951: election conduct, membership qualifications/disqualifications, corrupt practices, election petitions, party registration. Key RPA 1951 provisions: Sec 8 — disqualification on conviction (Sec 8(1): offences like promoting enmity, bribery; Sec 8(3): conviction with 2+ year sentence — Lily Thomas case struck down Sec 8(4) which gave a grace period during appeal). Sec 10A: disqualification for government contracts. Sec 123: corrupt practices (bribery, undue influence, religious/caste appeal, promoting disharmony). Sec 77: expenditure ceiling. Sec 33(7): contesting from two constituencies (SC recommended limiting to one). Supplemented by Conduct of Elections Rules 1961 and Registration of Electors Rules 1960. For exams: RPA 1950 = electoral infrastructure; RPA 1951 = election conduct and offences. The Sec 8 disqualification provisions are the most tested.',
    },
    {
      section: 'Electoral Bonds — Introduction and Judicial Strike-Down',
      content:
        'Electoral bonds (2018-2024) — a complete exam case study. How they worked: interest-free bearer instruments from SBI; denominations Rs 1,000 to Rs 1 crore; parties had 15 days to encash in a designated account. The controversial feature: complete anonymity — donor identity hidden from the public, the party, AND even the ECI. Government\'s argument: reduces black money by providing a banking channel. Critics: violates voters\' right to know funding sources; enables quid pro quo. In Association for Democratic Reforms v. UoI (February 2024), a 5-judge bench unanimously struck down the scheme. Constitutional basis: violated Art 19(1)(a) — the right to information is part of freedom of speech and expression. The Court ordered SBI to disclose all bond data to ECI for public release. Results: BJP received ~55% of total bonds; significant contributions came from companies facing regulatory action. For UPSC: know the constitutional ground (Art 19(1)(a)), the SBI disclosure order, and the "right to know" principle. This connects to the ADR (2002) case on candidate disclosure.',
    },
    {
      section: 'One Nation One Election — Simultaneous Elections Proposal',
      content:
        'One Nation One Election is one of the hottest current affairs topics. Current problem: elections at different times across states means perpetual MCC, security force diversion, governance disruption, huge expenditure. Kovind Committee (2024) recommended two phases: Phase 1 — simultaneous LS + state assembly elections; Phase 2 — municipal and panchayat elections within 100 days. Required constitutional amendments: Art 83 (Parliament duration), Art 85 (sessions/prorogation/dissolution), Art 172 (state legislature duration), Art 174 (state sessions), Art 356 (President\'s Rule). Key mechanism: an "appointed date" to align all terms; premature dissolution means new government serves only the remaining term, NOT a fresh 5 years. Critics: undermines federalism (national and state issues merge); disadvantages regional parties; requires massive logistics. Constitutional requirement: ratification by half the state legislatures under Art 368(2) — since it affects state legislature duration. For UPSC: know the specific articles needing amendment and the Art 368(2) ratification requirement.',
    },
    {
      section: 'Anti-Defection Law and ECI\'s Role in Symbol Disputes',
      content:
        'Anti-defection (Tenth Schedule) is the Speaker\'s domain, but the ECI handles the politically explosive symbol disputes. When a party splits, the ECI decides who gets the name and symbol — a make-or-break decision since Indian voters often recognize symbols, not candidates. Election Symbols Order, 1968 governs this power. Recent high-profile cases: Shiv Sena split (2022) — ECI gave the name and symbol to the Shinde faction (majority of legislators + organizational support); NCP split (2023-24) — symbol went to the Ajit Pawar faction. The test: majority among legislators, organizational structure, party member support. SC upheld this ECI power in Sadiq Ali v. ECI (1971). The party symbol is the primary identifier for voters — in a country where literacy impacts ballot recognition, the symbol decision can swing elections. For UPSC: distinguish the Speaker\'s role (disqualification under Tenth Schedule) from ECI\'s role (symbol allotment). These are separate powers exercised by different authorities.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very high-yield topic. UPSC tests on: composition, appointment process (especially post-2023 changes — Anoop Baranwal case and the 2023 Act), removal procedure (CEC vs other ECs), Art 324 scope, ECI vs SEC jurisdiction, MCC enforcement and non-statutory nature, NOTA and VVPAT, national/state party criteria, electoral bonds judgment, delimitation freeze until 2026, and T.N. Seshan reforms. SSC exams ask about first CEC, EVM introduction, NOTA year, voting age, and national party criteria.',
}
