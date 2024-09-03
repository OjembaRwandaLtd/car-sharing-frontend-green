import { useParams } from "react-router-dom"
import CarIcon from "../assets/CarIcon"
import { ReactElement } from "react"
import FuelIcon from "../assets/FuelIcon"
import HorseIcon from "../assets/HorseIcon"
import LicensePlateIcon from "../assets/LicensePlateIcon"
import ProfileIcon from "../assets/ProfileIcon"
import WarningIcon from "../assets/WarningIcon"
import { useCarTypes, useCars } from "../hooks"
import IconWithLabel from "./ui/IconWithLabel"
import Loading from "./ui/Loading"
import NotFound from "../pages/404"
const CarFeatures = (): ReactElement => {
  const { carId } = useParams()

  const [{ data: carTypeData, loading: carTypeLoading }] = useCarTypes()
  const [{ data: carDetails, loading: carLoading, error: carError }] = useCars()

  if (carTypeLoading || carLoading) return <Loading />

  if (carError) return <NotFound />
  return (
    <div className="h-screen overflow-x-hidden bg-primary-800">
      {carDetails && carDetails.filter(car => car.id === Number(carId)).length > 0 ? (
        carDetails
          .filter(car => car.id === Number(carId))
          .map(car => (
            <div key={car.id} className="flex h-screen flex-col">
              <img
                className="-mt-20 scale-[1.05]"
                src={carTypeData?.filter(item => item.id === car.carTypeId)[0].imageUrl ?? ""}
                alt="My car"
              />
              <div className="px-12 text-white">
                <h2 className="-mt-16 py-8 font-lora text-2xl font-medium">
                  {carTypeData?.filter(item => item.id === car.carTypeId)[0].name ?? ""}
                </h2>
                <div>
                  <IconWithLabel icon={<ProfileIcon />} text={`${car.name}`} />
                  <IconWithLabel icon={<CarIcon />} text={`${car.name.split(" ")[1]}`} />
                  {car.licensePlate && (
                    <IconWithLabel icon={<LicensePlateIcon />} text={`${car.licensePlate}`} />
                  )}
                  {car.horsepower && (
                    <IconWithLabel icon={<HorseIcon />} text={`${car.horsepower}hp`} />
                  )}
                  {car.fuelType && <IconWithLabel icon={<FuelIcon />} text={`${car.fuelType}`} />}
                  {car.info && <IconWithLabel icon={<WarningIcon />} text={`${car.info}`} bold />}
                </div>
              </div>
            </div>
          ))
      ) : (
        <NotFound />
      )}
    </div>
  )
}
export default CarFeatures
