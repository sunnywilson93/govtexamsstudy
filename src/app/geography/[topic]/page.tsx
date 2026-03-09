import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { SubjectConcept, SubjectRevision, SubjectProblem } from '@/types/subject-notes'
import { SubjectTopicTabs } from '@/components/visualizers/shared/SubjectTopicTabs'

// Physical Geography — Concepts
import { physiographyConcept } from '@/data/geography/concepts/physiography'
import { drainageSystemsConcept } from '@/data/geography/concepts/drainage-systems'
import { climateMonsoonConcept } from '@/data/geography/concepts/climate-monsoon'
import { soilsConcept } from '@/data/geography/concepts/soils'
import { naturalVegetationConcept } from '@/data/geography/concepts/natural-vegetation'
import { biodiversityConcept } from '@/data/geography/concepts/biodiversity'
import { islandsCoastsConcept } from '@/data/geography/concepts/islands-coasts'

// Physical Geography — Revision
import { physiographyRevision } from '@/data/geography/revision/physiography'
import { drainageSystemsRevision } from '@/data/geography/revision/drainage-systems'
import { climateMonsoonRevision } from '@/data/geography/revision/climate-monsoon'
import { soilsRevision } from '@/data/geography/revision/soils'
import { naturalVegetationRevision } from '@/data/geography/revision/natural-vegetation'
import { biodiversityRevision } from '@/data/geography/revision/biodiversity'
import { islandsCoastsRevision } from '@/data/geography/revision/islands-coasts'

// Physical Geography — Problems
import { physiographyProblems } from '@/data/geography/problems/physiography-problems'
import { drainageSystemsProblems } from '@/data/geography/problems/drainage-systems-problems'
import { climateMonsoonProblems } from '@/data/geography/problems/climate-monsoon-problems'
import { soilsProblems } from '@/data/geography/problems/soils-problems'
import { naturalVegetationProblems } from '@/data/geography/problems/natural-vegetation-problems'
import { biodiversityProblems } from '@/data/geography/problems/biodiversity-problems'
import { islandsCoastsProblems } from '@/data/geography/problems/islands-coasts-problems'

// Economic Geography — Concepts
import { agricultureConcept } from '@/data/geography/concepts/agriculture'
import { irrigationConcept } from '@/data/geography/concepts/irrigation'
import { mineralsConcept } from '@/data/geography/concepts/minerals'
import { energyConcept } from '@/data/geography/concepts/energy'
import { industriesConcept } from '@/data/geography/concepts/industries'
import { transportConcept } from '@/data/geography/concepts/transport'

// Economic Geography — Revision
import { agricultureRevision } from '@/data/geography/revision/agriculture'
import { irrigationRevision } from '@/data/geography/revision/irrigation'
import { mineralsRevision } from '@/data/geography/revision/minerals'
import { energyRevision } from '@/data/geography/revision/energy'
import { industriesRevision } from '@/data/geography/revision/industries'
import { transportRevision } from '@/data/geography/revision/transport'

// Economic Geography — Problems
import { agricultureProblems } from '@/data/geography/problems/agriculture-problems'
import { irrigationProblems } from '@/data/geography/problems/irrigation-problems'
import { mineralsProblems } from '@/data/geography/problems/minerals-problems'
import { energyProblems } from '@/data/geography/problems/energy-problems'
import { industriesProblems } from '@/data/geography/problems/industries-problems'
import { transportProblems } from '@/data/geography/problems/transport-problems'

// Human Geography — Concepts
import { populationConcept } from '@/data/geography/concepts/population'
import { urbanizationConcept } from '@/data/geography/concepts/urbanization'
import { tribesConcept } from '@/data/geography/concepts/tribes'
import { migrationConcept } from '@/data/geography/concepts/migration'

// Human Geography — Revision
import { populationRevision } from '@/data/geography/revision/population'
import { urbanizationRevision } from '@/data/geography/revision/urbanization'
import { tribesRevision } from '@/data/geography/revision/tribes'
import { migrationRevision } from '@/data/geography/revision/migration'

