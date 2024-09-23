import axios from "axios"
import { apiUrl } from "../util/apiUrl"
import { getAuthToken } from "../util/auth"

const getHeaders = (addAuth: boolean) => ({
  Authorization: addAuth && `Bearer ${getAuthToken()}`,
  "Content-Type": "application/json",
})

const apiGet = async (path: string, addAuth = true) =>
  axios.get(`${apiUrl}/${path}`, {
    headers: getHeaders(addAuth),
  })

const apiPost = async <T>(url: string, data: T, addAuth = true) =>
  axios.post(`${apiUrl}/${url}`, data, {
    headers: getHeaders(addAuth),
  })

const apiDelete = async (url: string, id: number | null, addAuth = true) =>
  axios.delete(`${apiUrl}/${url}/${id}`, {
    headers: getHeaders(addAuth),
  })

export { apiGet, apiPost, apiDelete }
