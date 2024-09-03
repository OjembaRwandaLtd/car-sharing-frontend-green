import useCarTypes from "./useCarTypes"
import useCars from "./useCars"

const useCarDetails = () => {
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()

  const isLoading = carTypesLoading || carsLoading
  const isError = carTypesError || carsError

  const getCarType = (carTypeId: number) => carTypes?.find(carType => carType.id === carTypeId)

  return {
    carsData: cars?.map(car => {
      const carType = getCarType(car.carTypeId)
      return {
        id: car.id,
        carImage: carType?.imageUrl ?? "",
        carName: carType?.name ?? "",
        carOwner: car.name,
        licensePlate: car.licensePlate,
        horsePower: car.horsepower,
        fuelType: car.fuelType,
        carInfo: car.info,
      }
    }),
    isLoading,
    isError,
  }
}

export default useCarDetails
