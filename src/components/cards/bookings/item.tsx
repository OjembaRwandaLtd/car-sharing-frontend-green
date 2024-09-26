import { ReactElement } from "react"
import { CalendarIcon, TimeIcon } from "../../../assets"
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
      <div>
        <div className="">
          <img src={car.carImage} alt={car.carName} />
        </div>
        <div className="text-white">
          <h2>{car.carName}</h2>
          <p>
            Requested by <span>{booking.renter}</span>
          </p>
          <div className="flex justify-between">
            <div>
              <span>from</span>
              <p>
                <CalendarIcon />
                <span>{startDate}</span>
              </p>
              <p>
                <TimeIcon />
                <span>{startTime}</span>
              </p>
            </div>
            <div>
              <span>to</span>
              <p>
                <CalendarIcon />
                <span>{endDate}</span>
              </p>
              <p>
                <TimeIcon />
                <span>{endTime}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bookings
