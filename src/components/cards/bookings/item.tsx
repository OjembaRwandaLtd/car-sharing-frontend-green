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
    <div className="mb-">
      <div className="mx-auto w-52 scale-105">
        <img src={car.carImage} alt={car.carName} />
      </div>
      <div className="ml-5 text-white">
        <h2 className="text-2xl">{car.carName}</h2>
        <p className="text-lg">
          Requested by <span>{booking.renter}</span>
        </p>
        <div className="mt-7 flex gap-9 font-light text-secondary-200">
          <div>
            <span className="mb- text-lg">from</span>
            <IconWithLabel icon={<CalendarIcon />} text={startDate} light />
            <IconWithLabel icon={<TimeIcon />} text={startTime} light />
          </div>
          <div className="text-lg">
            <span>to</span>
            <IconWithLabel icon={<CalendarIcon />} text={endDate} light />
            <IconWithLabel icon={<TimeIcon />} text={endTime} light />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bookings
