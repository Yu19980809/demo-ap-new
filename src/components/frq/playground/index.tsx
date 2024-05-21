import { ElementRef, useEffect, useRef, useState } from 'react'
import Split from 'react-split'

import { Frq, FrqDescTab, QuestionTab, RunResult } from '@/lib/types'
import RunResults from './run-result/run-results'
import CodeEditor from './editor/code-editor'
import HorizontalResizeBar from '@/components/global/horizontal-resize-bar'

type Props = {
  data?: Frq
  isExplaining: boolean
  setExplanation: React.Dispatch<any>
  setIsExplaining: React.Dispatch<boolean>
  setActiveDescTab: React.Dispatch<FrqDescTab>
}

const Code = ({
  data,
  isExplaining,
  setExplanation,
  setIsExplaining,
  setActiveDescTab
}: Props) => {
  const [isEditorCollapsed, setIsEditorCollapased] = useState<boolean>(false)
  const [isResultCollapsed, setIsResultCollapased] = useState<boolean>(false)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [runResult, setRunResult] = useState<RunResult>()

  const minEditorHeight = 80 + 16 + 50  // TopBar: 80, py-4: 16, min-w: 50

  useEffect(() => {
    if (isEditorCollapsed) setIsResultCollapased(false)
    if (isResultCollapsed) setIsEditorCollapased(false)
  }, [isEditorCollapsed, isResultCollapsed])

  return (
    <>
      <Split
        minSize={minEditorHeight}
        direction="vertical"
        cursor="row-resize"
        gutterSize={12}
        className="h-full"
      >
        <CodeEditor
          showRun
          data={data}
          isRunning={isRunning}
          isCollapsed={isEditorCollapsed}
          setIsCollapsed={setIsEditorCollapased}
          setIsRunning={setIsRunning}
          setRunResult={setRunResult}
        />

        <RunResults
          showExplain
          runResult={runResult}
          isRunning={isRunning}
          isExplaining={isExplaining}
          isCollapsed={isResultCollapsed}
          setIsCollapsed={setIsResultCollapased}
          setIsExplaining={setIsExplaining}
          setExplanation={setExplanation}
          setActiveDescTab={setActiveDescTab}
        />
      </Split>
    </>
  )
}

export default Code
