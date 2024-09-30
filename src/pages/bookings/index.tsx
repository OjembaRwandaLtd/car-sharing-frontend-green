import { ReactElement, useEffect, useState } from "react"
import { apiGet } from "../../api"
import Title from "../../components/ui/Title"
import { useLoggedInUserContext } from "../../components/layout"
import { BookingDto } from "../../util/api"

const MyBookings = (): ReactElement => {
  const { loggedInUserId } = useLoggedInUserContext()
  const [bookings, setBookings] = useState<BookingDto[]>([])

  const fetchBookings = async () => {
    try {
      const data = await apiGet("bookings")
      const allBookings = data.data
      const myBookings = allBookings.filter(
        (booking: BookingDto) => booking.renterId === loggedInUserId,
      )
      console.log(myBookings)
      setBookings(myBookings)
    } catch (error) {
      console.error("Error fetching bookings:", error)
    }
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  // console.log(bookings)

  return (
    <>
      <Title text="My Bookings" />
      {bookings.length > 0 && (
        <ul className="flex flex-col gap-4 text-white">
          {bookings.map((booking, index) => (
            <li key={index}>{JSON.stringify(booking)}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MyBookings
