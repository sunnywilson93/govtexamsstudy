import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { HistoryConcept, HistoryRevision, HistoryProblem } from '@/types/history'
import { HistoryTopicTabs } from '@/components/visualizers/history/HistoryTopicTabs'

// Ancient India
import { indusValleyConcept } from '@/data/history/concepts/indus-valley'
import { vedicPeriodConcept } from '@/data/history/concepts/vedic-period'
import { buddhismJainismConcept } from '@/data/history/concepts/buddhism-jainism'
import { mahajanapdasConcept } from '@/data/history/concepts/mahajanapadas'
import { mauryaEmpireConcept } from '@/data/history/concepts/maurya-empire'
import { postMauryaConcept } from '@/data/history/concepts/post-maurya'
import { sangamAgeConcept } from '@/data/history/concepts/sangam-age'
import { guptaEmpireConcept } from '@/data/history/concepts/gupta-empire'
import { southIndianDynastiesConcept } from '@/data/history/concepts/south-indian-dynasties'
import { prehistoricIndiaConcept } from '@/data/history/concepts/prehistoric-india'
import { philosophicalSchoolsConcept } from '@/data/history/concepts/philosophical-schools'
import { cholaDynastyConcept } from '@/data/history/concepts/chola-dynasty'
import { pallavaDynastyConcept } from '@/data/history/concepts/pallava-dynasty'

import { indusValleyRevision } from '@/data/history/revision/indus-valley'
import { vedicPeriodRevision } from '@/data/history/revision/vedic-period'
import { buddhismJainismRevision } from '@/data/history/revision/buddhism-jainism'
import { mahajanapdasRevision } from '@/data/history/revision/mahajanapadas'
import { mauryaEmpireRevision } from '@/data/history/revision/maurya-empire'
import { postMauryaRevision } from '@/data/history/revision/post-maurya'
import { sangamAgeRevision } from '@/data/history/revision/sangam-age'
import { guptaEmpireRevision } from '@/data/history/revision/gupta-empire'
import { southIndianDynastiesRevision } from '@/data/history/revision/south-indian-dynasties'
import { prehistoricIndiaRevision } from '@/data/history/revision/prehistoric-india'
import { philosophicalSchoolsRevision } from '@/data/history/revision/philosophical-schools'
import { cholaDynastyRevision } from '@/data/history/revision/chola-dynasty'
import { pallavaDynastyRevision } from '@/data/history/revision/pallava-dynasty'

import { indusValleyProblems } from '@/data/history/problems/indus-valley-problems'
import { vedicPeriodProblems } from '@/data/history/problems/vedic-period-problems'
import { buddhismJainismProblems } from '@/data/history/problems/buddhism-jainism-problems'
import { mahajanapdasProblems } from '@/data/history/problems/mahajanapadas-problems'
import { mauryaEmpireProblems } from '@/data/history/problems/maurya-empire-problems'
import { postMauryaProblems } from '@/data/history/problems/post-maurya-problems'
import { sangamAgeProblems } from '@/data/history/problems/sangam-age-problems'
import { guptaEmpireProblems } from '@/data/history/problems/gupta-empire-problems'
import { southIndianDynastiesProblems } from '@/data/history/problems/south-indian-dynasties-problems'
import { prehistoricIndiaProblems } from '@/data/history/problems/prehistoric-india-problems'
import { philosophicalSchoolsProblems } from '@/data/history/problems/philosophical-schools-problems'
import { cholaDynastyProblems } from '@/data/history/problems/chola-dynasty-problems'
import { pallavaDynastyProblems } from '@/data/history/problems/pallava-dynasty-problems'

// Medieval India
import { delhiSultanateConcept } from '@/data/history/concepts/delhi-sultanate'
import { vijayanagaraBahmaniConcept } from '@/data/history/concepts/vijayanagara-bahmani'
import { bhaktiSufiConcept } from '@/data/history/concepts/bhakti-sufi'
import { mughalEmpireConcept } from '@/data/history/concepts/mughal-empire'
import { marathaEmpireConcept } from '@/data/history/concepts/maratha-empire'
import { medievalKingdomsConcept } from '@/data/history/concepts/medieval-kingdoms'
import { rajputKingdomsConcept } from '@/data/history/concepts/rajput-kingdoms'

import { delhiSultanateRevision } from '@/data/history/revision/delhi-sultanate'
import { vijayanagaraBahmaniRevision } from '@/data/history/revision/vijayanagara-bahmani'
import { bhaktiSufiRevision } from '@/data/history/revision/bhakti-sufi'
import { mughalEmpireRevision } from '@/data/history/revision/mughal-empire'
import { marathaEmpireRevision } from '@/data/history/revision/maratha-empire'
import { medievalKingdomsRevision } from '@/data/history/revision/medieval-kingdoms'
import { rajputKingdomsRevision } from '@/data/history/revision/rajput-kingdoms'

import { delhiSultanateProblems } from '@/data/history/problems/delhi-sultanate-problems'
import { vijayanagaraBahmaniProblems } from '@/data/history/problems/vijayanagara-bahmani-problems'
import { bhaktiSufiProblems } from '@/data/history/problems/bhakti-sufi-problems'
import { mughalEmpireProblems } from '@/data/history/problems/mughal-empire-problems'
import { marathaEmpireProblems } from '@/data/history/problems/maratha-empire-problems'
import { medievalKingdomsProblems } from '@/data/history/problems/medieval-kingdoms-problems'
import { rajputKingdomsProblems } from '@/data/history/problems/rajput-kingdoms-problems'

// Modern India
import { europeanCompaniesConcept } from '@/data/history/concepts/european-companies'
import { britishExpansionConcept } from '@/data/history/concepts/british-expansion'
import { governorGeneralsConcept } from '@/data/history/concepts/governor-generals'
import { britishEconomicPoliciesConcept } from '@/data/history/concepts/british-economic-policies'
import { revolt1857Concept } from '@/data/history/concepts/revolt-1857'
import { reformMovementsConcept } from '@/data/history/concepts/reform-movements'
import { congressNationalMovementConcept } from '@/data/history/concepts/congress-national-movement'
import { gandhianMovementsConcept } from '@/data/history/concepts/gandhian-movements'
import { revolutionaryMovementConcept } from '@/data/history/concepts/revolutionary-movement'
import { constitutionalDevelopmentConcept } from '@/data/history/concepts/constitutional-development'
import { tribalPeasantMovementsConcept } from '@/data/history/concepts/tribal-peasant-movements'
import { angloWarsConcept } from '@/data/history/concepts/anglo-wars'
import { landRevenueSystemsConcept } from '@/data/history/concepts/land-revenue-systems'
import { pressEducationBritishConcept } from '@/data/history/concepts/press-education-british'
import { casteReformMovementsConcept } from '@/data/history/concepts/caste-reform-movements'
import { womensMovementsConcept } from '@/data/history/concepts/womens-movements'

import { europeanCompaniesRevision } from '@/data/history/revision/european-companies'
import { britishExpansionRevision } from '@/data/history/revision/british-expansion'
import { governorGeneralsRevision } from '@/data/history/revision/governor-generals'
import { britishEconomicPoliciesRevision } from '@/data/history/revision/british-economic-policies'
import { revolt1857Revision } from '@/data/history/revision/revolt-1857'
import { reformMovementsRevision } from '@/data/history/revision/reform-movements'
import { congressNationalMovementRevision } from '@/data/history/revision/congress-national-movement'
import { gandhianMovementsRevision } from '@/data/history/revision/gandhian-movements'
import { revolutionaryMovementRevision } from '@/data/history/revision/revolutionary-movement'
import { constitutionalDevelopmentRevision } from '@/data/history/revision/constitutional-development'
import { tribalPeasantMovementsRevision } from '@/data/history/revision/tribal-peasant-movements'
import { angloWarsRevision } from '@/data/history/revision/anglo-wars'
import { landRevenueSystemsRevision } from '@/data/history/revision/land-revenue-systems'
import { pressEducationBritishRevision } from '@/data/history/revision/press-education-british'
import { casteReformMovementsRevision } from '@/data/history/revision/caste-reform-movements'
import { womensMovementsRevision } from '@/data/history/revision/womens-movements'

import { europeanCompaniesProblems } from '@/data/history/problems/european-companies-problems'
import { britishExpansionProblems } from '@/data/history/problems/british-expansion-problems'
import { governorGeneralsProblems } from '@/data/history/problems/governor-generals-problems'
import { britishEconomicPoliciesProblems } from '@/data/history/problems/british-economic-policies-problems'
import { revolt1857Problems } from '@/data/history/problems/revolt-1857-problems'
import { reformMovementsProblems } from '@/data/history/problems/reform-movements-problems'
import { congressNationalMovementProblems } from '@/data/history/problems/congress-national-movement-problems'
import { gandhianMovementsProblems } from '@/data/history/problems/gandhian-movements-problems'
import { revolutionaryMovementProblems } from '@/data/history/problems/revolutionary-movement-problems'
import { constitutionalDevelopmentProblems } from '@/data/history/problems/constitutional-development-problems'
import { tribalPeasantMovementsProblems } from '@/data/history/problems/tribal-peasant-movements-problems'
import { angloWarsProblems } from '@/data/history/problems/anglo-wars-problems'
import { landRevenueSystemsProblems } from '@/data/history/problems/land-revenue-systems-problems'
import { pressEducationBritishProblems } from '@/data/history/problems/press-education-british-problems'
import { casteReformMovementsProblems } from '@/data/history/problems/caste-reform-movements-problems'
import { womensMovementsProblems } from '@/data/history/problems/womens-movements-problems'

// Post-Independence
import { independencePartitionConcept } from '@/data/history/concepts/independence-partition'
import { princelyStatesConcept } from '@/data/history/concepts/princely-states'
import { nationBuildingConcept } from '@/data/history/concepts/nation-building'
import { warsForeignPolicyConcept } from '@/data/history/concepts/wars-foreign-policy'
import { postIndependenceConsolidationConcept } from '@/data/history/concepts/post-independence-consolidation'
import { nonAlignedMovementConcept } from '@/data/history/concepts/non-aligned-movement'
import { greenWhiteRevolutionConcept } from '@/data/history/concepts/green-white-revolution'

import { independencePartitionRevision } from '@/data/history/revision/independence-partition'
import { princelyStatesRevision } from '@/data/history/revision/princely-states'
import { nationBuildingRevision } from '@/data/history/revision/nation-building'
import { warsForeignPolicyRevision } from '@/data/history/revision/wars-foreign-policy'
import { postIndependenceConsolidationRevision } from '@/data/history/revision/post-independence-consolidation'
import { nonAlignedMovementRevision } from '@/data/history/revision/non-aligned-movement'
import { greenWhiteRevolutionRevision } from '@/data/history/revision/green-white-revolution'

import { independencePartitionProblems } from '@/data/history/problems/independence-partition-problems'
import { princelyStatesProblems } from '@/data/history/problems/princely-states-problems'
import { nationBuildingProblems } from '@/data/history/problems/nation-building-problems'
import { warsForeignPolicyProblems } from '@/data/history/problems/wars-foreign-policy-problems'
import { postIndependenceConsolidationProblems } from '@/data/history/problems/post-independence-consolidation-problems'
import { nonAlignedMovementProblems } from '@/data/history/problems/non-aligned-movement-problems'
import { greenWhiteRevolutionProblems } from '@/data/history/problems/green-white-revolution-problems'

