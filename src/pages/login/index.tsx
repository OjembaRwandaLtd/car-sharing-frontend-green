import { FormEvent, ReactElement, useState } from "react"
import HomeTitle from "../../components/ui/HomeTitle"
import Button from "../../components/ui/Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Routes from "../../routes"
import { apiUrl } from "../../util/apiUrl"
import { KeyIcon, ProfileIcon } from "../../assets"
import { toast, ToastContainer } from "react-toastify"

const LogIn = (): ReactElement => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate()
  const [isError, setIsError] = useState(true)
  const notify = (message: string) => toast.info(message)

  const handleChange = <T extends HTMLInputElement>(e: React.ChangeEvent<T>) => {
    const { value, name } = e.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
    setIsError(false)
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    if (isError)
      return notify(
        "Your login attempt was not successful. Please make sure your user name and password are correct.",
      )

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
      <ToastContainer theme="colored" />

      <h2 className="mb-8 mt-28 text-center font-lora text-xl font-medium text-white">Log In</h2>
      <form
        className="spacing-3  flex flex-col items-center space-y-4 pb-10 "
        onSubmit={handleLogin}
        autoComplete="off"
      >
        <div className="input">
          <ProfileIcon className="text-white" />
          <input
            type="name"
            id="username"
            placeholder="Username / e-mail"
            value={formData.username}
            className=" w-72 "
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <KeyIcon />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            className=" w-72 "
            onChange={handleChange}
          />
        </div>

        <div className="pt-16">
          <Button value="Log In" handleClick={handleLogin} />
        </div>
      </form>
    </>
  )
}

export default LogIn
