import { Outlet } from "react-router-dom"
import Navbar from "./navbar"

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

export default Layout
