import { useLocation } from "react-router-dom"
import { useBookings, useCarDetails } from "../../hooks"
import NotFound from "../../pages/404"
import Item from "../cards/Car/Item"
import Loading from "../ui/Loading"
import { apiPost } from "../../api"
import dayjs from "dayjs"

const AvailableCarsSection = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const { data: bookingData, loading: bookingLoading, error: bookingError } = useBookings()
  const { carsData, isLoading, isError } = useCarDetails()

  const handleBooking = async (carId: number) => {
    try {
      const data = {
        carId,
        startDate: dayjs(searchParams.get("startdate")).toISOString(),
        endDate: dayjs(searchParams.get("enddate")).toISOString(),
      }
      console.log(data)
      const response = await apiPost("bookings", JSON.stringify(data))
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const loading = bookingLoading || isLoading
  const hasError = bookingError || isError

  if (loading) return <Loading />
  if (hasError) return <NotFound />

  const bookedCarIds = bookingData?.map(bookedCarId => bookedCarId.carId)
  const availableCars = carsData?.filter(car => !bookedCarIds?.includes(car.id))

  return (
    <>
      {availableCars?.map(car => (
        <Item key={car.id} car={car} showBookButton={true} handleBooking={handleBooking} />
      ))}
    </>
  )
}

export default AvailableCarsSection
