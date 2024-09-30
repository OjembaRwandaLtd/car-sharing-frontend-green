import { ReactElement } from "react"
import { CalendarIcon, IconWithLabel, TimeIcon } from "../../../assets"
import useFormatDate from "../../../hooks/useFormatDate"
import { BookingState } from "../../../util/api"
import Button from "../../ui/Button"

interface bookingProps {
  car: {
    id: number
    carImage: string
    carName: string
  }
  booking: {
    renter?: string
    owner?: string
    startDate: string
    endDate: string
    state?: BookingState
  }
  isOwnerView: boolean
  button?: boolean
  buttonText?: string
  handleClick?: () => void
}

const BookingsItem = ({
  car,
  booking,
  isOwnerView,
  button,
  buttonText,
  handleClick,
}: bookingProps): ReactElement => {
  const { date: startDate, time: startTime } = useFormatDate(booking.startDate)
  const { date: endDate, time: endTime } = useFormatDate(booking.endDate)

  const displayText = isOwnerView ? `Requested by ${booking.renter}` : `Owned by ${booking.owner}`
  const displayMessage =
    booking.state === "PENDING" ? (
      <p className="text-Lachs  ">Booking request pending.</p>
    ) : booking.state === "ACCEPTED" ? (
      <div className="flex flex-col gap-2">
        <p className="text-mustard-800">Booking accepted</p>
        <span className="flex flex-col text-Lachs">
          You can not pick up the car
          <span>before the agreed time.</span>
        </span>
      </div>
    ) : booking.state === "DECLINED" ? (
      <p className="text-mustard-800">Booking was declined.</p>
    ) : (
      <p className="text-mustard-800">Car was returned.</p>
    )

  return (
    <>
      <div className="mx-auto w-52 scale-105">
        <img src={car.carImage} alt={car.carName} />
      </div>
      <div className="mx-5 text-white">
        <h2 className="text-2xl">{car.carName}</h2>
        <p className="text-lg">{displayText}</p>
        <div className="mt-7 flex gap-9 font-light text-secondary-200">
          <div>
            <span className="text-lg">from</span>
            <IconWithLabel icon={<CalendarIcon />} text={startDate} light />
            <IconWithLabel icon={<TimeIcon />} text={startTime} light />
          </div>
          <div className="text-lg">
            <span>to</span>
            <IconWithLabel icon={<CalendarIcon />} text={endDate} light />
            <IconWithLabel icon={<TimeIcon />} text={endTime} light />
          </div>
        </div>
        <div className="mb-8 font-inter text-sm">{booking.state && displayMessage}</div>
        <div>{button && <Button value={buttonText ?? "Pick Up"} handleClick={handleClick} />}</div>
      </div>
    </>
  )
}
export default BookingsItem
