import type { SubjectProblem } from '@/types/subject-notes'
import type { MCQ, Subject } from '@/types/shared'

export function subjectProblemToMCQ(
  problem: SubjectProblem,
  subject: Subject
): MCQ {
  return {
    id: problem.id,
    question: problem.question,
    options: problem.options,
    correctIndex: problem.correctIndex,
    explanation: problem.explanation,
    topic: problem.topic,
    subject,
    examName: problem.examName,
    examYear: problem.examYear,
    difficulty: problem.difficulty,
  }
}

export function subjectProblemsToMCQs(
  problems: SubjectProblem[],
  subject: Subject
): MCQ[] {
  return problems.map((p) => subjectProblemToMCQ(p, subject))
}
