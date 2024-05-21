import {Database } from 'lucide-react'

import { Unit } from '@/lib/types'
import TopicItem from './topic'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

type Props = {
  index: number
  data: Unit
}

const UnitItem = ({ index, data }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem key={data.name} value={data.name}>
        <AccordionTrigger>
          <div className="flex items-center gap-x-2 hover:text-muted-foreground">
            <Database className="w-6 h-6 text-muted-foreground" />
            <span>Unit {index + 1}</span>
            <span>{data.name}</span>
          </div>
        </AccordionTrigger>

        <AccordionContent className="px-6">
          {data.topics.map(item => (
            <TopicItem key={item.id} data={item} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default UnitItem