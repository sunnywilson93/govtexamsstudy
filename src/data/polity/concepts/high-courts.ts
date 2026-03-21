import type { SubjectConcept } from '@/types/subject-notes'

export const highCourtsConcept: SubjectConcept = {
  topic: 'high-courts',
  title: 'High Courts',
  description:
    'India\'s 25 High Courts anchor the state judiciary under Articles 214-231. Art 226 writ power is WIDER than the SC\'s Art 32 — the single most tested comparison in polity exams. UPSC Prelims loves HC retirement age (62 vs SC\'s 65), common HCs, and L. Chandra Kumar.',
  category: 'Judiciary',
  keyDates: [
    { year: '1862', event: 'First three High Courts established at Calcutta, Bombay, and Madras under the Indian High Courts Act 1861 — replacing the Supreme Courts and Sadar Diwani Adalats of the three Presidencies' },
    { year: '1866', event: 'Allahabad High Court established (fourth oldest HC in India)' },
    { year: '1884', event: 'High Court of Judicature at Patna established — later became a full HC under the Government of India Act 1915' },
    { year: '1935', event: 'Government of India Act 1935 — created the Federal Court and reformed the HC system; established framework for HC appointments that influenced the Constitution' },
    { year: '1950', event: 'Constitutional provisions for High Courts (Art 214-231) came into force; existing HCs continued under Art 378' },
    { year: '1956', event: 'States Reorganisation Act — several HCs reconstituted to match new state boundaries; Kerala HC established' },
    { year: '1966', event: 'Punjab and Haryana HC established at Chandigarh serving both states and UT of Chandigarh' },
    { year: '1975', event: 'Sikkim HC established when Sikkim merged with India as 22nd state (36th Amendment)' },
    { year: '1997', event: 'L. Chandra Kumar v. Union of India — SC held that HC judicial review under Art 226/227 is part of the basic structure' },
    { year: '2013', event: 'Manipur, Meghalaya, and Tripura got separate High Courts (carved from Gauhati HC) — by the North-Eastern Areas (Reorganisation) and Other Related Laws (Amendment) Act, 2012' },
    { year: '2019', event: 'Andhra Pradesh got a separate High Court at Amaravati (carved from the common HC at Hyderabad after the Andhra Pradesh Reorganisation Act, 2014)' },
    { year: '1981', event: 'S.P. Gupta v. Union of India (First Judges Case) — SC held executive has primacy in HC appointments; CJI\'s opinion is merely "consultative" — later overruled by Second Judges Case (1993)' },
    { year: '2009', event: 'Commercial Courts Act proposed (enacted 2015) — established commercial divisions and commercial appellate divisions in HCs to handle high-value commercial disputes expeditiously' },
    { year: '2021', event: 'SC directed live streaming of HC proceedings following Swapnil Tripathi principle; several HCs including Gujarat, Karnataka, Jharkhand, and Patna began live streaming court proceedings' },
  ],
  notes: [
    {
      section: 'Constitutional Position and Establishment (Art 214-216)',
      content:
        'Art 214 mandates one HC per state. Art 231 lets Parliament create a common HC for two or more states or a state-plus-UT. Current map: Punjab & Haryana HC covers both states plus Chandigarh UT; Gauhati HC covers Assam, Nagaland, Mizoram, and Arunachal Pradesh; Bombay HC runs benches at Nagpur, Aurangabad, and Goa. India now has 25 HCs. Art 215 makes every HC a court of record — its records serve as unquestionable evidence, and it can punish for contempt. Art 216 says each HC has a Chief Justice plus as many judges as the President deems necessary. Lock in this distinction: Parliament fixes SC strength, but the President determines HC strength. No uniform number exists. Sanctioned strength across all 25 HCs sits at roughly 1,114 (2024). Allahabad HC tops at 160 judges; Sikkim HC is the smallest at 4.',
    },
    {
      section: 'Qualifications, Appointment, and Tenure (Art 217-218)',
      content:
        'Art 217(1) qualifications: (a) Indian citizen, and (b) held judicial office for 10+ years, OR (c) practised as an HC advocate for 10+ years. Exam trap: unlike SC judges, there is NO "distinguished jurist" route for HC appointments. The President appoints after consulting the CJI, the state\'s Governor, and (for non-CJ posts) that HC\'s Chief Justice. Under the Collegium system, the CJI plus two senior SC judges recommend names after consulting the HC\'s Chief Justice and the senior-most HC judge from that state sitting in the SC. HC CJ appointments follow seniority — convention, not constitutional rule. Retirement age: 62 (vs SC\'s 65 — classic exam favourite). Additional judges join under Art 224(1) for up to 2 years to clear backlogs. Acting judges step in under Art 224(2) when a permanent judge is temporarily absent. The President appoints an Acting CJ under Art 223 when the CJ\'s chair is vacant.',
    },
    {
      section: 'Transfer, Removal, and Conditions of Service',
      content:
        'Art 222 empowers the President to transfer HC judges after consulting the CJI. The Collegium recommends transfers in practice. Transferred judges receive compensatory allowance (Art 222(2)). The SC in Union of India v. Sankalchand Himatlal Sheth (1977) ruled transfer is not punishment and needs no consent. Removal follows the same impeachment route as SC judges — proved misbehaviour or incapacity, special majority in each House (Art 218 read with Art 124(4)-(5)). No HC judge has ever been removed through impeachment. Justice Soumitra Sen resigned in 2011 before the Rajya Sabha could vote — the Lok Sabha had already passed the motion. Art 221 bars reducing salaries after appointment. Salaries come from the State\'s Consolidated Fund (non-votable). Current pay: CJs get Rs 2,50,000/month; other HC judges get Rs 2,25,000/month. Post-retirement practice restriction (Art 220): HC judges CAN practise but NOT in the same HC or any subordinate court under it. Compare SC judges — they cannot practise at all (Art 124(7)). SSC loves this Art 220 vs Art 124(7) comparison.',
    },
    {
      section: 'Writ Jurisdiction (Art 226)',
      content:
        'Art 226 is the HC\'s most powerful weapon. HCs issue all five writs — habeas corpus, mandamus, prohibition, certiorari, quo warranto — for Fundamental Rights AND "for any other purpose." That phrase makes Art 226 WIDER than the SC\'s Art 32, which covers only FR enforcement. This single comparison dominates polity exams. Lock in these features: (1) Art 226 covers FRs, legal rights, statutory rights, even contractual rights in some cases. (2) HC writs reach any person or authority within territorial jurisdiction — and even outside if the cause of action arose within (Art 226(2)). (3) Art 226 is NOT a Fundamental Right (unlike Art 32), but L. Chandra Kumar (1997) declared it part of the basic structure. (4) During Emergency, Art 226 jurisdiction for suspended FRs can be suspended — but it stays alive for non-FR matters. (5) HCs can refuse writs when an adequate alternative remedy exists; the SC under Art 32 generally does not refuse. Tirupati Balaji Developers v. State of Bihar (2004) held HCs should normally decline writ jurisdiction when an effective alternative remedy exists.',
    },
    {
      section: 'Appellate Jurisdiction',
      content:
        'HCs handle both civil and criminal appeals. Civil side: first appeals and second appeals (on questions of law) arrive from district courts and civil judge courts. The SC in Kondiba Dagadu Kadam (1999) held that in second appeals the HC must frame a substantial question of law and stick to it. Criminal side: appeals from sessions courts and magistrate courts. Death sentence confirmation is a key HC power — a sessions court death sentence stays unexecuted until the HC confirms it (Art 134 read with CrPC/BNSS). The HC re-examines all evidence from scratch. Criminal revision petitions against subordinate court orders also reach the HC. Letters Patent Appeals are intra-court appeals: single-judge orders go to a division bench of the same HC. These exist under the Letters Patent of older HCs (Calcutta, Bombay, Madras) and similar provisions elsewhere.',
    },
    {
      section: 'Supervisory Jurisdiction (Art 227) and Superintendence',
      content:
        'Art 227 gives every HC supervisory control over ALL courts and tribunals in its territory (except military tribunals). This covers: calling for returns, issuing rules for practice, prescribing record forms, and settling fee tables. Art 227 is supervisory, not just remedial — wider in scope than Art 226. It corrects jurisdictional errors, gross illegality, or natural justice violations even where no writ lies. The SC in Surya Dev Rai v. Ram Chander Rai (2003) drew the line: Art 226 produces a writ (enforceable decree); Art 227 produces a superintendence order (administrative/corrective). Courts invoke Art 227 sparingly — it cannot substitute for a regular appeal. L. Chandra Kumar (1997) confirmed Art 227 superintendence over tribunals as part of the basic structure. Tribunals supplement HCs; they do not replace them. Even if a statute bars tribunal-to-HC appeals, Art 227 supervisory power survives. Art 228 lets the HC withdraw cases involving a substantial constitutional question from subordinate courts.',
    },
    {
      section: 'Administrative Control Over Subordinate Courts (Art 233-235)',
      content:
        'Art 233-235 give the HC control over the subordinate judiciary. Art 233: the Governor appoints, posts, and promotes district judges in consultation with the HC. Direct bar recruits need 7+ years of advocacy plus HC recommendation. Art 234: recruitment of other judicial officers runs through the Governor, following rules framed after consulting the State PSC and HC. Art 235: complete control over subordinate courts — posting, transfer, promotion, discipline — vests in the HC. The SC in Nripendra Nath Bagchi (1966) read "control" broadly to include disciplinary jurisdiction — power to initiate proceedings and impose penalties on subordinate judicial officers. The HC conducts annual inspections, evaluates judgment quality, maintains service records, and recommends punitive action. These provisions keep the subordinate judiciary under judicial — not executive — supervision. UPSC frequently tests Art 233 (district judge appointment) and Art 235 (HC control over subordinate courts).',
    },
    {
      section: 'HC Jurisdiction Over Revenue Matters and Election Petitions',
      content:
        'HCs hold original jurisdiction in several specialized areas. Revenue matters: state laws vest original HC jurisdiction for tax disputes and land revenue cases; appeals from tax tribunals (Income Tax, GST) reach the HC on substantial questions of law. Election petitions: under the Representation of the People Act, 1951 (Section 80A), HCs try petitions challenging MP or MLA elections — the HC is the court of first instance, with appeals to the SC under Art 136. Company matters: HC writ jurisdiction under Art 226/227 over NCLT stands preserved (L. Chandra Kumar principle). Some HCs — especially Calcutta, Bombay, and Madras — exercise original jurisdiction over probate, letters of administration, and matrimonial disputes. Bombay, Calcutta, and Madras HCs also handle admiralty (maritime) disputes. HCs hear appeals from statutory authorities and regulatory bodies as well.',
    },
    {
      section: 'Independence and Safeguards',
      content:
        'Multiple constitutional shields protect HC independence. Security of tenure: judges serve until 62 and face removal only through impeachment (Art 218 read with Art 124(4)). Service conditions cannot worsen post-appointment (Art 221). Salaries come from the State\'s Consolidated Fund (non-votable). Discussing HC judges\' conduct in the state legislature is barred except during impeachment. The Collegium system prevents unilateral executive control over appointments. Art 222 transfer power requires CJI consultation as counterbalance. Court of record status (Art 215) and contempt power give institutional teeth. The 44th Amendment made Art 226/227 jurisdiction non-excludable — L. Chandra Kumar confirmed this as basic structure. Real-world pressures persist: delayed appointments used as leverage, chronic vacancies at 30-40% at any time, and limited Collegium transparency.',
    },
    {
      section: 'Territorial Jurisdiction and Common High Courts',
      content:
        'Each HC covers the state(s) and UT(s) assigned to it. Art 214 mandates one HC per state; Art 231 allows a common HC for two or more states. Parliament decides territorial jurisdiction by law. Current multi-jurisdiction HCs — a UPSC favourite: (a) Punjab & Haryana HC at Chandigarh — Punjab, Haryana, Chandigarh UT; (b) Gauhati HC — Assam (principal seat), with benches for Nagaland (Kohima), Mizoram (Aizawl), Arunachal Pradesh (Itanagar); (c) Bombay HC — Maharashtra with benches at Nagpur, Aurangabad, Goa (Panaji). HCs covering UTs: Delhi HC (NCT of Delhi), Bombay HC (Dadra & Nagar Haveli and Daman & Diu), Madras HC (Puducherry), Kerala HC (Lakshadweep), Calcutta HC (Andaman & Nicobar Islands), J&K and Ladakh HC (both UTs). Parliament can create, merge, or change HC territorial boundaries. Many HCs run multiple benches — the CJ holds administrative authority to constitute benches and allocate cases.',
    },
    {
      section: 'Pendency, Infrastructure, and Reform',
      content:
        'Roughly 62 lakh cases sit pending across all 25 HCs (2024) — about 12-13% of total judicial pendency. Allahabad HC tops the backlog (10+ lakh cases), followed by Bombay and Madras. Disposal time varies wildly: under a year in smaller HCs, over 5 years in larger ones. Vacancies remain chronic — 30-40% of sanctioned positions sit empty at any time. The 245th Law Commission Report pushed for judge strength proportionate to filing rates. The E-Courts Project now extends to HCs — most offer e-filing, virtual hearings, and online case tracking. COVID-19 turned virtual hearings into a permanent feature. Ongoing reforms include specialized benches (commercial courts, family courts, tax benches), mediation centres attached to HCs, and the National Judicial Data Grid tracking HC performance.',
    },
    {
      section: 'Landmark Cases on HC Powers',
      content:
        'Key cases defining HC powers — memorize these for Prelims and Mains. L. Chandra Kumar v. Union of India (1997): the blockbuster — HC judicial review under Art 226/227 is basic structure and cannot be excluded by any tribunal or legislation. All tribunal decisions stay subject to HC scrutiny. Tirupati Balaji Developers (2004): HCs should normally decline writ jurisdiction when an effective alternative remedy exists — a rule of prudence, not an absolute bar. Surya Dev Rai v. Ram Chander Rai (2003): drew the Art 226 (writ) vs Art 227 (supervisory) distinction. Nripendra Nath Bagchi (1966): Art 235 "control" includes disciplinary power over subordinate courts. Sankalchand Himatlal Sheth (1977): HC judge transfers are not punishment and need no consent. S.P. Sampath Kumar (1987) initially held tribunals could replace HCs — L. Chandra Kumar overruled this.',
    },
    {
      section: 'Art 226 vs Art 32 — Detailed Comparison',
      content:
        'This comparison appears on virtually every polity exam — drill it cold. Scope: Art 32 covers ONLY FR enforcement; Art 226 covers FRs AND "any other purpose" (legal, statutory, contractual rights). Art 226 is WIDER. Status: Art 32 is itself a Fundamental Right — Ambedkar called it "the very soul of the Constitution." Art 226 is NOT an FR, but L. Chandra Kumar (1997) locked it into basic structure. Alternative remedy: SC can refuse Art 32 petitions if alternatives exist. HCs SHOULD refuse Art 226 when alternatives exist — prudence, not a hard bar (Whirlpool Corporation v. Registrar of Trade Marks, 1998). Territorial reach: Art 32 covers all of India; Art 226 writs run only within HC territory — but Art 226(2) extends to authorities outside if cause of action arose within. Emergency: Art 32 suspendable under Art 359 (except Art 20/21 since 44th Amendment); Art 226 suspendable for suspended FRs but stays alive for non-FR purposes. Transfer: Art 139A lets the SC transfer cases between HCs or pull them to itself.',
    },
    {
      section: 'HC Collegium Process and Appointment Controversies',
      content:
        'HC appointments run through the Collegium born from the three Judges Cases. The HC Collegium: CJI plus two senior-most SC judges. The process: the HC\'s CJ initiates recommendations after consulting HC judges; the recommendation goes to the state government for views and the Intelligence Bureau for background checks; the state forwards it with comments to the Centre; the file reaches the SC Collegium; if the government returns it and the Collegium reiterates, the government MUST accept (Second Judges Case). Chronic delays plague the system — 30-40% of sanctioned positions sit vacant (2024). The recommendation-to-appointment gap often stretches 12-18 months. States block by sitting on files; the Centre delays without accepting or rejecting. The SC intervened in 2023, directing the government to act within specified timeframes. The Memorandum of Procedure has been under renegotiation since the NJAC judgment (2015) but remains unfinished. HC CJ appointments follow seniority-based transfer convention.',
    },
    {
      section: 'Contempt of Court Powers and Recent Controversies',
      content:
        'Art 215 makes every HC a court of record with contempt power. The Contempt of Courts Act, 1971 governs both HCs and SC. Civil contempt: wilful disobedience of any judgment, decree, direction, order, writ, or breach of an undertaking. Criminal contempt: publishing anything that scandalizes the court, prejudices proceedings, or obstructs justice. Section 10 gives every HC power to punish contempt of subordinate courts in its jurisdiction. Key defences: truth became valid under the 2006 Amendment (Section 13), if the court finds it serves public interest and the request is bona fide. Fair and accurate reporting of proceedings is not contempt. Good faith criticism of a decided case is not contempt. The tension between free speech (Art 19(1)(a)) and contempt power stays a live exam and legal debate.',
    },
    {
      section: 'Complete List of 25 High Courts — Quick Reference',
      content:
        'Bookmark this list — SSC and State PSC exams love matching HCs to their jurisdictions. India\'s 25 High Courts: (1) Allahabad HC (Lucknow bench) — UP; (2) Andhra Pradesh HC (Amaravati) — AP; (3) Bombay HC (Nagpur, Aurangabad, Goa benches) — Maharashtra, Goa, Dadra & Nagar Haveli and Daman & Diu; (4) Calcutta HC (Port Blair circuit bench) — West Bengal, Andaman & Nicobar Islands; (5) Chhattisgarh HC (Bilaspur) — Chhattisgarh; (6) Delhi HC (New Delhi) — NCT of Delhi; (7) Gauhati HC (Kohima, Aizawl, Itanagar benches) — Assam, Nagaland, Mizoram, Arunachal Pradesh; (8) Gujarat HC (Ahmedabad) — Gujarat; (9) HP HC (Shimla) — Himachal Pradesh; (10) J&K and Ladakh HC (Srinagar and Jammu) — both UTs; (11) Jharkhand HC (Ranchi) — Jharkhand; (12) Karnataka HC (Dharwad and Kalaburagi benches) — Karnataka; (13) Kerala HC (Ernakulam) — Kerala, Lakshadweep; (14) MP HC (Indore, Gwalior benches) — Madhya Pradesh; (15) Madras HC (Madurai bench) — Tamil Nadu, Puducherry; (16) Manipur HC (Imphal) — Manipur; (17) Meghalaya HC (Shillong) — Meghalaya; (18) Orissa HC (Cuttack) — Odisha; (19) Patna HC (Patna) — Bihar; (20) Punjab & Haryana HC (Chandigarh) — Punjab, Haryana, Chandigarh UT; (21) Rajasthan HC (Jodhpur, Jaipur bench) — Rajasthan; (22) Sikkim HC (Gangtok) — Sikkim; (23) Telangana HC (Hyderabad) — Telangana; (24) Tripura HC (Agartala) — Tripura; (25) Uttarakhand HC (Nainital) — Uttarakhand. Largest: Allahabad (160 judges). Smallest: Sikkim (4). Oldest three — Calcutta, Bombay, Madras — established 1862.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'High-yield for all exams. UPSC Prelims frequently tests: Art 226 vs Art 32 comparison (scope, FR status, territorial reach), qualifications and retirement age (62 vs SC 65), number of HCs (25), common HCs (Punjab & Haryana, Gauhati), Art 227 supervisory jurisdiction, L. Chandra Kumar holding (HC review as basic structure), and Art 233-235 (control over subordinate courts). SSC exams focus on the first three HCs (1862), article numbers, retirement age, and basic facts about HC composition. State PSCs emphasize the specific HC\'s jurisdiction, bench system, and administrative control provisions.',
}
