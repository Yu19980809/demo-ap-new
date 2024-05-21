import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface HintProps {
  label: string
  children: React.ReactNode
  asChild?: boolean
  side?: 'top' | 'bottom' | 'left' | 'right'
}

export const Hint = ({ label, children, asChild, side }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={1}>
        <TooltipTrigger asChild={asChild}>
          {children}
        </TooltipTrigger>
        
        <TooltipContent 
          className="max-w-[250px] m-3 bg-secondary" 
          side={side}
        >
          <p className="font-semibold">
            {label}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}