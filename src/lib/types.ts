export enum Difficulty {
  HARD = 'Hard',
  MEDIUM = 'Medium',
  EASY = 'Easy'
}

export enum Mode {
  PRACTICE = 'practice',
  EXAM = 'exam'
}

export enum FrqDescTab {
  DESCRIPTION = 'Description',
  SOLUTIONS = 'Solution',
  EXPLANATION = 'Explanation',
  RESULT = 'Result'
}

export type TestResult = {
  passed: boolean
  error: string | null
  input: string
  output: string
  prerequisite: string
}

export type RunResult = {
  run_status: number
  compilation_error: string | null
  test_results: TestResult[]
}

export type Unit = {
  name: string
  topics: Topic[]
}

export type Topic = {
  id: string
  name: string
  essential_knowledges: EssentialKnowledgeSimple[]
}

export type EssentialKnowledgeSimple = {
  id: string
  name: string
}

export type EssentialKnowledge = {
  name: string
  unit_id: string
  unit_name: string
  topic_id: string
  topic_name: string
}

export type Mcq = {
  name: string
  description: string
  choices: Choice[]
}

export type McqWithStatus = {
  name: string
  description: string
  isFinished: boolean
  isStarred: boolean
  isMarked: boolean
  userAnswer: ChoiceLabel[]
  choices: Choice[]
}

export type Frq = {
  id: string
  description: string
  metadata: {
    year: number
    number: number
    name: string
    difficulty: Difficulty
  },
  solutions: {
    class_name: string
    content: string
  }[]
}

export type FrqItem = {
  id: string
  metadata: {
    year: number
    number: number
    name: string
    topic: string
    sub_topic: string
    difficulty: Difficulty
    language: string
    keynotes: string[]
  }
}

// --------------

export enum McqQuestionNumber {
  TEN = '10',
  TWENTY = '20',
  THIRTY = '30',
  FORTY = '40'
}

export enum FrqTab {
  DESCRIPTION = 'Description',
  SOLUTION = 'Solution',
  RESULT = 'Result'
}

export enum McqMode {
  DEFAULT = 'Default (Random questions according to syllabus units showed below)',
  CUSTOM = 'Custom (Select the units you want to practice)'
}

export enum ChoiceLabel {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
}

export enum TopbarType {
  FRQ = 'FRQ',
  MCQ = 'MCQ'
}

export enum QuestionTab {
  DESCRIPTION = 'Description',
  SOLUTIONS = 'Solution',
  RESULT = 'Result',
  EXPLANATION = 'Explanation'
}

export type Choice = {
  label: ChoiceLabel
  content: string
}

export type PracticeMcqQuestion = {
  name: string
  description: string
  isFinished: boolean
  isMarked: boolean
  isStared: boolean
  userAnswer: ChoiceLabel | null
  choices: Choice[]
}

// export type Knowledge = {
//   id: string
//   number: string
//   description: string
// }

// export type Topic = {
//   topicNumber: string
//   topicName: string
//   knowledges: Knowledge[]
// }

// export type Unit = {
//   unitNumber: string
//   unitName: string
//   topics: Topic[]
// }


// export type Frq = {
//   id: string
//   questionId: string
//   name: string
//   topicId: string
//   topicName: string
//   subTopic: string
//   difficulty: string
//   keynotes: string[]
// }