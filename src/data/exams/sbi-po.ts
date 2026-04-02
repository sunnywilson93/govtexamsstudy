import type { ExamInfo } from '@/types/exam'

export const sbiPo: ExamInfo = {
  id: 'sbi-po',
  name: 'SBI PO',
  fullName: 'State Bank of India — Probationary Officer Recruitment',
  conductingBody: 'State Bank of India (SBI)',
  category: 'banking',
  frequency: 'Annual',
  description:
    'SBI PO is one of the most coveted banking recruitment exams in India. Unlike IBPS PO, SBI conducts its own independent exam to recruit Probationary Officers directly into the State Bank of India — the country\'s largest public-sector bank. SBI PO includes a unique Group Exercise (GE) stage not found in IBPS.',
  officialWebsite: 'https://sbi.co.in/careers',
  notificationUrl: 'https://sbi.co.in/careers',
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
      mode: 'Computer Based Test (CBT) + Descriptive',
      duration: '3 hours objective + 30 min descriptive',
      totalMarks: 200,
      sections: [
        { name: 'Reasoning & Computer Aptitude', questions: 45, marks: 60 },
        { name: 'Data Analysis & Interpretation', questions: 35, marks: 60 },
        { name: 'General Economy & Banking Awareness', questions: 40, marks: 40 },
        { name: 'English Language', questions: 35, marks: 40 },
      ],
      negativeMarking: '0.25 marks per wrong answer',
    },
    {
      name: 'Group Exercise (GE) & Interview',
      mode: 'In-person: group discussion + individual interview',
      duration: 'GE ~20 min; Interview ~20–30 min',
      totalMarks: 50,
      sections: [
        { name: 'Group Exercise', questions: 0, marks: 20 },
        { name: 'Interview', questions: 0, marks: 30 },
      ],
    },
  ],
  syllabus: [
    'Quantitative Aptitude & Data Interpretation',
    'Reasoning Ability',
    'English Language & Comprehension',
    'General Awareness & Banking & Financial Awareness',
    'Computer Aptitude',
    'Current Affairs (last 6 months)',
  ],
  eligibility: {
    education: "Bachelor's degree in any discipline (minimum 60% for General/OBC; 55% for SC/ST/PwD) from a recognised university",
    ageMin: 21,
    ageMax: 30,
    ageRelaxation: '5 years for SC/ST; 3 years for OBC; 10 years for PwD; 5 years for ex-servicemen',
    attempts: 'No official cap; must be within age limit',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 65.25, stage: 'Prelims' },
    { year: 2024, category: 'OBC', score: 61.0, stage: 'Prelims' },
    { year: 2024, category: 'SC', score: 55.5, stage: 'Prelims' },
    { year: 2024, category: 'ST', score: 50.0, stage: 'Prelims' },
    { year: 2023, category: 'General', score: 63.0, stage: 'Prelims' },
    { year: 2023, category: 'OBC', score: 59.25, stage: 'Prelims' },
    { year: 2023, category: 'SC', score: 53.5, stage: 'Prelims' },
    { year: 2022, category: 'General', score: 66.5, stage: 'Prelims' },
    { year: 2022, category: 'OBC', score: 62.75, stage: 'Prelims' },
  ],
  importantNotes: [
    'Group Exercise (GE) is unique to SBI PO — IBPS PO does not have this stage; prepare for case-study-based discussions.',
    'Final merit is 75% weightage to Mains + 25% to GE & Interview scores combined.',
    'SBI PO requires a minimum percentage in graduation (60% General/OBC; 55% SC/ST/PwD) — this is stricter than IBPS PO.',
  ],
}
