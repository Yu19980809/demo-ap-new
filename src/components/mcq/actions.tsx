import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { IoFlag, IoFlagOutline } from 'react-icons/io5'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { McqWithStatus } from '@/lib/types'
import ConfirmModal from '@/components/modals/confirm-modal'
import { Button } from '@/components/ui/button'
import { Hint } from '@/components/ui/hint'

type Props = {
  data: McqWithStatus[]
  activeQuestionIndex: number
  setActiveQuestionIndex: React.Dispatch<number>
  setQuestions: React.Dispatch<McqWithStatus[]>
  setIsMcqFinished: React.Dispatch<boolean>
}

const Actions = ({
  data,
  activeQuestionIndex,
  setActiveQuestionIndex,
  setQuestions,
  setIsMcqFinished
}: Props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const len = data.length
  
  const [currentQuestion, setCurrentQuestion] = useState<McqWithStatus>()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isCurrentMarked, setIsCurrentMarked] = useState<boolean>(false)
  const [isCurrentStared, setIsCurrentStared] = useState<boolean>(false)

  useEffect(() => {
    if (!data || data.length === 0) return
    setCurrentQuestion(data[activeQuestionIndex])
    setIsCurrentMarked(data[activeQuestionIndex].isMarked)
    setIsCurrentStared(data[activeQuestionIndex].isStarred)
  }, [data, activeQuestionIndex])

  const onPrev = () => {
    setActiveQuestionIndex(activeQuestionIndex - 1)
    if (!currentQuestion?.userAnswer || currentQuestion?.userAnswer.length === 0) return
    currentQuestion.isFinished = true
    data[activeQuestionIndex] = currentQuestion
    setQuestions(data)
  }

  const onNext = () => {
    setActiveQuestionIndex(activeQuestionIndex + 1)
    if (!currentQuestion?.userAnswer || currentQuestion?.userAnswer.length === 0) return
    currentQuestion.isFinished = true
    data[activeQuestionIndex] = currentQuestion
    setQuestions(data)
  }

  const onMark = () => {
    if (!currentQuestion) return

    if (!currentQuestion?.isMarked) {
      setIsCurrentMarked(true)
      currentQuestion.isMarked = true
      data[activeQuestionIndex] = currentQuestion
      toast.success('Mark success')
    } else {
      setIsCurrentMarked(false)
      currentQuestion.isMarked = false
      data[activeQuestionIndex] = currentQuestion
      toast.success('Cancel mark success')
    }

    setQuestions(data)
  }

  const onStar = () => {
    if (!currentQuestion) return

    if (!currentQuestion.isStarred) {
      setIsCurrentStared(true)
      currentQuestion.isStarred = true
      data[activeQuestionIndex] = currentQuestion
      toast.success('Star success')
    } else {
      setIsCurrentStared(false)
      currentQuestion.isStarred = false
      data[activeQuestionIndex] = currentQuestion
      toast.success('Cancel star success')
    }

    setQuestions(data)
  }

  const onSubmit = () => {
    setIsSubmitting(true)

    // TODO: submit all answers

    setIsMcqFinished(true)
    setIsSubmitting(false)
    navigate(`/exam/${id}/frq`)
  }

  return (
    <div className="flex items-center justify-between">
      <Button
        variant="outline"
        disabled={activeQuestionIndex === 0}
        onClick={onPrev}
      >
        <div className="flex items-center gap-x-1">
          <ChevronLeft className="w-4 h-4" />
          <span>Prev</span>
        </div>
      </Button>

      <div className="flex items-center gap-x-4">
        <Hint
          asChild
          label={currentQuestion?.isStarred ? 'Cancel star' : 'Star current question'}
          side="bottom"
        >
          <Button variant="outline" size="icon" onClick={onStar}>
            {!isCurrentStared && <FaRegStar className="w-5 h-5" />}
            {isCurrentStared && <FaStar className="w-5 h-5 text-yellow-500" />}
          </Button>
        </Hint>

        <Hint
          asChild
          side="top"
          label={isCurrentMarked ? 'Cancel mark' : "If you don't sure the answer, you can mark this question, and review it later."}
        >
          <Button variant="outline" size="icon" onClick={onMark}>
            {!isCurrentMarked && <IoFlagOutline className="w-5 h-5" />}
            {isCurrentMarked && <IoFlag className="w-5 h-5 text-rose-500" />}
          </Button>
        </Hint>

        {activeQuestionIndex === (len - 1) && (
          <ConfirmModal
            title="Are you absolutely sure?"
            description="This action cannot be undone. We suggest you review questions first, and then submit."
            open={modalOpen}
            isLoading={isSubmitting}
            setOpen={setModalOpen}
            onSubmit={onSubmit}
          >
            <Button variant="outline">Submit</Button>
          </ConfirmModal>
        )}

        <Button
          variant="outline"
          disabled={activeQuestionIndex === len -1}
          onClick={onNext}
        >
          <div className="flex items-center gap-x-1">
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Actions
