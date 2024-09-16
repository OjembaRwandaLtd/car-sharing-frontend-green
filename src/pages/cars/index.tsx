import { ReactElement } from "react"
import Title from "../../components/ui/Title"
import Car from "../../components/cards/Car"

const CarListing = (): ReactElement => (
  <section className="py-1 w-full">
    <Title text="All Cars" backButton />
    <Car />
  </section>
)

export default CarListing
