import { FormEvent, ReactElement, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Routes from "../../routes"
import { apiUrl } from "../../util/apiUrl"
import LoginForm from "../forms/Login"

const Login = (): ReactElement => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
    setIsError(false)
  }
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.username || !formData.password) {
      setIsError(true)
    }
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
    <LoginForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleLogin}
      isError={isError}
    />
  )
}
export default Login
