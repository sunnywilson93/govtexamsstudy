import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Geography — Indian Geography, Environment & World Geography | GovtExams',
  description:
    'Complete Indian Geography study material for UPSC, SSC & banking exams. Physical, economic, human, world geography, environment & ecology with notes, revision, and PYQs.',
}

interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
}

interface Section {
  heading: string
  subheading: string
  topics: Topic[]
}

const SECTIONS: Section[] = [
  {
    heading: 'Physical Geography',
    subheading: 'Landforms, rivers, climate, soils, vegetation & biodiversity of India',
    topics: [
      {
        href: '/geography/physiography',
        title: 'Physiography of India',
        description: 'Himalayas, Northern Plains, Peninsular Plateau, coastal plains, islands',
        hasTabs: true,
      },
      {
        href: '/geography/drainage-systems',
        title: 'Drainage Systems',
        description: 'Himalayan & Peninsular rivers, river basins, water divides',
        hasTabs: true,
      },
      {
        href: '/geography/climate-monsoon',
        title: 'Climate & Indian Monsoon',
        description: 'Monsoon mechanism, seasons, rainfall distribution, climate types',
        hasTabs: true,
      },
      {
        href: '/geography/soils',
        title: 'Soils of India',
        description: 'Alluvial, black, laterite, red, forest, desert, saline soils',
        hasTabs: true,
      },
      {
        href: '/geography/natural-vegetation',
        title: 'Natural Vegetation & Forests',
        description: 'Forest types, forest cover, Champion & Seth classification',
        hasTabs: true,
      },
      {
        href: '/geography/biodiversity',
        title: 'Biodiversity of India',
        description: 'Hotspots, endemic species, megadiversity, flora & fauna',
        hasTabs: true,
      },
      {
        href: '/geography/islands-coasts',
        title: 'Islands & Coastal Features',
        description: 'Andaman-Nicobar, Lakshadweep, coastal geomorphology',
        hasTabs: true,
      },
      {
        href: '/geography/forest-types-india',
        title: 'Forest Types of India',
        description: 'Champion & Seth classification, tropical, subtropical, montane forests',
        hasTabs: true,
      },
      {
        href: '/geography/mountain-passes',
        title: 'Important Mountain Passes',
        description: 'Himalayan passes, Western Ghat passes, strategic border passes',
        hasTabs: true,
      },
      {
        href: '/geography/lakes-india',
        title: 'Lakes of India',
        description: 'Freshwater, saltwater, glacial, tectonic, artificial lakes',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Geomorphic Processes',
    subheading: 'Plate tectonics, rocks, weathering & landform evolution by glacial, fluvial, and aeolian agents',
    topics: [
      {
        href: '/geography/plate-tectonics',
        title: 'Plate Tectonics & Continental Drift',
        description: 'Continental drift, sea floor spreading, plate boundaries, Indian plate movement',
        hasTabs: true,
      },
      {
        href: '/geography/rocks-minerals-types',
        title: 'Rocks & Minerals',
        description: 'Igneous, sedimentary, metamorphic rocks, rock cycle, mineral classification',
        hasTabs: true,
      },
      {
        href: '/geography/weathering-erosion',
        title: 'Weathering & Erosion',
        description: 'Physical, chemical, biological weathering, mass wasting, erosion agents',
        hasTabs: true,
      },
      {
        href: '/geography/glacial-landforms',
        title: 'Glacial Landforms',
        description: 'Cirques, moraines, drumlins, fjords, Indian Himalayan glaciers',
        hasTabs: true,
      },
      {
        href: '/geography/fluvial-landforms',
        title: 'Fluvial Landforms',
        description: 'River valleys, meanders, oxbow lakes, deltas, floodplains',
        hasTabs: true,
      },
      {
        href: '/geography/aeolian-landforms',
        title: 'Aeolian & Desert Landforms',
        description: 'Sand dunes, yardangs, pediments, desert pavements, Thar features',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Atmosphere & Climate',
    subheading: 'Atmospheric structure, pressure systems, wind patterns & cyclonic storms',
    topics: [
      {
        href: '/geography/atmospheric-composition',
        title: 'Atmosphere & Weather',
        description: 'Atmosphere layers, composition, insolation, heat budget, weather elements',
        hasTabs: true,
      },
      {
        href: '/geography/pressure-belts-winds',
        title: 'Pressure Belts & Winds',
        description: 'Trade winds, westerlies, polar easterlies, jet streams, local winds',
        hasTabs: true,
      },
      {
        href: '/geography/cyclones',
        title: 'Cyclones — Tropical & Temperate',
        description: 'Tropical cyclones, temperate cyclones, IMD warnings, cyclone naming',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Economic Geography',
    subheading: 'Agriculture, minerals, energy, industries & transport of India',
    topics: [
      {
        href: '/geography/agriculture',
        title: 'Indian Agriculture',
        description: 'Cropping patterns, Green Revolution, food security, MSP',
        hasTabs: true,
      },
      {
        href: '/geography/irrigation',
        title: 'Irrigation in India',
        description: 'Canal, well, tank irrigation, major dams & projects',
        hasTabs: true,
      },
      {
        href: '/geography/minerals',
        title: 'Minerals & Mining',
        description: 'Iron ore, coal, mica, bauxite, manganese distribution',
        hasTabs: true,
      },
      {
        href: '/geography/energy',
        title: 'Energy Resources',
        description: 'Conventional & renewable energy, power generation',
        hasTabs: true,
      },
      {
        href: '/geography/industries',
        title: 'Industries of India',
        description: 'Iron-steel, textiles, IT, SEZs, industrial corridors',
        hasTabs: true,
      },
      {
        href: '/geography/transport',
        title: 'Transport & Communication',
        description: 'Railways, roads, ports, airways, waterways',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Human Geography',
    subheading: 'Population, urbanization, tribes & migration patterns',
    topics: [
      {
        href: '/geography/population',
        title: 'Population Geography',
        description: 'Census data, density, growth, demographic transition',
        hasTabs: true,
      },
      {
        href: '/geography/urbanization',
        title: 'Urbanization in India',
        description: 'Urban growth, smart cities, metro classification',
        hasTabs: true,
      },
      {
        href: '/geography/tribes',
        title: 'Tribes of India',
        description: 'PVTGs, scheduled areas, tribal distribution',
        hasTabs: true,
      },
      {
        href: '/geography/migration',
        title: 'Migration Patterns',
        description: 'Internal migration, rural-urban, push-pull factors',
        hasTabs: true,
      },
      {
        href: '/geography/census-demographics',
        title: 'Census & Demographics',
        description: 'Census 2011 data, population growth, sex ratio, literacy, demographic dividend',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'World Geography',
    subheading: 'Physical geography concepts, climate systems & ocean science',
    topics: [
      {
        href: '/geography/geomorphology',
        title: 'Geomorphology',
        description: 'Plate tectonics, landforms, weathering, erosion cycles',
        hasTabs: true,
      },
      {
        href: '/geography/climatology',
        title: 'Climatology',
        description: 'Atmospheric circulation, pressure belts, wind systems',
        hasTabs: true,
      },
      {
        href: '/geography/oceanography',
        title: 'Oceanography',
        description: 'Ocean currents, salinity, tides, marine resources',
        hasTabs: true,
      },
      {
        href: '/geography/world-mapping',
        title: 'World Mapping & Key Locations',
        description: 'Straits, passes, deserts, volcanoes, key global locations',
        hasTabs: true,
      },
      {
        href: '/geography/ocean-currents',
        title: 'Ocean Currents',
        description: 'Warm & cold currents, thermohaline circulation, upwelling, El Nino/La Nina',
        hasTabs: true,
      },
      {
        href: '/geography/world-climate-regions',
        title: 'World Climate Regions',
        description: 'Köppen classification, tropical, temperate, polar climates, biomes',
        hasTabs: true,
      },
      {
        href: '/geography/remote-sensing-gis',
        title: 'Remote Sensing & GIS',
        description: 'ISRO satellites, NavIC, Bhuvan, GIS applications, RS principles',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Environment & Ecology',
    subheading: 'Ecosystems, pollution, climate change, conservation & environmental law',
    topics: [
      {
        href: '/geography/ecosystems',
        title: 'Ecosystems',
        description: 'Types, food chains, ecological pyramids, biomes',
        hasTabs: true,
      },
      {
        href: '/geography/environmental-pollution',
        title: 'Environmental Pollution',
        description: 'Air, water, soil, noise pollution & control measures',
        hasTabs: true,
      },
      {
        href: '/geography/climate-change',
        title: 'Climate Change',
        description: 'Global warming, UNFCCC, Paris Agreement, IPCC',
        hasTabs: true,
      },
      {
        href: '/geography/protected-areas',
        title: 'Protected Areas & National Parks',
        description: 'National parks, sanctuaries, biosphere reserves, Ramsar sites',
        hasTabs: true,
      },
      {
        href: '/geography/biodiversity-conservation',
        title: 'Biodiversity Conservation',
        description: 'In-situ, ex-situ, IUCN, CBD, CITES, Wildlife Protection Act',
        hasTabs: true,
      },
      {
        href: '/geography/disaster-management',
        title: 'Disaster Management',
        description: 'NDMA, NDRF, Sendai Framework, earthquake zones, cyclones',
        hasTabs: true,
      },
      {
        href: '/geography/environmental-legislation',
        title: 'Environmental Legislation',
        description: 'EPA, WLPA, FCA, FRA, NGT, EIA process',
        hasTabs: true,
      },
      {
        href: '/geography/coral-reefs',
        title: 'Coral Reefs & Marine Ecosystems',
        description: 'Fringing, barrier, atoll reefs, coral bleaching, Indian coral reefs',
        hasTabs: true,
      },
      {
        href: '/geography/national-parks-sanctuaries',
        title: 'National Parks & Wildlife Sanctuaries',
        description: 'Tiger reserves, elephant reserves, bird sanctuaries, Project Tiger',
        hasTabs: true,
      },
      {
        href: '/geography/ramsar-wetlands',
        title: 'Wetlands & Ramsar Sites',
        description: 'India Ramsar sites, wetland conservation, Montreux Record',
        hasTabs: true,
      },
      {
        href: '/geography/biosphere-reserves',
        title: 'Biosphere Reserves',
        description: 'UNESCO MAB programme, Indian biosphere reserves, zonation',
        hasTabs: true,
      },
    ],
  },
  {
    heading: 'Resource Geography',
    subheading: 'Water and land resources — availability, management & policy',
    topics: [
      {
        href: '/geography/water-resources',
        title: 'Water Resources',
        description: 'Availability, groundwater, river linking, Jal Jeevan Mission',
        hasTabs: true,
      },
      {
        href: '/geography/land-resources',
        title: 'Land Resources & Land Use',
        description: 'Land use, degradation, reform, SVAMITVA, sustainable management',
        hasTabs: true,
      },
    ],
  },
]

export default function GeographyPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-text-primary">Indian Geography</h1>
      <p className="mb-8 text-text-secondary">
        Physical, economic, human & world geography with environment and ecology. Notes, revision sheets, and previous year questions for UPSC, SSC, and banking exams.
      </p>

      <div className="space-y-10">
        {SECTIONS.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-1 text-lg font-semibold text-text-primary">{section.heading}</h2>
            <p className="mb-4 text-sm text-text-secondary">{section.subheading}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {section.topics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="rounded-lg border border-border-primary bg-bg-elevated p-4 transition-colors hover:border-subject-geography"
                >
                  <h3 className="font-medium text-text-primary">{topic.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{topic.description}</p>
                  {topic.hasTabs && (
                    <p className="mt-2 text-xs text-subject-geography">
                      Notes &middot; Revision &middot; PYQ Practice
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
