import type { ExamInfo } from '@/types/exam'

export const sscChsl: ExamInfo = {
  id: 'ssc-chsl',
  name: 'SSC CHSL',
  fullName: 'Staff Selection Commission — Combined Higher Secondary Level Examination',
  conductingBody: 'Staff Selection Commission (SSC)',
  category: 'ssc',
  frequency: 'Annual',
  description:
    'SSC CHSL recruits candidates for posts that require only a 12th-pass qualification: Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Postal Assistant (PA), Sorting Assistant (SA), and Data Entry Operator (DEO) across central government ministries and departments.',
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
        { name: 'Quantitative Aptitude (Basic)', questions: 25, marks: 50 },
        { name: 'English Language (Basic)', questions: 25, marks: 50 },
      ],
      negativeMarking: '0.50 marks per wrong answer',
    },
    {
      name: 'Tier II',
      mode: 'Computer Based Test (CBT)',
      duration: '2 hours 15 minutes',
      totalMarks: 360,
      sections: [
        { name: 'Mathematical Abilities', questions: 30, marks: 90 },
        { name: 'Reasoning & General Intelligence', questions: 30, marks: 90 },
        { name: 'English Language & Comprehension', questions: 40, marks: 120 },
        { name: 'General & Financial Awareness', questions: 20, marks: 60 },
      ],
      negativeMarking: '1 mark per wrong answer (Sections I–III); no negative marking for Section IV',
    },
    {
      name: 'Tier III — Skill Test / Typing Test',
      mode: 'Practical / Typing test on computer',
      duration: '15 minutes (typing) / as specified',
      totalMarks: 0,
      sections: [
        { name: 'Typing Test / Data Entry Skill Test (qualifying)', questions: 0, marks: 0 },
      ],
    },
  ],
  syllabus: [
    'General Intelligence & Reasoning',
    'Quantitative Aptitude (10th-level arithmetic)',
    'English Language & Comprehension',
    'General Awareness & Current Affairs',
  ],
  eligibility: {
    education: "10+2 (Class XII) pass from a recognised Board or equivalent",
    ageMin: 18,
    ageMax: 27,
    ageRelaxation: '5 years for SC/ST; 3 years for OBC; 10 years for PwD (General); 13 years for PwD (OBC); 15 years for PwD (SC/ST)',
    attempts: 'No restriction on number of attempts (within age limit)',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 155.0, stage: 'Tier I' },
    { year: 2024, category: 'OBC', score: 148.5, stage: 'Tier I' },
    { year: 2024, category: 'SC', score: 135.0, stage: 'Tier I' },
    { year: 2024, category: 'ST', score: 127.5, stage: 'Tier I' },
    { year: 2023, category: 'General', score: 152.0, stage: 'Tier I' },
    { year: 2023, category: 'OBC', score: 145.5, stage: 'Tier I' },
    { year: 2023, category: 'SC', score: 132.0, stage: 'Tier I' },
    { year: 2022, category: 'General', score: 157.5, stage: 'Tier I' },
    { year: 2022, category: 'OBC', score: 151.0, stage: 'Tier I' },
  ],
  importantNotes: [
    'Tier III Typing/Skill Test is qualifying only — marks are not counted in the final merit list.',
    'The exam pattern was revised in 2024, aligning it with the SSC CGL Tier II format with a single combined session.',
    'DEO posts in the Comptroller and Auditor General\'s office carry an additional higher-speed typing requirement (15,000 key depressions per hour).',
  ],
}
