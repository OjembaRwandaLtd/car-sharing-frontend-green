import { ReactElement } from "react"
import { configure } from "axios-hooks"

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

const App = (): ReactElement => <div></div>

export default App
