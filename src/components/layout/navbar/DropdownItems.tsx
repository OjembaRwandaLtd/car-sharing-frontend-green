import Routes from "../../../routes"
import {
  CarIcon,
  CarsIcon,
  ListIcon,
  TileIcon,
  CarPlusIcon,
  LogoutIcon,
} from "../../../assets/index"
import { useNavigate } from "react-router-dom"
import DropdownItem from "../../ui/dropdown/item"

const DropdownItems = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    const keys = ["token", "userId"]
    keys.forEach(key => localStorage.removeItem(key))

    navigate(Routes.LOGIN.LANDING)
  }
  return (
    <div className="divide-y px-4">
      <div>
        <DropdownItem icon={<CarIcon />} text="Book A Car" navlink={Routes.BOOKINGS.NEW} />
        <DropdownItem icon={<TileIcon />} text=" My Bookings" navlink={Routes.BOOKINGS.ROOT} />
      </div>
      <div>
        <h2 className="px-4 pt-3 font-bold">My cars</h2>
        <DropdownItem icon={<CarsIcon />} text="See My Cars" navlink={Routes.CARS.ROOT} />
        <DropdownItem icon={<ListIcon />} text="My car's Bookings" navlink="/bookings/manage" />
        <DropdownItem icon={<CarPlusIcon />} text="Add New car" navlink={Routes.CARS.NEW} />
      </div>
      <DropdownItem icon={<LogoutIcon />} text="Logout" handleClick={handleLogout} />
    </div>
  )
}

export default DropdownItems
