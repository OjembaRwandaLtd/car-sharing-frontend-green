import CarIcon from "../assets/CarIcon"
import FuelIcon from "../assets/FuelIcon"
import HorseIcon from "../assets/HorseIcon"
import LicensePlateIcon from "../assets/LicensePlateIcon"
import ProfileIcon from "../assets/ProfileIcon"
import { useCarTypes, useCars } from "../hooks"
import IconWithLabel from "./IconWithLabel"

const CarDetails: React.FC = () => {
  const [{ data: carTypeData, loading: carTypeLoading, error: carTypeError }] = useCarTypes()
  const [{ data: carDetails }] = useCars()

  if (carTypeLoading) return <p>Loading...</p>
  if (carTypeError) return <p>Error!</p>
  return (
    <div>
      {carTypeData && (
        <div className="flex h-screen flex-col">
          <img className="-mt-20 scale-[1.05]" src={carTypeData[2].imageUrl} alt="My car" />
          <div className="px-12 text-white">
            <h2>{carTypeData[2].name}</h2>
            {carDetails &&
              carDetails
                .filter(car => car.id === carTypeData[2].id)
                .map(car => (
                  <div key={car.id}>
                    <IconWithLabel icon={<ProfileIcon />} text={`${car.name.split("'")[0]}`} />
                    <IconWithLabel
                      icon={<CarIcon />}
                      text={`${carTypeData[2].name.split(" ")[1]}`}
                    />
                    <IconWithLabel icon={<LicensePlateIcon />} text={`${car.licensePlate}`} />
                    <IconWithLabel icon={<HorseIcon />} text={`${car.horsepower}hp`} />
                    <IconWithLabel icon={<FuelIcon />} text={`${car.fuelType}`} />
                  </div>
                ))}
            <pre className="text-black">{JSON.stringify(carData, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarDetails
