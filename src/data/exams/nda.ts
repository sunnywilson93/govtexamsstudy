import type { ExamInfo } from '@/types/exam'

export const nda: ExamInfo = {
  id: 'nda',
  name: 'NDA',
  fullName: 'National Defence Academy & Naval Academy Examination',
  conductingBody: 'Union Public Service Commission (UPSC)',
  category: 'defence',
  frequency: 'Twice a year (NDA I in April, NDA II in September)',
  description:
    'The NDA examination recruits class 12 pass candidates for entry into the National Defence Academy (Army, Navy, Air Force wings) and Indian Naval Academy (10+2 Cadet Entry Scheme). Successful candidates undergo 3-year joint service training at NDA, Khadakwasla, followed by service-specific academies. It is one of the youngest entry points into commissioned officer service.',
  officialWebsite: 'https://upsc.gov.in',
  notificationUrl: 'https://upsc.gov.in/examinations/active-examinations',
  stages: [
    {
      name: 'Written Examination',
      mode: 'OMR-based objective test',
      duration: '2.5 hours per paper',
      totalMarks: 900,
      sections: [
        { name: 'Mathematics', questions: 120, marks: 300 },
        { name: 'General Ability Test (GAT) — Part A: English', questions: 50, marks: 200 },
        { name: 'General Ability Test (GAT) — Part B: General Knowledge', questions: 100, marks: 400 },
      ],
      negativeMarking: '1/3rd mark per wrong answer',
    },
    {
      name: 'SSB Interview',
      mode: '5-day in-person assessment at SSB Centre',
      duration: '5 days',
      totalMarks: 900,
      sections: [
        { name: 'Psychological Tests + Intelligence + Personality (Stage I)', questions: 0, marks: 450 },
        { name: 'Group Tasks (GTO) + Interview + Conference (Stage II)', questions: 0, marks: 450 },
      ],
    },
  ],
  syllabus: [
    'Mathematics: Algebra, Matrices, Trigonometry, Analytical Geometry, Differential Calculus, Integral Calculus, Differential Equations, Vector Algebra, Statistics, Probability',
    'English: Grammar, Vocabulary, Comprehension, Composition',
    'General Knowledge: Physics, Chemistry, General Science, History, Geography, Current Events',
  ],
  eligibility: {
    education: '10+2 (Class XII) pass or appearing; Physics and Mathematics mandatory for Navy/Air Force wings',
    ageMin: 16,
    ageMax: 19,
    ageRelaxation: 'No age relaxation for any category',
    attempts: 'No official restriction (within age limit)',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 360, stage: 'Written' },
    { year: 2024, category: 'General', score: 708, stage: 'Final (Written + SSB)' },
    { year: 2023, category: 'General', score: 355, stage: 'Written' },
    { year: 2023, category: 'General', score: 700, stage: 'Final (Written + SSB)' },
    { year: 2022, category: 'General', score: 342, stage: 'Written' },
    { year: 2022, category: 'General', score: 695, stage: 'Final (Written + SSB)' },
  ],
  importantNotes: [
    'Women have been eligible to appear for NDA since November 2022 following a Supreme Court order — a historic change in defence recruitment.',
    'Navy and Air Force wings require Physics and Mathematics in Class XII; Army wing accepts any stream.',
    'Mathematics paper is at 11th–12th standard level (NCERT) — solving previous year papers from the last 10 years is the most effective preparation strategy.',
  ],
}
