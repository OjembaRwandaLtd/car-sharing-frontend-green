import { ToastContainer } from "react-toastify"
import Title from "../ui/Title"
import { INITIAL_FORM_VALUES, formData } from "../../util/newCarData"
import InputField from "../ui/InputField"
import Button from "../ui/Button"
import { useCarDetails, useCarTypes } from "../../hooks"
import Loading from "../ui/Loading"
import NotFound from "../../pages/404"
import { NewCarProps } from "../../util/props/newCar"

const NewCarForm = ({
  form,
  setForm,
  handleFormDataChange,
  handleSubmit,
  isSubmitting,
}: NewCarProps) => {
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
  const dropdownData = [carTypeDropdownData, fueltypeDropdownData]
  if (isLoading) return <Loading />
  if (isError) return <NotFound />
  return (
    <form className="px-3 pb-5 md:mx-32 lg:mx-40 " autoComplete="off">
      <ToastContainer theme="colored" />
      <Title text="New Car" />
      <div className="grid grid-cols-2 lg:space-y-3">
        {formData.map((el, i) => {
          const formValues = Object.entries(form)
          return (
            <InputField
              key={el.title}
              {...(el.type ? { type: el.type } : { type: "text" })}
              {...(el.span ? { span: el.span } : { span: false })}
              title={el.title}
              name={el.title.toLowerCase().split(" ").join("_")}
              value={formValues[i][1]}
              onChange={handleFormDataChange}
              setForm={setForm}
              placeholder={el.placeholder}
              {...(el.dropdownData ? { dropdownData: dropdownData.shift() } : {})}
            />
          )
        })}
      </div>
      <div className="mx-auto mt-24 flex w-fit gap-1">
        <Button
          width="regular"
          value="Cancel"
          type="outline"
          handleClick={() => setForm(INITIAL_FORM_VALUES)}
        />
        <Button
          width="regular"
          value={isSubmitting ? "Adding Car..." : "Add Car"}
          handleClick={() => handleSubmit()}
        />
      </div>
    </form>
  )
}

export default NewCarForm
