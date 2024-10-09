import { ReactElement, useMemo } from "react"
import { useBookings, useCarDetails } from "../../../hooks"
import { useLoggedInUserContext } from "../../layout"
import Loading from "../../ui/Loading"
import NotFound from "../../../pages/404"
import BookingsItem from "./Item"
import Status from "./Status"
import { BookedCar, BookingWithReferences } from "../../../util/api"

const ManageBookings = (): ReactElement => {
  const { data, error, loading } = useBookings()
  const { carsData, isLoading, isError } = useCarDetails()
  const { loggedInUserId } = useLoggedInUserContext()

  const bookings = useMemo(() => {
    const filtered = data?.filter(
      booking => booking?.car?.ownerId === Number(loggedInUserId) && booking.state !== "RETURNED",
    )
    const cars = carsData?.filter(car => car.ownerId === Number(loggedInUserId))

    return filtered?.map(booking => ({
      booking,
      car: cars?.find(car => car.id === booking.carId) ?? { id: 0, carImage: "", carName: "" },
    }))
  }, [data, loggedInUserId])

  if (loading || isLoading) return <Loading />
  if (error || isError) return <NotFound />

  return (
    <div className="divide-y">
      {bookings?.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings?.map(({ car, booking }: { car: BookedCar; booking: BookingWithReferences }) => (
          <div key={booking.id}>
            <BookingsItem
              car={car}
              isOwnerView={true}
              booking={{
                renter: { name: booking?.renter?.name, id: booking?.renter?.id },
                startDate: booking.startDate,
                endDate: booking.endDate,
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
