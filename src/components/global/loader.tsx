import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

const Loader = ({ className }: { className?: string }) => {
  return (
    <Loader2 className={cn('w-4 h-4 animate-spin', className)} />
  )
}

export default Loader
