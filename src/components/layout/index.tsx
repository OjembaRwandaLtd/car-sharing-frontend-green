import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Sidebar from "./sidebar"

const Layout: React.FC = () => (
  <div className="flex min-h-screen flex-col">
    <header>
      <Navbar />
    </header>
    <div className="flex grow">
      <aside className="hidden md:block md:w-[20vw]">
        <Sidebar />
      </aside>
      <main className="mt-10 max-h-full w-full p-4 md:w-3/4 lg:w-full lg:px-10">
        <Outlet />
      </main>
    </div>
  </div>
)

export default Layout
