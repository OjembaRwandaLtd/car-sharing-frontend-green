import ManageBookings from "../../components/cards/bookings"
import Title from "../../components/ui/Title"

const manage = () => (
  <>
    <div className="truncate">
      <Title text="MANAGE BOOKINGS" backButton />
    </div>
    <ManageBookings button />
  </>
)

export default manage
