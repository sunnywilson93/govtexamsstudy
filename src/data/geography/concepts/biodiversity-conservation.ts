import type { SubjectConcept } from '@/types/subject-notes'

export const biodiversityConservationConcept: SubjectConcept = {
  topic: 'biodiversity-conservation',
  title: 'Biodiversity Conservation',
  description:
    'Biodiversity conservation involves protecting species, genetic diversity, and ecosystems through in-situ and ex-situ methods. India has a comprehensive framework including the Biological Diversity Act 2002, Wildlife Protection Act 1972, and international conventions like CBD and CITES.',
  category: 'Environment & Ecology',
  keyDates: [
    { year: 'CBD', event: 'Convention on Biological Diversity (1992, Rio) — conservation, sustainable use, benefit sharing' },
    { year: 'CITES', event: 'Convention on International Trade in Endangered Species (1975) — regulates wildlife trade' },
    { year: 'CMS', event: 'Convention on Migratory Species (Bonn Convention, 1979)' },
    { year: 'IUCN Red List', event: 'Categories: Extinct, Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern' },
    { year: 'NBA', event: 'National Biodiversity Authority established under Biodiversity Act 2002; HQ Chennai' },
    { year: 'Nagoya Protocol', event: '2010 — Access and Benefit Sharing (ABS) of genetic resources' },
    { year: 'Kunming-Montreal', event: '2022 — Global Biodiversity Framework; target to protect 30% land and ocean by 2030 ("30x30")' },
  ],
  notes: [
    {
      section: 'In-Situ Conservation',
      content:
        'In-situ conservation means protecting species in their natural habitats. It is the most effective and preferred method. Key approaches: (1) Protected Areas — National Parks (106), Wildlife Sanctuaries (567), Conservation Reserves (105), Community Reserves (220); provide legal protection to habitats; (2) Biosphere Reserves (18) — under UNESCO MAB; integrate conservation with sustainable development; three-zone model (core, buffer, transition); (3) Tiger Reserves (52) — Project Tiger; core and buffer zones; (4) Elephant Reserves (33) — protect elephant corridors; (5) Marine Protected Areas — Gulf of Mannar, Gulf of Kutch, Andaman reefs; (6) Ramsar Wetlands (75) — wetlands of international importance; (7) Sacred Groves — traditional community-protected forest patches; Kerala kavus, Maharashtra devvan, Rajasthan orans, Jharkhand sarnas; (8) Community Conserved Areas — managed by indigenous communities; Biodiversity Heritage Sites under Biological Diversity Act. Challenges: human-wildlife conflict, poaching, habitat fragmentation, encroachment, invasive species, funding constraints.',
    },
    {
      section: 'Ex-Situ Conservation',
      content:
        'Ex-situ conservation means protecting species outside their natural habitats. Methods: (1) Zoological Parks/Zoos — Central Zoo Authority (CZA) regulates; about 150 zoos in India; captive breeding programmes for endangered species; Delhi Zoo, Mysuru Zoo, Nandankanan (Odisha — white tiger), Padmaja Naidu Himalayan Zoo (Darjeeling — snow leopard, red panda); (2) Botanical Gardens — Indian Botanical Garden (Howrah — oldest, has Great Banyan Tree), National Botanical Research Institute (Lucknow), Lalbagh (Bengaluru); preserve plant species; (3) Gene Banks — preserve genetic material (seeds, pollen, tissue cultures, DNA); National Bureau of Plant Genetic Resources (NBPGR, New Delhi); National Gene Bank preserves over 4.4 lakh accessions; (4) Seed Banks — store seeds at low temperatures for long-term preservation; Svalbard Global Seed Vault (Norway) — "Doomsday vault" has India\'s seed samples; (5) Cryopreservation — storing cells/tissues at ultra-low temperatures (liquid nitrogen, -196°C); used for animal gametes and embryos; (6) Captive Breeding & Reintroduction — successful examples: Barasingha at Kanha, tiger reintroduction at Sariska and Panna, vulture breeding programme at Pinjore (Haryana) and Bhopal.',
    },
    {
      section: 'International Conventions & Agreements',
      content:
        'Convention on Biological Diversity (CBD, 1992): Three objectives: (a) conservation of biological diversity, (b) sustainable use of its components, (c) fair and equitable sharing of benefits from genetic resources. 196 parties (USA has signed but not ratified). Nagoya Protocol (2010): Supplementary to CBD; establishes legally binding framework for Access and Benefit Sharing (ABS) of genetic resources; prevents biopiracy. Kunming-Montreal Global Biodiversity Framework (GBF, 2022): Successor to Aichi Targets; 23 targets including: protect 30% of land and sea by 2030 ("30x30"), restore 30% of degraded ecosystems, reduce biodiversity-harmful subsidies by $500 billion, mobilize $200 billion/year for biodiversity. CITES (1975): Regulates international trade in wild plants and animals through three Appendices: I (most endangered, trade banned), II (threatened, controlled trade), III (protected in at least one country). India is a party. CMS/Bonn Convention (1979): Protects migratory species; India has signed MOUs for dugongs, raptors, marine turtles; Appendix I (endangered migratory species), Appendix II (requiring cooperative agreements). Ramsar Convention (1971): Wetland conservation.',
    },
    {
      section: 'Indian Legal Framework for Conservation',
      content:
        'Wildlife Protection Act 1972 (WLPA): Provides for establishment of protected areas and protection of wild animals/plants. Six Schedules: Schedule I (highest protection — tiger, lion, elephant, rhinoceros, snow leopard, Great Indian Bustard; hunting prohibited), Schedule II (high protection), Schedule III & IV (lesser protection but hunting prohibited), Schedule V (vermin — e.g., common crow, fruit bats; can be hunted), Schedule VI (regulated plants — cannot be cultivated/traded). WLPA Amendment 2022: Implemented CITES in India; established CITES Management Authority. Biological Diversity Act 2002: Establishes three-tier structure: National Biodiversity Authority (NBA, Chennai) — regulates access by foreigners/NRIs; State Biodiversity Boards (SBBs) — regulate Indian entities; Biodiversity Management Committees (BMCs) at local body level — prepare People\'s Biodiversity Registers (PBRs). The Act also designates Biodiversity Heritage Sites. Forest Conservation Act 1980: Prior Central Government approval required for diversion of forest land for non-forest purposes. Compensatory Afforestation Fund Management and Planning Authority (CAMPA) ensures afforestation when forest land is diverted.',
    },
    {
      section: 'Threats to Biodiversity & Conservation Challenges',
      content:
        'Major threats (mnemonic — HIPPO): (1) Habitat loss — deforestation, urbanization, agriculture expansion, mining, dam construction; India has lost significant forest cover to development; (2) Invasive Alien Species — Lantana camara (dominant weed in Indian forests), water hyacinth (chokes water bodies), Prosopis juliflora (Vilayati Babool), Parthenium (Congress grass), African catfish; displace native species; (3) Pollution — pesticides, industrial effluents, plastic; affects aquatic and terrestrial biodiversity; (4) Population growth — increased demand for resources, land, and food; (5) Over-exploitation — overfishing, overhunting, over-collection of forest produce; poaching for ivory, tiger parts, sandalwood. Additional threats: Climate change (habitat shifts, coral bleaching, phenological changes), human-wildlife conflict (increasing as habitats shrink — elephant-human conflict in Assam, Jharkhand; leopard-human conflict in Maharashtra, Uttarakhand), linear infrastructure (roads and railways fragmenting habitats), and wildlife crime (India is a source and transit country for illegal wildlife trade — TRAFFIC India monitors this).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Biodiversity conservation is extremely important for UPSC Prelims (3-5 questions yearly). Questions on IUCN categories, CITES appendices, WLPA schedules, and CBD/Nagoya Protocol are perennial. SSC/RRB exams test in-situ vs ex-situ, gene banks, and captive breeding examples. The Kunming-Montreal Framework and new species discoveries are current affairs priorities.',
}
