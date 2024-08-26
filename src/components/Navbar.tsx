import React from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import Logo from '../assets/Logo'

const Navbar: React.FC = (): React.ReactElement => (
  <nav className="flex items-center justify-between rounded-b-xl bg-[#111827] px-[1.125rem] py-4 text-white ">
    <h1 className="text-sm">Menu</h1>
    <Logo className="" />
    <ProfileIcon className="w-6" />
  </nav>
)

export default Navbar
