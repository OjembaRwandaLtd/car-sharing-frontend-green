import { apiUrl } from "../util/apiUrl"
import { getAuthToken } from "../util/auth"
import useAxios from "axios-hooks"
import { UserDto } from "../util/api"

export default function useLoggedInUser() {
  return useAxios<UserDto>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/auth`,
  })
}
