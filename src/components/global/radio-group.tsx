import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { Choice, ChoiceLabel } from '@/lib/types'

type Props = {
  choices?: Choice[]
  selected?: ChoiceLabel[]
  onSelect: (choice: ChoiceLabel) => void
}

const RadioGroup = ({ choices, selected, onSelect }: Props) => {
  const [selectedChoice, setSelectedChoice] = useState<ChoiceLabel[]>([])

  useEffect(() => {
    setSelectedChoice(selected || [])
  }, [selected])

  const onChoiceSelect = (choice: ChoiceLabel) => {
    onSelect(choice)

    setSelectedChoice(prev => {
      if (prev?.includes(choice)) {
        prev = prev.filter(item => item !== choice)
      } else {
        prev?.push(choice)
      }

      return [...prev]
    })
  }

  return (
    <div className="flex flex-col gap-y-4 px-6 py-10">
      {choices?.map(item => (
        <div
          key={item.label}
          onClick={() => onChoiceSelect(item.label)}
          className={cn(
            'group flex items-center gap-x-2 p-2 pl-4 rounded-md cursor-pointer hover:bg-secondary',
            selectedChoice?.includes(item.label) && 'bg-emerald-100/80 hover:bg-emerald-100/80 dark:bg-emerald-900/80'
          )}
        >
          <span className={cn(
            'flex justify-center items-center w-7 h-7 rounded-full border group-hover:bg-emerald-500 group-hover:text-white',
            selectedChoice?.includes(item.label) && 'bg-emerald-500 text-white'
          )}>
            {item.label}
          </span>

          <span>{item.content}</span>
        </div>
      ))}
    </div>
  )
}

export default RadioGroup
