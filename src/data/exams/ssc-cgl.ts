import type { ExamInfo } from '@/types/exam'

export const sscCgl: ExamInfo = {
  id: 'ssc-cgl',
  name: 'SSC CGL',
  fullName: 'Staff Selection Commission — Combined Graduate Level Examination',
  conductingBody: 'Staff Selection Commission (SSC)',
  category: 'ssc',
  frequency: 'Annual',
  description:
    'One of India\'s most popular graduate-level competitive exams, SSC CGL recruits for Group B and Group C posts across central government ministries and departments — including Tax Assistant, Auditor, Inspector of Income Tax, Inspector (Central Excise), and Statistical Investigator.',
  officialWebsite: 'https://ssc.gov.in',
  notificationUrl: 'https://ssc.gov.in/noticeboards',
  stages: [
    {
      name: 'Tier I',
      mode: 'Computer Based Test (CBT)',
      duration: '60 minutes',
      totalMarks: 200,
      sections: [
        { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
        { name: 'General Awareness', questions: 25, marks: 50 },
        { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
        { name: 'English Comprehension', questions: 25, marks: 50 },
      ],
      negativeMarking: '0.50 marks per wrong answer',
    },
    {
      name: 'Tier II',
      mode: 'Computer Based Test (CBT)',
      duration: '2 hours 15 minutes',
      totalMarks: 390,
      sections: [
        { name: 'Mathematical Abilities', questions: 30, marks: 90 },
        { name: 'Reasoning & General Intelligence', questions: 30, marks: 90 },
        { name: 'English Language & Comprehension', questions: 45, marks: 135 },
        { name: 'General & Financial Awareness', questions: 25, marks: 75 },
      ],
      negativeMarking: '1 mark per wrong answer (Sections I–III); no negative marking for Section IV',
    },
    {
      name: 'Tier III',
      mode: 'Pen & Paper (Descriptive)',
      duration: '60 minutes',
      totalMarks: 100,
      sections: [
        { name: 'Essay / Letter / Precis / Application Writing', questions: 1, marks: 100 },
      ],
    },
  ],
  syllabus: [
    'Quantitative Aptitude',
    'General Intelligence & Reasoning',
    'English Language & Comprehension',
    'General Knowledge & Current Affairs',
    'Statistics (for Statistical Investigator posts)',
    'Finance & Economics (for AAO posts)',
  ],
  eligibility: {
    education: "Bachelor's degree from a recognised university",
    ageMin: 18,
    ageMax: 32,
    ageRelaxation: '5 years for SC/ST; 3 years for OBC; 10 years for PwD (General); 13 years for PwD (OBC); 15 years for PwD (SC/ST)',
    attempts: 'No restriction on number of attempts (within age limit)',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 160.5, stage: 'Tier I' },
    { year: 2024, category: 'OBC', score: 155.0, stage: 'Tier I' },
    { year: 2024, category: 'SC', score: 143.0, stage: 'Tier I' },
    { year: 2024, category: 'ST', score: 135.5, stage: 'Tier I' },
    { year: 2023, category: 'General', score: 158.0, stage: 'Tier I' },
    { year: 2023, category: 'OBC', score: 152.5, stage: 'Tier I' },
    { year: 2023, category: 'SC', score: 140.5, stage: 'Tier I' },
    { year: 2023, category: 'ST', score: 133.0, stage: 'Tier I' },
    { year: 2022, category: 'General', score: 162.0, stage: 'Tier I' },
    { year: 2022, category: 'OBC', score: 156.5, stage: 'Tier I' },
  ],
  importantNotes: [
    'Tier II pattern was revised in 2024 — the earlier four-paper format has been replaced with a single session covering all subjects.',
    'Document Verification (DV) and Computer Proficiency Test (CPT) / Skill Test follow Tier III for shortlisted candidates.',
    'Final-year undergraduate students are eligible to apply; proof of degree required at the time of document verification.',
  ],
}
