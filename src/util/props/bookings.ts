import { Dayjs } from "dayjs"
import { BookingState } from "../api"

export interface BookingProps {
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
    id?: number
  }
  isOwnerView: boolean
}

export interface BookingStatusProps {
  state: BookingState
  startDate: Dayjs
  endDate: Dayjs
  bookingId: number
}
