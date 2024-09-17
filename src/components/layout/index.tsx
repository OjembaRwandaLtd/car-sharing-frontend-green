import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import { getAuthToken } from "../../util/auth"

const Layout: React.FC = () => {
  const token = getAuthToken()

  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Navbar />
      </header>
      <div className="flex grow">
        {token && (
          <aside className="hidden md:block md:w-[20vw]">
            <Sidebar />
          </aside>
        )}
        <main className="mt-10 w-full p-4 md:w-3/4 lg:w-4/5">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
