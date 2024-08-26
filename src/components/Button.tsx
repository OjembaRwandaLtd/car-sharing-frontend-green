interface ButtonProp {
  value: string
  border: string
  textColor: string
  backgroundColor: string
  handleNavigation?: () => void
}
const Button = ({ value, border, textColor, handleNavigation }: ButtonProp): React.ReactElement => (
  <button
    onClick={() => {
      if (handleNavigation) return handleNavigation()
    }}
    className={`h-11 w-80 rounded-3xl font-inter text-sm ${border} ${textColor} text-center `}
  >
    {value}
  </button>
)
export default Button
