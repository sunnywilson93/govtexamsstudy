import type { ExamInfo } from '@/types/exam'

export const rrbGroupD: ExamInfo = {
  id: 'rrb-group-d',
  name: 'RRB Group D',
  fullName: 'Railway Recruitment Board — Group D (Level 1) Posts',
  conductingBody: 'Railway Recruitment Boards (RRBs)',
  category: 'railway',
  frequency: 'Periodic (typically every 2–3 years)',
  description:
    'RRB Group D recruits for Level 1 posts in Indian Railways under the 7th CPC Pay Matrix — including Track Maintainer Grade IV, Helper/Assistant in Engineering/Signal & Telecom/Electrical/Mechanical departments, Porter, and Gateman. It is the largest single recruitment drive in Indian Railways by number of vacancies.',
  officialWebsite: 'https://indianrailways.gov.in',
  notificationUrl: 'https://rrbcdg.gov.in',
  stages: [
    {
      name: 'Computer Based Test (CBT)',
      mode: 'Computer Based Test',
      duration: '90 minutes',
      totalMarks: 100,
      sections: [
        { name: 'Mathematics', questions: 25, marks: 25 },
        { name: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
        { name: 'General Science', questions: 25, marks: 25 },
        { name: 'General Awareness & Current Affairs', questions: 20, marks: 20 },
      ],
      negativeMarking: '1/3rd mark per wrong answer',
    },
    {
      name: 'Physical Efficiency Test (PET)',
      mode: 'Physical fitness test on ground',
      duration: 'As specified',
      totalMarks: 0,
      sections: [
        { name: 'PET — qualifying (running, weight-lifting as per gender)', questions: 0, marks: 0 },
      ],
    },
  ],
  syllabus: [
    'Mathematics: Number system, BODMAS, Decimals, Fractions, LCM, HCF, Percentage, Ratio',
    'Reasoning: Analogies, Alphabetical Series, Mathematical Operations, Similarities & Differences',
    'General Science: Physics, Chemistry, Life Sciences (10th standard level)',
    'General Awareness: Current Affairs, Science & Technology, Sports, Culture, Persons in News',
  ],
  eligibility: {
    education: '10th pass (Class X) or ITI from a recognised institution',
    ageMin: 18,
    ageMax: 33,
    ageRelaxation: '5 years for SC/ST; 3 years for OBC; 10 years for PwD (General); 13 years for PwD (OBC); 15 years for PwD (SC/ST)',
    attempts: 'No official restriction',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2023, category: 'General', score: 67.0, stage: 'CBT' },
    { year: 2023, category: 'OBC', score: 62.5, stage: 'CBT' },
    { year: 2023, category: 'SC', score: 56.0, stage: 'CBT' },
    { year: 2023, category: 'ST', score: 51.5, stage: 'CBT' },
    { year: 2022, category: 'General', score: 69.5, stage: 'CBT' },
    { year: 2022, category: 'OBC', score: 64.0, stage: 'CBT' },
    { year: 2022, category: 'SC', score: 58.0, stage: 'CBT' },
    { year: 2019, category: 'General', score: 65.0, stage: 'CBT' },
    { year: 2019, category: 'OBC', score: 60.25, stage: 'CBT' },
  ],
  importantNotes: [
    'PET is purely qualifying — it does not carry marks; candidates who pass CBT but fail PET are not considered for final selection.',
    'Cutoffs vary significantly by RRB zone — the national cutoff is indicative; check your specific RRB zone cutoff.',
    'Medical fitness standards (colour vision, hearing, physical fitness) are mandatory and tested during Document Verification.',
  ],
}
