import { ReactElement, useState } from "react"
import Title from "../../components/ui/Title"
import InputField from "../../components/ui/InputField"
import Button from "../../components/ui/Button"
import { useCarDetails, useCarTypes } from "../../hooks"
import Loading from "../../components/ui/Loading"
import NotFound from "../404"

const AddNewCar: React.FC = (): ReactElement => {
  const INITIAL_FORM_VALUES = {
    name: "",
    type: "",
    license_plate: "",
    horse_power: "",
    fuel_type: "",
    additional_information: "",
  }
  const [form, setForm] = useState(INITIAL_FORM_VALUES)

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

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

  const formData = [
    { title: "Name", placeholder: "e.g. My Nice Moni Car", value: form.name },
    {
      title: "Type",
      placeholder: "e.g. Moni Cooper",
      value: form.type,
      dropdownData: carTypeDropdownData,
    },
    {
      title: "License Plate",
      placeholder: "e.g. M-XY 123",
      value: form.license_plate,
      span: true,
    },
    {
      title: "Horse Power",
      placeholder: "110",
      value: form.horse_power,
      span: true,
    },
    {
      title: "Fuel type",
      placeholder: "e.g. Gasoline",
      value: form.fuel_type,
      dropdownData: fueltypeDropdownData,
    },
    {
      title: "Additional information",
      placeholder: "e.g. No smoking",
      value: form.additional_information,
    },
  ]

  if (isLoading) return <Loading />
  if (isError) return <NotFound />

  return (
    <form className=" px-3 pb-5">
      <Title text="New Car" />
      <div className="grid grid-cols-2">
        {formData.map(el => (
          <InputField
            key={el.title}
            {...(el.span ? { span: el.span } : {})}
            title={el.title}
            value={el.value}
            name={el.title.toLowerCase().split(" ").join("_")}
            onChange={handleFormDataChange}
            setForm={setForm}
            placeholder={el.placeholder}
            {...(el.dropdownData ? { dropdownData: el.dropdownData } : {})}
          />
        ))}
      </div>
      <div className="mt-24 flex gap-1">
        <Button
          width="regular"
          value="Cancel"
          type="outline"
          handleClick={() => setForm(INITIAL_FORM_VALUES)}
        />
        <Button width="regular" value="Add Car" />
      </div>
    </form>
  )
}

export default AddNewCar