// Human Geography — Problems
import { populationProblems } from '@/data/geography/problems/population-problems'
import { urbanizationProblems } from '@/data/geography/problems/urbanization-problems'
import { tribesProblems } from '@/data/geography/problems/tribes-problems'
import { migrationProblems } from '@/data/geography/problems/migration-problems'

// World Geography — Concepts
import { geomorphologyConcept } from '@/data/geography/concepts/geomorphology'
import { climatologyConcept } from '@/data/geography/concepts/climatology'
import { oceanographyConcept } from '@/data/geography/concepts/oceanography'
import { worldMappingConcept } from '@/data/geography/concepts/world-mapping'

// World Geography — Revision
import { geomorphologyRevision } from '@/data/geography/revision/geomorphology'
import { climatologyRevision } from '@/data/geography/revision/climatology'
import { oceanographyRevision } from '@/data/geography/revision/oceanography'
import { worldMappingRevision } from '@/data/geography/revision/world-mapping'

// World Geography — Problems
import { geomorphologyProblems } from '@/data/geography/problems/geomorphology-problems'
import { climatologyProblems } from '@/data/geography/problems/climatology-problems'
import { oceanographyProblems } from '@/data/geography/problems/oceanography-problems'
import { worldMappingProblems } from '@/data/geography/problems/world-mapping-problems'

// Environment & Ecology — Concepts
import { ecosystemsConcept } from '@/data/geography/concepts/ecosystems'
import { environmentalPollutionConcept } from '@/data/geography/concepts/environmental-pollution'
import { climateChangeConcept } from '@/data/geography/concepts/climate-change'
import { protectedAreasConcept } from '@/data/geography/concepts/protected-areas'
import { biodiversityConservationConcept } from '@/data/geography/concepts/biodiversity-conservation'
import { disasterManagementConcept } from '@/data/geography/concepts/disaster-management'
import { environmentalLegislationConcept } from '@/data/geography/concepts/environmental-legislation'

// Environment & Ecology — Revision
import { ecosystemsRevision } from '@/data/geography/revision/ecosystems'
import { environmentalPollutionRevision } from '@/data/geography/revision/environmental-pollution'
import { climateChangeRevision } from '@/data/geography/revision/climate-change'
import { protectedAreasRevision } from '@/data/geography/revision/protected-areas'
import { biodiversityConservationRevision } from '@/data/geography/revision/biodiversity-conservation'
import { disasterManagementRevision } from '@/data/geography/revision/disaster-management'
import { environmentalLegislationRevision } from '@/data/geography/revision/environmental-legislation'

// Environment & Ecology — Problems
import { ecosystemsProblems } from '@/data/geography/problems/ecosystems-problems'
import { environmentalPollutionProblems } from '@/data/geography/problems/environmental-pollution-problems'
import { climateChangeProblems } from '@/data/geography/problems/climate-change-problems'
import { protectedAreasProblems } from '@/data/geography/problems/protected-areas-problems'
import { biodiversityConservationProblems } from '@/data/geography/problems/biodiversity-conservation-problems'
import { disasterManagementProblems } from '@/data/geography/problems/disaster-management-problems'
import { environmentalLegislationProblems } from '@/data/geography/problems/environmental-legislation-problems'

// Resource Geography — Concepts
import { waterResourcesConcept } from '@/data/geography/concepts/water-resources'
import { landResourcesConcept } from '@/data/geography/concepts/land-resources'

// Resource Geography — Revision
import { waterResourcesRevision } from '@/data/geography/revision/water-resources'
import { landResourcesRevision } from '@/data/geography/revision/land-resources'

// Resource Geography — Problems
import { waterResourcesProblems } from '@/data/geography/problems/water-resources-problems'
import { landResourcesProblems } from '@/data/geography/problems/land-resources-problems'

