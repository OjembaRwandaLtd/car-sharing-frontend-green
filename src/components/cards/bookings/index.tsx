import { ReactElement, useEffect, useState } from "react"
import { useLoggedInUserContext } from "../../layout"
import { BookingDto } from "../../../util/api"
import { apiGet } from "../../../api"
import Title from "../../ui/Title"
import BookingsItem from "./Item"
import { useCarDetails } from "../../../hooks"
import Loading from "../../ui/Loading"
import NotFound from "../../../pages/404"

const Bookings = (): ReactElement => {
  const { loggedInUserId } = useLoggedInUserContext()
  const [myBookings, setMyBookings] = useState<BookingDto[]>([])
  const { carsData, isLoading, isError } = useCarDetails()
  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const data = await apiGet("bookings")
        const myBookings = data.data.filter(
          (booking: BookingDto) =>
            booking.renterId === loggedInUserId && booking.state !== "PICKED_UP",
        )
        setMyBookings(myBookings)
      } catch (error) {
        console.error("Error fetching bookings:", error)
      }
    }
    fetchMyBookings()
  }, [loggedInUserId])

  if (isLoading) return <Loading />
  if (isError) return <NotFound />

  return (
    <>
      <Title text="My Bookings" />
      <div className="divide-y">
        {myBookings.length > 0 &&
          myBookings.map(booking => (
            <div key={booking.id}>
              <BookingsItem
                isOwnerView={false}
                car={
                  carsData?.find(car => car.id === booking.carId) ?? {
                    id: 0,
                    carImage: "",
                    carName: "",
                  }
                }
                booking={{
                  owner: carsData?.find(car => car.id === booking.carId)?.carOwner,
                  startDate: booking.startDate.toString(),
                  endDate: booking.endDate.toString(),
                  state: booking.state,
                  id: booking.id,
                }}
              />
            </div>
          ))}
      </div>
    </>
  )
}

export default Bookings
