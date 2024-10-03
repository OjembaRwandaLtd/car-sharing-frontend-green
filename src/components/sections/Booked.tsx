import Loading from "../ui/Loading"
import NotFound from "../../pages/404"
import { useBookings, useCarDetails } from "../../hooks"
import useLoggedInUser from "../../hooks/useLoggedInUser"

const Booked = () => {
  const { data: bookingData, loading: bookingLoading, error: bookingError } = useBookings()
  const [{ response: loggedInUserObj }] = useLoggedInUser()
  const loggedInUserId = loggedInUserObj?.data?.id

  const { carsData, isLoading, isError } = useCarDetails()
  const loading = bookingLoading || isLoading
  const hasError = bookingError || isError

  if (loading) return <Loading />
  if (hasError) return <NotFound />
  const bookedCarIds = bookingData?.filter(booking => booking.renter.id === loggedInUserId)
  console.log(carsData)
  console.log(bookedCarIds)

  return <div> {JSON.stringify(bookedCarIds, null, 2)}</div>
}

export default Booked
