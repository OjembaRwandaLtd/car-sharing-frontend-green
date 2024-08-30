import { ReactElement } from "react"
import { configure } from "axios-hooks"
import CarDetails from "./components/CarDetails"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddNewCar from "./components/AddNewCar"
import ManageBookings from "./components/ManageBookings"
import MyBookings from "./components/MyBookings"
import NewBooking from "./components/NewBooking"
import ShowMyCar from "./components/ShowMyCar"
import Home from "./components/Home"
import NotFound from "./components/NotFound"

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

const App = (): ReactElement => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:carId" element={<CarDetails />} />
      <Route path="add-new-car" element={<AddNewCar />} />
      <Route path="manage-bookings" element={<ManageBookings />} />
      <Route path="my-bookings" element={<MyBookings />} />
      <Route path="new-bookings" element={<NewBooking />} />
      <Route path="my-car" element={<ShowMyCar />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
)

export default App
