import type { SubjectConcept } from '@/types/subject-notes'

export const disasterManagementConcept: SubjectConcept = {
  topic: 'disaster-management',
  title: 'Disaster Management in India',
  description:
    'India is highly vulnerable to natural disasters — about 58.6% of its landmass is prone to earthquakes, 12% to floods, 68% to drought, and 8% of its coastline to cyclones. The Disaster Management Act 2005 established NDMA and SDMA for systematic disaster preparedness, response, and recovery.',
  category: 'Environment & Ecology',
  keyDates: [
    { year: 'DM Act 2005', event: 'Disaster Management Act — established NDMA, SDMA, DDMA; PM chairs NDMA' },
    { year: 'NDMA', event: 'National Disaster Management Authority — PM as Chairperson; national-level coordination' },
    { year: 'NDRF', event: 'National Disaster Response Force — 16 battalions (12 from CPMF, 4 from state); rapid response' },
    { year: 'SDRF', event: 'State Disaster Response Fund — 75% Centre + 25% State funding for general states' },
    { year: 'Sendai Framework', event: '2015-2030 — 7 targets and 4 priorities for disaster risk reduction (DRR); successor to Hyogo' },
    { year: 'Bhuj 2001', event: 'Gujarat earthquake (7.7 magnitude) — 20,000+ deaths; catalysed DM Act 2005' },
    { year: '2004 Tsunami', event: 'Indian Ocean Tsunami — 12,400 deaths in India; led to Indian Tsunami Early Warning Centre (ESSO-INCOIS)' },
  ],
  notes: [
    {
      section: 'Types of Disasters in India',
      content:
        'Disasters are classified as: (1) Natural Disasters — Geological: earthquakes (58.6% of land in seismic zones III-V), landslides (Himalayan and Western Ghats states), volcanic eruptions (Barren Island, Andaman); Hydro-meteorological: floods (12% of area — Bihar, Assam, UP, West Bengal most affected; Brahmaputra and Kosi rivers), cyclones (east coast more vulnerable — Odisha, AP, WB, TN; west coast — Gujarat), droughts (68% of cultivated area — Rajasthan, Maharashtra, Karnataka, Telangana, MP), cloudbursts (Uttarakhand, HP, J&K), heatwaves, cold waves; Biological: epidemics/pandemics (COVID-19, dengue, malaria). (2) Man-Made Disasters — industrial accidents (Bhopal Gas Tragedy, 1984 — world\'s worst, Union Carbide MIC gas leak), fire, building collapse, chemical/nuclear accidents, road/rail/air accidents, dam failures. About 12% of India\'s landmass is flood-prone, with an estimated 40 million hectares affected annually. The Ganga-Brahmaputra-Meghna basin is one of the most flood-prone regions in the world.',
    },
    {
      section: 'Institutional Framework',
      content:
        'The Disaster Management Act 2005 established a three-tier structure: (1) National Disaster Management Authority (NDMA) — chaired by the Prime Minister; responsible for national disaster management plans, policies, and guidelines; (2) State Disaster Management Authority (SDMA) — chaired by the Chief Minister; coordinates at state level; (3) District Disaster Management Authority (DDMA) — chaired by the District Collector/Magistrate; implements at ground level. Other key bodies: National Executive Committee (NEC) — headed by Home Secretary; assists NDMA; National Disaster Response Force (NDRF) — specialized rescue and response force with 16 battalions; trained in chemical, biological, radiological, and nuclear (CBRN) emergencies; deployed across India; National Institute of Disaster Management (NIDM, Delhi) — training and capacity building; Indian National Centre for Ocean Information Services (INCOIS, Hyderabad) — tsunami and cyclone early warning. National Disaster Management Plan (NDMP, 2019) aligns with Sendai Framework. State Disaster Response Funds (SDRF) and National Disaster Response Fund (NDRF — released for severe disasters) provide financial resources.',
    },
    {
      section: 'Earthquake & Flood Management',
      content:
        'Earthquake preparedness: India\'s seismic zonation divides the country into 4 zones (II to V); Zone V (very high risk): NE India, Andaman, Kashmir, parts of HP and Uttarakhand; Zone IV (high risk): Delhi, Bihar, parts of UP, parts of Maharashtra. National Building Code (NBC) mandates earthquake-resistant design for new buildings. Retrofitting of existing structures is promoted. Earthquake-resistant construction techniques: flexible frame structures, base isolation, cross-bracing, lightweight materials, reinforced concrete. Mock drills by NDMA raise awareness. Flood management: Structural measures — embankments (levees), dams, reservoirs, drainage channels, flood walls; examples: Farakka Barrage (Ganga), Kosi embankments (Bihar). Non-structural measures — flood forecasting (Central Water Commission — CWC operates 1,200+ forecasting stations), flood plain zoning, land-use regulation, early warning systems, community preparedness. National Flood Commission recommendations guide policy. Climate change is intensifying both floods and droughts in India.',
    },
    {
      section: 'Cyclone & Drought Management',
      content:
        'Cyclone management: India Meteorological Department (IMD) provides cyclone warnings with lead times of 24-72 hours. Color-coded warnings: Green (no action), Yellow (watch), Orange (alert), Red (take action). Cyclone shelters built along vulnerable coasts (Odisha, AP, TN). National Cyclone Risk Mitigation Project (NCRMP) — World Bank-supported; covers 13 cyclone-prone states; improves early warning systems, shelters, infrastructure. Odisha\'s cyclone preparedness is a global model — death toll from Cyclone Fani (2019) was just 64 compared to Super Cyclone 1999 (about 10,000); credited to effective evacuation and early warning. Cyclone naming follows WMO guidelines — names contributed by 13 Indian Ocean countries in rotation. Drought management: Drought is declared based on rainfall deficiency and its impact. Manual for Drought Management (2016) uses triggers: meteorological (rainfall deficit), hydrological (water levels), and agricultural (crop condition). National Rainfed Area Authority (NRAA) addresses rainfed agriculture vulnerability. MGNREGA provides employment during drought. Drought-proofing through watershed development, check dams, farm ponds (Jalyukt Shivar in Maharashtra). PMKSY promotes irrigation in drought-prone areas.',
    },
    {
      section: 'International DRR Frameworks & Community Preparedness',
      content:
        'Sendai Framework for Disaster Risk Reduction (2015-2030): Successor to Hyogo Framework (2005-2015). Four priorities: (1) Understanding disaster risk, (2) Strengthening governance, (3) Investing in DRR for resilience, (4) Enhancing preparedness for "Build Back Better." Seven global targets include: reduce disaster mortality, reduce affected people, reduce economic losses, reduce damage to critical infrastructure. India\'s Coalition for Disaster Resilient Infrastructure (CDRI, 2019): Multilateral body promoting disaster-resilient infrastructure globally; launched at UN Climate Action Summit by PM Modi; 39 member countries. Community-based disaster management: Community participation is crucial — local disaster management plans, village disaster management committees, community-based first responders, mock drills. Aapda Mitra scheme trains community volunteers in disaster-prone areas. National School Safety Programme integrates disaster preparedness in education. Technology: Multi-Hazard Early Warning Systems, GIS/remote sensing for hazard mapping, INSAT/Resourcesat satellites for monitoring floods/droughts, INCOIS for tsunami/storm surge warnings, CAP (Common Alerting Protocol) for multi-channel warnings.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Disaster management is a key UPSC topic (Paper III in Mains, Prelims environment section). Questions on NDMA structure, DM Act provisions, seismic zones, Sendai Framework, and CDRI are common. SSC/RRB exams test NDRF, cyclone zones, and disaster types. Current affairs on specific disasters, cyclone names, and new DRR initiatives appear regularly.',
}
