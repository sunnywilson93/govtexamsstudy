import type { SubjectConcept } from '@/types/subject-notes'

export const ecosystemsConcept: SubjectConcept = {
  topic: 'ecosystems',
  title: 'Ecosystems',
  description:
    'An ecosystem is a functional unit of nature comprising living organisms (biotic community) and their non-living environment (abiotic factors) interacting as a system. India hosts diverse ecosystems — forests, grasslands, wetlands, deserts, marine, and freshwater — each with unique ecological characteristics.',
  category: 'Environment & Ecology',
  keyDates: [
    { year: 'A.G. Tansley', event: 'Coined the term "ecosystem" in 1935' },
    { year: 'Food Chain', event: 'Transfer of energy: Producers → Primary Consumers → Secondary → Tertiary' },
    { year: '10% Law', event: 'Lindeman (1942) — only 10% of energy transfers to next trophic level' },
    { year: 'Ramsar Sites', event: 'India has 75 Ramsar wetland sites covering about 13.3 million hectares (2023)' },
    { year: 'Coral Reefs', event: 'India has 4 major coral reef areas — Gulf of Kutch, Gulf of Mannar, Andaman, Lakshadweep' },
    { year: 'Mangroves', event: 'India has about 4,992 sq km of mangroves; Sundarbans is the largest' },
  ],
  notes: [
    {
      section: 'Structure & Components of Ecosystems',
      content:
        'Every ecosystem has two components: (1) Abiotic — non-living factors: sunlight (primary energy source), temperature, water, soil, humidity, wind, nutrients, pH; (2) Biotic — living organisms classified by function: Producers/Autotrophs (green plants, algae, cyanobacteria — convert solar energy to chemical energy via photosynthesis; form the base), Consumers/Heterotrophs (Primary consumers — herbivores like deer, rabbit; Secondary consumers — small carnivores like fox, frog; Tertiary consumers — top carnivores like lion, eagle; Omnivores — bear, human), Decomposers/Saprotrophs (bacteria, fungi — break down dead organic matter, release nutrients back into soil, completing nutrient cycles). The interaction between biotic and abiotic forms the functional ecosystem. Ecosystems can be natural (forest, ocean, desert) or artificial (crop field, aquarium, garden). They range from tiny (a puddle) to global (the biosphere).',
    },
    {
      section: 'Energy Flow & Food Chains',
      content:
        'Energy flows unidirectionally through ecosystems: Sun → Producers → Consumers → Decomposers. Photosynthesis converts about 1-2% of solar energy into chemical energy (Net Primary Productivity — NPP). Food Chain: linear sequence of who eats whom — grazing food chain (starts with green plants: grass → deer → tiger) and detritus food chain (starts with dead organic matter: dead leaves → earthworm → bird). Food Web: interconnected food chains in an ecosystem; more realistic representation of energy flow. Ecological Pyramids: (1) Pyramid of Numbers — upright in grassland (many producers, fewer consumers), inverted in tree ecosystem (one tree supports many insects); (2) Pyramid of Biomass — upright in terrestrial (producers have maximum biomass), inverted in aquatic (phytoplankton biomass less than zooplankton at any given time); (3) Pyramid of Energy — always upright; 10% Law (Lindeman, 1942): only about 10% of energy at one trophic level transfers to the next; rest is lost as heat through respiration. This limits food chains to typically 4-5 trophic levels.',
    },
    {
      section: 'Biogeochemical Cycles',
      content:
        'Nutrients cycle through ecosystems in biogeochemical cycles: (1) Carbon Cycle — carbon moves between atmosphere (CO2), biosphere (photosynthesis/respiration), lithosphere (fossil fuels, limestone), and hydrosphere (dissolved CO2); fossil fuel burning and deforestation have increased atmospheric CO2 from 280 ppm (pre-industrial) to 420+ ppm (2023); (2) Nitrogen Cycle — N2 (78% of atmosphere) is fixed into usable forms by nitrogen-fixing bacteria (Rhizobium in legume root nodules, cyanobacteria) and lightning; nitrification, denitrification, and ammonification complete the cycle; excess nitrogen from fertilizers causes eutrophication; (3) Phosphorus Cycle — sedimentary cycle (no gaseous phase); phosphorus from rocks → soil → plants → animals → decomposition → soil; critical for DNA, ATP, bones; often a limiting nutrient; (4) Water Cycle (Hydrological Cycle) — evaporation, transpiration, condensation, precipitation, runoff, infiltration, groundwater recharge. Human activities have significantly disrupted all major biogeochemical cycles.',
    },
    {
      section: 'Wetland Ecosystems',
      content:
        'Wetlands are transitional zones between terrestrial and aquatic ecosystems — areas where land is covered by water permanently or seasonally. Types: marshes, swamps, bogs, fens, mangroves, estuaries, floodplains, rice paddies. India has about 7.57 lakh hectares of wetlands (4.63% of geographic area). Ramsar Convention (1971, Iran) — international treaty for wetland conservation; India became a signatory in 1982; India has 75 Ramsar sites (as of 2023) covering about 13.3 million hectares. Largest Ramsar sites in India: Sundarbans (West Bengal), Vembanad-Kol (Kerala), Chilika Lake (Odisha). Wetland functions: water purification, flood control, groundwater recharge, carbon sequestration, biodiversity habitats, fisheries, recreation. Threats: drainage for agriculture, pollution, encroachment, invasive species, climate change. Wetlands (Conservation and Management) Rules 2017 — prohibit conversion/destruction of wetlands; establish State Wetland Authorities. Notable wetlands: Chilika (Odisha — Irrawaddy dolphins, migratory birds), Loktak (Manipur — floating Phumdis, Keibul Lamjao National Park, Sangai deer), Wular (J&K — largest freshwater lake), Sambhar (Rajasthan — largest inland salt lake).',
    },
    {
      section: 'Ecological Succession & Concepts',
      content:
        'Ecological Succession: The gradual, sequential replacement of one community by another in an area over time until a stable climax community is reached. Primary succession: occurs on bare/lifeless substrate (new volcanic island, retreating glacier); starts with pioneer species (lichens, mosses); very slow (hundreds of years); stages: bare rock → lichens → mosses → herbs/grasses → shrubs → trees → climax forest. Secondary succession: occurs on previously vegetated area that was disturbed (abandoned farmland, forest fire area); soil and seed bank already present; faster (decades). Key ecological concepts: (1) Niche — the functional role of a species in an ecosystem (habitat + diet + behavior); no two species can occupy exactly the same niche indefinitely (Competitive Exclusion Principle); (2) Ecotone — transitional zone between two ecosystems (e.g., mangrove — between land and sea); has characteristics of both; often richer in species (Edge Effect); (3) Keystone Species — species whose impact on ecosystem is disproportionately large relative to its abundance (e.g., sea otters, elephants, figs); (4) Flagship Species — charismatic species used for conservation campaigns (tiger, panda); (5) Umbrella Species — protecting them protects many other species sharing their habitat (tiger, elephant).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Ecosystems is a high-yield topic for UPSC Prelims (2-3 questions yearly). Questions on ecological pyramids, food chains, Ramsar sites, and wetland conservation are very common. SSC/RRB exams test basic concepts like food chain, 10% law, and largest wetlands. Current affairs on new Ramsar site designations appear every year.',
}
