import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'

import { EssentialKnowledge } from '@/lib/types'
import Container from '@/components/global/container'
import toast from 'react-hot-toast'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

const Knowledge = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const index = searchParams.get('index')

  const [data, setData] = useState<EssentialKnowledge>()

  useEffect(() => {
    axios.get(`/api/syllabus/essential_knowledge/${id}`)
      .then(res => setData(res?.data))
      .catch(err => {
        toast.error('Failed to fetch data')
        console.log('ERROR_GET_ESSENTIAL_KNOWLEDGE', err)
      })
  }, [id])

  return (
    <div className="h-screen">
      <Container>
        {!data && (
          <div className="py-10">
            <Skeleton className="w-1/2 h-8 mx-auto mb-10" />

            <div className="flex flex-col gap-y-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="flex flex-col gap-y-4">
                  <Skeleton className="w-full h-6" />
                  <Skeleton className="w-1/2 h-6" />
                </div>
              ))}
            </div>
          </div>
        )}

        {data && (
          <div className="relative h-screen py-10 overflow-y-auto">
            <h1 className="mb-10 font-semibold text-xl text-center">
              {data.topic_id}.{index}
              &nbsp;&nbsp;
              {data.name}
            </h1>

            <p>This is test text</p>

            <Button className="absolute right-4 bottom-10">
              Try to code
            </Button>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Knowledge
