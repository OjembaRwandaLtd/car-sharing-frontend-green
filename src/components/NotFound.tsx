import React from "react"
import CarError from "../assets/CarError"
import Button from "./Button"

const NotFound: React.FC = (): React.ReactElement => (
  <div className="flex h-screen flex-col items-center gap-8 bg-primary-800 py-24 font-lora text-white">
    <h1 className="text-5xl font-bold">OOOOOPS!</h1>
    <CarError />
    <p className="flex flex-col pb-8 text-center text-lg font-medium">
      Something went wrong.
      <span>We will solve your issue soon.</span>
    </p>
    <Button value="Go Back" />
  </div>
)

export default NotFound
