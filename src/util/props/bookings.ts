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