// Geomorphic Processes — Concepts
import { plateTectonicsConcept } from '@/data/geography/concepts/plate-tectonics'
import { rocksMineralsTypesConcept } from '@/data/geography/concepts/rocks-minerals-types'
import { weatheringErosionConcept } from '@/data/geography/concepts/weathering-erosion'
import { glacialLandformsConcept } from '@/data/geography/concepts/glacial-landforms'
import { fluvialLandformsConcept } from '@/data/geography/concepts/fluvial-landforms'
import { aeolianLandformsConcept } from '@/data/geography/concepts/aeolian-landforms'

// Geomorphic Processes — Revision
import { plateTectonicsRevision } from '@/data/geography/revision/plate-tectonics'
import { rocksMineralsTypesRevision } from '@/data/geography/revision/rocks-minerals-types'
import { weatheringErosionRevision } from '@/data/geography/revision/weathering-erosion'
import { glacialLandformsRevision } from '@/data/geography/revision/glacial-landforms'
import { fluvialLandformsRevision } from '@/data/geography/revision/fluvial-landforms'
import { aeolianLandformsRevision } from '@/data/geography/revision/aeolian-landforms'

// Geomorphic Processes — Problems
import { plateTectonicsProblems } from '@/data/geography/problems/plate-tectonics-problems'
import { rocksMineralsTypesProblems } from '@/data/geography/problems/rocks-minerals-types-problems'
import { weatheringErosionProblems } from '@/data/geography/problems/weathering-erosion-problems'
import { glacialLandformsProblems } from '@/data/geography/problems/glacial-landforms-problems'
import { fluvialLandformsProblems } from '@/data/geography/problems/fluvial-landforms-problems'
import { aeolianLandformsProblems } from '@/data/geography/problems/aeolian-landforms-problems'

// Atmosphere & Climate — Concepts
import { atmosphericCompositionConcept } from '@/data/geography/concepts/atmospheric-composition'
import { pressureBeltsWindsConcept } from '@/data/geography/concepts/pressure-belts-winds'
import { cyclonesConcept } from '@/data/geography/concepts/cyclones'

// Atmosphere & Climate — Revision
import { atmosphericCompositionRevision } from '@/data/geography/revision/atmospheric-composition'
import { pressureBeltsWindsRevision } from '@/data/geography/revision/pressure-belts-winds'
import { cyclonesRevision } from '@/data/geography/revision/cyclones'

// Atmosphere & Climate — Problems
import { atmosphericCompositionProblems } from '@/data/geography/problems/atmospheric-composition-problems'
import { pressureBeltsWindsProblems } from '@/data/geography/problems/pressure-belts-winds-problems'
import { cyclonesProblems } from '@/data/geography/problems/cyclones-problems'

// Additional Physical Geography — Concepts
import { forestTypesIndiaConcept } from '@/data/geography/concepts/forest-types-india'
import { mountainPassesConcept } from '@/data/geography/concepts/mountain-passes'
import { lakesIndiaConcept } from '@/data/geography/concepts/lakes-india'

// Additional Physical Geography — Revision
import { forestTypesIndiaRevision } from '@/data/geography/revision/forest-types-india'
import { mountainPassesRevision } from '@/data/geography/revision/mountain-passes'
import { lakesIndiaRevision } from '@/data/geography/revision/lakes-india'

// Additional Physical Geography — Problems
import { forestTypesIndiaProblems } from '@/data/geography/problems/forest-types-india-problems'
import { mountainPassesProblems } from '@/data/geography/problems/mountain-passes-problems'
import { lakesIndiaProblems } from '@/data/geography/problems/lakes-india-problems'

// Additional World Geography — Concepts
import { oceanCurrentsConcept } from '@/data/geography/concepts/ocean-currents'
import { worldClimateRegionsConcept } from '@/data/geography/concepts/world-climate-regions'
import { remoteSensingGisConcept } from '@/data/geography/concepts/remote-sensing-gis'

// Additional World Geography — Revision
import { oceanCurrentsRevision } from '@/data/geography/revision/ocean-currents'
import { worldClimateRegionsRevision } from '@/data/geography/revision/world-climate-regions'
import { remoteSensingGisRevision } from '@/data/geography/revision/remote-sensing-gis'

