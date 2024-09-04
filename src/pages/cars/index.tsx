import { ReactElement } from "react"
import { CarIcon, IconWithLabel, ProfileIcon } from "../../assets"
import { Link } from "react-router-dom"
import { useCarDetails } from "../../hooks"
import NotFound from "../404"
import Loading from "../../components/ui/Loading"
import Title from "../../components/ui/Title"

const CarListing = (): ReactElement => {
  const { carsData, isLoading, isError } = useCarDetails()

  if (isLoading) return <Loading />
  if (isError) return <NotFound />

  return (
    <section className="py-1">
      <Title text="All Cars" backButton />
      {carsData?.map(car => (
        <div key={car.id} className="mx-auto my-4 w-11/12 rounded-xl bg-primary-400 py-4">
          <div className="flex h-64 gap-2">
            <div className="w-72">
              {car && (
                <img
                  src={car.carImage}
                  className="h-full w-full rotate-3 scale-105"
                  alt={car.carName}
                />
              )}
            </div>
            <div className="mr-7 mt-4 border-spacing-y-4 space-y-4 text-secondary-200">
              <h2 className="font-lora text-xl font-medium">{car.carName}</h2>
              <div className="space-y-2 truncate">
                <IconWithLabel icon={<ProfileIcon />} text={car.carOwner} />
                <IconWithLabel icon={<CarIcon />} text={car.carName.split(" ")[1] || ""} />
                <div className="pt-8">
                  <Link
                    to={`${car.id}`}
                    className="mt-7 font-inter text-base font-bold text-mustard-200"
                  >
                    Show details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CarListing
