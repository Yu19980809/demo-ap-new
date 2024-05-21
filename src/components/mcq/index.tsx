import { useEffect, useState } from 'react'

import { Mcq, McqWithStatus, Mode, TopbarType } from '@/lib/types'
import Topbar from '@/components/global/top-bar'
import Container from '@/components/global/container'
import StatusBar from '@/components/mcq/status-bar'
import Question from '@/components/mcq/question'
import Actions from '@/components/mcq/actions'

type Props = {
  mode: Mode
  data: Mcq[]
}

const McqTemplate = ({ mode, data }: Props) => {
  const [questions, setQuestions] = useState<McqWithStatus[]>([])
  const [isMcqFinished, setIsMcqFinished] = useState<boolean>(false)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0)

  useEffect(() => {
    const formattedData = data.map(item => {
      const newItem = {
        ...item,
        isFinished: false,
        isStarred: false,
        isMarked: false,
        userAnswer: []
      }

      return newItem
    })

    setQuestions(formattedData)
  }, [data])

  return (
    <div className="h-full">
      <Topbar
        type={TopbarType.MCQ}
        mode={mode}
        label={questions[activeQuestionIndex]?.name}
        isMcqFinished={isMcqFinished}
        setIsMcqFinished={setIsMcqFinished}
      />

      <Container>
        <div className="flex flex-col gap-y-10 h-full px-20 py-10">
          <StatusBar
            data={questions}
            setActiveQuestionIndex={setActiveQuestionIndex}
          />
          
          <div className="flex-1">
            <Question
              data={questions}
              activeQuestionIndex={activeQuestionIndex}
              setQuestions={setQuestions}
            />
          </div>

          <Actions
            data={questions}
            activeQuestionIndex={activeQuestionIndex}
            setActiveQuestionIndex={setActiveQuestionIndex}
            setQuestions={setQuestions}
            setIsMcqFinished={setIsMcqFinished}
          />
        </div>
      </Container>
    </div>
  )
}

export default McqTemplate
