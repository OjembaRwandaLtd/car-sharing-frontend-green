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

interface Booking {
  id: number
  carId: number
  car: {
    ownerId: number
  }
  renter: {
    name: string
  }
  startDate: Date
  endDate: Date
  state?: string
}

const ManageBookings = ({ button }: buttonProp): ReactElement => {
  const { data, error, loading } = useBookings()
  const { carsData, isLoading, isError } = useCarDetails()
  const { loggedInUserId } = useLoggedInUserContext()

  const bookings = data?.filter(
    (booking: Booking) => booking.car.ownerId === Number(loggedInUserId),
  )
  const cars = carsData?.filter(car => car.ownerId === Number(loggedInUserId))

  if (loading || isLoading) return <Loading />
  if (error || isError) return <NotFound />

  return (
    <div className="divide-y">
      {bookings?.map((booking: Booking) => (
        <div key={booking.id}>
          <BookingsItem
            car={
              cars?.find(car => car.id === booking.carId) ?? { id: 0, carImage: "", carName: "" }
            }
            booking={{
              renter: booking.renter.name,
              startDate: booking.startDate.toString(),
              endDate: booking.endDate.toString(),
            }}
          />
          {button && <Status bookingId={booking.id} state={booking.state || "PENDING"} />}
        </div>
      ))}
    </div>
  )
}

export default ManageBookings
