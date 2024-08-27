import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Title from './title'
// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <section className=" flex h-screen flex-col items-center gap-5  bg-primary">
      <Title />
      <p className="font-lora text-xl text-secondary-light">
        <span className="block px-10">Hello Manuela!</span>
        <span className="block">What are you up to today?</span>
      </p>
    </section>
  )
}

export default App
