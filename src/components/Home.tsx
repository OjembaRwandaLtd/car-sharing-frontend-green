import React from "react"
import Title from "./Title"
const Home: React.FC = () => (
  <section className=" bg-primary-800 flex h-screen flex-col items-center gap-5">
    <Title />
    <p className="font-lora text-secondary-200 text-xl">
      <span className="block px-10">Hello Manuela!</span>
      <span className="block">What are you up to today?</span>
    </p>
  </section>
)

export default Home
