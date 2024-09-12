import { createBrowserRouter } from "react-router-dom"
import Routes from "."
import AddNewCar from "../pages/cars/new"
import ManageBookings from "../pages/bookings/manage"
import MyBookings from "../pages/bookings"
import NewBooking from "../pages/bookings/new"
import Home from "../pages"
import NotFound from "../pages/404"
import Layout from "../components/layout"
import CarDetails from "../pages/cars/view"
import CarListing from "../pages/cars"
import OwnCars from "../pages/cars/own"

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: Routes.CARS.ROOT,
        children: [
          { index: true, element: <CarListing /> },
          { path: "new", element: <AddNewCar /> },
          { path: ":carId", element: <CarDetails /> },
          {
            path: Routes.CARS.OWN,
            children: [
              { index: true, element: <OwnCars /> },
              { path: ":carId", element: <CarDetails /> },
            ],
          },
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
    ],
  },
  { path: "*", element: <NotFound /> },
])

export default router
