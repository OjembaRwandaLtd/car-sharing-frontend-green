import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Title from './components/Title'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <div className="bg-primary-400">
      <Title text="Details" backButton={true} />
    </div>
  )
}

export default App
