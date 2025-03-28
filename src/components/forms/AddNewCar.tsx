import { INITIAL_FORM_VALUES, formFieldsData } from "../../util/newCarData"
import InputField from "../ui/inputField"
import { useCarDetails, useCarTypes } from "../../hooks"
import Loading from "../ui/Loading"
import NotFound from "../../pages/404"
import { NewCarProps } from "../../util/props/newCar"
import { useMemo } from "react"
import Button from "../ui/Button"
import { ToastContainer } from "react-toastify"

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
    <form className="px-3 pb-5 md:mx-32 lg:mx-40" autoComplete="off">
      <ToastContainer theme="colored" />
      <div className="grid grid-cols-2 space-y-3">
        {formFieldsData.map(el => (
          <>
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
          </>
        ))}
      </div>
      <div className="mx-auto mt-24 flex w-fit gap-1">
        <Button
          width="regular"
          text="Cancel"
          type="outline"
          onClick={() => setForm(INITIAL_FORM_VALUES)}
        />
        <Button
          width="regular"
          text={isSubmitting ? "Adding Car..." : "Add Car"}
          onClick={() => handleSubmit()}
        />
      </div>
    </form>
  )
}

export default NewCarForm
