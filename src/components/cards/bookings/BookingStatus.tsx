import { ReactElement, useEffect, useState, useMemo, useCallback } from "react"
import Button from "../../ui/Button"
import dayjs from "dayjs"
import { apiPatch } from "../../../api"
import isBetween from "dayjs/plugin/isBetween"
import { BookingStatusProps } from "../../../util/props/bookings"
import { BookingState } from "../../../util/api"

dayjs.extend(isBetween)
const BookingStatus = ({
  state,
  startDate,
  endDate,
  bookingId,
}: BookingStatusProps): ReactElement => {
  const [displayMessage, setDisplayMessage] = useState<ReactElement | null>(null)
  const [bookingState, setBookingState] = useState<BookingState>(state)
  const [lockCar, setLockCar] = useState<boolean>(true)

  const handlePickUp = useCallback(async () => {
    await apiPatch("bookings", bookingId, { state: BookingState.PICKED_UP })
    setBookingState(BookingState.PICKED_UP)
  }, [bookingId])

  const handleReturn = useCallback(async () => {
    await apiPatch("bookings", bookingId, { state: BookingState.RETURNED })
    setBookingState(BookingState.RETURNED)
  }, [bookingId])

  const handleUnlock = useCallback(() => {
    setLockCar(false)
    // setDisplayMessage(
    //   <div className="flex flex-col gap-2">
    //     <Button value="Unlock" type="disabled" />
    //     <Button value="Lock" type="outline" />
    //     <Button value="Return" type="outline" handleClick={handleReturn} />
    //   </div>,
    // )
  }, [])

  const handleUseCar = useCallback(() => {
    setDisplayMessage(
      <div className="flex flex-col gap-2">
        {lockCar ? (
          <>
            <Button value="Unlock" handleClick={handleUnlock} />
            <Button value="Lock" type="disabled" />
          </>
        ) : (
          <>
            <Button value="Unlock" type="disabled" />
            <Button value="Lock" type="outline" />
          </>
        )}
        <Button value="Return" type="outline" handleClick={handleReturn} />
      </div>,
    )
  }, [handleUnlock])

  const showPickUp = useMemo(
    () =>
      dayjs().isBetween(startDate, endDate) ? (
        <Button value="Pick up car" handleClick={handlePickUp} />
      ) : (
        <span className="flex flex-col text-Lachs">
          You can not pick up the car
          <span>before the agreed time.</span>
        </span>
      ),
    [startDate, endDate, handlePickUp],
  )
  const acceptedStatus = useMemo(
    () => (
      <div className="flex flex-col gap-2">
        <p className="text-mustard-800">Booking accepted</p>
        {showPickUp}
      </div>
    ),
    [showPickUp],
  )
  const pickedUpStatus = useMemo(
    () => (
      <div className="flex flex-col gap-2">
        <p className="text-mustard-800">Car picked up.</p>
        <Button value="Use Car" handleClick={handleUseCar} />
        <Button value="Return" type="outline" handleClick={handleReturn} />
      </div>
    ),
    [handleUseCar, handleReturn],
  )
  useEffect(() => {
    setDisplayMessage(
      bookingState === BookingState.PENDING ? (
        <p className="text-Lachs">Booking request pending.</p>
      ) : bookingState === BookingState.ACCEPTED ? (
        acceptedStatus
      ) : bookingState === BookingState.PICKED_UP ? (
        pickedUpStatus
      ) : bookingState === BookingState.DECLINED ? (
        <p className="text-mustard-800">Booking was declined.</p>
      ) : (
        <p className="text-mustard-800">Car was returned.</p>
      ),
    )
  }, [bookingState, acceptedStatus, pickedUpStatus])
  return <div className="mb-8 font-inter text-sm">{displayMessage}</div>
}

export default BookingStatus
