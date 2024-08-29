import { ReactElement } from "react"
import { useCars, useCarTypes } from "../hooks"

const CarItem = (): ReactElement => {
  const [{ data: carType, loading, error }] = useCarTypes()
  const [{ data: carData }] = useCars()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  // const carDetail = carType?.map(type => type.id)
  // const carOwner = carData?.map(owners => owners.id)

  // const { id } = carOwner
  const allData =
    carType &&
    carType.map(info => {
      const ids = carData && carData?.find(data => data.id === info.id)

      return {
        ...info,
        car: ids ? ids.name : "",
      }
    })

  return (
    <p>{JSON.stringify(allData, null, 2)}</p>
    // <section className="h-screen bg-primary-800">
    //   <div className=" mx-auto flex  h-64 w-96 gap-2 rounded-xl bg-primary-400">
    //     <div className="w-96">
    //       {carType && <img src={`${carType[0].imageUrl}`} className="h-full w-full scale-125" />}
    //     </div>
    //     <div className="text-secondary-200">
    //       {carType && <h2 className="font-lora text-xl font-medium">{`${carType[0].name}`}</h2>}
    //       <IconWithLabel
    //         icon={<ProfileIcon className="" />}
    //         text={`${carData && carData[0].name.split("'")[0]}`}
    //       />
    //       <IconWithLabel icon={<CarIcon className=" " />} text={`${carType && carType[0].name}`} />
    //     </div>
    //   </div>
    // </section>
  )
}

export default CarItem
