// import { useState } from "react"
import ManageBookings from "../../components/cards/bookings"
import Title from "../../components/ui/Title"

const manage = () => (
  // const [isAccepted, setIsAccepted] = useState(true)

  // const handleAccept = () => {
  //   setIsAccepted(prev => !prev)
  // }
  <>
    <div className="truncate">
      <Title text="MANAGE BOOKINGS" backButton />
    </div>
    <ManageBookings />
    {/* {isAccepted ? (
        <span>Booking Accepted</span>
      ) : (
        <Button value="Accept" handleClick={handleAccept} />
      )} */}
  </>
)

export default manage
