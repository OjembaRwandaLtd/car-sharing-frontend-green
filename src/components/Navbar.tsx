import React from "react"
import { useState } from "react"
import ProfileIcon from "../assets/ProfileIcon"
import Logo from "../assets/Logo"
import CarIcon from "../assets/CarIcon"
import CarsIcon from "../assets/CarsIcon"
import ListIcon from "../assets/ListIcon"

import TileIcon from "../assets/TileIcon"
import DropdownItem from "./DropdownItem"
import CarPlusIcon from "../assets/CarPlusIcon"
import LogoutIcon from "../assets/LogoutIcon"

const Navbar: React.FC = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="relative flex h-14 items-center justify-between rounded-b-xl bg-secondary-800 px-5 py-4 text-white">
      <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2 rounded-full bg-secondary-800 px-4 pb-5 pt-1.5">
        <Logo className="size-10 z-10" />
      </div>

      <div className={`dropdown dropdown-bottom ${isOpen ? "dropdown-open" : ""}`}>
        <div tabIndex={0} role="button" className="m-1" onClick={toggleDropdown}>
          {isOpen ? "Close" : "Menu"}
        </div>
        {isOpen && (
          <ul
            tabIndex={0}
            className="h-90 z-1 menu dropdown-content mt-10 w-52 rounded-lg bg-primary-200 p-2 text-base text-white shadow"
          >
            <DropdownItem icon={<CarIcon />} text="Book A Car" />
            <DropdownItem icon={<TileIcon />} text=" My Bookings" />
            <hr className="mx-auto w-40" />
            <h2 className="px-4 pt-3 font-bold">My cars</h2>
            <DropdownItem icon={<CarsIcon />} text="See My Cars" />
            <DropdownItem icon={<ListIcon />} text="My car's Bookings" />
            <DropdownItem icon={<CarPlusIcon />} text="Add New car" />
            <hr className="mx-auto w-40" />
            <DropdownItem icon={<LogoutIcon />} text="Logout" />
          </ul>
        )}
      </div>
      <ProfileIcon className="w-6" />
    </nav>
  )
}
export default Navbar
