import React from 'react'
import { useState } from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import Logo from '../assets/Logo'
import CarIcon from '../assets/CarIcon'
import CarsIcon from '../assets/CarsIcon'
import ListIcon from '../assets/ListIcon'

import TileIcon from '../assets/TileIcon'
import DropdownItem from './DropdownItem'
import CarPlusIcon from '../assets/CarPlusIcon'
import LogoutIcon from '../assets/LogoutIcon'

const Navbar: React.FC = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="relative flex items-center justify-between rounded-b-xl bg-[#111827] px-5 py-4 text-white">
      <div className="absolute left-1/2 top-0 z-0 mx-auto h-[72px] w-[68px] -translate-x-1/2 rounded-full bg-[#111828] px-4 pb-[21px] pt-2">
        <div className="mx-[-1.1px]">
          <Logo className="z-10 w-10" />
        </div>
      </div>

      <div className={`dropdown dropdown-bottom ${isOpen ? 'dropdown-open' : ''}`}>
        <div
          tabIndex={0}
          role="button"
          className="m-1"
          onClick={toggleDropdown}
          // Prevent blur from immediately closing the dropdown
          onBlur={e => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsOpen(false)
            }
          }}
        >
          Menu
        </div>
        {isOpen && (
          <ul
            tabIndex={0}
            className="rounded-box·z-[1] menu dropdown-content mt-10 w-[206px] rounded-md bg-[#3E7591] p-2 text-white shadow"
          >
            <DropdownItem icon={<CarIcon />} text="Book A Car" />
            <DropdownItem icon={<TileIcon />} text=" My Bookings" />
            <hr />
            <DropdownItem icon={<CarsIcon />} text="See My Cars" />
            <DropdownItem icon={<ListIcon />} text="My car's Bookings" />
            <DropdownItem icon={<CarPlusIcon />} text="Add New car" />
            <hr />
            <DropdownItem icon={<LogoutIcon />} text="Logout" />
          </ul>
        )}
      </div>
      <ProfileIcon className="w-6" />
    </nav>
  )
}
export default Navbar
