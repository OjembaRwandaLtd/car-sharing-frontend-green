import { ReactElement } from "react"
import BrokenCarIcon from "../assets/BrokenCarIcon"
import { useNavigate } from "react-router-dom"
import Button from "../components/ui/Button"
import { getAuthToken } from "../util/auth"
import Routes from "../routes"

const NotFound = (): ReactElement => {
  const navigate = useNavigate()
  const token = getAuthToken()
  const handleBackHome = () => navigate(Routes.HOME)
  const handleBackToLogin = () => navigate(Routes.LOGIN.ROOT)

  return (
    <div className="flex h-screen flex-col items-center gap-8 bg-primary-800 py-20 font-lora text-white">
      <h1 className="text-5xl font-bold">OOOOOPS!</h1>
      <BrokenCarIcon />
      <p className="flex flex-col pb-8 text-center text-lg font-medium">
        <span>Something went wrong.</span>
        <span>We will solve your issue soon.</span>
      </p>
      {token ? (
        <Button text="Back to Home" onClick={handleBackHome} />
      ) : (
        <Button text="Back to Login" onClick={handleBackToLogin} />
      )}
    </div>
  )
}

export default NotFound