// Additional World Geography — Problems
import { oceanCurrentsProblems } from '@/data/geography/problems/ocean-currents-problems'
import { worldClimateRegionsProblems } from '@/data/geography/problems/world-climate-regions-problems'
import { remoteSensingGisProblems } from '@/data/geography/problems/remote-sensing-gis-problems'

// Additional Environment & Ecology — Concepts
import { coralReefsConcept } from '@/data/geography/concepts/coral-reefs'
import { nationalParksSanctuariesConcept } from '@/data/geography/concepts/national-parks-sanctuaries'
import { ramsarWetlandsConcept } from '@/data/geography/concepts/ramsar-wetlands'
import { biosphereReservesConcept } from '@/data/geography/concepts/biosphere-reserves'

// Additional Environment & Ecology — Revision
import { coralReefsRevision } from '@/data/geography/revision/coral-reefs'
import { nationalParksSanctuariesRevision } from '@/data/geography/revision/national-parks-sanctuaries'
import { ramsarWetlandsRevision } from '@/data/geography/revision/ramsar-wetlands'
import { biosphereReservesRevision } from '@/data/geography/revision/biosphere-reserves'

// Additional Environment & Ecology — Problems
import { coralReefsProblems } from '@/data/geography/problems/coral-reefs-problems'
import { nationalParksSanctuariesProblems } from '@/data/geography/problems/national-parks-sanctuaries-problems'
import { ramsarWetlandsProblems } from '@/data/geography/problems/ramsar-wetlands-problems'
import { biosphereReservesProblems } from '@/data/geography/problems/biosphere-reserves-problems'

// Additional Human Geography — Concepts
import { censusDemographicsConcept } from '@/data/geography/concepts/census-demographics'

// Additional Human Geography — Revision
import { censusDemographicsRevision } from '@/data/geography/revision/census-demographics'

// Additional Human Geography — Problems
import { censusDemographicsProblems } from '@/data/geography/problems/census-demographics-problems'

interface TopicData {
  concept: SubjectConcept
  revision: SubjectRevision
  problems: SubjectProblem[]
  label: string
  description: string
}

