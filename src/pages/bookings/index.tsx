import { ReactElement } from "react"
import HomeTitle from "../../components/ui/HomeTitle"
import Button from "../../components/ui/Button"
import { useNavigate } from "react-router-dom"

const Home = (): ReactElement => {
  const navigate = useNavigate()
  const navigateToNewBookings = () => navigate("new-bookings")
  const navigateToMyBookings = () => navigate("my-bookings")
  const navigateToMyCar = () => navigate("my-car")

  return (
    <div className="h-screen bg-primary-800">
      <section className="flex flex-col items-center gap-10">
        <HomeTitle />
        <p className="font-lora text-xl text-secondary-200">
          <span className="block px-10">Hello Manuela!</span>
          <span className="block">What are you up to today?</span>
        </p>
        <Button value="Book car" handleClick={navigateToNewBookings} />
        <span className="font-lora text-xl text-secondary-200">or</span>
      </section>
      <div className="mt-7 flex flex-col gap-4">
        <Button value="See My Cars" type="outline" handleClick={navigateToMyCar} />
        <Button value="See My Bookings" type="outline" handleClick={navigateToMyBookings} />
      </div>
    </div>
  )
}

export default Home
