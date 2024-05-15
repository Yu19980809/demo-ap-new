import Logo from './logo'
import LinkList from './link-list'
import Actions from './actions'

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-full h-20 border-b">
      <div className="flex justify-between items-center w-full max-w-screen-2xl">
        <Logo />
        <LinkList />
        <Actions />
      </div>
    </nav>
  )
}

export default Navbar
