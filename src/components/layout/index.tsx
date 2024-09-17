import React, { createContext, useEffect, useMemo, useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import { getAuthToken } from "../../util/auth"
import Navbar from "./navbar"

interface LoggedInProp {
  userIsLoggedIn: boolean
  setUserIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
export const LoggedInUserContext = createContext<LoggedInProp | undefined>(undefined)

// export const useLoggedInUserContext = () => {
//   const context = useContext(LoggedInUserContext)
//   if (context === undefined) {
//     throw new Error("useErrorContext must be used within an ErrorProvider")
//   }
//   return context
// }

const Layout: React.FC = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

  const token = getAuthToken()
  useEffect(() => {
    if (token) setUserIsLoggedIn(true)
  }, [])

  // const checkLoggedInUser = async () => {
  //   try {
  //     if (token) {
  //       const res = await axios.get(`${apiUrl}/auth`, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       if (res.status === 200) setUserIsLoggedIn(true)
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) return setUserIsLoggedIn(false)
  //   }
  // }

  // useEffect(() => {
  //   checkLoggedInUser()
  // }, [checkLoggedInUser])

  const contextValue = useMemo(
    () => ({
      userIsLoggedIn,
      setUserIsLoggedIn,
    }),
    [userIsLoggedIn, setUserIsLoggedIn],
  )

  return (
    <LoggedInUserContext.Provider value={contextValue}>
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
    </LoggedInUserContext.Provider>
  )
}

export default Layout
