import { ReactElement } from "react"
import { useCars, useCarTypes } from "../hooks"
import IconWithLabel from "./IconWithLabel"
import ProfileIcon from "../assets/ProfileIcon"
import CarIcon from "../assets/CarIcon"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
//import { Link } from "react-router-dom"

const CarListing = (): ReactElement => {
  const [{ data: carTypes, loading, error }] = useCarTypes()
  const [{ data: cars }] = useCars()
  const navigate = useNavigate()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const getCarType = (carTypeId: number) => carTypes?.find(item => item.id === carTypeId)
  const handleNavigation = () => navigate("/new-bookings")

  return (
    <section className="h-full bg-primary-800 pt-10">
      {cars?.map(car => {
        const carType = getCarType(car.carTypeId)
        return (
          <div key={car.id} className="mx-auto my-4 w-11/12 rounded-xl bg-primary-400 py-4">
            <div className="flex h-64 gap-2">
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
                  <p className="pt-7 font-inter text-sm font-bold text-mustard-200">Show details</p>
                  {/* <Link to={}>Show details</Link> */}
                </div>
              </div>
            </div>
            <Button value="Book Car" handleClick={handleNavigation} />
          </div>
        )
      })}
    </section>
  )
}

export default CarListing
