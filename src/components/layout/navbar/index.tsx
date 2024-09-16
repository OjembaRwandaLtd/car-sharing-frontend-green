import { ReactElement, useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { ProfileIcon, Logo } from "../../../assets/index"
import { NavLink, useLocation } from "react-router-dom"
import Dropdown from "../../ui/Dropdown"
import DropdownItems from "./DropdownItems"
import "../Styles.css"

const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleDropdown = () => setIsOpen(!isOpen)
  const location = useLocation()

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => setIsOpen(false), [location])

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between bg-secondary-800 px-5 py-4 text-white">
      <div
        ref={dropdownRef}
        className={classNames("dropdown dropdown-bottom", { "dropdown-open": isOpen })}
      >
        <div tabIndex={0} role="button" className="m-1 md:hidden" onClick={toggleDropdown}>
          {isOpen ? "Close" : "Menu"}
        </div>
        <div className="logo hidden md:block text-lg w-32 text-center py-2 font-bold font-lora shadow-Lachs">
          Car
          <span className="font-extrabold text-xl">Sharing</span>
        </div>

        {isOpen && (
          <Dropdown>
            <DropdownItems />
          </Dropdown>
        )}
      </div>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-secondary-800 px-4 pb-5 pt-1.5">
        <NavLink to={"/"}>
          <Logo className="w-10 h-10" />
        </NavLink>
      </div>
      <ProfileIcon className="w-6" />
    </nav>
  )
}

export default Navbar
