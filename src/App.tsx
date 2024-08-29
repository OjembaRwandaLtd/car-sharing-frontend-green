import { ReactElement } from "react"
import { configure } from "axios-hooks"

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return <h1>App here!</h1>
}

export default App
