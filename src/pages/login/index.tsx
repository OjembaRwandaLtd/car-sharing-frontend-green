import { FormEvent, ReactElement, useState } from "react"
import HomeTitle from "../../components/ui/HomeTitle"
import Button from "../../components/ui/Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Routes from "../../routes"
import { apiUrl } from "../../util/apiUrl"

const LogIn = (): ReactElement => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)

  const handleChange = <T extends HTMLInputElement>(e: React.ChangeEvent<T>) => {
    const { value, name } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${apiUrl}/auth`, formData)
      const { userId, token } = response.data
      localStorage.setItem("token", token)
      localStorage.setItem("userId", userId)

      navigate(Routes.HOME)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setIsError(true)
      }
    }
  }
  return (
    <>
      <HomeTitle />

      <h2 className="mb-8 mt-36 text-center font-lora text-xl font-medium text-white">Log In</h2>
      <form className="spacing-3 mb-8 flex flex-col items-center space-y-3" onSubmit={handleLogin}>
        <input
          type="name"
          id="username"
          placeholder="username/email"
          value={formData.username}
          name="username"
          className="input input-bordered w-80 rounded-full"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          className="input input-bordered w-80 rounded-full"
        />
        {isError && (
          <p className="flex flex-col text-center text-lg text-red-400">
            Your login attempt was not successful.
            <span>Please make sure your user name and password are correct.</span>
          </p>
        )}
        <Button value="Log In" />
      </form>
    </>
  )
}

export default LogIn
