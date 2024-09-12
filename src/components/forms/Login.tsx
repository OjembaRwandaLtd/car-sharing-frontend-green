import { ReactElement } from "react"
import HomeTitle from "../../components/ui/HomeTitle"
import Button from "../../components/ui/Button"
import { KeyIcon, ProfileIcon } from "../../assets"
import { ToastContainer } from "react-toastify"

interface Props {
  formData: { username: string; password: string }
  handleChange: <T extends HTMLInputElement>(e: React.ChangeEvent<T>) => void
  handleSubmit: (e: React.FormEvent) => void
  isError: boolean
}

const LoginForm = ({ formData, handleChange, handleSubmit, isError }: Props): ReactElement => (
  <>
    <HomeTitle />
    <ToastContainer theme="colored" />

    <h2 className="mb-8 mt-28 text-center font-lora text-xl font-medium text-white">Log In</h2>
    <form
      className="spacing-3 flex flex-col items-center space-y-4 pb-10"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="input">
        <ProfileIcon className="text-white" />
        <input
          type="text"
          id="username"
          placeholder="Username / e-mail"
          value={formData.username}
          className="w-72"
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
          className="w-72"
          onChange={handleChange}
        />
      </div>

      {isError && (
        <p className="mx-6 text-center text-Lachs">
          Your login attempt was not successful. Please make sure your user name and password are
          correct.
        </p>
      )}
      <div className="pt-12">
        <Button value="Log In" handleClick={handleSubmit} />
      </div>
    </form>
  </>
)

export default LoginForm
