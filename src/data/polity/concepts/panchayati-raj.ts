import type { SubjectConcept } from '@/types/subject-notes'

export const panchayatiRajConcept: SubjectConcept = {
  topic: 'panchayati-raj',
  title: 'Panchayati Raj System',
  description:
    'The 73rd Amendment (1992) gave constitutional status to panchayats via Part IX (Art 243-243O) and the Eleventh Schedule (29 subjects). Three-tier structure: Gram Panchayat, Panchayat Samiti, Zila Parishad. UPSC tests: committee recommendations (Balwant Rai Mehta, Ashok Mehta, Singhvi), reservation (1/3 women minimum), PESA provisions, State Election Commission, and 73rd vs 74th comparison.',
  category: 'Local Government',
  keyDates: [
    { year: '1882', event: 'Lord Ripon\'s Resolution on Local Self-Government — laid the foundation for elective local bodies in British India' },
    { year: '1907', event: 'Royal Commission on Decentralisation (Hobhouse Commission) examined working of local bodies under Ripon\'s scheme' },
    { year: '1957', event: 'Balwant Rai Mehta Committee recommended a three-tier Panchayati Raj system with democratic decentralization' },
    { year: '1959', event: 'Rajasthan became the first state to establish Panchayati Raj (2 October 1959, Nagaur); Andhra Pradesh followed (1 November 1959)' },
    { year: '1977', event: 'Ashok Mehta Committee recommended a two-tier system (Mandal Panchayat + Zila Parishad) and constitutional protection for panchayats' },
    { year: '1985', event: 'G.V.K. Rao Committee recommended revitalization of Panchayati Raj; Zila Parishad as the pivot of rural development' },
    { year: '1986', event: 'L.M. Singhvi Committee recommended constitutional status for panchayats, Gram Sabha as foundation, and Nyaya Panchayats for village justice' },
    { year: '1989', event: '64th Constitution Amendment Bill introduced by Rajiv Gandhi government — lapsed with dissolution of 8th Lok Sabha' },
    { year: '1992', event: '73rd Constitutional Amendment Act passed; added Part IX (Art 243-243O) and Eleventh Schedule (29 functional subjects)' },
    { year: '24 Apr 1993', event: '73rd Amendment came into force; National Panchayati Raj Day celebrated on 24 April annually since 2010' },
    { year: '1996', event: 'Panchayats (Extension to Scheduled Areas) Act (PESA) extended Part IX to Fifth Schedule areas with modifications for tribal self-governance' },
    { year: '2004', event: 'Ministry of Panchayati Raj created as a separate ministry at the Centre for focused attention on panchayat empowerment' },
    { year: '2009', event: 'Second Administrative Reforms Commission recommended Activity Mapping for clear delineation of functions across three tiers' },
    { year: '2022', event: 'Rashtriya Gram Swaraj Abhiyan (RGSA) restructured as central scheme for capacity building and training of elected panchayat representatives' },
  ],
  notes: [
    {
      section: 'Constitutional Framework — Part IX (Art 243-243O)',
      content:
        'Part IX (Art 243-243O) provides the constitutional framework. Art 243 contains key definitions: district, Gram Sabha, intermediate level, Panchayat, village. Art 243B mandates panchayats at village, intermediate, and district levels — the three-tier structure of Gram Panchayat, Panchayat Samiti, and Zila Parishad. Exception: states with population under 20 lakh can skip the intermediate level, permitting a two-tier structure. Art 243C empowers state legislatures to determine panchayat composition, including elected territory members, chairpersons of lower tiers as ex-officio members, MP/MLA representation, and SC/ST representation. Village-level chairperson elected as the state provides; intermediate and district chairpersons elected from among elected members.',
    },
    {
      section: 'Gram Sabha — The Foundation (Art 243A)',
      content:
        'Art 243A establishes the Gram Sabha — all registered voters in a village panchayat area. It is the cornerstone of direct democracy in Panchayati Raj. The L.M. Singhvi Committee specifically recommended it as the foundation. State legislatures determine its powers, which typically include: approving plans and programmes, identifying beneficiaries for welfare schemes, approving the annual budget, reviewing accounts and audit reports, and conducting social audits. Under PESA (1996), the Gram Sabha gets additional powers in Fifth Schedule areas: approving plans, identifying beneficiaries, issuing utilization certificates, controlling minor forest produce, preventing tribal land alienation, managing village markets. Effectiveness varies widely — Kerala and Karnataka have active Gram Sabhas; many north Indian states see poor attendance.',
    },
    {
      section: 'Reservation Provisions (Art 243D)',
      content:
        'Art 243D contains the most transformative reservation provisions in Indian local governance. Art 243D(1): SC/ST seats reserved proportional to population in every panchayat. Art 243D(2): at least 1/3 of SC/ST reserved seats go to SC/ST women. Art 243D(3): at least 1/3 of ALL directly elected seats reserved for women (including within SC/ST seats) — guaranteeing 33% minimum women representation. Art 243D(4): states can provide OBC reservation. Art 243D(6): at least 1/3 of chairperson positions at each level reserved for women. Several states went to 50% women reservation — Bihar first in 2006, followed by Rajasthan, MP, HP, Uttarakhand, Chhattisgarh, Jharkhand, Maharashtra, Tripura, Kerala. Result: India has over 14 lakh elected women panchayat representatives — the world\'s largest number of elected women.',
    },
    {
      section: 'Elections, Tenure, and Disqualification (Art 243E, 243F)',
      content:
        'Art 243E: five-year term from first meeting. Elections must complete before term expiry, or within 6 months of dissolution. A reconstituted panchayat serves ONLY the remainder of the original term — not a fresh 5 years. If the remainder is under 6 months, no elections needed. This "remainder" provision is a classic exam question. Art 243F: disqualification on same grounds as state legislature elections. Minimum age: 21 (not 25 as for state legislatures). These provisions prevent state governments from indefinitely postponing panchayat elections — a common pre-73rd Amendment problem.',
    },
    {
      section: 'State Election Commission (Art 243K)',
      content:
        'Art 243K establishes the State Election Commission (SEC) for panchayat elections. Superintendence, direction, and control of electoral rolls and elections vests in the SEC. The State Election Commissioner is appointed by the Governor and removable only like an HC judge — ensuring independence. The SEC is distinct from the ECI (Art 324) and does not fall under ECI superintendence. SC in Kishan Singh Tomar (2006): SEC must be independent and free from state government control. Despite constitutional protections, many SECs lack adequate staff and infrastructure. The same SEC conducts municipal elections under Art 243ZA.',
    },
    {
      section: 'State Finance Commission and Financial Powers (Art 243H, 243I, 243J)',
      content:
        'Art 243H empowers state legislatures to authorize panchayat taxation — levies, tolls, fees; assign state taxes; provide grants-in-aid from Consolidated Fund. Art 243I mandates the Governor to constitute a State Finance Commission (SFC) within one year of the 73rd Amendment and every five years thereafter. SFC reviews panchayat finances and recommends: distribution of state tax proceeds, taxes to assign, grants-in-aid, measures to improve finances. The Governor causes the SFC report and action taken to be laid before the state legislature. Art 243J: state legislatures provide for panchayat accounts and auditing. In practice, SFC recommendations are poorly implemented — the 15th Finance Commission noted many states don\'t constitute SFCs on time. Panchayat financial autonomy remains the weakest link.',
    },
    {
      section: 'Powers, Functions, and the Eleventh Schedule (Art 243G)',
      content:
        'Art 243G empowers state legislatures to endow panchayats with powers for self-government, including plans for economic development and social justice related to the 29 Eleventh Schedule subjects. The 29 subjects: (1) Agriculture, (2) Land improvement and soil conservation, (3) Minor irrigation and watershed, (4) Animal husbandry and dairying, (5) Fisheries, (6) Social and farm forestry, (7) Minor forest produce, (8) Small scale industries, (9) Khadi and cottage industries, (10) Rural housing, (11) Drinking water, (12) Fuel and fodder, (13) Roads, bridges, ferries, (14) Rural electrification, (15) Non-conventional energy, (16) Poverty alleviation, (17) Education (primary and secondary), (18) Technical and vocational education, (19) Adult and non-formal education, (20) Libraries, (21) Cultural activities, (22) Markets and fairs, (23) Health and sanitation, (24) Family welfare, (25) Women and child development, (26) Social welfare including disabled, (27) SC/ST welfare, (28) Public distribution system, (29) Community assets maintenance.',
    },
    {
      section: 'PESA — Extension to Scheduled Areas (1996)',
      content:
        'The 73rd Amendment excludes Fifth Schedule areas and Sixth Schedule areas (Art 243M). For Fifth Schedule areas, Parliament enacted PESA (1996), extending Part IX with significant tribal modifications. PESA applies to 10 states: AP, Telangana, Chhattisgarh, Gujarat, HP, Jharkhand, MP, Maharashtra, Odisha, Rajasthan. Key provisions: Gram Sabha safeguards traditions, cultural identity, community resources, and customary dispute resolution; Gram Sabha approves plans and projects before implementation; Gram Sabha identifies scheme beneficiaries; panchayats manage minor water bodies, minor minerals, and minor forest produce; Gram Sabha recommendation mandatory before mining leases and land acquisition. Despite its empowering framework, PESA implementation remains weak — several states have not framed rules, and tribal autonomy is undermined by conflicting forest and mining laws.',
    },
    {
      section: 'Committees and Their Recommendations',
      content:
        'Memorize this committee-recommendation mapping — UPSC loves it. Balwant Rai Mehta Committee (1957): three-tier democratic decentralization — Gram Panchayat, Panchayat Samiti, Zila Parishad. Rajasthan implemented first (2 October 1959, Nagaur), AP followed (1 November 1959). Ashok Mehta Committee (1977): two-tier system (Mandal Panchayat + Zila Parishad); constitutional protection; compulsory taxation; regular elections; SC/ST reservation. G.V.K. Rao Committee (1985): Zila Parishad as the pivot of rural development; DDC as chief executive; regular five-year elections. L.M. Singhvi Committee (1986): constitutional recognition; Gram Sabha as foundation; Nyaya Panchayats for village justice; adequate financial resources. Rajiv Gandhi introduced the 64th Amendment Bill (1989) — lapsed. The 73rd Amendment incorporated recommendations from all committees. 2nd ARC (2005-09) recommended Activity Mapping for clear function delineation across tiers.',
    },
    {
      section: 'Three-Tier Structure — Composition and Working',
      content:
        'Gram Panchayat: basic unit, headed by Sarpanch (or Pradhan/Mukhiya), directly elected by voters. Panchayat Samiti (Block/Mandal/Taluka Panchayat): consists of Gram Panchayat chairpersons as ex-officio members, directly elected members, co-opted SC/ST members, associate members (MPs, MLAs). Headed by an elected Chairman. Zila Parishad: apex district body, consists of Panchayat Samiti chairpersons, directly elected members, co-opted members, associate members. Headed by elected Chairman (Adhyaksha). After the 73rd Amendment, the elected Chairman heads the Zila Parishad while the District Collector typically serves as CEO. Nomenclature varies across states. The actual composition, powers, and names are left to state legislatures.',
    },
    {
      section: 'Devolution Status and Challenges',
      content:
        'Despite the constitutional mandate, devolution of functions, finances, and functionaries (the "3Fs") remains uneven. Kerala leads — it devolves 30%+ of plan budget to panchayats, transfers staff in all 29 subjects, and runs decentralized planning through Gram Sabhas (the "People\'s Plan Campaign" launched 1996-97). Karnataka also made significant progress. Major challenges: inadequate financial devolution (most panchayats depend on grants, not own-source revenue); lack of technical capacity; state bureaucracy and MLA/MP interference; the parallel body problem — centrally sponsored schemes like MGNREGA create implementation structures bypassing panchayats; weak Gram Sabha functioning in most states; inadequate training for women and SC/ST representatives. RGSA (restructured 2022) handles capacity building for elected representatives.',
    },
    {
      section: 'Exclusions and Special Provisions (Art 243M, 243N, 243O)',
      content:
        'Art 243M: Part IX does NOT apply to Nagaland, Meghalaya, Mizoram; Sixth Schedule areas in Assam, Meghalaya, Tripura, Mizoram; or Darjeeling Gorkha Hill Council area. Parliament can extend Part IX to Scheduled Areas with modifications — the basis for PESA. Art 243N: existing panchayat laws continued until amended or 1 year from commencement, if not inconsistent with Part IX. Art 243O: bar on judicial interference — courts cannot question delimitation or seat allotment under Art 243C. Panchayat elections can be challenged only through election petitions, not writ petitions. SC in State of U.P. v. Pradhan Sangh Kshettra Samiti (1995) upheld this bar. This prevents elections from being stalled by litigation.',
    },
    {
      section: 'Panchayati Raj in Practice — State Variations',
      content:
        'The 73rd Amendment left significant flexibility to states, resulting in wide variations. Nomenclature differs: UP/Bihar use Gram Panchayat, Kshettra Panchayat, Zila Panchayat; Maharashtra uses Gram Panchayat, Panchayat Samiti, Zila Parishad; Tamil Nadu uses Grama Panchayat, Panchayat Union, District Panchayat. Sarpanch election: direct in Rajasthan, MP, Haryana; indirect (by ward members) in other states. Powers devolved vary — Kerala covers all 29 subjects with dedicated staff; many states devolved only a handful. Financial autonomy varies — some panchayats levy property tax; many have minimal own-source revenue. National Panchayat Awards recognize outstanding performance. The e-Panchayat Mission Mode Project digitized planning (PlanPlus), accounting (PRIASoft), and financial management.',
    },
    {
      section: 'Panchayats and Centrally Sponsored Schemes',
      content:
        'Panchayats implement several major schemes. MGNREGA: Gram Panchayat prepares projects, executes works, maintains muster rolls — at least 50% of works must go through Gram Panchayats. Gram Sabha approves beneficiary lists and conducts social audits. PM Awas Yojana (Gramin): panchayats verify SECC data for beneficiary identification. Swachh Bharat Mission (Gramin): Gram Panchayats ensure open-defecation-free status and waste management. Jal Jeevan Mission: implementation responsibility assigned to Gram Panchayats and Village Water Committees. 15th Finance Commission recommended significant panchayat grants conditional on reforms — audited accounts, own-source revenue improvement. Despite these mandates, the "parallel body" problem persists — DRDAs, project management units, and SPVs bypass elected panchayats.',
    },
    {
      section: 'Nyaya Panchayats and Dispute Resolution',
      content:
        'The Singhvi Committee recommended Nyaya Panchayats for village-level dispute resolution. The 73rd Amendment did not specifically provide for them. The Gram Nyayalayas Act, 2008 provides for Gram Nyayalayas at the intermediate panchayat level. Presided by a Nyayadhikari (eligible as Judicial Magistrate First Class), they try petty civil and criminal cases. They are courts of record. Implementation is extremely poor — fewer than 500 established by 2024 against thousands targeted. States cite shortage of judicial officers and inadequate funding. Traditional panchayat dispute resolution through village elders continues informally, especially in tribal areas under Art 371A and PESA protection.',
    },
    {
      section: 'Gandhian Vision and the 73rd Amendment',
      content:
        'Gandhi envisioned Gram Swaraj — every village as a self-governing republic. During Constituent Assembly debates, sharp division arose. Gandhi\'s followers (K. Santhanam) advocated constitutional status for panchayats. Ambedkar was skeptical, calling Indian villages "a sink of localism, a den of ignorance, narrow-mindedness and communalism." He feared local self-government would entrench caste hierarchies. The Assembly placed panchayat organization in DPSPs (Art 40) — a compromise. It took 42 years for the 73rd Amendment to deliver constitutional status. The Amendment reconciled both visions through reservation provisions (ensuring SC, ST, and women representation) while empowering village democracy. Women\'s reservation of 1/3 seats and chairperson positions created the world\'s largest experiment in women\'s political representation — over 14 lakh elected women serving 80 crore rural citizens.',
    },
    {
      section: 'Constitutional Finance Commission and Panchayats',
      content:
        'Art 280(3)(bb) directs the Finance Commission to recommend measures to augment State Consolidated Funds to supplement panchayat resources, based on SFC recommendations under Art 243I. The 15th Finance Commission (N.K. Singh, 2020-26) allocated Rs 90,000 crore for rural local bodies and Rs 29,275 crore for urban bodies. Grants were conditional: entry-level conditions (SFC establishment, online provisional accounts, published audit accounts) and performance-based conditions (own-source revenue improvement, accounting standards). Grants split into untied (50%, used at panchayat discretion) and tied (50%, for water supply, sanitation, public asset maintenance). This framework significantly increased panchayat resources, though conditionality mechanisms have been criticized as difficult for small, capacity-constrained panchayats.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very high-yield for all exams. Key tested areas: committee recommendations (Balwant Rai Mehta, Ashok Mehta, GVK Rao, LM Singhvi), Art 243 series provisions, Eleventh Schedule 29 subjects, reservation provisions (SCs/STs/women including 50% in some states), State Election Commission and State Finance Commission, PESA provisions and applicability, three-tier structure and its exceptions, comparison with municipalities (74th Amendment), and devolution challenges. SSC frequently asks about the first state to implement Panchayati Raj and the number of subjects in the Eleventh Schedule.',
}
