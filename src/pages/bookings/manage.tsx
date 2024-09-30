import { ReactElement } from "react"
import ManageBookings from "../../components/cards/bookings"
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
