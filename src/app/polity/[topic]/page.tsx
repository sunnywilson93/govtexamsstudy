import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { SubjectConcept, SubjectRevision, SubjectProblem } from '@/types/subject-notes'
import { SubjectTopicTabs } from '@/components/visualizers/shared/SubjectTopicTabs'

// Constitutional Foundations
import { historicalBackgroundConcept } from '@/data/polity/concepts/historical-background'
import { constituentAssemblyConcept } from '@/data/polity/concepts/constituent-assembly'
import { preambleConcept } from '@/data/polity/concepts/preamble'
import { unionTerritoryConcept } from '@/data/polity/concepts/union-territory'
import { citizenshipConcept } from '@/data/polity/concepts/citizenship'

import { historicalBackgroundRevision } from '@/data/polity/revision/historical-background'
import { constituentAssemblyRevision } from '@/data/polity/revision/constituent-assembly'
import { preambleRevision } from '@/data/polity/revision/preamble'
import { unionTerritoryRevision } from '@/data/polity/revision/union-territory'
import { citizenshipRevision } from '@/data/polity/revision/citizenship'

import { historicalBackgroundProblems } from '@/data/polity/problems/historical-background-problems'
import { constituentAssemblyProblems } from '@/data/polity/problems/constituent-assembly-problems'
import { preambleProblems } from '@/data/polity/problems/preamble-problems'
import { unionTerritoryProblems } from '@/data/polity/problems/union-territory-problems'
import { citizenshipProblems } from '@/data/polity/problems/citizenship-problems'

// Rights & Duties
import { fundamentalRightsConcept } from '@/data/polity/concepts/fundamental-rights'
import { dpspConcept } from '@/data/polity/concepts/dpsp'
import { fundamentalDutiesConcept } from '@/data/polity/concepts/fundamental-duties'

import { fundamentalRightsRevision } from '@/data/polity/revision/fundamental-rights'
import { dpspRevision } from '@/data/polity/revision/dpsp'
import { fundamentalDutiesRevision } from '@/data/polity/revision/fundamental-duties'

import { fundamentalRightsProblems } from '@/data/polity/problems/fundamental-rights-problems'
import { dpspProblems } from '@/data/polity/problems/dpsp-problems'
import { fundamentalDutiesProblems } from '@/data/polity/problems/fundamental-duties-problems'

// Union Executive
import { presidentVpConcept } from '@/data/polity/concepts/president-vp'
import { primeMinisterConcept } from '@/data/polity/concepts/prime-minister'
import { parliamentConcept } from '@/data/polity/concepts/parliament'

import { presidentVpRevision } from '@/data/polity/revision/president-vp'
import { primeMinisterRevision } from '@/data/polity/revision/prime-minister'
import { parliamentRevision } from '@/data/polity/revision/parliament'

import { presidentVpProblems } from '@/data/polity/problems/president-vp-problems'
import { primeMinisterProblems } from '@/data/polity/problems/prime-minister-problems'
import { parliamentProblems } from '@/data/polity/problems/parliament-problems'

// State Government
import { governorConcept } from '@/data/polity/concepts/governor'
import { chiefMinisterConcept } from '@/data/polity/concepts/chief-minister'
import { stateLegislatureConcept } from '@/data/polity/concepts/state-legislature'

import { governorRevision } from '@/data/polity/revision/governor'
import { chiefMinisterRevision } from '@/data/polity/revision/chief-minister'
import { stateLegislatureRevision } from '@/data/polity/revision/state-legislature'

import { governorProblems } from '@/data/polity/problems/governor-problems'
import { chiefMinisterProblems } from '@/data/polity/problems/chief-minister-problems'
import { stateLegislatureProblems } from '@/data/polity/problems/state-legislature-problems'

// Judiciary
import { supremeCourtConcept } from '@/data/polity/concepts/supreme-court'
import { highCourtsConcept } from '@/data/polity/concepts/high-courts'
import { tribunalsConcept } from '@/data/polity/concepts/tribunals'

import { supremeCourtRevision } from '@/data/polity/revision/supreme-court'
import { highCourtsRevision } from '@/data/polity/revision/high-courts'
import { tribunalsRevision } from '@/data/polity/revision/tribunals'

import { supremeCourtProblems } from '@/data/polity/problems/supreme-court-problems'
import { highCourtsProblems } from '@/data/polity/problems/high-courts-problems'
import { tribunalsProblems } from '@/data/polity/problems/tribunals-problems'

