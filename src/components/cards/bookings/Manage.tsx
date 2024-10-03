import { ReactElement, useMemo } from "react"
import { useBookings, useCarDetails } from "../../../hooks"
import { useLoggedInUserContext } from "../../layout"
import Loading from "../../ui/Loading"
import NotFound from "../../../pages/404"
import BookingsItem from "./Item"
import Status from "./status"

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

const ManageBookings = (): ReactElement => {
  const { data, error, loading } = useBookings()
  const { carsData, isLoading, isError } = useCarDetails()
  const { loggedInUserId } = useLoggedInUserContext()

  const bookings = useMemo(
    () =>
      data?.filter(
        booking => booking.car.ownerId === Number(loggedInUserId) && booking.state !== "RETURNED",
      ),
    [data, loggedInUserId],
  )

  const cars = useMemo(
    () => carsData?.filter(car => car.ownerId === Number(loggedInUserId)),
    [carsData, loggedInUserId],
  )

  if (loading || isLoading) return <Loading />
  if (error || isError) return <NotFound />

  return (
    <div className="divide-y">
      {bookings?.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings?.map((booking: Booking) => (
          <div key={booking.id}>
            <BookingsItem
              car={
                cars?.find(car => car.id === booking.carId) ?? { id: 0, carImage: "", carName: "" }
              }
              isOwnerView={true}
              booking={{
                renter: booking.renter.name,
                startDate: booking.startDate.toString(),
                endDate: booking.endDate.toString(),
              }}
            />
            <Status bookingId={booking.id} state={booking.state ?? "PENDING"} />
          </div>
        ))
      )}
    </div>
  )
}

export default ManageBookings
