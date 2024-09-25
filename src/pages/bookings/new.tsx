import { ReactElement } from "react"
import BookCar from "../../components/forms/BookCar"
import { TimeProvider } from "../../hooks/useCalendarContext"

const NewBooking = (): ReactElement => (
  <TimeProvider>
    <BookCar />
  </TimeProvider>
)

export default NewBooking
