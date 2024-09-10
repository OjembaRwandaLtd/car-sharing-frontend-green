import { ReactElement, useRef } from "react"
import Title from "../../components/ui/Title"
import InputField from "../../components/ui/InputField"
import Button from "../../components/ui/Button"
import { useCarDetails, useCarTypes } from "../../hooks"
import { ProfileIcon } from "../../assets"
import Loading from "../../components/ui/Loading"
import NotFound from "../404"

const AddNewCar: React.FC = (): ReactElement => {
  // Create form reference
  const form = useRef<HTMLFormElement>(null)

  // Reset form handler
  const resetForm = () => {
    if (form.current) {
      console.log(form.current)
    }
  }

  const cartypes = useCarTypes()
  const carTypeDropdownData = cartypes[0]?.data?.reduce((a: string[], b) => {
    a.push(b.name)
    return a
  }, []) || [""]

  const { carsData, isLoading, isError } = useCarDetails()
  const fueltypeDropdownData = [
    ...new Set(
      carsData?.reduce((a: string[], b) => {
        a.push(b.fuelType)
        return a
      }, []),
    ),
  ]

  if (isLoading) return <Loading />
  if (isError) return <NotFound />

  return (
    <form className="flex flex-col items-center px-3 pb-5" ref={form}>
      <Title text="New Car" />
      <InputField
        icon={<ProfileIcon className="text-white" />}
        title={"Name"}
        name={"name"}
        placeholder={"e.g. My Nice Moni Car"}
      />
      <InputField
        title={"Type"}
        placeholder={"Moni Cooper"}
        dropdownData={carTypeDropdownData}
        name={"type"}
      />
      <div className="flex gap-1">
        <InputField title={"License Plate"} placeholder={"e.g. M-XY 123"} name={"license_plate"} />
        <InputField title={"Horse Power"} placeholder={"110"} name={"horse_power"} />
      </div>
      <InputField
        title={"Fuel type"}
        placeholder={"e.g. Gasoline"}
        name={"fuel_type"}
        dropdownData={fueltypeDropdownData}
      />
      <InputField
        title={"Additional Information"}
        placeholder={"e.g. No smoking"}
        name={"additional_data"}
      />
      <div className="mt-32 flex gap-1">
        <Button width="regular" value="Cancel" type="outline" handleClick={resetForm} />
        <Button width="regular" value="Add Car" />
      </div>
      <input type="reset" value="Reset" />
    </form>
  )
}

export default AddNewCar