// Art & Culture
import { indianArchitectureConcept } from '@/data/history/concepts/indian-architecture'
import { paintingsSculptureConcept } from '@/data/history/concepts/paintings-sculpture'
import { musicDanceConcept } from '@/data/history/concepts/music-dance'
import { indianLiteratureConcept } from '@/data/history/concepts/indian-literature'
import { heritageSitesConcept } from '@/data/history/concepts/heritage-sites'
import { indianCinemaTheatreConcept } from '@/data/history/concepts/indian-cinema-theatre'
import { fairsFestivalsConcept } from '@/data/history/concepts/fairs-festivals'

import { indianArchitectureRevision } from '@/data/history/revision/indian-architecture'
import { paintingsSculptureRevision } from '@/data/history/revision/paintings-sculpture'
import { musicDanceRevision } from '@/data/history/revision/music-dance'
import { indianLiteratureRevision } from '@/data/history/revision/indian-literature'
import { heritageSitesRevision } from '@/data/history/revision/heritage-sites'
import { indianCinemaTheatreRevision } from '@/data/history/revision/indian-cinema-theatre'
import { fairsFestivalsRevision } from '@/data/history/revision/fairs-festivals'

import { indianArchitectureProblems } from '@/data/history/problems/indian-architecture-problems'
import { paintingsSculptureProblems } from '@/data/history/problems/paintings-sculpture-problems'
import { musicDanceProblems } from '@/data/history/problems/music-dance-problems'
import { indianLiteratureProblems } from '@/data/history/problems/indian-literature-problems'
import { heritageSitesProblems } from '@/data/history/problems/heritage-sites-problems'
import { indianCinemaTheatreProblems } from '@/data/history/problems/indian-cinema-theatre-problems'
import { fairsFestivalsProblems } from '@/data/history/problems/fairs-festivals-problems'

interface TopicData {
  concept: HistoryConcept
  revision: HistoryRevision
  problems: HistoryProblem[]
  label: string
  description: string
}

