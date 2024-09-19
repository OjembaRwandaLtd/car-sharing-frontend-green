import { ReactElement } from "react"
import { Link } from "react-router-dom"
import { CarIcon, IconWithLabel, ProfileIcon } from "../../../assets"
import Button from "../../ui/Button"

interface Props {
  car: {
    id: number
    carImage: string
    carName: string
    carOwner: string
  }
  deleteButton?: boolean
  bookButton?: boolean
  handleDelete?: () => void
}

const Item = ({ car, deleteButton, bookButton, handleDelete }: Props): ReactElement => (
  <div
    key={car.id}
    className="car-item mx-auto my-4 flex w-11/12 flex-col gap-3 rounded-xl bg-primary-400 p-2 py-4"
  >
    <div className="flex h-64 gap-2 lg:justify-center lg:gap-32">
      <div className="w-72">
        {car && (
          <img src={car.carImage} className="h-full w-full rotate-3 scale-105" alt={car.carName} />
        )}
      </div>
      <div className="mr-7 mt-4 border-spacing-y-4 space-y-4 text-secondary-200">
        <h2 className="font-lora text-xl font-medium">
          {car.carName.split(" ").slice(1).join(" ")}
        </h2>
        <div className="space-y-2">
          <IconWithLabel icon={<ProfileIcon />} text={car.carOwner} />
          <IconWithLabel icon={<CarIcon />} text={car.carName.split(" ")[1] || ""} />
          <div className="py-8">
            <Link to={`${car.id}`} className="my-7 font-inter text-base font-bold text-mustard-200">
              Show details
            </Link>
          </div>
        </div>
      </div>
    </div>
    {deleteButton && <Button value="Delete Car" type="outlineLachs" handleClick={handleDelete} />}{" "}
    {bookButton && <Button value="Book Car" />}
  </div>
)

export default Item
