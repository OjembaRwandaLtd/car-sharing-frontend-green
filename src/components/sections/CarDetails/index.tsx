import { ReactElement } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../ui/Loading"
import NotFound from "../../../pages/404"
import {
  CarIcon,
  FuelIcon,
  HorseIcon,
  LicensePlateIcon,
  ProfileIcon,
  WarningIcon,
} from "../../../assets"
import IconWithLabel from "../../ui/IconWithLabel"
import { useCarDetails } from "../../../hooks"

const Details = (): ReactElement => {
  const { carId } = useParams()
  const { carsData, isLoading, isError } = useCarDetails()
  const car = carsData?.filter(car => car.id === Number(carId))

  if (isLoading) return <Loading />
  if (isError || !car?.length) return <NotFound />

  return (
    <div>
      {car.map(car => (
        <div
          key={car.id}
          className="flex flex-col md:mt-40 md:place-items-end md:gap-3 md:text-center lg:mt-28 lg:flex-row lg:items-center"
        >
          <div className="w-9/12">
            <img
              className=" md:-py-0 -mt-20 ml-14 scale-[1.05] md:-ml-20 md:-mt-64 md:scale-75 lg:scale-[0.7]"
              src={car.carImage ?? ""}
              alt="My car"
            />
          </div>
          <div className="px-12 text-white md:-ml-40 md:mt-16 lg:-mt-9 lg:p-12">
            <h2 className="-mt-16 py-8 font-lora text-2xl font-medium md:-mt-56 md:text-left md:text-5xl">
              {car.carName ?? ""}
            </h2>
            <div>
              <IconWithLabel icon={<ProfileIcon />} text={car.carOwner} />
              <IconWithLabel icon={<CarIcon />} text={car.carName} />
              {car.licensePlate && (
                <IconWithLabel icon={<LicensePlateIcon />} text={car.licensePlate} />
              )}
              {car.horsePower && (
                <IconWithLabel icon={<HorseIcon />} text={`${car.horsePower}hp`} />
              )}
              {car.fuelType && <IconWithLabel icon={<FuelIcon />} text={car.fuelType} />}
              {car.carInfo && <IconWithLabel icon={<WarningIcon />} text={car.carInfo} bold />}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Details
