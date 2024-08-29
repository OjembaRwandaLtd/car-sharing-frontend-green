import { ReactElement } from "react"
import { configure } from "axios-hooks"
import CarItem from "./components/CarItem"

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <main>
      <CarItem />
    </main>
  )
}

export default App
