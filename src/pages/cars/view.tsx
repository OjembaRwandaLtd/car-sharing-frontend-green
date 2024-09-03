import { ReactElement } from "react"
import Title from "../../components/ui/Title"

const CarDetails = (): ReactElement => (
  <div className="h-screen overflow-x-hidden bg-primary-800">
    <Title text="Details" backButton />
  </div>
)

export default CarDetails