// Federal Structure
import { centreStateRelationsConcept } from '@/data/polity/concepts/centre-state-relations'
import { interStateRelationsConcept } from '@/data/polity/concepts/inter-state-relations'
import { emergencyProvisionsConcept } from '@/data/polity/concepts/emergency-provisions'
import { amendmentProcedureConcept } from '@/data/polity/concepts/amendment-procedure'

import { centreStateRelationsRevision } from '@/data/polity/revision/centre-state-relations'
import { interStateRelationsRevision } from '@/data/polity/revision/inter-state-relations'
import { emergencyProvisionsRevision } from '@/data/polity/revision/emergency-provisions'
import { amendmentProcedureRevision } from '@/data/polity/revision/amendment-procedure'

import { centreStateRelationsProblems } from '@/data/polity/problems/centre-state-relations-problems'
import { interStateRelationsProblems } from '@/data/polity/problems/inter-state-relations-problems'
import { emergencyProvisionsProblems } from '@/data/polity/problems/emergency-provisions-problems'
import { amendmentProcedureProblems } from '@/data/polity/problems/amendment-procedure-problems'

// Local Government
import { panchayatiRajConcept } from '@/data/polity/concepts/panchayati-raj'
import { municipalitiesConcept } from '@/data/polity/concepts/municipalities'

import { panchayatiRajRevision } from '@/data/polity/revision/panchayati-raj'
import { municipalitiesRevision } from '@/data/polity/revision/municipalities'

import { panchayatiRajProblems } from '@/data/polity/problems/panchayati-raj-problems'
import { municipalitiesProblems } from '@/data/polity/problems/municipalities-problems'

// Bodies & Special
import { electionCommissionConcept } from '@/data/polity/concepts/election-commission'
import { cagConcept } from '@/data/polity/concepts/cag'
import { upscSpscConcept } from '@/data/polity/concepts/upsc-spsc'
import { financeCommissionConcept } from '@/data/polity/concepts/finance-commission'
import { statutoryBodiesConcept } from '@/data/polity/concepts/statutory-bodies'
import { antiDefectionConcept } from '@/data/polity/concepts/anti-defection'
import { scheduledTribalAreasConcept } from '@/data/polity/concepts/scheduled-tribal-areas'

import { electionCommissionRevision } from '@/data/polity/revision/election-commission'
import { cagRevision } from '@/data/polity/revision/cag'
import { upscSpscRevision } from '@/data/polity/revision/upsc-spsc'
import { financeCommissionRevision } from '@/data/polity/revision/finance-commission'
import { statutoryBodiesRevision } from '@/data/polity/revision/statutory-bodies'
import { antiDefectionRevision } from '@/data/polity/revision/anti-defection'
import { scheduledTribalAreasRevision } from '@/data/polity/revision/scheduled-tribal-areas'

import { electionCommissionProblems } from '@/data/polity/problems/election-commission-problems'
import { cagProblems } from '@/data/polity/problems/cag-problems'
import { upscSpscProblems } from '@/data/polity/problems/upsc-spsc-problems'
import { financeCommissionProblems } from '@/data/polity/problems/finance-commission-problems'
import { statutoryBodiesProblems } from '@/data/polity/problems/statutory-bodies-problems'
import { antiDefectionProblems } from '@/data/polity/problems/anti-defection-problems'
import { scheduledTribalAreasProblems } from '@/data/polity/problems/scheduled-tribal-areas-problems'

interface TopicData {
  concept: SubjectConcept
  revision: SubjectRevision
  problems: SubjectProblem[]
  label: string
  description: string
}

