import type { SubjectConcept } from '@/types/subject-notes'

export const climateChangeConcept: SubjectConcept = {
  topic: 'climate-change',
  title: 'Climate Change & Global Warming',
  description:
    'Climate change refers to long-term shifts in temperatures and weather patterns, primarily driven by human activities since the Industrial Revolution. Global average temperature has risen by about 1.1°C. India is the 3rd largest greenhouse gas emitter but has among the lowest per capita emissions.',
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
        'The enhanced greenhouse effect is the primary cause. Greenhouse gases (GHGs) trap outgoing infrared radiation: (1) Carbon Dioxide (CO2) — 76% of GHG emissions; from fossil fuel combustion, deforestation, cement production; pre-industrial level was 280 ppm, now exceeds 420 ppm; (2) Methane (CH4) — 16% of GHGs; from rice paddies, cattle (enteric fermentation), landfills, natural gas leaks; 80x more potent than CO2 over 20 years; (3) Nitrous Oxide (N2O) — from agricultural fertilizers, industrial processes; 265x more potent than CO2; (4) Fluorinated gases (HFCs, PFCs, SF6) — from industrial processes, refrigerants; very potent and long-lived; regulated by Kigali Amendment to Montreal Protocol. Major emitters: China (30%), USA (14%), India (7%), EU (7%). India\'s per capita emissions (about 2 tonnes CO2e) are less than half the global average and one-eighth of US levels. Other causes include deforestation (reduces carbon sinks), industrial agriculture, and urbanization.',
    },
    {
      section: 'Effects of Climate Change',
      content:
        'Observed and projected effects: (1) Temperature rise — global mean temperature up 1.1°C; IPCC projects 1.5°C breach by early 2030s under current trajectory; (2) Sea level rise — global mean sea level has risen about 20 cm since 1900; projected 0.3-1.0 m by 2100; threatens low-lying areas, island nations, and India\'s coastal cities (Mumbai, Chennai, Kolkata); (3) Extreme weather — more frequent and intense heatwaves, droughts, floods, cyclones; India experienced record heatwaves in 2022 and 2023; cyclone intensity increasing in Bay of Bengal and Arabian Sea; (4) Glacier retreat — Himalayan glaciers are retreating; threatens river water supply for Indo-Gangetic Plain; glacial lake outburst floods (GLOFs) risk; (5) Ocean acidification — CO2 absorption lowers ocean pH; threatens coral reefs and marine shell-forming organisms; (6) Impact on agriculture — changing rainfall patterns, more frequent droughts, heat stress on crops; IPCC estimates 5-10% decline in crop yields per degree of warming; (7) Biodiversity loss — species shifting habitats, coral bleaching, timing mismatches in pollination. India is among the most climate-vulnerable countries due to large population, agrarian economy, and long coastline.',
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
