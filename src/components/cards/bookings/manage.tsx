import { ReactElement } from "react"
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

  if (loading || isLoading) return <Loading />
  if (error || isError) return <NotFound />

  const bookings = data?.filter(booking => booking.car.ownerId === Number(loggedInUserId))
  const cars = carsData?.filter(car => car.ownerId === Number(loggedInUserId))

  return (
    <>
      {bookings?.map(booking => (
        <>
          <BookingsItem
            key={booking.id}
            isOwnerView={true}
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
              <Button value="Accept" />
              <Button type="outline" value="Decline" />
            </div>
          )}
          <hr />
        </>
      ))}
    </>
  )
}

export default ManageBookings
