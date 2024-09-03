import { ReactElement } from "react"
import BrokenCarIcon from "../assets/BrokenCarIcon"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

const NotFound = (): ReactElement => {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1)

  return (
    <div className="flex h-screen flex-col items-center gap-8 bg-primary-800 py-20 font-lora text-white">
      <h1 className="text-5xl font-bold">OOOOOPS!</h1>
      <BrokenCarIcon />
      <p className="flex flex-col pb-8 text-center text-lg font-medium">
        Something went wrong.
        <span>We will solve your issue soon.</span>
      </p>
      <Button value="Go Back" handleClick={handleClick} />
    </div>
  )
}

export default NotFound
