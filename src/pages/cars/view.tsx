import { ReactElement } from "react"
import { useParams } from "react-router-dom"
import Title from "../../components/ui/Title"
import { useCarDetails } from "../../hooks"
import {
  FuelIcon,
  HorseIcon,
  LicensePlateIcon,
  ProfileIcon,
  WarningIcon,
  CarIcon,
} from "../../assets"
import Loading from "../../components/ui/Loading"
import IconWithLabel from "../../components/ui/IconWithLabel"
import NotFound from "../404"

const CarDetails = (): ReactElement => {
  const { carId } = useParams()
  const { carsData, isLoading, isError } = useCarDetails()

  const car = carsData?.filter(car => car.id === Number(carId))

  if (isLoading) return <Loading />

  if (isError) return <NotFound />

  return (
    <>
      {car && car.length > 0 ? (
        <div className="h-screen overflow-x-hidden bg-primary-800">
          <Title text="Details" backButton />
          {car.map(car => (
            <div key={car.id} className="flex h-screen flex-col">
              <img className="-mt-20 scale-[1.05]" src={car.carImage ?? ""} alt="My car" />
              <div className="px-12 text-white">
                <h2 className="-mt-16 py-8 font-lora text-2xl font-medium">{car.carName ?? ""}</h2>
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
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default CarDetails
