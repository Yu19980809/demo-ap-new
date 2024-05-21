import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'

import { Frq } from '@/lib/types'
import FrqTemplate from '@/components/frq/question'

const FrqQuestion = () => {
  const { id } = useParams()

  const [frq, setFrq] = useState<Frq>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/frqs/${id}`)
      if (!res) return toast.error('Failed to fetch data')
      setFrq(res.data)
    }

    fetchData()
  }, [id])

  return (
    <FrqTemplate data={frq} />
  )
}

export default FrqQuestion
