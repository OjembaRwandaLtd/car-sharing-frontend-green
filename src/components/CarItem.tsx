import { ReactElement } from "react"
import { useCars, useCarTypes } from "../hooks"
import IconWithLabel from "./IconWithLabel"
import ProfileIcon from "../assets/ProfileIcon"
import CarIcon from "../assets/CarIcon"

const CarItem = (): ReactElement => {
  const [{ data: carTypes, loading, error }] = useCarTypes()
  const [{ data: cars }] = useCars()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const getCarType = (carTypeId: number) => carTypes?.find(item => item.id === carTypeId)

  return (
    <section className="h-full bg-primary-800 pt-10">
      {cars?.map(car => {
        const carType = getCarType(car.carTypeId)
        return (
          <div
            key={car.id}
            className="mx-auto my-4 flex h-64 w-11/12 gap-2 rounded-xl bg-primary-400"
          >
            <div className="w-72">
              {carType && (
                <img
                  src={carType.imageUrl}
                  className="h-full w-full rotate-3 scale-105"
                  alt={carType.name}
                />
              )}
            </div>
            <div className="mr-7 mt-4 border-spacing-y-4 space-y-4 text-secondary-200">
              <h2 className="font-lora text-xl font-medium">{carType?.name}</h2>
              <div className="space-y-2">
                <IconWithLabel icon={<ProfileIcon />} text={car.name.split("'")[0]} />
                <IconWithLabel icon={<CarIcon />} text={carType?.name.split(" ")[1] || ""} />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default CarItem
