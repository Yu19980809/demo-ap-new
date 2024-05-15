import { Link } from 'react-router-dom'

type Props = {
  item: {
    label: string
    description: string
    href: string
    image: string
  }
}

const CardItem = ({ item }: Props) => {
  return (
    <div className="flex justify-center items-center min-w-[300px] max-w-[450px] h-[150px] rounded-md border cursor-pointer hover:bg-secondary">
      <Link to={item.href}>{item.label}</Link>
    </div>
  )
}

export default CardItem