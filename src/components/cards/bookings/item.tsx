import { ReactElement } from "react"
import { CalendarIcon, IconWithLabel, TimeIcon } from "../../../assets"
import useFormatDate from "../../../hooks/useFormatDate"
import Button from "../../ui/Button"
import { BookingProps } from "../../../util/props/bookings"

const BookingsItem = ({
  car,
  booking,
  isOwnerView,
  button,
  buttonText,
  handleClick,
}: BookingProps): ReactElement => {
  const { date: startDate, time: startTime } = useFormatDate(booking.startDate)
  const { date: endDate, time: endTime } = useFormatDate(booking.endDate)
  const displayText = isOwnerView ? `Requested by ${booking.renter}` : `Owned by ${booking.owner}`
  const displayMessage =
    booking.state === "PENDING" ? (
      <p className="text-Lachs">Booking request pending.</p>
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
    <div className="md:my-4 md:grid md:grid-cols-3 md:gap-5 md:rounded-xl md:bg-primary-400 md:py-2">
      <div className="mx-auto w-52 scale-105 md:col-span-1">
        <img src={car.carImage} alt={car.carName} />
      </div>
      <div className="mx-5 text-white md:col-span-2 ">
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
    </div>
  )
}
export default BookingsItem
