import { ReactElement } from "react"
import Title from "../../components/ui/Title"
import ManageBookings from "../../components/cards/Bookings/Manage"

const Manage = (): ReactElement => (
  <>
    <div className="truncate">
      <Title text="MANAGE BOOKINGS" backButton />
    </div>
    <ManageBookings button />
  </>
)

export default Manage
