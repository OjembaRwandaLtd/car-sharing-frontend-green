import { toast } from "react-toastify"
import { createContext, ReactElement, useContext, useState } from "react"
import { ErrorContextType } from "../../util/props/inputField"
import { INITIAL_FORM_VALUES } from "../../util/newCarData"
import { useCarTypes } from "../../hooks"
import NewCarForm from "../forms/NewCar"
import { apiPost } from "../../api"

export const useErrorContext = () => {
  const context = useContext(ErrorContext)
  if (context === undefined) {
    throw new Error("useErrorContext must be used within an ErrorProvider")
  }
  return context
}
const ErrorContext = createContext<ErrorContextType | undefined>(undefined)

const AddNewCarSection = (): ReactElement => {
  const [inputHasErrors, setInputHasErrors] = useState(false)

  const [form, setForm] = useState(INITIAL_FORM_VALUES)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const notify = (message: string, type = "info") =>
    type === "error" ? toast.error(message) : toast.info(message)
  const cartypes = useCarTypes()

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      if (Object.entries(form).some(el => el[1] === "" && el[0] !== "additional_information")) {
        setIsSubmitting(false)
        return notify("All fields are required!")
      }
      if (inputHasErrors) return notify("Form has errors")
      setInputHasErrors(false)
      const carTypeId = cartypes[0]?.data?.filter(el => el.name === form.type)[0].id

      const requestData = {
        carTypeId,
        name: form.name,
        fuelType: form.fuel_type,
        licensePlate: form.license_plate,
        info: form.additional_information,
        horsepower: Number(form.horse_power),
      }
      const response = await apiPost("/cars", requestData)
      if (response.status === 201) {
        notify("Car added successfully")
        setForm(INITIAL_FORM_VALUES)
      }
    } catch (error) {
      if (error instanceof Error) notify(error.message)
      else notify("Failed to add car.", "error")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <ErrorContext.Provider value={{ inputHasErrors, setInputHasErrors }}>
      <NewCarForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        handleFormDataChange={handleFormDataChange}
        isSubmitting={isSubmitting}
      />
    </ErrorContext.Provider>
  )
}

export default AddNewCarSection
