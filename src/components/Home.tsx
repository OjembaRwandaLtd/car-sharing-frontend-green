import { ReactElement } from "react"
import HomeTitle from "./HomeTitle"
import Button from "./Button"
const Home = (): ReactElement => (
  <div className="h-screen bg-primary-800">
    <section className=" flex  flex-col items-center gap-10">
      <HomeTitle />
      <p className="font-lora text-xl text-secondary-200 ">
        <span className="block px-10">Hello Manuela!</span>
        <span className="block">What are you up to today?</span>
      </p>
      <Button value="Book car" />
      <span className="font-lora text-xl text-secondary-200">or</span>
    </section>
    <div className="mt-7 flex flex-col gap-4">
      <Button value="See My Cars" type="outline" />
      <Button value="See My Bookings" type="outline" />
    </div>
  </div>
)

export default Home
