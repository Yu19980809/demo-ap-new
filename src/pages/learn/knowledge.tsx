import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import Split from 'react-split'
import axios from 'axios'

import { EssentialKnowledge } from '@/lib/types'
import Container from '@/components/global/container'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

const Knowledge = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const index = searchParams.get('index')

  const [open, setOpen] = useState<boolean>(false)
  const [data, setData] = useState<EssentialKnowledge>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/syllabus/essential_knowledge/${id}`)
      if (!res) return toast.error('Failed to fetch data')
      setData(res.data)
    }

    fetchData()
  }, [id])

  const onCodeClick = () => {
    if (!open) return setOpen(true)

    setOpen(false)
  }

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

        {data && !open && (
          <div className="relative h-screen py-10 overflow-y-auto">
            <h1 className="mb-10 font-semibold text-xl text-center">
              {data.topic_id}.{index}
              &nbsp;&nbsp;
              {data.name}
            </h1>

            <p>This is test text</p>

            <div className="absolute right-6 bottom-16 flex items-center gap-x-2 z-10">
              <Button asChild>
                <Link to="/learn">Back to syllabus</Link>
              </Button>
              
              <Button onClick={onCodeClick}>
                Try to code
              </Button>
            </div>
          </div>
        )}

        {data && open && (
          <div className="h-screen py-10 overflow-y-auto">
            <Split minSize={200} gutterSize={12}>
              <div>syllabus</div>
              <div>code</div>
            </Split>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Knowledge
