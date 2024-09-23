import axios from "axios"
import { apiUrl } from "../util/apiUrl"
import { getAuthToken } from "../util/auth"

const getHeaders = () => ({
  Authorization: `Bearer ${getAuthToken()}`,
  "Content-Type": "application/json",
})

const apiGet = async (path: string) =>
  axios.get(`${apiUrl}/${path}`, {
    headers: getHeaders(),
  })

const apiPost = async <T>(url: string, data: T) =>
  axios.post(`${apiUrl}/${url}`, data, {
    headers: getHeaders(),
  })

const apiDelete = async (url: string, id: number | null) =>
  axios.delete(`${apiUrl}/${url}/${id}`, {
    headers: getHeaders(),
  })

export { apiGet, apiPost, apiDelete }
