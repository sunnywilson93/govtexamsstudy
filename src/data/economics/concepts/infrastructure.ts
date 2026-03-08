import type { SubjectConcept } from '@/types/subject-notes'

export const infrastructureConcept: SubjectConcept = {
  topic: 'infrastructure',
  title: 'Infrastructure & Energy',
  description:
    'Transport, energy, power sector, PPP models, infrastructure financing, and India\'s energy transition for competitive exams.',
  category: 'Planning & Development',
  keyDates: [
    { year: '2000', event: 'National Highway Development Project (NHDP) — Golden Quadrilateral connecting 4 metros' },
    { year: '2003', event: 'Electricity Act 2003 — de-licensing of power generation, open access provisions' },
    { year: '2015', event: 'India\'s Paris Agreement commitment — 40% non-fossil fuel power capacity by 2030' },
    { year: '2019', event: 'Jal Jeevan Mission launched — piped water to all rural households by 2024' },
    { year: '2021', event: 'National Monetisation Pipeline (NMP) — Rs 6 lakh crore from brownfield asset monetisation' },
    { year: '2022', event: 'India crossed 170 GW renewable energy installed capacity' },
    { year: '2023', event: 'Vande Bharat Express fleet expanded; PM Gati Shakti masterplan accelerated' },
  ],
  notes: [
    {
      section: 'Transport Infrastructure',
      content:
        'Roads: India has the second largest road network globally (~6.4 million km). National Highways: ~1.46 lakh km (~2% of network but carry ~40% of traffic). Bharatmala Pariyojana: 83,677 km of highway development (Phase I: 34,800 km). NHAI (National Highways Authority of India) and BRO (Border Roads Organisation) are key agencies. Toll collection through FASTag (mandatory since 2021). Railways: Indian Railways is the 4th largest network globally (~68,000 km). Largest employer in India. Dedicated Freight Corridors (DFC): Eastern DFC (1,337 km, Ludhiana-Dankuni) and Western DFC (1,506 km, Dadri-JNPT). Vande Bharat Express: Semi-high-speed trains. Bullet Train: Mumbai-Ahmedabad High Speed Rail (Japanese Shinkansen technology, JICA-funded). Aviation: 148 airports operational; UDAN (Ude Desh ka Aam Naagrik) scheme for regional connectivity. Ports: 13 major ports; Sagarmala for port-led development.',
    },
    {
      section: 'Power & Energy',
      content:
        'India is the 3rd largest electricity consumer and producer globally. Installed Capacity: ~430 GW (2024). Thermal: ~57% (coal ~52%, gas ~5%), Renewable: ~43% (solar ~18%, wind ~11%, hydro ~11%, biomass ~3%). India is the 3rd largest producer of renewable energy. National Solar Mission: Target of 500 GW non-fossil fuel capacity by 2030 (enhanced from 450 GW). Solar tariffs have fallen below Rs 2.5/unit — cheaper than coal. Power Sector Structure: Generation (de-licensed, private & public), Transmission (PGCIL and state utilities), Distribution (DISCOMs — mostly state-owned, financially weak). UDAY Scheme (2015): Financial turnaround of DISCOMs — debt restructuring, efficiency improvements. Revamped Distribution Sector Scheme (RDSS, 2021): Rs 3 lakh crore for DISCOM reform and smart metering.',
    },
    {
      section: 'Energy Transition & Net Zero',
      content:
        'India\'s Climate Commitments: COP26 Glasgow (2021) — PM Modi announced Net Zero by 2070 (not 2050 like developed nations). Updated NDC (2022): 50% cumulative electric power from non-fossil fuel sources by 2030, reduce carbon intensity by 45% from 2005 levels. National Green Hydrogen Mission (2023): Rs 19,744 crore — 5 MMT green hydrogen production by 2030. India aims to become a global green hydrogen hub. National Action Plan on Climate Change (NAPCC): 8 missions — Solar, Enhanced Energy Efficiency, Sustainable Habitat, Water, Sustaining Himalayan Ecosystem, Green India, Sustainable Agriculture, Strategic Knowledge for Climate Change. Ethanol Blending: Target of 20% ethanol blending with petrol (E20) by 2025-26. PM-KUSUM: Solar pumps for farmers. International Solar Alliance (ISA): India-led initiative, HQ in Gurugram, 120+ member countries.',
    },
    {
      section: 'PPP Models in Infrastructure',
      content:
        'Public-Private Partnership (PPP): Government and private sector collaborate to build/operate infrastructure. Models: BOT (Build-Operate-Transfer): Private party builds, operates for concession period, transfers to government. BOT-Toll (user charges) and BOT-Annuity (government pays fixed amounts). DBFOT (Design-Build-Finance-Operate-Transfer): More comprehensive private involvement. HAM (Hybrid Annuity Model): 40% government funding during construction + 60% as annuity over operation period. Reduces risk for private sector. Used extensively in highway projects. EPC (Engineering, Procurement, Construction): Government funds entirely, private sector only constructs. Viability Gap Funding (VGF): Government provides up to 20% of project cost as grant to make PPP projects financially viable. Additional 20% can come from the sponsoring authority. PPP Appraisal Committee (PPPAC): Approves large PPP projects.',
    },
    {
      section: 'Digital & Social Infrastructure',
      content:
        'Digital Infrastructure: BharatNet — optical fibre connectivity to 2.5 lakh gram panchayats. India has 900 million+ internet users (2024). UPI processed 13+ billion transactions/month (2024). 5G rollout: Launched August 2022, covering most urban areas. Data centres: Classified as infrastructure in 2020 — eligible for concessional financing. Social Infrastructure: Jal Jeevan Mission: Piped water to every rural household — from 17% coverage (2019) to ~77% (2024). Target: 100%. Swachh Bharat Mission: Open defecation free — 12 crore+ toilets built. PM Awas Yojana (Urban & Rural): Affordable housing — 2.95 crore urban houses, 2.95 crore rural houses targeted. Ayushman Bharat Health Infrastructure Mission (ABHIM): District hospitals, critical care blocks, integrated labs. Smart Cities Mission: 100 cities, Rs 48,000 crore central allocation.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Infrastructure is a broad topic tested across all exams. UPSC asks about PPP models (HAM, BOT), renewable energy targets, and Net Zero commitments. SSC exams test Bharatmala, Sagarmala, and UDAN. Banking exams ask about NIP, infrastructure financing, and DISCOM reforms. Energy transition and green hydrogen are increasingly tested in current affairs.',
}
