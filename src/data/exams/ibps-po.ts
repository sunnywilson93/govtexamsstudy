import type { ExamInfo } from '@/types/exam'

export const ibpsPo: ExamInfo = {
  id: 'ibps-po',
  name: 'IBPS PO',
  fullName: 'Institute of Banking Personnel Selection — Probationary Officer / Management Trainee',
  conductingBody: 'Institute of Banking Personnel Selection (IBPS)',
  category: 'banking',
  frequency: 'Annual',
  description:
    'IBPS PO is the common recruitment exam for Probationary Officer (PO) and Management Trainee (MT) posts across 11 public-sector banks including Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank of India, and others. It is one of the most competitive banking exams with lakhs of applicants each year.',
  officialWebsite: 'https://ibps.in',
  notificationUrl: 'https://ibps.in/common-recruitment-process-for-pos-mts',
  stages: [
    {
      name: 'Preliminary Examination',
      mode: 'Computer Based Test (CBT)',
      duration: '60 minutes (20 min per section)',
      totalMarks: 100,
      sections: [
        { name: 'English Language', questions: 30, marks: 30 },
        { name: 'Quantitative Aptitude', questions: 35, marks: 35 },
        { name: 'Reasoning Ability', questions: 35, marks: 35 },
      ],
      negativeMarking: '0.25 marks per wrong answer',
    },
    {
      name: 'Main Examination',
      mode: 'Computer Based Test (CBT)',
      duration: '3 hours (+ 30 min for descriptive)',
      totalMarks: 200,
      sections: [
        { name: 'Reasoning & Computer Aptitude', questions: 45, marks: 60 },
        { name: 'English Language', questions: 35, marks: 40 },
        { name: 'Data Analysis & Interpretation', questions: 35, marks: 60 },
        { name: 'General Economy & Banking Awareness', questions: 40, marks: 40 },
      ],
      negativeMarking: '0.25 marks per wrong answer',
    },
    {
      name: 'Interview',
      mode: 'In-person interview by bank panel',
      duration: '~20–30 minutes',
      totalMarks: 100,
      sections: [
        { name: 'Interview (banking knowledge, GD, personality)', questions: 0, marks: 100 },
      ],
    },
  ],
  syllabus: [
    'Quantitative Aptitude & Data Interpretation',
    'Reasoning Ability (Verbal & Non-verbal)',
    'English Language & Comprehension',
    'General Awareness & Banking Knowledge',
    'Computer Aptitude',
    'Current Affairs (last 6 months)',
  ],
  eligibility: {
    education: "Bachelor's degree in any discipline from a recognised university",
    ageMin: 20,
    ageMax: 30,
    ageRelaxation: '5 years for SC/ST; 3 years for OBC; 10 years for PwD; 5 years for ex-servicemen',
    attempts: 'No official cap; must be within age limit',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 62.5, stage: 'Prelims' },
    { year: 2024, category: 'OBC', score: 58.0, stage: 'Prelims' },
    { year: 2024, category: 'SC', score: 52.5, stage: 'Prelims' },
    { year: 2024, category: 'ST', score: 48.0, stage: 'Prelims' },
    { year: 2023, category: 'General', score: 60.75, stage: 'Prelims' },
    { year: 2023, category: 'OBC', score: 57.5, stage: 'Prelims' },
    { year: 2023, category: 'SC', score: 51.0, stage: 'Prelims' },
    { year: 2022, category: 'General', score: 63.0, stage: 'Prelims' },
    { year: 2022, category: 'OBC', score: 59.25, stage: 'Prelims' },
  ],
  importantNotes: [
    'Sectional cutoffs apply at Prelims — you must clear each section independently, not just the overall score.',
    'Final merit is calculated as 80% weightage to Mains + 20% to Interview scores.',
    'Mains also includes a descriptive paper (Letter + Essay, 25 marks, 30 min) that is evaluated only for candidates who clear the objective cutoff.',
  ],
}
