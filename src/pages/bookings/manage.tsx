import { ReactElement } from "react"
import Bookings from "../../components/cards/bookings/item"
import { useBookings, useCarDetails } from "../../hooks"
import { useLoggedInUserContext } from "../../components/layout"
import Loading from "../../components/ui/Loading"
import NotFound from "../404"

const ManageBookings = (): ReactElement => {
  const { data, error, loading } = useBookings()
  const { carsData, isLoading, isError } = useCarDetails()
  const { loggedInUserId } = useLoggedInUserContext()

  if (loading || isLoading) return <Loading />
  if (error || isError) return <NotFound />

  const bookings = data?.filter(booking => booking.car.ownerId === Number(loggedInUserId))
  const cars = carsData?.filter(car => car.ownerId === Number(loggedInUserId))

  return (
    <>
      {bookings?.map(booking => (
        <Bookings
          key={booking.id}
          car={cars?.find(car => car.id === booking.carId) ?? { id: 0, carImage: "", carName: "" }}
          booking={{
            renter: booking.renter.name,
            startDate: booking.startDate.toString(),
            endDate: booking.endDate.toString(),
          }}
        />
      ))}
    </>
  )
}

export default ManageBookings
