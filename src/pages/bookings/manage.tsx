import { ReactElement } from "react"
import ManageBookings from "../../components/cards/Bookings/Manage"
import Title from "../../components/ui/Title"

const Manage = (): ReactElement => (
  <>
    <div className="truncate">
      <Title text="MANAGE BOOKINGS" backButton />
    </div>
    <ManageBookings button />
  </>
)

export default Manage
