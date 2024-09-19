import { ReactElement, useEffect, useState } from "react"
import HomeTitle from "../../src/components/ui/HomeTitle"
import Button from "../../src/components/ui/Button"
import { useNavigate } from "react-router-dom"
import Routes from "../routes"
import "./Styles.css"
import image from "../assets/images/car.png"
import axios from "axios"
import { apiUrl } from "../util/apiUrl"
import { getAuthToken } from "../util/auth"

const Home = (): ReactElement => {
  const navigate = useNavigate()
  const navigateToNewBookings = () => navigate(Routes.BOOKINGS.NEW)
  const navigateToMyBookings = () => navigate(Routes.BOOKINGS.ROOT)
  const navigateToMyCar = () => navigate(Routes.CARS.OWN)
  const [user, setUser] = useState("")
  const userDetails = async () => {
    try {
      const userInfo = await axios.get(`${apiUrl}/auth`, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
      setUser(userInfo.data.name)
    } catch (err) {
      return err
    }
  }
  useEffect(() => {
    userDetails()
  }, [])

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-5 bg-primary-800 lg:flex-row lg:overflow-x-hidden">
      <div className="flex flex-col items-center gap-10">
        <div
          className=" md:-mt-56 lg:absolute lg:left-1/2 lg:top-72 lg:-translate-x-1/2
        "
        >
          <HomeTitle />
        </div>
        <p className="text-center font-lora text-xl text-secondary-200">
          <span className="block px-10">Hello {user}</span>
          <span className="block">What are you up to today?</span>
        </p>
        <Button value="Book car" handleClick={navigateToNewBookings} />
        <span className="font-lora text-xl text-secondary-200 lg:hidden">or</span>
      </div>
      <div>
        <img className="car hidden scale-90 lg:block" src={image} alt="" />
        <div className="mt-7 flex flex-col gap-4 lg:-mt-10 lg:flex-row">
          <Button value="See My Cars" type="outline" handleClick={navigateToMyCar} />
          <Button value="See My Bookings" type="outline" handleClick={navigateToMyBookings} />
        </div>
      </div>
    </section>
  )
}

export default Home
