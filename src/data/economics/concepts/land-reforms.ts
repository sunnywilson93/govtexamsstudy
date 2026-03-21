import type { SubjectConcept } from '@/types/subject-notes'

export const landReformsConcept: SubjectConcept = {
  topic: 'land-reforms',
  title: 'Land Reforms',
  description:
    'Zamindari abolition, tenancy reforms, land ceiling legislation, Bhoodan movement, LARR Act 2013, Forest Rights Act 2006, SVAMITVA drone survey, DILRMP digitisation, and contemporary land governance challenges.',
  category: 'Planning & Development',
  keyDates: [
    { year: '1793', event: 'Permanent Settlement (Lord Cornwallis) \u2014 created zamindari system in Bengal, Bihar, Odisha' },
    { year: '1820', event: 'Ryotwari System (Thomas Munro) \u2014 direct settlement with cultivators in Madras, Bombay' },
    { year: '1822', event: 'Mahalwari System (Holt Mackenzie) \u2014 village-level revenue settlement in NW Provinces, Punjab' },
    { year: '1950', event: 'Zamindari Abolition Acts passed across states \u2014 First Amendment (1951) protected land reform laws' },
    { year: '1951', event: 'First Amendment: Articles 31A, 31B, Ninth Schedule inserted to shield land reform laws from judicial review' },
    { year: '1953', event: 'Vinoba Bhave\'s Bhoodan (gift of land) movement gained momentum \u2014 4.5 million acres donated' },
    { year: '1955', event: 'First Five Year Plan emphasised land reform as foundation for agricultural development' },
    { year: '1972', event: 'Central guidelines for land ceiling legislation \u2014 ceiling of 10-54 acres depending on land quality' },
    { year: '1978', event: 'Operation Barga in West Bengal \u2014 1.5 million sharecroppers registered with inheritable rights' },
    { year: '2006', event: 'Forest Rights Act (Scheduled Tribes and Other Traditional Forest Dwellers Act) enacted' },
    { year: '2008', event: 'Digital India Land Records Modernisation Programme (DILRMP) launched' },
    { year: '2013', event: 'LARR Act (Right to Fair Compensation in Land Acquisition, Rehabilitation and Resettlement) enacted' },
    { year: '2016', event: 'NITI Aayog model land leasing law recommended (T. Haque Committee)' },
    { year: '2020', event: 'SVAMITVA scheme launched \u2014 drone-based survey of village residential areas' },
  ],
  notes: [
    {
      section: 'Colonial Land Revenue Systems',
      content:
        'Three systems under British rule: (1) Permanent Settlement / Zamindari (1793, Cornwallis): revenue fixed permanently. Zamindars were intermediaries; collected revenue, kept a share. Applied in Bengal, Bihar, Odisha, parts of UP. No incentive for land improvement; peasants had no tenurial security. (2) Ryotwari (1820, Munro): direct settlement with individual cultivators. No intermediaries. Revenue reassessed periodically. Applied in Madras, Bombay, Assam. Peasants were owners but revenue demand was high (initially 50% of produce). (3) Mahalwari (1822, Mackenzie): revenue settled with the village (mahal) as a unit. Headman collected collectively. Applied in NW Provinces, Punjab, parts of Central India. These systems created deep inequalities: absentee landlordism, rack-renting, peasant indebtedness, no tenurial security. Post-independence reforms targeted dismantling this structure.',
    },
    {
      section: 'Zamindari Abolition \u2014 Phase 1',
      content:
        'Abolition of intermediaries was the first and most comprehensive reform. Land is a State subject (Entry 18, List II). Patna HC struck down Bihar\'s abolition act as violating property rights (Arts. 19(1)(f) and 31). Government responded with the First Amendment (1951): Article 31A shields acquisition-of-estate laws from Arts. 14 and 19. Article 31B + Ninth Schedule immunise listed laws from Part III judicial review (first 13 entries were all land reform acts). Implementation: zamindari abolished in most states by 1956 \u2014 UP (1951), Bihar (1950), Madras (1948-50), Bombay (1949-50). ~20 million tenants became direct owners of ~250 million acres. Impact: ended feudal exploitation, tillers became owners, eliminated revenue extraction. Limitations: many zamindars retained land via "personal cultivation" claims, relative transfers, and benami holdings. This was the most successful reform \u2014 strong political will, small number of zamindars affected, large number of tenants benefited.',
    },
    {
      section: 'Tenancy Reforms \u2014 Phase 2',
      content:
        'Three objectives: (1) security of tenure \u2014 no arbitrary eviction; (2) rent regulation \u2014 capped at 1/4th to 1/5th of gross produce (vs earlier 1/2 to 2/3); (3) ownership conferment \u2014 long-term cultivators can acquire rights. Best implementations: West Bengal \u2014 Operation Barga (1978-82): 1.5 million bargadars registered with inheritable rights. Rent: 25% irrigated, 50% unirrigated. Combined with Panchayati Raj, considered India\'s most successful tenancy reform. Kerala \u2014 Land Reforms Act 1963 (amended 1969): conferred ownership on tenants and hutment dwellers, fixed ceiling, virtually eliminated tenancy \u2014 among the most radical globally. Weak implementation: Bihar, UP, Rajasthan \u2014 landlords evicted tenants before laws took effect; benami holdings persisted. Current: 10\u201312% of land under informal tenancy. NITI Aayog Committee (2016, T. Haque) recommended legalising tenancy so tenants access crop loans, insurance, MSP. Several states (MP, UP, Uttarakhand) enacted model leasing laws.',
    },
    {
      section: 'Land Ceiling & Redistribution \u2014 Phase 3',
      content:
        'Ceiling legislation set upper limits on holdings and redistributed surplus to the landless. First FYP (1951-56) identified land reform as developmental foundation. Nagpur Resolution (INC, 1959) recommended ceiling. National guidelines (1972): 10\u201318 acres (irrigated) to 27\u201354 acres (dry). Family of 5 as unit. Implementation challenges: (1) delayed legislation gave time for partition, benami, trust registrations; (2) exemptions for cooperatives, religious trusts, plantations; (3) dominant landed castes controlled state politics. Results: 6.4 million acres declared surplus. 5.4 million distributed (84.5%). 5.5 million beneficiaries \u2014 mostly tiny plots (0.5\u20131 acre) insufficient for viability. SC/ST received ~40%. Poor-quality land disproportionately declared surplus. Best: Kerala, WB, J&K. Poor: Bihar, UP, Rajasthan. Impact on landholding Gini: barely changed since 1970s. NSSO SAS 2019: 86.2% small/marginal (<2 ha) cultivating 47.3%; top 9.4% operate 52.7%.',
    },
    {
      section: 'Bhoodan-Gramdan Movement',
      content:
        'Bhoodan (Gift of Land): started by Vinoba Bhave in 1951 at Pochampally, Telangana. Aimed at voluntary redistribution through moral persuasion (Gandhian approach). Bhave walked across India asking landlords to donate 1/5th of land as a "fifth child." Results: ~4.5 million acres donated, but only a fraction was usable or transferred \u2014 much was rocky, infertile, or litigated. Gramdan (Gift of Village): entire villages donated land for collective management. ~150,000 villages declared Gramdan but actual implementation was minimal. Jayaprakash Narayan joined the movement. Assessment: morally significant but practically limited. Voluntary redistribution could not substitute for institutional reform. Lost momentum by the 1960s, but demonstrated the depth of land inequality and created moral pressure for legislation.',
    },
    {
      section: 'Land Acquisition \u2014 LARR Act 2013',
      content:
        'LARR Act 2013 replaced the colonial Land Acquisition Act 1894. The 1894 Act allowed acquisition for any "public purpose" with inadequate compensation (circle rates, well below market), no mandatory rehabilitation, and frequent urgency-clause abuse. LARR Act provisions: (1) Consent: 80% for private projects, 70% for PPP, none for government (but SIA required). (2) Compensation: 2x market in urban, 4x in rural, plus 100% solatium, plus R&R for each affected family. (3) SIA mandatory before acquisition, reviewed by Expert Group. (4) Food security: multi-crop irrigated land acquirable only as last resort; equivalent culturable waste must be developed. (5) Unused land returned within 5 years. (6) Retrospective: if old-Act land not possessed for 5 years, LARR applies. 2015 Amendment controversy: bill tried to remove consent and SIA for 5 categories (defence, rural infrastructure, affordable housing, corridors, PPP). Three ordinances issued but bill lapsed. Several states (TN, Gujarat, Maharashtra, Telangana, Jharkhand) enacted local relaxations.',
    },
    {
      section: 'Consolidation of Holdings & Cooperative Farming',
      content:
        'India\'s land is highly fragmented \u2014 average holding: 1.08 hectares (Agriculture Census 2015-16). 86.2% small/marginal. Multiple non-contiguous plots per farmer from inheritance divisions. Fragmentation reduces efficiency: wasted boundary land, difficulty using machinery, inadequate irrigation. Consolidation (chakbandi): exchange and redistribute plots into compact holdings. Best: Punjab, Haryana, UP (western). UP Consolidation Act 1953. ~50% area consolidated in Punjab/Haryana. Cooperative farming: proposed in 1st and 2nd FYPs. Types: better farming (pooling resources, individual ownership), joint farming (pooling land), tenant farming (land leased to cooperative). Limited success due to resistance. FPOs (Farmer Producer Organisations): modern alternative \u2014 collective marketing, input purchase, value addition (not collective farming). 10,000 FPO target, Rs 6,865 crore allocated.',
    },
    {
      section: 'Land Records \u2014 DILRMP & SVAMITVA',
      content:
        'India\'s land records are fragmented, inaccurate, and dispute-prone \u2014 67% of civil cases are property-related. British-era patwari paper records remain the basis in many areas. DILRMP (2008): aims to shift from presumptive to conclusive/guaranteed titling. Components: (1) RoR computerisation (92%+). (2) Cadastral map digitisation (75%). (3) GPS/drone/satellite survey (30\u201340% villages). (4) Registration-mutation integration (automatic mutation on sale). (5) ULPIN \u2014 14-digit unique parcel ID (like Aadhaar for land), pilot in 10 states. SVAMITVA (April 2020): drones map village residential areas, creating "property cards." 3.17 lakh villages surveyed, 2.6 crore cards issued (2024). Benefits: legal homestead document usable as bank collateral, reduced village disputes, panchayat planning/tax collection, joint-name cards empower women. Target: all 6.62 lakh villages by 2025. Conclusive titling: government guarantees title; disputes compensated from insurance fund (Torrens system). Rajasthan passed Urban Land Title Certification Act 2016. Central model Act circulated but full implementation remains distant.',
    },
    {
      section: 'Forest Rights Act 2006',
      content:
        'Recognises rights of forest-dwelling tribal and non-tribal communities residing for generations. IFR (Individual Forest Rights): up to 4 hectares for families cultivating for 3 generations (75 years) before December 13, 2005. CFR (Community Forest Rights): grazing, collecting MFP, managing water bodies. Community can protect, regenerate, and manage forest resources. Habitat rights for 73 PVTGs (Particularly Vulnerable Tribal Groups). Implementation (2024): 23.6 lakh individual titles (47 lakh acres), 1 lakh community titles (54 lakh acres). Top: MP, Chhattisgarh, Maharashtra, Odisha. Minimal: NE states, Jharkhand, Gujarat. 2019 SC order (later stayed) directed eviction of rejected claimants \u2014 a constitutional crisis averted. Gram Sabha verifies and approves claims. MFP: MSP for 87 items; 5,000+ Van Dhan Vikas Kendras for value addition. Revenue supports 5 crore tribal households. TRIFED manages procurement and marketing.',
    },
    {
      section: 'Constitutional Framework for Land',
      content:
        'Land is a State subject (Entry 18, List II). Article 31A: acquisition-of-estate laws immune from Arts. 14 and 19. Article 31B: Ninth Schedule laws immune from Part III. But I.R. Coelho (2007): post-1973 Ninth Schedule laws can be reviewed if they violate basic structure. Article 31C: laws implementing DPSP Arts. 39(b) and 39(c) (equitable resource distribution, preventing wealth concentration) immune from Arts. 14 and 19. Article 300A (44th Amendment, 1978): "No person shall be deprived of his property save by authority of law." Right to property was removed as a fundamental right (Art. 19(1)(f) deleted) and made a constitutional/legal right. DPSP Art. 38(2): minimise inequalities. Art. 39: material resources serve common good. Fifth Schedule (Art. 244(1)): tribal land alienation restrictions in 10 states. PESA Act 1996: gram sabha empowered to prevent alienation in Scheduled Areas.',
    },
    {
      section: 'Contemporary Land Issues',
      content:
        'Challenges: (1) Litigation: 67% of civil cases, 25+ years average resolution, 4+ crore property cases pending. (2) Encroachment: ~10% of government land encroached nationally. (3) Displacement: development projects have displaced an estimated 6\u20137 crore people since independence; tribals disproportionately affected. (4) Industrial Land Bank portal (2020): maps 5.5 lakh hectares of available land on GIS. Helps investors avoid acquisition. (5) Land pooling: landowners pool land for development, receive developed plots + compensation. Used in Amaravati (33,000 acres). DDA also adopted it. (6) Land-use conversion: agri to non-agri requires state approval, often delayed 6\u201312 months. PM GatiShakti aims to streamline. (7) Urban Land Ceiling Act 1976 (repealed 1999) had limited success. FSI restrictions limit vertical growth. (8) SEZ land: post-2005 acquisition generated protests (Singur-Nandigram, 2006-07). (9) Smart Cities and corridor projects need significant land under LARR.',
    },
    {
      section: 'State-Wise Land Reform Achievements',
      content:
        'Kerala: most radical \u2014 Land Reforms Act 1969 virtually eliminated tenancy, strict ceiling, empowered hutment dwellers. Strong communist-led peasant movements. Result: very low landlessness, high social indicators. West Bengal: Operation Barga \u2014 1.5 million sharecroppers registered, panchayat-based implementation, 2.5 million beneficiaries (mostly small plots). Post-2000 industrial decline partly attributed to land acquisition difficulty. J&K: Big Landed Estates Abolition Act 1950 \u2014 radical, implemented by Sheikh Abdullah. Ceiling 22 acres. 4.5 lakh beneficiaries. Bihar/UP/Rajasthan: weak implementation \u2014 benami holdings, political capture by landed castes, poor revenue administration. Bihar\'s inequality among the worst. Punjab/Haryana: best consolidation (50%+ area), Green Revolution beneficiaries. Lesson: land reform requires political will, strong administration, and a mobilised peasantry. Where all three existed (Kerala, WB), outcomes were significantly better.',
    },
    {
      section: 'Land Reforms \u2014 Impact & Unfinished Agenda',
      content:
        'Assessment: zamindari abolition was most successful (20 million owners created). Tenancy reform moderately successful (best in Kerala, WB). Ceiling had limited impact (only 5.4 million acres redistributed). Digitisation is ongoing and promising. Unfinished: (1) top 10% hold ~50% of agricultural land; 15% of rural households are landless labourers. (2) Women own only 12.8% of land (Agriculture Census 2015-16). Joint SVAMITVA titling and state inheritance reforms are steps forward but insufficient. (3) 10\u201312% under unrecorded tenancy; tenants lack credit, insurance, MSP access. (4) Tribal alienation persists through fraud, debt, coercion despite Fifth Schedule and PESA. (5) Conclusive titling would dramatically cut litigation and secure rights but requires accurate records, dispute resolution, and massive institutional capacity. (6) Formalising leasing would unlock productivity \u2014 productive farmers access more land, small holders earn rental income with ownership intact.',
    },
    {
      section: 'Tribal Land Alienation & Fifth Schedule',
      content:
        'Despite safeguards, tribal land alienation is widespread. Fifth Schedule (Article 244(1)): covers Scheduled Areas in 10 states. Governor can modify/exclude laws. PESA 1996: gram sabha must be consulted before acquisition; can prevent alienation and restore unlawfully alienated land; prior recommendation mandatory for mining leases. State anti-alienation laws prohibit tribal-to-non-tribal transfers. Yet alienation persists: fraudulent sales, benami, forced displacement for mining/dams/industry, debt bondage. Estimates: 8\u201310 lakh acres alienated in Jharkhand alone since 1947; similar in Odisha, Chhattisgarh, AP. Samata Judgement (SC, 1997): only government/government undertakings can acquire tribal land in Scheduled Areas for mining \u2014 widely cited but weakly enforced. The tension between tribal protection and industrial/mining development directly fuels Naxalism in the Red Corridor (Jharkhand, Chhattisgarh, Odisha, Maharashtra).',
    },
    {
      section: 'Land Reforms & Agricultural Productivity',
      content:
        'The relationship is contested. Positive: (1) zamindari abolition increased cultivator incentives \u2014 Bengal and Bihar saw improved investment. (2) Operation Barga: agricultural output growth accelerated after sharecropper registration \u2014 secure tenure improved effort and investment. (3) Kerala: despite small holdings, diversification (spices, rubber, coconut) succeeded partly through secure rights. Negative/ambiguous: (1) fragmentation from inheritance \u2014 average holding fell from 2.28 ha (1970-71) to 1.08 ha (2015-16). (2) Ceiling evasion preserved large holdings without creating an efficient small-farmer economy. (3) Tenancy restrictions paradoxically reduce access for productive farmers who could lease more land. Inverse size-productivity: small farms show higher output/hectare (intensive family labour) but lower output/worker (low mechanisation). Documented by Amartya Sen but recent evidence suggests the relationship weakens with mechanisation. East Asian reforms (Japan 1945+, South Korea, Taiwan) succeeded through swift execution under external pressure, green revolution technology, and rapid industrialisation absorbing surplus labour. India\'s reforms were slower, contested, and lacked sufficient non-farm job creation.',
    },
    {
      section: 'Urban Land Issues & Housing',
      content:
        'Urban land = 3% of area but 35%+ of population. Issues: (1) Urban Land Ceiling Act 1976 (repealed 1999) \u2014 aimed to release land for affordable housing; failed from exemptions, litigation, political influence. WB and Kerala retained it. (2) FSI: Mumbai 1.33 (among the world\'s lowest) vs Tokyo 15\u201320, NYC 15, Singapore 12\u201325. Low FSI forces sprawl, increases commutes, makes housing unaffordable. (3) PMAY-Urban: CLSS Rs 2.67 lakh interest subsidy (EWS/LIG); Rs 2.30 lakh MIG-I; Rs 2.35 lakh MIG-II. 1.18 crore sanctioned, 76 lakh completed. (4) Slums: 65.5 million (Census 2011), likely 80+ million. Dharavi (2.4 sq km, 1 million residents) redevelopment awarded to Adani (2022). (5) RERA 2016: developer regulation, buyer protection, mandatory project registration, delay penalties. (6) Land-use conversion: agri to residential/commercial needs state approval \u2014 often takes 6\u201312 months.',
    },
    {
      section: 'Land Banking & Industrial Land Acquisition',
      content:
        'Industrial Land Bank (ILB) Portal (2020): part of PM GatiShakti. Maps 5.5 lakh hectares on GIS. Reduces acquisition friction. SIDCs develop industrial land: MIDC (Maharashtra), GIDC (Gujarat), RIICO (Rajasthan), APIIC (AP). Industrial Corridors: DMIC (1,504 km, $100 billion), CBIC, AKIC each require massive acquisition under LARR. Singur (WB, 2006): Tata Motors acquired 997 acres for Nano; forced acquisition with inadequate compensation led to Mamata Banerjee-led resistance. SC ordered return of "unwilling" farmers\' land (2016). Singur triggered political change in WB and strengthened LARR provisions. Land acquisition delays remain the single biggest bottleneck for industrial investment.',
    },
    {
      section: 'Water Rights & Irrigation-Linked Land Issues',
      content:
        'Water rights are tied to land ownership. Principles: riparian (adjacent landowners), prior appropriation (first user priority), groundwater as private resource of landowners (colonial-era English common law \u2014 caused catastrophic over-extraction). India: world\'s largest groundwater user (25% of global). 60%+ of irrigation and 85% of drinking water depend on groundwater. CGWA regulates over-exploited areas but only 12% of extraction is regulated. NITI Aayog: 54% of wells declining; 21 major cities projected to exhaust groundwater by 2030. Canal irrigation created "water lords" \u2014 irrigated farmers are significantly wealthier. Land ceiling was differentiated by irrigation status. LARR Act protects multi-crop irrigated land. PM-KUSUM: 35 lakh solar pumps target. Watershed development under PMKSY for 56% rain-fed cropped area. JJM: 14.7 crore connections (77% target).',
    },
    {
      section: 'Land Revenue Administration & Records',
      content:
        'India\'s oldest surviving admin system \u2014 dating to Todar Mal\'s Mughal system, formalised by the British. Officials: Patwari/Lekhpal/Talati (village-level, maintains records; often covers 3\u20135 villages; widely criticised for corruption), Tehsildar (sub-district \u2014 mutations, collection, revenue courts), District Collector (overall charge, also District Magistrate). Record types: RoR/Jamabandi/Patta (ownership, tenancy, area, revenue), Khasra/Survey Number (field map), Mutation register (ownership changes). Critical gap: registration (sale deed) and mutation (revenue record) are separate \u2014 creating dual records and disputes. DILRMP aims to integrate them. Registration Act 1908: all transactions above Rs 100 must be registered. Stamp duty: 5\u201310% of property value \u2014 a major state revenue source (Rs 2\u20133 lakh crore annually). Under-reporting to evade stamp duty is widespread \u2014 creating a parallel black economy estimated at 40\u201350% of total property transactions.',
    },
    {
      section: 'Comparative Land Reforms \u2014 India & East Asia',
      content:
        'East Asian reforms are the gold standard. Japan (post-1945): under US occupation, absentee landlord land was compulsorily purchased and redistributed. Ceiling: 3 ha (1 for absentees). By 1950, 80% owner-operated (from 46%). Success: external pressure, swift execution (3 years), simultaneous modernisation. South Korea (1948-50): ceiling 3 ha; 65% of farmland redistributed; combined with compulsory education and industrialisation. Taiwan (1949-53): "Land to the Tiller" \u2014 government compensated landlords with industrial stocks, converting them to industrialists. Ceiling: 2.9 ha paddy. China (1950-53): all landlord land redistributed to poor peasants; later collectivised, then de-collectivised (Household Responsibility System, 1978). India\'s differences: (1) no external pressure; (2) landed castes controlled state politics; (3) federal structure (state subject); (4) slow implementation allowed evasion; (5) insufficient non-farm jobs to absorb surplus labour. Lesson: success requires swift, comprehensive reform combined with industrialisation providing alternative livelihoods.',
    },
    {
      section: 'Joint Forest Management & Community Rights',
      content:
        'JFM (post-1990 National Forest Policy): government and communities jointly manage forests. 1.18 lakh committees managing 23+ million hectares (2024). Community provides protection in exchange for produce share and employment. Better in MP, Odisha, Gujarat; weak in NE. Criticism: JFM gives usufruct but not ownership \u2014 communities remain dependent on Forest Department. CFR rights under FRA 2006 are legally stronger. JFM-CFR overlap creates confusion \u2014 post-FRA, focus should shift to CFR governance. Van Panchayats (Uttarakhand): oldest community forest system (1931). 12,000+ managing 4+ lakh hectares. CAMPA 2016: companies destroying forests pay for compensatory afforestation. Rs 54,000+ crore collected. NPV: Rs 6\u201310 lakh/hectare also charged. Forest Conservation Act 1980 requires central approval for forest diversion. 2023 Amendment exempted land within 100 km of borders and strategic projects \u2014 criticised by environmentalists.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'UPSC Mains (GS 1 Indian Society, GS 3 Land Reforms) tests extensively. Prelims covers LARR Act provisions, SVAMITVA, FRA 2006, DILRMP, and Articles 31A, 31B, Ninth Schedule, 300A. SSC CGL asks about zamindari abolition, ceiling, and SVAMITVA. State PSCs heavily test state-specific land legislation and colonial revenue systems.',
}
