import Navbar from "./navbar"
import { Outlet } from "react-router-dom"

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

export default Layout
