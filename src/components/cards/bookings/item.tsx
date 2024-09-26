import { ReactElement } from "react"

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

const Bookings = ({ car, booking }: bookingProps): ReactElement => (
  <div>
    <div>
      <div>
        <img src={car.carImage} alt={car.carName} />
      </div>
      <div>
        <h2>{car.carName}</h2>
        <div>
          <p>{booking.renter}</p>
          <p>{booking.startDate}</p>
          <p>{booking.endDate}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Bookings
