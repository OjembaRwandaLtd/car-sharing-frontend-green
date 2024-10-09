import { ReactElement } from "react"
import { CalendarIcon, IconWithLabel, TimeIcon } from "../../../assets"
import useFormatDate from "../../../hooks/useFormatDate"
import { BookingProps } from "../../../util/props/bookings"
import dayjs from "dayjs"
import BookingStatus from "./status/index"

const BookingsItem = ({ car, booking, isOwnerView }: BookingProps): ReactElement => {
  const { date: startDate, time: startTime } = useFormatDate(booking?.startDate ?? new Date())
  const { date: endDate, time: endTime } = useFormatDate(booking?.endDate ?? new Date())
  const displayText = isOwnerView
    ? `Requested by ${booking?.renter?.name}`
    : `Owned by ${car.carOwner}`

  return (
    <div className="md:mx-auto md:my-4 md:grid md:w-11/12 md:grid-cols-3 md:gap-5 md:rounded-xl md:py-2">
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
        <div>
          {booking.state && (
            <BookingStatus
              state={booking.state}
              startDate={dayjs(startDate)}
              endDate={dayjs(endDate)}
              bookingId={booking.id ?? 0}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default BookingsItem
