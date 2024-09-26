import { ReactElement } from "react"
import { configure } from "axios-hooks"
import { RouterProvider } from "react-router-dom"
import router from "./routes/router"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

const App = (): ReactElement => <RouterProvider router={router} />

export default App
