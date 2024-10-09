import { ReactElement, useCallback, useEffect, useMemo, useState } from "react"
import { BookingState } from "../../../../util/api"
import StatusWrapper from "./Wrapper"
import Button from "../../../ui/Button"
import { apiPatch } from "../../../../api"
import { BookingStatusProps } from "../../../../util/props/bookings"
import useDateBetween from "../../../../hooks/useDateBetween"

const BookingStatus = ({
  state,
  bookingId,
  startDate,
  endDate,
}: BookingStatusProps): ReactElement => {
  const [bookingState, setBookingState] = useState<BookingState>(state)
  const [locked, setLocked] = useState<boolean>(false)
  const [isUsingCar, setIsUsingCar] = useState<boolean>(false)
  const [displayMessage, setDisplayMessage] = useState<ReactElement | null>(null)

  const handlePickUp = useCallback(async () => {
    await apiPatch("bookings", bookingId, { state: BookingState.PICKED_UP })
    setBookingState(BookingState.PICKED_UP)
  }, [bookingId])
  const handleReturn = useCallback(async () => {
    await apiPatch("bookings", bookingId, { state: BookingState.RETURNED })
    setBookingState(BookingState.RETURNED)
  }, [bookingId])
  const showPickUp = useMemo(
    () =>
      useDateBetween(startDate, endDate) ? (
        <Button text="Pick up car" onClick={handlePickUp} />
      ) : (
        <span className="flex flex-col text-Lachs">
          You can not pick up the car
          <span>before the agreed time.</span>
        </span>
      ),
    [startDate, endDate, handlePickUp],
  )
  const acceptedStatus = useMemo(
    () => <StatusWrapper title="Booking accepted">{showPickUp}</StatusWrapper>,
    [showPickUp],
  )
  const pickedUpStatus = useMemo(
    () => (
      <StatusWrapper title="Car picked up.">
        {!isUsingCar && <Button text="Use Car" onClick={() => setIsUsingCar(true)} />}
        {isUsingCar && (
          <>
            <Button
              text="Unlock"
              type={locked ? "outline" : "disabled"}
              onClick={() => setLocked(false)}
            />
            <Button
              text="Lock"
              type={locked ? "disabled" : "outline"}
              onClick={() => setLocked(true)}
            />
          </>
        )}
        <Button text="Return" type="outline" onClick={handleReturn} />
      </StatusWrapper>
    ),
    [isUsingCar, locked, handleReturn],
  )

  const initializeDisplayMessage = useCallback(() => {
    switch (bookingState) {
      case BookingState.PENDING:
        return <p className="text-Lachs">Booking request pending.</p>
      case BookingState.ACCEPTED:
        return acceptedStatus
      case BookingState.PICKED_UP:
        return pickedUpStatus
      case BookingState.DECLINED:
        return <p className="text-mustard-800">Booking was declined.</p>
      default:
        return <p className="text-mustard-800">Car was returned.</p>
    }
  }, [bookingState, acceptedStatus, pickedUpStatus])

  useEffect(() => {
    setDisplayMessage(initializeDisplayMessage())
  }, [bookingState, initializeDisplayMessage])

  return <div className="mb-8 font-inter text-sm">{displayMessage}</div>
}

export default BookingStatus
