import { ReactElement } from "react"
import { CalendarIcon, IconWithLabel, TimeIcon } from "../../../assets"
import useFormatDate from "../../../hooks/useFormatDate"

interface bookingProps {
  car: {
    id: number
    carImage: string
    carName: string
  }
  booking: {
    renter: string
    startDate: string
    endDate: string
  }
}

const Bookings = ({ car, booking }: bookingProps): ReactElement => {
  const { date: startDate, time: startTime } = useFormatDate(booking.startDate)
  const { date: endDate, time: endTime } = useFormatDate(booking.endDate)

  return (
    <div>
      <div className="mx-auto w-72 scale-105">
        <img src={car.carImage} alt={car.carName} />
      </div>
      <div className="text-white">
        <h2 className="text-2xl">{car.carName}</h2>
        <p className="py-2 text-lg">
          Requested by <span>{booking.renter}</span>
        </p>
        <div className="flex justify-between">
          <div>
            <span className="text-lg">from</span>
            <IconWithLabel icon={<CalendarIcon />} text={startDate} />
            <IconWithLabel icon={<TimeIcon />} text={startTime} />
          </div>
          <div className="text-lg">
            <span>to</span>
            <IconWithLabel icon={<CalendarIcon />} text={endDate} />
            <IconWithLabel icon={<TimeIcon />} text={endTime} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bookings
