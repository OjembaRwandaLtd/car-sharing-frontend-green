import { CarIcon, CarPlusIcon, CarsIcon, ListIcon, LogoutIcon, TileIcon } from "../../../assets"
import Routes from "../../../routes"
import { useNavigate } from "react-router-dom"
import "../Styles.css"
import DropdownItem from "../../ui/dropdown/item"
import { LoggedInUserContext } from ".."
import { useContext } from "react"

const Sidebar = () => {
  const navigate = useNavigate()
  const { setUserIsLoggedIn } = useContext(LoggedInUserContext)

  const handleLogout = () => {
    const keys = ["token", "userId"]
    keys.forEach(key => localStorage.removeItem(key))
    setUserIsLoggedIn(false)

    navigate(Routes.LOGIN.LANDING)
  }

  return (
    <aside className="fixed left-0 top-0 z-10 flex h-screen flex-col bg-secondary-800 px-4 pt-20 text-xs text-white md:w-[22vw] lg:w-[18vw] lg:text-lg">
      <div className="mt-5 grow  space-y-10 px-4">
        <div className="mb-8 space-y-5">
          <DropdownItem icon={<CarIcon />} text="Book A Car" navlink={Routes.BOOKINGS.NEW} />
          <DropdownItem icon={<TileIcon />} text=" My Bookings" navlink={Routes.BOOKINGS.ROOT} />
        </div>
        <div className="space-y-5">
          <h2 className="px-4 pt-3 font-bold">My cars</h2>
          <DropdownItem icon={<CarsIcon />} text="See My Cars" navlink={Routes.CARS.OWN} />
          <DropdownItem icon={<ListIcon />} text="My car's Bookings" navlink="/bookings/manage" />
          <DropdownItem icon={<CarPlusIcon />} text="Add New car" navlink={Routes.CARS.NEW} />
        </div>
      </div>
      <div className="mb-8 px-4">
        <DropdownItem icon={<LogoutIcon />} text="Logout" handleClick={handleLogout} />
      </div>
    </aside>
  )
}

export default Sidebar
