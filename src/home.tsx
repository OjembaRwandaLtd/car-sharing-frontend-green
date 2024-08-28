import React from 'react'
import Title from './title'
const Home: React.FC = () => (
  <section className=" flex h-screen flex-col items-center gap-5 bg-primary-800">
    <Title />
    <p className="font-lora text-xl text-secondary-200">
      <span className="block px-10">Hello Manuela!</span>
      <span className="block">What are you up to today?</span>
    </p>
  </section>
)

export default Home
