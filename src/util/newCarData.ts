export const INITIAL_FORM_VALUES = {
  name: "",
  type: "",
  license_plate: "",
  horse_power: "",
  fuel_type: "",
  additional_information: "",
}
export const formData = [
  { title: "Name", placeholder: "e.g. My Nice Moni Car" },
  {
    title: "Type",
    placeholder: "e.g. Moni Cooper",
    dropdownData: true,
  },
  {
    title: "License Plate",
    placeholder: "e.g. M-XY 123",
    span: true,
  },
  {
    title: "Horse Power",
    placeholder: "110",
    span: true,
    type: "number",
  },
  {
    title: "Fuel type",
    placeholder: "e.g. Gasoline",
    dropdownData: true,
  },
  {
    title: "Additional information",
    placeholder: "e.g. No smoking",
  },
]
