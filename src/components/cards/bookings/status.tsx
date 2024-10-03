import { useState } from "react"
import Button from "../../ui/Button"
import { apiPatch } from "../../../api"

interface StatusProps {
  bookingId: number
  state: string
}

const Status = ({ bookingId, state }: StatusProps) => {
  const [bookingStatus, setBookingStatus] = useState(state)

  const handleBookingStatus = async (status: string) => {
    try {
      await apiPatch(`bookings`, bookingId, { state: status })
      setBookingStatus(status)
    } catch (error) {
      console.error(error)
    }
  }
  const handleStatus = (status: string) => {
    if (status === "ACCEPTED" || status === "PICKED_UP") return "Booking Accepted"
    if (status === "DECLINED") return "Booking Declined"
    return (
      <div className="flex flex-col gap-3">
        <Button value="Accept" handleClick={() => handleBookingStatus("ACCEPTED")} />
        <Button
          type="outline"
          value="Decline"
          handleClick={() => handleBookingStatus("DECLINED")}
        />
      </div>
    )
  }
  return (
    <div className="mb-10 ml-5 mt-2 font-inter text-sm text-mustard-800">
      <p>{handleStatus(bookingStatus)}</p>
    </div>
  )
}

export default Status
