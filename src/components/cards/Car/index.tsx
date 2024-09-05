import { ReactElement } from "react"
import Item from "./Item"
import Loading from "../../ui/Loading"
import NotFound from "../../../pages/404"
import { useCarDetails } from "../../../hooks"

const Car = (): ReactElement => {
  const { carsData, isLoading, isError } = useCarDetails()

  if (isLoading) return <Loading />
  if (isError) return <NotFound />
  return <div>{carsData?.map(car => <Item key={car.id} car={car} />)}</div>
}

export default Car
