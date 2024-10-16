import classNames from "classnames"
import { ReactElement } from "react"

interface ButtonProp {
  text: string
  type?: "default" | "outline" | "disabled" | "outlineLachs"
  width?: "default" | "regular"
  buttonType?: "button" | "submit" | "reset"
  onClick?: (e: React.FormEvent) => void
}
const Button = ({
  text,
  type = "default",
  width = "default",
  buttonType = "button",
  onClick,
}: ButtonProp): ReactElement => {
  const defaultStyles = "btn h-11 rounded-full mx-auto font-inter font-bold"
  const buttonWidth = {
    default: "w-80",
    regular: "w-44",
  }
  const buttonTypeStyle = {
    default: "bg-secondary-200 hover:bg-secondary-200 text-primary-800 text-sm ",
    outline:
      "btn-outline hover:bg-transparent hover:border-white hover:text-white border-2 border-white text-white",
    disabled: "bg-secondary-400 hover:bg-secondary-400 text-primary-800",
    outlineLachs:
      "btn-outline hover:bg-transparent hover:border-Lachs hover:text-Lachs border-2 border-Lachs text-Lachs",
  }
  const buttonClasses = classNames(defaultStyles, buttonWidth[width], buttonTypeStyle[type])

  return (
    <div className="align-center flex">
      <button type={buttonType} onClick={onClick} className={buttonClasses}>
        {text}
      </button>
    </div>
  )
}
export default Button
