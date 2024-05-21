import { CircleCheckBig } from 'lucide-react'
import { IoFlag } from 'react-icons/io5'

import { McqWithStatus } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Hint } from '@/components/ui/hint'

type Props = {
  data: McqWithStatus[]
  setActiveQuestionIndex: React.Dispatch<number>
}

const StatusBar = ({ data, setActiveQuestionIndex }: Props) => {
  const len = data.length
  const formattedData = len > 20 ? data.slice(0, 20) : data

  return (
    <>
      <div className="flex justify-center items-center gap-x-2">
        {formattedData.map((item, index) => (
          <Hint
            key={index}
            asChild
            side="top"
            label={`Question ${index + 1} - ${item.name}`}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setActiveQuestionIndex(index)}
            >
              {item.isMarked && <IoFlag className="w-5 h-5 text-rose-500" />}
              {!item.isFinished && !item.isMarked && <span>Q{index + 1}</span>}
              {item.isFinished && !item.isMarked && (
                <CircleCheckBig className="w-5 h-5 text-emerald-500" />
              )}
            </Button>
          </Hint>
        ))}
      </div>

      {len > 20 && (
        <div className="flex justify-center items-center gap-x-2">
          {data.slice(20).map((item, index) => (
            <Hint
              key={index}
              asChild
              side="top"
              label={`Question ${index + 21} - ${item.name}`}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setActiveQuestionIndex(index + 20)}
              >
                {item.isMarked && <IoFlag className="w-5 h-5 text-rose-500" />}
                {!item.isFinished && !item.isMarked && <span>Q{index + 21}</span>}
                {item.isFinished && !item.isMarked && (
                  <CircleCheckBig className="w-5 h-5 text-emerald-500" />
                )}
              </Button>
            </Hint>
          ))}
        </div>
      )}
    </>
  )
}

export default StatusBar
