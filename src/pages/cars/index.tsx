import { ReactElement } from "react"
import Title from "../../components/ui/Title"
import Car from "../../components/cards/Car"

const CarListing = (): ReactElement => (
  <section className="w-full py-1">
    <Title text="All Cars" backButton />
    <Car />
  </section>
)

export default CarListing
