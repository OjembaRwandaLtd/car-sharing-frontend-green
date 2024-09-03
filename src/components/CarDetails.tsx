import { ReactElement } from "react"
import Title from "./Title"
import CarFeatures from "./CarFeatures"

const CarDetails = (): ReactElement => (
  <div className="h-screen overflow-x-hidden bg-primary-800">
    <Title text="Details" backButton />
    <CarFeatures />
  </div>
)

export default CarDetails
