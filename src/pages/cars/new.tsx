import { ReactElement, useState } from "react"
import axios from "axios"
import { apiUrl } from "../../util/apiUrl"
import { getAuthToken } from "../../util/auth"
import { toast } from "react-toastify"
import { INITIAL_FORM_VALUES } from "../../util/newCarData"
import NewCarForm from "../../components/forms/NewCar"
import { useCarTypes } from "../../hooks"

const AddNewCar = (): ReactElement => {
  const [form, setForm] = useState(INITIAL_FORM_VALUES)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const notify = (message: string) => toast.info(message)
  const cartypes = useCarTypes()

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const carTypeId = cartypes[0]?.data?.filter(el => el.name === form.type)[0].id

      const requestData = {
        carTypeId: carTypeId,
        name: form.name,
        fuelType: form.fuel_type,
        licensePlate: form.license_plate,
        info: form.additional_information,
        horsepower: Number(form.horse_power),
      }
      const response = await axios.post(`${apiUrl}/cars`, requestData, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          "Content-Type": "application/json",
        },
      })
      if (response.status === 201) {
        notify("Car added successfully")
        setForm(INITIAL_FORM_VALUES)
      }
    } catch (error) {
      notify("Couldn't add car, Check if all fields are filled!")
      // notify(error.message)
      console.error("Error adding car:", error)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <NewCarForm
      form={form}
      setForm={setForm}
      handleSubmit={handleSubmit}
      handleFormDataChange={handleFormDataChange}
      isSubmitting={isSubmitting}
    />
  )
}

export default AddNewCar
