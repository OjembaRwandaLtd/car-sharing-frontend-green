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
    const { userId, token } = response.data
    localStorage.setItem("token", token)
    localStorage.setItem("userId", userId)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error("Invalid credentials")
    }
    throw error
  }
}
