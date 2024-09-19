export const INITIAL_FORM_VALUES = {
  name: "",
  type: "",
  license_plate: "",
  horse_power: "",
  fuel_type: "",
  additional_information: "",
}

export type carFieldNames =
  | "name"
  | "type"
  | "license_plate"
  | "horse_power"
  | "fuel_type"
  | "additional_information"

type FormField = {
  title: string
  name: carFieldNames
  dropdownData?: boolean
  span?: boolean
  placeholder: string
  type?: string
}

export const formFieldsData: FormField[] = [
  { title: "Name", placeholder: "e.g. My Nice Moni Car", name: "name" },
  {
    title: "Type",
    placeholder: "e.g. Moni Cooper",
    dropdownData: true,
    name: "type",
  },
  {
    title: "License Plate",
    placeholder: "e.g. M-XY 123",
    span: true,
    name: "license_plate",
  },
  {
    title: "Horse Power",
    placeholder: "110",
    span: true,
    type: "number",
    name: "horse_power",
  },
  {
    title: "Fuel type",
    placeholder: "e.g. Gasoline",
    dropdownData: true,
    name: "fuel_type",
  },
  {
    title: "Additional information",
    placeholder: "e.g. No smoking",
    name: "additional_information",
  },
]
