import { ReactElement, useEffect, useState } from "react"
import Item from "../../components/cards/Car/Item"
import Button from "../../components/ui/Button"
import Loading from "../../components/ui/Loading"
import NotFound from "../404"
import { useCarDetails } from "../../hooks"
import { getAuthToken } from "../../util/auth"
import { apiUrl } from "../../util/apiUrl"
import axios from "axios"
import ConfirmDelete from "../../components/ui/ConfirmDelete"
import { useNavigate } from "react-router-dom"
import Routes from "../../routes"

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
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null)
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!loaded && carsData) {
      const filteredCars = carsData?.filter(car => car.ownerId === Number(userId))
      if (JSON.stringify(filteredCars) !== JSON.stringify(cars) && filteredCars) {
        setCars(filteredCars)
      }
      setLoaded(true)
    }
  }, [carsData])
  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/cars/${selectedCarId}`, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
      setCars(cars.filter(car => car.id !== selectedCarId))
      setDialogOpen(false)
    } catch (error) {
      console.error(error)
    }
  }
  const openDialog = (carId: number) => {
    setDialogOpen(true)
    setSelectedCarId(carId)
  }
  const handleNavigate = () => navigate(Routes.CARS.NEW)

  if (isLoading) return <Loading />
  if (isError) return <NotFound />

  return (
    <div>
      <div>
        {cars?.map(car => (
          <Item key={car.id} car={car} deleteButton handleDelete={() => openDialog(car.id)} />
        ))}
      </div>
      <Button value="Add Car" handleClick={handleNavigate} />
      {isDialogOpen && (
        <ConfirmDelete
          handleDelete={handleDelete}
          isDialogOpen={isDialogOpen}
          setDialogOpen={setDialogOpen}
        />
      )}
    </div>
  )
}
export default OwnCars
