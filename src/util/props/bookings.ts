import { Dayjs } from "dayjs"
import { BookedCar, BookingState, BookingWithReferences } from "../api"

export interface BookingProps {
  car: BookedCar
  booking: BookingWithReferences
  isOwnerView: boolean
}

export interface ManageBookingProps {
  id: number
  carId: number
  car: {
    ownerId: number
  }
  renter: {
    name: string
  }
  startDate: Date
  endDate: Date
  state?: string
}

export interface BookingStatusProps {
  state: BookingState
  startDate: Dayjs
  endDate: Dayjs
  bookingId: number
}
