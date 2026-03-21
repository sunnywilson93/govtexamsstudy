import type { SubjectConcept } from '@/types/subject-notes'

export const municipalitiesConcept: SubjectConcept = {
  topic: 'municipalities',
  title: 'Municipalities (Urban Local Government)',
  description:
    'The 74th Amendment (1992) gave constitutional status to urban local bodies via Part IXA (Art 243P-243ZG) and the Twelfth Schedule (18 subjects). Three types: Nagar Panchayat, Municipal Council, Municipal Corporation. Exam staples: 73rd vs 74th comparison, DPC (4/5 elected), MPC (2/3 elected), Ward Committees for 3 lakh+ population, and Madras as India\'s first municipal corporation (1687).',
  category: 'Local Government',
  keyDates: [
    { year: '1687', event: 'Madras (Chennai) Municipal Corporation established — first municipal corporation in India, by a charter of James II' },
    { year: '1726', event: 'Municipal corporations established in Bombay (Mumbai) and Calcutta (Kolkata) by a charter of George I' },
    { year: '1793', event: 'Charter Act of 1793 allowed the Governor-General to appoint Justices of the Peace for towns — earliest formal municipal administration' },
    { year: '1842', event: 'Bengal Municipal Act enacted — one of the first comprehensive municipal laws in British India' },
    { year: '1882', event: 'Lord Ripon\'s Resolution on Local Self-Government — considered the "Magna Carta" of local self-government in India; introduced elected non-official chairmen' },
    { year: '1907', event: 'Royal Commission on Decentralization (Hobhouse Commission) examined the working of local self-government bodies under Ripon\'s scheme' },
    { year: '1919', event: 'Government of India Act 1919 (Montagu-Chelmsford Reforms) made local self-government a "transferred" subject under provincial ministers' },
    { year: '1935', event: 'Government of India Act 1935 further strengthened provincial control over municipalities under provincial autonomy' },
    { year: '1988', event: 'National Commission on Urbanisation (Charles Correa) recommended strengthening urban local governance' },
    { year: '1992', event: '74th Constitutional Amendment Act passed; added Part IXA (Art 243P-243ZG) and Twelfth Schedule (18 subjects)' },
    { year: '1 Jun 1993', event: '74th Amendment came into force on 1 June 1993' },
    { year: '2005', event: 'Jawaharlal Nehru National Urban Renewal Mission (JNNURM) launched — linked infrastructure funding to governance reforms including 74th Amendment compliance' },
    { year: '2015', event: 'Smart Cities Mission and AMRUT launched for urban transformation; criticized for creating SPVs bypassing elected municipalities' },
    { year: '2021', event: 'AMRUT 2.0 launched focusing on water supply, sewerage, and urban transport in all urban local bodies' },
  ],
  notes: [
    {
      section: 'Types of Municipalities (Art 243Q)',
      content:
        'Art 243Q mandates three types: (1) Nagar Panchayat — transitional area (rural-to-urban transition); (2) Municipal Council (Nagar Palika) — smaller urban area; (3) Municipal Corporation (Nagar Nigam) — larger urban area. The Governor notifies categories based on population, density, non-agricultural employment, revenue, and economic importance. Thresholds vary by state. Bodies OUTSIDE the 74th Amendment framework: Cantonment Boards (Defence Ministry, Cantonments Act 2006), Port Trusts, Special Purpose Agencies (development authorities, housing boards), and NDMC (statutory body under NDMC Act, 1994). Exam trap: these bodies are NOT municipalities under Part IXA.',
    },
    {
      section: 'Composition, Election, and Reservation (Art 243R, 243S, 243T)',
      content:
        'Art 243R: all seats filled by direct election from wards. State legislature can provide for special knowledge nominees (some states deny them voting rights), representation of MPs/MLAs/MLCs, and committee chairpersons. Art 243S: Ward Committees mandatory in municipalities with 3 lakh+ population. Art 243T reservations parallel the 73rd Amendment: SC/ST seats proportional to population; at least 1/3 total seats reserved for women (including within SC/ST); states may provide OBC reservation; chairperson offices reserved for SCs, STs, women. Chairperson election method left to state — direct in most corporations, indirect by councillors in others. Several states extended women\'s reservation to 50%. Minimum age: 21 years.',
    },
    {
      section: 'Ward Committees and Area Sabhas (Art 243S)',
      content:
        'Art 243S makes Ward Committees mandatory in 3 lakh+ municipalities. State legislature determines composition and functioning. Ward Committees serve as the urban equivalent of the Gram Sabha — citizen participation at the local level. The ward\'s elected councillor typically chairs. Area Sabhas (Mohalla Sabhas) at sub-ward level exist in some states but are NOT constitutionally mandated. 2nd ARC recommended strengthening them for participatory budgeting. In practice, Ward Committees remain weak — unclear powers, poor funding, infrequent meetings. Kerala\'s Ward Sabhas and Delhi\'s Mohalla Sabhas are notable attempts at revitalization.',
    },
    {
      section: 'Tenure, Disqualification, and Officers (Art 243U, 243V)',
      content:
        'Art 243U: five-year term from first meeting. Elections must complete before term expiry, or within 6 months of dissolution. Reconstituted municipality serves ONLY the remainder — not a fresh 5 years (same as panchayats under Art 243E). If remainder is under 6 months, no elections needed. Art 243V: disqualification on same grounds as state legislature elections. Minimum age 21. The dual authority structure: Municipal Corporation has an elected Mayor (head) + Municipal Commissioner (IAS officer, chief executive). Municipal Councils have an elected chairperson + Chief Officer (state government appointee).',
    },
    {
      section: 'Powers, Functions, and the Twelfth Schedule (Art 243W)',
      content:
        'Art 243W empowers state legislatures to endow municipalities with powers for self-government, including plans for economic development and social justice related to the 18 Twelfth Schedule subjects. The 18 subjects: (1) Urban planning, (2) Land-use and building regulation, (3) Economic and social development planning, (4) Roads and bridges, (5) Water supply, (6) Public health and solid waste management, (7) Fire services, (8) Urban forestry and environment, (9) Weaker sections\' interests, (10) Slum improvement, (11) Urban poverty alleviation, (12) Urban amenities (parks, gardens, playgrounds), (13) Cultural and educational aspects, (14) Burials and cremations, (15) Cattle pounds and animal cruelty prevention, (16) Vital statistics (births and deaths), (17) Street lighting, parking, bus stops, (18) Slaughterhouse and tannery regulation. Only a few states have fully devolved all 18 — a favourite "how many subjects" question for SSC.',
    },
    {
      section: 'Finance, Taxation, and State Finance Commission (Art 243X, 243Y)',
      content:
        'Art 243X authorizes municipal taxation — levies, tolls, fees; assigned state taxes; grants from Consolidated Fund. Key revenue sources: property tax (most important own-source), profession tax, entertainment tax, advertisement tax, water/sanitation charges, building fees. Art 243Y: the SAME Finance Commission (under Art 243I for panchayats) reviews municipal finances too. 15th Finance Commission made direct grants to ULBs at significant scale — tied to reforms (property tax improvement, audited accounts). Despite provisions, most municipalities remain financially weak: poor property tax collection, below-cost user charges, heavy dependence on state transfers.',
    },
    {
      section: 'State Election Commission and Elections (Art 243ZA)',
      content:
        'Art 243ZA: the SAME State Election Commission (Art 243K) that conducts panchayat elections also conducts municipal elections. SEC appointed by Governor, removable only like an HC judge — ensuring independence. SC in State of U.P. v. Pradhan Sangh Kshettra Samiti (1995): SEC must function independently. In practice, states frequently delay municipal elections and interfere with SEC. 15th Finance Commission linked grant eligibility to timely elections.',
    },
    {
      section: 'District Planning Committee (Art 243ZD)',
      content:
        'Art 243ZD mandates a District Planning Committee (DPC) at the district level. Purpose: consolidate panchayat and municipality plans into a district draft development plan. The DPC bridges rural and urban planning. Composition: at least 4/5 members elected from panchayat and municipality members, proportional to rural-urban population ratio. State legislature determines the chairperson. DPC must consider spatial planning, water/resource sharing, integrated infrastructure, environmental conservation. In practice, DPCs stay weak in most states — no technical staff, limited authority. Exam must-know: DPC composition is 4/5 elected (vs MPC\'s 2/3 elected).',
    },
    {
      section: 'Metropolitan Planning Committee (Art 243ZE)',
      content:
        'Art 243ZE mandates a Metropolitan Planning Committee (MPC) for areas with 10 lakh+ population spanning two or more municipalities/panchayats. Prepares a metropolitan-area development plan. Composition: at least 2/3 elected from municipality and panchayat members, proportional to rural-urban ratio. MPC considers local plans, coordinated spatial planning, resource sharing, infrastructure integration, central/state priorities. Very few cities have functional MPCs — Mumbai, Chennai, Kolkata, Hyderabad. Delhi uses DDA and NCRPB instead. Key exam comparison: DPC = 4/5 elected; MPC = 2/3 elected.',
    },
    {
      section: '73rd vs 74th Amendment — Comparative Analysis',
      content:
        'This comparison is a guaranteed exam question. Common features: constitutional status, SC/ST/women reservation (1/3 minimum), 5-year term, 6-month election deadline after dissolution, same SEC and SFC, remainder-term rule. Key differences: 73rd = rural panchayats (Part IX, Art 243-243O, 29 Eleventh Schedule subjects); 74th = urban municipalities (Part IXA, Art 243P-243ZG, 18 Twelfth Schedule subjects). 73rd has Gram Sabha (Art 243A) — no direct urban equivalent (Ward Committees serve partially). 73rd mandates three-tier structure (relaxed for states under 20 lakh); 74th has three types but not necessarily three tiers. 74th uniquely provides DPC (Art 243ZD) and MPC (Art 243ZE) — absent from Part IX. Twelfth Schedule has urban-specific subjects (fire services, slum improvement); Eleventh Schedule has rural-specific ones (agriculture, animal husbandry).',
    },
    {
      section: 'Urban Governance Reforms and Recent Developments',
      content:
        '74th Amendment implementation remains uneven. JNNURM (2005-2014) was the first major initiative linking infrastructure funding to governance reforms. Smart Cities Mission (2015), AMRUT (2015), and Swachh Bharat (Urban) followed but drew criticism for creating SPVs that bypass elected municipalities. HPEC (2011, Isher Judge Ahluwalia) estimated India needs Rs 39 lakh crore in urban infrastructure over 20 years. 2nd ARC recommended empowered mayors with fixed 5-year terms. AMRUT 2.0 (2021) focuses on water supply, sewerage, urban transport. 15th Finance Commission tied grants to reforms: SFC constitution, audited accounts, property tax improvement.',
    },
    {
      section: 'Exclusions and Bar on Interference (Art 243ZC, 243ZF, 243ZG)',
      content:
        'Art 243ZC: Part IXA does NOT apply to Fifth Schedule areas, Sixth Schedule tribal areas, or industrial townships (Bhilai, Rourkela). Parliament can extend it with modifications. Art 243ZF: existing municipal laws continued until amended or 1 year from commencement, if not inconsistent with Part IXA. Art 243ZG: bar on court interference — no court can question delimitation or seat allotment; municipal elections challenged only through election petitions. This parallels Art 243O for panchayats and prevents elections from being stalled by litigation.',
    },
    {
      section: 'Historical Evolution of Urban Local Government',
      content:
        'Urban local government history predates rural by centuries. Madras Municipal Corporation (1687) — oldest in the Commonwealth outside Britain. SSC favourite fact. Bombay and Calcutta followed (1726). Lord Ripon\'s Resolution (1882) — the "Magna Carta" of local self-government: elected majorities, non-official chairmen, reduced official control. British bureaucracy resisted implementation. GoI Act 1919 made local self-government a "transferred" subject (dyarchy). GoI Act 1935 strengthened provincial control. Post-independence, municipalities ran entirely under state laws until the 74th Amendment standardized the framework in 1992.',
    },
    {
      section: 'Municipal Finance — Property Tax and Revenue Challenges',
      content:
        'Municipal finance is the most critical urban governance challenge. Property tax collects only ~0.15% of GDP vs 1-3% in developed countries. Reasons: outdated registers, no GIS mapping, political reluctance, government property exemptions, poor enforcement. 15th Finance Commission tied grants to property tax improvement. Other sources: profession tax (capped Rs 2,500/year), advertisement tax, water/sewerage charges (below cost recovery), building fees. Municipal bonds developing slowly — Pune, Ahmedabad, Lucknow, Bhopal, Indore have issued, but the market stays small. Own-source revenue sits under 30% in most municipalities — heavy dependence on state/central grants.',
    },
    {
      section: 'Empowered Mayor Model and Governance Reforms',
      content:
        'In most corporations, the Mayor is ceremonial (1-year or 2.5-year term, elected by councillors), while real executive power sits with the Municipal Commissioner (IAS). This friction undermines accountability. 2nd ARC recommended: directly elected Mayor, fixed 5-year term, chief executive of the corporation, Commissioner as administrative officer under the Mayor. Some states have experimented — Maharashtra extended Mayor terms to 2.5 years; some states allow direct election. International models: London (directly elected Mayor), New York (Mayor as chief executive). Critics warn of Mayor-state government conflicts in India\'s multi-party system.',
    },
    {
      section: 'Smart Cities Mission and Impact on Municipal Governance',
      content:
        'Smart Cities Mission (2015): 100 cities selected competitively. Each city set up an SPV (Companies Act company) with equal state + ULB equity. CEO is typically an IAS officer. The SPV model draws criticism for bypassing elected municipalities — decisions on land use and infrastructure made by SPV boards, not councillors or the Mayor. UN-Habitat flagged this as "democratic deficit." Focus: area-based development (retrofitting, redevelopment, greenfield) + pan-city IT solutions. AMRUT covers all statutory towns (water, sewerage, parks, transport) but also relies on state structures rather than empowering ULBs directly.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Important for all exams. Key tested areas: three types of municipalities, Twelfth Schedule 18 subjects (vs Eleventh Schedule comparison), reservation provisions, DPC composition (4/5 elected) and MPC composition (2/3 elected), Lord Ripon\'s contribution, 73rd vs 74th Amendment comparison, Ward Committees (3 lakh+ population), State Election Commission and State Finance Commission. SSC exams ask about the first municipal corporation in India (Madras, 1687) and the number of Twelfth Schedule subjects (18).',
}
