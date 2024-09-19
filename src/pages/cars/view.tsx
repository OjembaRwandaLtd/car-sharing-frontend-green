import { ReactElement } from "react"
import Title from "../../components/ui/Title"
import Details from "../../components/sections/CarDetails"

const CarDetails = (): ReactElement => (
  <div className="overflow-x-hidden bg-primary-800">
    <Title text="Details" backButton />
    <Details />
  </div>
)

export default CarDetails
