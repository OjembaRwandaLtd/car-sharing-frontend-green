import { FormEvent, ReactElement, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Routes from "../../routes"
import LoginForm from "../forms/Login"
import { LoggedInUserContext } from "../layout"
import { login } from "../../api/auth"

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
      await login(username, password)
      setUserIsLoggedIn(true)
      navigate(Routes.HOME)
    } catch (error) {
      console.error("Login error:", error)
      setHasError(true)
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
