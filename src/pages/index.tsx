import { ReactElement } from "react"
import HomeTitle from "../../src/components/ui/HomeTitle"
import Button from "../../src/components/ui/Button"
import { useNavigate } from "react-router-dom"
import Routes from "../routes"
import image from "../assets/images/car.png"
import { useLoggedInUserContext } from "../components/layout"

const Home = (): ReactElement => {
  const { loggedInUserName } = useLoggedInUserContext()
  const navigate = useNavigate()
  const navigateToNewBookings = () => navigate(Routes.BOOKINGS.NEW)
  const navigateToMyBookings = () => navigate(Routes.BOOKINGS.ROOT)
  const navigateToMyCar = () => navigate(Routes.CARS.OWN)

  return (
    <section className="-mx-7 flex h-screen flex-col items-center justify-center gap-5 bg-primary-800 lg:flex-row">
      <div className="flex flex-col items-center gap-10">
        <div className=" md:-mt-56 lg:absolute lg:left-1/2 lg:top-72 lg:-translate-x-1/2">
          <HomeTitle />
        </div>
        <p className="text-center font-lora text-xl text-secondary-200">
          <span className="block px-10">Hello {loggedInUserName}</span>
          <span className="block">What are you up to today?</span>
        </p>
        <Button text="Book car" onClick={navigateToNewBookings} />
        <span className="font-lora text-xl text-secondary-200 lg:hidden">or</span>
      </div>
      <div>
        <img className="car hidden scale-90 lg:block" src={image} alt="Brabus car" />
        <div className="mt-7 flex flex-col gap-4 lg:-mt-10 lg:flex-row">
          <Button text="See My Cars" type="outline" onClick={navigateToMyCar} />
          <Button text="See My Bookings" type="outline" onClick={navigateToMyBookings} />
        </div>
      </div>
    </section>
  )
}

export default Home
