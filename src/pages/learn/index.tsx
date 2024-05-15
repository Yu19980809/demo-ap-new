import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

import { Unit } from '@/lib/types'
import UnitItem from '@/components/learn/unit'
import Navbar from '@/components/layout/navbar'
import Container from '@/components/global/container'
import { Skeleton } from '@/components/ui/skeleton'

const Learn = () => {
  const [units, setUnits] = useState<Unit[]>([])

  useEffect(() => {
    axios.get('/api/syllabus/units')
      .then(res => setUnits(res?.data))
      .catch(err => {
        toast.error('Failed to fetch data')
        console.log('ERROR_GET_SYLLABUS', err)
      })
  }, [])

  return (
    <div className="h-full">
      <Navbar />

      <Container className="h-[calc(100vh-80px)]">
        <div className="w-full h-full py-10">
          <h1 className="w-full font-semibold text-xl text-center">Syllabus</h1>

          <div className="flex flex-col gap-y-4 mt-10">
            {(!units || units.length === 0) && (
              <>
                {[...Array(10)].map((_, index) => (
                  <Skeleton key={index} className="w-full h-8 rounded-md" />
                ))}
              </>
            )}

            {units && units.length !== 0 && (
              <>
                {units.map((item, index) => (
                  <UnitItem key={item.name} index={index} data={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Learn