import useCarTypes from "./useCarTypes"
import useCars from "./useCars"

const useCarDetails = () => {
  const [{ data: carTypes = [], loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()

  const isLoading = carTypesLoading || carsLoading
  const isError = carTypesError || carsError

  return {
    carsData: cars?.map(car => ({
      id: car.id,
      carImage: carTypes?.find(carType => carType.id === car.carTypeId)?.imageUrl ?? "",
      carName: carTypes?.find(carType => carType.id === car.carTypeId)?.name ?? "",
    })),
    isLoading,
    isError,
  }
}

export default useCarDetails
