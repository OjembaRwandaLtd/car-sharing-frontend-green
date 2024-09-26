import { toast } from "react-toastify"
import { createContext, ReactElement, useContext, useState } from "react"
import { ErrorContextType } from "../../util/props/inputField"
import { INITIAL_FORM_VALUES } from "../../util/newCarData"
import { useCarTypes } from "../../hooks"
import NewCarForm from "../forms/AddNewCar"
import { apiPost } from "../../api"
import { NewCarData } from "../../util/props/newCar"

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
  const validateForm = () => {
    setIsSubmitting(true)
    if (Object.entries(form).some(el => el[1] === "" && el[0] !== "additional_information")) {
      setIsSubmitting(false)
      return notify("All fields are required!", "error")
    }
    if (inputHasErrors) {
      setIsSubmitting(false)
      return notify("Form has errors", "error")
    }
    setInputHasErrors(false)
    const carTypeId = cartypes[0]?.data?.filter(el => el.name === form.type)[0].id
    const data = {
      carTypeId,
      name: form.name,
      fuelType: form.fuel_type,
      licensePlate: form.license_plate,
      info: form.additional_information,
      horsepower: Number(form.horse_power),
    }
    submitForm(data)
  }

  const submitForm = async (data: NewCarData) => {
    try {
      const response = await apiPost("cars", data)
      if (response.status === 201) {
        notify("Car added successfully")
        setForm(INITIAL_FORM_VALUES)
      }
    } catch (error) {
      if (error instanceof Error) notify(`Car with given plate exists!`, "error")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <ErrorContext.Provider value={{ inputHasErrors, setInputHasErrors }}>
      <NewCarForm
        form={form}
        setForm={setForm}
        handleSubmit={validateForm}
        handleFormDataChange={handleFormDataChange}
        isSubmitting={isSubmitting}
      />
    </ErrorContext.Provider>
  )
}

export default AddNewCarSection
