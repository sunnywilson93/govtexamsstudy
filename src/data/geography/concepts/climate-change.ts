import type { SubjectConcept } from '@/types/subject-notes'

export const climateChangeConcept: SubjectConcept = {
  topic: 'climate-change',
  title: 'Climate Change & Global Warming',
  description:
    'Human activities since the Industrial Revolution have raised global temperature by 1.1°C, driven primarily by CO2 (now exceeding 420 ppm) and other greenhouse gases. India ranks 3rd in total GHG emissions but maintains per capita emissions (~2 tonnes CO2e) well below the global average. UPSC draws 3-5 questions yearly from the Paris Agreement, NAPCC\'s 8 missions, India\'s NDC targets, and IPCC findings, while every COP conference generates current affairs questions.',
  category: 'Environment & Ecology',
  keyDates: [
    { year: '1.1°C Rise', event: 'Global average temperature has risen about 1.1°C above pre-industrial levels (2023)' },
    { year: 'IPCC', event: 'Intergovernmental Panel on Climate Change — Nobel Prize 2007; 6th Assessment Report (AR6) published 2021-23' },
    { year: 'UNFCCC', event: 'UN Framework Convention on Climate Change (1992) — 198 parties' },
    { year: 'Kyoto Protocol', event: '1997 — first binding emission reduction targets for developed countries' },
    { year: 'Paris Agreement', event: '2015 — limit warming to 1.5-2°C; Nationally Determined Contributions (NDCs)' },
    { year: 'COP26 Glasgow', event: '2021 — India pledged Net Zero by 2070; 50% renewable energy by 2030' },
    { year: 'NAPCC', event: 'National Action Plan on Climate Change (2008) — 8 National Missions' },
    { year: '420+ ppm', event: 'Atmospheric CO2 concentration has exceeded 420 ppm (2023) — highest in 800,000 years' },
  ],
  notes: [
    {
      section: 'Causes of Climate Change',
      content:
        'The enhanced greenhouse effect drives climate change as GHGs trap outgoing infrared radiation. CO2 accounts for 76% of emissions, released by fossil fuel combustion, deforestation, and cement production; its concentration rose from 280 ppm (pre-industrial) to 420+ ppm. Methane (CH4) contributes 16%, emitted from rice paddies, cattle (enteric fermentation), landfills, and gas leaks, packing 80x the warming punch of CO2 over 20 years. Nitrous oxide (N2O) from fertilizers and industry carries 265x CO2\'s potency. Fluorinated gases (HFCs, PFCs, SF6) from refrigerants and industrial processes persist for centuries; the Kigali Amendment to the Montreal Protocol now regulates them. China emits 30% of global GHGs, the USA 14%, India 7%, and the EU 7%. India\'s per capita emissions (~2 tonnes CO2e) sit below half the global average and at one-eighth of US levels. Deforestation, industrial agriculture, and urbanization further shrink carbon sinks.',
    },
    {
      section: 'Effects of Climate Change',
      content:
        'Climate change produces seven major categories of impact. Global mean temperature has risen 1.1°C, and the IPCC projects a 1.5°C breach by the early 2030s under current trajectories. Sea levels have climbed about 20 cm since 1900, with projections of 0.3-1.0 m by 2100 threatening Mumbai, Chennai, Kolkata, island nations, and low-lying coastal zones. Extreme weather events intensify: India faced record heatwaves in 2022 and 2023, and cyclone intensity keeps rising in the Bay of Bengal and Arabian Sea. Himalayan glaciers retreat steadily, jeopardizing river water supply for the Indo-Gangetic Plain and raising glacial lake outburst flood (GLOF) risk. Ocean acidification from CO2 absorption lowers pH and threatens coral reefs and shell-forming marine life. Agriculture suffers from shifting rainfall patterns, more frequent droughts, and crop heat stress, with IPCC estimating 5-10% yield decline per degree of warming. Biodiversity faces habitat shifts, coral bleaching, and pollination timing mismatches. India\'s large population, agrarian economy, and 7,517 km coastline make it among the most climate-vulnerable nations.',
    },
    {
      section: 'International Climate Framework',
      content:
        'UNFCCC (1992, Rio) — established the framework; principle of Common But Differentiated Responsibilities (CBDR); divided countries into Annex I (developed — historical responsibility) and Non-Annex I (developing). Kyoto Protocol (1997, effective 2005) — binding emission reduction targets for Annex I countries; three market mechanisms: Clean Development Mechanism (CDM), Joint Implementation (JI), Emissions Trading; India participated as a Non-Annex I party through CDM projects. Copenhagen Accord (2009) — failed to produce binding successor to Kyoto; political accord only. Paris Agreement (2015, COP21) — landmark shift: ALL countries submit Nationally Determined Contributions (NDCs); legally binding process but nationally determined targets; goal: limit warming to 2°C, pursue 1.5°C; global stocktake every 5 years; $100 billion/year climate finance for developing countries (target not met). India\'s Updated NDCs (2022): 45% emission intensity reduction by 2030 (from 2005 levels), 50% cumulative non-fossil installed capacity by 2030. COP26 (Glasgow, 2021): India\'s "Panchamrit" pledge — 500 GW non-fossil capacity, 50% renewable energy, 1 billion tonnes CO2 reduction, Net Zero by 2070.',
    },
    {
      section: 'India\'s Climate Action',
      content:
        'National Action Plan on Climate Change (NAPCC, 2008) — 8 National Missions: (1) National Solar Mission (JNNSM); (2) National Mission for Enhanced Energy Efficiency (NMEEE — PAT scheme, perform-achieve-trade); (3) National Mission on Sustainable Habitat; (4) National Water Mission; (5) National Mission for Sustaining the Himalayan Ecosystem; (6) National Mission for a Green India (afforestation target); (7) National Mission for Sustainable Agriculture; (8) National Mission on Strategic Knowledge for Climate Change. State Action Plans on Climate Change (SAPCCs) prepared by all states. India\'s International Solar Alliance (ISA, co-founded with France, 2015, HQ Gurugram): promotes solar energy in tropical countries; 116 member countries. Coalition for Disaster Resilient Infrastructure (CDRI, 2019): India-led; builds climate-resilient infrastructure. One Sun One World One Grid (OSOWOG): proposal for global solar grid. Indian Carbon Market announced in 2023 (Energy Conservation Amendment Act 2022). LIFE (Lifestyle for Environment): India\'s concept promoted at G20 for sustainable consumption.',
    },
    {
      section: 'Adaptation & Mitigation Strategies',
      content:
        'Mitigation (reducing GHG emissions): transition to renewable energy (solar, wind, hydrogen), energy efficiency (LED, PAT scheme, star rating), electric mobility (FAME scheme, EV policy), carbon capture and storage (CCS), afforestation and reforestation (Green India Mission), reducing methane from rice paddies (alternate wetting and drying), sustainable agriculture, waste-to-energy, circular economy, carbon pricing (carbon tax/market). Adaptation (adjusting to climate impacts): climate-resilient agriculture (drought-resistant crop varieties, crop diversification), improved water management (rainwater harvesting, micro-irrigation), coastal protection (mangrove restoration, sea walls), disaster risk reduction (early warning systems, NDMA), climate-resilient infrastructure (CDRI), health adaptation (heat action plans in cities like Ahmedabad, disease surveillance), migration management, and climate-smart cities. Climate finance: Green Climate Fund (GCF), Adaptation Fund, Green Bonds. India needs estimated $2.5 trillion in climate finance by 2030. Loss and Damage Fund established at COP27 (Sharm el-Sheikh, 2022) for vulnerable countries — a major win for developing nations including India.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Climate change is an extremely high-yield topic for UPSC (3-5 questions yearly from environment section). Paris Agreement, NAPCC missions, India\'s NDCs, and IPCC findings are frequently tested. SSC/RRB exams ask about greenhouse gases, ozone layer, and global warming basics. Every COP conference generates current affairs questions. ISA, CDRI, and carbon markets are recent hot topics.',
}
