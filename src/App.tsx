import { ReactElement } from "react"
import { configure } from "axios-hooks"
import CarDetails from "./components/CarDetails"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/:carId" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
