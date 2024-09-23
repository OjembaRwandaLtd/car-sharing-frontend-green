import { FormEvent, ReactElement, useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Routes from "../../routes"
import LoginForm from "../forms/Login"
import { LoggedInUserContext } from "../layout"
import { apiPost } from "../../api"

const Login = (): ReactElement => {
  const { setUserIsLoggedIn } = useContext(LoggedInUserContext)

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate()
  const [hasError, setHasError] = useState(false)
  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
    setHasError(false)
  }
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    const { username, password } = formData
    if (!username || !password) {
      setHasError(true)
      return
    }
    try {
      const response = await apiPost("auth", formData)
      const { userId, token } = response.data
      localStorage.setItem("token", token)
      localStorage.setItem("userId", userId)
      setUserIsLoggedIn(true)
      navigate(Routes.HOME)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setHasError(true)
      }
    }
  }

  return (
    <LoginForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleLogin}
      hasError={hasError}
    />
  )
}
export default Login