const TOPIC_DATA: Record<string, TopicData> = {
  // Physical Geography
  physiography: {
    concept: physiographyConcept,
    revision: physiographyRevision,
    problems: physiographyProblems,
    label: 'Physiography of India',
    description:
      'Physiographic divisions of India for UPSC, SSC & banking exams. Himalayas, Northern Plains, Peninsular Plateau with notes, revision, and PYQs.',
  },
  'drainage-systems': {
    concept: drainageSystemsConcept,
    revision: drainageSystemsRevision,
    problems: drainageSystemsProblems,
    label: 'Drainage Systems of India',
    description:
      'Indian drainage systems for government exams. Himalayan and Peninsular rivers, river basins with notes, revision, and PYQs.',
  },
  'climate-monsoon': {
    concept: climateMonsoonConcept,
    revision: climateMonsoonRevision,
    problems: climateMonsoonProblems,
    label: 'Climate & Indian Monsoon',
    description:
      'Indian climate and monsoon system for UPSC & SSC. Seasons, monsoon mechanism, rainfall distribution with notes, revision, and PYQs.',
  },
  soils: {
    concept: soilsConcept,
    revision: soilsRevision,
    problems: soilsProblems,
    label: 'Soils of India',
    description:
      'Indian soil types for government exams. Alluvial, black, laterite, red soils with notes, revision, and PYQs.',
  },
  'natural-vegetation': {
    concept: naturalVegetationConcept,
    revision: naturalVegetationRevision,
    problems: naturalVegetationProblems,
    label: 'Natural Vegetation & Forests',
    description:
      'Natural vegetation of India for UPSC & SSC. Forest types, forest cover, Champion & Seth classification with notes, revision, and PYQs.',
  },
  biodiversity: {
    concept: biodiversityConcept,
    revision: biodiversityRevision,
    problems: biodiversityProblems,
    label: 'Biodiversity of India',
    description:
      'Indian biodiversity for government exams. Hotspots, endemic species, megadiversity status with notes, revision, and PYQs.',
  },
  'islands-coasts': {
    concept: islandsCoastsConcept,
    revision: islandsCoastsRevision,
    problems: islandsCoastsProblems,
    label: 'Islands & Coastal Features',
    description:
      'Indian islands and coastline for UPSC & SSC. Andaman-Nicobar, Lakshadweep, coastal geomorphology with notes, revision, and PYQs.',
  },
  // Economic Geography
  agriculture: {
    concept: agricultureConcept,
    revision: agricultureRevision,
    problems: agricultureProblems,
    label: 'Indian Agriculture',
    description:
      'Indian agriculture for government exams. Cropping patterns, Green Revolution, food security with notes, revision, and PYQs.',
  },
  irrigation: {
    concept: irrigationConcept,
    revision: irrigationRevision,
    problems: irrigationProblems,
    label: 'Irrigation in India',
    description:
      'Indian irrigation for UPSC & SSC. Canal, well, tank irrigation, major projects with notes, revision, and PYQs.',
  },
  minerals: {
    concept: mineralsConcept,
    revision: mineralsRevision,
    problems: mineralsProblems,
    label: 'Minerals & Mining',
    description:
      'Indian minerals for government exams. Iron ore, coal, mica, bauxite distribution with notes, revision, and PYQs.',
  },
  energy: {
    concept: energyConcept,
    revision: energyRevision,
    problems: energyProblems,
    label: 'Energy Resources',
    description:
      'Indian energy resources for UPSC & SSC. Conventional and renewable energy, power generation with notes, revision, and PYQs.',
  },
  industries: {
    concept: industriesConcept,
    revision: industriesRevision,
    problems: industriesProblems,
    label: 'Industries of India',
    description:
      'Indian industries for government exams. Iron-steel, textiles, IT, industrial corridors with notes, revision, and PYQs.',
  },
  transport: {
    concept: transportConcept,
    revision: transportRevision,
    problems: transportProblems,
    label: 'Transport & Communication',
    description:
      'Indian transport network for UPSC & SSC. Railways, roads, ports, airways with notes, revision, and PYQs.',
  },
  // Human Geography
  population: {
    concept: populationConcept,
    revision: populationRevision,
    problems: populationProblems,
    label: 'Population Geography',
    description:
      'Indian population for government exams. Census data, density, growth, demographic transition with notes, revision, and PYQs.',
  },
  urbanization: {
    concept: urbanizationConcept,
    revision: urbanizationRevision,
    problems: urbanizationProblems,
    label: 'Urbanization in India',
    description:
      'Indian urbanization for UPSC & SSC. Urban growth, smart cities, metro classification with notes, revision, and PYQs.',
  },
  tribes: {
    concept: tribesConcept,
    revision: tribesRevision,
    problems: tribesProblems,
    label: 'Tribes of India',
    description:
      'Indian tribal communities for government exams. PVTGs, scheduled areas, tribal distribution with notes, revision, and PYQs.',
  },
  migration: {
    concept: migrationConcept,
    revision: migrationRevision,
    problems: migrationProblems,
    label: 'Migration Patterns',
    description:
      'Indian migration for UPSC & SSC. Internal migration, urbanization push-pull, Census data with notes, revision, and PYQs.',
  },
  // World Geography
  geomorphology: {
    concept: geomorphologyConcept,
    revision: geomorphologyRevision,
    problems: geomorphologyProblems,
    label: 'Geomorphology',
    description:
      'Geomorphology for government exams. Plate tectonics, landforms, weathering, erosion cycles with notes, revision, and PYQs.',
  },
  climatology: {
    concept: climatologyConcept,
    revision: climatologyRevision,
    problems: climatologyProblems,
    label: 'Climatology',
    description:
      'World climatology for UPSC & SSC. Atmospheric circulation, pressure belts, wind systems with notes, revision, and PYQs.',
  },
  oceanography: {
    concept: oceanographyConcept,
    revision: oceanographyRevision,
    problems: oceanographyProblems,
    label: 'Oceanography',
    description:
      'Oceanography for government exams. Ocean currents, salinity, tides, marine resources with notes, revision, and PYQs.',
  },
  'world-mapping': {
    concept: worldMappingConcept,
    revision: worldMappingRevision,
    problems: worldMappingProblems,
    label: 'World Mapping & Key Locations',
    description:
      'World mapping for UPSC & SSC. Straits, passes, deserts, volcanoes, important global locations with notes, revision, and PYQs.',
  },
  // Environment & Ecology
  ecosystems: {
    concept: ecosystemsConcept,
    revision: ecosystemsRevision,
    problems: ecosystemsProblems,
    label: 'Ecosystems',
    description:
      'Ecosystems for government exams. Types, food chains, ecological pyramids, biomes with notes, revision, and PYQs.',
  },
  'environmental-pollution': {
    concept: environmentalPollutionConcept,
    revision: environmentalPollutionRevision,
    problems: environmentalPollutionProblems,
    label: 'Environmental Pollution',
    description:
      'Environmental pollution for UPSC & SSC. Air, water, soil, noise pollution, control measures with notes, revision, and PYQs.',
  },
  'climate-change': {
    concept: climateChangeConcept,
    revision: climateChangeRevision,
    problems: climateChangeProblems,
    label: 'Climate Change',
    description:
      'Climate change for government exams. Global warming, UNFCCC, Paris Agreement, IPCC with notes, revision, and PYQs.',
  },
  'protected-areas': {
    concept: protectedAreasConcept,
    revision: protectedAreasRevision,
    problems: protectedAreasProblems,
    label: 'Protected Areas & National Parks',
    description:
      'Protected areas for UPSC & SSC. National parks, sanctuaries, biosphere reserves, Ramsar sites with notes, revision, and PYQs.',
  },
  'biodiversity-conservation': {
    concept: biodiversityConservationConcept,
    revision: biodiversityConservationRevision,
    problems: biodiversityConservationProblems,
    label: 'Biodiversity Conservation',
    description:
      'Biodiversity conservation for government exams. In-situ, ex-situ, IUCN, CBD, CITES with notes, revision, and PYQs.',
  },
  'disaster-management': {
    concept: disasterManagementConcept,
    revision: disasterManagementRevision,
    problems: disasterManagementProblems,
    label: 'Disaster Management',
    description:
      'Disaster management for UPSC & SSC. NDMA, NDRF, Sendai Framework, earthquake zones with notes, revision, and PYQs.',
  },
  'environmental-legislation': {
    concept: environmentalLegislationConcept,
    revision: environmentalLegislationRevision,
    problems: environmentalLegislationProblems,
    label: 'Environmental Legislation',
    description:
      'Environmental laws for government exams. EPA, WLPA, FCA, FRA, NGT, EIA with notes, revision, and PYQs.',
  },
  // Resource Geography
  'water-resources': {
    concept: waterResourcesConcept,
    revision: waterResourcesRevision,
    problems: waterResourcesProblems,
    label: 'Water Resources',
    description:
      'Water resources for UPSC & SSC. Availability, groundwater, river linking, Jal Jeevan Mission with notes, revision, and PYQs.',
  },
  'land-resources': {
    concept: landResourcesConcept,
    revision: landResourcesRevision,
    problems: landResourcesProblems,
    label: 'Land Resources & Land Use',
    description:
      'Land resources for government exams. Land use, degradation, reform, SVAMITVA with notes, revision, and PYQs.',
  },
  // Geomorphic Processes
  'plate-tectonics': {
    concept: plateTectonicsConcept,
    revision: plateTectonicsRevision,
    problems: plateTectonicsProblems,
    label: 'Plate Tectonics & Continental Drift',
    description:
      'Plate tectonics for UPSC & SSC. Continental drift, sea floor spreading, boundary types, Indian plate movement with notes, revision, and PYQs.',
  },
  'rocks-minerals-types': {
    concept: rocksMineralsTypesConcept,
    revision: rocksMineralsTypesRevision,
    problems: rocksMineralsTypesProblems,
    label: 'Rocks & Minerals',
    description:
      'Rocks and minerals for government exams. Igneous, sedimentary, metamorphic rocks, rock cycle, mineral classification with notes, revision, and PYQs.',
  },
  'weathering-erosion': {
    concept: weatheringErosionConcept,
    revision: weatheringErosionRevision,
    problems: weatheringErosionProblems,
    label: 'Weathering & Erosion',
    description:
      'Weathering and erosion for UPSC & SSC. Physical, chemical, biological weathering, mass wasting, erosion agents with notes, revision, and PYQs.',
  },
  'glacial-landforms': {
    concept: glacialLandformsConcept,
    revision: glacialLandformsRevision,
    problems: glacialLandformsProblems,
    label: 'Glacial Landforms',
    description:
      'Glacial landforms for government exams. Cirques, moraines, drumlins, fjords, Indian glaciers with notes, revision, and PYQs.',
  },
  'fluvial-landforms': {
    concept: fluvialLandformsConcept,
    revision: fluvialLandformsRevision,
    problems: fluvialLandformsProblems,
    label: 'Fluvial Landforms',
    description:
      'Fluvial landforms for UPSC & SSC. River valleys, meanders, deltas, floodplains, drainage patterns with notes, revision, and PYQs.',
  },
  'aeolian-landforms': {
    concept: aeolianLandformsConcept,
    revision: aeolianLandformsRevision,
    problems: aeolianLandformsProblems,
    label: 'Aeolian & Desert Landforms',
    description:
      'Aeolian landforms for government exams. Sand dunes, yardangs, pediments, desert features, Thar Desert with notes, revision, and PYQs.',
  },
  // Atmosphere & Climate
  'atmospheric-composition': {
    concept: atmosphericCompositionConcept,
    revision: atmosphericCompositionRevision,
    problems: atmosphericCompositionProblems,
    label: 'Atmosphere & Weather',
    description:
      'Atmospheric composition and weather for UPSC & SSC. Atmosphere layers, insolation, heat budget, weather elements with notes, revision, and PYQs.',
  },
  'pressure-belts-winds': {
    concept: pressureBeltsWindsConcept,
    revision: pressureBeltsWindsRevision,
    problems: pressureBeltsWindsProblems,
    label: 'Pressure Belts & Winds',
    description:
      'Pressure belts and wind systems for government exams. Trade winds, westerlies, jet streams, local winds with notes, revision, and PYQs.',
  },
  cyclones: {
    concept: cyclonesConcept,
    revision: cyclonesRevision,
    problems: cyclonesProblems,
    label: 'Cyclones — Tropical & Temperate',
    description:
      'Cyclones for UPSC & SSC. Tropical cyclones, temperate cyclones, IMD warnings, cyclone naming, Indian cyclones with notes, revision, and PYQs.',
  },
  // Additional Physical Geography
  'forest-types-india': {
    concept: forestTypesIndiaConcept,
    revision: forestTypesIndiaRevision,
    problems: forestTypesIndiaProblems,
    label: 'Forest Types of India',
    description:
      'Forest types of India for government exams. Champion & Seth classification, tropical, subtropical, montane forests with notes, revision, and PYQs.',
  },
  'mountain-passes': {
    concept: mountainPassesConcept,
    revision: mountainPassesRevision,
    problems: mountainPassesProblems,
    label: 'Important Mountain Passes',
    description:
      'Mountain passes of India for UPSC & SSC. Himalayan passes, Western Ghat passes, strategic passes with notes, revision, and PYQs.',
  },
  'lakes-india': {
    concept: lakesIndiaConcept,
    revision: lakesIndiaRevision,
    problems: lakesIndiaProblems,
    label: 'Lakes of India',
    description:
      'Lakes of India for government exams. Freshwater, saltwater, glacial, tectonic, artificial lakes with notes, revision, and PYQs.',
  },
  // Additional World Geography
  'ocean-currents': {
    concept: oceanCurrentsConcept,
    revision: oceanCurrentsRevision,
    problems: oceanCurrentsProblems,
    label: 'Ocean Currents',
    description:
      'Ocean currents for UPSC & SSC. Warm and cold currents, thermohaline circulation, upwelling, El Nino with notes, revision, and PYQs.',
  },
  'world-climate-regions': {
    concept: worldClimateRegionsConcept,
    revision: worldClimateRegionsRevision,
    problems: worldClimateRegionsProblems,
    label: 'World Climate Regions',
    description:
      'World climate regions for government exams. Köppen classification, tropical, temperate, polar climates, biomes with notes, revision, and PYQs.',
  },
  'remote-sensing-gis': {
    concept: remoteSensingGisConcept,
    revision: remoteSensingGisRevision,
    problems: remoteSensingGisProblems,
    label: 'Remote Sensing & GIS',
    description:
      'Remote sensing and GIS for UPSC & SSC. ISRO satellites, NavIC, Bhuvan, GIS applications, RS principles with notes, revision, and PYQs.',
  },
  // Additional Environment & Ecology
  'coral-reefs': {
    concept: coralReefsConcept,
    revision: coralReefsRevision,
    problems: coralReefsProblems,
    label: 'Coral Reefs & Marine Ecosystems',
    description:
      'Coral reefs for government exams. Fringing, barrier, atoll reefs, coral bleaching, Indian coral reefs with notes, revision, and PYQs.',
  },
  'national-parks-sanctuaries': {
    concept: nationalParksSanctuariesConcept,
    revision: nationalParksSanctuariesRevision,
    problems: nationalParksSanctuariesProblems,
    label: 'National Parks & Wildlife Sanctuaries',
    description:
      'National parks and wildlife sanctuaries for UPSC & SSC. Tiger reserves, elephant reserves, bird sanctuaries with notes, revision, and PYQs.',
  },
  'ramsar-wetlands': {
    concept: ramsarWetlandsConcept,
    revision: ramsarWetlandsRevision,
    problems: ramsarWetlandsProblems,
    label: 'Wetlands & Ramsar Sites',
    description:
      'Wetlands and Ramsar sites for government exams. India Ramsar sites, wetland conservation, Montreux Record with notes, revision, and PYQs.',
  },
  'biosphere-reserves': {
    concept: biosphereReservesConcept,
    revision: biosphereReservesRevision,
    problems: biosphereReservesProblems,
    label: 'Biosphere Reserves',
    description:
      'Biosphere reserves for UPSC & SSC. UNESCO MAB programme, Indian biosphere reserves, zonation with notes, revision, and PYQs.',
  },
  // Additional Human Geography
  'census-demographics': {
    concept: censusDemographicsConcept,
    revision: censusDemographicsRevision,
    problems: censusDemographicsProblems,
    label: 'Census & Demographics',
    description:
      'Census and demographics for government exams. Census 2011 data, population growth, sex ratio, literacy, demographic dividend with notes, revision, and PYQs.',
  },
}

interface Props {
  params: Promise<{ topic: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params
  const data = TOPIC_DATA[topic]
  if (!data) return {}
  const title = `${data.label} — Notes, Revision & PYQs | GovtExamsStudy`
  const description = `${data.description} Free notes, revision tricks, and previous year questions for UPSC, SSC CGL, and government exams.`
  return {
    title,
    description,
    keywords: [`${data.label}`, `${data.label} UPSC`, `${data.label} notes`, 'Indian Geography', 'geography for UPSC', 'SSC CGL geography', `${data.label} PYQ`],
    openGraph: {
      title,
      description,
      type: 'article',
      siteName: 'GovtExamsStudy',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: `https://govtexamsstudy.org/geography/${topic}`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(TOPIC_DATA).map((topic) => ({ topic }))
}

export default async function TopicPage({ params }: Props) {
  const { topic } = await params
  const data = TOPIC_DATA[topic]

  if (!data) notFound()

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-text-primary">{data.label}</h1>
      <SubjectTopicTabs
        concept={data.concept}
        revision={data.revision}
        problems={data.problems}
        subject="geography"
      />
    </div>
  )
}
