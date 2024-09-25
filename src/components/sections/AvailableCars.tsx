import { useBookings, useCarDetails } from "../../hooks"
import NotFound from "../../pages/404"
import Item from "../cards/Car/Item"
import Loading from "../ui/Loading"
import Title from "../ui/Title"

const AvailableCars = () => {
  const { data: bookingData, loading: bookingLoading, error: bookingError } = useBookings()
  const { carsData, isLoading, isError } = useCarDetails()

  const loading = bookingLoading || isLoading
  const hasError = bookingError || isError

  if (loading) return <Loading />
  if (hasError) return <NotFound />

  const bookedCarIds = bookingData?.map(book => book.carId)
  const AvailableCars = carsData?.filter(car => !bookedCarIds?.includes(car.id))

  return (
    <>
      <Title text="Available Cars" backButton />
      {AvailableCars?.map(car => <Item key={car.id} car={car} showBookButton={true} />)}
    </>
  )
}

export default AvailableCars
