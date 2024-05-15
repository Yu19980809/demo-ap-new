import UserButton from './user-button'
import { ModeToggle } from '@/components/dark-mode/mode-toggle'

const Actions = () => {
  return (
    <div className="flex flex-end items-center md:gap-x-4 gap-x-2">
      <ModeToggle />
      <UserButton />
    </div>
  )
}

export default Actions