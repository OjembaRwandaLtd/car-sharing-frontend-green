import useAxios from "axios-hooks"
import { useEffect, useState } from "react"
import { BookingDto, BookingWithReferences, CarDto, UserDto } from "../util/api"
import { apiUrl } from "../util/apiUrl"
import { getAuthToken } from "../util/auth"
import { getAllUsers } from "../api/user"
import { getAllCars } from "../api/car"

function useBookingData() {
  const [data, setData] = useState<BookingWithReferences[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)
  const token = getAuthToken()

  const [{ data: bookingsData, loading: bookingsLoading, error: bookingsError }] = useAxios<
    BookingDto[]
  >({
    url: `${apiUrl}/bookings`,
    headers: { Authorization: `Bearer ${token}` },
  })

  useEffect(() => {
    if (bookingsData) {
      setLoading(true)
      setError(null)

      const filterCarAndUser = async (booking: BookingDto, users: UserDto[], cars: CarDto[]) => {
        const renterData = users.find(user => user.id === booking.renterId)

        const carData = cars.find(car => car.id === booking.carId)

        const userData = users.find(user => user.id === carData?.ownerId)

        const bookingWithDetails = {
          ...booking,
          car: {
            ...carData,
            owner: userData,
          },
          renter: renterData,
        }

        return bookingWithDetails
      }

      const fetchAllData = async () => {
        try {
          const [users, cars] = await Promise.all([getAllUsers(), getAllCars()])

          const bookingPromises = bookingsData.map((booking: BookingDto) =>
            filterCarAndUser(booking, users, cars),
          )
          const bookingDetails = await Promise.all(bookingPromises)
          setData(bookingDetails as BookingWithReferences[])
          setLoading(false)
        } catch (err) {
          setError(err)
          setLoading(false)
        }
      }
      fetchAllData()
    } else if (bookingsError) {
      setError(bookingsError)
      setLoading(false)
    }
  }, [bookingsData, bookingsError])

  const isLoading = bookingsLoading || loading

  return { data, loading: isLoading, error }
}

export default useBookingData
