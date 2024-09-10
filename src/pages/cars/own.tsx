import { ReactElement } from "react"
import Item from "../../components/cards/Car/Item"
import Button from "../../components/ui/Button"
import Loading from "../../components/ui/Loading"
import NotFound from "../404"
import { useCarDetails } from "../../hooks"

const OwnCars = (): ReactElement => {
  const { carsData, isLoading, isError } = useCarDetails()
  const userId = localStorage.getItem("userId")

  if (isLoading) return <Loading />
  if (isError) return <NotFound />

  return (
    <div>
      <div>
        {carsData
          ?.filter(car => car.ownerId === Number(userId))
          .map(car => <Item key={car.id} car={car} deleteButton />)}
      </div>
      <Button value="Add Car" />
    </div>
  )
}

export default OwnCars
