import React from "react"
import CarError from "../assets/CarError"

const NotFound: React.FC = (): React.ReactElement => (
  <div className="bg-primary-DEFAUL text-secondary-light flex h-screen flex-col items-center gap-8 py-24 font-lora">
    <h1 className="text-5xl font-bold">OOOOOPS!</h1>
    <CarError />
    <p className="flex flex-col text-center text-lg font-medium">
      Something went wrong.
      <span>We will solve your issue soon.</span>
    </p>
  </div>
)

export default NotFound
