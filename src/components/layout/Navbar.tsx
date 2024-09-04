import { ReactElement, useEffect, useRef, useState } from "react"
import classNames from "classnames"
import Routes from "../../routes"
import {
  ProfileIcon,
  Logo,
  CarIcon,
  CarsIcon,
  ListIcon,
  TileIcon,
  CarPlusIcon,
  LogoutIcon,
} from "../../assets/index"

import DropdownItem from "../ui/dropdown/item"
import Dropdown from "../ui/dropdown"
import { NavLink, useLocation } from "react-router-dom"

const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleDropdown = () => setIsOpen(!isOpen)
  const location = useLocation()

  const handleClickOutside = (event: MouseEvent) => {
    if (
      event.target instanceof Node &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => setIsOpen(false), [location])

  return (
    <div>
      <nav className="relative flex h-14 items-center justify-between rounded-b-xl bg-secondary-800 px-5 py-4 text-white">
        <div
          ref={dropdownRef}
          className={classNames("dropdown dropdown-bottom", { isOpen: "dropdown-open" })}
        >
          <div tabIndex={0} role="button" className="m-1" onClick={toggleDropdown}>
            {isOpen ? "Close" : "Menu"}
          </div>
          {isOpen && (
            <Dropdown>
              <div className="divide-y px-4 ">
                <div>
                  <DropdownItem
                    icon={<CarIcon />}
                    text="Book A Car"
                    navlink={Routes.BOOKINGS.NEW}
                  />
                  <DropdownItem
                    icon={<TileIcon />}
                    text=" My Bookings"
                    navlink={Routes.BOOKINGS.ROOT}
                  />
                </div>
                <div>
                  <h2 className="px-4 pt-3 font-bold">My cars</h2>
                  <DropdownItem icon={<CarsIcon />} text="See My Cars" navlink={Routes.CARS.ROOT} />
                  <DropdownItem
                    icon={<ListIcon />}
                    text="My car's Bookings"
                    navlink="/bookings/manage"
                  />
                  <DropdownItem
                    icon={<CarPlusIcon />}
                    text="Add New car"
                    navlink={Routes.CARS.NEW}
                  />
                </div>
                <DropdownItem icon={<LogoutIcon />} text="Logout" />
              </div>
            </Dropdown>
          )}
        </div>
        <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2 rounded-full bg-secondary-800 px-4 pb-5 pt-1.5">
          <NavLink to={"/"}>
            <Logo className="size-10 z-10" />
          </NavLink>
        </div>
        <ProfileIcon className="w-6" />
      </nav>
    </div>
  )
}
export default Navbar
