import { useLocation } from "react-router-dom"
import { useBookings, useCarDetails } from "../../hooks"
import NotFound from "../../pages/404"
import Item from "../cards/Car/Item"
import Loading from "../ui/Loading"
import { apiPost } from "../../api"
import dayjs from "dayjs"
import { useState } from "react"

const AvailableCarsSection = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [postingError, setPostingError] = useState(false)
  const { data: bookingData, loading: bookingLoading, error: bookingError } = useBookings()
  const { carsData, isLoading, isError } = useCarDetails()

  const handleBooking = async (carId: number) => {
    try {
      const data = {
        carId,
        startDate: dayjs(searchParams.get("startdate")).toISOString(),
        endDate: dayjs(searchParams.get("enddate")).toISOString(),
      }
      await apiPost("bookings", JSON.stringify(data))
    } catch (error) {
      setPostingError(true)
    }
  }

  const loading = bookingLoading || isLoading
  const hasError = bookingError || isError || postingError

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
