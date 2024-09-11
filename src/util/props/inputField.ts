import { ReactElement } from "react"

export interface InputFieldProps {
  key: string
  span: boolean
  title?: string
  name: string
  icon?: ReactElement
  placeholder: string
  dropdownData?: string[]
  value: string
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string
      type: string
      license_plate: string
      horse_power: string
      fuel_type: string
      additional_information: string
    }>
  >
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
