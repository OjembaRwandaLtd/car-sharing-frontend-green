import { ReactElement, useContext, useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { ProfileIcon, Logo } from "../../../assets/index"
import { NavLink, useLocation } from "react-router-dom"
import { LoggedInUserContext } from ".."
import DropdownItems from "./DropdownItems"
import Dropdown from "../../ui/dropdown/index"

const Navbar = (): ReactElement => {
  const loggedInUserContext = useContext(LoggedInUserContext)
  const userIsLoggedIn = loggedInUserContext?.userIsLoggedIn ?? false
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
    <nav className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between bg-secondary-800 px-5 py-4 text-white">
      <div
        ref={dropdownRef}
        className={classNames("dropdown dropdown-bottom", { "dropdown-open": isOpen })}
      >
        {userIsLoggedIn && (
          <div tabIndex={0} role="button" className="m-1 md:hidden" onClick={toggleDropdown}>
            {isOpen ? "Close" : "Menu"}
          </div>
        )}
        <NavLink
          to={"/"}
          className="logo hidden w-32 py-2 text-center font-lora text-lg font-bold shadow-Lachs md:block"
        >
          Car
          <span className="text-xl font-extrabold">Sharing</span>
        </NavLink>

        {isOpen && (
          <Dropdown>
            <DropdownItems />
          </Dropdown>
        )}
      </div>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-secondary-800 px-4 pb-5 pt-1.5">
        <NavLink to={"/"}>
          <Logo className="h-10 w-10" />
        </NavLink>
      </div>
      {userIsLoggedIn && <ProfileIcon className="w-6" />}
    </nav>
  )
}

export default Navbar
