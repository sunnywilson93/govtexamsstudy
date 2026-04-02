export type ExamCategory = 'upsc' | 'ssc' | 'banking' | 'railway' | 'defence' | 'teaching'

export interface ExamSection {
  name: string
  questions: number
  marks: number
}

export interface ExamStage {
  name: string
  mode: string
  duration: string
  totalMarks: number
  sections: ExamSection[]
  negativeMarking?: string
}

export interface EligibilityCriteria {
  education: string
  ageMin: number
  ageMax: number
  ageRelaxation?: string
  attempts?: string
  nationality: string
}

export interface CutoffEntry {
  year: number
  category: string
  score: number
  stage?: string
}

export interface ExamInfo {
  id: string
  name: string
  fullName: string
  conductingBody: string
  category: ExamCategory
  frequency: string
  description: string
  officialWebsite: string
  notificationUrl?: string
  stages: ExamStage[]
  syllabus: string[]
  eligibility: EligibilityCriteria
  cutoffs: CutoffEntry[]
  importantNotes?: string[]
}
