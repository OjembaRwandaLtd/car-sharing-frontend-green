import { ReactElement } from "react"
import { configure } from "axios-hooks"
import Button from "./components/Button"

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <div>
      <Button value="Lock" />
      <Button value="Use Car" type="outlineLachs" />
      <Button value="Add Car" type="outline" width="regular" />
    </div>
  )
}

export default App
