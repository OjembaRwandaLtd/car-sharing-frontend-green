import { ReactElement } from "react"
import { getAuthToken } from "../util/auth"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = (): ReactElement => {
  const token = getAuthToken()
  return token ? <Outlet /> : <Navigate to={} />
}

export default ProtectedRoutes
