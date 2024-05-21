import { useEffect, useState } from 'react'

import { Mode, Mcq } from '@/lib/types'
import { mcqQuestions } from '@/lib/constants'
import McqTemplate from '@/components/mcq'

const McqQuestion = () => {
  const [questions, setQuestions] = useState<Mcq[]>([])

  useEffect(() => setQuestions(mcqQuestions), [])

  return (
    <McqTemplate mode={Mode.PRACTICE} data={questions} />
  )
}

export default McqQuestion
