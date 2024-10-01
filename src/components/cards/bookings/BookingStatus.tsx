import { ReactElement } from "react"
import Button from "../../ui/Button"
import dayjs, { Dayjs } from "dayjs"
import { apiPatch } from "../../../api"
import isBetween from "dayjs/plugin/isBetween"

interface BookingStatusProps {
  state: string
  startDate: Dayjs | null
  endDate: Dayjs | null
  bookingId: number
}

const BookingStatus = ({
  state,
  startDate,
  endDate,
  bookingId,
}: BookingStatusProps): ReactElement => {
  // const [showPickUpButton, setShowPickUpButton] = useState(true)
  dayjs.extend(isBetween)
  const handlePickUp = async () => await apiPatch("bookings", bookingId, { state: "PICKED_UP" })
  const showPickUp = dayjs().isBetween(startDate, endDate) ? (
    <Button value="Pick up car" handleClick={handlePickUp} />
  ) : (
    <span className="flex flex-col text-Lachs">
      You can not pick up the car
      <span>before the agreed time.</span>
    </span>
  )
  const acceptedStatus = (
    <div className="flex flex-col gap-2">
      <p className="text-mustard-800">Booking accepted</p>
      {showPickUp}
    </div>
  )
  const pickedUpStatus = (
    <div className="flex flex-col gap-2">
      <p className="text-mustard-800">Car picked up.</p>
      <Button value="Use Car" />
      <Button value="Return" />
    </div>
  )
  const displayMessage =
    state === "PENDING" ? (
      <p className="text-Lachs  ">Booking request pending.</p>
    ) : state === "ACCEPTED" ? (
      acceptedStatus
    ) : state === "PICKED_UP" ? (
      pickedUpStatus
    ) : state === "DECLINED" ? (
      <p className="text-mustard-800">Booking was declined.</p>
    ) : (
      <p className="text-mustard-800">Car was returned.</p>
    )
  return <div className="mb-8 font-inter text-sm">{displayMessage}</div>
}

export default BookingStatus
