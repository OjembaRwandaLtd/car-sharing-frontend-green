import { ReactElement } from "react"
import { useCars, useCarTypes } from "../hooks"
import IconWithLabel from "./IconWithLabel"
import ProfileIcon from "../assets/ProfileIcon"
import CarIcon from "../assets/CarIcon"

const CarItem = (): ReactElement => {
  const [{ data: carType, loading, error }] = useCarTypes()
  const [{ data: carData }] = useCars()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <section className="h-full bg-primary-800 pt-10">
      {carData &&
        carData.map(car => (
          <div
            key={car.id}
            className="mx-auto my-4 flex h-64 w-11/12 gap-2 rounded-xl bg-primary-400"
          >
            <div className="w-96">
              {carType && (
                <img
                  src={`${carType ? carType.find(item => item.id === car.carTypeId).imageUrl : ""}`}
                  className="h-full w-full scale-125"
                />
              )}
            </div>
            <div className="text-secondary-200">
              {carType && (
                <h2 className="font-lora text-xl font-medium">{`${
                  carType ? carType.find(item => item.id === car.carTypeId)?.name : ""
                }`}</h2>
              )}
              <IconWithLabel icon={<ProfileIcon />} text={`${car.name.split("'")[0]}`} />
              <IconWithLabel
                icon={<CarIcon />}
                text={`${
                  carType ? carType.find(item => item.id === car.carTypeId)?.name.split(" ")[1] : ""
                }`}
              />
            </div>
          </div>
        ))}
    </section>
  )
}

export default CarItem
