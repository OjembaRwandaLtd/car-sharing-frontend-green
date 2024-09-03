import { ReactElement, useEffect } from "react"
import { useState } from "react"
import ProfileIcon from "../../assets/ProfileIcon"
import Logo from "../../assets/Logo"
import CarIcon from "../../assets/CarIcon"
import CarsIcon from "../../assets/CarsIcon"
import ListIcon from "../../assets/ListIcon"
import TileIcon from "../../assets/TileIcon"
import DropdownItem from "../ui/dropdown/item"
import CarPlusIcon from "../../assets/CarPlusIcon"
import LogoutIcon from "../../assets/LogoutIcon"
import Dropdown from "../ui/dropdown"

import { useLocation } from "react-router-dom"
import classNames from "classnames"

const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const location = useLocation()

  useEffect(() => setIsOpen(false), [location])

  return (
    <div>
      <nav className="relative flex h-14 items-center justify-between rounded-b-xl bg-secondary-800 px-5 py-4 text-white">
        <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2 rounded-full bg-secondary-800 px-4 pb-5 pt-1.5">
          <Logo className="size-10 z-10" />
        </div>

        <div className={classNames("dropdown dropdown-bottom", { isOpen: "dropdown-open" })}>
          <div tabIndex={0} role="button" className="m-1" onClick={toggleDropdown}>
            {isOpen ? "Close" : "Menu"}
          </div>
          {isOpen && (
            <Dropdown>
              <div className="divide-y px-4 ">
                <div>
                  <DropdownItem icon={<CarIcon />} text="Book A Car" navlink="/bookings/new" />
                  <DropdownItem icon={<TileIcon />} text=" My Bookings" navlink="/bookings/" />
                </div>
                <div>
                  <h2 className="px-4 pt-3 font-bold">My cars</h2>
                  <DropdownItem icon={<CarsIcon />} text="See My Cars" navlink="/cars" />
                  <DropdownItem
                    icon={<ListIcon />}
                    text="My car's Bookings"
                    navlink="/bookings/manage"
                  />
                  <DropdownItem icon={<CarPlusIcon />} text="Add New car" navlink="cars/new" />
                </div>

                <DropdownItem icon={<LogoutIcon />} text="Logout" />
              </div>
            </Dropdown>
          )}
        </div>
        <ProfileIcon className="w-6" />
      </nav>
    </div>
  )
}
export default Navbar
