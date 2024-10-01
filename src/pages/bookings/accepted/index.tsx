import ManageBookings from "../../../components/cards/bookings"
import Button from "../../../components/ui/Button"
import Title from "../../../components/ui/Title"

const Booking = () => (
  <>
    <Title text="My Booking" />
    <ManageBookings />
    <Button value="Pick up" />
  </>
)

export default Booking
