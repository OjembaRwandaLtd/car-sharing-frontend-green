import { ReactElement, useEffect, useState } from "react"
import Item from "../../components/cards/Car/Item"
import Button from "../../components/ui/Button"
import Loading from "../../components/ui/Loading"
import NotFound from "../404"
import { useCarDetails } from "../../hooks"
import { getAuthToken } from "../../util/auth"
import { apiUrl } from "../../util/apiUrl"
import axios from "axios"

interface Car {
  id: number
  carImage: string
  carName: string
  carOwner: string
}

const OwnCars = (): ReactElement => {
  const { carsData, isLoading, isError } = useCarDetails()
  const userId = localStorage.getItem("userId")
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    const filteredCars = carsData?.filter(car => car.ownerId === Number(userId))
    if (JSON.stringify(filteredCars) !== JSON.stringify(cars) && filteredCars) {
      setCars(filteredCars)
    }
  }, [])

  const handleDelete = async (carId: number) => {
    try {
      await axios.delete(`${apiUrl}/cars/${carId}`, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
      setCars(prevCars => prevCars.filter(car => car.id !== carId))
    } catch (error) {
      console.error(error)
    }
  }

  if (isLoading) return <Loading />
  if (isError) return <NotFound />

  return (
    <div>
      <div>
        {cars?.map(car => (
          <Item key={car.id} car={car} deleteButton handleDelete={() => handleDelete(car.id)} />
        ))}
      </div>
      <Button value="Add Car" />
    </div>
  )
}

export default OwnCars