const TOPIC_DATA: Record<string, TopicData> = {
  'indus-valley': {
    concept: indusValleyConcept,
    revision: indusValleyRevision,
    problems: indusValleyProblems,
    label: 'Indus Valley Civilization',
    description:
      'Indus Valley Civilization for UPSC, SSC & banking exams. Notes, revision points, and previous year questions.',
  },
  'vedic-period': {
    concept: vedicPeriodConcept,
    revision: vedicPeriodRevision,
    problems: vedicPeriodProblems,
    label: 'Vedic Period',
    description: 'Vedic Period for UPSC, SSC & banking exams. Early and Later Vedic society, polity, literature with notes, revision, and PYQs.',
  },
  'buddhism-jainism': {
    concept: buddhismJainismConcept,
    revision: buddhismJainismRevision,
    problems: buddhismJainismProblems,
    label: 'Buddhism & Jainism',
    description: 'Buddhism and Jainism for government exams. Founders, teachings, councils, sects with notes, revision, and PYQs.',
  },
  mahajanapadas: {
    concept: mahajanapdasConcept,
    revision: mahajanapdasRevision,
    problems: mahajanapdasProblems,
    label: 'Mahajanapadas & Rise of Magadha',
    description: 'Mahajanapadas for UPSC & SSC. 16 kingdoms, Haryanka to Nanda dynasties with notes, revision, and PYQs.',
  },
  'maurya-empire': {
    concept: mauryaEmpireConcept,
    revision: mauryaEmpireRevision,
    problems: mauryaEmpireProblems,
    label: 'Maurya Empire & Ashoka',
    description: 'Maurya Empire for government exams. Chandragupta, Arthashastra, Ashoka edicts, Dhamma with notes, revision, and PYQs.',
  },
  'post-maurya': {
    concept: postMauryaConcept,
    revision: postMauryaRevision,
    problems: postMauryaProblems,
    label: 'Post-Maurya Period',
    description: 'Post-Maurya Period for UPSC & SSC. Sungas, Kanvas, Satavahanas, Indo-Greeks, Kushanas with notes, revision, and PYQs.',
  },
  'sangam-age': {
    concept: sangamAgeConcept,
    revision: sangamAgeRevision,
    problems: sangamAgeProblems,
    label: 'Sangam Age',
    description: 'Sangam Age for government exams. Tamil kingdoms, Sangam literature, Roman trade with notes, revision, and PYQs.',
  },
  'gupta-empire': {
    concept: guptaEmpireConcept,
    revision: guptaEmpireRevision,
    problems: guptaEmpireProblems,
    label: 'Gupta Empire & Golden Age',
    description: 'Gupta Empire for UPSC & SSC. Science, literature, art, Nalanda with notes, revision, and PYQs.',
  },
  'south-indian-dynasties': {
    concept: southIndianDynastiesConcept,
    revision: southIndianDynastiesRevision,
    problems: southIndianDynastiesProblems,
    label: 'South Indian Dynasties',
    description: 'South Indian Dynasties for government exams. Chalukyas, Pallavas, Rashtrakutas, Cholas with notes, revision, and PYQs.',
  },
  'prehistoric-india': {
    concept: prehistoricIndiaConcept,
    revision: prehistoricIndiaRevision,
    problems: prehistoricIndiaProblems,
    label: 'Prehistoric India',
    description: 'Prehistoric India for UPSC & SSC. Palaeolithic, Mesolithic, Neolithic, Chalcolithic ages with notes, revision, and PYQs.',
  },
  'philosophical-schools': {
    concept: philosophicalSchoolsConcept,
    revision: philosophicalSchoolsRevision,
    problems: philosophicalSchoolsProblems,
    label: 'Indian Philosophical Schools',
    description: 'Six Schools of Indian Philosophy for government exams. Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta with notes, revision, and PYQs.',
  },
  'chola-dynasty': {
    concept: cholaDynastyConcept,
    revision: cholaDynastyRevision,
    problems: cholaDynastyProblems,
    label: 'Chola Dynasty',
    description: 'Chola Dynasty for UPSC & SSC. Rajaraja I, Rajendra I, naval power, temple architecture with notes, revision, and PYQs.',
  },
  'pallava-dynasty': {
    concept: pallavaDynastyConcept,
    revision: pallavaDynastyRevision,
    problems: pallavaDynastyProblems,
    label: 'Pallava Dynasty',
    description: 'Pallava Dynasty for government exams. Mahabalipuram, Kanchipuram, rock-cut architecture with notes, revision, and PYQs.',
  },
  'delhi-sultanate': {
    concept: delhiSultanateConcept,
    revision: delhiSultanateRevision,
    problems: delhiSultanateProblems,
    label: 'Delhi Sultanate',
    description: 'Delhi Sultanate for UPSC & SSC. Five dynasties, administration, economy with notes, revision, and PYQs.',
  },
  'vijayanagara-bahmani': {
    concept: vijayanagaraBahmaniConcept,
    revision: vijayanagaraBahmaniRevision,
    problems: vijayanagaraBahmaniProblems,
    label: 'Vijayanagara & Bahmani Kingdoms',
    description: 'Vijayanagara and Bahmani for government exams. Krishnadevaraya, Hampi, Deccan sultanates with notes, revision, and PYQs.',
  },
  'bhakti-sufi': {
    concept: bhaktiSufiConcept,
    revision: bhaktiSufiRevision,
    problems: bhaktiSufiProblems,
    label: 'Bhakti & Sufi Movements',
    description: 'Bhakti and Sufi Movements for UPSC & SSC. Saints, Sufi orders, philosophy, social impact with notes, revision, and PYQs.',
  },
  'mughal-empire': {
    concept: mughalEmpireConcept,
    revision: mughalEmpireRevision,
    problems: mughalEmpireProblems,
    label: 'Mughal Empire',
    description: 'Mughal Empire for government exams. Babur to Aurangzeb, Mansabdari, revenue, culture with notes, revision, and PYQs.',
  },
  'maratha-empire': {
    concept: marathaEmpireConcept,
    revision: marathaEmpireRevision,
    problems: marathaEmpireProblems,
    label: 'Maratha Empire',
    description: 'Maratha Empire for UPSC & SSC. Shivaji, Peshwas, Ashtapradhan, Panipat III with notes, revision, and PYQs.',
  },
  'medieval-kingdoms': {
    concept: medievalKingdomsConcept,
    revision: medievalKingdomsRevision,
    problems: medievalKingdomsProblems,
    label: 'Other Medieval Kingdoms',
    description: 'Medieval Kingdoms for government exams. Rajputs, Sikhs, Ahom kingdom with notes, revision, and PYQs.',
  },
  'rajput-kingdoms': {
    concept: rajputKingdomsConcept,
    revision: rajputKingdomsRevision,
    problems: rajputKingdomsProblems,
    label: 'Rajput Kingdoms',
    description: 'Rajput Kingdoms for UPSC & SSC. Pratiharas, Chahamanas, Rajput polity, resistance to invasions with notes, revision, and PYQs.',
  },
  // Modern India
  'european-companies': {
    concept: europeanCompaniesConcept,
    revision: europeanCompaniesRevision,
    problems: europeanCompaniesProblems,
    label: 'European Trading Companies',
    description: 'European Trading Companies for UPSC & SSC. Portuguese, Dutch, French, EIC, Carnatic Wars with notes, revision, and PYQs.',
  },
  'british-expansion': {
    concept: britishExpansionConcept,
    revision: britishExpansionRevision,
    problems: britishExpansionProblems,
    label: 'British Conquest & Expansion',
    description: 'British Conquest for government exams. Plassey, Buxar, Subsidiary Alliance, Doctrine of Lapse with notes, revision, and PYQs.',
  },
  'governor-generals': {
    concept: governorGeneralsConcept,
    revision: governorGeneralsRevision,
    problems: governorGeneralsProblems,
    label: 'Governor-Generals & Viceroys',
    description: 'Governor-Generals & Viceroys for UPSC & SSC. Warren Hastings to Mountbatten with notes, revision, and PYQs.',
  },
  'british-economic-policies': {
    concept: britishEconomicPoliciesConcept,
    revision: britishEconomicPoliciesRevision,
    problems: britishEconomicPoliciesProblems,
    label: 'British Economic Policies',
    description: 'British Economic Policies for government exams. Drain of Wealth, land revenue systems with notes, revision, and PYQs.',
  },
  'revolt-1857': {
    concept: revolt1857Concept,
    revision: revolt1857Revision,
    problems: revolt1857Problems,
    label: 'Revolt of 1857',
    description: 'Revolt of 1857 for UPSC & SSC. Causes, centres, leaders, consequences with notes, revision, and PYQs.',
  },
  'reform-movements': {
    concept: reformMovementsConcept,
    revision: reformMovementsRevision,
    problems: reformMovementsProblems,
    label: 'Social & Religious Reform Movements',
    description: 'Reform Movements for government exams. Brahmo Samaj, Arya Samaj, widow remarriage with notes, revision, and PYQs.',
  },
  'congress-national-movement': {
    concept: congressNationalMovementConcept,
    revision: congressNationalMovementRevision,
    problems: congressNationalMovementProblems,
    label: 'INC & National Movement',
    description: 'Indian National Congress for UPSC & SSC. Moderates, Extremists, Swadeshi with notes, revision, and PYQs.',
  },
  'gandhian-movements': {
    concept: gandhianMovementsConcept,
    revision: gandhianMovementsRevision,
    problems: gandhianMovementsProblems,
    label: 'Gandhian Era & Mass Movements',
    description: 'Gandhian Movements for government exams. NCM, CDM, Quit India, Satyagraha with notes, revision, and PYQs.',
  },
  'revolutionary-movement': {
    concept: revolutionaryMovementConcept,
    revision: revolutionaryMovementRevision,
    problems: revolutionaryMovementProblems,
    label: 'Revolutionary Movement',
    description: 'Revolutionary Movement for UPSC & SSC. Ghadar, HSRA, INA, Subhas Chandra Bose with notes, revision, and PYQs.',
  },
  'constitutional-development': {
    concept: constitutionalDevelopmentConcept,
    revision: constitutionalDevelopmentRevision,
    problems: constitutionalDevelopmentProblems,
    label: 'Constitutional Development',
    description: 'Constitutional Development for government exams. Regulating Act to GoI Act 1935 with notes, revision, and PYQs.',
  },
  'tribal-peasant-movements': {
    concept: tribalPeasantMovementsConcept,
    revision: tribalPeasantMovementsRevision,
    problems: tribalPeasantMovementsProblems,
    label: 'Tribal & Peasant Movements',
    description: 'Tribal & Peasant Movements for UPSC & SSC. Santhal, Munda, Indigo, Moplah with notes, revision, and PYQs.',
  },
  'anglo-wars': {
    concept: angloWarsConcept,
    revision: angloWarsRevision,
    problems: angloWarsProblems,
    label: 'Anglo-Mysore, Anglo-Maratha & Anglo-Sikh Wars',
    description: 'Anglo Wars for UPSC & SSC. Anglo-Mysore, Anglo-Maratha, Anglo-Sikh wars with causes, treaties, and PYQs.',
  },
  'land-revenue-systems': {
    concept: landRevenueSystemsConcept,
    revision: landRevenueSystemsRevision,
    problems: landRevenueSystemsProblems,
    label: 'Land Revenue Systems',
    description: 'Land Revenue Systems for government exams. Permanent Settlement, Ryotwari, Mahalwari with notes, revision, and PYQs.',
  },
  'press-education-british': {
    concept: pressEducationBritishConcept,
    revision: pressEducationBritishRevision,
    problems: pressEducationBritishProblems,
    label: 'Press & Education Under British Rule',
    description: 'Press & Education under British for UPSC & SSC. Vernacular Press Act, Wood Despatch with notes, revision, and PYQs.',
  },
  'caste-reform-movements': {
    concept: casteReformMovementsConcept,
    revision: casteReformMovementsRevision,
    problems: casteReformMovementsProblems,
    label: 'Caste Reform & Anti-Caste Movements',
    description: 'Caste Reform Movements for government exams. Jyotirao Phule, Ambedkar, Periyar, SNDP with notes, revision, and PYQs.',
  },
  'womens-movements': {
    concept: womensMovementsConcept,
    revision: womensMovementsRevision,
    problems: womensMovementsProblems,
    label: "Women's Movements in Modern India",
    description: "Women's Movements for UPSC & SSC. Sati abolition, widow remarriage, women's organizations with notes, revision, and PYQs.",
  },
  // Post-Independence
  'independence-partition': {
    concept: independencePartitionConcept,
    revision: independencePartitionRevision,
    problems: independencePartitionProblems,
    label: 'Independence & Partition',
    description: 'Independence & Partition for government exams. Cabinet Mission, Mountbatten Plan with notes, revision, and PYQs.',
  },
  'princely-states': {
    concept: princelyStatesConcept,
    revision: princelyStatesRevision,
    problems: princelyStatesProblems,
    label: 'Integration of Princely States',
    description: 'Princely States integration for UPSC & SSC. Sardar Patel, Hyderabad, Kashmir with notes, revision, and PYQs.',
  },
  'nation-building': {
    concept: nationBuildingConcept,
    revision: nationBuildingRevision,
    problems: nationBuildingProblems,
    label: 'Nation Building & Economic Development',
    description: 'Nation Building for government exams. Five Year Plans, Green Revolution, LPG 1991 with notes, revision, and PYQs.',
  },
  'wars-foreign-policy': {
    concept: warsForeignPolicyConcept,
    revision: warsForeignPolicyRevision,
    problems: warsForeignPolicyProblems,
    label: 'Wars & Foreign Policy',
    description: 'Wars & Foreign Policy for UPSC & SSC. 1962, 1965, 1971, Non-Alignment with notes, revision, and PYQs.',
  },
  'post-independence-consolidation': {
    concept: postIndependenceConsolidationConcept,
    revision: postIndependenceConsolidationRevision,
    problems: postIndependenceConsolidationProblems,
    label: 'Post-Independence Consolidation',
    description: 'Post-Independence Consolidation for government exams. Constitution, FYPs, linguistic states, 1962 war with notes, revision, and PYQs.',
  },
  'non-aligned-movement': {
    concept: nonAlignedMovementConcept,
    revision: nonAlignedMovementRevision,
    problems: nonAlignedMovementProblems,
    label: 'Non-Aligned Movement & Foreign Policy',
    description: 'NAM & Foreign Policy for UPSC & SSC. Panchsheel, Belgrade, Bandung, Indo-Soviet Treaty with notes, revision, and PYQs.',
  },
  'green-white-revolution': {
    concept: greenWhiteRevolutionConcept,
    revision: greenWhiteRevolutionRevision,
    problems: greenWhiteRevolutionProblems,
    label: 'Green, White & Other Revolutions',
    description: 'Agricultural Revolutions for government exams. Green, White, Blue, Yellow revolutions with notes, revision, and PYQs.',
  },
  // Art & Culture
  'indian-architecture': {
    concept: indianArchitectureConcept,
    revision: indianArchitectureRevision,
    problems: indianArchitectureProblems,
    label: 'Indian Architecture',
    description: 'Indian Architecture for UPSC & SSC. Nagara, Dravida, Indo-Islamic, Colonial with notes, revision, and PYQs.',
  },
  'paintings-sculpture': {
    concept: paintingsSculptureConcept,
    revision: paintingsSculptureRevision,
    problems: paintingsSculptureProblems,
    label: 'Indian Paintings & Sculpture',
    description: 'Indian Paintings & Sculpture for government exams. Cave art, miniatures, Gandhara, Mathura with notes, revision, and PYQs.',
  },
  'music-dance': {
    concept: musicDanceConcept,
    revision: musicDanceRevision,
    problems: musicDanceProblems,
    label: 'Music, Dance & Theatre',
    description: 'Music, Dance & Theatre for UPSC & SSC. Classical forms, folk dances with notes, revision, and PYQs.',
  },
  'indian-literature': {
    concept: indianLiteratureConcept,
    revision: indianLiteratureRevision,
    problems: indianLiteratureProblems,
    label: 'Indian Literature & Philosophy',
    description: 'Indian Literature for government exams. Vedic, Sangam, six schools with notes, revision, and PYQs.',
  },
  'heritage-sites': {
    concept: heritageSitesConcept,
    revision: heritageSitesRevision,
    problems: heritageSitesProblems,
    label: 'UNESCO World Heritage Sites',
    description: 'UNESCO Heritage Sites in India for UPSC & SSC. Key sites, significance with notes, revision, and PYQs.',
  },
  'indian-cinema-theatre': {
    concept: indianCinemaTheatreConcept,
    revision: indianCinemaTheatreRevision,
    problems: indianCinemaTheatreProblems,
    label: 'Indian Cinema & Theatre',
    description: 'Indian Cinema & Theatre for government exams. Phalke, Satyajit Ray, Natyashastra, folk theatre with notes, revision, and PYQs.',
  },
  'fairs-festivals': {
    concept: fairsFestivalsConcept,
    revision: fairsFestivalsRevision,
    problems: fairsFestivalsProblems,
    label: 'Indian Fairs & Festivals',
    description: 'Indian Fairs & Festivals for UPSC & SSC. Kumbh Mela, harvest festivals, tribal festivals with notes, revision, and PYQs.',
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
    keywords: [`${data.label}`, `${data.label} UPSC`, `${data.label} notes`, 'Indian History', 'history for UPSC', 'SSC CGL history', `${data.label} PYQ`],
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
      <HistoryTopicTabs concept={data.concept} revision={data.revision} problems={data.problems} />
    </div>
  )
}
