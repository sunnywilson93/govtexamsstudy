import type { SubjectConcept } from '@/types/subject-notes'

export const waterResourcesConcept: SubjectConcept = {
  topic: 'water-resources',
  title: 'Water Resources of India',
  description:
    'India has about 4% of the world\'s freshwater resources but supports 18% of the global population. Annual water availability is about 1,999 billion cubic metres, of which only 1,123 BCM is utilizable. Water scarcity, uneven distribution, and pollution are major challenges requiring integrated water resource management.',
  category: 'Resource Geography',
  keyDates: [
    { year: 'Annual Rainfall', event: 'India receives about 4,000 BCM of precipitation; 1,869 BCM as rainfall' },
    { year: 'Utilizable Water', event: 'About 1,123 BCM (690 BCM surface + 433 BCM groundwater) — of 1,999 BCM available' },
    { year: 'Groundwater', event: 'India is the largest groundwater user globally — about 249 BCM/year; 89% for irrigation' },
    { year: 'Jal Jeevan Mission', event: '2019 — "Har Ghar Jal"; functional household tap connection to all rural households by 2024' },
    { year: 'National Water Policy', event: '2012 (3rd policy) — prioritizes drinking water, then irrigation, then hydropower, then ecology, then industry' },
    { year: 'CGWA', event: 'Central Ground Water Authority — regulates groundwater extraction' },
    { year: 'Per Capita', event: 'Per capita annual water availability has dropped from 5,177 m³ (1951) to about 1,486 m³ (2021) — approaching "water-stressed" threshold of 1,700 m³' },
  ],
  notes: [
    {
      section: 'Water Availability & Distribution',
      content:
        'India receives about 4,000 BCM (billion cubic metres) of precipitation annually. Of this, the average annual water resources potential is about 1,999 BCM (from surface water and replenished groundwater). However, only about 1,123 BCM is utilizable (690 BCM surface water + 433 BCM groundwater) due to topographic, geological, and environmental constraints. Distribution is highly uneven: Brahmaputra basin has surplus water while Peninsular rivers and western India face deficit. Temporal distribution is also skewed: about 75% of rainfall occurs in 4 months (June-September). Per capita annual water availability has declined sharply: 5,177 m³ (1951) → 2,209 m³ (1991) → 1,545 m³ (2011) → about 1,486 m³ (2021). India is approaching "water-stressed" status (1,700 m³ threshold) and could become "water-scarce" (<1,000 m³) in some regions. Water demand is growing: agriculture (78% of use), domestic (8%), industry (6%), energy (2%), others (6%). By 2050, demand is projected to exceed supply, making water management critical.',
    },
    {
      section: 'Groundwater Resources',
      content:
        'India is the world\'s largest groundwater user, extracting about 249 BCM annually — about 25% of global groundwater extraction. About 89% of groundwater is used for irrigation and 11% for domestic and industrial use. The total annual replenishable groundwater resource is about 433 BCM. Groundwater provides drinking water to 85% of rural population and irrigation to over 60% of agricultural land. Status: About 17% of assessment units are over-exploited (extraction exceeds recharge), particularly in Punjab, Haryana, Rajasthan, Delhi, Tamil Nadu, and parts of Gujarat and Karnataka. The Central Ground Water Authority (CGWA) under the Ministry of Jal Shakti regulates extraction — NOC required for groundwater extraction in over-exploited areas. Artificial recharge: Check dams, percolation tanks, rainwater harvesting, recharge wells. Master Plan for Artificial Recharge to Groundwater targets 185 BCM capacity. Atal Bhujal Yojana (2020) promotes community-led groundwater management in 7 states. Arsenic and fluoride contamination of groundwater affects millions in Bengal, Bihar, Rajasthan, and Andhra Pradesh.',
    },
    {
      section: 'Water Conservation & Harvesting',
      content:
        'Rainwater harvesting is a critical water conservation strategy. Methods: (1) Rooftop rainwater harvesting — collecting rainwater from building rooftops into storage tanks or directing to recharge pits; mandatory in many states (Tamil Nadu was the first to mandate it in 2001); (2) Surface runoff harvesting — check dams, farm ponds, percolation tanks, contour bunding; (3) Traditional methods — Johads (earthen check dams, Rajasthan — revived by Rajendra Singh/"Waterman of India"), Bawdis/Step Wells (Rajasthan, Gujarat), Kuhls (Himachal Pradesh), Zabo (Nagaland), Bamboo drip irrigation (Meghalaya), Eri (Tamil Nadu — tank system), Ahar-Pyne (Bihar), Surangam (Kerala, Karnataka), Virdas (Gujarat). Watershed management integrates conservation measures at catchment level. Key programmes: Jal Shakti Abhiyan (rain-fed areas), Integrated Watershed Management Programme (IWMP), MGNREGA (creates water harvesting structures). The National Water Mission under NAPCC targets 20% improvement in water use efficiency. Israel is a global model for water recycling (90% wastewater reuse) and desalination that India is learning from.',
    },
    {
      section: 'River Interlinking & Major Projects',
      content:
        'National River Linking Project (NRLP): Ambitious plan conceived in the 1980s to link 30 rivers through a network of 30 links and 3,000 storage structures. Two components: (1) Himalayan component — 14 links connecting Ganga and Brahmaputra basins with western river basins; (2) Peninsular component — 16 links connecting south Indian rivers. The Ken-Betwa Link Project is the first project approved (2021): connects surplus Ken river (MP) with deficit Betwa river (UP/MP); cost about Rs 44,605 crore; will provide irrigation, drinking water, and hydropower. Concerns about river interlinking: displacement of communities, environmental impact (altering river ecosystems), inter-state conflicts, cost, and social disruption. Supporters argue it will solve floods in one region and drought in another. Major water projects: Narmada Valley Development Project (30 large dams, 135 medium, 3,000 small — Sardar Sarovar Dam is flagship; Narmada Bachao Andolan by Medha Patkar opposed displacement), Jal Jeevan Mission (2019) — functional household tap water connection to all rural households (17.1 crore connections targeted; over 14 crore provided by 2024), Swajal (pilot for demand-driven water supply in rural areas).',
    },
    {
      section: 'Water Policy & Governance',
      content:
        'National Water Policy 2012 (third policy after 1987 and 2002): Priority order for water allocation: (1) Drinking water, (2) Irrigation, (3) Hydropower, (4) Ecology, (5) Agro-industries and non-agricultural industries, (6) Navigation and other uses. Key recommendations: water as an economic good (pricing to promote conservation), community participation, public trust doctrine, integrated water resources management (IWRM), emphasis on demand management over supply augmentation. Ministry of Jal Shakti (created 2019, merging Ministry of Water Resources and Ministry of Drinking Water & Sanitation) is the nodal ministry. Interstate water disputes are adjudicated by tribunals under the Interstate River Water Disputes Act 1956 (amended 2002): Krishna Water Disputes Tribunal, Cauvery Water Disputes Tribunal, Ravi-Beas Water Tribunal, Narmada Water Disputes Tribunal, Mahadayi Water Disputes Tribunal. Dam Safety Act 2021 establishes the National Dam Safety Authority (NDSA) and mandates regular dam safety inspections and emergency action plans.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Water resources is a high-frequency UPSC topic (Prelims and Mains). Questions on water availability statistics, groundwater challenges, traditional harvesting methods, and river interlinking are common. SSC/RRB exams test dam-river associations and "Waterman of India." Current affairs on Jal Jeevan Mission, water disputes, and Atal Bhujal Yojana are important.',
}
