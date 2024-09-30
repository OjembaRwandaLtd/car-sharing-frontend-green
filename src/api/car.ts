import { apiGet } from "."

export const getCar = async (id: number) => {
  const { data } = await apiGet(`cars/${id}`)
  return data
}

export const getAllCars = async () => {
  const { data } = await apiGet(`cars`)

  return data
}
