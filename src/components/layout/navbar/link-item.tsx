import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'

type Props = {
  index: number
  activeIndex: number | null
  setActiveIndex: (index: number | null) => void
  item: {
    label: string
    href: string
    content: ({
      label: string
      href: string
    })[]
  }
}

const LinkItem = ({ item, index, activeIndex, setActiveIndex }: Props) => {
  const isActive = index === activeIndex

  const onSelect = () => {
    setActiveIndex(index)
  }

  return (
    <>
      {item.content && item.content.length !== 0 && (
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className={cn(
              'group flex items-center gap-x-2 cursor-pointer',
              isActive && 'text-muted-foreground'
            )}>
              <span className="hover:text-muted-foreground">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground transition-all group-hover:rotate-90" />
            </div>
          </HoverCardTrigger>

          <HoverCardContent className="w-[100px]">
            <div className="flex flex-col items-center gap-y-2">
              {item.content.map(content => (
                <Link
                  key={content.href}
                  to={content.href}
                  onClick={onSelect}
                  className="hover:underline"
                >
                  {content.label}
                </Link>
              ))}
            </div>
          </HoverCardContent>
        </HoverCard>
      )}

      {(!item.content || item.content.length === 0) && (
        <Link
          to={item.href}
          onClick={onSelect}
          className={cn(
            'cursor-pointer hover:text-muted-foreground',
            isActive && 'text-muted-foreground'
          )}
        >
          {item.label}
        </Link>
      )}
    </>
  )
}

export default LinkItem