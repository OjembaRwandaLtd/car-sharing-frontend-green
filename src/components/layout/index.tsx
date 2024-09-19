import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import { getAuthToken } from "../../util/auth"
import Navbar from "./Navbar"
import useLoggedInUser from "../../hooks/useLoggedInUser"

interface LoggedInProp {
  userIsLoggedIn: boolean
  setUserIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  loggedInUserId: number | undefined
  loggedInUserName: string | undefined
}

export const LoggedInUserContext = createContext<LoggedInProp | null>(null)

export const useLoggedInUserContext = () => {
  const context = useContext(LoggedInUserContext)
  if (context === null) {
    throw new Error("Can't access the user logged in user context")
  }
  return context
}

const Layout: React.FC = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  const token = getAuthToken()
  const loggedInUser = useLoggedInUser()

  useEffect(() => {
    if (token) {
      setUserIsLoggedIn(true)
    }
  }, [])

  const contextValue = useMemo(
    () => ({
      userIsLoggedIn,
      setUserIsLoggedIn,
      loggedInUserId: loggedInUser[0].data?.id,
      loggedInUserName: loggedInUser[0].data?.name,
    }),
    [userIsLoggedIn, setUserIsLoggedIn, loggedInUser],
  )

  return (
    <LoggedInUserContext.Provider value={contextValue}>
      <div className="flex min-h-screen flex-col lg:overflow-x-hidden">
        <header>
          <Navbar />
        </header>
        <div className="flex grow">
          {token && (
            <aside className="hidden md:block md:w-[20vw]">
              <Sidebar />
            </aside>
          )}
          <main className="mt-10 h-full w-full p-4 md:w-3/4 lg:w-4/5">
            <Outlet />
          </main>
        </div>
      </div>
    </LoggedInUserContext.Provider>
  )
}

export default Layout
