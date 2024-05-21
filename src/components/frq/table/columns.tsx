'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CircleCheckBig, CircleMinus, Clock } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Difficulty, FrqItem } from '@/lib/types'
import { Hint } from '@/components/ui/hint'
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header'

export const columns: ColumnDef<FrqItem>[] = [
  {
    accessorKey: 'id'
  },
  {
    accessorKey: 'status'
  },
  {
    accessorKey: 'year',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year" />
    ),
    cell: ({ row }) => row.original.metadata.year
  },
  {
    accessorKey: 'number',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => row.original.metadata.number
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        <Hint
          label="Not started yet"
          side="top"
        >
          <CircleMinus className="w-4 h-4 text-muted-foreground" />
        </Hint>

        <span className="max-w-[300px] truncate">
          {row.original.metadata.name}
        </span>
      </div>
    )
  },
  {
    accessorKey: 'difficulty',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Difficulty" />
    ),
    cell: ({ row }) => (
      <span className={cn(
        'p-2 rounded-md border border-[#fffb8f] bg-[#feffe6] text-[#d4b106] text-[12px]',
        row.original.metadata.difficulty === Difficulty.EASY && 'border-[#b7eb8f] bg-[#f6ffed] text-[#389e0d]',
        row.original.metadata.difficulty === Difficulty.HARD && 'border-[#ffa39e] bg-[#fff1f0] text-[#cf1322]'
      )}>
        {row.original.metadata.difficulty?.toUpperCase()}
      </span>
    )
  },
  {
    accessorKey: 'topic',
    header: 'Topic',
    cell: ({ row }) => (
      <span className="p-2 rounded-md border bg-secondary text-[12px]">
        {row.original.metadata.topic}
      </span>
    )
  },
  {
    accessorKey: 'keynotes',
    header: 'Keynotes',
    cell: ({ row }) => (
      <div className="flex items-center gap-2 flex-wrap max-w-[300px] text-[12px]">
        {row.original.metadata.keynotes?.map((item, index) => (
          <span key={index} className="p-2 rounded-md bg-secondary border">
            {item}
          </span>
        ))}
      </div>
    )
  },
]