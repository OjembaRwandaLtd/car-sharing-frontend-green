import { FormEvent, ReactElement, useState } from "react"
import HomeTitle from "../../components/ui/HomeTitle"
import Button from "../../components/ui/Button"
import axios from "axios"

const LogIn = (): ReactElement => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const handleChange = <T extends HTMLInputElement>(e: React.ChangeEvent<T>) => {
    const { value, name } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    const response = await axios.post("http://3.69.78.92/auth", formData)
    localStorage.setItem("token", response.data.token)
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
        <Button value="Log In" />
      </form>
    </>
  )
}

export default LogIn
