import { ReactElement, useEffect, useState } from "react"
import Item from "../../components/cards/Car/Item"
import Button from "../../components/ui/Button"
import Loading from "../../components/ui/Loading"
import { useCarDetails } from "../../hooks"
import ConfirmDelete from "../../components/ui/ConfirmDelete"
import { useNavigate } from "react-router-dom"
import Routes from "../../routes"
import Title from "../../components/ui/Title"
import NotFound from "../../pages/404"
import { useLoggedInUserContext } from "../layout"
import { Car } from "../../util/props/newCar"
import { apiDelete } from "../../api"

const OwnCarsSection = (): ReactElement => {
  const { loggedInUserId } = useLoggedInUserContext()
  const { carsData, isLoading, isError } = useCarDetails()
  const [cars, setCars] = useState<Car[]>([])
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null)
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!loaded && carsData) {
      const filteredCars = carsData?.filter(car => car.ownerId === Number(loggedInUserId))
      if (JSON.stringify(filteredCars) !== JSON.stringify(cars) && filteredCars)
        setCars(filteredCars)
      setLoaded(true)
    }
  }, [carsData])
  const handleDelete = async () => {
    try {
      await apiDelete("cars", selectedCarId)
      setCars(cars.filter(car => car.id !== selectedCarId))
      setDialogOpen(false)
    } catch (error) {
      return error
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
      <Title text="My cars" backButton />
      <div>
        {cars.length ? (
          cars.map(car => (
            <Item
              key={car.id}
              car={car}
              showDeleteButton={true}
              handleDelete={() => openDialog(car.id)}
            />
          ))
        ) : (
          <p className="pb-3 text-center font-lora text-xl text-Lachs"> No car available</p>
        )}
      </div>
      <Button text="Add Car" onClick={handleNavigate} />
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
export default OwnCarsSection
