import { Dispatch, SetStateAction } from "react"

export interface NewCarProps {
  form: {
    name: string
    type: string
    license_plate: string
    horse_power: string
    fuel_type: string
    additional_information: string
  }
  setForm: Dispatch<
    SetStateAction<{
      name: string
      type: string
      license_plate: string
      horse_power: string
      fuel_type: string
      additional_information: string
    }>
  >
  handleSubmit: () => void
  handleFormDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isSubmitting: boolean
}

export interface FormState {
  [key: string]: string
}
