import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('w-full max-w-screen-2xl h-[calc(100vh-80px)] mx-auto', className)}>
      {children}
    </div>
  )
}

export default Container