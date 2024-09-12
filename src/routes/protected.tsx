import { ReactElement } from "react"
import { getAuthToken } from "../util/auth"
import { Navigate, Outlet } from "react-router-dom"
import Routes from "."

const ProtectedRoutes = (): ReactElement => {
  const token = getAuthToken()
  return token ? <Outlet /> : <Navigate to={Routes.LOGIN.LANDING} replace />
}

export default ProtectedRoutes
