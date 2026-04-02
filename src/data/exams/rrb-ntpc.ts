import type { ExamInfo } from '@/types/exam'

export const rrbNtpc: ExamInfo = {
  id: 'rrb-ntpc',
  name: 'RRB NTPC',
  fullName: 'Railway Recruitment Board — Non-Technical Popular Categories',
  conductingBody: 'Railway Recruitment Boards (RRBs)',
  category: 'railway',
  frequency: 'Periodic (typically every 2–3 years)',
  description:
    'RRB NTPC recruits for a wide range of non-technical posts in Indian Railways at Levels 2–6 of the 7th CPC Pay Matrix, including Station Master, Goods Guard, Commercial Apprentice, Traffic Apprentice, Accounts Clerk, and Senior Clerk. It is one of the largest government recruitment drives by volume of applicants.',
  officialWebsite: 'https://indianrailways.gov.in',
  notificationUrl: 'https://rrbcdg.gov.in',
  stages: [
    {
      name: 'CBT 1 (1st Stage)',
      mode: 'Computer Based Test (CBT)',
      duration: '90 minutes',
      totalMarks: 100,
      sections: [
        { name: 'Mathematics', questions: 30, marks: 30 },
        { name: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
        { name: 'General Awareness', questions: 40, marks: 40 },
      ],
      negativeMarking: '1/3rd mark per wrong answer',
    },
    {
      name: 'CBT 2 (2nd Stage)',
      mode: 'Computer Based Test (CBT)',
      duration: '90 minutes',
      totalMarks: 120,
      sections: [
        { name: 'Mathematics', questions: 35, marks: 35 },
        { name: 'General Intelligence & Reasoning', questions: 35, marks: 35 },
        { name: 'General Awareness', questions: 50, marks: 50 },
      ],
      negativeMarking: '1/3rd mark per wrong answer',
    },
    {
      name: 'Typing Test / CBAT (Skill Test)',
      mode: 'Computer-based skill assessment / typing',
      duration: 'As specified per post',
      totalMarks: 0,
      sections: [
        { name: 'Computer-Based Aptitude Test (CBAT) for SM/TA posts', questions: 0, marks: 0 },
        { name: 'Typing Skill Test for clerical posts (qualifying)', questions: 0, marks: 0 },
      ],
    },
  ],
  syllabus: [
    'Number System, HCF/LCM, Simplification',
    'Ratio & Proportion, Percentage, Profit & Loss',
    'Time & Work, Time Speed Distance',
    'Reasoning: Analogies, Coding-Decoding, Series, Puzzles',
    'General Awareness: Railways, Current Affairs, Science, History, Geography',
  ],
  eligibility: {
    education: "Bachelor's degree (for Level 6 posts) or 12th pass / ITI (for Level 2–5 posts) from a recognised Board/University",
    ageMin: 18,
    ageMax: 33,
    ageRelaxation: '5 years for SC/ST; 3 years for OBC; 10 years for PwD (General); 13 years for PwD (OBC); 15 years for PwD (SC/ST)',
    attempts: 'No official restriction',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 72.5, stage: 'CBT 1' },
    { year: 2024, category: 'OBC', score: 68.0, stage: 'CBT 1' },
    { year: 2024, category: 'SC', score: 61.5, stage: 'CBT 1' },
    { year: 2024, category: 'ST', score: 57.0, stage: 'CBT 1' },
    { year: 2022, category: 'General', score: 75.0, stage: 'CBT 1' },
    { year: 2022, category: 'OBC', score: 70.5, stage: 'CBT 1' },
    { year: 2022, category: 'SC', score: 63.0, stage: 'CBT 1' },
    { year: 2019, category: 'General', score: 70.25, stage: 'CBT 1' },
    { year: 2019, category: 'OBC', score: 65.75, stage: 'CBT 1' },
  ],
  importantNotes: [
    'RRB NTPC is not an annual exam — notifications typically appear every 2–3 years with a very large vacancy count (often 30,000+).',
    'Cutoffs vary significantly by zone (RRB region) and post category — always check zone-wise cutoffs, not just consolidated ones.',
    'CBAT (Computer-Based Aptitude Test) applies only to Station Master (SM) and Traffic Assistant (TA) posts; other posts require only a typing test or no skill test.',
  ],
}
