import { ReactElement } from "react"
import HomeTitle from "../../components/ui/HomeTitle"
import Button from "../../components/ui/Button"
import { useNavigate } from "react-router-dom"
import Routes from "../../routes"

const Landing = (): ReactElement => {
  const navigate = useNavigate()
  const handleClick = () => navigate(Routes.LOGIN.ROOT)

  return (
    <div className="flex h-full flex-col items-center justify-between space-y-28 text-secondary-200">
      <HomeTitle />
      <p className="flex flex-col text-center font-lora text-xl font-medium">
        Start Sharing your car <span> with the world</span>
      </p>
      <Button value="Log In" handleClick={handleClick} />
    </div>
  )
}

export default Landing
