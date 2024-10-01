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
  return (
    <div className="mb-10 ml-5 mt-5 text-xl text-mustard-800">
      {bookingStatus === "ACCEPTED" ? (
        <span>Booking Accepted</span>
      ) : bookingStatus === "DECLINED" ? (
        <span>Booking Declined</span>
      ) : (
        <div className="flex flex-col gap-3">
          <Button value="Accept" handleClick={() => handleBookingStatus("ACCEPTED")} />
          <Button
            type="outline"
            value="Decline"
            handleClick={() => handleBookingStatus("DECLINED")}
          />
        </div>
      )}
    </div>
  )
}

export default Status
