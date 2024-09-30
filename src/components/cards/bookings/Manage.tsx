import { ReactElement, useEffect, useState } from "react"
import { useBookings, useCarDetails } from "../../../hooks"
import { useLoggedInUserContext } from "../../layout"
import Loading from "../../ui/Loading"
import NotFound from "../../../pages/404"
import Button from "../../ui/Button"
import BookingsItem from "./item"

interface buttonProp {
  button?: boolean
}

const ManageBookings = ({ button }: buttonProp): ReactElement => {
  const { data, error, loading } = useBookings()
  const { carsData, isLoading, isError } = useCarDetails()
  const { loggedInUserId } = useLoggedInUserContext()
  const [bookingStatus, setBookingStatus] = useState("PENDING")

  if (loading || isLoading) return <Loading />
  if (error || isError) return <NotFound />

  const bookings = data?.filter(booking => booking.car.ownerId === Number(loggedInUserId))
  const cars = carsData?.filter(car => car.ownerId === Number(loggedInUserId))

  useEffect(() => {
    // apiPatch(
    //   "bookings",
    //   bookings?.find(booking => booking.id),
    //   bookings?.find(booking => booking.car.state),
    // )
  }, [bookingStatus])

  const handleBookingStatus = (status: string) => {
    setBookingStatus(status)
  }

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
          {button && (
            <div className="mb-10 mt-7 space-y-3">
              {bookingStatus === "ACCEPTED" ? (
                <span>Booking Accepted</span>
              ) : bookingStatus === "DECLINED" ? (
                <span>Booking Declined</span>
              ) : (
                <>
                  ((
                  <Button value="Accept" handleClick={() => handleBookingStatus("ACCEPTED")} />
                  ), (
                  <Button
                    type="outline"
                    value="Decline"
                    handleClick={() => handleBookingStatus("DECLINED")}
                  />
                  ))
                </>
              )}
            </div>
          )}
          <hr />
        </>
      ))}
    </>
  )
}

export default ManageBookings
