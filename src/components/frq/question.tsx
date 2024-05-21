import { ElementRef, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import Split from 'react-split'

import { Frq, FrqDescTab, Mode, TopbarType } from '@/lib/types'
import Code from '@/components/frq/playground/code'
import Topbar from '@/components/global/top-bar'
import Description from '@/components/frq/info/description/description'
import VerticalResizeBar from '@/components/global/vertical-resize-bar'
import { useFrq } from '@/store/use-frq'

type Props = {
  data?: Frq
}

const FrqTemplate = ({ data }: Props) => {
  const { id } = useParams()

  const [frq, setFrq] = useState<Frq>()
  const [isExplaining, setIsExplaining] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isDescCollapsed, setIsDescCollapsed] = useState<boolean>(false)
  const [activeDescTab, setActiveDescTab] = useState<FrqDescTab>(FrqDescTab.DESCRIPTION)
  const [explanation, setExplanation] = useState<any>()
  const [submitResult, setSubmitResult] = useState<any>()

  const minTextWidth = 80 + 50  // px-20: 80, min-w: 50

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      const res = await axios.get(`/api/frqs/${id}`)
      if (!res) return toast.error('Failed to fetch data')
      setFrq(res.data)
    }

    fetchData()
  }, [id])

  return (
    <div className="h-full bg-accent">
      <Topbar
        type={TopbarType.FRQ}
        mode={Mode.EXAM}
        label={frq?.metadata.name}
        setSubmitResult={setSubmitResult}
        setIsMcqFinished={() => {}}
        setIsSubmitting={setIsSubmitting}
        setActiveDescTab={setActiveDescTab}
      />

      <Split
        minSize={minTextWidth}
        direction="horizontal"
        gutterSize={12}
        cursor="col-resize"
        className="flex w-full h-[calc(100vh-80px)] px-20 py-4"
      >
        <Description
          data={frq}
          submitResult={submitResult}
          explanation={explanation}
          isExplaining={isExplaining}
          isSubmitting={isSubmitting}
          isCollapsed={isDescCollapsed}
          activeDescTab={activeDescTab}
          setIsCollapsed={setIsDescCollapsed}
          setActiveDescTab={setActiveDescTab}
        />

        <Code
          data={data}
          isExplaining={isExplaining}
          setExplanation={setExplanation}
          setIsExplaining={setIsExplaining}
          setActiveDescTab={setActiveDescTab}
        />
      </Split>
    </div>
  )
}

export default FrqTemplate
