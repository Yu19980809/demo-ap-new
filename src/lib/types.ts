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

// {
//   "name": "System.out.print and System.out.println display information on the computer monitor.",
//   "unit_id": 1,
//   "unit_name": "Primitive Types",
//   "topic_id": "1.1",
//   "topic_name": "Why Programming? Why Java?"
// }


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


export type Frq = {
  id: string
  questionId: string
  name: string
  topicId: string
  topicName: string
  subTopic: string
  difficulty: string
  keynotes: string[]
}