const TOPIC_DATA: Record<string, TopicData> = {
  'historical-background': {
    concept: historicalBackgroundConcept,
    revision: historicalBackgroundRevision,
    problems: historicalBackgroundProblems,
    label: 'Historical Background of the Constitution',
    description:
      'Historical background of the Indian Constitution for UPSC, SSC & banking exams. British Acts, constitutional evolution with notes, revision, and PYQs.',
  },
  'constituent-assembly': {
    concept: constituentAssemblyConcept,
    revision: constituentAssemblyRevision,
    problems: constituentAssemblyProblems,
    label: 'Constituent Assembly',
    description:
      'Constituent Assembly for UPSC, SSC & banking exams. Formation, key committees, Drafting Committee with notes, revision, and PYQs.',
  },
  preamble: {
    concept: preambleConcept,
    revision: preambleRevision,
    problems: preambleProblems,
    label: 'Preamble to the Constitution',
    description:
      'Preamble for UPSC, SSC & banking exams. Key terms, amendments, landmark cases with notes, revision, and PYQs.',
  },
  'union-territory': {
    concept: unionTerritoryConcept,
    revision: unionTerritoryRevision,
    problems: unionTerritoryProblems,
    label: 'Union & Its Territory',
    description:
      'Union and its territory for UPSC, SSC & banking exams. States, UTs, reorganisation with notes, revision, and PYQs.',
  },
  citizenship: {
    concept: citizenshipConcept,
    revision: citizenshipRevision,
    problems: citizenshipProblems,
    label: 'Citizenship',
    description:
      'Citizenship for UPSC, SSC & banking exams. Acquisition, termination, CAA with notes, revision, and PYQs.',
  },
  'fundamental-rights': {
    concept: fundamentalRightsConcept,
    revision: fundamentalRightsRevision,
    problems: fundamentalRightsProblems,
    label: 'Fundamental Rights',
    description:
      'Fundamental Rights (Art 12-35) for UPSC, SSC & banking exams. Six categories, key articles, landmark cases with notes, revision, and PYQs.',
  },
  dpsp: {
    concept: dpspConcept,
    revision: dpspRevision,
    problems: dpspProblems,
    label: 'Directive Principles of State Policy',
    description:
      'DPSPs (Art 36-51) for UPSC, SSC & banking exams. Classification, implementation, DPSP vs FR with notes, revision, and PYQs.',
  },
  'fundamental-duties': {
    concept: fundamentalDutiesConcept,
    revision: fundamentalDutiesRevision,
    problems: fundamentalDutiesProblems,
    label: 'Fundamental Duties',
    description:
      'Fundamental Duties (Art 51A) for UPSC, SSC & banking exams. All 11 duties, Swaran Singh Committee with notes, revision, and PYQs.',
  },
  'president-vp': {
    concept: presidentVpConcept,
    revision: presidentVpRevision,
    problems: presidentVpProblems,
    label: 'President & Vice-President',
    description:
      'President and Vice-President for UPSC, SSC & banking exams. Election, powers, impeachment with notes, revision, and PYQs.',
  },
  'prime-minister': {
    concept: primeMinisterConcept,
    revision: primeMinisterRevision,
    problems: primeMinisterProblems,
    label: 'Prime Minister & Council of Ministers',
    description:
      'PM and CoM for UPSC, SSC & banking exams. Appointment, powers, collective responsibility with notes, revision, and PYQs.',
  },
  parliament: {
    concept: parliamentConcept,
    revision: parliamentRevision,
    problems: parliamentProblems,
    label: 'Parliament of India',
    description:
      'Parliament for UPSC, SSC & banking exams. Lok Sabha, Rajya Sabha, sessions, legislation with notes, revision, and PYQs.',
  },
  governor: {
    concept: governorConcept,
    revision: governorRevision,
    problems: governorProblems,
    label: 'Governor',
    description:
      'Governor for UPSC, SSC & banking exams. Appointment, powers, discretionary role with notes, revision, and PYQs.',
  },
  'chief-minister': {
    concept: chiefMinisterConcept,
    revision: chiefMinisterRevision,
    problems: chiefMinisterProblems,
    label: 'Chief Minister & State Council of Ministers',
    description:
      'CM and state CoM for UPSC, SSC & banking exams. Appointment, powers, CM vs PM with notes, revision, and PYQs.',
  },
  'state-legislature': {
    concept: stateLegislatureConcept,
    revision: stateLegislatureRevision,
    problems: stateLegislatureProblems,
    label: 'State Legislature',
    description:
      'State Legislature for UPSC, SSC & banking exams. Vidhan Sabha, Vidhan Parishad, legislation with notes, revision, and PYQs.',
  },
  'supreme-court': {
    concept: supremeCourtConcept,
    revision: supremeCourtRevision,
    problems: supremeCourtProblems,
    label: 'Supreme Court of India',
    description:
      'Supreme Court for UPSC, SSC & banking exams. Jurisdiction, composition, judicial review with notes, revision, and PYQs.',
  },
  'high-courts': {
    concept: highCourtsConcept,
    revision: highCourtsRevision,
    problems: highCourtsProblems,
    label: 'High Courts',
    description:
      'High Courts for UPSC, SSC & banking exams. Jurisdiction, writ powers, SC vs HC with notes, revision, and PYQs.',
  },
  tribunals: {
    concept: tribunalsConcept,
    revision: tribunalsRevision,
    problems: tribunalsProblems,
    label: 'Tribunals',
    description:
      'Tribunals for UPSC, SSC & banking exams. CAT, SAT, NCLT, Art 323A & 323B with notes, revision, and PYQs.',
  },
  'centre-state-relations': {
    concept: centreStateRelationsConcept,
    revision: centreStateRelationsRevision,
    problems: centreStateRelationsProblems,
    label: 'Centre-State Relations',
    description:
      'Centre-State relations for UPSC, SSC & banking exams. Three lists, legislative, administrative, financial relations with notes, revision, and PYQs.',
  },
  'inter-state-relations': {
    concept: interStateRelationsConcept,
    revision: interStateRelationsRevision,
    problems: interStateRelationsProblems,
    label: 'Inter-State Relations',
    description:
      'Inter-State relations for UPSC, SSC & banking exams. ISC, water disputes, zonal councils with notes, revision, and PYQs.',
  },
  'emergency-provisions': {
    concept: emergencyProvisionsConcept,
    revision: emergencyProvisionsRevision,
    problems: emergencyProvisionsProblems,
    label: 'Emergency Provisions',
    description:
      'Emergency provisions for UPSC, SSC & banking exams. Art 352, 356, 360, three types with notes, revision, and PYQs.',
  },
  'amendment-procedure': {
    concept: amendmentProcedureConcept,
    revision: amendmentProcedureRevision,
    problems: amendmentProcedureProblems,
    label: 'Amendment Procedure',
    description:
      'Amendment procedure (Art 368) for UPSC, SSC & banking exams. Three types, key amendments, basic structure with notes, revision, and PYQs.',
  },
  'panchayati-raj': {
    concept: panchayatiRajConcept,
    revision: panchayatiRajRevision,
    problems: panchayatiRajProblems,
    label: 'Panchayati Raj',
    description:
      'Panchayati Raj (73rd Amendment) for UPSC, SSC & banking exams. Three-tier system, Gram Sabha, PESA with notes, revision, and PYQs.',
  },
  municipalities: {
    concept: municipalitiesConcept,
    revision: municipalitiesRevision,
    problems: municipalitiesProblems,
    label: 'Municipalities',
    description:
      'Municipalities (74th Amendment) for UPSC, SSC & banking exams. Types, 12th Schedule, ward committees with notes, revision, and PYQs.',
  },
  'election-commission': {
    concept: electionCommissionConcept,
    revision: electionCommissionRevision,
    problems: electionCommissionProblems,
    label: 'Election Commission of India',
    description:
      'Election Commission for UPSC, SSC & banking exams. Art 324, composition, powers, EVM with notes, revision, and PYQs.',
  },
  cag: {
    concept: cagConcept,
    revision: cagRevision,
    problems: cagProblems,
    label: 'Comptroller & Auditor General',
    description:
      'CAG (Art 148-151) for UPSC, SSC & banking exams. Appointment, duties, audit reports with notes, revision, and PYQs.',
  },
  'upsc-spsc': {
    concept: upscSpscConcept,
    revision: upscSpscRevision,
    problems: upscSpscProblems,
    label: 'UPSC & State PSCs',
    description:
      'UPSC and State PSCs (Art 315-323) for UPSC, SSC & banking exams. Composition, functions, role with notes, revision, and PYQs.',
  },
  'finance-commission': {
    concept: financeCommissionConcept,
    revision: financeCommissionRevision,
    problems: financeCommissionProblems,
    label: 'Finance Commission',
    description:
      'Finance Commission (Art 280) for UPSC, SSC & banking exams. Composition, recommendations, devolution with notes, revision, and PYQs.',
  },
  'statutory-bodies': {
    concept: statutoryBodiesConcept,
    revision: statutoryBodiesRevision,
    problems: statutoryBodiesProblems,
    label: 'Statutory & Quasi-Judicial Bodies',
    description:
      'Statutory bodies for UPSC, SSC & banking exams. NHRC, NCW, CIC, Lokpal with notes, revision, and PYQs.',
  },
  'anti-defection': {
    concept: antiDefectionConcept,
    revision: antiDefectionRevision,
    problems: antiDefectionProblems,
    label: 'Anti-Defection Law',
    description:
      'Anti-Defection Law (10th Schedule) for UPSC, SSC & banking exams. Provisions, exceptions, landmark cases with notes, revision, and PYQs.',
  },
  'scheduled-tribal-areas': {
    concept: scheduledTribalAreasConcept,
    revision: scheduledTribalAreasRevision,
    problems: scheduledTribalAreasProblems,
    label: 'Scheduled & Tribal Areas',
    description:
      'Fifth and Sixth Schedules for UPSC, SSC & banking exams. ADCs, PESA, Forest Rights Act with notes, revision, and PYQs.',
  },
}

interface Props {
  params: Promise<{ topic: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params
  const data = TOPIC_DATA[topic]
  if (!data) return {}
  return {
    title: `${data.label} — Notes, Revision & PYQs | GovtExams`,
    description: data.description,
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
        subject="polity"
      />
    </div>
  )
}
