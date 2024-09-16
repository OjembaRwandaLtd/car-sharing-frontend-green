import { INITIAL_FORM_VALUES, formFieldsData } from "../../../util/newCarData"
import InputField from "../../ui/InputField"
import { useCarDetails, useCarTypes } from "../../../hooks"
import Loading from "../../ui/Loading"
import NotFound from "../../../pages/404"
import { NewCarProps } from "../../../util/props/newCar"
import { useMemo } from "react"
import NewCarFormWrapper from "./Wrapper"

type CarFieldNames = "type" | "fuel_type"
const NewCarForm = ({
  form,
  setForm,
  handleFormDataChange,
  handleSubmit,
  isSubmitting,
}: NewCarProps) => {
  const carTypes = useCarTypes()
  const { carsData, isLoading, isError } = useCarDetails()

  const dropdownData: { type: string[]; fuel_type: string[] } = useMemo(
    () => ({
      type: carTypes[0]?.data?.map(type => type.name) || [""],
      fuel_type: [...new Set(carsData?.map(({ fuelType }) => fuelType))],
    }),
    [carsData, carTypes],
  )

  if (isLoading) return <Loading />
  if (isError) return <NotFound />
  return (
    <NewCarFormWrapper
      onCancel={() => setForm(INITIAL_FORM_VALUES)}
      saveButtonText={isSubmitting ? "Adding Car..." : "Add Car"}
      onSubmit={() => handleSubmit()}
    >
      {formFieldsData.map(el => (
        <InputField
          key={el.title}
          type={el.type}
          span={el.span}
          title={el.title}
          name={el.name}
          value={form[el.name]}
          onChange={handleFormDataChange}
          setForm={setForm}
          placeholder={el.placeholder}
          dropdownData={dropdownData[el.name as CarFieldNames]}
        />
      ))}
    </NewCarFormWrapper>
  )
}

export default NewCarForm
