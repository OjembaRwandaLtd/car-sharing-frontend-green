import axios from "axios"
import { apiPost } from "."

export const login = async (username: string, password: string) => {
  try {
    const response = await apiPost(
      "auth",
      {
        username,
        password,
      },
      false,
    )
    const { token } = response.data
    localStorage.setItem("token", token)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error("Invalid credentials")
    }
    throw error
  }
}
