import { ReactElement, useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { ProfileIcon, Logo } from "../../../assets/index"
import { NavLink, useLocation } from "react-router-dom"
import Dropdown from "../../ui/Dropdown"
import DropdownItems from "./DropdownItems"

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
              <DropdownItems />
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
