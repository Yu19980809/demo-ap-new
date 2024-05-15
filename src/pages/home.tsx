import { homeCards } from '@/lib/constants'
import Container from '@/components/global/container'
import Navbar from '@/components/layout/navbar'
import CardItem from '@/components/home/card'
import Calendar from '@/components/home/calendar'

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />

      <Container className="h-[calc(100vh-80px)]">
        <div className="flex w-full h-full">
          <div className="flex justify-center items-center flex-1">
            <div className="grid grid-cols-2 md:gap-8 gap-4">
              {homeCards.map(item => (
                <CardItem key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center w-[400px]">
            <Calendar />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home