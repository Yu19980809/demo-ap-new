import { forwardRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { ChevronDown, ChevronUp, Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Frq, RunResult } from '@/lib/types'
import { Hint } from '@/components/ui/hint'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/dark-mode/theme-provider'

type Props = {
  data?: Frq
  showRun?: boolean
  isRunning?: boolean
  isCollapsed?: boolean
  setIsCollapsed: React.Dispatch<boolean>
  setIsRunning: React.Dispatch<boolean>
  setRunResult: React.Dispatch<RunResult>
}

const Editor = forwardRef(({
  data,
  showRun = false,
  isRunning = false,
  isCollapsed = false,
  setIsCollapsed,
  setIsRunning,
  setRunResult
}: Props, ref: any) => {
  const { id } = useParams()
  const { theme } = useTheme()

  const [code, setCode] = useState<string>("system.out.print('hello world!')")
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isLight, setIsLight] = useState<boolean>(true)

  useEffect(() => {
    if (theme === 'light') setIsLight(true)
    if (theme === 'dark') setIsLight(false)
    if (theme === 'system') {
      window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? setIsLight(false)
        : setIsLight(true)
    }
  }, [theme])

  const methods = [
    {
      label: 'Method 1',
      number: 'a'
    },
    {
      label: 'Method 2',
      number: 'b'
    },
    {
      label: 'Method 3',
      number: 'c'
    }
  ]

  const onRun = async () => {
    setIsRunning(true)

    const res = await axios.post(`/api/run/${id}/${methods[activeIndex].number}`, { code })
    if (!res) toast.error('Run failed')
    setRunResult(res?.data)

    setIsRunning(false)
  }

  const onCodeChange = (value: string) => {
    setCode(value)
  }

  return (
    <>
      {isCollapsed && (
        <div className="flex justify-between items-center p-1 rounded-md border bg-background">
          <div className="flex items-center gap-x-1">
            {methods.map((item, index) => (
              <Button
                key={item.label}
                asChild
                variant="ghost"
                onClick={() => setActiveIndex(index)}
              >
                <div className={cn(
                  'flex items-center gap-x-1 cursor-pointer',
                  index === activeIndex && 'bg-accent text-accent-foreground'
                )}>
                  <span>{item.label}</span>
                </div>
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(false)}
          >
            <Hint label="Expand" side="left">
              <ChevronDown className="w-5 h-5" />
            </Hint>
          </Button>
        </div>
      )}

      {!isCollapsed && (
        <div ref={ref} className="relative flex-1 flex flex-col rounded-md border overflow-hidden">
          <div className="flex justify-between items-center p-1 bg-background/50">
            <div className="flex items-center gap-x-1">
              {methods.map((item, index) => (
                <Button
                  key={item.label}
                  asChild
                  variant="ghost"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={cn(
                    'flex items-center gap-x-1 cursor-pointer',
                    index === activeIndex && 'bg-accent text-accent-foreground'
                  )}>
                    <span>{item.label}</span>
                  </div>
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(true)}
            >
              <Hint label="Collapse" side="left">
                <ChevronUp className="w-5 h-5" />
              </Hint>
            </Button>
          </div>

          <div className="flex-1 flex justify-center items-center py-2 bg-background overflow-y-auto">
            <Editor
              language="java"
              theme={isLight ? 'vs' : 'vs-dark'}
              value={code}
              options={{ fontSize: 16 }}
              onChange={value => onCodeChange(value!)}
              className="w-full h-full bg-background/80"
            />
          </div>

          {showRun && (
            <Button
              onClick={onRun}
              disabled={isRunning}
              className="absolute right-6 bottom-4 z-10"
            >
              {!isRunning ? 'Run' : <Loader2 className="w-4 h-4 animate-spin" />}
            </Button>
          )}
        </div>
      )}
    </>
  )
})

export default Editor
