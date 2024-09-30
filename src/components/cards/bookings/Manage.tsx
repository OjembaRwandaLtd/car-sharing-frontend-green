import { ReactElement } from "react"
import { useBookings, useCarDetails } from "../../../hooks"
import { useLoggedInUserContext } from "../../layout"
import Loading from "../../ui/Loading"
import NotFound from "../../../pages/404"
import BookingsItem from "./Item"
import Status from "./status"

interface buttonProp {
  button?: boolean
}

const ManageBookings = ({ button }: buttonProp): ReactElement => {
  const { data, error, loading } = useBookings()
  const { carsData, isLoading, isError } = useCarDetails()
  const { loggedInUserId } = useLoggedInUserContext()

  const bookings = data?.filter(booking => booking.car.ownerId === Number(loggedInUserId))
  const cars = carsData?.filter(car => car.ownerId === Number(loggedInUserId))

  if (loading || isLoading) return <Loading />
  if (error || isError) return <NotFound />

  return (
    <>
      {bookings?.map(booking => (
        <>
          <BookingsItem
            key={booking.id}
            car={
              cars?.find(car => car.id === booking.carId) ?? { id: 0, carImage: "", carName: "" }
            }
            booking={{
              renter: booking.renter.name,
              startDate: booking.startDate.toString(),
              endDate: booking.endDate.toString(),
            }}
          />
          {button && <Status bookingId={booking.id} state={booking?.state} />}
          <hr />
        </>
      ))}
    </>
  )
}

export default ManageBookings
