import { useEffect, useState } from 'react'

import { navLinks } from '@/lib/constants'
import LinkItem from './link-item'
import { useLocation } from 'react-router-dom'

const LinkList = () => {
  const location = useLocation()

  const [path, setPath] = useState<string>('/')

  useEffect(() => setPath(location.pathname), [location])

  return (
    <div className="flex items-center md:gap-x-12 gap-x-4 text-muted-foreground">
      {navLinks.map(item => (
        <LinkItem
          key={item.label}
          item={item}
          path={path}
        />
      ))}
    </div>
  )
}

export default LinkList