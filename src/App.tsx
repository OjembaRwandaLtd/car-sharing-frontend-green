import { ReactElement } from "react"
import { configure } from "axios-hooks"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AddNewCar from "./pages/cars/new"
import ManageBookings from "./pages/bookings/manage"
import MyBookings from "./pages/bookings"
import NewBooking from "./pages/bookings/new"
import ShowMyCar from "./pages/cars"
import Home from "./pages"
import NotFound from "./pages/404"
import Layout from "./components/layout"

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/cars",
        children: [
          { index: true, element: <ShowMyCar /> },
          { path: "new", element: <AddNewCar /> },
        ],
      },
      {
        path: "/bookings",
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

const App = (): ReactElement => <RouterProvider router={router} />

export default App
