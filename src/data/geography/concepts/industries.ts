import type { SubjectConcept } from '@/types/subject-notes'

export const industriesConcept: SubjectConcept = {
  topic: 'industries',
  title: 'Industries in India',
  description:
    'India is the 5th largest economy in the world and its industrial sector contributes about 26% to GDP. From heavy industries like iron & steel to IT and pharmaceuticals, India has a diversified industrial base. The Make in India initiative aims to transform India into a global manufacturing hub.',
  category: 'Economic Geography',
  keyDates: [
    { year: '1907', event: 'TISCO (Tata Iron & Steel Company) set up at Jamshedpur (Jharkhand) — India\'s first integrated steel plant' },
    { year: '1854', event: 'First cotton textile mill in India set up in Mumbai by C.N. Davar — beginning of modern textile industry' },
    { year: '1855', event: 'First jute mill established at Rishra near Kolkata — start of India\'s jute industry' },
    { year: '1956', event: 'Industrial Policy Resolution classified industries into three schedules (State, joint, private)' },
    { year: '1991', event: 'LPG Reforms — Liberalisation, Privatisation, Globalisation; delicensing, FDI opened up' },
    { year: '2005', event: 'SEZ Act — Special Economic Zones for export-oriented manufacturing with tax incentives' },
    { year: '2014', event: 'Make in India initiative launched — targets manufacturing to contribute 25% of GDP' },
    { year: '2020-21', event: 'PLI Scheme (Production Linked Incentive) launched for 14 sectors; Rs 1.97 lakh crore outlay' },
    { year: 'Steel', event: 'India is 2nd largest crude steel producer (after China) — ~125 million tonnes/year; target 300 MT by 2030' },
    { year: 'IT Industry', event: 'Revenue ~$245 billion (2023); employs 5.4 million; Bengaluru is "Silicon Valley of India"' },
    { year: 'Pharma', event: 'India produces 20% of global generic medicines; 3rd largest by volume; "Pharmacy of the World"' },
    { year: 'Textiles', event: 'Largest industry by employment (45 million); India is 2nd largest textile exporter; 6% of GDP' },
    { year: 'Automobile', event: 'India is 3rd largest automobile market; 4th largest manufacturer; Chennai = "Detroit of India"' },
    { year: '1984', event: 'Bhopal Gas Tragedy — Union Carbide methyl isocyanate leak; world\'s worst industrial disaster' },
  ],
  notes: [
    {
      section: 'Classification of Industries',
      content:
        'Industries can be classified on multiple bases: (1) By Raw Material: Agro-based (cotton textiles, jute, sugar, tea processing), Mineral-based (iron & steel, cement, aluminium), Forest-based (paper, plywood, furniture, lac), Marine-based (fish processing, sea-food export). (2) By Size of Investment: Large-scale (steel, automobiles, petroleum refining — investment >10 crore), Medium (5-10 crore), Small-scale (<5 crore), Cottage/Household (khadi, handloom, handicrafts — family-based). (3) By Ownership: Public Sector (SAIL, BHEL, ONGC, HAL), Private Sector (Tata Steel, Reliance, Infosys), Joint Sector, Cooperative (Amul/GCMMF, sugar cooperatives). (4) By Products: Heavy/Basic (iron & steel, heavy engineering), Consumer/Light (textiles, food processing), Capital Goods (machinery, machine tools), Intermediate (chemicals, petroleum products). (5) By Weber\'s Location Theory: Weight-losing industries locate near raw materials (steel, sugar, cement — raw material heavier than finished product, Material Index > 1), Weight-gaining industries locate near markets (soft drinks, bakery — MI < 1), Footloose industries can locate anywhere (IT, electronics — not tied to raw materials or markets). Understanding industrial classification helps answer UPSC questions about industrial location, policy, and sectoral analysis.',
    },
    {
      section: 'Iron & Steel Industry',
      content:
        'India is the 2nd largest crude steel producer globally (after China) with about 125 million tonnes annual production. Steel is called the "backbone of modern industry." Key integrated steel plants: Public Sector (under SAIL): Bhilai (Chhattisgarh — Russian collaboration, largest public sector plant; produces rails for Indian Railways), Rourkela (Odisha — German collaboration, first to use LD process in Asia), Durgapur (West Bengal — British collaboration), Bokaro (Jharkhand — Russian collaboration, largest by capacity), Salem (Tamil Nadu — stainless steel), Visakhapatnam (AP — shore-based plant). IISCO Steel Plant (Burnpur, WB — oldest integrated plant, 1918, now under SAIL). Private sector: TISCO/Tata Steel at Jamshedpur (1907, India\'s first integrated steel plant), JSW Steel (Vijayanagar, Bellary, Karnataka — largest private producer), JSPL (Raigarh, Chhattisgarh), Essar Steel (Hazira, Gujarat — now ArcelorMittal Nippon). Location factors: proximity to raw materials (iron ore — Odisha, Jharkhand; coking coal — Jharkhand, WB), water supply, transport, power, and market. India\'s steel belt is in the Chota Nagpur Plateau. National Steel Policy 2017 targets 300 million tonnes capacity by 2030. Per capita consumption (~75 kg) is well below global average (~230 kg).',
    },
    {
      section: 'Textile Industry — Cotton, Jute, Silk, and Wool',
      content:
        'Textiles is India\'s largest industry by employment (45 million direct, 100 million including allied) and contributes 6% to GDP and 12% to exports. Cotton textiles: India is the 2nd largest producer after China; first mill in Mumbai (1854, C.N. Davar). Major centres: Mumbai (Cottonopolis), Ahmedabad (Manchester of India), Coimbatore (Manchester of South India), Kanpur (Manchester of North India), Surat (synthetic textiles capital). Powerlooms produce 60%+ of cloth. Jute: India is largest producer; concentrated in West Bengal (Hooghly belt, 80% of output); first mill at Rishra (1855); faces competition from synthetics. Silk: India is 2nd largest producer (after China); four types: Mulberry (Karnataka — 70% of India\'s silk, Mysore silk is famous), Tasar/Tussar (Jharkhand, Chhattisgarh), Muga (Assam — unique golden silk, only in India, GI tag), Eri (Assam — "peace silk"). Wool: Rajasthan is largest wool-producing state; Ludhiana (Punjab) is hosiery capital. Government: ATUFS, Samarth, PM MITRA (7 mega textile parks approved).',
    },
    {
      section: 'IT, Pharma & Automobile Industries',
      content:
        'IT & Software: India\'s IT-BPM sector generates ~$245 billion revenue (2023); employs 5.4+ million; contributes 7.5% to GDP. Bengaluru is the "Silicon Valley of India" (HQ of Infosys, Wipro). Hyderabad ("Cyberabad" — Microsoft\'s largest campus outside US), Pune, Chennai (OMR IT corridor), NCR (Noida/Gurugram), Kolkata are other major hubs. India leads in IT outsourcing (55% of $250+ billion global market). Digital India programme aims for digitally empowered economy. Pharmaceutical: India is "Pharmacy of the World" — 20% of global generic medicines; 3rd largest by volume; supplies 50%+ of global vaccines. Hyderabad and Ahmedabad are major hubs. Serum Institute (Pune) is world\'s largest vaccine manufacturer (produced Covishield). Bharat Biotech (Hyderabad) developed Covaxin. PLI for pharma aims to reduce API import dependence from China (~70%). Automobile: India is 3rd largest market, 4th largest manufacturer; major clusters: Chennai (Detroit of India — Hyundai, Renault-Nissan, BMW; produces 40% of India\'s autos), Pune (Tata Motors, Bajaj), Gurugram/Manesar (Maruti Suzuki — India\'s largest carmaker), Sanand (Gujarat). EV transition: FAME II subsidies; PLI for ACC batteries; Tata Nexon EV leads. Hero MotoCorp is world\'s largest two-wheeler manufacturer.',
    },
    {
      section: 'Cement, Sugar & Fertilizer Industries',
      content:
        'Cement: India is the 2nd largest cement producer (after China) with ~380 MT capacity; major companies: UltraTech (India\'s largest), Ambuja, ACC (now Adani group), Shree Cement, Dalmia Bharat; leading states: Rajasthan (largest — abundant limestone), AP, TN, Karnataka, Gujarat; cement is a weight-losing industry (located near raw material). Sugar: India alternates as world\'s largest/2nd largest producer (with Brazil); ~35 MT/year; two belts: Northern (UP — largest, 40%+, Bihar, Punjab, Haryana — lower sucrose recovery, shorter crushing season) and Southern (Maharashtra — 2nd, Karnataka, TN, AP — higher sucrose, longer season). Sugar mills within 50-60 km of fields as sugarcane loses sucrose within 24 hours. Maharashtra\'s cooperative model (Baramati, Sangli) is notable. India is now a net sugar exporter. Fertilizer: India is 3rd largest producer, 2nd largest consumer; urea is most consumed (heavily subsidized); Sindri (Jharkhand) had India\'s first plant (1951); major units at Nangal (Punjab), Trombay (Maharashtra), Gorakhpur (UP); India imports 30%+ urea and nearly all potash/phosphate.',
    },
    {
      section: 'Industrial Policy & Special Zones',
      content:
        'Industrial Policy Resolution 1956 laid the foundation for mixed economy — three schedules (State monopoly, joint, private). LPG Reforms (1991): triggered by BOP crisis; delicensing (all but 4 industries), disinvestment of PSUs, FDI liberalisation, MRTP Act replaced by Competition Act 2002. SEZs: SEZ Act 2005; tax holidays, duty-free imports, single-window clearance; about 268 operational SEZs; major: Noida, Kandla (first operational), Cochin, Visakhapatnam; contribute 30% of exports. Make in India (2014): targets 25% GDP from manufacturing; covers 25 sectors. PLI Scheme: 14 sectors — mobile, pharma, auto, telecom, textiles, food processing, solar PV, white goods, specialty steel, ACC batteries, drones, semiconductor, IT hardware, medical devices; Rs 1.97 lakh crore outlay; already boosted mobile exports to $11 billion. Industrial Corridors: DMIC (Delhi-Mumbai, Japanese collaboration, 1,504 km), CBIC (Chennai-Bengaluru), AKIC (Amritsar-Kolkata), VCIC (Vizag-Chennai). NICDIT coordinates. One District One Product (ODOP) promotes district-specific products.',
    },
    {
      section: 'Petroleum Refining and Energy Industries',
      content:
        'India is the 4th largest crude oil importer and 3rd largest energy consumer globally. Refining capacity: ~254 MMTPA from 23 refineries — 4th largest refiner globally; net exporter of petroleum products despite importing 85% of crude. Major refineries: Jamnagar (Gujarat, Reliance — world\'s largest single-location refinery complex, 68.2 MMTPA), Mangalore (Karnataka, MRPL), Kochi (Kerala, BPCL), Panipat (Haryana, IOCL), Mathura (UP, IOCL), Digboi (Assam — India\'s oldest, since 1901). Major PSUs: ONGC (largest crude producer), IOCL (largest refiner and company by revenue), BPCL, HPCL, Oil India. Domestic production: Bombay High (offshore Mumbai — largest, discovered 1974), KG Basin (AP — gas), Rajasthan (Barmer-Sanchore, Cairn/Vedanta), Assam (Digboi — oldest 1889, Naharkatiya). Strategic Petroleum Reserves: Visakhapatnam, Mangalore, Padur (total 5.33 MT). Ethanol Blending targets 20% by 2025. Nuclear energy: 22 reactors, 6.7 GW; Kudankulam (TN) is largest nuclear plant.',
    },
    {
      section: 'Defence and Aerospace Manufacturing',
      content:
        'India is 3rd largest military spender ($72+ billion); historically imported 65-70% of defence equipment. Aatmanirbhar Bharat push for self-reliance. Key defence PSUs: HAL (Bengaluru — Tejas LCA, helicopters; largest defence PSU), BEL (Bengaluru — radars, electronics), MDL (Mumbai — Scorpene submarines, destroyers), GRSE (Kolkata — warships), BDL (Hyderabad — missiles), GSL (Goa — patrol vessels). 41 Ordnance Factories corporatised into 7 DPSUs (2021). Defence corridors: UP (Aligarh-Lucknow) and TN (Chennai-Tiruchirappalli). Private players: Tata Advanced Systems, L&T Defence, Adani Defence, Bharat Forge (Dhanush gun). DRDO achievements: Agni missiles (ICBM capability), BrahMos cruise missile (India-Russia JV, Mach 2.8), Tejas LCA, Mission Shakti (ASAT test 2019). INS Vikrant — India\'s first indigenous aircraft carrier (Cochin Shipyard, commissioned 2022). Defence exports grew from Rs 686 crore (2013-14) to Rs 16,000+ crore (2022-23); target Rs 35,000 crore.',
    },
    {
      section: 'MSMEs — Backbone of Indian Economy',
      content:
        'MSMEs contribute 30% of GDP, 45% of manufacturing output, 48% of exports; employ 111 million across 63+ million enterprises — 2nd largest employer after agriculture. Classification (revised 2020): Micro (investment <1 crore, turnover <5 crore), Small (<10 crore, <50 crore), Medium (<50 crore, <250 crore). Major clusters: Ludhiana (hosiery, bicycles), Surat (diamond cutting — 90% of world\'s diamonds cut here; textiles), Tiruppur (knitwear — Rs 30,000+ crore exports), Moradabad (brass — "Peetal Nagari"), Sivakasi (fireworks, matches), Firozabad (glass bangles), Agra (footwear — "Shoe City"), Rajkot (engineering). Government support: Udyam Registration, MUDRA Yojana (Shishu/Kishore/Tarun loans — Rs 23+ lakh crore disbursed), CGTMSE (collateral-free loans up to Rs 5 crore), PM Vishwakarma (2023 — 18 traditional trades), Public Procurement Policy (25% from MSMEs), TReDS (invoice discounting). Challenges: credit access, technology obsolescence, competition from imports, compliance burden.',
    },
    {
      section: 'Emerging Industries — Semiconductors, EVs, Renewables',
      content:
        'India is positioning itself in critical future industries: (1) Semiconductors: India\'s market projected at $63 billion by 2026; India designs chips (ARM, Qualcomm, Intel R&D in Bengaluru/Hyderabad) but doesn\'t manufacture — 100% import dependence. India Semiconductor Mission (Rs 76,000 crore); Micron\'s $2.75 billion ATMP unit at Sanand, Gujarat (India\'s first major semiconductor facility); Tata-PSMC fab in Gujarat. Challenges: fabs cost $10-20 billion, need ultra-pure water and stable power. (2) Electric Vehicles: India produced ~1.5 million EVs in 2023 (mostly two-wheelers); PLI for ACC batteries (Rs 18,100 crore, 50 GWh target); major lithium reserves discovered in J&K (Reasi — 5.9 MT estimated) and Rajasthan (Degana). Critical mineral agreements with Australia, Chile, Argentina. (3) Renewable Manufacturing: PLI for solar PV modules (Rs 24,000 crore); Adani Solar (Mundra — 4 GW expanding to 10 GW); India imports 80%+ of solar cells from China. Green Hydrogen Mission (Rs 19,744 crore; 5 MT/year by 2030). India is 4th largest wind power producer globally (Suzlon, Siemens Gamesa).',
    },
    {
      section: 'Food Processing Industry',
      content:
        'India\'s food processing sector is valued at ~$535 billion; only 10% of food is processed (vs 65% in US), indicating huge growth potential. Employs 19 million; contributes 8.4% to manufacturing GDP. India is world\'s largest milk producer (222 MT/year — Operation Flood by Verghese Kurien, "Milkman of India"; Amul is poster child), 2nd largest in fruits/vegetables and food grains, largest spice producer/exporter. Only 2% of fruits/vegetables are processed. Marine exports: $8 billion/year (shrimp is primary item; AP, Kerala, Gujarat lead). Spices Board of India: Kerala (pepper, cardamom), Rajasthan (cumin), AP (chilli). Government: PM Kisan SAMPADA Yojana, Mega Food Parks (42 approved), PLI for food processing (Rs 10,900 crore for 12 product categories), PM FME scheme for unorganised sector. ODOP integrates with food processing. Growing at 8%+ CAGR — fastest-growing manufacturing sub-sector.',
    },
    {
      section: 'Ports, Shipping, and Maritime Industry',
      content:
        'India has 12 major ports (Central government) and ~200 minor ports (state governments). Total cargo: ~780 MT/year. 95% of trade by volume moves through maritime transport. Major ports: Deendayal/Kandla (Gujarat — handles most cargo), Paradip (Odisha — iron ore, coal), Visakhapatnam (AP — only natural harbour on east coast), JNPT/Navi Mumbai (India\'s largest container port — 50%+ of container traffic), Chennai (automobiles), Mormugao (Goa — iron ore), Cochin (Kerala), Kolkata/Haldia (oldest, riverine). Sagarmala Programme (2015): port-led development; 4 pillars — modernisation, connectivity, industrialisation, community development; targets reducing logistics cost from 14% to 10% of GDP. Shipbuilding: INS Vikrant (indigenous aircraft carrier, Cochin Shipyard, 2022); MDL builds submarines (Scorpene-class); GRSE builds warships. Alang (Gujarat) — world\'s largest ship-breaking yard (India is 3rd in ship recycling). Inland Waterways: NW-1 (Ganga — Prayagraj to Haldia, 1,620 km) most developed; Jal Marg Vikas Project for commercial navigation.',
    },
    {
      section: 'Weber\'s Industrial Location Theory',
      content:
        'Alfred Weber\'s Least Transport Cost Theory (1909): an industry locates where total transportation cost is minimised. Key concepts: (a) Locational Triangle — three vertices: raw material source, energy source, market; optimum location minimises transport costs. (b) Material Index (MI) = weight of raw materials / weight of finished product; MI > 1 (weight-losing — locate near raw material: steel, sugar, cement); MI < 1 (weight-gaining — locate near market: soft drinks, bakery). (c) Isodapane — lines of equal total transport cost; minimum isodapane encloses optimum location. (d) Labour deviation — factory may shift from minimum transport cost location if cheap labour savings exceed additional transport cost. (e) Agglomeration deviation — factories cluster for shared infrastructure. Indian examples: steel plants near iron ore/coal (Jamshedpur, Bhilai, Rourkela); sugar mills near sugarcane fields; IT industry is footloose (Bengaluru). Criticism: assumes single market/source, ignores government policy, culture, technology. Other theories: Losch (profit maximisation), Hoover (tapering transport rates). This theory is frequently tested in UPSC Mains.',
    },
    {
      section: 'Industrial Pollution and Environmental Regulations',
      content:
        'Industrial pollution challenges: (1) Air — thermal plants, cement, steel, brick kilns are major emitters; 14 of world\'s 20 most polluted cities are in India; NCAP (2019) targets 40% PM reduction by 2026 in 131 cities. (2) Water — industrial effluents in rivers; Ganga remains polluted despite Namami Gange (Rs 20,000+ crore); Yamuna\'s Delhi-Agra stretch most polluted. (3) Land — mining wastelands in Jharkhand, Odisha; fly ash from thermal plants. (4) Hazardous waste — Bhopal Gas Tragedy (1984, Union Carbide — world\'s worst industrial disaster; methyl isocyanate leak; 3,787+ immediate deaths, 500,000+ affected) was a watershed in industrial safety regulation. Regulatory framework: Environment Protection Act 1986, Water Act 1974, Air Act 1981, EIA Notification 2006, National Green Tribunal (NGT, 2010). Central and State Pollution Control Boards enforce consent-to-establish and consent-to-operate. Companies Act 2013: 2% of net profit on CSR. The pollution-growth tension is a critical UPSC topic. Polluter Pays Principle and precautionary principle are foundational concepts.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Industries is a high-weight topic tested across all exams. UPSC asks about industrial location factors (Weber\'s theory), steel plant-collaboration-country pairings, policy evolution (IPR 1956, LPG 1991, PLI), and environmental impacts. SSC/RRB exams test "Manchester of India", "Silicon Valley", "Detroit of India", and first/largest industrial facts. Make in India, PLI schemes, semiconductor mission, and industrial corridors are hot current affairs topics.',
}
