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
    <>
      {car.map(car => (
        <div
          key={car.id}
          className=" mt-20 flex flex-col justify-center gap-10 md:flex-row md:items-center md:text-center lg:mt-20"
        >
          <img
            className="md:-py-0 -mt-20 scale-[1.05] md:-ml-40 md:-mt-64 md:scale-75"
            src={car.carImage ?? ""}
            alt="My car"
          />
          <div className="px-12 text-white md:-ml-40 lg:-mt-56 lg:p-12">
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
    </>
  )
}
export default Details
