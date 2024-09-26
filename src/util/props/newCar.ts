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

export interface Car {
  id: number
  carImage: string
  carName: string
  carOwner: string
}

export type NewCarData = {
  carTypeId: number | undefined
  name: string
  licensePlate: string
  info: string
  horsepower: number
}
