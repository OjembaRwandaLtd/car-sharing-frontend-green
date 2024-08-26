import React from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import Logo from '../assets/Logo'

const Navbar: React.FC = (): React.ReactElement => (
  <nav className="relative flex items-center justify-between rounded-b-xl bg-[#111827] px-[1.125rem] py-4 text-white">
    <div className="absolute left-1/2 top-0 z-0 mx-auto h-[72px] w-[68px] -translate-x-1/2 rounded-full bg-[#111827] px-4 pb-[21px] pt-2">
      <div className="mx-[-1.1px]">
        <Logo className="z-10 w-10" />
      </div>
    </div>

    <h1 className="text-sm">Menu</h1>
    <ProfileIcon className="w-6" />
  </nav>
)

export default Navbar
