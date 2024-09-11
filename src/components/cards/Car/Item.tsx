import { ReactElement } from "react"
import { Link } from "react-router-dom"
import { CarIcon, IconWithLabel, ProfileIcon } from "../../../assets"

interface Props {
  car: {
    id: number
    carImage: string
    carName: string
    carOwner: string
  }
}

const Item = ({ car }: Props): ReactElement => (
  <div key={car.id} className="mx-auto my-4 w-11/12 rounded-xl bg-primary-400 py-4">
    <div className="flex h-64 gap-2">
      <div className="w-72">
        {car && (
          <img src={car.carImage} className="h-full w-full rotate-3 scale-105" alt={car.carName} />
        )}
      </div>
      <div className="mr-7 mt-4 border-spacing-y-4 space-y-4 text-secondary-200">
        <h2 className="font-lora text-xl font-medium">{car.carName}</h2>
        <div className="space-y-2 truncate">
          <IconWithLabel icon={<ProfileIcon />} text={car.carOwner} />
          <IconWithLabel icon={<CarIcon />} text={car.carName.split(" ")[1] || ""} />
          <div className="pt-8">
            <Link to={`${car.id}`} className="mt-7 font-inter text-base font-bold text-mustard-200">
              Show details
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Item
