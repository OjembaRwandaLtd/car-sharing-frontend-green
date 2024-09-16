import { ReactElement } from "react"
import HomeTitle from "../../src/components/ui/HomeTitle"
import Button from "../../src/components/ui/Button"
import { useNavigate } from "react-router-dom"
import Routes from "../routes"
import "./Styles.css"

const Home = (): ReactElement => {
  const navigate = useNavigate()
  const navigateToNewBookings = () => navigate(Routes.BOOKINGS.NEW)
  const navigateToMyBookings = () => navigate(Routes.BOOKINGS.ROOT)
  const navigateToMyCar = () => navigate(Routes.CARS.OWN)

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-5 bg-primary-800 lg:flex-row lg:overflow-x-hidden">
      <div className="flex flex-col items-center gap-10">
        <div className="lg:absolute lg:left-1/2 lg:top-10 lg:-translate-x-1/2">
          <HomeTitle />
        </div>
        <p className="font-lora text-xl text-secondary-200">
          <span className="block px-10">Hello Manuela!</span>
          <span className="block">What are you up to today?</span>
        </p>
        <Button value="Book car" handleClick={navigateToNewBookings} />
        <span className="font-lora text-xl text-secondary-200 lg:hidden">or</span>
      </div>
      <div>
        <img
          className="car hidden scale-90 lg:block"
          src="https://cdn.discordapp.com/attachments/1234935312510095540/1285224926831185940/brabus-removebg.png?ex=66e97e7c&is=66e82cfc&hm=b7faff2d7ac74eca2e424b6ee0476e4a91df3ce60d597eb9b773c3371a94020e&"
          alt=""
        />
        <div className="mt-7 flex flex-col gap-4 lg:-mt-10 lg:flex-row">
          <Button value="See My Cars" type="outline" handleClick={navigateToMyCar} />
          <Button value="See My Bookings" type="outline" handleClick={navigateToMyBookings} />
        </div>
      </div>
    </section>
  )
}

export default Home
