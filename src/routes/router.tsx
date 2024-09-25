import { createBrowserRouter } from "react-router-dom"
import Routes from "."
import ManageBookings from "../pages/bookings/manage"
import MyBookings from "../pages/bookings"
import NewBooking from "../pages/bookings/new"
import Home from "../pages"
import NotFound from "../pages/404"
import Layout from "../components/layout"
import CarDetails from "../pages/cars/view"
import CarListing from "../pages/cars"
import AddNewCar from "../pages/cars/new"
import Landing from "../pages/login/landing"
import LogIn from "../pages/login"
import ProtectedRoutes from "./protected"
import OwnCars from "../pages/cars/own"
import AvailableCars from "../components/sections/AvailableCars"

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Layout />,
    children: [
      {
        path: Routes.LOGIN.LANDING,
        element: <Landing />,
      },
      {
        path: Routes.LOGIN.ROOT,
        element: <LogIn />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          { index: true, element: <Home /> },
          {
            path: Routes.CARS.ROOT,
            children: [
              { index: true, element: <CarListing /> },
              { path: "available", element: <AvailableCars /> },
              { path: "new", element: <AddNewCar /> },
              { path: ":carId", element: <CarDetails /> },
            ],
          },
          {
            path: Routes.BOOKINGS.ROOT,
            children: [
              { index: true, element: <MyBookings /> },
              { path: "new", element: <NewBooking /> },
              { path: "manage", element: <ManageBookings /> },
            ],
          },
          {
            path: Routes.CARS.OWN,
            children: [
              { index: true, element: <OwnCars /> },
              { path: ":carId", element: <CarDetails /> },
            ],
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
])

export default router
