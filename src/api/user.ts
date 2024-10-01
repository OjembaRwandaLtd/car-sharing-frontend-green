import { apiGet } from "."
export const getUser = async (id: number) => {
  const { data } = await apiGet(`users/${id}`)
  return data
}
export const getAllUsers = async () => {
  const { data } = await apiGet(`users/`)
  return data
}
