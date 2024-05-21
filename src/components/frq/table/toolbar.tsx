import { useState } from 'react'
import { Table } from '@tanstack/react-table'

import Loader from '@/components/global/loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from '@/components/ui/select'


interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const [field, setField] = useState<string>('')
  const [query, setQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(false)

  const fields = table.getAllColumns()
    .filter(item => item.id !== 'id')
    .map(item => ({ id: item?.id }))

  const onReset = () => {
    setField('')
    setQuery('')
    table.setColumnFilters([])
  }

  const onSearch = async () => {
    setIsLoading(true)
    await table.setColumnFilters([{ id: field!, value: query }])
    setIsLoading(false)
  }

  const onShowKeynotes = () => {
    const column = table.getColumn('keynotes')

    if (isShow) {
      column?.toggleVisibility(false)
      setIsShow(false)
    } else {
      column?.toggleVisibility(true)
      setIsShow(true)
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-4">
        <div className="flex items-center rounded-md overflow-hidden">
          <Input
            value={query}
            disabled={isLoading}
            placeholder="Type search content"
            className="w-[250px] rounded-r-none foucs-visible:none"
            onChange={(e: any) => {
              e.preventDefault()
              setQuery(e.target.value)
            }}
          />

          <Select
            value={field}
            onValueChange={value => setField(value)}
          >
            {!field && (
              <SelectTrigger
                disabled={isLoading}
                className="w-[40px] rounded-l-none bg-secondary focus-visible:none"
              />
            )}

            {!!field && (
              <SelectTrigger
                disabled={isLoading}
                className="w-[120px] rounded-l-none bg-secondary focus-visible:none"
              >
                {field}
              </SelectTrigger>
            )}

            <SelectContent>
              {fields.map(item => (
                <SelectItem key={item.id} value={item.id}>
                  {item.id}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-x-2">
          <Button
            onClick={onSearch}
            disabled={isLoading || !field || !query?.replace(/ /g, '')}
          >
            {isLoading ? <Loader /> : 'Search'}
          </Button>

          <Button
            onClick={onReset}
            disabled={isLoading || !field || !query?.replace(/ /g, '')}
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="flex justify-end items-center gap-x-2">
        <Button onClick={onShowKeynotes}>
          {isShow ? 'Hide' : 'Show'} keynotes
        </Button>
      </div>
    </div>
  )
}