import { ReactElement, useState } from "react"
import { useLocation } from "react-router-dom"
import { useBookings, useCarDetails } from "../../hooks"
import NotFound from "../../pages/404"
import Item from "../cards/Car/Item"
import Loading from "../ui/Loading"
import { apiPost } from "../../api"
import dayjs from "dayjs"
import { toast, ToastContainer } from "react-toastify"

const AvailableCarsSection = (): ReactElement => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [postingError, setPostingError] = useState(false)
  const [bookingInProgress, setBookingInProgress] = useState<number | null>(null)
  const { data: bookingData, loading: bookingLoading, error: bookingError } = useBookings()

  const { carsData, isLoading, isError } = useCarDetails()

  const handleBooking = async (carId: number) => {
    setBookingInProgress(carId)
    try {
      const data = {
        carId,
        startDate: dayjs(searchParams.get("startdate")).toISOString(),
        endDate: dayjs(searchParams.get("enddate")).toISOString(),
      }
      await apiPost("bookings", JSON.stringify(data))
      toast.success("Car booked successfully!")
    } catch (error) {
      setPostingError(true)
      toast.error("Failed to book the car.")
    } finally {
      setBookingInProgress(null)
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
      <ToastContainer />
      {availableCars?.map(car => (
        <Item
          key={car.id}
          car={car}
          showBookButton={true}
          handleBooking={handleBooking}
          isBookingInProgress={bookingInProgress === car.id}
        />
      ))}
    </>
  )
}

export default AvailableCarsSection
